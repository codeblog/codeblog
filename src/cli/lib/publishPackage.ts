import Bluebird from "bluebird";
import fs from "fs";
import { fromPairs } from "lodash";
import path from "path";
import { rollup } from "rollup";
import { Stream } from "stream";
import streamLength from "stream-length";
import tar from "tar-stream";
import zlib from "zlib";
import {
  compilePackageJSFile,
  convertPackageJSToJSON
} from "./createPackagejSON";
import {
  jsFileName,
  jsFilePath,
  packageJSFilename,
  packageJSFilePath,
  tgzFilePath,
  tgzFileName,
  outputPath
} from "./packageUtils";
import { buildConfig, NODE_MODULES } from "./rollup";
import { exec } from "child_process";

const _fs = fs.promises;

type FileMap = {
  [filepath: string]: Stream | string;
};

const getYarnPath = () => {
  if (process.env.NODE_ENV === "production") {
    return __non_webpack_require__.resolve("yarn/lib/cli");
  } else {
    return require.resolve("yarn/lib/cli");
  }
};

export const runYarnInstall = (cwd: string) => {
  return new Promise((resolve, reject) => {
    exec(
      `cd ${cwd} && node ${getYarnPath()} install --no-lockfile --non-interactive --no-bin-links --ignore-engines --skip-integrity-check`,
      err => {
        if (err) {
          reject(
            err.message.indexOf("versions") >= 0
              ? new Error("INVALID_VERSION")
              : err
          );
        } else {
          resolve();
        }
      }
    );
  });
};

export const buildPackage = async (
  packageName: string,
  packagePath: string
) => {
  const packageJSCode = await compilePackageJSFile(
    packageJSFilePath(packageName, packagePath)
  );
  const packageJSON = await convertPackageJSToJSON(packageJSCode, packageName);

  const files: FileMap = {
    "package.json": packageJSON,
    [`dist/${packageJSFilename(packageName)}`]: packageJSCode,
    [`src/${packageJSFilename(packageName)}`]: fs.readFileSync(
      packageJSFilePath(packageName, packagePath),
      "utf8"
    ),
    [`src/${jsFileName(packageName)}`]: fs.readFileSync(
      jsFilePath(packageName, packagePath),
      "utf8"
    )
  };

  const _outputPath = outputPath(packageName, packagePath, "release");

  try {
    await _fs.mkdir(path.join(_outputPath, "dist"), {
      recursive: true
    });
  } catch (exception) {}

  try {
    await _fs.mkdir(path.join(_outputPath, "src"), {
      recursive: true
    });
  } catch (exception) {}

  await Bluebird.map(
    Object.keys(files),
    _filePath => {
      const filePath = path.join(_outputPath, _filePath);
      return _fs.writeFile(filePath, files[_filePath], {
        encoding: "utf8"
      });
    },
    { concurrency: 2 }
  );

  await runYarnInstall(_outputPath);

  const metadata = JSON.parse(packageJSON);

  const rollupConfig = buildConfig(
    packageName,
    packagePath,
    "release",
    metadata.name,
    Object.keys(metadata.dependencies || {})
  );

  const { output: outputs, ..._rollupConfig } = rollupConfig;

  const rolledUp = await rollup(_rollupConfig);
  const bundles = fromPairs(
    await Promise.all(
      outputs.map(async outputOptions => {
        const result = await rolledUp.generate(outputOptions);
        const {
          output: [{ code, fileName }]
        } = result;

        return [
          path.join("dist", path.basename(fileName, ".js") + ".js"),
          code
        ];
      })
    )
  );

  const _files = Object.assign(files, bundles);
  return { files: _files, metadata: packageJSON };
};

export const buildTGZ = async (files: FileMap) => {
  const pack = tar.pack();

  await Bluebird.map(
    Object.keys(files),
    filePath => {
      const content = files[filePath];

      if (typeof content === "string") {
        return new Bluebird((resolve, reject) => {
          pack.entry({ name: filePath }, content, err => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve();
            }
          });
        });
      } else {
        return new Bluebird((resolve, reject) => {
          return streamLength(content).then(size => {
            const entry = pack.entry({ name: filePath, size }, (err, ...a) => {
              if (err) {
                reject(err);
              } else {
                console.error(a);
                resolve();
              }
            });
            content.pipe(entry);
          });
        });
      }
    },
    { concurrency: 1 }
  );
  pack.finalize();
  return pack;
};

export const saveTGZ = (
  tarStream: Stream,
  packageName: string,
  packagePath: string
): Promise<Stream> => {
  return new Promise((resolve, reject) => {
    const _tgzPath = path.join(
      outputPath(packageName, packagePath, "release"),
      tgzFileName(packageName)
    );
    const writeStream = fs.createWriteStream(_tgzPath);

    const gzip = zlib.createGzip();

    tarStream
      .pipe(gzip)
      .pipe(writeStream)
      .on("close", () => {
        fs.stat(_tgzPath, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(fs.createReadStream(_tgzPath));
        });
      });
  });
};

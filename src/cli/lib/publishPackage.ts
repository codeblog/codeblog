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
  tgzFilePath
} from "./packageUtils";
import { buildConfig, outputPath, NODE_MODULES } from "./rollup";
import { exec } from "child_process";

const _fs = fs.promises;

type FileMap = {
  [filepath: string]: Stream | string;
};

export const runYarnInstall = (cwd: string) => {
  const YARN_PATH = path.resolve(NODE_MODULES, "yarn", "lib", "cli.js");

  return new Promise((resolve, reject) => {
    exec(
      `cd ${cwd} && node ${YARN_PATH} install --no-lockfile --non-interactive --no-bin-links --ignore-engines --skip-integrity-check`,
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
    [`src/${packageJSFilename(packageName)}`]: fs.createReadStream(
      packageJSFilePath(packageName, packagePath)
    ),
    [`src/${jsFileName(packageName)}`]: fs.createReadStream(
      jsFilePath(packageName, packagePath)
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
    JSON.parse(packageJSON).dependencies
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

  Object.assign(files, bundles);

  return { files, metadata: packageJSON };
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
              reject(err);
            } else {
              resolve();
            }
          });
        });
      } else {
        return new Bluebird(async (resolve, reject) => {
          const size = await streamLength(content);

          const entry = pack.entry({ name: filePath, size }, err => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });

          content.pipe(entry);
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
    const _tgzPath = tgzFilePath(packageName, packagePath);
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

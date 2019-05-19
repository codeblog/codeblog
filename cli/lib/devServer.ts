import express from "express";
import fg from "fast-glob";
import path from "path";
import cors from "cors";
import { buildConfig, NODE_MODULES } from "./rollup";
import * as rollup from "rollup";
import fs from "fs";
import {
  compilePackageJSFile,
  convertPackageJSToJSON,
  savePackageJS,
  savePackageJSON,
  resolveGlobal
} from "./createPackagejSON";
import { packageJSFilePath, clearOutputPath, outputPath } from "./packageUtils";
import localtunnel from "localtunnel";
import getPort from "get-port";
import { CategoryType } from "codeblog/dist/registry";
import { clearDevServer, setDevServer } from "./api";
import SocketIO from "socket.io";
import { memoize } from "lodash";
import { runYarnInstall } from "./publishPackage";
import rimraf from "rimraf";

export enum ErrorCodes {
  compile_package_js_error = "compile_package_js_error",
  package_js_to_json_error = "package_js_to_json_error",
  compile_js_error = "compile_js_error"
}

const getVersion = memoize(() => {
  const { version } = JSON.parse(
    fs.readFileSync(
      path.join(resolveGlobal("codeblog"), "../../package.json"),
      "utf8"
    )
  );

  return version;
});

let tunnel;
let socket;

const server = express();
server.use(cors());
const _packages = {};
const packageStore = () => _packages;

const getPackages = () => {
  const list = {
    Inlines: {},
    Blocks: {}
  };

  Object.keys(packageStore()).map(pkgID => {
    const { src, registration = {}, id } = packageStore()[pkgID];

    const _registration = {
      ...registration,
      isRemote: true,
      isDevelopment: true,
      id,
      name: id,
      src
    };

    if (_registration.category === CategoryType.text) {
      list.Inlines[id] = _registration;
    } else {
      list.Blocks[id] = _registration;
    }
  });

  return list;
};

server.get("/packages", (_req, res) => {
  res.send(getPackages());
});

server.get("/version", (_req, res) => {
  res.send({
    version: getVersion()
  });
});

const findComponentPathsInFolder = (folderPath: string) => {
  return fg([`*.package.js`], {
    cwd: folderPath,
    onlyFiles: true,
    unique: true,
    absolute: true
  });
};

const processPackageJS = async (
  packageName: string,
  packagePath: string,
  mode: "dev" | "release"
) => {
  let packageJSCode, packageJSON, _packageJSON;

  if (!packageStore()[packageName]) {
    packageStore()[packageName] = {};
  }

  try {
    packageJSCode = await compilePackageJSFile(
      packageJSFilePath(packageName, packagePath)
    );
  } catch (exception) {
    packageStore()[packageName].packageJSErrorCode =
      ErrorCodes.compile_package_js_error;
    packageStore()[packageName].packageJSError = exception;
  }

  await savePackageJS(packageName, packagePath, "dev", packageJSCode);

  try {
    packageJSON = await convertPackageJSToJSON(
      packageJSCode,
      packageName,
      packageJSFilePath(packageName, packagePath)
    );
    _packageJSON = JSON.parse(packageJSON);
  } catch (exception) {
    packageStore()[packageName].packageJSErrorCode =
      ErrorCodes.package_js_to_json_error;
    packageStore()[packageName].packageJSError = exception;
  }

  if (packageStore()[packageName]) {
    packageStore()[packageName].id = _packageJSON.name;
    packageStore()[packageName].packageJSError = null;
    packageStore()[packageName].packageJSErrorCode = null;
    packageStore()[packageName].registration = _packageJSON.codeblog;
  }

  await savePackageJSON(packageName, packagePath, "dev", packageJSON);

  return _packageJSON;
};

const watchPackageJS = (packageName: string, packagePath: string) => {
  fs.watch(
    packageJSFilePath(packageName, packagePath),
    {
      encoding: "utf8",
      persistent: true
    },
    async (event: string, filename: string) => {
      await processPackageJS(packageName, packagePath, "dev");
      await runYarnInstall(outputPath(packageName, packagePath, "dev"));

      console.log("Updated", packageName);
      socket.emit(packageStore()[packageName].id, getPackages());
    }
  );
};

export async function loadComponentDevServer(
  packageName: string,
  packagePath: string
) {
  if (packageStore()[packageName]) {
    return;
  }

  const _outputPath = outputPath(packageName, packagePath, "dev");
  await clearOutputPath(packageName, packagePath, "dev");

  const packageJSON = await processPackageJS(packageName, packagePath, "dev");

  if (!packageJSON || !packageJSON.name || !packageJSON.codeblog) {
    console.error(`[${packageName}] Fatal error! :(`);
    console.log(`Check that:`);
    console.log(`1. ${packageJSFilePath(packageName, packagePath)} exists`);
    console.log(`2. It should be valid JavaScript.`);
    console.log(
      `3. The above file should export default (or module.exports =) a valid package.json manifest`
    );
    console.log(`4. This directory is writable: ${_outputPath}`);
    console.log(`5. You have some free disk space (doesn't need much)`);
    console.log(`Feel free to reach out for help.`);
    process.exit();
    return;
  }

  await runYarnInstall(_outputPath);

  packageStore()[packageName] = {
    id: packageJSON.name,
    registration: packageJSON.codeblog
  };

  packageStore()[packageName].manifest = watchPackageJS(
    packageName,
    packagePath
  );

  const componentConfig = buildConfig(
    packageName,
    packagePath,
    "dev",
    packageJSON.name,
    Object.keys(packageJSON.dependencies || {})
  );

  const watcher = rollup.watch([componentConfig]);

  watcher.on("event", async (event, ...other) => {
    console.log(event);
    if (event.code === "BUNDLE_END") {
      packageStore()[packageName].src = `${
        tunnel.url
      }/components/${packageName}/${path.basename(event.output[0])}.js`;
      console.log("Updated", packageName);

      socket.emit(packageStore()[packageName].id, getPackages());
    }
  });

  packageStore()[packageName].component = watcher;

  console.log(`Loaded ${packageName} in ${packagePath}`);

  server.use(`/components/${packageName}`, express.static(_outputPath));

  return packageName;
}

export async function loadComponentDevServerForFolder(folderPath: string) {
  const results = await findComponentPathsInFolder(folderPath);
  const components = await Promise.all(
    results.map(packageJSPath => {
      const packageName = path.basename(
        packageJSPath.toString(),
        ".package.js"
      );
      return loadComponentDevServer(packageName, folderPath);
    })
  );

  socket.on("connection", client => {
    client.emit("packages", getPackages());
  });
  socket.emit("packages", getPackages());

  return components;
}

export async function startServer() {
  const port = await getPort({ port: Number(process.env.PORT || 49374) });

  return await new Promise((resolve, reject) => {
    const httpServer = server.listen(port, _httpServer => {
      localtunnel(port, (err, _tunnel) => {
        tunnel = _tunnel;

        if (err) {
          reject(err);
          return;
        } else {
          return setDevServer({ url: tunnel.url, options: {} }).then(() => {
            process.once("beforeExit", () => {
              clearDevServer({});
            });

            console.log("Codeblog dev server started:", tunnel.url);
            resolve(_tunnel.url);
          });
        }
      });
    });

    socket = SocketIO(httpServer, {
      serveClient: false
    });
  });
}

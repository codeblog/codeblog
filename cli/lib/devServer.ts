import { CategoryType } from "codeblog/dist/registry";
import cors from "cors";
import debug from "debug";
import express from "express";
import fg from "fast-glob";
import fs from "fs";
import getPort from "get-port";
import localtunnel from "localtunnel";
import { memoize } from "lodash";
import path from "path";
import * as rollup from "rollup";
import SocketIO from "socket.io";
import { clearDevServer, setDevServer } from "./api";
import {
  compilePackageJSFile,
  convertPackageJSToJSON,
  resolveGlobal,
  savePackageJS,
  savePackageJSON
} from "./createPackagejSON";
import { clearOutputPath, outputPath, packageJSFilePath } from "./packageUtils";
import { runYarnInstall } from "./publishPackage";
import { buildConfig } from "./rollup";

export enum ErrorCodes {
  compile_package_js_error = "compile_package_js_error",
  package_js_to_json_error = "package_js_to_json_error",
  compile_js_error = "compile_js_error"
}

const getVersion = memoize(() => {
  const { version } = JSON.parse(
    fs.readFileSync(
      path.join(resolveGlobal("codeblog"), "../package.json"),
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

      debug("Updated", packageName);
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
    debug(`[${packageName}] Fatal error! :(`);
    debug(`Check that:`);
    debug(`1. ${packageJSFilePath(packageName, packagePath)} exists`);
    debug(`2. It should be valid JavaScript.`);
    debug(
      `3. The above file should export default (or module.exports =) a valid package.json manifest`
    );
    debug(`4. This directory is writable: ${_outputPath}`);
    debug(`5. You have some free disk space (doesn't need much)`);
    debug(`Feel free to reach out for help.`);
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
    debug(event);
    if (event.code === "BUNDLE_END") {
      packageStore()[packageName].src = `${
        tunnel.url
      }/components/${packageName}/${path.basename(event.output[0])}.js`;
      debug("Updated", packageName);

      socket.emit(packageStore()[packageName].id, getPackages());
    }
  });

  packageStore()[packageName].component = watcher;

  debug(`Loaded ${packageName} in ${packagePath}`);

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

const connectToLocalTunnel = (port: number) => {
  return new Promise((resolve, reject) => {
    localtunnel(port, (err, _tunnel) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(_tunnel);
      }
    });
  });
};

const RETRY_DELAY = 50;
const RETRY_COUNT = 3;
const connectToLocalTunnelWithRetries = async (
  port: number,
  retryCount: number = 0,
  maxRetryCount = RETRY_COUNT
) => {
  let _tunnel;
  try {
    return await connectToLocalTunnel(port);
  } catch (exception) {
    if (process.env.NODE_ENV === "development") {
      debug(exception);
    }
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve(
            connectToLocalTunnelWithRetries(port, retryCount + 1, maxRetryCount)
          ),
        RETRY_DELAY
      );
    });
  }
};

export async function startServer() {
  const port = await getPort({ port: Number(process.env.PORT || 49374) });

  const httpServer = server.listen(port, async _httpServer => {
    tunnel = await connectToLocalTunnelWithRetries(port, 0);

    await setDevServer({ url: tunnel.url, options: {} });

    process.once("beforeExit", () => {
      clearDevServer({});
    });

    debug("Codeblog dev server started:", tunnel.url);

    socket = SocketIO(_httpServer, {
      serveClient: false
    });
  });

  return [httpServer, socket];
}

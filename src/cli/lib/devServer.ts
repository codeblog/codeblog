import express from "express";
import fg from "fast-glob";
import path from "path";
import cors from "cors";
import { buildConfig, outputPath, NODE_MODULES } from "./rollup";
import * as rollup from "rollup";
import fs from "fs";
import {
  compilePackageJSFile,
  convertPackageJSToJSON,
  savePackageJS,
  savePackageJSON
} from "./createPackagejSON";
import { packageJSFilePath } from "./packageUtils";
import localtunnel from "localtunnel";
import getPort from "get-port";
import { CategoryType } from "codeblog/dist/registry";
import { clearDevServer, setDevServer } from "./api";
import SocketIO from "socket.io";
import { memoize } from "lodash";
import { runYarnInstall } from "./publishPackage";

export enum ErrorCodes {
  compile_package_js_error = "compile_package_js_error",
  package_js_to_json_error = "package_js_to_json_error",
  compile_js_error = "compile_js_error"
}

const getVersion = memoize(() => {
  const { version } = JSON.parse(
    fs.readFileSync(path.join(NODE_MODULES, "../package.json"), "utf8")
  );

  return version;
});

let tunnel;
let socket;

const server = express();
server.use(cors());
const packages = {};

const getPackages = () => {
  const list = {
    Inlines: {},
    Blocks: {}
  };

  Object.keys(packages).map(pkgID => {
    const { src, registration, id } = packages[pkgID];

    const _registration = {
      ...packages[pkgID].registration,
      isRemote: true,
      id,
      name: id,
      src
    };

    if (registration.category === CategoryType.text) {
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

  try {
    packageJSCode = await compilePackageJSFile(
      packageJSFilePath(packageName, packagePath)
    );
  } catch (exception) {
    packages[packageName].packageJSErrorCode =
      ErrorCodes.compile_package_js_error;
    packages[packageName].packageJSError = exception;
  }

  await savePackageJS(packageName, packagePath, "dev", packageJSCode);

  try {
    packageJSON = await convertPackageJSToJSON(packageJSCode, packageName);
    _packageJSON = JSON.parse(packageJSON);
  } catch (exception) {
    packages[packageName].packageJSErrorCode =
      ErrorCodes.package_js_to_json_error;
    packages[packageName].packageJSError = exception;
  }

  if (packages[packageName]) {
    packages[packageName].id = _packageJSON.name;
    packages[packageName].packageJSError = null;
    packages[packageName].packageJSErrorCode = null;
    packages[packageName].registration = _packageJSON.codeblog;
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
      socket.emit(packages[packageName].id, getPackages());
    }
  );
};

export async function loadComponentDevServer(
  packageName: string,
  packagePath: string
) {
  if (packages[packageName]) {
    return;
  }

  const packageJSON = await processPackageJS(packageName, packagePath, "dev");

  await runYarnInstall(outputPath(packageName, packagePath, "dev"));

  packages[packageName] = {
    id: packageJSON.name,
    registration: packageJSON.codeblog
  };

  packages[packageName].manifest = watchPackageJS(packageName, packagePath);

  const componentConfig = buildConfig(
    packageName,
    packagePath,
    "dev",
    packageJSON.name,
    Object.keys(packageJSON.dependencies)
  );

  const watcher = rollup.watch([componentConfig]);

  watcher.on("event", async (event, ...other) => {
    console.log(event);
    if (event.code === "BUNDLE_END") {
      packages[packageName].src = `${
        tunnel.url
      }/components/${packageName}/${path.basename(event.output[0])}.js`;
      console.log("Updated", packageName);

      socket.emit(packages[packageName].id, getPackages());
    }
  });

  packages[packageName].component = watcher;

  console.log(`Loaded ${packageName} in ${packagePath}`);

  server.use(
    `/components/${packageName}`,
    express.static(outputPath(packageName, packagePath, "dev"))
  );

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

    socket = SocketIO(httpServer);
  });
}

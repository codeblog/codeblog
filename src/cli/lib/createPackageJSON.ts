import { transformFileAsync } from "@babel/core";
import path from "path";
import fs from "fs";
import vm from "vm";
import { NODE_MODULES } from "./rollup";
import { outputPath } from "./packageUtils";

const PACKAGE_BABEL_RC = {
  plugins: [
    [
      path.join(NODE_MODULES, "babel-plugin-module-resolver"),
      {
        root: ["./"],
        alias: {
          codeblog: path.join(NODE_MODULES, "../")
        }
      }
    ],
    path.join(NODE_MODULES, "@babel/plugin-proposal-class-properties")
  ],
  presets: [
    [
      path.join(NODE_MODULES, "@babel/preset-env"),
      {
        targets: {
          browsers: "last 2 versions"
        },
        modules: "commonjs"
      }
    ],
    path.join(NODE_MODULES, "@babel/preset-react")
  ]
};

export const compilePackageJSFile = async (filepath: string) => {
  const { code } = await transformFileAsync(filepath, {
    presets: PACKAGE_BABEL_RC.presets,
    plugins: PACKAGE_BABEL_RC.plugins
  });

  return code;
};

export const convertPackageJSToJSON = (code: string, packageName: string) => {
  const script = new vm.Script(code);
  const sandbox = {
    require: require,
    module: {}
  };
  const packageJS = {
    ...script.runInNewContext(sandbox, {}),
    publishConfig: { registry: "http://npm.codeblog.codes/" },
    main: `dist/${packageName}.js`,
    browser: `dist/${packageName}.js`,
    esm: `dist/${packageName}.esm.js`
  };

  return JSON.stringify(packageJS);
};

export const savePackageJS = (
  packageName: string,
  packagePath: string,
  release: "dev" | "release",
  result: string
) => {
  const _outputPath = outputPath(packageName, packagePath, release);

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  fs.writeFileSync(path.join(_outputPath, `${packageName}.package.js`), result);
};

export const savePackageJSON = (
  packageName: string,
  packagePath: string,
  release: "dev" | "release",
  result: string
) => {
  const _outputPath = outputPath(packageName, packagePath, release);

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  fs.writeFileSync(path.join(_outputPath, `package.json`), result);
};

import { transformFileAsync } from "@babel/core";
import fs from "fs";
import path, { basename } from "path";
import vm from "vm";
import { outputPath } from "./packageUtils";
import { CODEBLOG_ROOT } from "./paths";

const PACKAGE_BABEL_RC = {
  plugins: [
    [
      require("babel-plugin-module-resolver"),
      {
        root: ["./"],
        alias: {
          codeblog: CODEBLOG_ROOT
        }
      }
    ],
    require("@babel/plugin-proposal-class-properties")
  ],
  presets: [
    [
      require("@babel/preset-env"),
      {
        targets: {
          browsers: "last 2 versions"
        },
        modules: "commonjs"
      }
    ],
    require("@babel/preset-react")
  ]
};

export const compilePackageJSFile = async (filepath: string) => {
  const { code } = await transformFileAsync(filepath, {
    presets: PACKAGE_BABEL_RC.presets,
    plugins: PACKAGE_BABEL_RC.plugins
  });

  return code;
};

export const convertPackageJSToJSON = (
  code: string,
  packageName: string,
  filepath: string
) => {
  const script = new vm.Script(code);
  const sandbox = {
    require: __non_webpack_require__,
    module: {}
  };
  let result;

  try {
    result = script.runInNewContext(sandbox, {
      displayErrors: true,
      filename: basename(filepath)
    });
  } catch (exception) {
    console.error(exception);
    console.log("---");
    console.log("This error is in", filepath);
  }

  const packageJS = {
    ...result,
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

import fs from "fs";
import { fromPairs, merge } from "lodash";
import path from "path";
import babelPlugin from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import nodeEval from "node-eval";
import {
  jsFileName,
  jsFilePath,
  packageJSFilename,
  packageJSFilePath,
  outputPath
} from "./packageUtils";
import commonjs from "rollup-plugin-commonjs";

export const NODE_MODULES = path.join(__dirname, "../../../node_modules/");

const BUNDLED_MODULES = [
  "@emotion/core",
  "@emotion/styled",
  "@emotion/styled-base",
  "classnames",
  "emotion-theming",
  "lodash",
  "moment",
  "react",
  "tinycolor2",
  "codeblog"
];

export function getModuleExports(id) {
  const moduleOut = nodeEval(fs.readFileSync(id).toString(), id, {}, true);
  let result = [];
  const excludeExports = /^(default|__)/;
  if (moduleOut && typeof moduleOut === "object") {
    result = Object.keys(moduleOut).filter(name => !excludeExports.test(name));
  }

  return result;
}

export function getNamedExports(moduleIds, paths: Array<string>) {
  const _moduleIds = moduleIds.map(id =>
    require.resolve(id, {
      paths
    })
  );
  const result = {};
  _moduleIds.forEach(id => {
    result[id] = getModuleExports(id);
  });
  return result;
}

const GLOBAL_MODULES = {
  "@emotion/core": "@emotion/core",
  "@emotion/styled": "@emotion/styled",
  "@emotion/styled-base": "@emotion/styled-base",
  classnames: "classnames",
  "emotion-theming": "emotion-theming",
  lodash: "lodash",
  moment: "moment",
  react: "react",
  tinycolor2: "tinycolor2",
  codeblog: "codeblog"
};

const BABEL_RC = {
  plugins: [
    require("babel-plugin-transform-node-env-inline"),
    require("@babel/plugin-proposal-class-properties")
  ],
  presets: [
    [
      require("@babel/preset-env"),
      {
        targets: {
          browsers: "last 2 versions"
        }
      }
    ],
    require("@babel/preset-react"),
    require("@emotion/babel-preset-css-prop")
  ]
};

const devConfig = {};

// const buildPackageJSONPlugin = (outputPath: string) => {
//   return {
//     generateBundle({ isEntry = false }: { isEntry: boolean; code: string }) {
//       if (!isEntry) {
//         return;
//       }
//     }
//   };
// };

const validatePackage = (packageName: string, packagePath: string) => {
  const _packageJSPath = packageJSFilePath(packageName, packagePath);
  const _jsFilePath = jsFilePath(packageName, packagePath);

  if (!fs.existsSync(_packageJSPath)) {
    throw new Error(
      `Missing ${packageJSFilename(packageName)} in ${packagePath}.`
    );
  }

  if (!fs.existsSync(_jsFilePath)) {
    throw new Error(`Missing ${jsFileName(packageName)} in ${packagePath}.`);
  }

  return true;
};

export function buildConfig(
  packageName: string,
  packagePath: string,
  mode: "dev" | "release",
  packageID: string,
  dependencies: Array<string> = []
) {
  validatePackage(packageName, packagePath);
  const _jsFilePath = jsFilePath(packageName, packagePath);
  const _outputPath = outputPath(packageName, packagePath, mode);

  let modeConfig;
  if (mode === "dev") {
    modeConfig = devConfig;
  } else {
  }

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  try {
    fs.lstatSync(
      path.join(outputPath(packageName, packagePath, mode), "../node_modules")
    );
  } catch (exc) {
    fs.symlinkSync(
      NODE_MODULES,
      path.join(outputPath(packageName, packagePath, mode), "../node_modules")
    );
  }

  const moduleDirectory = [
    NODE_MODULES,
    path.join(_outputPath, "node_modules")
  ];

  const namedExports = getNamedExports(dependencies, moduleDirectory);

  const pluginsConfig = [
    nodeResolve({
      mainFields: ["module", "jsnext", "main"],
      customResolveOptions: {
        moduleDirectory
      }
    }),
    commonjs({
      include: /node_modules/,
      namedExports
    }),
    babelPlugin(BABEL_RC)
  ];

  return merge(
    {},
    {
      input: _jsFilePath,
      plugins: pluginsConfig,
      inlineDynamicImports: true,
      external: BUNDLED_MODULES,
      output: [
        {
          name: packageID,
          format: "umd",
          entryFileNames: "[name].js",
          assetFileNames: "[name].js",
          chunkFileNames: "[name].js",
          dir: _outputPath,
          globals: GLOBAL_MODULES
        },
        {
          format: "esm",
          name: packageID,
          entryFileNames: "[name].esm.js",
          assetFileNames: "[name].js",
          chunkFileNames: "[name].esm.js",
          dir: _outputPath,
          globals: GLOBAL_MODULES
        }
      ]
    }
  );
}

import fs from "fs";
import path, { basename } from "path";
import webpack from "webpack";
import mergeWebpackConfig from "webpack-merge";
import BabelEsmPlugin from "babel-esm-plugin";
import { fromPairs } from "lodash";
import {
  packageJSFilePath,
  jsFilePath,
  packageJSFilename,
  jsFileName
} from "./packageUtils";

const NODE_MODULES = path.join(__dirname, "../../../node_modules/");

const BUNDLED_MODULES = [
  "@emotion/core",
  "@emotion/jsx",
  "@emotion/styled",
  "@emotion/styled-base",
  "classnames",
  "emotion-theming",
  "express",
  "filenamify",
  "ink",
  "lodash",
  "moment",
  "react",
  "react-head",
  "react-headroom",
  "reading-time",
  "tinycolor2"
];

const BUNDLED_MODULE_PATHS = fromPairs(
  BUNDLED_MODULES.map(name => [name, path.join(NODE_MODULES, name)])
);

const baseConfig = {
  target: "web",
  externals: ["codeblog", ...BUNDLED_MODULES],
  output: {
    pathinfo: false,
    filename: "[name].js"
  },
  optimization: {
    minimize: false,
    removeAvailableModules: true,
    removeEmptyChunks: false,
    splitChunks: false
  },
  resolve: {
    alias: {
      ...BUNDLED_MODULE_PATHS,
      codeblog: path.join(__dirname, "../../../")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: [
          {
            loader: path.join(NODE_MODULES, "babel-loader"),
            options: {
              babelrc: false,
              plugins: [
                path.join(
                  NODE_MODULES,
                  "@babel/plugin-proposal-class-properties"
                )
              ],
              presets: [
                [
                  path.join(NODE_MODULES, "@babel/preset-env"),
                  {
                    targets: {
                      browsers: "last 2 versions"
                    }
                  }
                ],
                path.join(NODE_MODULES, "@babel/preset-react"),
                path.join(NODE_MODULES, "@emotion/babel-preset-css-prop")
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [new BabelEsmPlugin()]
};

const devConfig = {
  mode: "development",
  output: {
    libraryTarget: "umd"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

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

export function buildWebpackConfig(
  packageName: string,
  packagePath: string,
  mode: "dev" | "release"
) {
  validatePackage(packageName, packagePath);
  const _jsFilePath = jsFilePath(packageName, packagePath);
  const _packageJSFilePath = packageJSFilePath(packageName, packagePath);

  let modeConfig;
  if (mode === "dev") {
    modeConfig = devConfig;
  } else {
  }

  const outputPath = path.join(
    path.dirname(packagePath),
    `.codeblog-${mode}`,
    packageName
  );

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {
      recursive: true
    });
  }

  let packageWebpackConfig = {
    context: path.resolve(packagePath),
    entry: {
      [basename(jsFileName(packageName), ".js")]: _jsFilePath,
      [basename(packageJSFilename(packageName), ".js")]: _packageJSFilePath
    },
    output: {
      library: packageName,
      publicPath: mode === "dev" ? `/${packageName}` : undefined,
      path: path.join(packagePath, `.codeblog-${mode}`, packageName)
    }
  };

  return mergeWebpackConfig(baseConfig, modeConfig, packageWebpackConfig);
}

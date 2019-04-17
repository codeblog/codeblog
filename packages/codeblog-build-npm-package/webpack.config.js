const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

const baseConfig = {
  entry: {
    index: path.resolve(__dirname, "src/index.ts")
  },
  optimization: {
    minimize: true // heap error if this is turned on
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    library: "codeblog-build-npm-package",
    globalObject: "typeof self !== 'undefined' ? self : this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  devtool: "none",
  target: "web",
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"]
  },
  externals: ["react", "react-dom", "codeblog-template-simple"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: modulePath => {
          if (modulePath.includes("mdx")) {
            return false;
          } else {
            return /node_modules/.test(modulePath);
          }
        },
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "8",
                  browsers: "last 2 versions"
                },
                modules: "umd"
              }
            ],
            "@babel/react"
          ],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                regenerator: true
              }
            ],
            ["@babel/plugin-transform-destructuring", { useBuiltIns: true }],
            "@babel/plugin-transform-object-assign",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread"
          ]
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "8",
                  browsers: "last 2 versions"
                },
                modules: "umd"
              }
            ],
            "@babel/react",
            "@babel/typescript"
          ],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                regenerator: true
              }
            ],
            ["@babel/plugin-transform-destructuring", { useBuiltIns: true }],
            "@babel/plugin-transform-object-assign",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread"
          ]
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(path.resolve(__dirname, "dist"), {
    //   root: path.resolve(__dirname)
    // })
  ]
};

const WEB_CONFIG = {
  ...baseConfig,
  target: "web",
  externals: [
    ...baseConfig.externals,
    nodeExternals({
      modulesDir: path.join(__dirname, "../../node_modules"),
      whitelist: ["npm-package-arg", "@babel/plugin-syntax-jsx"]
    })
  ],
  resolve: {
    ...baseConfig.resolve,
    alias: {
      Babel: "@babel/standalone",
      "@babel/preset-env": "@babel/preset-env-standalone",
      "@babel/core": "@babel/standalone",
      osenv: path.resolve(__dirname, "./src/lib/osenv-shim"),
      runBabel: path.resolve(__dirname, "./src/lib/runBabelFromWeb.ts")
    }
  },
  plugins: [new webpack.DefinePlugin({ IS_NODE: "false" })],
  output: {
    ...baseConfig.output,
    filename: "[name].js"
  }
};

const NODE_CONFIG = {
  ...baseConfig,
  target: "node",
  externals: [
    ...baseConfig.externals,
    nodeExternals({
      modulesDir: path.join(__dirname, "../../node_modules")
    })
  ],
  resolve: {
    ...baseConfig.resolve,
    alias: {
      Babel: "@babel/core",
      runBabel: path.resolve(__dirname, "./src/lib/runBabelFromNode.ts")
    }
  },
  plugins: [new webpack.DefinePlugin({ IS_NODE: "true" })],
  output: {
    ...baseConfig.output,
    filename: "[name].node.js"
  }
};

module.exports = [WEB_CONFIG, NODE_CONFIG];

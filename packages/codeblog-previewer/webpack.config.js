const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const browserfs = require("browserfs");
const fs = require("fs");
const _ = require("lodash");
const sha256file = require("sha256-file");

module.exports = {
  entry: {
    codeblog_previewer: [
      path.resolve(__dirname, "src/polyfills.tsx"),
      path.resolve(__dirname, "src/index.tsx")
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    globalObject: "self"
  },
  target: "web",
  optimization: {
    nodeEnv: "development"
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"],
    alias: {
      osenv: path.resolve(__dirname, "src/osenv-shim.js"),
      fs: "browserfs/dist/shims/fs.js",
      buffer: "browserfs/dist/shims/buffer.js",
      browserfs: "browserfs",
      path: "browserfs/dist/shims/path.js",
      processGlobal: "browserfs/dist/shims/process.js",
      bufferGlobal: "browserfs/dist/shims/bufferGlobal.js",
      bfsGlobal: require.resolve("browserfs")
    }
  },
  module: {
    noParse: /browserfs\.js/,
    rules: [
      {
        test: /\.worker\.tsx?$/,
        use: { loader: "worker-loader" }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: "babel-loader",
      //   options: {
      //     presets: [
      //       [
      //         "@babel/preset-env",
      //         {
      //           targets: {
      //             node: "8",
      //             browsers: "last 2 versions"
      //           },
      //           modules: "umd"
      //         }
      //       ],
      //       ,
      //       "@babel/react"
      //     ],
      //     plugins: [
      //       [
      //         "@babel/plugin-transform-runtime",
      //         {
      //           regenerator: true
      //         }
      //       ],
      //       ["@babel/plugin-transform-destructuring", { useBuiltIns: true }],
      //       "@babel/plugin-transform-object-assign",
      //       "@babel/plugin-proposal-class-properties",
      //       "@babel/plugin-proposal-object-rest-spread"
      //     ]
      //   }
      // },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
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
                "@babel/preset-typescript"
              ],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    regenerator: true
                  }
                ],
                [
                  "@babel/plugin-transform-destructuring",
                  { useBuiltIns: true }
                ],
                "@babel/plugin-transform-object-assign",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread"
              ]
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../"
            }
          },
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: true,
      __DEV__: true
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      IS_DEVELOPMENT: true,
      BUNDLED_DEPENDENCIES_VERSION:
        '"' +
        sha256file(path.join(__dirname, "src/lib/BUNDLED_DEPENDENCIES.json")) +
        '"',
      "process.env.NODE_ENV": "'development'",
      "typeof window !== 'undefined'": "false"
    }),
    new webpack.ProvidePlugin({
      React: "React",
      ReactDOM: "react-dom",
      BrowserFS: "bfsGlobal",
      process: "processGlobal",
      Buffer: "bufferGlobal"
    }),
    new HtmlWebpackPlugin({
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        title: "Codeblog Previewer"
      },
      base: {
        target: "_blank"
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css"
    })
  ],
  // DISABLE Webpack's built-in process and Buffer polyfills!
  node: {
    process: false,
    Buffer: false
  }
};

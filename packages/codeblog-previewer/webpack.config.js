const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const browserfs = require("codesandbox-browserfs");

module.exports = {
  entry: {
    codeblog_previewer: path.resolve(__dirname, "src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    globalObject: "self"
  },
  target: "web",
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"],
    alias: {
      osenv: path.resolve(__dirname, "src/osenv-shim.js"),
      fs: "codesandbox-browserfs/dist/shims/fs.js",
      buffer: "codesandbox-browserfs/dist/shims/buffer.js",
      browserfs: "codesandbox-browserfs",
      path: "codesandbox-browserfs/dist/shims/path.js",
      processGlobal: "codesandbox-browserfs/dist/shims/process.js",
      bufferGlobal: "codesandbox-browserfs/dist/shims/bufferGlobal.js",
      bfsGlobal: require.resolve("codesandbox-browserfs")
    }
  },
  module: {
    noParse: /codesandbox-browserfs\.js/,
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
    new webpack.ProvidePlugin({
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
      filename: "[name].css"
    })
  ],
  // DISABLE Webpack's built-in process and Buffer polyfills!
  node: {
    process: false,
    Buffer: false
  }
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const browserfs = require("browserfs");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    globalObject: "self"
  },
  target: "web",
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"],
    alias: {
      osenv: path.resolve(__dirname, "src/osenv-shim.js"),
      fs: "browserfs/dist/shims/fs.js",
      buffer: "browserfs/dist/shims/buffer.js",
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
    new webpack.ProvidePlugin({
      BrowserFS: "bfsGlobal",
      process: "processGlobal",
      Buffer: "bufferGlobal"
    }),
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(path.resolve(__dirname, "dist"), {
      root: path.resolve(__dirname)
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

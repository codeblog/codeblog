const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.tsx"),
    CodeBlock: path.resolve(__dirname, "src/CodeBlock.tsx")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    library: "codeblog-codeblock",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  target: "web",
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"]
  },
  externals: [
    "react",
    "react-dom",
    "object-assign",
    "styled-jsx",
    "classnames"
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react", "@babel/typescript"],
          plugins: [
            ["styled-jsx/babel", { sourceMaps: false }],
            "@babel/plugin-proposal-class-properties"
          ]
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css"
    })
  ]
};

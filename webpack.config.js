const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: path.resolve(__dirname, "src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    library: "codeblog",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  target: "web",
  resolve: {
    alias: {
      codeblog: path.resolve(__dirname, "src")
    },
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"]
  },
  externals: [
    "react",
    "react-dom",
    "react-head",
    "react-dom/server",
    "object-assign",
    "moment",
    "react-headroom",
    "reading-time",
    "date-fns",
    "date-fns-tz",
    "classnames",
    "lodash",
    "iframe-resizer"
  ],
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: [
            "babel-plugin-emotion",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react", "@babel/typescript"],
          plugins: [
            "babel-plugin-emotion",
            "@babel/plugin-proposal-class-properties"
          ]
        }
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
  }
};

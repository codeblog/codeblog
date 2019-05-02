const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    BlogPost: path.resolve(__dirname, "src/BlogPost.js"),
    Blog: path.resolve(__dirname, "src/Blog.js"),
    styles: path.resolve(__dirname, "src/styles.css")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    library: "codeblog-template-simple",
    libraryTarget: "umd"
  },
  target: "web",
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json"]
  },
  externals: [
    "react",
    "react-dom",
    "object-assign",
    "codeblog",
    "styled-jsx",
    "codeblog-codeblock",
    "moment",
    "classnames"
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
            "@babel/plugin-proposal-class-properties",
            "styled-jsx/babel"
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
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, "dist"), {
      root: path.resolve(__dirname)
    }),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css"
    })
  ]
};

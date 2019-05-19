const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

let outputPath;

if (process.env.NODE_ENV === "production") {
  outputPath = path.resolve(__dirname, `../dist`);
} else {
  outputPath = path.resolve(__dirname, `../`);
}

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    [process.env.NODE_ENV === "production"
      ? "cli"
      : "codeblog-dev"]: path.resolve(__dirname, "./index.tsx")
  },
  output: {
    path: outputPath,
    globalObject: "global"
  },
  node: false,
  target: "node",
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    namedModules: true,
    namedChunks: true,
    moduleIds: "named",
    portableRecords: true
  },
  resolve: {
    alias: {
      codeblog: path.resolve(__dirname, "../")
    },
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"]
  },
  externals: ["yarn"],
  plugins: [
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true,
      entryOnly: true
    })
  ],
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: [/\.js$/, /\.tsx$/, /\.ts$/],
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: [
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
                targets: {
                  node: "8"
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            [
              "module-resolver",
              {
                root: ["./"],
                alias: {
                  codeblog: "./"
                }
              }
            ],
            "babel-plugin-transform-css-import-to-string",
            [
              "transform-assets-import-to-string",
              {
                baseDir: "",
                baseUri: "http://codeblog-public.storage.googleapis.com"
              }
            ],
            "@babel/plugin-proposal-class-properties",
            "babel-plugin-transform-node-env-inline"
          ]
        }
      }
    ]
  }
};

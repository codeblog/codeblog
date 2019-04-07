const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.tsx"),
    SEOTags: path.resolve(__dirname, "src/components/SEOTags.tsx"),
    CodeblogContext: path.resolve(
      __dirname,
      "src/components/CodeblogContext.tsx"
    )
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    library: "codeblog",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  optimization: {
    minimize: false
  },
  target: "web",
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"]
  },
  externals: [
    "react",
    "react-dom",
    "react-dom/server",
    "object-assign",
    "lodash",
    "date-fns",
    "date-fns-tz",
    "codeblog-template-simple",
    "classnames",
    "lodash",
    "iframe-resizer"
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|codeblog-)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components|codeblog-)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react", "@babel/typescript"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  }
};

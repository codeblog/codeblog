const { fetchDependencies } = require("codeblog-packager");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const SAVE_PATH = path.resolve(
  __dirname,
  "../src/lib/BUNDLED_DEPENDENCIES.json"
);
const PACKAGE_JSON_PATH = path.resolve(__dirname, "../package.json");
const packageJSON = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH));
const BUNDLED_DEPS = _.pick(packageJSON.dependencies, [
  "codeblog",
  "prop-types",
  "object-assign",
  "loose-envify",
  "js-tokens",
  "codeblog-lottie",
  "react-is",
  "@mdx-js/react",
  "shadertoy-react",
  "codeblog-components",
  "react-headroom",
  "reading-time",
  "codeblog-codeblock",
  "moment",
  "classnames",
  "require-reload",
  "react-hot-loader",
  "@hot-loader/react-dom",
  "react-dom",
  "react"
]);

const pullFromLocal = console.log(BUNDLED_DEPS);

console.log("Fetching", Object.keys(BUNDLED_DEPS).length, "dependencies");

fetchDependencies(_.toPairs(BUNDLED_DEPS)).then(
  deps => {
    fs.writeFileSync(SAVE_PATH, JSON.stringify(deps));
    console.log(
      "Wrote",
      Object.keys(deps.contents).length,
      "dependencies",
      "to",
      SAVE_PATH
    );
  },
  err => {
    console.error(err);
  }
);

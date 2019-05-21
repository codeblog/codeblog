const CODEBLOG_BIN_FILENAME =
  process.env.NODE_ENV === "production" ? "codeblog" : "codeblog-dev";

export const CODEBLOG_ROOT = __non_webpack_require__("path").resolve(
  __dirname,
  "../"
);
export const YARN_BIN = __non_webpack_require__("path").join(
  CODEBLOG_ROOT,
  "./bin/yarn-1.16.0.js"
);
export const CODEBLOG_BIN = __non_webpack_require__("path").join(
  CODEBLOG_ROOT,
  `./bin/`,
  CODEBLOG_BIN_FILENAME
);

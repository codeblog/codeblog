module.exports = {
  plugins: {
    "postcss-css-variables": {
      preserve: true
    },
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    cssnano: {}
  }
};

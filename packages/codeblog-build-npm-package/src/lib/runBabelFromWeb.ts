import { transform } from "@babel/standalone";

const react = require("@babel/preset-react");
const env = require("@babel/preset-env");
const assign = require("@babel/plugin-transform-object-assign");
const properties = require("@babel/plugin-proposal-class-properties");
const spread = require("@babel/plugin-proposal-object-rest-spread");
const destructuring = require("@babel/plugin-transform-destructuring");
const styledJSX = require("styled-jsx/babel");
const reactHotLoader = require("react-hot-loader/dist/babel.development");

export const runBabel = (jsx: string, filename: string) => {
  const { code } = transform(jsx, {
    filename,
    presets: [
      [
        env,
        {
          modules: "umd"
        }
      ],
      react
    ],
    sourceMaps: "inline",
    plugins: [
      [destructuring, { useBuiltIns: true }],
      assign,
      properties,
      spread,
      styledJSX,
      reactHotLoader
    ]
  });

  return Promise.resolve(code);
};

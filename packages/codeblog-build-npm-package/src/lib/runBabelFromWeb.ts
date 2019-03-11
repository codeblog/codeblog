import { transform } from "@babel/standalone";

const react = require("@babel/preset-react");
const env = require("@babel/preset-env");
const assign = require("@babel/plugin-transform-object-assign");
const properties = require("@babel/plugin-proposal-class-properties");
const spread = require("@babel/plugin-proposal-object-rest-spread");
const destructuring = require("@babel/plugin-transform-destructuring");

export const runBabel = (jsx: string) => {
  const { code } = transform(jsx, {
    presets: [
      [
        env,
        {
          modules: "umd"
        }
      ],
      react
    ],
    plugins: [
      [destructuring, { useBuiltIns: true }],
      assign,
      properties,
      spread
    ]
  });

  return Promise.resolve(code);
};

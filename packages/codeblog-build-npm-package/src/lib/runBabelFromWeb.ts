import { transform } from "@babel/standalone";

require("@babel/preset-react");
require("@babel/preset-env");
require("@babel/plugin-transform-object-assign");
require("@babel/plugin-proposal-class-properties");
require("@babel/plugin-proposal-object-rest-spread");
require("@babel/plugin-transform-destructuring");

export const runBabel = (jsx: string) => {
  const { code } = transform(jsx, {
    presets: [
      [
        "env",
        {
          modules: "umd"
        }
      ],
      "react"
    ],
    plugins: [
      ["transform-destructuring", { useBuiltIns: true }],
      "transform-object-assign",
      "proposal-class-properties",
      "proposal-object-rest-spread"
    ]
  });

  return Promise.resolve(code);
};

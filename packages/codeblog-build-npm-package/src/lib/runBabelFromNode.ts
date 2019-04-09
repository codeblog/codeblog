import { transformAsync } from "@babel/core";

export const runBabel = (jsx: string) => {
  return transformAsync(jsx, {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            browsers: "last 2 versions",
            node: "8"
          },
          modules: "umd"
        }
      ],
      "@babel/react"
    ],
    sourceMaps: false,
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true
        }
      ],
      ["@babel/transform-destructuring", { useBuiltIns: true }],
      "@babel/transform-object-assign",
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "styled-jsx/babel"
    ]
  }).then(res => res.code);
};

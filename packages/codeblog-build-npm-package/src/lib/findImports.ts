import npa from "npm-package-arg";
import * as acorn from "acorn";
import umd from "acorn-umd";

export function findImports(code: string) {
  const ast = acorn.parse(code, { ecmaVersion: 6 });
  const imports = umd(ast, {
    es6: true,
    amd: false,
    cjs: true
  });

  return imports
    .map(importObj => importObj.source.value)
    .filter(name => npa(name).name);
}

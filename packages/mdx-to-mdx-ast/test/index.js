const util = require("util");
const fs = require("fs");
const path = require("path");
const { mdxAst, mdxAstSync } = require("../dist/index");

const fixturePath = path.resolve(__dirname, "fixture.mdx");
const mdxString = fs.readFileSync(fixturePath, "utf-8");

const test = async function() {
  const ast = await mdxAst(mdxString);

  console.log(util.inspect(ast, false, null, true /* enable colors */));
};

const syncTest = function() {
  const ast = mdxAstSync(mdxString);

  console.log(util.inspect(ast, false, null, true /* enable colors */));
};
test();
syncTest();

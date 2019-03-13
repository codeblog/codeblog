import { CompiledPackage } from "./messages";
import { extname } from "path";

const insertCSSFile = (cssText: string, filename: string, index: number) => {
  const dataValue = escape(`${filename}`);
  const selector = `style[data-cssFileName="${dataValue}"]`;

  let element = document.querySelector(selector);
  let needsInsertion = !element;
  if (!element) {
    element = document.createElement("style");
    element.setAttribute(`data-cssFileName`, dataValue);
  }

  if (element.innerHTML !== cssText) {
    element.innerHTML = cssText;
  }

  if (needsInsertion) {
    document.body.appendChild(element);
  }
};

const getCSSFiles = (pkg: CompiledPackage) => {
  return Object.keys(pkg)
    .filter(file => extname(file) === ".css")
    .sort();
};

export class CodeLoader {
  static loadPost = (
    post: CompiledPackage,
    template: CompiledPackage,
    props: any
  ) => {
    getCSSFiles(template).forEach((cssFile, index) => {
      insertCSSFile(template[cssFile], cssFile, index);
    });

    getCSSFiles(post).forEach((cssFile, index) => {
      insertCSSFile(post[cssFile], cssFile, index);
    });

    if (!document.querySelector("#codeblog")) {
      const root = document.createElement("div");
      root.id = "codeblog";
      document.body.append(root);
    }

    const _require = require("../require");
    const renderCodeblog = _require("./codeblog.js");
    renderCodeblog({ props });
  };
}

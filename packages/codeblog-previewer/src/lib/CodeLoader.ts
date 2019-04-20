import { CompiledPackage } from "./messages";
import { extname } from "path";
import * as BrowserFS from "browserfs";
import { ErrorBoundaryComponent } from "../components/CodeblogErrorContainer";
import { ErrorBar } from "../components/ErrorBar";

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

const insertRemoteStylesheet = (url: string) => {
  const dataValue = url;
  const selector = `link[href="${dataValue}"]`;

  let element = document.querySelector(selector);
  if (element) {
    return;
  }

  element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("href", url);

  document.head.appendChild(element);
};

export const getCSSFiles = (pkg: CompiledPackage) => {
  return Object.keys(pkg)
    .filter(file => extname(file) === ".css")
    .sort();
};

export const getJSFiles = (pkg: CompiledPackage) => {
  return Object.keys(pkg)
    .filter(file => extname(file) === ".js")
    .sort();
};

export class CodeLoader {
  static loadPost = (
    post: CompiledPackage,
    template: CompiledPackage,
    styleURLs: Array<string>,
    props: any,
    isTemplateChanged: boolean,
    isPostChanged: boolean,
    isPropsChanged: boolean
  ) => {
    styleURLs.forEach(insertRemoteStylesheet);
    getCSSFiles(template).forEach((cssFile, index) => {
      insertCSSFile(template[cssFile], cssFile, index);
    });

    getCSSFiles(post).forEach((cssFile, index) => {
      insertCSSFile(post[cssFile], cssFile, index);
    });

    const _require = require("../require");

    const renderCodeblog = _require("./codeblog.js");

    let paths = [];

    if (isPostChanged) {
      paths = paths.concat(getJSFiles(post).map(file => "/post/" + file));
    }

    if (isTemplateChanged) {
      paths = paths.concat(
        getJSFiles(template).map(
          file => "/node_modules/codeblog-template/" + file
        )
      );
    }

    renderCodeblog.ErrorBoundaryComponent = ErrorBar;
    // False when just changing CSS
    if (isPostChanged || isTemplateChanged || isPropsChanged) {
      renderCodeblog({
        props,
        lastBuild: new Date().getTime(),
        paths
      });
    }
  };
}

import filenamify from "filenamify";
import path from "path";

export const packageJSFilename = (name: string) =>
  filenamify(`${name}.package.js`, { replacement: "-" });
export const packageJSFilePath = (packageName: string, packagePath: string) => {
  return path.join(packagePath, packageJSFilename(packageName));
};

export const jsFileName = (name: string) =>
  filenamify(`${name}.js`, { replacement: "-" });
export const jsFilePath = (packageName: string, packagePath: string) => {
  return path.join(packagePath, jsFileName(packageName));
};

export const tgzFileName = (name: string) =>
  filenamify(`${name}.tgz`, { replacement: "-" });
export const tgzFilePath = (packageName: string, packagePath: string) => {
  return path.join(packagePath, tgzFileName(packageName));
};

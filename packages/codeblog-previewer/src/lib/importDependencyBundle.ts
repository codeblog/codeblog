import * as BrowserFS from "browserfs";
import { Installer } from "codeblog-packager";
import BUNDLED_DEPENDENCIES from "./BUNDLED_DEPENDENCIES.json";

export const run = () => {
  const installer = new Installer({
    rootDir: "/",
    fs: BrowserFS.BFSRequire("fs"),
    dependencies: Object.assign({}, BUNDLED_DEPENDENCIES.contents),
    logger: function() {}
  });

  return installer.install();
};

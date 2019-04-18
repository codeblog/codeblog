import {
  downloadAndInstallFromPackageJSON,
  Installer
} from "codeblog-packager";
import { CompiledPackage, ServerStatus } from "./messages";
import Bluebird from "bluebird";
import { isEqual, omit, get, isEmpty, toPairs, truncate } from "lodash";
import * as BrowserFS from "browserfs";
import localForage from "localforage";
import { reportLoadingStatus, dismissLoading } from "../components/ErrorBar";
import RENDER_CODEBLOG_POST_FILE from "!!raw-loader!../eval/renderCodeblogPost.js";

const PREINSTALLED_LIST = [
  ...BUNDLED_DEPENDENCY_NAMES,
  "@mdx-js/mdx",
  "@mdx-js/react"
];

window.REQUIRE_MAPPINGS = {
  "styled-jsx/style": require("styled-jsx/style")
};

// const createLocalStorageFS = Bluebird.promisify(
//   BrowserFS.FileSystem.LocalStorage.Create
// );
// debugger;

const createIDBFS = Bluebird.promisify(BrowserFS.FileSystem.IndexedDB.Create);
const createMemoryFS = Bluebird.promisify(BrowserFS.FileSystem.InMemory.Create);
const createAsyncMirrorFS = Bluebird.promisify(
  BrowserFS.FileSystem.AsyncMirror.Create
);

let LAST_MANIFEST = null;

const LAST_INSTALLED_DEPENDENCIES_FILEPATH = `/${BUNDLED_DEPENDENCIES_VERSION}-last-installed-dependencies.json`;
const LAST_INSTALLED_DEPENDENCIES_MANIFEST_FILEPATH = `/${BUNDLED_DEPENDENCIES_VERSION}-last-installed-dependencies.manifest.json`;

// const configureBrowserFS = Bluebird.promisify(BrowserFS.configure);

let _isFSInitialized = false;

export class DependencyManager {
  templatePkg: CompiledPackage | null;
  postPkg: CompiledPackage | null;
  installer: Installer | null;
  status: ServerStatus;

  initializeFS = async () => {
    if (_isFSInitialized) {
      return Promise.resolve();
    }

    this.status = ServerStatus.fs_init;

    const inMemory = await createMemoryFS();

    BrowserFS.initialize(inMemory);
    BrowserFS.install(window);

    reportLoadingStatus("Fetching dependencies...", this.status);
    const dynamicImporter = await import(/* webpackChunkName: "dependencies-bundle" */
    `./importDependencyBundle`);

    await dynamicImporter.run();

    reportLoadingStatus("Installing dependencies...", this.status);

    _isFSInitialized = true;

    this.status = ServerStatus.fs_finished;
  };

  getDependencies = () => {
    const deps = {};
    const { templatePkg, postPkg } = this;

    if (postPkg) {
      const { peerDependencies, dependencies } = postPkg["package.json"];

      Object.assign(deps, dependencies, peerDependencies);
    }

    if (templatePkg) {
      const { peerDependencies, dependencies } = templatePkg["package.json"];

      Object.assign(deps, dependencies, peerDependencies);
    }

    return omit(deps, PREINSTALLED_LIST);
  };

  hasDependenciesChanged = dependencies => {
    return !isEqual(LAST_MANIFEST, dependencies);
  };

  installDependencies = async () => {
    const dependencies = this.getDependencies();
    if (!this.hasDependenciesChanged(dependencies) || isEmpty(dependencies)) {
      this.status = ServerStatus.installing_dependencies_finished;
      return;
    }

    const fs = BrowserFS.BFSRequire("fs");

    this.status = ServerStatus.installing_dependencies;

    reportLoadingStatus(
      `Installing ${truncate(Object.keys(dependencies).join(", "), {
        length: 50
      })}`,
      this.status
    );

    this.installer = await downloadAndInstallFromPackageJSON({
      packageJSON: Object.assign({}, this.postPkg["package.json"], {
        dependencies
      }),
      fs,
      logger: function() {},
      ignoreList: toPairs(LAST_MANIFEST || {})
        .map(pair => pair[0])
        .concat(PREINSTALLED_LIST),
      rootDir: "/"
    });
    this.status = ServerStatus.installing_dependencies_finished;

    dismissLoading();
    LAST_MANIFEST = dependencies;
  };

  // saveDependencies = async () => {
  //   const dependencies = this.getDependencies();
  //   await localForage.setItem(
  //     LAST_INSTALLED_DEPENDENCIES_FILEPATH,
  //     this.installer.dependencies
  //   );

  //   await localForage.setItem(
  //     LAST_INSTALLED_DEPENDENCIES_MANIFEST_FILEPATH,
  //     dependencies
  //   );
  //   LAST_MANIFEST = dependencies;
  // };

  installPost = async () => {
    const pkg = this.postPkg;

    await Promise.all(
      Object.keys(pkg).map(filename => {
        const value =
          typeof pkg[filename] === "object"
            ? JSON.stringify(pkg[filename])
            : pkg[filename];
        return this.installer.writeDependencyFile(`/post/${filename}`, value);
      })
    );

    return this.installer.writeDependencyFile(
      "./codeblog.js",
      RENDER_CODEBLOG_POST_FILE
    );
  };

  installTemplate = () => {
    const { templatePkg } = this;
    return Promise.all(
      Object.keys(templatePkg).map(filename => {
        const value =
          typeof templatePkg[filename] === "object"
            ? JSON.stringify(templatePkg[filename])
            : templatePkg[filename];
        return this.installer.writeDependencyFile(
          `/node_modules/codeblog-template/${filename}`,
          value
        );
      })
    );
  };
}

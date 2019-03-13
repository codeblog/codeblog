import {
  downloadAndInstallFromPackageJSON,
  Installer
} from "codeblog-packager";
import { CompiledPackage, ServerStatus } from "./messages";
import Bluebird from "bluebird";
import { isEqual } from "lodash";
import * as BrowserFS from "codesandbox-browserfs";

// const createLocalStorageFS = Bluebird.promisify(
//   BrowserFS.FileSystem.LocalStorage.Create
// );
// debugger;
// const createIDBFS = Bluebird.promisify(BrowserFS.FileSystem.IndexedDB.Create);
const createMemoryFS = Bluebird.promisify(BrowserFS.FileSystem.InMemory.Create);
// const createMountableFS = Bluebird.promisify(
//   BrowserFS.FileSystem.MountableFileSystem.Create
// );
// const createAsyncMirrorFS = Bluebird.promisify(
//   BrowserFS.FileSystem.AsyncMirror.Create
// );

const LAST_INSTALLED_DEPENDENCIES_FILEPATH =
  "/last-installed-dependencies.json";

// const configureBrowserFS = Bluebird.promisify(BrowserFS.configure);

const RENDER_CODEBLOG_POST_FILE = `
const React = require("react");
const ReactDOM = require("react-dom");
const MDXProvider = require("@mdx-js/tag").MDXProvider;
const mdx = require("@mdx-js/mdx/create-element");

const { Blog, BlogPost } = require("codeblog-template");
const Codeblog = require("codeblog");

window.React = React;
window.ReactDOM = ReactDOM;
window.mdx = mdx;
const Post = require("./post").default;

const CodeblogPreviewer = (props) => (
  React.createElement(Codeblog.CodeblogRoot,
    Object.assign({
      BlogComponent: Blog,
      BlogPostComponent: BlogPost,
      environment: 'client',
    }, props),
    React.createElement(MDXProvider, {components: {}},
      React.createElement(Post, {components: {}})
    )
  )
)

module.exports = function renderCodeblog({ props }) {
  const rootElement = document.querySelector("#codeblog");
  ReactDOM.render(React.createElement(CodeblogPreviewer, props), rootElement);
}`;

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
    // const idbfs = await createIDBFS({ storeName: "codeblog-previewer" });

    // const mirrorFS = await createAsyncMirrorFS({
    //   sync: inMemory,
    //   async: idbfs
    // });

    BrowserFS.initialize(inMemory);
    _isFSInitialized = true;

    BrowserFS.install(window);
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

    return Object.assign(deps, {
      codeblog: "1.2.0",
      "react-dom": "16.8.4",
      react: "16.8.4"
    });
  };

  installDependencies = async () => {
    const dependencies = this.getDependencies();
    const fs = BrowserFS.BFSRequire("fs");

    if (fs.existsSync(LAST_INSTALLED_DEPENDENCIES_FILEPATH)) {
      const installedDepsString = fs.readFileSync(
        LAST_INSTALLED_DEPENDENCIES_FILEPATH,
        "utf8"
      );

      try {
        const deps = JSON.parse(installedDepsString);
        if (isEqual(deps, dependencies)) {
          this.installer = new Installer({
            rootDir: "/",
            fs,
            dependencies: deps
          });
          this.status = ServerStatus.installing_dependencies_finished;
          return;
        }
      } catch (exception) {
        fs.unlinkSync(LAST_INSTALLED_DEPENDENCIES_FILEPATH);
      }
    }

    this.status = ServerStatus.installing_dependencies;

    this.installer = await downloadAndInstallFromPackageJSON({
      packageJSON: Object.assign({}, this.postPkg["package.json"], {
        dependencies
      }),
      fs,
      logger: function() {},
      rootDir: "/"
    });
    this.status = ServerStatus.installing_dependencies_finished;

    await fs.writeFile(
      LAST_INSTALLED_DEPENDENCIES_FILEPATH,
      JSON.stringify(dependencies)
    );
  };

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

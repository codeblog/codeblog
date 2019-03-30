import {
  downloadAndInstallFromPackageJSON,
  Installer
} from "codeblog-packager";
import { CompiledPackage, ServerStatus } from "./messages";
import Bluebird from "bluebird";
import { isEqual } from "lodash";
import * as BrowserFS from "codesandbox-browserfs";
import localForage from "localforage";

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

let LAST_MANIFEST = null;

const LAST_INSTALLED_DEPENDENCIES_FILEPATH =
  "/last-installed-dependencies.json";
const LAST_INSTALLED_DEPENDENCIES_MANIFEST_FILEPATH =
  "/last-installed-dependencies.manifest.json";

// const configureBrowserFS = Bluebird.promisify(BrowserFS.configure);

const RENDER_CODEBLOG_POST_FILE = `
const React = require("react");
const ReactDOM = require("@hot-loader/react-dom");
const MDXProvider = require("@mdx-js/react").MDXProvider;
const mdx = require("@mdx-js/react/dist/create-element").default;
const AppContainer = require("react-hot-loader").AppContainer;



const Codeblog = require("codeblog");

window.React = React;
window.ReactDOM = ReactDOM;
window.mdx = mdx;


const CodeblogPreviewer = ({props, Blog, BlogPost, Post}) => (
  React.createElement(
    AppContainer,
    {},
    React.createElement(
      Codeblog.CodeblogRoot,
      Object.assign({
        BlogComponent: Blog,
        BlogPostComponent: BlogPost,
        environment: 'client',
      }, props),
      React.createElement(
        MDXProvider,
        {components: {}},
        React.createElement(Post, {components: {}})
      )
    )
  )
)

let hasRenderedOnce = true;
module.exports = function renderCodeblog({props, paths, lastBuild}) {
  return new Promise(async (resolve, reject) => {
    const rootElement = document.querySelector("#codeblog");


    const reload = require("require-reload")(require);
    let error = null;

    try {
      paths.forEach(file => reload(file))
    } catch(exception) {
      console.error(exception)
      error = exception;
    }


    let Blog, BlogPost, Post;

    const pr = new Promise((_resolve) => {
      window.requestIdleCallback(() => {
        try {
          const Template = reload("codeblog-template");
          Blog = Template.Blog;
          BlogPost = Template.BlogPost;
          Post = reload("./post").default;
        } catch(exception) {
          error = exception;
        }
        _resolve();
      }, {timeout: 500}
      );
    });
    await pr;


    if (!error) {
      const pr = new Promise((_resolve) => {
        window.requestIdleCallback(() => {
          try {
            const codeblog = React.createElement(CodeblogPreviewer, {props, Blog, BlogPost, Post});
            ReactDOM.render(codeblog, document.querySelector("#codeblog-fake-hidden-box"))
          } catch(exception) {
            error = exception;

          }

          if (!error) {
            const codeblog = React.createElement(CodeblogPreviewer, {props, Blog, BlogPost, Post});
            ReactDOM.render(codeblog, rootElement);
            hasRenderedOnce = true;
            ReactDOM.unmountComponentAtNode(document.querySelector("#codeblog-fake-hidden-box"))
          }

          _resolve();
        })
      }, {timeout: 500})

      await pr;
    }


    if (error) {
      console.error(error)
    }

    ReactDOM.render(
      React.createElement(renderCodeblog.ErrorBoundaryComponent, {error, level: 'runtime', hasRenderedOnce}),
      document.querySelector("#codeblog-runtime-error-box")
    )

    resolve(true);
  });

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

    const lastInstalledDeps = await localForage.getItem(
      LAST_INSTALLED_DEPENDENCIES_FILEPATH
    );
    const lastInstalledDepsManifest = await localForage.getItem(
      LAST_INSTALLED_DEPENDENCIES_MANIFEST_FILEPATH
    );

    if (lastInstalledDeps && lastInstalledDepsManifest) {
      this.installer = new Installer({
        rootDir: "/",
        fs: BrowserFS.BFSRequire("fs"),
        dependencies: lastInstalledDeps,
        logger: function() {}
      });
      await this.installer.install();
      LAST_MANIFEST = lastInstalledDepsManifest;
    }

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

    return Object.assign(deps, {
      codeblog: "1.3.2",
      "prop-types": "15.7.2",
      "react-is": "16.8.5",
      "@mdx-js/mdx": "^1.0.0-alpha.13",
      "@mdx-js/react": "^1.0.0-alpha.13",
      "require-reload": "0.2.2",
      "react-hot-loader": "4.8.0",
      "@hot-loader/react-dom": "16.8.3",
      "react-dom": "16.8.5",
      react: "16.8.5"
    });
  };

  installDependencies = async () => {
    const dependencies = this.getDependencies();
    if (isEqual(LAST_MANIFEST, dependencies)) {
      this.status = ServerStatus.installing_dependencies_finished;
      return;
    }

    const fs = BrowserFS.BFSRequire("fs");

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

    await localForage.setItem(
      LAST_INSTALLED_DEPENDENCIES_FILEPATH,
      this.installer.dependencies
    );

    await localForage.setItem(
      LAST_INSTALLED_DEPENDENCIES_MANIFEST_FILEPATH,
      dependencies
    );

    LAST_MANIFEST = dependencies;
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

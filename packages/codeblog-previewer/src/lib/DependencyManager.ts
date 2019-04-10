import {
  downloadAndInstallFromPackageJSON,
  Installer
} from "codeblog-packager";
import { CompiledPackage, ServerStatus } from "./messages";
import Bluebird from "bluebird";
import { isEqual, omit, get } from "lodash";
import * as BrowserFS from "codesandbox-browserfs";
import localForage from "localforage";
import BUNDLED_DEPENDENCIES from "./BUNDLED_DEPENDENCIES.json";
import * as MDXReact from "@mdx-js/react/dist/index.es";
const BUNDLED_DEPENDENCY_NAMES = BUNDLED_DEPENDENCIES.dependencies.map(
  ({ name }) => name
);

window.REQUIRE_MAPPINGS = {
  "styled-jsx/style": require("styled-jsx/style"),
  "@mdx-js/mdx": require("@mdx-js/mdx"),
  "react-syntax-highlighter": require("react-syntax-highlighter"),
  "@mdx-js/react": MDXReact
};

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
const origRequire = module.constructor.prototype.require;

module.constructor.prototype.require = function(moduleName) {
  if (window.REQUIRE_MAPPINGS[moduleName]) {

    return window.REQUIRE_MAPPINGS[moduleName];
  } else {
    return origRequire.call(this, moduleName);
  }
}

const React = require("react");
const ReactDOM = require("@hot-loader/react-dom");
const MDXJS = require("@mdx-js/react");

const AppContainer = require("react-hot-loader").AppContainer;


const mdx = MDXJS.mdx;
const MDXProvider = MDXJS.MDXProvider;


const Codeblog = require("codeblog");
window.React = React;
window.ReactDOM = ReactDOM;
window.mdx = mdx;


const CodeblogPreviewer = ({props, Blog, BlogPost, Post, Components}) => (
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
        {components: Components},
        React.createElement(Post, {components: Components})
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


    let Blog, BlogPost, Post, Components;

    const pr = new Promise((_resolve) => {
      window.requestIdleCallback(() => {
        try {
          const Template = reload("codeblog-template");
          Blog = Template.Blog;
          BlogPost = Template.BlogPost;
          Components = Template.Components;
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
            const codeblog = React.createElement(CodeblogPreviewer, {props, Blog, BlogPost, Post, Components});
            ReactDOM.render(codeblog, document.querySelector("#codeblog-fake-hidden-box"))
          } catch(exception) {
            error = exception;

          }


          if (!error) {
            const codeblog = React.createElement(CodeblogPreviewer, {props, Blog, BlogPost, Post, Components});
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
        dependencies: Object.assign(
          {},
          BUNDLED_DEPENDENCIES.contents,
          lastInstalledDeps
        ),
        logger: function() {}
      });
      await this.installer.install();
      LAST_MANIFEST = lastInstalledDepsManifest;
    } else {
      this.installer = new Installer({
        rootDir: "/",
        fs: BrowserFS.BFSRequire("fs"),
        dependencies: Object.assign({}, BUNDLED_DEPENDENCIES.contents),
        logger: function() {}
      });

      await this.installer.install();
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

    return omit(deps, BUNDLED_DEPENDENCY_NAMES);
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

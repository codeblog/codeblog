const origRequire = module.constructor.prototype.require;

module.constructor.prototype.require = function(moduleName) {
  if (window.REQUIRE_MAPPINGS[moduleName]) {
    return window.REQUIRE_MAPPINGS[moduleName];
  } else {
    return origRequire.call(this, moduleName);
  }
};

const React = require("react");
const ReactDOM = require("@hot-loader/react-dom");
const MDXJS = require("@mdx-js/react");
const AppContainer = require("react-hot-loader").AppContainer;

const mdx = MDXJS.mdx;
const MDXProvider = MDXJS.MDXProvider;

const Codeblog = require("codeblog");
window.React = React;
window.mdx = mdx;
window.ReactDOM = ReactDOM;

const CodeblogPreviewer = ({ props, Blog, BlogPost, Post, Components }) =>
  React.createElement(
    AppContainer,
    {},
    React.createElement(
      Codeblog.CodeblogRoot,
      Object.assign(
        {
          BlogComponent: Blog,
          BlogPostComponent: BlogPost,
          environment: "client"
        },
        props
      ),
      React.createElement(
        MDXProvider,
        { components: Components },
        React.createElement(Post, { components: Components })
      )
    )
  );

const requestIdle = func => {
  return new Promise((resolve, reject) => {
    window.requestIdleCallback(() => {
      return func(resolve, reject);
    });
  });
};

const raf = func => {
  return new Promise((resolve, reject) => {
    window.requestAnimationFrame(() => {
      return func(resolve, reject);
    });
  });
};

let hasRenderedOnce = true;
module.exports = function renderCodeblog({ props, paths, lastBuild }) {
  return new Promise(async (resolve, reject) => {
    const rootElement = document.querySelector("#codeblog");

    window.VERBOSE_LOGGING && console.group("CodeLoader");
    const reload = require("require-reload")(require);
    let Blog, BlogPost, Post, Components, error;

    window.VERBOSE_LOGGING && console.time("Reload paths");
    await requestIdle(resolve => {
      try {
        paths.forEach(file => reload(file));
      } catch (exception) {
        error = exception;
      } finally {
        window.VERBOSE_LOGGING && console.timeEnd("Reload paths");
      }

      if (error) {
        return resolve();
      }

      window.VERBOSE_LOGGING && console.time("Reload template + post");
      try {
        const Template = reload("codeblog-template");
        Blog = Template.Blog;
        BlogPost = Template.BlogPost;
        Components = Template.Components;
        Post = reload("./post").default;
      } catch (exception) {
        error = exception;
      } finally {
        window.VERBOSE_LOGGING && console.timeEnd("Reload template + post");
        resolve();
      }
    });

    let codeblog;
    if (!error) {
      window.VERBOSE_LOGGING && console.time("Create element");

      try {
        codeblog = React.createElement(CodeblogPreviewer, {
          props,
          Blog,
          BlogPost,
          Post,
          Components
        });
      } catch (exception) {
        error = exception;
      } finally {
        window.VERBOSE_LOGGING && console.timeEnd("Create element");
      }
    }

    if (!error) {
      window.VERBOSE_LOGGING && console.time("Render error version");
      await raf((resolve, reject) => {
        try {
          ReactDOM.render(
            codeblog,
            document.querySelector("#codeblog-fake-hidden-box")
          );
        } catch (exception) {
          error = exception;
        } finally {
          window.VERBOSE_LOGGING && console.timeEnd("Render error version");
          resolve();
        }
      });
    }

    if (!error) {
      window.VERBOSE_LOGGING && console.time("Render real version");
      await raf((resolve, reject) => {
        ReactDOM.render(codeblog, rootElement);
        hasRenderedOnce = true;
        window.VERBOSE_LOGGING && console.timeEnd("Render real version");

        resolve();
      });

      await raf((resolve, reject) => {
        ReactDOM.unmountComponentAtNode(
          document.querySelector("#codeblog-fake-hidden-box")
        );
        resolve();
      });
    }

    window.VERBOSE_LOGGING && console.groupEnd("CodeLoader");

    window.VERBOSE_LOGGING && console.time("Render runtime error box");
    ReactDOM.render(
      React.createElement(renderCodeblog.ErrorBoundaryComponent, {
        error,
        level: "runtime",
        hasRenderedOnce
      }),
      document.querySelector("#codeblog-runtime-error-box")
    );
    window.VERBOSE_LOGGING && console.timeEnd("Render runtime error box");

    if (error) {
      window.VERBOSE_LOGGING && console.error(error);
      reject(error);
    } else {
      resolve(true);
    }
  });
};

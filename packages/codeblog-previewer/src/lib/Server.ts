import { CodeCompiler } from "./CodeCompiler";
import { DependencyManager } from "./DependencyManager";
import {
  ServerStatus,
  ServerCommandMessageEvent,
  ServerCommandType,
  ServerCommandMessageEventData
} from "./messages";
import { extname } from "path";
import { CodeLoader, getCSSFiles } from "./CodeLoader";
import { isEqual, throttle, debounce, pick, omit } from "lodash";
import { reportBuildError, dismissError } from "../components/ErrorBar";
import Queue from "queue";

export const getCompilableFiles = pkg => {
  return Object.keys(pkg)
    .filter(file => [".js", ".mdx", ".json"].includes(extname(file)))
    .sort();
};

window.VERBOSE_LOGGING = false;

const vlog = (...args) => {
  if (window.VERBOSE_LOGGING) {
    console.log.apply(this, args);
  } else {
    return;
  }
};

const vwarn = (...args) => {
  if (window.VERBOSE_LOGGING) {
    console.warn.apply(this, args);
  } else {
    return;
  }
};

const vtime = (...args) => {
  if (window.VERBOSE_LOGGING) {
    console.time.apply(this, args);
  } else {
    return;
  }
};

const vtimeEnd = (...args) => {
  if (window.VERBOSE_LOGGING) {
    console.timeEnd.apply(this, args);
  } else {
    return;
  }
};

const sendMessage = ({ type, value, error }: ServerCommandMessageEventData) => {
  if (process.env.NODE_ENV !== "production") {
    vlog("[Server] Send message:", value);
  }
  self.parent.postMessage({ type, value, error, from: "Server" }, "*");
};

export class Server {
  compiler: CodeCompiler;
  dependencyManager: DependencyManager;
  status: ServerStatus;
  startedLoadingPostAt: Date | null;
  lastPost: any;
  lastCompiledPost: any;
  lastTemplate: any;
  lastCompiledTemplate: any;
  lastProps: any;
  hasBuildError: boolean = false;
  queue: Queue;
  isQueueReady: boolean = false;

  constructor() {
    this.status = ServerStatus.init;

    this.queue = Queue({
      autostart: false,
      concurrency: 1,
      timeout: 60000
    });
    this.compiler = new CodeCompiler();
    this.dependencyManager = new DependencyManager();
  }

  startListening = () => {
    window.addEventListener("message", this.listenForCommands);
    this.initializeFS().then(() => {
      this.isQueueReady = true;
      this.queue.start();
    });
  };

  _handleError = (error: Error, status: ServerStatus, message?: string) => {
    console.group("[Server]", status);
    console.error(error);
    console.groupEnd();

    this.hasBuildError = true;
    this.lastCompiledTemplate = null;
    this.lastTemplate = null;
    reportBuildError(
      error,
      [
        ServerStatus.compiling_post_error,
        ServerStatus.compiling_template_error,
        ServerStatus.installing_dependencies_error
      ].includes(status),
      status
    );

    this.status = status;
    sendMessage({
      type: ServerCommandType.get_state,
      value: status,
      from: "Server",
      error: error
    });
  };

  handleError = debounce(this._handleError, 2000, {
    trailing: true
  });

  sendStatusUpdate = (status?: ServerStatus) => {
    sendMessage({
      type: ServerCommandType.get_state,
      value: status || this.status,
      from: "Server",
      error: null
    });
  };

  handleCompilePost = async (post: any) => {
    try {
      vtime("[Server] Compile post");
      this.status = ServerStatus.compiling_post;
      const compiledPost = await this.compiler.onChangeCode(post, "post");
      vtimeEnd("[Server] Compile post");
      this.sendStatusUpdate(ServerStatus.compiling_template_finished);
      return compiledPost;
    } catch (error) {
      vtimeEnd("[Server] Compile post");
      this.handleError(error, ServerStatus.compiling_post_error);
      return Promise.reject({
        error,
        status: ServerStatus.compiling_post_error
      });
    }
  };

  handleDismissError = () => {
    this.handleError.cancel();
    dismissError();
  };

  handleCompileTemplate = async (template: any) => {
    try {
      vtime("[Server] Compile template");
      this.status = ServerStatus.compiling_template;
      const compiledTemplate = await this.compiler.onChangeCode(
        template,
        "template"
      );
      vtimeEnd("[Server] Compile template");
      this.sendStatusUpdate(ServerStatus.compiling_template_finished);
      return compiledTemplate;
    } catch (error) {
      vtimeEnd("[Server] Compile template");
      this.handleError(error, ServerStatus.compiling_template_error);
      return Promise.reject({
        error,
        status: ServerStatus.compiling_template_error
      });
    }
  };

  handleInitializeFS = async () => {
    try {
      this.status = ServerStatus.fs_init;
      vtime("[Server] Initialize FS");
      await this.dependencyManager.initializeFS();
      this.sendStatusUpdate(ServerStatus.fs_finished);
      vtimeEnd("[Server] Initialize FS");
    } catch (error) {
      this.handleError(error, ServerStatus.fs_error);
      vtimeEnd("[Server] Initialize FS");
      return Promise.reject({ error, status: ServerStatus.fs_error });
    }
  };

  initializeFS = () => {
    return new Promise((resolve, reject) => {
      self.requestIdleCallback(
        async () => {
          await this.handleInitializeFS();
          resolve();
        },
        {
          timeout: 1000
        }
      );
    });
  };

  __handleLoadPost = async (post: any, template: any, props: any) => {
    this.handleDismissError();

    console.time("[Server] Load post");

    this.startedLoadingPostAt = new Date();

    let compiledPost, compiledTemplate;
    let isPostChanged = true;
    let isTemplateChanged = true;

    try {
      const promises = [];

      const compilableJSPost = pick(post.files, getCompilableFiles(post.files));
      const compilableLastPost = this.lastPost
        ? pick(this.lastPost.files, getCompilableFiles(this.lastPost.files))
        : null;

      if (
        !this.lastPost ||
        (!isEqual(compilableJSPost, compilableLastPost) &&
          this.lastCompiledPost)
      ) {
        promises.push(this.handleCompilePost(post));
      } else {
        isPostChanged = false;

        const cssFiles = getCSSFiles(post.files);
        const cssPost = pick(post.files, cssFiles);
        const cssLastPost = pick(
          this.lastPost,
          getCSSFiles(this.lastPost.files)
        );

        if (!isEqual(cssPost, cssLastPost)) {
          this.lastCompiledPost = omit(
            Object.assign({}, this.lastCompiledPost),
            getCSSFiles(this.lastCompiledPost)
          );

          cssFiles.forEach(name => {
            this.lastCompiledPost[name] = post.files[name];
          });
        }

        promises.push(this.lastCompiledPost);
      }

      const compilableJSTemplate = pick(
        template.files,
        getCompilableFiles(template.files)
      );
      const compilableLastTemplate =
        this.lastTemplate &&
        pick(
          this.lastTemplate.files,
          getCompilableFiles(this.lastTemplate.files)
        );

      if (
        !this.lastTemplate ||
        (!isEqual(compilableJSTemplate, compilableLastTemplate) &&
          this.lastCompiledTemplate)
      ) {
        promises.push(this.handleCompileTemplate(template));
      } else {
        const cssFiles = getCSSFiles(template.files);
        const cssTemplate = pick(template.files, cssFiles);
        const cssLastTemplate = pick(
          this.lastTemplate.files,
          getCSSFiles(this.lastTemplate)
        );

        if (!isEqual(cssTemplate, cssLastTemplate)) {
          this.lastCompiledTemplate = omit(
            Object.assign({}, this.lastCompiledTemplate),
            getCSSFiles(this.lastCompiledTemplate)
          );

          cssFiles.forEach(name => {
            this.lastCompiledTemplate[name] = template.files[name];
          });
        }

        promises.push(this.lastCompiledTemplate);
        isTemplateChanged = false;
      }

      const result = await Promise.all(promises);
      compiledPost = result[0];
      compiledTemplate = result[1];
    } catch ({ error, status, ...other }) {
      this.handleError(error, status);
      console.timeEnd("[Server] Load post");
      return;
    }

    this.handleError.cancel();

    this.status = this.dependencyManager.status;
    this.dependencyManager.templatePkg = compiledTemplate;
    this.dependencyManager.postPkg = compiledPost;

    this.sendStatusUpdate();

    try {
      this.status = ServerStatus.installing_dependencies;
      this.sendStatusUpdate();

      vtime("[Server] Load Dependencies");
      await this.dependencyManager.installDependencies();
      vtimeEnd("[Server] Load Dependencies");
      this.status = this.dependencyManager.status;
      this.sendStatusUpdate();

      await this.dependencyManager.installTemplate();
      this.status = this.dependencyManager.status;
      this.sendStatusUpdate();

      await this.dependencyManager.installPost();
      this.status = this.dependencyManager.status;
      this.sendStatusUpdate();
    } catch (error) {
      this.handleError(error, ServerStatus.installing_dependencies_error);
      console.timeEnd("[Server] Load post");
      return;
    }

    this.handleError.cancel();

    this.status = ServerStatus.loading_code;
    this.sendStatusUpdate();

    try {
      vtime("[Server] Load code");
      await CodeLoader.loadPost(
        compiledPost,
        compiledTemplate,
        this.dependencyManager.installer.styleURLs(),
        props,
        isTemplateChanged,
        isPostChanged,
        !isEqual(this.lastProps, props)
      );
      vtimeEnd("[Server] Load code");
    } catch (error) {
      this.handleError(error, ServerStatus.loading_code_error);
      vtimeEnd("[Server] Load code");
      console.timeEnd("[Server] Load post");
      return;
    }

    this.handleError.cancel();

    this.status = ServerStatus.ready;
    this.sendStatusUpdate();
    console.timeEnd("[Server] Load post");
    if (console.timeStamp) {
      console.timeStamp("Load post");
    }

    this.startedLoadingPostAt = null;
    this.lastPost = post;
    this.lastTemplate = template;
    this.lastCompiledPost = compiledPost;
    this.lastCompiledTemplate = compiledTemplate;
    this.lastProps = props;
  };

  handleLoadPost = (post: any, template: any, props: any) => {
    if (this.queue.length > 1) {
      this.queue.splice(1, this.queue.length - 2);
    }

    this.queue.push(cb => {
      return this.__handleLoadPost(post, template, props);
    });

    if (this.isQueueReady && typeof this.queue.start === "function") {
      this.queue.start();
    }
  };

  handleLoadTemplate = (template: any, props: any) => {};
  handleSendHTML = () => {
    sendMessage({
      type: ServerCommandType.get_html,
      value: document.documentElement.outerHTML,
      from: "Server",
      error: null
    });
  };

  handleGetRecipes = () => {};

  listenForCommands = (event: ServerCommandMessageEvent) => {
    const { type = null, value = null, from } = event.data;

    if (from === "Server") {
      return;
    }

    vlog("[Server] Received command", type);

    if (type === ServerCommandType.get_state) {
      this.sendStatusUpdate();
    } else if (
      type === ServerCommandType.load_post &&
      typeof value === "object"
    ) {
      this.handleLoadPost(value.post, value.template, value.props);
    } else if (
      type === ServerCommandType.load_template &&
      typeof value === "object"
    ) {
      this.handleLoadTemplate(value.template, value.props);
    } else if (type === "get_recipes") {
      this.handleGetRecipes();
    } else if (type === "get_html") {
      this.handleSendHTML();
    } else {
      vwarn("Received unknown message", event.data);
    }
  };
}

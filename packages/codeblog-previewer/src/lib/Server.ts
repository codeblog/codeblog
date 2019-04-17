import { CodeCompiler } from "./CodeCompiler";
import { DependencyManager } from "./DependencyManager";
import {
  ServerStatus,
  ServerCommandMessageEvent,
  ServerCommandType,
  ServerCommandMessageEventData
} from "./messages";
import { CodeLoader } from "./CodeLoader";
import { isEqual, throttle } from "lodash";
import { reportBuildError, dismissError } from "../components/ErrorBar";

const VERBOSE_LOGGING = false;

const vlog = (...args) => {
  if (VERBOSE_LOGGING) {
    console.log.call(this, args);
  } else {
    return;
  }
};

const vwarn = (...args) => {
  if (VERBOSE_LOGGING) {
    console.warn.call(this, args);
  } else {
    return;
  }
};

const vtime = (...args) => {
  if (VERBOSE_LOGGING) {
    console.time.call(this, args);
  } else {
    return;
  }
};

const vtimeEnd = (...args) => {
  if (VERBOSE_LOGGING) {
    console.timeEnd.call(this, args);
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
  postCompiler: CodeCompiler;
  templateCompiler: CodeCompiler;
  dependencyManager: DependencyManager;
  status: ServerStatus;
  startedLoadingPostAt: Date | null;
  lastPost: any;
  lastCompiledPost: any;
  lastTemplate: any;
  lastCompiledTemplate: any;
  hasBuildError: boolean = false;

  constructor() {
    this.status = ServerStatus.init;

    this.postCompiler = new CodeCompiler({ type: "post" });
    this.templateCompiler = new CodeCompiler({ type: "template" });
    this.dependencyManager = new DependencyManager();
  }

  startListening = () => {
    window.addEventListener("message", this.listenForCommands);
  };

  _handleError = (error: Error, status: ServerStatus) => {
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

  handleError = throttle(this._handleError, 2000, {
    leading: true,
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
      const compiledPost = await this.postCompiler.onChangeCode(post);
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

  handleCompileTemplate = async (template: any) => {
    try {
      vtime("[Server] Compile template");
      this.status = ServerStatus.compiling_template;
      const compiledTemplate = await this.templateCompiler.onChangeCode(
        template
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

  _handleLoadPost = async (post: any, template: any, props: any) => {
    if (
      !this.hasBuildError &&
      this.startedLoadingPostAt &&
      (new Date().getTime() - this.startedLoadingPostAt.getTime()) / 1000 < 10
    ) {
      return;
    }

    if (this.hasBuildError) {
      this.hasBuildError = false;
      dismissError();
    }

    console.time("[Server] Load post");

    this.startedLoadingPostAt = new Date();

    let compiledPost, compiledTemplate;
    let isPostChanged = true;
    let isTemplateChanged = true;

    try {
      const promises = [];

      if (
        !this.lastPost ||
        (!isEqual(post, this.lastPost) && this.lastCompiledPost)
      ) {
        promises.push(this.handleCompilePost(post));
      } else {
        isPostChanged = false;
        promises.push(this.lastCompiledPost);
      }

      if (
        !this.lastTemplate ||
        (!isEqual(template, this.lastTemplate) && this.lastCompiledTemplate)
      ) {
        promises.push(this.handleCompileTemplate(template));
      } else {
        promises.push(this.lastCompiledTemplate);
        isTemplateChanged = false;
      }

      dismissError();

      const handleFS = new Promise((resolve, reject) => {
        self.requestIdleCallback(
          async () => {
            await this.handleInitializeFS();
            resolve();
          },
          {
            timeout: 100
          }
        );
      });

      promises.push(handleFS);

      const result = await Promise.all(promises);
      compiledPost = result[0];
      compiledTemplate = result[1];
    } catch ({ error, status, ...other }) {
      this.handleError(error, status);
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
        isPostChanged
      );
      vtimeEnd("[Server] Load code");
    } catch (error) {
      this.handleError(error, ServerStatus.loading_code_error);
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
  };

  handleLoadPost = throttle(this._handleLoadPost, 150, {
    trailing: true,
    leading: false
  });

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

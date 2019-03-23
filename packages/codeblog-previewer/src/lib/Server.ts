import { CodeCompiler } from "./CodeCompiler";
import { DependencyManager } from "./DependencyManager";
import {
  ServerStatus,
  ServerCommandMessageEvent,
  ServerCommandType,
  ServerCommandMessageEventData
} from "./messages";
import { CodeLoader } from "./CodeLoader";

const sendMessage = ({ type, value, error }: ServerCommandMessageEventData) => {
  if (process.env.NODE_ENV !== "production") {
    console.info("[Server] Send message:", value);
  }
  self.parent.postMessage({ type, value, error, from: "Server" }, "*");
};

export class Server {
  postCompiler: CodeCompiler;
  templateCompiler: CodeCompiler;
  dependencyManager: DependencyManager;
  status: ServerStatus;

  constructor() {
    this.status = ServerStatus.init;

    this.postCompiler = new CodeCompiler({ type: "post" });
    this.templateCompiler = new CodeCompiler({ type: "template" });
    this.dependencyManager = new DependencyManager();
  }

  startListening = () => {
    window.addEventListener("message", this.listenForCommands);
  };

  handleError = (error: Error, status: ServerStatus) => {
    console.group("[Server]", status);
    console.error(error);
    console.groupEnd();

    this.status = status;
    sendMessage({
      type: ServerCommandType.get_state,
      value: status,
      from: "Server",
      error: error
    });
  };

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
      console.time("[Server] Compile post");
      this.status = ServerStatus.compiling_post;
      const compiledPost = await this.postCompiler.onChangeCode(post);
      console.timeEnd("[Server] Compile post");
      this.sendStatusUpdate(ServerStatus.compiling_template_finished);
      return compiledPost;
    } catch (error) {
      return Promise.reject({
        error,
        status: ServerStatus.compiling_post_error
      });
    }
  };

  handleCompileTemplate = async (template: any) => {
    try {
      console.time("[Server] Compile template");
      this.status = ServerStatus.compiling_template;
      const compiledTemplate = await this.templateCompiler.onChangeCode(
        template
      );
      console.timeEnd("[Server] Compile template");
      this.sendStatusUpdate(ServerStatus.compiling_template_finished);
      return compiledTemplate;
    } catch (error) {
      return Promise.reject({
        error,
        status: ServerStatus.compiling_template_error
      });
    }
  };

  handleInitializeFS = async () => {
    try {
      this.status = ServerStatus.fs_init;
      await this.dependencyManager.initializeFS();
      this.sendStatusUpdate(ServerStatus.fs_finished);
      console.timeEnd("[Server] Initialize FS");
    } catch (error) {
      return Promise.reject({ error, status: ServerStatus.fs_error });
    }
  };

  handleLoadPost = async (post: any, template: any, props: any) => {
    console.time("[Server] Load post");

    let compiledPost, compiledTemplate;

    try {
      const result = await Promise.all([
        this.handleCompilePost(post),
        this.handleCompileTemplate(template),
        this.handleInitializeFS()
      ]);
      compiledPost = result[0];
      compiledTemplate = result[1];
    } catch ({ error, status }) {
      this.handleError(error, status);
      return;
    }

    this.status = this.dependencyManager.status;
    this.dependencyManager.templatePkg = compiledTemplate;
    this.dependencyManager.postPkg = compiledPost;

    this.sendStatusUpdate();

    try {
      this.status = ServerStatus.installing_dependencies;
      this.sendStatusUpdate();

      console.time("[Server] Load Dependencies");
      await this.dependencyManager.installDependencies();
      console.timeEnd("[Server] Load Dependencies");
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

    this.status = ServerStatus.loading_code;
    this.sendStatusUpdate();

    try {
      console.time("[Server] Load code");
      CodeLoader.loadPost(
        compiledPost,
        compiledTemplate,
        this.dependencyManager.installer.styleURLs(),
        props
      );
      console.timeEnd("[Server] Load code");
    } catch (error) {
      this.handleError(error, ServerStatus.loading_code_error);
    }

    this.status = ServerStatus.ready;
    this.sendStatusUpdate();
    console.timeEnd("[Server] Load post");
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

  listenForCommands = (event: ServerCommandMessageEvent) => {
    const { type = null, value = null, from } = event.data;

    if (from === "Server") {
      return;
    }

    console.log("[Server] Received command", type);

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
    } else if (type === "get_html") {
      this.handleSendHTML();
    } else {
      console.warn("Received unknown message", event.data);
    }
  };
}

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

  sendStatusUpdate = () => {
    sendMessage({
      type: ServerCommandType.get_state,
      value: this.status,
      from: "Server",
      error: null
    });
  };

  handleLoadPost = async (post: any, template: any, props: any) => {
    console.time("[Server] Load post");
    let compiledPost, compiledTemplate, installer;

    try {
      console.time("[Server] Compile post");
      this.status = ServerStatus.compiling_post;
      compiledPost = await this.postCompiler.onChangeCode(post);
      console.timeEnd("[Server] Compile post");
    } catch (error) {
      this.handleError(error, ServerStatus.compiling_post_error);
      return;
    }

    this.sendStatusUpdate();

    try {
      console.time("[Server] Compile template");
      this.status = ServerStatus.compiling_template;
      compiledTemplate = await this.templateCompiler.onChangeCode(template);
      console.timeEnd("[Server] Compile template");
    } catch (error) {
      this.handleError(error, ServerStatus.compiling_template_error);
      return;
    }

    this.sendStatusUpdate();

    this.status = this.dependencyManager.status;
    this.dependencyManager.templatePkg = compiledTemplate;
    this.dependencyManager.postPkg = compiledPost;

    this.sendStatusUpdate();

    try {
      this.status = ServerStatus.fs_init;
      console.time("[Server] Initialize FS");
      await this.dependencyManager.initializeFS();
      console.timeEnd("[Server] Initialize FS");
    } catch (error) {
      this.handleError(error, ServerStatus.fs_error);
      return;
    }

    this.sendStatusUpdate();

    try {
      this.status = ServerStatus.installing_dependencies;
      this.sendStatusUpdate();

      await this.dependencyManager.installDependencies();
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
      CodeLoader.loadPost(compiledPost, compiledTemplate, props);
      console.timeEnd("[Server] Load code");
    } catch (error) {
      this.handleError(error, ServerStatus.loading_code_error);
    }

    this.status = ServerStatus.ready;
    this.sendStatusUpdate();
    console.timeEnd("[Server] Load post");
  };

  handleLoadTemplate = (template: any, props: any) => {};

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
    } else {
      console.warn("Received unknown message", event.data);
    }
  };
}

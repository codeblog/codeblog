export enum CodeCompilerMessages {
  edited_post = "edited_post",
  edited_post_compile_start = "edited_post_compile_start",
  edited_post_compile_finish = "edited_post_compile_finish",

  edited_template = "edited_template",
  edited_template_compile_start = "edited_template_compile_start",
  edited_template_compile_finish = "edited_template_compile_finish"
}

export type CompiledPackage = {
  "package.json": string;
  [path: string]: string;
};
export type RawPackage = { [path: string]: string };

export enum BabelWorkerMessages {
  compile_start = "compile_start",
  compile_running = "compile_running",
  compile_finished = "compile_finished"
}

export interface BabelWorkerMessageData {
  type: BabelWorkerMessages;
  error: Error | null;
  packageType: "post" | "template";
  pkg: any;
  value: CompiledPackage | RawPackage | null;
}

export type BabelWorkerMessageEvent = {
  data: BabelWorkerMessageData;
};

export enum ServerStatus {
  init = "init",

  fs_init = "fs_init",
  fs_error = "fs_error",

  compiling_post = "compiling_post",
  compiling_post_error = "compiling_post_error",

  compiling_template = "compiling_template",
  compiling_template_error = "compiling_template_error",

  installing_dependencies = "installing_dependencies",
  installing_dependencies_error = "installing_dependencies_error",
  installing_dependencies_finished = "installing_dependencies_finished",

  loading_code = "loading_code",
  loading_code_error = "loading_code_error",

  ready = "ready"
}

export enum ServerCommandType {
  load_post = "load_post",
  load_template = "load_post",
  get_state = "get_state"
}

export type ServerCommandPackageValue = {
  post: any;
  template: any;
  props: any;
};

export type ServerCommandMessageEventData = {
  type: ServerCommandType;
  error: Error | null;
  from: "Server" | "Client";
  value: ServerCommandPackageValue | ServerStatus | null;
};

export type ServerCommandMessageEvent = {
  data: ServerCommandMessageEventData;
};

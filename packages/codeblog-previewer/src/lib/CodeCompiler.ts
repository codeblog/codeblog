import BabelWorker from "../workers/BabelWorker.worker";
import {
  BabelWorkerMessages,
  CompiledPackage,
  RawPackage,
  BabelWorkerMessageEvent,
  BabelWorkerMessageData
} from "./messages";

export class CodeCompiler {
  codeCompiler: Worker;
  codeCompilerStatus: BabelWorkerMessages;
  codeCompilerError: Error;
  type: "post" | "template";
  onCodeChangeComplete: (value: CompiledPackage) => void | null;
  onCodeChangeError: (error: Error) => void | null;

  constructor({ type }: { type: "post" | "template" }) {
    this.type = type;
    this.codeCompiler = new BabelWorker();
    this.codeCompilerStatus = null;
    this.onCodeChangeComplete = null;
    this.onCodeChangeError = null;

    this.codeCompiler.onmessage = this.handleCodeCompilerMessage;
  }

  dispose = () => {
    this.codeCompiler.dispose();
  };

  handleCodeCompilerMessage = (evt: ServiceWorkerMessageEvent) => {
    if (Object.values(BabelWorkerMessages).includes(evt.data.type)) {
      this.codeCompilerStatus = evt.data.type;
      this.codeCompilerError = evt.data.error;

      if (
        this.codeCompilerStatus === BabelWorkerMessages.compile_finished &&
        !this.codeCompilerError
      ) {
        if (this.onCodeChangeComplete) {
          this.onCodeChangeComplete(evt.data.value);
        }

        this.onCodeChangeComplete = null;
      } else if (
        this.codeCompilerStatus === BabelWorkerMessages.compile_finished &&
        this.codeCompilerError
      ) {
        if (this.onCodeChangeError) {
          this.onCodeChangeError(evt.data.error);
        }

        this.onCodeChangeError = null;
      }
    } else {
      console.warn("Unknown message", evt);
    }
  };

  onChangeCode = (originalCode: RawPackage) => {
    return new Promise((resolve, reject) => {
      const data: BabelWorkerMessageData = {
        type: BabelWorkerMessages.compile_start,
        error: null,
        packageType: this.type,
        pkg: originalCode,
        value: null
      };

      this.codeCompiler.postMessage(data);

      this.onCodeChangeComplete = resolve;
      this.onCodeChangeError = reject;
    });
  };
}

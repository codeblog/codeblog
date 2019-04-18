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
  onCodeChangeComplete: (value: CompiledPackage) => void | null;
  onCodeChangeError: (error: Error) => void | null;

  constructor() {
    this.codeCompiler = new BabelWorker();
  }

  dispose = () => {
    this.codeCompiler.dispose();
  };

  onChangeCode = (originalCode: RawPackage, type: "post" | "template") => {
    return new Promise((resolve, reject) => {
      const data: BabelWorkerMessageData = {
        type: BabelWorkerMessages.compile_start,
        error: null,
        packageType: type,
        pkg: originalCode,
        value: null
      };

      const onMessage = (_evt: ServiceWorkerMessageEvent) => {
        const data = _evt.data;
        const responseType = data.type;
        const packageType = data.packageType;
        const error = data.error;

        if (packageType !== type) {
          return;
        }

        if (Object.values(BabelWorkerMessages).includes(responseType)) {
          if (responseType === BabelWorkerMessages.compile_finished && !error) {
            resolve(data.value);
            this.codeCompiler.removeEventListener("message", onMessage);
          } else if (
            responseType === BabelWorkerMessages.compile_finished &&
            error
          ) {
            reject(error);
            this.codeCompiler.removeEventListener("message", onMessage);
          }
        } else {
          console.warn("Unknown message", _evt);
        }
      };

      this.codeCompiler.addEventListener("message", onMessage);
      this.codeCompiler.postMessage(data);
    });
  };
}

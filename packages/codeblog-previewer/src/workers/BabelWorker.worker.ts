import {
  buildPackageFromPost,
  buildPackageFromTemplate
} from "codeblog-build-npm-package";
import { BabelWorkerMessageEvent, BabelWorkerMessages } from "../lib/messages";

self.addEventListener("message", async (ev: BabelWorkerMessageEvent) => {
  const { packageType, pkg } = ev.data;

  let promise;
  if (packageType === "post") {
    promise = buildPackageFromPost({
      post: pkg,
      name: "test-post",
      version: "1.0"
    });
  } else if (packageType === "template") {
    promise = buildPackageFromTemplate({
      template: pkg,
      name: "codeblog-template",
      version: "1.0.0"
    });
  }

  promise.then(
    compiledPackage => {
      postMessage({
        type: BabelWorkerMessages.compile_finished,
        packageType,
        error: null,
        pkg,
        value: compiledPackage
      });
    },
    err => {
      postMessage({
        type: BabelWorkerMessages.compile_finished,
        packageType,
        error: err,
        pkg,
        value: null
      });
    }
  );

  postMessage({
    type: BabelWorkerMessages.compile_running,
    packageType,
    error: null,
    pkg,
    value: null
  });
});

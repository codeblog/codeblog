import {
  buildPackageFromPost,
  buildPackageFromTemplate
} from "codeblog-build-npm-package";
import { BabelWorkerMessageEvent, BabelWorkerMessages } from "../lib/messages";

self.addEventListener("message", async (ev: BabelWorkerMessageEvent) => {
  const { packageType, pkg } = ev.data;

  postMessage({
    type: BabelWorkerMessages.compile_running,
    packageType,
    error: null,
    pkg,
    value: null
  });

  try {
    let compiledPackage;
    if (packageType === "post") {
      compiledPackage = await buildPackageFromPost({
        post: pkg,
        name: "test-post",
        version: "1.0"
      });
    } else if (packageType === "template") {
      compiledPackage = await buildPackageFromTemplate({
        template: pkg,
        name: "codeblog-template",
        version: "1.0.0"
      });
    }

    postMessage({
      type: BabelWorkerMessages.compile_finished,
      packageType,
      error: null,
      pkg,
      value: compiledPackage
    });
  } catch (err) {
    postMessage({
      type: BabelWorkerMessages.compile_finished,
      packageType,
      error: { message: err.message, stack: err.stack },
      pkg,
      value: null
    });
  }
});

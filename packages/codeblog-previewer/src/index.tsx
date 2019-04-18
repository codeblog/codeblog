import "iframe-resizer/js/iframeResizer.contentWindow.js";
import { reportLoadingStatus } from "./components/ErrorBar";
import "./index.css";
import { Server } from "./lib/Server";

reportLoadingStatus("Starting development environment");

const startServer = () => {
  const server = new Server();
  self.server = server;

  server.startListening();
};

const insertContainer = () => {
  if (!document.querySelector("#codeblog")) {
    const root = document.createElement("div");
    root.id = "codeblog";
    document.body.append(root);
  }

  if (!document.querySelector("#codeblog-fake-hidden-box")) {
    const root = document.createElement("div");
    root.id = "codeblog-fake-hidden-box";

    // root.style.top = -99999;
    // root.style.left = -99999;
    document.body.append(root);
  }

  if (!document.querySelector("#codeblog-runtime-error-box")) {
    const root = document.createElement("div");
    root.id = "codeblog-runtime-error-box";
    document.body.append(root);
  }

  if (!document.querySelector("#iframe-resize-div")) {
    const iframeResizeDiv = document.createElement("div");
    iframeResizeDiv.id = "iframe-resize-div";
    iframeResizeDiv.setAttribute("data-iframe-height", "yes-plz");
    document.body.append(iframeResizeDiv);
  }
};

startServer();

if (typeof window !== "undefined" && location.search.includes("debug")) {
  try {
    insertContainer();
  } catch (exception) {}

  import(/* webpackChunkName: "debug-bundle" */
  `./debug`).then(debug => debug.buildPage());
} else if (
  typeof window !== "undefined" &&
  location.search.includes("recipe")
) {
  try {
    insertContainer();
  } catch (exception) {}

  import(/* webpackChunkName: "debug-bundle" */
  `./debug`).then(debug => debug.buildPage());
}

window.addEventListener("DOMContentLoaded", insertContainer);

if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

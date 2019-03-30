import React from "react";
import * as BrowserFS from "codesandbox-browserfs";

import { overlayStyle, iframeStyle } from "react-error-guard/lib/styles";
// import getStackFrames from "react-error-guard/lib/utils/getStackFrames";
import Stacktrace from "stacktrace-js";
import { Portal } from "react-portal";

import RuntimeError from "react-error-guard/lib/containers/RuntimeError";
let editorHandler = null;

function setEditorHandler(handler) {
  editorHandler = handler;
}

let counter = 0;
let evenRender = null;
let oddRender = null;

export const getStacktrace = (error: Error) => {
  const customFetch = (url, options) => {
    if (
      url.startsWith("webpack") ||
      url.startsWith("file") ||
      url.startsWith("/") ||
      !url.startsWith("http")
    ) {
      let pathname = url.split("://")[1];
      if (pathname.startsWith("./")) {
        pathname = pathname.substr(2);
      }

      if (pathname.startsWith("//")) {
        pathname = pathname.substr(1);
      }

      const fs = BrowserFS.BFSRequire("fs");

      if (fs.existsSync(pathname)) {
        return {
          text: () => Promise.resolve(fs.readFileSync(pathname))
        };
      } else {
        return {
          text: () => Promise.resolve("abcd")
        };
      }
    }
  };

  return Stacktrace.fromError(error, { ajax: customFetch });
};

const OuterWrapper = ({ children, hasRenderedOnce }) => (
  <div
    style={{ ...iframeStyle, position: hasRenderedOnce ? "fixed" : "static" }}
  >
    <div style={{ ...overlayStyle, textAlign: "left", padding: "12px 14px" }}>
      {children}
    </div>
  </div>
);

export class ErrorBoundaryComponent extends React.Component {
  state = {
    currentRuntimeErrorRecords: []
  };

  dismissRuntimeErrors = () => {
    this.setState({
      currentRuntimeErrorRecords: []
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error && this.props.error) {
      this.handleNewError(this.props.error);
    } else if (!this.props.error && prevProps.error) {
      this.dismissRuntimeErrors();
    }
  }

  componentDidMount() {
    if (this.props.error) {
      this.handleNewError(this.props.error);
    }
  }

  handleRuntimeError = errorRecord => {
    let { currentRuntimeErrorRecords } = this.state;
    if (
      currentRuntimeErrorRecords.some(
        ({ error }) => error === errorRecord.error
      )
    ) {
      // Deduplicate identical errors.
      // This fixes https://github.com/facebook/create-react-app/issues/3011.
      return;
    }

    currentRuntimeErrorRecords = currentRuntimeErrorRecords.concat([
      errorRecord
    ]);

    this.setState({
      currentRuntimeErrorRecords
    });
  };

  handleNewError = error => {
    getStacktrace(error)
      .then(stackFrames => {
        if (stackFrames == null) {
          return;
        }

        this.handleRuntimeError({
          error,
          unhandledRejection: false,
          contextSize: 3,
          stackFrames
        });
      })
      .catch(e => {
        console.log("Could not get the stack frames of error:", e);
      });
  };

  render() {
    const { currentRuntimeErrorRecords } = this.state;

    let errorEl = null;
    if (currentRuntimeErrorRecords.length > 0) {
      errorEl = (
        <OuterWrapper hasRenderedOnce={this.props.hasRenderedOnce}>
          <RuntimeError
            errorRecord={currentRuntimeErrorRecords[0]}
            editorHandler={editorHandler}
          />
        </OuterWrapper>
      );
    }

    return errorEl;
  }
}

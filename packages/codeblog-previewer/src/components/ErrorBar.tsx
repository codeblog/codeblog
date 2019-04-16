import * as React from "react";
import ReactDOM from "react-dom";
import {
  getStacktrace,
  ErrorBoundaryComponent
} from "./CodeblogErrorContainer";
import { ServerStatus } from "../lib/messages";
import { trim } from "lodash";
import "./ErrorBar.css";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  error?: Error;
  isLoading?: boolean;
  status: ServerStatus;
  message?: string;
  isFatal?: boolean;
};

const LEVEL_CLASS_NAME = {
  build: "CodeblogPreviewBuildError",
  runtime: "CodeblogPreviewRuntimeError"
};

const messageFormatter = (error: Error) => {
  if (error.message.includes("Expected corresponding JSX closing tag for")) {
    const tag = trim(
      error.message
        .split("\n")[0]
        .substr(
          error.message.indexOf("Expected corresponding JSX closing tag for") +
            "Expected corresponding JSX closing tag for".length
        )
        .split(/\(.*\)/)[0]
    );
    return (
      <>
        <span className="ErrorBarTagName">{tag}</span> needs a closing tag. Try:
        <span className="ErrorBarTagName">
          &lt;/{tag.replace(/[<>\s]?/gm, "")}&gt;
        </span>
      </>
    );
  } else if (error.message.startsWith("unknown: ")) {
    if (error.message.includes("Unexpected token")) {
      return "Unexpected token. Maybe its an import issue? Learn more in your console.";
    } else {
      return error.message.split("unknown: ")[1].split("\n")[0];
    }
  } else {
    return error.message.split("\n")[0];
  }
};

export class ErrorBar extends React.Component<Props> {
  state = {
    normalizedError: null,
    isExpanded: false
  };

  componentDidMount() {
    this.getError();

    if (
      this.props.error &&
      !document.body.className.includes(LEVEL_CLASS_NAME[this.props.level])
    ) {
      document.body.className += " " + LEVEL_CLASS_NAME[this.props.level];
    }
  }

  getError = () => {
    if (!this.props.error) {
      return;
    }

    getStacktrace(this.props.error).then(stack => {
      this.setState({ normalizedError: stack });
    });
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.error &&
      !document.body.className.includes(LEVEL_CLASS_NAME[this.props.level])
    ) {
      document.body.className += " " + LEVEL_CLASS_NAME[this.props.level];
    } else if (
      document.body.className.includes(LEVEL_CLASS_NAME[this.props.level]) &&
      !this.props.error
    ) {
      document.body.className = document.body.className.replace(
        LEVEL_CLASS_NAME[this.props.level],
        ""
      );
    }

    if (this.props.error && prevProps.error !== this.props.error) {
      this.getError();
    }
  }

  componentWillUnmount() {
    if (document.body.className.includes(LEVEL_CLASS_NAME[this.props.level])) {
      document.body.className = document.body.className.replace(
        LEVEL_CLASS_NAME[this.props.level],
        ""
      );
    }
  }

  toggleExpanded = () => this.setState({ isExpanded: !this.state.isExpanded });

  render() {
    const { error, isFatal, status, isLoading, message } = this.props;
    const { normalizedError } = this.state;

    if (error && !normalizedError) {
      return (
        <div className="ErrorBar ErrorBar--fatal">
          <svg height={18} width={18} viewBox="0 0 100 100">
            <path
              fill="rgb(199, 14, 14)"
              d="M91.868 72.178L59.755 16.556a11.264 11.264 0 0 0-19.513 0L8.132 72.178a11.265 11.265 0 0 0 9.756 16.899h64.224c4.025 0 7.744-2.147 9.757-5.632a11.268 11.268 0 0 0-.001-11.267zm-38.447 1.52a3.246 3.246 0 0 1-3.246 3.246h-.176a3.245 3.245 0 0 1-3.245-3.246v-.175a3.245 3.245 0 0 1 3.245-3.245h.176a3.245 3.245 0 0 1 3.246 3.245v.175zm-.177-9.999a3.245 3.245 0 1 1-6.49 0L44.65 34.227c0-1.792 3.558-3.947 5.35-3.947 1.793 0 5.351 2.155 5.351 3.947l-2.107 29.472z"
            />
          </svg>
          &nbsp;
          <span className="ErrorBar-message">
            There's a syntax error somewhere.
          </span>
        </div>
      );
    } else if (error) {
      return (
        <>
          <div className="ErrorBar ErrorBar--fatal">
            <div className="ErrorBar-Content">
              <svg height={18} width={18} viewBox="0 0 100 100">
                <path
                  fill="rgb(199, 14, 14)"
                  d="M91.868 72.178L59.755 16.556a11.264 11.264 0 0 0-19.513 0L8.132 72.178a11.265 11.265 0 0 0 9.756 16.899h64.224c4.025 0 7.744-2.147 9.757-5.632a11.268 11.268 0 0 0-.001-11.267zm-38.447 1.52a3.246 3.246 0 0 1-3.246 3.246h-.176a3.245 3.245 0 0 1-3.245-3.246v-.175a3.245 3.245 0 0 1 3.245-3.245h.176a3.245 3.245 0 0 1 3.246 3.245v.175zm-.177-9.999a3.245 3.245 0 1 1-6.49 0L44.65 34.227c0-1.792 3.558-3.947 5.35-3.947 1.793 0 5.351 2.155 5.351 3.947l-2.107 29.472z"
                />
              </svg>
              &nbsp;
              <span className="ErrorBar-message">
                {messageFormatter(error)}
              </span>
            </div>
            <div onClick={this.toggleExpanded} className="ErrorBar-Expander">
              {!this.state.isExpanded ? (
                <svg height={18} width={18} viewBox="0 0 100 100">
                  <path
                    fill="currentColor"
                    d="M11.8 57.1v27.1c0 2.2 1.8 4 4 4h27.1v-8H25.5L50 55.7l24.5 24.5H57.1v8h27.1c2.2 0 4-1.8 4-4V57.1h-8v17.5L55.7 50l24.5-24.5V43h8V15.8c0-2.2-1.8-4-4-4H57.1v8h17.5L50 44.3 25.5 19.8H43v-8H15.8c-2.2 0-4 1.8-4 4v27.1h8V25.5L44.3 50 19.8 74.5V57.1h-8z"
                  />
                </svg>
              ) : (
                <svg
                  height={18}
                  width={18}
                  viewBox="-0.06 0.062 32 32"
                  overflow="visible"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M4.293.293a.996.996 0 0 1 1.414 0l5.204 5.205 3.442-3.443a1 1 0 0 1 1.707.707v12.299a1 1 0 0 1-1 1H2.763a1 1 0 0 1-.707-1.707l3.442-3.443L.293 5.707a.996.996 0 0 1 0-1.414l4-4zM17.061 16.182h12.298a1 1 0 0 1 .707 1.707l-3.442 3.443 5.024 5.021a.997.997 0 0 1 0 1.414l-4.001 4a.997.997 0 0 1-1.414 0l-5.022-5.023-3.442 3.443a1 1 0 0 1-1.707-.707V17.182a.998.998 0 0 1 .999-1z"
                  />
                </svg>
              )}
            </div>
          </div>
          {this.state.isExpanded && <ErrorBoundaryComponent error={error} />}
        </>
      );
    } else if (isLoading) {
      return (
        <div className="ErrorBar ErrorBar--loading">
          <LoadingSpinner />
          <span className="ErrorBar-message">{message || "Loading..."}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

const ERROR_DIV_SELECTOR = "#__codeblog-error-bar";

export const reportBuildError = (
  error: Error,
  isFatal: boolean,
  status: ServerStatus
) => {
  if (!document.querySelector(ERROR_DIV_SELECTOR)) {
    const el = document.createElement("div");
    el.id = "__codeblog-error-bar";
    document.body.prepend(el);
  }

  ReactDOM.render(
    <ErrorBar error={error} level="build" status={status} />,
    document.querySelector(ERROR_DIV_SELECTOR)
  );
};

export const reportLoadingStatus = (
  message: string | null,
  status: ServerStatus
) => {
  if (!document.querySelector(ERROR_DIV_SELECTOR)) {
    const el = document.createElement("div");
    el.id = "__codeblog-error-bar";
    document.body.prepend(el);
  }

  ReactDOM.render(
    <ErrorBar isLoading status={status} message={message} />,
    document.querySelector(ERROR_DIV_SELECTOR)
  );
};

export const dismissError = () => {
  if (ReactDOM.findDOMNode(document.querySelector(ERROR_DIV_SELECTOR))) {
    ReactDOM.unmountComponentAtNode(document.querySelector(ERROR_DIV_SELECTOR));
  }
};

export const dismissLoading = dismissError;

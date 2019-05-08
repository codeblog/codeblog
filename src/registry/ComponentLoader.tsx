import React from "react";
import scriptjs from "scriptjs";

const getModule = (moduleName: string) => window[moduleName];

const loadScript = (url: string) => {
  return new Promise((resolve, reject) => {
    scriptjs(url, () => resolve(), () => reject());
  });
};

const loadAndEvalScript = async (url: string, moduleName: string) => {
  await loadScript(url);

  return getModule(moduleName);
};

type Props = {
  moduleName: string;
  innerRef: Function | React.Ref<any>;
  children: React.ReactChild;
  src: string;
  componentProps: Object;

  wrapperTagName: "div" | "span";
};

type State = {
  status: "loading" | "completed" | "error";
  error: Error | null;
};

export class ComponentLoader extends React.Component<Props, State> {
  Component: React.ComponentType<any>;

  constructor(props: Props) {
    super(props);

    this.Component = getModule(props.moduleName);

    this.state = {
      status: this.Component ? "completed" : "loading",
      error: null
    };
  }

  componentDidMount() {
    if (this.state.status === "loading") {
      this.loadComponent(false);
    }
  }

  componentDidCatch(error: Error) {
    console.error(`[${this.props.moduleName}]`, error);
    this.setState({
      status: "error"
    });
  }

  static getDerivedStateFromError(_error: Error) {
    return {
      status: "error"
    };
  }

  loadComponent = async (cacheBust: boolean = false) => {
    try {
      this.Component = await loadAndEvalScript(
        cacheBust
          ? this.props.src + `?d=${new Date().getTime()}`
          : this.props.src,
        this.props.moduleName
      );
      this.setState({ status: "completed", error: null });
    } catch (exception) {
      console.error(exception);
      this.setState({ error: exception, status: "error" });
    }
  };

  render() {
    const { status } = this.state;
    const { Component } = this;

    if (status === "completed") {
      return (
        <Component ref={this.props.innerRef} {...this.props.componentProps}>
          {this.props.children}
        </Component>
      );
    } else {
      return React.createElement(
        this.props.wrapperTagName,
        { ref: this.props.innerRef },
        this.props.children
      );
    }
  }
}

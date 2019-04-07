import * as React from "react";

import {
  BlogPostComponentType,
  CodeblogContext,
  EnvironmentType
} from "./CodeblogContext";

type BlogPostWithErrorBoundaryProps = {
  blogPostProps: any;
  environment: EnvironmentType;
  BlogPostComponent: BlogPostComponentType;
};
type BlogPostWithErrorBoundaryState = { hasError: boolean };

class BlogPostWithErrorBoundary extends React.Component<
  BlogPostWithErrorBoundaryProps,
  BlogPostWithErrorBoundaryState
> {
  constructor(props: BlogPostWithErrorBoundaryProps) {
    super(props);

    let hasError = false;

    if (props.environment === "server") {
      const ReactDOM = require("react-dom/server");
      try {
        ReactDOM.renderToString(
          React.createElement(props.BlogPostComponent, props.blogPostProps)
        );
      } catch (exception) {
        hasError = true;
      }
    }

    this.state = {
      hasError
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    if (this.props.blogPostProps.post) {
      console.error(
        `[Codeblog][${
          this.props.blogPostProps.post.url
        }] An error occurred while rendering your post! The post has been automatically hidden, so that the entire page doesn't break.\n\n`,
        error,
        info
      );
    } else {
      console.error(
        `[Codeblog] An error occurred while rendering your post! The post has been automatically hidden, so that the entire page doesn't break.\n\n`,
        error,
        info
      );
    }
  }

  render() {
    const { BlogPostComponent, blogPostProps } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return null;
    } else {
      return <BlogPostComponent {...blogPostProps} />;
    }
  }
}

export const addErrorBoundary = (BlogPostComponent: BlogPostComponentType) => {
  return (props: any = {}) => {
    return (
      <CodeblogContext.Consumer>
        {({ environment }) => (
          <BlogPostWithErrorBoundary
            blogPostProps={props}
            environment={environment}
            BlogPostComponent={BlogPostComponent}
          />
        )}
      </CodeblogContext.Consumer>
    );
  };
};

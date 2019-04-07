import * as React from "react";

import { BlogPostComponentType } from "./CodeblogContext";

type BlogPostWithErrorBoundaryProps = {
  blogPostProps: any;
  BlogPostComponent: BlogPostComponentType;
};
type BlogPostWithErrorBoundaryState = { hasError: boolean };

class BlogPostWithErrorBoundary extends React.Component<
  BlogPostWithErrorBoundaryProps,
  BlogPostWithErrorBoundaryState
> {
  constructor(props: BlogPostWithErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false
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
      <BlogPostWithErrorBoundary
        blogPostProps={props}
        BlogPostComponent={BlogPostComponent}
      />
    );
  };
};

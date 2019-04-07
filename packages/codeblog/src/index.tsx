import * as React from "react";
import { HeadProvider } from "react-head";
import { CodeblogProvider } from "./components/Codeblog";
import {
  BlogComponentType,
  BlogPostComponentType,
  CodeblogContext,
  CodeblogContextInterface,
  Post,
  Blog,
  EnvironmentType,
  PageType
} from "./components/CodeblogContext";

type CodeblogPostProps = CodeblogContextInterface & {
  children: React.ReactNode;
  BlogComponent?: BlogComponentType;
  BlogPostComponent?: BlogPostComponentType;
  headTags?: [];
};

export const CodeblogRoot = (props: CodeblogPostProps) => {
  if (props.pageType === "show") {
    return <CodeblogPost {...props} />;
  } else if (props.pageType === "preview") {
    return <PreviewCodeblogPost {...props} />;
  } else if (props.pageType === "index") {
    return <CodeblogIndexPage {...props} />;
  } else {
    return null;
  }
};

export const CodeblogPost = (props: CodeblogPostProps) => {
  const { BlogComponent, BlogPostComponent } = props;

  return (
    <HeadProvider headTags={props.headTags}>
      <CodeblogProvider
        pageType="show"
        environment={props.environment}
        post={{ ...props.post, body: props.children }}
        blog={props.blog}
        BlogComponent={BlogComponent}
        BlogPostComponent={BlogPostComponent}
      >
        <CodeblogContext.Consumer>
          {contextProps => (
            <BlogComponent {...contextProps}>{props.children}</BlogComponent>
          )}
        </CodeblogContext.Consumer>
      </CodeblogProvider>
    </HeadProvider>
  );
};

type BlogPostWithErrorBoundaryProps = CodeblogContextInterface & {
  post: Post;
  children: React.ReactNode;
  BlogPostComponent: BlogPostComponentType;
};
type BlogPostWithErrorBoundaryState = { hasError: boolean };

class BlogPostWithErrorBoundary extends React.Component<
  BlogPostWithErrorBoundaryProps,
  BlogPostWithErrorBoundaryState
> {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.error(
      `[Codeblog][${
        this.props.post.url
      }] An error occurred while rendering your post! The post has been automatically hidden, so that the entire page doesn't break.\n`,
      error,
      info
    );
  }

  render() {
    const { BlogPostComponent, children } = this.props;
    const { hasError } = this.state;

    if (hasError || !children) {
      return null;
    } else {
      return <BlogPostComponent {...this.props}>{children}</BlogPostComponent>;
    }
  }
}

export const CodeblogIndexPage = (props: CodeblogPostProps) => {
  const { BlogComponent, BlogPostComponent } = props;

  return (
    <HeadProvider headTags={props.headTags}>
      <CodeblogProvider
        pageType="index"
        environment={props.environment}
        posts={props.posts}
        blog={props.blog}
        BlogComponent={BlogComponent}
        BlogPostComponent={BlogPostComponent}
      >
        <CodeblogContext.Consumer>
          {contextProps => (
            <BlogComponent {...contextProps}>
              {React.Children.map(props.children, (child, index) => {
                return (
                  <BlogPostWithErrorBoundary
                    {...contextProps}
                    BlogPostComponent={BlogPostComponent}
                    post={contextProps.posts[index]}
                  >
                    {child}
                  </BlogPostWithErrorBoundary>
                );
              })}
            </BlogComponent>
          )}
        </CodeblogContext.Consumer>
      </CodeblogProvider>
    </HeadProvider>
  );
};

export const PreviewCodeblogPost = (props: CodeblogPostProps) => {
  const { BlogComponent, BlogPostComponent } = props;

  return (
    <HeadProvider headTags={props.headTags}>
      <CodeblogProvider
        pageType="preview"
        environment={props.environment}
        post={{ ...props.post, body: props.children }}
        blog={props.blog}
        BlogComponent={BlogComponent}
        BlogPostComponent={BlogPostComponent}
      >
        <CodeblogContext.Consumer>
          {contextProps => (
            <BlogComponent {...contextProps}>{props.children}</BlogComponent>
          )}
        </CodeblogContext.Consumer>
      </CodeblogProvider>
    </HeadProvider>
  );
};

export const Codeblog = CodeblogContext.Consumer;
export default Codeblog;

export {
  CodeblogContext,
  CodeblogContextInterface,
  Post,
  Blog,
  BlogPostComponentType,
  BlogComponentType,
  EnvironmentType,
  PageType
};

export {
  BlogSEOTags,
  BlogPostSEOTags,
  Title,
  Meta,
  Link
} from "./components/SEOTags";

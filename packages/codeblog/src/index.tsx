import * as React from "react";
import { HeadProvider } from "react-head";
import {
  Codeblog,
  CodeblogContext,
  CodeblogContextInterface,
  CodeblogProvider,
  BlogComponentType,
  BlogPostComponentType
} from "./components/Codeblog";

export { BlogSEOTags, BlogPostSEOTags } from "./components/SEOTags";

type CodeblogPostProps = CodeblogContextInterface & {
  children: React.ReactNode;
  BlogComponent?: BlogComponentType;
  BlogPostComponent?: BlogPostComponentType;
  headTags?: [];
};

export { Codeblog, CodeblogContext, CodeblogContextInterface };

export { Title, Meta, Link } from "react-head";
export {
  Post,
  Blog,
  BlogComponentType,
  BlogPostComponentType,
  EnvironmentType,
  PageType
} from "./components/Codeblog";

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
                  <BlogPostComponent
                    {...contextProps}
                    post={contextProps.posts[index]}
                  >
                    {child}
                  </BlogPostComponent>
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

export default Codeblog;

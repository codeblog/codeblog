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

import * as Template from "./template";

export { Template };

type CodeblogPostProps = CodeblogContextInterface & {
  children: React.ReactNode;
  BlogComponent?: BlogComponentType;
  BlogPostComponent?: BlogPostComponentType;
  headTags?: [];
};

export const CodeblogRoot = (props: CodeblogPostProps) => {
  if (props.pageType === "show") {
    return <CodeblogPost {...props} />;
  } else if (props.pageType === "editor") {
    return <CodeblogPostEditor {...props} />;
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

export const CodeblogPostEditor = (props: CodeblogPostProps) => {
  const { BlogComponent, BlogPostComponent } = props;

  return (
    <HeadProvider headTags={props.headTags}>
      <CodeblogProvider
        pageType="editor"
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
  PageType,
  CodeblogProvider
};

export {
  BlogSEOTags,
  BlogPostSEOTags,
  Title,
  Meta,
  Link
} from "./components/SEOTags";

import * as React from "react";
import { HeadProvider } from "react-head";
import {
  Codeblog as CodeblogContextConsumer,
  CodeblogContext,
  CodeblogProvider,
  BlogComponentType,
  BlogPostComponentType
} from "./components/Codeblog";
import { Blog, BlogPost } from "codeblog-template-simple";

type CodeblogPostProps = CodeblogContext & {
  children: React.ReactNode;
  BlogComponent?: BlogComponentType;
  BlogPostComponent?: BlogPostComponentType;
  headTags?: [];
};

export { CodeblogContextConsumer as CodeblogContext };
export { CodeblogContext as CodeblogContextType };

export { Title, Meta } from "react-head";

export const Codeblog = (props: CodeblogPostProps) => {
  if (!props.BlogComponent) {
    props.BlogComponent = Blog;
  }

  if (!props.BlogPostComponent) {
    props.BlogPostComponent = BlogPost;
  }

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
        <CodeblogContextConsumer>
          {contextProps => (
            <BlogComponent {...contextProps}>
              <BlogPostComponent {...contextProps} />
            </BlogComponent>
          )}
        </CodeblogContextConsumer>
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
        header={props.header}
        BlogComponent={BlogComponent}
        BlogPostComponent={BlogPostComponent}
      >
        <CodeblogContextConsumer>
          {contextProps => <BlogComponent {...contextProps} />}
        </CodeblogContextConsumer>
      </CodeblogProvider>
    </HeadProvider>
  );
};

export const PreviewCodeblogPost = (props: CodeblogPostProps) => {
  return (
    <HeadProvider headTags={props.headTags}>
      <CodeblogProvider
        pageType="preview"
        environment={props.environment}
        post={{ ...props.post, body: props.children }}
        blog={props.blog}
      >
        <CodeblogContextConsumer>
          {contextProps => (
            <BlogComponent {...contextProps}>
              <BlogPostComponent {...contextProps} />
            </BlogComponent>
          )}
        </CodeblogContextConsumer>
      </CodeblogProvider>
    </HeadProvider>
  );
};

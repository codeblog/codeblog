import * as React from "react";
import { PageType, Codeblog, Title, Meta } from "codeblog";
import BlogIndexPage from "./BlogIndexPage";

interface Props {
  blog: BlogType;
  pageType: PageType;
}

export const getBlogTitle = (blog: BlogType) => {
  if (blog.title) {
    return `${blog.title} | Powered by Codeblog`;
  } else {
    return `@${blog.subdomain} | Powered by Codeblog`;
  }
};

export class Blog extends React.Component<Props> {
  render() {
    const { blog, children, pageType } = this.props;
    return (
      <div
        itemScope
        itemID={String(blog.id)}
        itemType="http://schema.org/Blog"
        className="Blog"
      >
        <Title>{getBlogTitle(blog)}</Title>
        <Meta property="og:title" content={blog.title} />
        <Meta property="og:description" content={blog.description} />
        <Meta name="description" content={blog.description} />
        <Meta property="og:site_name" content={getBlogTitle(blog)} />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        {pageType === "index" ? (
          <BlogIndexPage>{children}</BlogIndexPage>
        ) : (
          children
        )}
      </div>
    );
  }
}

export default Blog;

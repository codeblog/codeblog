import classNames from "classnames";
import { BlogPostSEOTags as SEOTags, Codeblog } from "codeblog";

const BlogPost = ({ pageType, post, children, environment }) => (
  <article
    itemScope
    itemProp={pageType === "index" ? "blogPosts" : "blogPost"}
    itemType="http://schema.org/BlogPosting"
    id={post.slug}
    itemID={post.slug}
    className={classNames("BlogPost", {
      "BlogPost--index": pageType === "index",
      "BlogPost--show": pageType === "show",
      "BlogPost--preview": pageType === "preview"
    })}
  >
    <SEOTags post={post} />

    {/* This is where your post content goes! */}
    <div className="BlogPost-Body">{children}</div>
  </article>
);

// You probably want to keep this as is
// Previewing your post might break if you remove this part.
const BlogPostContainer = props => (
  <Codeblog>
    {({ pageType, environment, post }) => (
      <BlogPost pageType={pageType} environment={environment} post={post}>
        {props.children}
      </BlogPost>
    )}
  </Codeblog>
);

export { BlogPostContainer as BlogPost };
export default BlogPostContainer;

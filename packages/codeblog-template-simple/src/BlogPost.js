import classNames from "classnames";
import { BlogPostSEOTags as SEOTags, Codeblog } from "codeblog";
import BlogPostHeader from "./BlogPostHeader";

const BlogPost = ({ pageType, post, body, environment }) => (
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

    <BlogPostHeader environment={environment} post={post} pageType={pageType}>
      <h1 itemProp="headline" className="BlogPost-Title">
        <a href={post.url}>{post.title}</a>
      </h1>
    </BlogPostHeader>

    {/* This is where your post content goes! */}
    <div className="BlogPost-Body">{body}</div>
  </article>
);

// You probably want to keep this as is
// Previewing your post might break if you remove this part.
const BlogPostContainer = props => (
  <Codeblog>
    {({ pageType, post, environment }) => (
      <RawBlogPost
        pageType={pageType}
        environment={environment}
        post={props.post || post}
        body={props.body || post.body}
      />
    )}
  </Codeblog>
);

export { BlogPostContainer as BlogPost };
export default BlogPost;

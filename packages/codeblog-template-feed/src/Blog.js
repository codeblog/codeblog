import { BlogSEOTags } from "codeblog";
import { BlogPost } from "./BlogPost";

const title = "";
const description = "";

export const Blog = ({ blog, children, pageType }) => (
  <div
    itemScope
    itemID={String(blog.id)}
    itemType="http://schema.org/Blog"
    className="Blog"
  >
    <BlogSEOTags />
    <BlogPost>{children}</BlogPost>
  </div>
);

export default Blog;

import { BlogSEOTags } from "codeblog";
import { BlogPost } from "./BlogPost";

const title = "";
const description = "";

export const Blog = ({ blog, children }) => (
  <div
    itemScope
    itemID={String(blog.id)}
    itemType="http://schema.org/Blog"
    className="Blog"
  >
    <BlogSEOTags blog={blog} />
    <BlogPost>{children}</BlogPost>
  </div>
);

export default Blog;

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

    {/*----- Header shown on every page goes here  -----*/}

    {pageType === "index" ? (
      <div className="BlogIndex">
        {/*----- Custom header for the list of blog posts page goes here (e.g. https://jarredsumner.com/)  -----*/}
        <div className="BlogIndex-Header">
          <h1 itemProp="headline" className="BlogIndex-Title">
            {title || blog.title}
          </h1>
          {description && (
            <div className="BlogIndex-description">{description}</div>
          )}
        </div>

        {/* children is the list of blog posts */}
        <div className="BlogPost-List">{children}</div>

        {/*----- Custom footer for the list of blog posts page goes here (e.g. https://jarredsumner.com/)  -----*/}
      </div>
    ) : (
      /* children is the current blog post */
      /* You probably want to go to BlogPost.js to modify this part */
      <BlogPost>{children}</BlogPost>
    )}

    {/*----- Footer shown on every page goes here  -----*/}
  </div>
);

export default Blog;

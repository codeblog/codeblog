import moment from "moment";

const formatDateForEnvironment = (date, environment) => {
  return moment(date).fromNow();
};

export const PublishedTimetamp = ({ publishedAt, status, environment }) => {
  if (status === "published" && publishedAt) {
    return (
      <span
        datetime={publishedAt.toISOString()}
        itemProp="datePublished"
        className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--published"
      >
        {formatDateForEnvironment(publishedAt, environment)}
      </span>
    );
  } else if (status === "published") {
    return null;
  } else if (status === "draft") {
    return (
      <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--draft">
        Draft
      </span>
    );
  } else {
    return (
      <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--hidden">
        Hidden
      </span>
    );
  }
};

export const BlogPostHeader = ({ environment, post, pageType, children }) => {
  return (
    <header>
      <div className="BlogPost-Subtitle">
        <PublishedTimetamp
          publishedAt={post.publishedAt}
          status={post.status}
          environment={environment}
        />

        {/* SEO stuff */}
        <meta itemProp="author.alternateName" content={post.author.subdomain} />
        <meta itemProp="author.identifier" content={post.author.subdomain} />
        {post.author.title && (
          <meta itemProp="author.name" content={post.author.title} />
        )}
      </div>

      {children}
    </header>
  );
};

export default BlogPostHeader;

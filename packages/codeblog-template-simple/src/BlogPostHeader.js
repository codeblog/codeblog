import { format, formatDistance } from "date-fns";

const formatDateForEnvironment = (date, environment) => {
  if (environment === "server") {
    return format(date, "MM/dd/YYYY", { awareOfUnicodeTokens: true });
  } else {
    return formatDistance(date, new Date(), { addSuffix: true });
  }
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

const FullHeader = ({ post, environment, children }) => (
  <header>
    <div className="BlogPost-Subtitle">
      <a href={post.blog.url}>
        <span itemProp="author" className="BlogPost-Subtitle-author Username">
          @{post.author.subdomain}
        </span>
      </a>
      <span className="Separator Separator--small" />
      <PublishedTimetamp
        publishedAt={post.publishedAt}
        status={post.status}
        environment={environment}
      />
    </div>

    {children}
  </header>
);

const PartialHeader = ({ post, environment, children }) => (
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

export const BlogPostHeader = ({ environment, post, pageType, children }) => {
  const HeaderComponent = pageType === "index" ? PartialHeader : FullHeader;

  return (
    <HeaderComponent environment={environment} post={post}>
      {children}
    </HeaderComponent>
  );
};

export default BlogPostHeader;

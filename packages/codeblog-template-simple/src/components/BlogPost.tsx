import * as React from "react";
import classNames from "classnames";
import {
  Post,
  PageType,
  Codeblog,
  EnvironmentType,
  CodeblogContext,
  Title,
  Meta
} from "codeblog";
import { formatDistance, format } from "date-fns";

const formatDateForEnvironment = (date: Date, environment: EnvironmentType) => {
  if (environment === "server") {
    return format(date, "MM/dd/YYYY", { awareOfUnicodeTokens: true });
  } else {
    return formatDistance(date, new Date(), { addSuffix: true });
  }
};

const ITEM_PROP_BY_PAGE_TYPE = {
  index: "blogPosts",
  show: "blogPost"
};

interface Props {
  post: Post;
  environment: EnvironmentType;
  pageType: PageType;
}

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

const PostTitle = ({ post }) => (
  <h1 itemProp="headline" className="BlogPost-Title">
    <a href={post.url}>{post.title}</a>
  </h1>
);

const FullHeader = ({ post, environment }) => (
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

    <PostTitle post={post} />
  </header>
);

const PartialHeader = ({ post, environment }) => (
  <header>
    <div className="BlogPost-Subtitle">
      <PublishedTimetamp
        publishedAt={post.publishedAt}
        status={post.status}
        environment={environment}
      />
      <meta itemProp="author.alternateName" content={post.author.subdomain} />
      <meta itemProp="author.identifier" content={post.author.subdomain} />
      {post.author.title && (
        <meta itemProp="author.name" content={post.author.title} />
      )}
    </div>

    <PostTitle post={post} />
  </header>
);

class RawBlogPost extends React.Component<Props> {
  render() {
    const { post, pageType, environment, body } = this.props;

    const HeaderComponent = pageType === "index" ? PartialHeader : FullHeader;
    return (
      <article
        itemScope
        itemProp={ITEM_PROP_BY_PAGE_TYPE[pageType] || undefined}
        itemType="http://schema.org/BlogPosting"
        itemID={post.slug}
        className={classNames("BlogPost", `BlogPost--${pageType}`)}
      >
        <meta itemProp="description" content={post.summary} />

        {pageType === "show" && (
          <>
            <Meta property="article:publisher" content="https://codeblog.app" />
            {post.title && (
              <>
                <Title>{post.title} | via Codeblog</Title>
                <Meta
                  property="og:title"
                  content={`${post.title} | via Codeblog`}
                />
              </>
            )}

            {post.summary && (
              <>
                <Meta property="og:description" content={post.summary} />
                <Meta name="description" content={post.summary} />
              </>
            )}
            <Meta property="og:type" content="article" />
            <Meta property="og:url" content={post.url} />
            {post.publishedAt && (
              <>
                <Meta
                  property="og:article:published_time"
                  content={post.publishedAt.toISOString()}
                />
                <Meta
                  property="article:published_time"
                  content={post.publishedAt.toISOString()}
                />
              </>
            )}

            {post.photoURL && (
              <Meta property="og:image:url" content={post.photoURL} />
            )}

            {post.editedAt && (
              <>
                <Meta
                  property="og:article:modified_time"
                  content={post.editedAt.toISOString()}
                />
                <Meta
                  property="article:modified_time"
                  content={post.editedAt.toISOString()}
                />
                <meta
                  itemProp="dateModified"
                  content={post.editedAt.toISOString()}
                />
              </>
            )}
          </>
        )}

        <HeaderComponent environment={environment} post={post} />

        <div className="BlogPost-Body">{body}</div>
      </article>
    );
  }
}

export const BlogPost = props => (
  <Codeblog>
    {({ pageType, post, environment }: CodeblogContext) => (
      <RawBlogPost
        pageType={pageType}
        environment={environment}
        post={props.post || post}
        body={props.body || post.body}
      />
    )}
  </Codeblog>
);

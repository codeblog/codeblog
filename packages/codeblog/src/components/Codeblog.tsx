import * as React from "react";
import { isEqual } from "lodash";

export type PageType = "index" | "show" | "preview" | null;
export type EnvironmentType = "server" | "client";

export interface Blog {
  id: string;
  subdomain: string;
  url: string;
  title: string | null;
  description: string | null;
  photoURL: string | null;
}

export interface Post {
  id: number;
  slug: string;
  url: string;
  title: string;
  body: React.ReactNode;
  photoURL: string | null;
  summary: string;
  code: string;
  publishedAt: Date;
  status: "published" | "draft" | "trash";
  editedAt: Date;
  readingTime: {
    text: string;
    words: number;
    minutes: number;
    seconds: number;
  };
  author: Blog;
  blog: Blog;
}

export interface CodeblogContext {
  blog: Blog;
  pageType: PageType;
  post: Post | null;
  posts: Array<Post>;
  environment: EnvironmentType;
  BlogComponent: BlogComponentType;
  BlogPostComponent: BlogPostComponentType;
}

export const CodeblogContext = React.createContext<CodeblogContext | null>(
  null
);

export type BlogComponentType = React.ComponentType<
  CodeblogContext & { children: React.ReactNode }
>;
export type BlogPostComponentType = React.ComponentType<
  CodeblogContext & { post: Post; children?: React.ReactNode }
>;

interface Props {
  blog: Blog;
  posts?: Array<Post>;
  post: Post;
  pageType: PageType;
  environment: EnvironmentType;
  header?: React.ReactNode;
  children: React.ReactNode;
  BlogComponent: BlogComponentType;
  BlogPostComponent: BlogPostComponentType;
}

export const normalizePost = (post: any, blog: any) => {
  let {
    published_at: publishedAt = null,
    editedAt: editedAt = null,
    photo_url: photoURL = null
  } = post;

  if (publishedAt) {
    publishedAt = new Date(publishedAt);
  }

  if (editedAt) {
    editedAt = new Date(editedAt);
  }

  return {
    ...post,
    blog: blog,
    publishedAt,
    photoURL,
    editedAt,
    author: blog
  };
};

export class CodeblogProvider extends React.Component<Props, CodeblogContext> {
  state: CodeblogContext;

  static defaultProps: { posts: Array<Post>; post: Post | null } = {
    posts: [],
    post: null
  };

  constructor(props: Props) {
    super(props);

    const state: CodeblogContext = {
      blog: { ...props.blog },
      posts: props.posts,
      post: props.post,
      pageType: props.pageType,
      environment: props.environment,
      BlogComponent: props.BlogComponent,
      BlogPostComponent: props.BlogPostComponent
    };

    if (props.post) {
      state.post = normalizePost(props.post, state.blog);
    }

    state.posts = props.posts.map(post => normalizePost(post, state.blog));

    this.state = state;
  }

  static getDerivedStateFromProps(props: Props, state: CodeblogContext) {
    const changes: Partial<CodeblogContext> = {};

    if (props.BlogComponent !== state.BlogComponent) {
      changes.BlogComponent = props.BlogComponent;
    }

    if (props.BlogPostComponent !== state.BlogPostComponent) {
      changes.BlogPostComponent = props.BlogPostComponent;
    }

    if (props.pageType !== state.pageType) {
      changes.pageType = props.pageType;
    }

    let blog = state.blog;
    if (!isEqual(props.blog, state.blog)) {
      changes.blog = props.blog;
      blog = changes.blog;
    }

    if (!isEqual(normalizePost(props.post, blog), state.post)) {
      changes.post = normalizePost(props.post, blog);
    }

    changes.posts = (props.posts || []).map(post =>
      normalizePost(post, props.blog)
    );

    return changes;
  }

  render() {
    return (
      <CodeblogContext.Provider value={this.state}>
        {this.props.children}
      </CodeblogContext.Provider>
    );
  }
}

export const Codeblog = CodeblogContext.Consumer;

export default Codeblog;

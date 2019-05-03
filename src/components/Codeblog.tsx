import { isEqual } from "lodash";
import * as React from "react";
import {
  Blog,
  BlogComponentType,
  BlogPostComponentType,
  CodeblogContext,
  CodeblogContextInterface,
  EnvironmentType,
  PageType,
  Post
} from "./CodeblogContext";

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
    text: post.text || "",
    publishedAt,
    photoURL,
    editedAt,
    author: blog
  };
};

export class CodeblogProvider extends React.Component<
  Props,
  CodeblogContextInterface
> {
  state: CodeblogContextInterface;

  static defaultProps: { posts: Array<Post>; post: Post | null } = {
    posts: [],
    post: null
  };

  constructor(props: Props) {
    super(props);

    const state: CodeblogContextInterface = {
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

  static getDerivedStateFromProps(
    props: Props,
    state: CodeblogContextInterface
  ) {
    const changes: Partial<CodeblogContextInterface> = {};

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

    if (!props.post && state.post) {
      changes.post = null;
    } else if (
      props.post &&
      props.post !== state.post &&
      !isEqual(normalizePost(props.post, blog), state.post)
    ) {
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

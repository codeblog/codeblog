import * as React from "react";

export type PageType = "index" | "show" | "preview" | null;
export type EnvironmentType = "server" | "client";

export type Blog = {
  id: string;
  subdomain: string;
  url: string;
  title: string | null;
  description: string | null;
  photoURL: string | null;
};

export type Post = {
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
};

export type BlogComponentType = React.ComponentType<
  CodeblogContextInterface & { children: React.ReactNode }
>;
export type BlogPostComponentType = React.ComponentType<
  CodeblogContextInterface & { post: Post; children?: React.ReactNode }
>;

export type CodeblogContextInterface = {
  blog: Blog;
  pageType: PageType;
  post: Post | null;
  posts: Array<Post>;
  environment: EnvironmentType;
  BlogComponent: BlogComponentType;
  BlogPostComponent: BlogPostComponentType;
};

export const CodeblogContext = React.createContext<CodeblogContextInterface | null>(
  null
);

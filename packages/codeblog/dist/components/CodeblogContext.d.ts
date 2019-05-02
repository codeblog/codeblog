import * as React from "react";
export declare type PageType = "index" | "show" | "editor" | null;
export declare type EnvironmentType = "server" | "client";
export declare type Blog = {
    id: string;
    subdomain: string;
    url: string;
    title: string | null;
    description: string | null;
    photoURL: string | null;
};
export declare type Post = {
    id: number;
    slug: string;
    url: string;
    title: string;
    body: React.ReactNode;
    text: string;
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
export declare type BlogComponentType = React.ComponentType<CodeblogContextInterface & {
    children: React.ReactNode;
}>;
export declare type BlogPostComponentType = React.ComponentType<CodeblogContextInterface & {
    post: Post;
    children?: React.ReactNode;
}>;
export declare type CodeblogContextInterface = {
    blog: Blog;
    pageType: PageType;
    post: Post | null;
    posts: Array<Post>;
    environment: EnvironmentType;
    BlogComponent: BlogComponentType;
    BlogPostComponent: BlogPostComponentType;
};
export declare const CodeblogContext: React.Context<CodeblogContextInterface>;

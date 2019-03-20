import * as React from "react";
export declare type PageType = "index" | "show" | "preview" | null;
export declare type EnvironmentType = "server" | "client";
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
export declare const CodeblogContext: React.Context<CodeblogContext>;
export declare type BlogComponentType = React.ComponentType<CodeblogContext & {
    children: React.ReactNode;
}>;
export declare type BlogPostComponentType = React.ComponentType<CodeblogContext & {
    post: Post;
    children?: React.ReactNode;
}>;
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
export declare const normalizePost: (post: any, blog: any) => any;
export declare class CodeblogProvider extends React.Component<Props, CodeblogContext> {
    state: CodeblogContext;
    static defaultProps: {
        posts: Array<Post>;
        post: Post | null;
    };
    constructor(props: Props);
    static getDerivedStateFromProps(props: Props, state: CodeblogContext): Partial<CodeblogContext>;
    render(): JSX.Element;
}
export declare const Codeblog: React.ExoticComponent<React.ConsumerProps<CodeblogContext>>;
export default Codeblog;

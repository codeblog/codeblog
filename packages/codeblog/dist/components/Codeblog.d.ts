import * as React from "react";
import { Blog, BlogComponentType, BlogPostComponentType, CodeblogContextInterface, EnvironmentType, PageType, Post } from "./CodeblogContext";
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
export declare class CodeblogProvider extends React.Component<Props, CodeblogContextInterface> {
    state: CodeblogContextInterface;
    static defaultProps: {
        posts: Array<Post>;
        post: Post | null;
    };
    constructor(props: Props);
    static getDerivedStateFromProps(props: Props, state: CodeblogContextInterface): Partial<CodeblogContextInterface>;
    render(): JSX.Element;
}
export {};

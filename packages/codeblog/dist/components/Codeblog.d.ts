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
declare type CodeblogContextState = CodeblogContextInterface & {
    _BlogPostComponent: BlogPostComponentType;
};
export declare class CodeblogProvider extends React.Component<Props, CodeblogContextState> {
    state: CodeblogContextState;
    static defaultProps: {
        posts: Array<Post>;
        post: Post | null;
    };
    constructor(props: Props);
    static getDerivedStateFromProps(props: Props, state: CodeblogContextState): Partial<CodeblogContextState>;
    render(): JSX.Element;
}
export {};

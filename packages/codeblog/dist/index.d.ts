import * as React from "react";
import { Codeblog, CodeblogContext, CodeblogContextInterface, BlogComponentType, BlogPostComponentType } from "./components/Codeblog";
export { BlogSEOTags, BlogPostSEOTags } from "./components/SEOTags";
declare type CodeblogPostProps = CodeblogContextInterface & {
    children: React.ReactNode;
    BlogComponent?: BlogComponentType;
    BlogPostComponent?: BlogPostComponentType;
    headTags?: [];
};
export { Codeblog, CodeblogContext, CodeblogContextInterface };
export { Title, Meta, Link } from "react-head";
export { Post, Blog, BlogComponentType, BlogPostComponentType, EnvironmentType, PageType } from "./components/Codeblog";
export declare const CodeblogRoot: (props: CodeblogPostProps) => JSX.Element;
export declare const CodeblogPost: (props: CodeblogPostProps) => JSX.Element;
export declare const CodeblogIndexPage: (props: CodeblogPostProps) => JSX.Element;
export declare const PreviewCodeblogPost: (props: CodeblogPostProps) => JSX.Element;
export default Codeblog;

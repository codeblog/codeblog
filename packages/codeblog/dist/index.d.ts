import * as React from "react";
import { BlogComponentType, BlogPostComponentType, CodeblogContext, CodeblogContextInterface, Post, Blog, EnvironmentType, PageType } from "./components/CodeblogContext";
declare type CodeblogPostProps = CodeblogContextInterface & {
    children: React.ReactNode;
    BlogComponent?: BlogComponentType;
    BlogPostComponent?: BlogPostComponentType;
    headTags?: [];
};
export declare const CodeblogRoot: (props: CodeblogPostProps) => JSX.Element;
export declare const CodeblogPost: (props: CodeblogPostProps) => JSX.Element;
export declare const CodeblogIndexPage: (props: CodeblogPostProps) => JSX.Element;
export declare const PreviewCodeblogPost: (props: CodeblogPostProps) => JSX.Element;
export declare const Codeblog: React.ExoticComponent<React.ConsumerProps<CodeblogContextInterface>>;
export default Codeblog;
export { CodeblogContext, CodeblogContextInterface, Post, Blog, BlogPostComponentType, BlogComponentType, EnvironmentType, PageType };
export { BlogSEOTags, BlogPostSEOTags, Title, Meta, Link } from "./components/SEOTags";

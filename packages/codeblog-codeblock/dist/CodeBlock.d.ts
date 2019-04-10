import * as React from "react";
export declare enum Language {
    css = "css",
    javascript = "javascript",
    js = "js",
    jsx = "jsx",
    markdown = "markdown",
    md = "md",
    mdx = "mdx",
    plain = "plain",
    py = "py",
    python = "python",
    rb = "ruby",
    ruby = "ruby",
    style = "style",
    stylesheet = "stylesheet",
    ts = "ts",
    typescript = "typescript"
}
declare type Props = {
    children: string;
    showLineNumbers?: boolean;
    disableStyles?: boolean;
    language?: Language;
};
export declare const CodeBlock: ({ showLineNumbers, disableStyles, language, children: code, ...otherProps }: Props) => JSX.Element;
declare type MDXComponentProps = {
    className?: string;
    children: string;
};
declare type MDXProps = {
    children: React.ReactElement<MDXComponentProps>;
};
export declare const MDXCodeBlock: (props: MDXProps) => JSX.Element;
export default CodeBlock;

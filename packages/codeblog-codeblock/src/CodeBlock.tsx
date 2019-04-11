import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import classNames from "classnames";

export enum Language {
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

// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.jsx, jsx);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.js, jsx);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.javascript, jsx);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.md, markdown);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.markdown, markdown);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.mdx, markdown);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.ruby, ruby);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.rb, ruby);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.python, python);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.py, python);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.css, css);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.stylesheet, css);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.style, css);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.ts, typescript);
// @ts-ignore
SyntaxHighlighter.registerLanguage(Language.typescript, typescript);

type Props = {
  children: string;
  showLineNumbers?: boolean;
  disableStyles?: boolean;
  truncateLength?: number;
  language?: Language;
};

export class CodeBlock extends React.PureComponent<Props> {
  static defaultProps = {
    showLineNumbers: true,
    disableStyles: false,
    language: Language.plain,
    truncateLength: 20
  };

  render() {
    const {
      showLineNumbers,
      disableStyles,
      language,
      truncateLength,
      children: code,
      ...otherProps
    } = this.props;

    return (
      <>
        <SyntaxHighlighter
          {...otherProps}
          showLineNumbers={showLineNumbers}
          wrapLines
          useInlineStyles={false}
          language={language}
          style={{}}
        >
          {code}
        </SyntaxHighlighter>
        <style jsx global>{`
          .hljs {
            direction: ltr;
            text-align: left;
            word-spacing: normal;
            word-break: normal;
            white-space: pre;
            overflow: auto;
            max-height: 500px;
            line-height: 1.3;

            tab-size: 2;
            padding: var(--offset-medium);
            background-color: var(--text-dark-color);
            color: var(--page-background);
            hyphens: none;
            border-radius: var(--border-radius);
            font-size: 16px;
            font-family: var(--monospace-font);
            padding-bottom: 0;
            -webkit-mask-image: radial-gradient(
              circle,
              var(--page-background) 100%,
              var(--text-dark-color) 100%
            );
            -moz-mask-image: radial-gradient(
              circle,
              var(--page-background) 100%,
              var(--text-dark-color) 100%
            );
          }

          @media (max-width: 500px) {
            .hls {
              max-height: 300px;
            }
          }

          .hljs::-webkit-scrollbar-track {
            background-color: #222;
          }

          .hljs::-webkit-scrollbar {
            height: 12px;
            width: 12px;

            opacity: 0.5;
          }

          .hljs::-webkit-scrollbar-thumb {
            background-color: var(--page-background);
            border: 3px solid #222;
            border-radius: 10px;
          }

          .hljs * {
            background: unset !important;
          }

          .hljs code:first-of-type {
            user-select: none;
            -webkit-user-select: none;
          }

          .hljs code + code {
            margin-left: var(--offset-medium);
            display: block;
          }

          .react-syntax-highlighter-line-number {
            color: #827d82;
          }

          /* ---- Syntax highlighting ---- */

          .hljs .tag,
          .hljs .string,
          .hljs .meta,
          .hljs .symbol,
          .hljs .template-tag,
          .hljs .template-variable,
          .hljs .addition {
            color: #769fff;
            font-weight: normal;
          }

          .hljs .punctuation,
          .hljs .comment,
          .hljs .quote {
            color: #827d82;
          }

          .hljs .number,
          .hljs .regexp,
          .hljs .literal,
          .hljs .link {
            color: #31a354;
          }

          .hljs .deletion,
          .hljs .variable {
            color: #7e9eff;
            font-weight: normal;
          }

          .hljs .keyword,
          .hljs .operator {
            color: #ff6c6c;
          }

          .hljs .function {
            color: #d46dff;
          }

          .hljs .title,
          .hljs .bold,
          .hljs .strong,
          .hljs .tag,
          .hljs .section {
            font-weight: 600;
          }

          .hljs .link,
          .hljs .url {
            color: var(--color-primary);
          }

          .hljs .emphasis {
            font-style: italic;
          }

          .hljs .attr {
            font-weight: normal;
          }

          .hljs .attribute {
            color: #e6550d;
          }
        `}</style>
        )}
      </>
    );
  }
}

type MDXComponentProps = {
  className?: string;
  children: string;
};

type MDXProps = {
  children: React.ReactElement<MDXComponentProps>;
};
export const MDXCodeBlock = (props: MDXProps) => {
  const language =
    Language[(props.children.props.className || "").replace("language-", "")];

  return (
    <CodeBlock {...props} language={language}>
      {props.children.props.children}
    </CodeBlock>
  );
};

export default CodeBlock;

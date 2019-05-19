import React from "react";
import { css } from "@emotion/core";

// This is the React component that is shown your pad.
// Since this is a Block component, please be sure to render children prop. If you don't, things will break.
export default ({ children, ...otherProps }) => (
  <div
    {...otherProps}
    // Codeblog uses https://emotion.sh for CSS.
    css={css`
      background-color: ${props => props.background};
      color: ${props =>
        tinycolor(props.background).isDark()
          ? "var(--color-white)"
          : "var(--color-black)"};
      padding-top: var(--offset-normal);
      padding-bottom: var(--offset-normal);

      font-family: var(--headings-font);
      font-size: 24px;
      text-align: center;
      font-weight: bold;
      width: 100%;
      display: block;
    `}
  >
    {children}
  </div>
);

// if you want to change how your component appears in search, edit this file:
// {{packageJSPath}}

// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in {{packageJSPath}}
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, ...otherProps }) => (
  <div
    {...otherProps}
    // Codeblog uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={props => css`
      background-color: ${props.background};

      /* The text color should be readable on any background you choose */
      /* So we check if the background is dark and, when it is, we make the text color light */
      color: ${tinycolor(props.background).isDark()
        ? "var(--color-white)"
        : "var(--color-black)"};

      font-size: 24px;
      text-align: center;
      font-weight: bold;
      width: 100%;
      display: block;

      padding-top: var(--offset-normal);
      padding-bottom: var(--offset-normal);
      font-family: var(--headings-font);
    `}
  >
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </div>
);

// if you want to change how your component appears in search, edit this file:
// {{packageJSPath}}

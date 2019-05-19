// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in {{packageJSPath}}
import React from "react";
import { css } from "@emotion/core";

// This is the React component that is shown your pad.
// This example will render text in uppercase. SHOUTING ON THE INTERNET
export default ({ children, ...otherProps }) => (
  // Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
  <span
    {...otherProps}
    // Codeblog uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      text-transform: uppercase;
      color: ${props => props.color};
    `}
  >
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </span>
);

// if you want to change how your component appears in search, edit this file:
// {{packageJSPath}}

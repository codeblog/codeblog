import * as React from "react";
import classnames from "classnames";
import "./Highlight.css";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  color?: "green" | "yellow" | "pink";
}

export const Highlight = ({
  children,
  className,
  color = "yellow",
  ...otherProps
}: HighlightProps) => (
  <span
    className={classnames("Codeblog-Highlight", className, {
      "Codeblog-Highlight--green": color === "green",
      "Codeblog-Highlight--pink": color === "pink",
      "Codeblog-Highlight--yellow": color === "yellow"
    })}
    {...otherProps}
  >
    {children}
  </span>
);

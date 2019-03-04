import * as React from "react";
import TextBackgroundEffect from "./TextBackgroundEffect";
import classnames from "classnames";
import "./Glitter.css";

export const GLITTER_BACKGROUND_URL =
  "https://storage.googleapis.com/codeblog-public/Glitter.gif";

interface GlitterProps {
  children: React.ReactNode;
  className?: string;
}

export const Glitter = ({
  children,
  className,
  ...otherProps
}: GlitterProps) => (
  <TextBackgroundEffect
    className={classnames("Codeblog-Glitter", className)}
    {...otherProps}
  >
    {children}
  </TextBackgroundEffect>
);

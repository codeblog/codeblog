import * as React from "react";
import classnames from "classnames";
import "./TextBackgroundEffect.css";

export interface TextBackgroundEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const TextBackgroundEffect = ({
  children,
  className,
  ...otherProps
}: TextBackgroundEffectProps) => {
  return (
    <span
      {...otherProps}
      className={classnames("Codeblog-TextBackgroundEffect", className)}
    >
      {children}
    </span>
  );
};

export default TextBackgroundEffect;

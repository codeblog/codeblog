import * as React from "react";
import "./TextBackgroundEffect.css";
export interface TextBackgroundEffectProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TextBackgroundEffect: ({ children, className, ...otherProps }: TextBackgroundEffectProps) => JSX.Element;
export default TextBackgroundEffect;

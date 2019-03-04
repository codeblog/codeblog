import * as React from "react";
import "./Highlight.css";
interface HighlightProps {
    children: React.ReactNode;
    className?: string;
    color?: "green" | "yellow" | "pink";
}
export declare const Highlight: ({ children, className, color, ...otherProps }: HighlightProps) => JSX.Element;
export {};

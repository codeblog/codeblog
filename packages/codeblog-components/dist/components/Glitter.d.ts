import * as React from "react";
import "./Glitter.css";
export declare const GLITTER_BACKGROUND_URL = "https://storage.googleapis.com/codeblog-public/Glitter.gif";
interface GlitterProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Glitter: ({ children, className, ...otherProps }: GlitterProps) => JSX.Element;
export {};

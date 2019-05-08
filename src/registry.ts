import { EditablePropMap } from "./registry/EditableProps";

export enum BlockTypes {
  title = "@codeblog/title",
  paragraph = "@codeblog/paragraph",
  blockquote = "@codeblog/blockquote"
}

export enum CategoryType {
  header = "header",
  text = "text",
  media = "media",
  embed = "embed"
}

// This will be fancier later.
export type BackgroundProp = string;
export type ColorProp = string;
export type AlignProp = "left" | "right" | "center";

export { EditableProps } from "./registry/EditableProps";

export type CodeblogPackageJSON = {
  name: string;
  version: string;
  license: "MIT";
  codeblog: {
    title: string; // This appears in the search results
    description: string; // This appears in the search results
    screenshot?: string; // This appears in the search results

    editableProps?: EditablePropMap;
    defaultProps?: { [key: string]: string };
  };
  dependencies: { [key: string]: string };
};

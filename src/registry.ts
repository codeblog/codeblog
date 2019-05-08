import { EditablePropMap } from "./registry/EditableProps";

export enum BlockTypes {
  title = "@codeblog/title",
  header = "@codeblog/header",
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

export type ComponentManifest = {
  title: string;
  description: string;
  screenshot: string | null;
  category: CategoryType;
  placeholder: string | null;
  isDevelopment?: boolean;
  src: string | null;
  isRemote: boolean;
  isVoid?: boolean;
  Component: React.ComponentType<any> | null;
  EditorComponent: React.ComponentType<any> | null;
  editableProps?: EditablePropMap;
  defaultProps?: { [key: string]: string };
  id: string;
};

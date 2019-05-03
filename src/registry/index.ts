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

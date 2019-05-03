import styled from "@emotion/styled";
import H1Asset1x from "./assets/blocks/H1.png";
import H1Asset2x from "./assets/blocks/H1@2x.png";
import H1Asset3x from "./assets/blocks/H1@3x.png";
import ParagraphAsset1x from "./assets/blocks/Paragraph.png";
import ParagraphAsset2x from "./assets/blocks/Paragraph@2x.png";
import ParagraphAsset3x from "./assets/blocks/Paragraph@3x.png";
import TypingAsset1x from "./assets/blocks/Typing.png";
import TypingAsset2x from "./assets/blocks/Typing@2x.png";
import TypingAsset3x from "./assets/blocks/Typing@3x.png";
import BlockQuoteAsset1x from "./assets/blocks/BlockQuote.png";
import BlockQuoteAsset2x from "./assets/blocks/BlockQuote@2x.png";
import BlockQuoteAsset3x from "./assets/blocks/BlockQuote@3x.png";
import FancyHeading from "./builtins/blocks/FancyHeading";
import { CategoryType } from "./Category";

export enum BlockTypes {
  title = "@codeblog/title",
  paragraph = "@codeblog/paragraph",
  blockquote = "@codeblog/blockquote",
  fancy_heading = "@codeblog/fancy-heading"
}

export const Blocks = {
  [BlockTypes.paragraph]: {
    id: BlockTypes.paragraph,
    title: "Paragraph",
    category: CategoryType.text,
    placeholder: "Type '/' for commands",
    description: "The classic.",
    screenshot: {
      "1x": ParagraphAsset1x,
      "2x": ParagraphAsset2x,
      "3x": ParagraphAsset3x
    },
    Component: styled.p`
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      line-height: 1.6;
      font-family: var(--body-font);
    `
  },
  [BlockTypes.fancy_heading]: FancyHeading,
  [BlockTypes.blockquote]: {
    id: BlockTypes.blockquote,
    category: CategoryType.text,
    title: "Quote",
    placeholder: "",
    description: "Add a quote",
    screenshot: {
      "1x": BlockQuoteAsset1x,
      "2x": BlockQuoteAsset2x,
      "3x": BlockQuoteAsset3x
    },
    Component: styled.blockquote`
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1em;
      line-height: 1.8;
      border-left: 4px solid var(--text-color);
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      padding-left: var(--offset-normal);
      padding-top: 0.25em;
      padding-bottom: 0.25em;
      word-wrap: break-word;
      font-family: var(--headings-font);

      & + & {
        border-bottom-left-radius: 0;
      }
    `,
    defaultProps: {
      align: "left"
    }
  },
  [BlockTypes.title]: {
    id: BlockTypes.title,
    title: "Title",
    category: CategoryType.header,
    placeholder: "Give it a name",
    description: "Big section heading",
    screenshot: {
      "1x": H1Asset1x,
      "2x": H1Asset2x,
      "3x": H1Asset3x
    },
    Component: styled.h1`
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.9em;
      line-height: 1.15;
      word-wrap: break-word;
      font-family: var(--headings-font);
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      text-align: ${props => props.align};
    `,
    defaultProps: {
      align: "left",
      itemProp: "headline"
    }
  }
};

export enum InlineTypes {
  bold = "bold",
  glitter = "glitter"
}

export const Inlines = {};

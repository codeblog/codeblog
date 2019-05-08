import BlockQuoteAsset1x from "codeblog/registry/assets/blocks/BlockQuote.png";
import BlockQuoteAsset2x from "codeblog/registry/assets/blocks/BlockQuote@2x.png";
import BlockQuoteAsset3x from "codeblog/registry/assets/blocks/BlockQuote@3x.png";
import H1Asset1x from "codeblog/registry/assets/blocks/H1.png";
import H1Asset2x from "codeblog/registry/assets/blocks/H1@2x.png";
import H1Asset3x from "codeblog/registry/assets/blocks/H1@3x.png";
import H3Asset1x from "codeblog/registry/assets/blocks/H3.png";
import H3Asset2x from "codeblog/registry/assets/blocks/H3@2x.png";
import H3Asset3x from "codeblog/registry/assets/blocks/H3@3x.png";
import ParagraphAsset1x from "codeblog/registry/assets/blocks/Paragraph.png";
import ParagraphAsset2x from "codeblog/registry/assets/blocks/Paragraph@2x.png";
import ParagraphAsset3x from "codeblog/registry/assets/blocks/Paragraph@3x.png";
import { BlockTypes, CategoryType } from "../registry";
import { Paragraph } from "./Components/Paragraph";
import { BlockQuote } from "./Components/Quote";
import { Title, EditorTitle, H3 } from "./Components/Title";
import Link from "./Components/Link";
import Bold from "./Components/Bold";

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
    Component: Paragraph
  },

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
    Component: BlockQuote,
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
    Component: Title,
    EditorComponent: EditorTitle,
    defaultProps: {
      align: "left",
      itemProp: "headline"
    }
  },
  [BlockTypes.header]: {
    id: BlockTypes.header,
    title: "Header",
    category: CategoryType.header,
    placeholder: "A new section",
    description: "Normal section header",
    screenshot: {
      "1x": H3Asset1x,
      "2x": H3Asset2x,
      "3x": H3Asset3x
    },
    Component: H3,
    defaultProps: {
      align: "left"
    }
  }
};

export const Inlines = {
  [Link.id]: Link,
  [Bold.id]: Bold
};

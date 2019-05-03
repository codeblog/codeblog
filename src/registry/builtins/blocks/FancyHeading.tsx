import FancyHeadingAsset1x from "../../assets/blocks/FancyHeading.png";
import FancyHeadingAsset2x from "../../assets/blocks/FancyHeading@2x.png";
import FancyHeadingAsset3x from "../../assets/blocks/FancyHeading@3x.png";
import styled from "@emotion/styled";
import { EditableProps } from "../../EditableProps";
import { CategoryType } from "../../Category";

const FancyHeadingComponent = styled.div`
  box-sizing: content-box;
  margin-left: calc((100vw - var(--blog-post-width)) / -2);
  margin-right: calc((100vw - var(--blog-post-width)) / -2);
  padding-left: calc((100vw - var(--blog-post-width)) / 2);
  padding-right: calc((100vw - var(--blog-post-width)) / 2);
  background-size: 100vw auto;
  font-size: 1.75em;
  font-family: var(--headings-font);
  text-align: center;
  background: ${props => props.background || "var(--text-color)"};
  width: 100%;
  color: ${props => (props.color ? props.color : "var(--page-background)")};
  margin-block-start: var(--offset-medium);
  padding-top: var(--offset-large);
  padding-bottom: var(--offset-large);
  margin-block-end: var(--offset-medium);
  overflow-x: hidden;
  max-width: 100vw;
`;

export default {
  title: "Fancy Heading",
  description: "Full-width heading with a background",
  category: CategoryType.header,
  id: "@codeblog/fancy-heading",
  screenshot: {
    "1x": FancyHeadingAsset1x,
    "2x": FancyHeadingAsset2x,
    "3x": FancyHeadingAsset3x
  },
  editableProps: {
    background: EditableProps.color({
      label: "Color",
      presets: ["#333", "pink", "blue"]
    })
  },
  defaultProps: {
    background: "#333"
  },
  Component: FancyHeadingComponent
};

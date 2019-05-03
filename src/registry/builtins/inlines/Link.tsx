import styled from "@emotion/styled";
import LinkAsset1x from "../../assets/inlines/Link.png";
import LinkAsset2x from "../../assets/inlines/Link@2x.png";
import LinkAsset3x from "../../assets/inlines/Link@3x.png";
import LinkIconAsset2x from "../../assets/inlines/LinkIcon@2x.png";
import { EditableProps } from "../../EditableProps";
import { CategoryType } from "../../Category";

const LinkComponent = styled.a`
  color: ${props => props.color || "var(--primary-color)"};
  text-decoration: underline;
`;

export default {
  title: "Link",
  description: "Send readers to a different webpage",
  id: "@codeblog/link",
  category: CategoryType.text,
  screenshot: {
    "1x": LinkAsset1x,
    "2x": LinkAsset2x,
    "3x": LinkAsset3x
  },
  Component: LinkComponent,
  editableProps: {
    href: EditableProps.url({
      required: true,
      label: "URL",
      icon: LinkIconAsset2x
    }),
    color: EditableProps.color({
      label: "Color",
      presets: ["blue", "green", "orange", "purple", "pink"]
    })
  },
  defaultProps: {
    target: "_blank",
    color: "blue"
  }
};

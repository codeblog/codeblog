import * as React from "react";
import { MDXTag } from "@mdx-js/tag";
import html2canvas from "html2canvas";
import Whammy from "./lib/Whammy";
import { range } from "lodash";

const DEFAULT_MODULE_NAMES = {
  React,
  MDXTag,
  div: "div",
  span: "span",
  strong: "strong",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  input: "input",
  textarea: "textarea"
};

type ModuleMap = Map<string, React.ComponentType<{}>>;

interface RecipeComponent {
  type: string;
  props: {
    [key: string]: any;
    children: Array<RecipeComponent | string>;
  };
}

type Props = {
  recipe: RecipeComponent;
  name: string;
  moduleNames: { [string: string]: React.ComponentType<{}> };
};

type State = {
  moduleNames: ModuleMap;
};

export const transformChildren = (
  children: Array<RecipeComponent | string>,
  moduleNames: ModuleMap
): Array<React.ReactNode> => {
  return children.map((child: RecipeComponent | string) => {
    if (typeof child === "string" && child === "__CHILDREN__") {
      return "CodeArt";
    } else if (typeof child === "string") {
      return child;
    } else {
      return createElementFromRecipe(child, moduleNames);
    }
  });
};

export const createElementFromRecipe = (
  recipe: RecipeComponent,
  moduleNames: ModuleMap
) => {
  const componentType = moduleNames.get(recipe.type);
  if (!componentType) {
    throw new Error(`Missing component type for recipe: ${recipe.type}`);
  }
  const { children: _children, ...props } = recipe.props;
  const children = _children ? transformChildren(_children, moduleNames) : [];
  return React.createElement(componentType, props, children);
};

export const recipe2Canvas = (
  canvasBaseEl: HTMLDivElement,
  canvas: HTMLCanvasElement | null = null
) => {
  return html2canvas(canvasBaseEl, {
    foreignObjectRendering: true,
    backgroundColor: null,
    logging: false,
    width: canvasBaseEl.clientWidth,
    hieght: canvasBaseEl.clientHeight,
    useCORS: true,
    allowTaint: true,
    async: false,
    canvas
  });
};

export class Recipe extends React.Component<Props, ModuleMap> {
  static defaultProps = {};

  constructor(props: Props) {
    super(props);

    this.state = {
      moduleNames: new Map([
        ...Object.entries(props.moduleNames),
        ...Object.entries(DEFAULT_MODULE_NAMES)
      ])
    };
  }

  record = async (seconds: number, baseEl: HTMLDivElement) => {
    const FPS = 30;
    const frames = seconds * FPS;

    let lastElement = null;
    const images = [];
    const video = new Whammy.Video(frames);

    for (let i = 0; i < frames; i++) {
      lastElement = await recipe2Canvas(baseEl, lastElement);
      const img = lastElement.toDataURL("image/webp", 0.8);
      video.add(img);
      images.push(img);
    }

    const encodedVideo = await new Promise((resolve, reject) => {
      video.compile(false, resolve);
    });

    return { video: encodedVideo, images };
  };

  render() {
    const { recipe } = this.props;
    const { moduleNames } = this.state;

    const element = createElementFromRecipe(this.props.recipe, moduleNames);
    return element;
  }
}

import FancyHeading from "./blocks/FancyHeading";
import Glitter from "./inlines/Glitter";
import Highlight from "./inlines/Highlight";

export const Blocks = {
  [FancyHeading.id]: FancyHeading
};

export const Inlines = {
  [Glitter.id]: Glitter,
  [Highlight.id]: Highlight
};

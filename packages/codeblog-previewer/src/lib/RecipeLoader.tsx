import { Browser } from "react-kawaii";
import { Recipe } from "codeblog-render-recipe";
import * as React from "react";
import ReactDOM from "react-dom";

interface RecipeImport {
  name: string;
  moduleName: string;
  isRemote: boolean;
  path: string;
}

export class RecipeLoader {
  static loadRecipe(recipe: any, imports: Array<RecipeImport>) {
    if (!document.querySelector("#recipe")) {
      const root = document.createElement("span");
      root.id = "recipe";
      document.body.append(root);
    }

    const el = document.querySelector("#recipe");

    const moduleMap = {
      Browser: Browser
    };

    return ReactDOM.render(
      <Recipe moduleNames={moduleMap} recipe={recipe} name="Test" />,
      el
    );
  }
}

import mdx from "@mdx-js/mdx";

export const transformMDX = async (
  children: string,
  runBabel: (code: string) => string
) => {
  let jsx;
  try {
    jsx = await mdx(children, {
      mdPlugins: [
        [
          // Removes front-matter from Markdown output
          require("remark-frontmatter"),
          { type: "yaml", marker: "-", fence: "---", anywhere: true }
        ],
        require("remark-slug"),
        require("remark-images"),
        require("remark-emoji")
      ],

      hastPlugins: [],
      skipExport: false
    });
  } catch (exception) {
    console.error(exception);
  }

  return runBabel(jsx);
};

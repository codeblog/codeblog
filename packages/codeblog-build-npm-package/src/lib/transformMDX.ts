import mdx from "@mdx-js/mdx";

export const transformMDX = async (
  children: string,
  runBabel: (code: string) => string
) => {
  let jsx;
  let importLines = [];

  try {
    let _children = children.split("\n");
    importLines = _children.filter(line => {
      return /^import/.test(line);
    });

    jsx = mdx.sync(
      _children
        .filter(line => {
          return !/^import/.test(line);
        })
        .join("\n"),
      {
        remarkPlugins: [
          require("remark-breaks"),
          [
            // Removes front-matter from Markdown output
            require("remark-frontmatter"),
            { type: "yaml", marker: "-", fence: "---", anywhere: true }
          ],
          require("remark-slug"),
          require("remark-images"),
          require("remark-emoji")
        ],

        rehypePlugins: [require("rehype-highlight")],
        skipExport: true
      }
    );
  } catch (exception) {
    console.error(exception);
  }

  if (jsx && importLines.length > 0) {
    jsx = [importLines.join("\n"), jsx].join("\n\n");
  }

  if (jsx && jsx.indexOf("function MDXContent") > -1) {
    jsx = jsx.replace(
      "function MDXContent",
      `export default function MDXContent`
    );
  }

  return runBabel(jsx);
};

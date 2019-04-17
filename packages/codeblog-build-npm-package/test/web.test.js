const packager = require("../dist/index.js");
const fs = require("fs");
const path = require("path");

describe("buildPackageFromPost", () => {
  it("builds package from simple post", async () => {
    const post = {
      url: "https://codeblog.com/test",
      summary: "This is a test post",
      body: "Test!!",
      files: {}
    };

    const pkg = await packager.buildPackageFromPost({
      post,
      name: "test-post",
      version: "1.0"
    });

    expect(pkg["index.js"]).not.toBe(null);
    expect(pkg["index.js"]).toContain("Test!!");
    expect(pkg["post.mdx"]).toEqual("Test!!");
  });

  it("builds package from post with a component", async () => {
    const post = {
      url: "https://codeblog.com/test",
      summary: "This is a test post",
      body: "Test!!",
      files: {
        "component.js": fs.readFileSync(
          path.resolve(__dirname, "./fixtures/ViewPostSourceComponent.txt")
        )
      }
    };

    const pkg = await packager.buildPackageFromPost({
      post,
      name: "test-post",
      version: "1.0"
    });

    expect(pkg["index.js"]).not.toBe(null);
    expect(pkg["index.js"]).toContain("Test!!");
    expect(pkg["post.mdx"]).toEqual("Test!!");
  });

  it("supports complex mdx files", async () => {
    const body = `import { Highlight, Glitter } from "codeblog-components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\n February 23rd\n</Typist>\n\n</Sparkler>\n\n\n$2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n<section color="red">\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n</section>\n\nThree \`color\` for \`<Highlight />\`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick \`<Glitter />\` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. \`<TweetThread />\`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n`;

    const post = {
      url: "https://codeblog.com/test",
      summary: "This is a test post",
      body,
      files: {
        "post.mdx": body
      }
    };

    const pkg = await packager.buildPackageFromPost({
      post,
      name: "test-post",
      version: "1.0"
    });

    expect(pkg["index.js"]).not.toBe(null);
    expect(pkg["index.js"]).toContain("are now available in the");
  });
});

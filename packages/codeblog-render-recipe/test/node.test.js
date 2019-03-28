const packager = require("../dist/index.node.js");
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
});

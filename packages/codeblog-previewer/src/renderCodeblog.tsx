import React from "react";
import ReactDOM from "react-dom";

const { Blog, BlogPost } = self.require("codeblog-template-simple");
const Codeblog = self.require("codeblog");

export function renderCodeblog({ props, Post }) {
  console.log(Post, props);
  const element = (
    <Codeblog.CodeblogRoot
      BlogComponent={Blog}
      BlogPostComponent={BlogPost}
      environment="client"
      {...props}
    >
      <Post components={{}} />
    </Codeblog.CodeblogRoot>
  );

  const rootElement = document.querySelector("#codeblog");
  ReactDOM.render(element, rootElement);
}

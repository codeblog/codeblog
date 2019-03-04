import { CodeblogContext } from "codeblog";
import * as React from "react";

class BlogIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visiblePosts: props.posts
    };
  }

  render() {
    const { blog, posts, environment, children, header } = this.props;
    const { visiblePosts } = this.state;

    return (
      <div className="BlogIndex">
        <div className="BlogIndex-Header">
          <h1 itemProp="headline" className="BlogIndex-Title">
            {blog.title || `@${blog.subdomain}`}
          </h1>
          <div className="BlogIndex-description">{header}</div>
        </div>

        <div className="BlogPost-List">{children}</div>
      </div>
    );
  }
}

export default props => (
  <CodeblogContext>
    {({ blog, posts, header, environment }) => (
      <BlogIndexPage
        header={header}
        blog={blog}
        posts={posts}
        environment={environment}
      >
        {props.children}
      </BlogIndexPage>
    )}
  </CodeblogContext>
);

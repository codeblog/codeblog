import { Server } from "./lib/Server";
import "iframe-resizer/js/iframeResizer.contentWindow.js";

const startServer = () => {
  const server = new Server();
  self.server = server;

  server.startListening();
};

const insertContainer = () => {
  if (!document.querySelector("#codeblog")) {
    const root = document.createElement("div");
    root.id = "codeblog";
    document.body.append(root);
  }

  if (!document.querySelector("#iframe-resize-div")) {
    const iframeResizeDiv = document.createElement("div");
    iframeResizeDiv.id = "iframe-resize-div";
    iframeResizeDiv.setAttribute("data-iframe-height", "yes-plz");
    document.body.append(iframeResizeDiv);
  }
};

const buildPage = async () => {
  const post = {
    url: "https://codeblog.com/test",
    title: "Codeblog changelog – February 23rd",
    body:
      'import { Highlight, Glitter } from "@codeblog/components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree `color` for `<Highlight />`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick `<Glitter />` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. `<TweetThread />`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n',
    files: {
      "post.mdx":
        'import { Highlight, Glitter } from "@codeblog/components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree `color` for `<Highlight />`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick `<Glitter />` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. `<TweetThread />`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n',
      "Sparkler.js":
        'import Sparkles from "react-sparkle";\n\n\nclass Sparkler extends React.Component {\n  render() {\n    return (\n      <div\n        style={{\n          position: "relative",\n          backgroundColor: "#333",\n          borderRadius: \'4px\',\n          height: "175px",\n          width: "100%",\n          alignItems: "center",\n          justifyContent: "center",\n          display: "flex",\n          fontSize: "36px",\n          color: "white",\n          fontWeight: "600"\n        }}\n      >\n        <Sparkles />\n        {this.props.children}\n      </div>\n    );\n  }\n}\n\nexport default Sparkler;\n',
      "typist.css":
        ".Typist .Cursor {\n  display: inline-block;\n}\n\n.Typist .Cursor--blinking {\n    opacity: 1;\n    animation: blink 1s linear infinite;\n  }\n\n  @keyframes blink {\n      0% { opacity:1; }\n      50% { opacity:0; }\n      100% { opacity:1; }\n    }"
    }
  };

  const template = {
    title: "Blog Template",
    author: "jarred",
    files: {
      "styles.css": `#__codeblog,#__codeblog-content,a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-family:inherit;vertical-align:baseline}:root{--monospace-font:"IBM Plex Mono",monospace;--serif-font:"IBM Plex Serif",serif;--sans-serif-font:"IBM Plex Sans",serif;--offset-small:4px;--offset-normalish:8px;--offset-normal:12px;--offset-xnormal:16px;--offset-medium:24px;--offset-big:36px;--offset-large:48px;--color-black:#201f1f;--color-white:#fff;--color-dark-gray:#888;--color-medium-gray:#5c5c5c;--color-light-gray:#e9e9e9;--color-primary:#1f3e71;--color-primary-muted:rgba(31,62,113,0.45);--color-error:#c70e0e;--color-muted:#636d75;--border-radius:4px;--page-background:var(--color-white);--page-background-offset:var(--color-light-gray);--text-color:var(--color-black);--text-medium-color:var(--color-medium-gray);--text-light-color:var(--color-dark-gray);--text-muted-color:var(--color-muted);--text-light-extra-color:var(--color-light-gray);--link-color:var(--color-primary);--blog-width:550px;--blog-post-width:550px}code{font-family:IBM Plex Mono,monospace;font-family:var(--monospace-font)}*{-webkit-box-sizing:border-box;box-sizing:border-box}body{color:#201f1f;color:var(--text-color);background-color:#fff;background-color:var(--page-background);-webkit-transition:background-color .1s linear;transition:background-color .1s linear;-webkit-transition-property:background-color,color;transition-property:background-color,color;font-family:IBM Plex Sans,serif;font-family:var(--sans-serif-font);font-size:16px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}h1,h2,h3,h4,h5,h6{font-weight:600;margin-top:24px;margin-top:var(--offset-medium);line-height:1.15}h1,h2,h3,h4,h5,h6,p{margin-bottom:12px;margin-bottom:var(--offset-normal)}p{line-height:1.5;font-size:1em}a,a:visited{color:#1f3e71;color:var(--link-color)}.Blog{max-width:550px;max-width:var(--blog-width);width:100%;margin:0 auto}.BlogPost{max-width:550px;max-width:var(--blog-post-width);width:100%;font-family:IBM Plex Sans,serif;font-family:var(--sans-serif-font);margin-top:48px;margin-top:var(--offset-large);margin-bottom:48px;margin-bottom:var(--offset-large)}.BlogPost-Body,.BlogPost-Body>div,.BlogPost-Title{font-family:IBM Plex Sans,serif;font-family:var(--sans-serif-font);text-rendering:optimizeLegibility}.BlogPost-Body>div{position:relative}.Text--muted{color:#636d75;color:var(--color-muted)}.BlogPost img{max-width:100%}blockquote{border-left:3px solid rgba(31,62,113,.45);border-left:3px solid var(--color-primary-muted);padding-left:24px;padding-left:var(--offset-medium)}li,ol,ul{margin-top:12px;margin-top:var(--offset-normal);margin-bottom:12px;margin-bottom:var(--offset-normal)}li{padding-top:var(-offset-small);padding-bottom:var(-offset-small)}.BlogPost-Title{font-size:2em;margin-top:4px;margin-top:var(--offset-small)}.BlogPost-Subtitle{margin-bottom:0;margin-top:0;display:-webkit-box;display:-ms-flexbox;display:flex}.Separator{background-color:rgba(rgb(31,62,113),.15);background-color:rgba(var(--color-primary),.15);border-radius:50%;content:"";margin-top:auto;margin-bottom:auto;display:inline-block}.Separator--small{margin-left:4px;margin-left:var(--offset-small);margin-right:4px;margin-right:var(--offset-small);width:4px;height:4px}.BlogIndex-description{white-space:pre-line}.BlogPost--index{margin-top:24px;margin-top:var(--offset-medium);margin-bottom:24px;margin-bottom:var(--offset-medium)}.BlogPost--index .BlogPost-Title{font-size:1.8em}@media (max-width:550px){.BlogPost-Body{font-size:18px}.BlogPost-Title{font-size:1.75em}.BlogIndex-Header,.BlogPost{padding-left:16px;padding-left:var(--offset-xnormal);padding-right:16px;padding-right:var(--offset-xnormal)}.BlogPost-Body li{line-height:1.5}}@media (-webkit-min-device-pixel-ratio:1.5){*{-webkit-font-smoothing:antialiased}}.BlogPost-Body>div>div{margin-bottom:8px;margin-bottom:var(--offset-normalish);margin-top:8px;margin-top:var(--offset-normalish)}.BlogPost-Body>div>div>pre,.BlogPost-Body>div>div>pre>.hljs{direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;font-family:IBM Plex Mono,monospace;font-family:var(--monospace-font)}.BlogPost-Body div>p>code:after,.BlogPost-Body div>p>code:before{content:" "}.BlogPost-Body div>p>code{color:#3182bd;font-weight:600}.hljs{display:block;overflow-x:auto;padding:12px 16px;padding:var(--offset-normal) var(--offset-xnormal);font-family:IBM Plex Mono,monospace;font-family:var(--monospace-font)}.hljs,.hljs-subst{color:#000}.hljs-addition,.hljs-meta,.hljs-string,.hljs-symbol,.hljs-template-tag,.hljs-template-variable{color:#756bb1;font-weight:400}.hljs-comment,.hljs-quote{color:#636363}.hljs-link,.hljs-literal,.hljs-number,.hljs-regexp{color:#31a354}.hljs-deletion,.hljs-variable{color:#88f;font-weight:400}.hljs-built_in,.hljs-doctag,.hljs-keyword,.hljs-name,.hljs-selector-class,.hljs-selector-id,.hljs-selector-tag,.hljs-tag,.hljs-title,.hljs-type{color:#3182bd}.hljs-section,.hljs-strong,.hljs-tag{font-weight:600}.hljs-link{color:#1f3e71;color:var(--link-color)}.xml{font-family:monospace}.hljs-emphasis{font-style:italic}.hljs-attr{font-weight:400}.hljs-attribute{color:#e6550d}`,
      "BlogPost.js": `import classNames from "classnames";
        import { BlogPostSEOTags as SEOTags, Codeblog } from "codeblog";
        import BlogPostHeader from "./BlogPostHeader";

        const BlogPost = ({ pageType, post, children, environment }) => (
          <article
            itemScope
            itemProp={pageType === "index" ? "blogPosts" : "blogPost"}
            itemType="http://schema.org/BlogPosting"
            id={post.slug}
            itemID={post.slug}
            className={classNames("BlogPost", {
              "BlogPost--index": pageType === "index",
              "BlogPost--show": pageType === "show",
              "BlogPost--preview": pageType === "preview"
            })}
          >
            <SEOTags post={post} />

            <BlogPostHeader environment={environment} post={post} pageType={pageType}>
              <h1 itemProp="headline" className="BlogPost-Title">
                <a href={post.url}>{post.title}</a>
              </h1>
            </BlogPostHeader>

            {/* This is where your post content goes! */}
            <div className="BlogPost-Body">{children}</div>
          </article>
        );

        // You probably want to keep this as is
        // Previewing your post might break if you remove this part.
        const BlogPostContainer = props => (
          <Codeblog>
            {({ pageType, environment, post }) => (
              <BlogPost
                pageType={pageType}
                environment={environment}
                post={props.post || post}
              >
                {props.children}
              </BlogPost>
            )}
          </Codeblog>
        );

        export { BlogPostContainer as BlogPost };
        export default BlogPostContainer;`,
      "index.js": `export { Blog } from "./Blog";
        export { BlogPost } from "./BlogPost";`,
      "Blog.js": `import { BlogSEOTags } from "codeblog";
        import { BlogPost } from "./BlogPost";

        const title = "";
        const description = "";

        export const Blog = ({ blog, children, pageType }) => (
          <div
            itemScope
            itemID={String(blog.id)}
            itemType="http://schema.org/Blog"
            className="Blog"
          >
            <BlogSEOTags />

            {/*----- Header shown on every page goes here  -----*/}

            {pageType === "index" ? (
              <div className="BlogIndex">
                {/*----- Custom header for the list of blog posts page goes here (e.g. https://jarredsumner.com/)  -----*/}
                <div className="BlogIndex-Header">
                  <h1 itemProp="headline" className="BlogIndex-Title">
                    {title || blog.title}
                  </h1>
                  {description && (
                    <div className="BlogIndex-description">{description}</div>
                  )}
                </div>

                {/* children is the list of blog posts */}
                <div className="BlogPost-List">{children}</div>

                {/*----- Custom footer for the list of blog posts page goes here (e.g. https://jarredsumner.com/)  -----*/}
              </div>
            ) : (
              /* children is the current blog post */
              /* You probably want to go to BlogPost.js to modify this part */
              <BlogPost>{children}</BlogPost>
            )}

            {/*----- Footer shown on every page goes here  -----*/}
          </div>
        );

        export default Blog;`,
      "BlogPostHeader.js": `import { format } from "date-fns";

        const formatDateForEnvironment = (date, environment) => {
          format(date, "MM/dd/YYYY", { awareOfUnicodeTokens: true });
        };

        export const PublishedTimetamp = ({ publishedAt, status, environment }) => {
          if (status === "published" && publishedAt) {
            return (
              <span
                datetime={publishedAt.toISOString()}
                itemProp="datePublished"
                className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--published"
              >
                {formatDateForEnvironment(publishedAt, environment)}
              </span>
            );
          } else if (status === "published") {
            return null;
          } else if (status === "draft") {
            return (
              <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--draft">
                Draft
              </span>
            );
          } else {
            return (
              <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--hidden">
                Hidden
              </span>
            );
          }
        };

        const FullHeader = ({ post, environment, children }) => (
          <header>
            <div className="BlogPost-Subtitle">
              <a href={post.blog.url}>
                <span itemProp="author" className="BlogPost-Subtitle-author Username">
                  @{post.author.subdomain}
                </span>
              </a>
              <span className="Separator Separator--small" />
              <PublishedTimetamp
                publishedAt={post.publishedAt}
                status={post.status}
                environment={environment}
              />
            </div>

            {children}
          </header>
        );

        const PartialHeader = ({ post, environment, children }) => (
          <header>
            <div className="BlogPost-Subtitle">
              <PublishedTimetamp
                publishedAt={post.publishedAt}
                status={post.status}
                environment={environment}
              />

              {/* SEO stuff */}
              <meta itemProp="author.alternateName" content={post.author.subdomain} />
              <meta itemProp="author.identifier" content={post.author.subdomain} />
              {post.author.title && (
                <meta itemProp="author.name" content={post.author.title} />
              )}
            </div>

            {children}
          </header>
        );

        export const BlogPostHeader = ({ environment, post, pageType, children }) => {
          const HeaderComponent = pageType === "index" ? PartialHeader : FullHeader;

          return (
            <HeaderComponent environment={environment} post={post}>
              {children}
            </HeaderComponent>
          );
        };

        export default BlogPostHeader;`
    }
  };

  const props = {
    post: {
      id: 68,
      url: "https://jarredsumner.com/feb-23-codeblog-changelog",
      edited_at: "2019-02-24T23:46:51Z",
      published_at: "2019-02-24T11:09:18Z",
      status: "published",
      photo_url: null,
      summary:
        "Over 2,400 people are on the waiting list for Codeblog right now. A small batch of invites will go out by Monday.",
      title: "Codeblog changelog – February 23rd",
      slug: "feb-23-codeblog-changelog",
      body:
        'import { Highlight, Glitter } from "@codeblog/components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree `color` for `<Highlight />`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick `<Glitter />` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. `<TweetThread />`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n',
      files: {
        "post.mdx":
          'import { Highlight, Glitter } from "@codeblog/components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree `color` for `<Highlight />`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick `<Glitter />` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. `<TweetThread />`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n',
        "Sparkler.js":
          'import Sparkles from "react-sparkle";\n\n\nclass Sparkler extends React.Component {\n  render() {\n    return (\n      <div\n        style={{\n          position: "relative",\n          backgroundColor: "#333",\n          borderRadius: \'4px\',\n          height: "175px",\n          width: "100%",\n          alignItems: "center",\n          justifyContent: "center",\n          display: "flex",\n          fontSize: "36px",\n          color: "white",\n          fontWeight: "600"\n        }}\n      >\n        <Sparkles />\n        {this.props.children}\n      </div>\n    );\n  }\n}\n\nexport default Sparkler;\n',
        "typist.css":
          ".Typist .Cursor {\n  display: inline-block;\n}\n\n.Typist .Cursor--blinking {\n    opacity: 1;\n    animation: blink 1s linear infinite;\n  }\n\n  @keyframes blink {\n      0% { opacity:1; }\n      50% { opacity:0; }\n      100% { opacity:1; }\n    }"
      }
    },
    posts: [],
    pageType: "show",
    blog: {
      id: 7,
      subdomain: "jarred",
      title: "Jarred's codeblog",
      description: null,
      url: "https://jarredsumner.com",
      photo_url: null
    }
  };

  self.server.handleLoadPost(props.post, template, props);

  setTimeout(() => {
    console.log("Updating...");
    const newPostBody =
      'import { Highlight, Glitter } from "@codeblog/components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n## Wow look it updated!!\n2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree `color` for `<Highlight />`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick `<Glitter />` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. `<TweetThread />`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n';
    const newPost = {
      ...props.post,
      body: newPostBody,
      files: {
        ...props.post.files,
        "post.mdx": newPostBody
      }
    };
    window.postMessage(
      {
        type: "load_post",
        from: "Client",
        value: { post: newPost, template, props: { ...props, post: newPost } }
      },
      "*"
    );
  }, 10000);
};

startServer();

if (typeof window !== "undefined" && location.search.includes("debug")) {
  try {
    insertContainer();
  } catch (exception) {}

  buildPage();
}

window.addEventListener("DOMContentLoaded", insertContainer);

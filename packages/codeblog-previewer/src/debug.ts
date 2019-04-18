import { RecipeLoader } from "./lib/RecipeLoader";
import getDefaultTemplate from "./lib/getDefaultTemplate";

export const buildPage = async () => {
  const TEMPLATE = `
By mistake, MySpace inspired a generation of teenagers to learn how to code. From [Stealing MySpace](https://www.amazon.com/dp/B001VT3L3C):

> But Nguyen forgot to block Web markup language in user submissions.

> His mistake allowed users to build colorful backgrounds and wallpapers and load them onto their MySpace pages.

https://codeblog-shrinecache.storage.googleapis.com/6d8bea00be2c3e7a663ee03ed5763457.jpg

### The internet used to be fun and weird.

During the internet of 2006, consumer products let anyone edit CSS. It was a beautiful mess. As the internet grew up, consumer products stopped trusting their users, and the internet lost its soul.

When's the last time a consumer product let you do this?

 <StyleEditor />

We have Dark Mode now...

 <DarkModeToggle label="Dark Mode" />

But where did all the glitter go?

### Today's internet is Serious Business.

When MySpace was a thing, the internet was just [a series of tubes](https://en.wikipedia.org/wiki/Series_of_tubes). People used it to buy beanie babies and play Runescape.

That changed. The internet of 2019 is vital societal infrastructure. We depend on it to keep in touch with family, to pay for things, and so much more.

Just because it got serious doesn't mean it can't be fun and weird.

### Three things MySpace got right

1. To make a page on MySpace, all it took was text in a textbox.

2. The text could be words or code.

3. Anyone could read the words and see the code.

https://codeblog-shrinecache.storage.googleapis.com/e8625207b741c1d204bfc1d828147ad9.png

MySpace's simplicity enabled teenagers to make silly things like <Glitter>glitter</Glitter> text, [custom layouts](http://www.layoutgeneratormyspace.com/) and [more](https://mashable.com/2007/11/05/20-editors-myspace-profiles/#t5p4gjoccsq5). MySpace profiles were a canvas for self-expression and code was the paint.

MySpace showed the world that if you make powerful and complicated tools (like coding) accessible to anyone, people are smart enough to figure out how to use them.

### The lesson the internet learned? No thanks.

https://imgs.xkcd.com/comics/exploits_of_a_mom.png

We started sanitizing inputs. This remains a huge win for security. But, that means sticking code and words in the same place doesn't work anymore. The code becomes ordinary words...or nothing at all.

Nobody ever talks about why this was bad for the world.

### Coding became a privilege, instead of a right.

[The internet is the great equalizer (1996)](https://www.bloomberg.com/news/articles/1996-10-20/the-internet-is-the-great-equalizer). People used to believe that. Today, it sounds sarcastic.

We — the programmers, designers, product people — collectively decided that users don't deserve the right to code in everyday products. Users are too stupid. They'd break stuff. Coding is too complicated for ordinary people. Besides, we can just do the coding...so why does it matter?

The internet added \`<canvas />\`, but the internet stopped being one.

 <DrawCanvas />

### 2019, a world where all the apps are the same.

Facebook, WhatsApp, Messenger, and Instagram [are merging](https://www.nytimes.com/2019/01/25/technology/facebook-instagram-whatsapp-messenger.html). [Instagram cloned Snapchat](https://techcrunch.com/2017/05/16/to-clone-or-not-to-clone/), and Twitter is just [screenshots on Instagram](https://www.theverge.com/2018/6/21/17442028/instagram-twitter-meme-accounts-screenshots-text).

The everyday consumer products are converging. They ran out of good ideas for helping people express themselves, so all that's left is to monopolize.

# Introducing Codeblog

[Codeblog](https://codeblog.com) makes coding as easy as blogging. It's an open-source blogging platform where, instead of just words, you can also write code that runs in the blog post.

For example, even though HTML lacks a \`<Glitter />\` tag, Codeblog lets me write <Glitter>\`<Glitter>\`text\`</Glitter>\`</Glitter>.

HTML doesn't have a \`<ConfettiButton />\` tag either, but Codeblog makes it easy to add it to my post.

 <ConfettiButton />

**You're reading a codeblog now**.

Posts are written in a flavor of Markdown that renders React components inline. This makes writing words feel natural and writing JavaScript feel like HTML.

You can write and publish posts directly on [codeblog.com](https://codeblog.com) without downloading anything, or you can use your text editor. Host your codeblog for free on codeblog.com, or you can host it yourself.

Even this \`<RequestAccessForm />\` is part of the post:

 <RequestAccessForm title={{desktop: "Want your own Codeblog?", mobile: "Want a Codeblog?" }} description={{desktop: "I can let you know when it's ready."}} emailLabel="Email" emailPlaceholder="example@my-email.com" buttonLabel="Request access" />

Codeblog is powered by [MDX](https://mdxjs.com), a new flavor of Markdown that supports JSX. With MDX, words look like words, and code looks like HTML.

- **Post online**. Write & publish posts on codeblog.com or write from your text editor.

- **Social coding**. Post comments with words or code and follow codeblogs. It's the easiest way to show stuff you're working on. Or just rant.

- **Plugins**. Auto-install npm packages as you use them. Through npm, Codeblog will support hundreds of thousands of plugins from day one.

- **Free** hosting via codeblog.com, or you can self-host.

### One more thing.

Examples are great teachers. That's why on Codeblog, the original source code for every post, comment, and plugin will be readily available and remixable. **With one click, remixing gives you a live, running website with a copy of the post**, comment, or plugin that you are free to modify and make your own.

You can view the source code for this post:

 <ViewPostSource />

What do you think? Codeblog isn't ready for everyone yet, but if you [request access](https://tinyletter.com/codeblog), I'll let you know when it's ready.

<Ghost size={80}>Thanks for reading!</Ghost>

Edit (2019-02-22): This post is now hosted by codeblog.com.
`;

  const post = {
    url: "https://codeblog.com/test",
    title: "Codeblog changelog – February 23rd",
    body: `import { Highlight, Glitter } from "codeblog-components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n2,400 people are on the waiting list for Codeblog now. \n\`\`\`md\n\n${TEMPLATE}\n\n\`\`\` \nA small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree \`color\` for \`<Highlight />\`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick \`<Glitter />\` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. \`<TweetThread />\`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n`,
    files: {
      "post.mdx": `import { Highlight, Glitter } from "codeblog-components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n2,400 people are on the waiting list for Codeblog now. \n\`\`\`md\n${TEMPLATE}\n\`\`\` \nA small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree \`color\` for \`<Highlight />\`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick \`<Glitter />\` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. \`<TweetThread />\`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n`,
      "Sparkler.js":
        'import Sparkles from "react-sparkle";\n\n\nclass Sparkler extends React.Component {\n  render() {\n    return (\n      <div\n        style={{\n          position: "relative",\n          backgroundColor: "#333",\n          borderRadius: \'4px\',\n          height: "175px",\n          width: "100%",\n          alignItems: "center",\n          justifyContent: "center",\n          display: "flex",\n          fontSize: "36px",\n          color: "white",\n          fontWeight: "600"\n        }}\n      >\n        <Sparkles />\n        {this.props.children}\n      </div>\n    );\n  }\n}\n\nexport default Sparkler;\n',
      "typist.css":
        ".Typist .Cursor {\n  display: inline-block;\n}\n\n.Typist .Cursor--blinking {\n    opacity: 1;\n    animation: blink 1s linear infinite;\n  }\n\n  @keyframes blink {\n      0% { opacity:1; }\n      50% { opacity:0; }\n      100% { opacity:1; }\n    }"
    }
  };

  const template = {
    title: "Blog Template",
    author: "jarred",
    files: getDefaultTemplate
  };

  const COLORS = {
    blue: {
      "--page-background": "#69d2e7",
      "--page-background-offset": "#a7dbd8",
      "--color-primary": "#e0e4cc",
      "--text-color": "#f38630",
      "--text-dark-color": "#fa6900"
    },
    red: {
      "--page-background": "#fc354c",
      "--page-background-offset": "#29221f",
      "--color-primary": "#13747d",
      "--text-color": "#0abfbc",
      "--text-dark-color": "#fcf7c5"
    },
    roy: {
      "--page-background": "#ecd078",
      "--page-background-offset": "#d95b43",
      "--color-primary": "#c02942",
      "--text-color": "#542437",
      "--text-dark-color": "#53777a"
    },
    gray: {
      "--page-background": "#556270",
      "--page-background-offset": "#4ecdc4",
      "--color-primary": "#c7f464",
      "--text-color": "#ff6b6b",
      "--text-dark-color": "#c44d58"
    },
    fawn: {
      "--page-background": "#774f38",
      "--page-background-offset": "#e08e79",
      "--color-primary": "#f1d4af",
      "--text-color": "#ece5ce",
      "--text-dark-color": "#c5e0dc"
    },
    bone: {
      "--page-background": "#e8ddcb",
      "--page-background-offset": "#cdb380",
      "--color-primary": "#036564",
      "--text-color": "#033649",
      "--text-dark-color": "#031634"
    },
    purple: {
      "--page-background": "#490a3d",
      "--page-background-offset": "#bd1550",
      "--color-primary": "#e97f02",
      "--text-color": "#f8ca00",
      "--text-dark-color": "#8a9b0f"
    },
    don: {
      "--page-background": "#594f4f",
      "--page-background-offset": "#547980",
      "--color-primary": "#45ada8",
      "--text-color": "#9de0ad",
      "--text-dark-color": "#e5fcc2"
    },
    bondiblue: {
      "--page-background": "#00a0b0",
      "--page-background-offset": "#6a4a3c",
      "--color-primary": "#cc333f",
      "--text-color": "#eb6841",
      "--text-dark-color": "#edc951"
    },
    pink: {
      "--page-background": "#e94e77",
      "--page-background-offset": "#d68189",
      "--color-primary": "#c6a49a",
      "--text-color": "#c6e5d9",
      "--text-dark-color": "#f4ead5"
    },
    turqouise: {
      "--page-background": "#3fb8af",
      "--page-background-offset": "#7fc7af",
      "--color-primary": "#dad8a7",
      "--text-color": "#ff9e9d",
      "--text-dark-color": "#ff3d7f"
    },
    leather: {
      "--page-background": "#d9ceb2",
      "--page-background-offset": "#948c75",
      "--color-primary": "#d5ded9",
      "--text-color": "#7a6a53",
      "--text-dark-color": "#99b2b7"
    },
    white: {
      "--page-background": "#ffffff",
      "--page-background-offset": "#cbe86b",
      "--color-primary": "#f2e9e1",
      "--text-color": "#1c140d",
      "--text-dark-color": "#cbe86b"
    },
    lightgreen: {
      "--page-background": "#efffcd",
      "--page-background-offset": "#dce9be",
      "--color-primary": "#555152",
      "--text-color": "#2e2633",
      "--text-dark-color": "#99173c"
    },
    darkgray: {
      "--page-background": "#343838",
      "--page-background-offset": "#005f6b",
      "--color-primary": "#008c9e",
      "--text-color": "#00b4cc",
      "--text-dark-color": "#00dffc"
    },
    ylukem: {
      "--page-background": "#413e4a",
      "--page-background-offset": "#73626e",
      "--color-primary": "#b38184",
      "--text-color": "#f0b49e",
      "--text-dark-color": "#f7e4be"
    },
    sunset: {
      "--page-background": "#ff4e50",
      "--page-background-offset": "#fc913a",
      "--color-primary": "#f9d423",
      "--text-color": "#ede574",
      "--text-dark-color": "#e1f5c4"
    },
    norway: {
      "--page-background": "#99b898",
      "--page-background-offset": "#fecea8",
      "--color-primary": "#ff847c",
      "--text-color": "#e84a5f",
      "--text-dark-color": "#2a363b"
    },
    brown: {
      "--page-background": "#655643",
      "--page-background-offset": "#80bca3",
      "--color-primary": "#f6f7bd",
      "--text-color": "#e6ac27",
      "--text-dark-color": "#bf4d28"
    },
    pacific: {
      "--page-background": "#00a8c6",
      "--page-background-offset": "#40c0cb",
      "--color-primary": "#f9f2e7",
      "--text-color": "#aee239",
      "--text-dark-color": "#8fbe00"
    },
    berry: {
      "--page-background": "#351330",
      "--page-background-offset": "#424254",
      "--color-primary": "#64908a",
      "--text-color": "#e8caa4",
      "--text-dark-color": "#cc2a41"
    },
    poop: {
      "--page-background": "#554236",
      "--page-background-offset": "#f77825",
      "--color-primary": "#d3ce3d",
      "--text-color": "#f1efa5",
      "--text-dark-color": "#60b99a"
    },
    orange: {
      "--page-background": "#ff9900",
      "--page-background-offset": "#424242",
      "--color-primary": "#e9e9e9",
      "--text-color": "#bcbcbc",
      "--text-dark-color": "#3299bb"
    },
    eggplant: {
      "--page-background": "#5d4157",
      "--page-background-offset": "#838689",
      "--color-primary": "#a8caba",
      "--text-color": "#cad7b2",
      "--text-dark-color": "#ebe3aa"
    },
    falured: {
      "--page-background": "#8c2318",
      "--page-background-offset": "#5e8c6a",
      "--color-primary": "#88a65e",
      "--text-color": "#bfb35a",
      "--text-dark-color": "#f2c45a"
    },
    cherokee: {
      "--page-background": "#fad089",
      "--page-background-offset": "#ff9c5b",
      "--color-primary": "#f5634a",
      "--text-color": "#ed303c",
      "--text-dark-color": "#3b8183"
    },
    coralred: {
      "--page-background": "#ff4242",
      "--page-background-offset": "#f4fad2",
      "--color-primary": "#d4ee5e",
      "--text-color": "#e1edb9",
      "--text-dark-color": "#f0f2eb"
    },
    confetti: {
      "--page-background": "#d1e751",
      "--page-background-offset": "#ffffff",
      "--color-primary": "#000000",
      "--text-color": "#4dbce9",
      "--text-dark-color": "#26ade4"
    },
    rose: {
      "--page-background": "#f8b195",
      "--page-background-offset": "#f67280",
      "--color-primary": "#c06c84",
      "--text-color": "#6c5b7b",
      "--text-dark-color": "#355c7d"
    },
    elm: {
      "--page-background": "#1b676b",
      "--page-background-offset": "#519548",
      "--color-primary": "#88c425",
      "--text-color": "#bef202",
      "--text-dark-color": "#eafde6"
    },
    eagle: {
      "--page-background": "#bcbdac",
      "--page-background-offset": "#cfbe27",
      "--color-primary": "#f27435",
      "--text-color": "#f02475",
      "--text-dark-color": "#3b2d38"
    },
    quincy: {
      "--page-background": "#5e3929",
      "--page-background-offset": "#cd8c52",
      "--color-primary": "#b7d1a3",
      "--text-color": "#dee8be",
      "--text-dark-color": "#fcf7d3"
    },
    purplebrown: {
      "--page-background": "#452632",
      "--page-background-offset": "#91204d",
      "--color-primary": "#e4844a",
      "--text-color": "#e8bf56",
      "--text-dark-color": "#e2f7ce"
    },
    doublewhite: {
      "--page-background": "#f0d8a8",
      "--page-background-offset": "#3d1c00",
      "--color-primary": "#86b8b1",
      "--text-color": "#f2d694",
      "--text-dark-color": "#fa2a00"
    },
    amaranth: {
      "--page-background": "#f04155",
      "--page-background-offset": "#ff823a",
      "--color-primary": "#f2f26f",
      "--text-color": "#fff7bd",
      "--text-dark-color": "#95cfb7"
    },
    cherrypie: {
      "--page-background": "#2a044a",
      "--page-background-offset": "#0b2e59",
      "--color-primary": "#0d6759",
      "--text-color": "#7ab317",
      "--text-dark-color": "#a0c55f"
    },
    swampgreen: {
      "--page-background": "#bbbb88",
      "--page-background-offset": "#ccc68d",
      "--color-primary": "#eedd99",
      "--text-color": "#eec290",
      "--text-dark-color": "#eeaa88"
    },
    junglemist: {
      "--page-background": "#b9d7d9",
      "--page-background-offset": "#668284",
      "--color-primary": "#2a2829",
      "--text-color": "#493736",
      "--text-dark-color": "#7b3b3b"
    },
    celery: {
      "--page-background": "#b3cc57",
      "--page-background-offset": "#ecf081",
      "--color-primary": "#ffbe40",
      "--text-color": "#ef746f",
      "--text-dark-color": "#ab3e5b"
    },
    husk: {
      "--page-background": "#a3a948",
      "--page-background-offset": "#edb92e",
      "--color-primary": "#f85931",
      "--text-color": "#ce1836",
      "--text-dark-color": "#009989"
    },
    "viridian-green": {
      "--page-background": "#67917a",
      "--page-background-offset": "#170409",
      "--color-primary": "#b8af03",
      "--text-color": "#ccbf82",
      "--text-dark-color": "#e33258"
    },
    raffia: {
      "--page-background": "#e8d5b7",
      "--page-background-offset": "#0e2430",
      "--color-primary": "#fc3a51",
      "--text-color": "#f5b349",
      "--text-dark-color": "#e8d5b9"
    },
    edward: {
      "--page-background": "#aab3ab",
      "--page-background-offset": "#c4cbb7",
      "--color-primary": "#ebefc9",
      "--text-color": "#eee0b7",
      "--text-dark-color": "#e8caaf"
    },
    toledo: {
      "--page-background": "#300030",
      "--page-background-offset": "#480048",
      "--color-primary": "#601848",
      "--text-color": "#c04848",
      "--text-dark-color": "#f07241"
    },
    cadillac: {
      "--page-background": "#ab526b",
      "--page-background-offset": "#bca297",
      "--color-primary": "#c5ceae",
      "--text-color": "#f0e2a4",
      "--text-dark-color": "#f4ebc3"
    },
    dingley: {
      "--page-background": "#607848",
      "--page-background-offset": "#789048",
      "--color-primary": "#c0d860",
      "--text-color": "#f0f0d8",
      "--text-dark-color": "#604848"
    },
    padua: {
      "--page-background": "#a8e6ce",
      "--page-background-offset": "#dcedc2",
      "--color-primary": "#ffd3b5",
      "--text-color": "#ffaaa6",
      "--text-dark-color": "#ff8c94"
    },
    mako: {
      "--page-background": "#3e4147",
      "--page-background-offset": "#fffedf",
      "--color-primary": "#dfba69",
      "--text-color": "#5a2e2e",
      "--text-dark-color": "#2a2c31"
    },
    surf: {
      "--page-background": "#b6d8c0",
      "--page-background-offset": "#c8d9bf",
      "--color-primary": "#dadabd",
      "--text-color": "#ecdbbc",
      "--text-dark-color": "#fedcba"
    },
    mirage: {
      "--page-background": "#1c2130",
      "--page-background-offset": "#028f76",
      "--color-primary": "#b3e099",
      "--text-color": "#ffeaad",
      "--text-dark-color": "#d14334"
    },
    cararra: {
      "--page-background": "#edebe6",
      "--page-background-offset": "#d6e1c7",
      "--color-primary": "#94c7b6",
      "--text-color": "#403b33",
      "--text-dark-color": "#d3643b"
    },
    crimson: {
      "--page-background": "#cc0c39",
      "--page-background-offset": "#e6781e",
      "--color-primary": "#c8cf02",
      "--text-color": "#f8fcc1",
      "--text-dark-color": "#1693a7"
    },
    "moon-mist": {
      "--page-background": "#dad6ca",
      "--page-background-offset": "#1bb0ce",
      "--color-primary": "#4f8699",
      "--text-color": "#6a5e72",
      "--text-dark-color": "#563444"
    },
    opal: {
      "--page-background": "#a7c5bd",
      "--page-background-offset": "#e5ddcb",
      "--color-primary": "#eb7b59",
      "--text-color": "#cf4647",
      "--text-dark-color": "#524656"
    },
    "half-colonial-white": {
      "--page-background": "#fdf1cc",
      "--page-background-offset": "#c6d6b8",
      "--color-primary": "#987f69",
      "--text-color": "#e3ad40",
      "--text-dark-color": "#fcd036"
    },
    "congo-brown": {
      "--page-background": "#5c323e",
      "--page-background-offset": "#a82743",
      "--color-primary": "#e15e32",
      "--text-color": "#c0d23e",
      "--text-dark-color": "#e5f04c"
    },
    haiti: {
      "--page-background": "#230f2b",
      "--page-background-offset": "#f21d41",
      "--color-primary": "#ebebbc",
      "--text-color": "#bce3c5",
      "--text-dark-color": "#82b3ae"
    },
    "pixie-green": {
      "--page-background": "#b9d3b0",
      "--page-background-offset": "#81bda4",
      "--color-primary": "#b28774",
      "--text-color": "#f88f79",
      "--text-dark-color": "#f6aa93"
    },
    cedar: {
      "--page-background": "#3a111c",
      "--page-background-offset": "#574951",
      "--color-primary": "#83988e",
      "--text-color": "#bcdea5",
      "--text-dark-color": "#e6f9bc"
    },
    jacaranda: {
      "--page-background": "#1c0113",
      "--page-background-offset": "#6b0103",
      "--color-primary": "#a30006",
      "--text-color": "#c21a01",
      "--text-dark-color": "#f03c02"
    },
    thunder: {
      "--page-background": "#382f32",
      "--page-background-offset": "#ffeaf2",
      "--color-primary": "#fcd9e5",
      "--text-color": "#fbc5d8",
      "--text-dark-color": "#f1396d"
    },
    "stark-white": {
      "--page-background": "#e3dfba",
      "--page-background-offset": "#c8d6bf",
      "--color-primary": "#93ccc6",
      "--text-color": "#6cbdb5",
      "--text-dark-color": "#1a1f1e"
    },
    black: {
      "--page-background": "#000000",
      "--page-background-offset": "#9f111b",
      "--color-primary": "#b11623",
      "--text-color": "#292c37",
      "--text-dark-color": "#cccccc"
    },
    "indian-khaki": {
      "--page-background": "#c1b398",
      "--page-background-offset": "#605951",
      "--color-primary": "#fbeec2",
      "--text-color": "#61a6ab",
      "--text-dark-color": "#accec0"
    },
    "vista-blue": {
      "--page-background": "#8dccad",
      "--page-background-offset": "#988864",
      "--color-primary": "#fea6a2",
      "--text-color": "#f9d6ac",
      "--text-dark-color": "#ffe9af"
    },
    "wild-sand": {
      "--page-background": "#f6f6f6",
      "--page-background-offset": "#e8e8e8",
      "--color-primary": "#333333",
      "--text-color": "#990100",
      "--text-dark-color": "#b90504"
    },
    biscay: {
      "--page-background": "#1b325f",
      "--page-background-offset": "#9cc4e4",
      "--color-primary": "#e9f2f9",
      "--text-color": "#3a89c9",
      "--text-dark-color": "#f26c4f"
    },
    "breaker-bay": {
      "--page-background": "#5e9fa3",
      "--page-background-offset": "#dcd1b4",
      "--color-primary": "#fab87f",
      "--text-color": "#f87e7b",
      "--text-dark-color": "#b05574"
    },
    "old-brick": {
      "--page-background": "#951f2b",
      "--page-background-offset": "#f5f4d7",
      "--color-primary": "#e0dfb1",
      "--text-color": "#a5a36c",
      "--text-dark-color": "#535233"
    },
    tundora: {
      "--page-background": "#413d3d",
      "--page-background-offset": "#040004",
      "--color-primary": "#c8ff00",
      "--text-color": "#fa023c",
      "--text-dark-color": "#4b000f"
    },
    "tahuna-sands": {
      "--page-background": "#eff3cd",
      "--page-background-offset": "#b2d5ba",
      "--color-primary": "#61ada0",
      "--text-color": "#248f8d",
      "--text-dark-color": "#605063"
    },
    tuatara: {
      "--page-background": "#2d2d29",
      "--page-background-offset": "#215a6d",
      "--color-primary": "#3ca2a2",
      "--text-color": "#92c7a3",
      "--text-dark-color": "#dfece6"
    },
    "snowy-mint": {
      "--page-background": "#cfffdd",
      "--page-background-offset": "#b4dec1",
      "--color-primary": "#5c5863",
      "--text-color": "#a85163",
      "--text-dark-color": "#ff1f4c"
    },
    voodoo: {
      "--page-background": "#4e395d",
      "--page-background-offset": "#827085",
      "--color-primary": "#8ebe94",
      "--text-color": "#ccfc8e",
      "--text-dark-color": "#dc5b3e"
    },
    "spring-rain": {
      "--page-background": "#9dc9ac",
      "--page-background-offset": "#fffec7",
      "--color-primary": "#f56218",
      "--text-color": "#ff9d2e",
      "--text-dark-color": "#919167"
    },
    celadon: {
      "--page-background": "#a1dbb2",
      "--page-background-offset": "#fee5ad",
      "--color-primary": "#faca66",
      "--text-color": "#f7a541",
      "--text-dark-color": "#f45d4c"
    },
    "papaya-whip": {
      "--page-background": "#ffefd3",
      "--page-background-offset": "#fffee4",
      "--color-primary": "#d0ecea",
      "--text-color": "#9fd6d2",
      "--text-dark-color": "#8b7a5e"
    },
    "silver-chalice": {
      "--page-background": "#a8a7a7",
      "--page-background-offset": "#cc527a",
      "--color-primary": "#e8175d",
      "--text-color": "#474747",
      "--text-dark-color": "#363636"
    },
    "egg-white": {
      "--page-background": "#ffedbf",
      "--page-background-offset": "#f7803c",
      "--color-primary": "#f54828",
      "--text-color": "#2e0d23",
      "--text-dark-color": "#f8e4c1"
    },
    "citrine-white": {
      "--page-background": "#f8edd1",
      "--page-background-offset": "#d88a8a",
      "--color-primary": "#474843",
      "--text-color": "#9d9d93",
      "--text-dark-color": "#c5cfc6"
    },
    froly: {
      "--page-background": "#f38a8a",
      "--page-background-offset": "#55443d",
      "--color-primary": "#a0cab5",
      "--text-color": "#cde9ca",
      "--text-dark-color": "#f1edd0"
    },
    "fuscous-gray": {
      "--page-background": "#4e4d4a",
      "--page-background-offset": "#353432",
      "--color-primary": "#94ba65",
      "--text-color": "#2790b0",
      "--text-dark-color": "#2b4e72"
    },
    niagara: {
      "--page-background": "#0ca5b0",
      "--page-background-offset": "#4e3f30",
      "--color-primary": "#fefeeb",
      "--text-color": "#f8f4e4",
      "--text-dark-color": "#a5b3aa"
    },
    flirt: {
      "--page-background": "#a70267",
      "--page-background-offset": "#f10c49",
      "--color-primary": "#fb6b41",
      "--text-color": "#f6d86b",
      "--text-dark-color": "#339194"
    },
    pharlap: {
      "--page-background": "#9d7e79",
      "--page-background-offset": "#ccac95",
      "--color-primary": "#9a947c",
      "--text-color": "#748b83",
      "--text-dark-color": "#5b756c"
    },
    harp: {
      "--page-background": "#edf6ee",
      "--page-background-offset": "#d1c089",
      "--color-primary": "#b3204d",
      "--text-color": "#412e28",
      "--text-dark-color": "#151101"
    },
    "bahama-blue": {
      "--page-background": "#046d8b",
      "--page-background-offset": "#309292",
      "--color-primary": "#2fb8ac",
      "--text-color": "#93a42a",
      "--text-dark-color": "#ecbe13"
    },
    matterhorn: {
      "--page-background": "#4d3b3b",
      "--page-background-offset": "#de6262",
      "--color-primary": "#ffb88c",
      "--text-color": "#ffd0b3",
      "--text-dark-color": "#f5e0d3"
    },
    portafino: {
      "--page-background": "#fffbb7",
      "--page-background-offset": "#a6f6af",
      "--color-primary": "#66b6ab",
      "--text-color": "#5b7c8d",
      "--text-dark-color": "#4f2958"
    },
    "torch-red": {
      "--page-background": "#ff003c",
      "--page-background-offset": "#ff8a00",
      "--color-primary": "#fabe28",
      "--text-color": "#88c100",
      "--text-dark-color": "#00c176"
    },
    "hint-of-yellow": {
      "--page-background": "#fcfef5",
      "--page-background-offset": "#e9ffe1",
      "--color-primary": "#cdcfb7",
      "--text-color": "#d6e6c3",
      "--text-dark-color": "#fafbe3"
    },
    chinook: {
      "--page-background": "#9cddc8",
      "--page-background-offset": "#bfd8ad",
      "--color-primary": "#ddd9ab",
      "--text-color": "#f7af63",
      "--text-dark-color": "#633d2e"
    },
    zeus: {
      "--page-background": "#30261c",
      "--page-background-offset": "#403831",
      "--color-primary": "#36544f",
      "--text-color": "#1f5f61",
      "--text-dark-color": "#0b8185"
    },
    "persian-red": {
      "--page-background": "#c2412d",
      "--page-background-offset": "#d1aa34",
      "--color-primary": "#a7a844",
      "--text-color": "#a46583",
      "--text-dark-color": "#5a1e4a"
    },
    salomie: {
      "--page-background": "#ffe181",
      "--page-background-offset": "#eee9e5",
      "--color-primary": "#fad3b2",
      "--text-color": "#ffba7f",
      "--text-dark-color": "#ff9c97"
    },
    lime: {
      "--page-background": "#aaff00",
      "--page-background-offset": "#ffaa00",
      "--color-primary": "#ff00aa",
      "--text-color": "#aa00ff",
      "--text-dark-color": "#00aaff"
    }
  };

  const COLORED_SECTIONS = Object.keys(COLORS)
    .map((colorName, index) => {
      return `<section color="${colorName}">

# ${colorName} color

This is the section for ${colorName}. I don't know if it's any good or not.

![](http://hellomade.com/images/me.png)

- List of
- Things
- To talk
- ABOUT!

Index: **${index}**


</section>
    `;
    })
    .join("\n\n");

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
      body: `import { Highlight, Glitter } from "codeblog-components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\n February 23rd\n</Typist>\n\n</Sparkler>\n\n\n${COLORED_SECTIONS}2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n<section color="red">\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n</section>\n\nThree \`color\` for \`<Highlight />\`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick \`<Glitter />\` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. \`<TweetThread />\`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n`,
      files: {
        "post.mdx": `import { Highlight, Glitter } from "codeblog-components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\n February 23rd\n</Typist>\n\n</Sparkler>\n\n\n${COLORED_SECTIONS}2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n<section color="red">\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n</section>\n\nThree \`color\` for \`<Highlight />\`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick \`<Glitter />\` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. \`<TweetThread />\`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n`,
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

  self.server.handleLoadPost(post, template, props);

  // setTimeout(() => {
  //   console.log("Updating...");
  //   const newPostBody =
  //     'import { Highlight, Glitter } from "codeblog-components";\nimport Sparkler from \'./Sparkler\';\nimport Typist from \'react-typist\';\n\n<Sparkler>\n\n<Typist>\nCodeblog changelog\n<Typist.Backspace count={"Codeblog changelog".length} delay={300} />\nFebruary 23rd\n</Typist>\n\n</Sparkler>\n\n\n## Wow look it updated!!\n2,400 people are on the waiting list for Codeblog now. A small batch of invites will go out by Monday.\n\n# Changelog for February 23rd\n\nThis is what I built today.\n\n# Components\n\nA <Glitter>Glitter component</Glitter> and a <Highlight>Highlight component</Highlight> are now available in the sidebar. Bringing the total number of components to the sidebar to...two.\n\nThree `color` for `<Highlight />`\n- <Highlight color="yellow">color="yellow"</Highlight>\n- <Highlight color="green">color="green"</Highlight>\n- <Highlight color="pink">color="pink"</Highlight>\n\n# Click to use component\n\nClick `<Glitter />` and you get glitter. Clicking on a component in the sidebar adds it to your post.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/4d5f5bdfbab822a0098ca7891e19451e.gif\n\nWhat\'s not shown: imports are handled automatically, even when the component has to be downloaded from npm.\n\n# Preview\n\nThe editor supports previewing posts without saving them. Before, you had to publish the blog post in order to see it.\n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/26917b7c27b077118b86878c306f97b5.png" height={40} />\n\n# Edit metadata\n\nUntil today, the only way to edit the title, link, or summary of blog posts was secret. I didn\'t have time to give it a UI yet. Now, it\'s there. \n\n<img src="https://codeblog-shrinecache.storage.googleapis.com/d0bce9d33fecfe257f8eedd13ede6c0c.png" width={200} />\n\nI still need to add a social image option, however Google/Facebook seem to be okay at auto-detecting it, so it\'s lower priority for now.\n\n# Syntax highlighting\n\nThe editor now has syntax highlighting. Might still play around with the theme though.\n\nhttps://codeblog-shrinecache.storage.googleapis.com/0a63ad3f8634a934fd01cdf9da30d7fa.png\n\n# Help with components\n\nSomeday, I want Codeblog to have hundreds of components wired up for anyone to use (even if you don\'t know how to code) – silly stuff, practical stuff (e.g. `<TweetThread />`), and useless stuff. I want most of these to be built by people using Codeblog.\n\nIf you have ideas for components, please email me: jarred@jarredsumner.com. Pull requests would be even better: https://github.com/codeblog/components. If you submit a PR for more components, I\'ll make sure you get access to Codeblog sooner.\n\n';
  //   const newPost = {
  //     ...props.post,
  //     body: newPostBody,
  //     files: {
  //       ...props.post.files,
  //       "post.mdx": newPostBody
  //     }
  //   };
  //   window.postMessage(
  //     {
  //       type: "load_post",
  //       from: "Client",
  //       value: { post: newPost, template, props: { ...props, post: newPost } }
  //     },
  //     "*"
  //   );
  // }, 10000);
};

export const buildRecipe = () => {
  const FIXTURE = {
    imports: [
      {
        name: "Browser",
        moduleName: "Browser",
        isRemote: true,
        path: "react-kawaii"
      }
    ],
    component: "Browser",
    dependencies: {
      "react-kawaii": "*"
    },

    code:
      '<Browser bagel="200" color="pink"><span><MDXTag name="strong" components={components} parentName="p">{`CHILDREN`}</MDXTag></span></Browser>',

    json: {
      type: "Browser",
      props: {
        bagel: "200",
        color: "pink",
        children: [
          {
            type: "span",
            props: {
              children: [
                {
                  type: "MDXTag",
                  props: {
                    name: "strong",
                    parentName: "p"
                  }
                }
              ]
            }
          }
        ]
      }
    },

    props: {
      bagel: "200",
      color: "pink"
    }
  };

  const ANIMATED_STYLE = `
  #recipe {background-color: red; display: inline-block;}
    #recipe svg #kawaii-browser__body > path:first-child { animation: filler 1s linear alternate-reverse; animation-iteration-count: infinite; }
    @keyframes filler {
      from {
        fill: pink;
      }

      to {
        fill: blue;
      }
    }
  `;
  const styleTag = document.createElement("style");
  styleTag.innerHTML = ANIMATED_STYLE;
  document.body.appendChild(styleTag);

  const recipe = RecipeLoader.loadRecipe(FIXTURE.json, FIXTURE.imports);
};

/*

This lets you override HTML tags in your post.mdx files

For example, if you wanted to rotate every image in your posts, you'd do something like:

export default {
  img: (props) => <img {...props} style={{transform: 'rotate(90deg)'}} />
}

*/
import classNames from "classnames";
import React from "react";
import { MDXCodeBlock } from "codeblog-codeblock";

const LinkIcon = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z" />
    <style jsx>{`
      svg path {
        fill: currentColor;
      }
    `}</style>
  </svg>
);

const Header = ({ id, type, children, ...otherProps }) =>
  React.createElement(
    type,
    { id },
    <>
      <a
        href={location.href.split("#")[0] + `#${id}`}
        className="HeaderAnchorLink"
      >
        <LinkIcon height={24} width={24} />
      </a>
      {children}
    </>
  );

const Section = ({ color = "auto", children, className, ...otherProps }) => {
  return (
    <section
      className={classNames(className, `Codeblog-ColorScheme-${color}`)}
      {...otherProps}
    >
      {children}

      <style jsx>{`
        .CodeblogPost-Section--black {
          --page-background: var(--color-black);
          --page-background-offset: var(--color-light-gray);
          --text-color: var(--color-white);
          --text-dark-color: var(--color-light-gray);
        }

        .Codeblog-ColorScheme-blue {
          --page-background: #69d2e7;
          --page-background-offset: #a7dbd8;
          --color-primary: #e0e4cc;
          --text-color: #f38630;
          background-image: url(https://media1.giphy.com/media/26msBzhXPvyMXbt0Q/giphy.gif?cid=790b76115cac09e26f596b646bc9354c);
          background-blend-mode: exclusion;
          --text-dark-color: #fa6900;
        }

        .Codeblog-ColorScheme-red {
          --page-background: #fc354c;
          --page-background-offset: #29221f;
          --color-primary: #13747d;
          --text-color: #0abfbc;
          --text-dark-color: #fcf7c5;
        }

        .Codeblog-ColorScheme-roy {
          --page-background: #ecd078;
          --page-background-offset: #d95b43;
          --color-primary: #c02942;
          --text-color: #542437;
          --text-dark-color: #53777a;
        }

        .Codeblog-ColorScheme-gray {
          --page-background: #556270;
          --page-background-offset: #4ecdc4;
          --color-primary: #c7f464;
          --text-color: #ff6b6b;
          --text-dark-color: #c44d58;
        }

        .Codeblog-ColorScheme-fawn {
          --page-background: #774f38;
          --page-background-offset: #e08e79;
          --color-primary: #f1d4af;
          --text-color: #ece5ce;
          --text-dark-color: #c5e0dc;
        }

        .Codeblog-ColorScheme-bone {
          --page-background: #e8ddcb;
          --page-background-offset: #cdb380;
          --color-primary: #036564;
          --text-color: #033649;
          --text-dark-color: #031634;
        }

        .Codeblog-ColorScheme-purple {
          --page-background: #490a3d;
          --page-background-offset: #bd1550;
          --color-primary: #e97f02;
          --text-color: #f8ca00;
          --text-dark-color: #8a9b0f;
        }

        .Codeblog-ColorScheme-don {
          --page-background: #594f4f;
          --page-background-offset: #547980;
          --color-primary: #45ada8;
          --text-color: #9de0ad;
          --text-dark-color: #e5fcc2;
        }

        .Codeblog-ColorScheme-bondiblue {
          --page-background: #00a0b0;
          --page-background-offset: #6a4a3c;
          --color-primary: #cc333f;
          --text-color: #eb6841;
          --text-dark-color: #edc951;
        }

        .Codeblog-ColorScheme-pink {
          --page-background: #e94e77;
          --page-background-offset: #d68189;
          --color-primary: #c6a49a;
          --text-color: #c6e5d9;
          --text-dark-color: #f4ead5;
        }

        .Codeblog-ColorScheme-turqouise {
          --page-background: #3fb8af;
          --page-background-offset: #7fc7af;
          --color-primary: #dad8a7;
          --text-color: #ff9e9d;
          --text-dark-color: #ff3d7f;
        }

        .Codeblog-ColorScheme-leather {
          --page-background: #d9ceb2;
          --page-background-offset: #948c75;
          --color-primary: #d5ded9;
          --text-color: #7a6a53;
          --text-dark-color: #99b2b7;
        }

        .Codeblog-ColorScheme-white {
          --page-background: #ffffff;
          --page-background-offset: #cbe86b;
          --color-primary: #f2e9e1;
          --text-color: #1c140d;
          --text-dark-color: #cbe86b;
        }

        .Codeblog-ColorScheme-lightgreen {
          --page-background: #efffcd;
          --page-background-offset: #dce9be;
          --color-primary: #555152;
          --text-color: #2e2633;
          --text-dark-color: #99173c;
        }

        .Codeblog-ColorScheme-darkgray {
          --page-background: #343838;
          --page-background-offset: #005f6b;
          --color-primary: #008c9e;
          --text-color: #00b4cc;
          --text-dark-color: #00dffc;
        }

        .Codeblog-ColorScheme-ylukem {
          --page-background: #413e4a;
          --page-background-offset: #73626e;
          --color-primary: #b38184;
          --text-color: #f0b49e;
          --text-dark-color: #f7e4be;
        }

        .Codeblog-ColorScheme-sunset {
          --page-background: #ff4e50;
          --page-background-offset: #fc913a;
          --color-primary: #f9d423;
          --text-color: #ede574;
          --text-dark-color: #e1f5c4;
        }

        .Codeblog-ColorScheme-norway {
          --page-background: #99b898;
          --page-background-offset: #fecea8;
          --color-primary: #ff847c;
          --text-color: #e84a5f;
          --text-dark-color: #2a363b;
        }

        .Codeblog-ColorScheme-brown {
          --page-background: #655643;
          --page-background-offset: #80bca3;
          --color-primary: #f6f7bd;
          --text-color: #e6ac27;
          --text-dark-color: #bf4d28;
        }

        .Codeblog-ColorScheme-pacific {
          --page-background: #00a8c6;
          --page-background-offset: #40c0cb;
          --color-primary: #f9f2e7;
          --text-color: #aee239;
          --text-dark-color: #8fbe00;
        }

        .Codeblog-ColorScheme-berry {
          --page-background: #351330;
          --page-background-offset: #424254;
          --color-primary: #64908a;
          --text-color: #e8caa4;
          --text-dark-color: #cc2a41;
        }

        .Codeblog-ColorScheme-poop {
          --page-background: #554236;
          --page-background-offset: #f77825;
          --color-primary: #d3ce3d;
          --text-color: #f1efa5;
          --text-dark-color: #60b99a;
        }

        .Codeblog-ColorScheme-orange {
          --page-background: #ff9900;
          --page-background-offset: #424242;
          --color-primary: #e9e9e9;
          --text-color: #bcbcbc;
          --text-dark-color: #3299bb;
        }

        .Codeblog-ColorScheme-eggplant {
          --page-background: #5d4157;
          --page-background-offset: #838689;
          --color-primary: #a8caba;
          --text-color: #cad7b2;
          --text-dark-color: #ebe3aa;
        }

        .Codeblog-ColorScheme-falured {
          --page-background: #8c2318;
          --page-background-offset: #5e8c6a;
          --color-primary: #88a65e;
          --text-color: #bfb35a;
          --text-dark-color: #f2c45a;
        }

        .Codeblog-ColorScheme-cherokee {
          --page-background: #fad089;
          --page-background-offset: #ff9c5b;
          --color-primary: #f5634a;
          --text-color: #ed303c;
          --text-dark-color: #3b8183;
        }

        .Codeblog-ColorScheme-coralred {
          --page-background: #ff4242;
          --page-background-offset: #f4fad2;
          --color-primary: #d4ee5e;
          --text-color: #e1edb9;
          --text-dark-color: #f0f2eb;
        }

        .Codeblog-ColorScheme-confetti {
          --page-background: #d1e751;
          --page-background-offset: #ffffff;
          --color-primary: #000000;
          --text-color: #4dbce9;
          --text-dark-color: #26ade4;
        }

        .Codeblog-ColorScheme-rose {
          --page-background: #f8b195;
          --page-background-offset: #f67280;
          --color-primary: #c06c84;
          --text-color: #6c5b7b;
          --text-dark-color: #355c7d;
        }

        .Codeblog-ColorScheme-elm {
          --page-background: #1b676b;
          --page-background-offset: #519548;
          --color-primary: #88c425;
          --text-color: #bef202;
          --text-dark-color: #eafde6;
        }

        .Codeblog-ColorScheme-eagle {
          --page-background: #bcbdac;
          --page-background-offset: #cfbe27;
          --color-primary: #f27435;
          --text-color: #f02475;
          --text-dark-color: #3b2d38;
        }

        .Codeblog-ColorScheme-quincy {
          --page-background: #5e3929;
          --page-background-offset: #cd8c52;
          --color-primary: #b7d1a3;
          --text-color: #dee8be;
          --text-dark-color: #fcf7d3;
        }

        .Codeblog-ColorScheme-purplebrown {
          --page-background: #452632;
          --page-background-offset: #91204d;
          --color-primary: #e4844a;
          --text-color: #e8bf56;
          --text-dark-color: #e2f7ce;
        }

        .Codeblog-ColorScheme-doublewhite {
          --page-background: #f0d8a8;
          --page-background-offset: #3d1c00;
          --color-primary: #86b8b1;
          --text-color: #f2d694;
          --text-dark-color: #fa2a00;
        }

        .Codeblog-ColorScheme-amaranth {
          --page-background: #f04155;
          --page-background-offset: #ff823a;
          --color-primary: #f2f26f;
          --text-color: #fff7bd;
          --text-dark-color: #95cfb7;
        }

        .Codeblog-ColorScheme-cherrypie {
          --page-background: #2a044a;
          --page-background-offset: #0b2e59;
          --color-primary: #0d6759;
          --text-color: #7ab317;
          --text-dark-color: #a0c55f;
        }

        .Codeblog-ColorScheme-swampgreen {
          --page-background: #bbbb88;
          --page-background-offset: #ccc68d;
          --color-primary: #eedd99;
          --text-color: #eec290;
          --text-dark-color: #eeaa88;
        }

        .Codeblog-ColorScheme-junglemist {
          --page-background: #b9d7d9;
          --page-background-offset: #668284;
          --color-primary: #2a2829;
          --text-color: #493736;
          --text-dark-color: #7b3b3b;
        }

        .Codeblog-ColorScheme-celery {
          --page-background: #b3cc57;
          --page-background-offset: #ecf081;
          --color-primary: #ffbe40;
          --text-color: #ef746f;
          --text-dark-color: #ab3e5b;
        }

        .Codeblog-ColorScheme-husk {
          --page-background: #a3a948;
          --page-background-offset: #edb92e;
          --color-primary: #f85931;
          --text-color: #ce1836;
          --text-dark-color: #009989;
        }

        .Codeblog-ColorScheme-viridian-green {
          --page-background: #67917a;
          --page-background-offset: #170409;
          --color-primary: #b8af03;
          --text-color: #ccbf82;
          --text-dark-color: #e33258;
        }

        .Codeblog-ColorScheme-raffia {
          --page-background: #e8d5b7;
          --page-background-offset: #0e2430;
          --color-primary: #fc3a51;
          --text-color: #f5b349;
          --text-dark-color: #e8d5b9;
        }

        .Codeblog-ColorScheme-edward {
          --page-background: #aab3ab;
          --page-background-offset: #c4cbb7;
          --color-primary: #ebefc9;
          --text-color: #eee0b7;
          --text-dark-color: #e8caaf;
        }

        .Codeblog-ColorScheme-toledo {
          --page-background: #300030;
          --page-background-offset: #480048;
          --color-primary: #601848;
          --text-color: #c04848;
          --text-dark-color: #f07241;
        }

        .Codeblog-ColorScheme-cadillac {
          --page-background: #ab526b;
          --page-background-offset: #bca297;
          --color-primary: #c5ceae;
          --text-color: #f0e2a4;
          --text-dark-color: #f4ebc3;
        }

        .Codeblog-ColorScheme-dingley {
          --page-background: #607848;
          --page-background-offset: #789048;
          --color-primary: #c0d860;
          --text-color: #f0f0d8;
          --text-dark-color: #604848;
        }

        .Codeblog-ColorScheme-padua {
          --page-background: #a8e6ce;
          --page-background-offset: #dcedc2;
          --color-primary: #ffd3b5;
          --text-color: #ffaaa6;
          --text-dark-color: #ff8c94;
        }

        .Codeblog-ColorScheme-mako {
          --page-background: #3e4147;
          --page-background-offset: #fffedf;
          --color-primary: #dfba69;
          --text-color: #5a2e2e;
          --text-dark-color: #2a2c31;
        }

        .Codeblog-ColorScheme-surf {
          --page-background: #b6d8c0;
          --page-background-offset: #c8d9bf;
          --color-primary: #dadabd;
          --text-color: #ecdbbc;
          --text-dark-color: #fedcba;
        }

        .Codeblog-ColorScheme-mirage {
          --page-background: #1c2130;
          --page-background-offset: #028f76;
          --color-primary: #b3e099;
          --text-color: #ffeaad;
          --text-dark-color: #d14334;
        }

        .Codeblog-ColorScheme-cararra {
          --page-background: #edebe6;
          --page-background-offset: #d6e1c7;
          --color-primary: #94c7b6;
          --text-color: #403b33;
          --text-dark-color: #d3643b;
        }

        .Codeblog-ColorScheme-crimson {
          --page-background: #cc0c39;
          --page-background-offset: #e6781e;
          --color-primary: #c8cf02;
          --text-color: #f8fcc1;
          --text-dark-color: #1693a7;
        }

        .Codeblog-ColorScheme-moon-mist {
          --page-background: #dad6ca;
          --page-background-offset: #1bb0ce;
          --color-primary: #4f8699;
          --text-color: #6a5e72;
          --text-dark-color: #563444;
        }

        .Codeblog-ColorScheme-opal {
          --page-background: #a7c5bd;
          --page-background-offset: #e5ddcb;
          --color-primary: #eb7b59;
          --text-color: #cf4647;
          --text-dark-color: #524656;
        }

        .Codeblog-ColorScheme-half-colonial-white {
          --page-background: #fdf1cc;
          --page-background-offset: #c6d6b8;
          --color-primary: #987f69;
          --text-color: #e3ad40;
          --text-dark-color: #fcd036;
        }

        .Codeblog-ColorScheme-congo-brown {
          --page-background: #5c323e;
          --page-background-offset: #a82743;
          --color-primary: #e15e32;
          --text-color: #c0d23e;
          --text-dark-color: #e5f04c;
        }

        .Codeblog-ColorScheme-haiti {
          --page-background: #230f2b;
          --page-background-offset: #f21d41;
          --color-primary: #ebebbc;
          --text-color: #bce3c5;
          --text-dark-color: #82b3ae;
        }

        .Codeblog-ColorScheme-pixie-green {
          --page-background: #b9d3b0;
          --page-background-offset: #81bda4;
          --color-primary: #b28774;
          --text-color: #f88f79;
          --text-dark-color: #f6aa93;
        }

        .Codeblog-ColorScheme-cedar {
          --page-background: #3a111c;
          --page-background-offset: #574951;
          --color-primary: #83988e;
          --text-color: #bcdea5;
          --text-dark-color: #e6f9bc;
        }

        .Codeblog-ColorScheme-jacaranda {
          --page-background: #1c0113;
          --page-background-offset: #6b0103;
          --color-primary: #a30006;
          --text-color: #c21a01;
          --text-dark-color: #f03c02;
        }

        .Codeblog-ColorScheme-thunder {
          --page-background: #382f32;
          --page-background-offset: #ffeaf2;
          --color-primary: #fcd9e5;
          --text-color: #fbc5d8;
          --text-dark-color: #f1396d;
        }

        .Codeblog-ColorScheme-stark-white {
          --page-background: #e3dfba;
          --page-background-offset: #c8d6bf;
          --color-primary: #93ccc6;
          --text-color: #6cbdb5;
          --text-dark-color: #1a1f1e;
        }

        .Codeblog-ColorScheme-black {
          --page-background: #000000;
          --page-background-offset: #9f111b;
          --color-primary: #b11623;
          --text-color: #292c37;
          --text-dark-color: #cccccc;
        }

        .Codeblog-ColorScheme-indian-khaki {
          --page-background: #c1b398;
          --page-background-offset: #605951;
          --color-primary: #fbeec2;
          --text-color: #61a6ab;
          --text-dark-color: #accec0;
        }

        .Codeblog-ColorScheme-vista-blue {
          --page-background: #8dccad;
          --page-background-offset: #988864;
          --color-primary: #fea6a2;
          --text-color: #f9d6ac;
          --text-dark-color: #ffe9af;
        }

        .Codeblog-ColorScheme-wild-sand {
          --page-background: #f6f6f6;
          --page-background-offset: #e8e8e8;
          --color-primary: #333333;
          --text-color: #990100;
          --text-dark-color: #b90504;
        }

        .Codeblog-ColorScheme-biscay {
          --page-background: #1b325f;
          --page-background-offset: #9cc4e4;
          --color-primary: #e9f2f9;
          --text-color: #3a89c9;
          --text-dark-color: #f26c4f;
        }

        .Codeblog-ColorScheme-breaker-bay {
          --page-background: #5e9fa3;
          --page-background-offset: #dcd1b4;
          --color-primary: #fab87f;
          --text-color: #f87e7b;
          --text-dark-color: #b05574;
        }

        .Codeblog-ColorScheme-old-brick {
          --page-background: #951f2b;
          --page-background-offset: #f5f4d7;
          --color-primary: #e0dfb1;
          --text-color: #a5a36c;
          --text-dark-color: #535233;
        }

        .Codeblog-ColorScheme-tundora {
          --page-background: #413d3d;
          --page-background-offset: #040004;
          --color-primary: #c8ff00;
          --text-color: #fa023c;
          --text-dark-color: #4b000f;
        }

        .Codeblog-ColorScheme-tahuna-sands {
          --page-background: #eff3cd;
          --page-background-offset: #b2d5ba;
          --color-primary: #61ada0;
          --text-color: #248f8d;
          --text-dark-color: #605063;
        }

        .Codeblog-ColorScheme-tuatara {
          --page-background: #2d2d29;
          --page-background-offset: #215a6d;
          --color-primary: #3ca2a2;
          --text-color: #92c7a3;
          --text-dark-color: #dfece6;
        }

        .Codeblog-ColorScheme-snowy-mint {
          --page-background: #cfffdd;
          --page-background-offset: #b4dec1;
          --color-primary: #5c5863;
          --text-color: #a85163;
          --text-dark-color: #ff1f4c;
        }

        .Codeblog-ColorScheme-voodoo {
          --page-background: #4e395d;
          --page-background-offset: #827085;
          --color-primary: #8ebe94;
          --text-color: #ccfc8e;
          --text-dark-color: #dc5b3e;
        }

        .Codeblog-ColorScheme-spring-rain {
          --page-background: #9dc9ac;
          --page-background-offset: #fffec7;
          --color-primary: #f56218;
          --text-color: #ff9d2e;
          --text-dark-color: #919167;
        }

        .Codeblog-ColorScheme-celadon {
          --page-background: #a1dbb2;
          --page-background-offset: #fee5ad;
          --color-primary: #faca66;
          --text-color: #f7a541;
          --text-dark-color: #f45d4c;
        }

        .Codeblog-ColorScheme-papaya-whip {
          --page-background: #ffefd3;
          --page-background-offset: #fffee4;
          --color-primary: #d0ecea;
          --text-color: #9fd6d2;
          --text-dark-color: #8b7a5e;
        }

        .Codeblog-ColorScheme-silver-chalice {
          --page-background: #a8a7a7;
          --page-background-offset: #cc527a;
          --color-primary: #e8175d;
          --text-color: #474747;
          --text-dark-color: #363636;
        }

        .Codeblog-ColorScheme-egg-white {
          --page-background: #ffedbf;
          --page-background-offset: #f7803c;
          --color-primary: #f54828;
          --text-color: #2e0d23;
          --text-dark-color: #f8e4c1;
        }

        .Codeblog-ColorScheme-citrine-white {
          --page-background: #f8edd1;
          --page-background-offset: #d88a8a;
          --color-primary: #474843;
          --text-color: #9d9d93;
          --text-dark-color: #c5cfc6;
        }

        .Codeblog-ColorScheme-froly {
          --page-background: #f38a8a;
          --page-background-offset: #55443d;
          --color-primary: #a0cab5;
          --text-color: #cde9ca;
          --text-dark-color: #f1edd0;
        }

        .Codeblog-ColorScheme-fuscous-gray {
          --page-background: #4e4d4a;
          --page-background-offset: #353432;
          --color-primary: #94ba65;
          --text-color: #2790b0;
          --text-dark-color: #2b4e72;
        }

        .Codeblog-ColorScheme-niagara {
          --page-background: #0ca5b0;
          --page-background-offset: #4e3f30;
          --color-primary: #fefeeb;
          --text-color: #f8f4e4;
          --text-dark-color: #a5b3aa;
        }

        .Codeblog-ColorScheme-flirt {
          --page-background: #a70267;
          --page-background-offset: #f10c49;
          --color-primary: #fb6b41;
          --text-color: #f6d86b;
          --text-dark-color: #339194;
        }

        .Codeblog-ColorScheme-pharlap {
          --page-background: #9d7e79;
          --page-background-offset: #ccac95;
          --color-primary: #9a947c;
          --text-color: #748b83;
          --text-dark-color: #5b756c;
        }

        .Codeblog-ColorScheme-harp {
          --page-background: #edf6ee;
          --page-background-offset: #d1c089;
          --color-primary: #b3204d;
          --text-color: #412e28;
          --text-dark-color: #151101;
        }

        .Codeblog-ColorScheme-bahama-blue {
          --page-background: #046d8b;
          --page-background-offset: #309292;
          --color-primary: #2fb8ac;
          --text-color: #93a42a;
          --text-dark-color: #ecbe13;
        }

        .Codeblog-ColorScheme-matterhorn {
          --page-background: #4d3b3b;
          --page-background-offset: #de6262;
          --color-primary: #ffb88c;
          --text-color: #ffd0b3;
          --text-dark-color: #f5e0d3;
        }

        .Codeblog-ColorScheme-portafino {
          --page-background: #fffbb7;
          --page-background-offset: #a6f6af;
          --color-primary: #66b6ab;
          --text-color: #5b7c8d;
          --text-dark-color: #4f2958;
        }

        .Codeblog-ColorScheme-torch-red {
          --page-background: #ff003c;
          --page-background-offset: #ff8a00;
          --color-primary: #fabe28;
          --text-color: #88c100;
          --text-dark-color: #00c176;
        }

        .Codeblog-ColorScheme-hint-of-yellow {
          --page-background: #fcfef5;
          --page-background-offset: #e9ffe1;
          --color-primary: #cdcfb7;
          --text-color: #d6e6c3;
          --text-dark-color: #fafbe3;
        }

        .Codeblog-ColorScheme-chinook {
          --page-background: #9cddc8;
          --page-background-offset: #bfd8ad;
          --color-primary: #ddd9ab;
          --text-color: #f7af63;
          --text-dark-color: #633d2e;
        }

        .Codeblog-ColorScheme-zeus {
          --page-background: #30261c;
          --page-background-offset: #403831;
          --color-primary: #36544f;
          --text-color: #1f5f61;
          --text-dark-color: #0b8185;
        }

        .Codeblog-ColorScheme-persian-red {
          --page-background: #c2412d;
          --page-background-offset: #d1aa34;
          --color-primary: #a7a844;
          --text-color: #a46583;
          --text-dark-color: #5a1e4a;
        }

        .Codeblog-ColorScheme-salomie {
          --page-background: #ffe181;
          --page-background-offset: #eee9e5;
          --color-primary: #fad3b2;
          --text-color: #ffba7f;
          --text-dark-color: #ff9c97;
        }

        .Codeblog-ColorScheme-lime {
          --page-background: #aaff00;
          --page-background-offset: #ffaa00;
          --color-primary: #ff00aa;
          --text-color: #aa00ff;
          --text-dark-color: #00aaff;
        }
      `}</style>
    </section>
  );
};

export const Components = {
  section: Section,
  pre: MDXCodeBlock,
  h1: props => (
    <Header {...props} type="h1">
      {props.children}
    </Header>
  ),
  h2: props => (
    <Header {...props} type="h2">
      {props.children}
    </Header>
  ),
  h3: props => (
    <Header {...props} type="h3">
      {props.children}
    </Header>
  ),
  h4: props => (
    <Header {...props} type="h4">
      {props.children}
    </Header>
  ),
  h5: props => (
    <Header {...props} type="h5">
      {props.children}
    </Header>
  ),
  h6: props => (
    <Header {...props} type="h6">
      {props.children}
    </Header>
  )
};

export default Components;

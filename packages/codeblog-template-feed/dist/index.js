!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("codeblog")):"function"==typeof define&&define.amd?define("codeblog-template-feed",["codeblog"],t):"object"==typeof exports?exports["codeblog-template-feed"]=t(require("codeblog")):e["codeblog-template-feed"]=t(e.codeblog)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(t,o){t.exports=e},function(e,t,o){"use strict";o.r(t),o.d(t,"BlogPost",function(){return u});var n=o(2),r=o.n(n),l=o(0),i=function(e){var t=e.pageType,o=e.post,n=e.children;e.environment;return React.createElement("article",{itemScope:!0,itemProp:"index"===t?"blogPosts":"blogPost",itemType:"http://schema.org/BlogPosting",id:o.slug,itemID:o.slug,className:r()("BlogPost",{"BlogPost--index":"index"===t,"BlogPost--show":"show"===t,"BlogPost--preview":"preview"===t})},React.createElement(l.BlogPostSEOTags,{post:o}),React.createElement("div",{className:"BlogPost-Body"},n))},u=function(e){return React.createElement(l.Codeblog,null,function(t){var o=t.pageType,n=t.environment,r=t.post;return React.createElement(i,{pageType:o,environment:n,post:e.post||r},e.children||r.body)})};t.default=u},function(e,t,o){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var u in n)o.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t,o){"use strict";o.r(t),o.d(t,"Blog",function(){return l});var n=o(0),r=o(1),l=function(e){var t=e.blog,o=e.children;e.pageType;return React.createElement("div",{itemScope:!0,itemID:String(t.id),itemType:"http://schema.org/Blog",className:"Blog"},React.createElement(n.BlogSEOTags,null),React.createElement(r.BlogPost,null,o))};t.default=l},function(e,t,o){"use strict";o.r(t);var n=o(3);o.d(t,"Blog",function(){return n.Blog});var r=o(1);o.d(t,"BlogPost",function(){return r.BlogPost})}])});
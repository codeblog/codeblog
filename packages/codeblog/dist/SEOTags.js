(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("codeblog", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["codeblog"] = factory(require("react"), require("react-dom"));
	else
		root["codeblog"] = factory(root["react"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogContext", function() { return CodeblogContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CodeblogContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// CONCATENATED MODULE: /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(4);

// CONCATENATED MODULE: /Users/jarred/Code/codeblog/opensource/node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/react-head/dist/index.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return index_esm_Title; });
/* unused harmony export Style */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return index_esm_Meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return index_esm_Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index_esm_HeadProvider; });








var _React$createContext = Object(external_react_["createContext"])(null),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

var index_esm_HeadTag =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HeadTag, _React$Component);

  function HeadTag() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      canUseDOM: false
    };
    _this.headTags = null;
    _this.index = -1;
    return _this;
  }

  var _proto = HeadTag.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        tag = _this$props.tag,
        name = _this$props.name,
        property = _this$props.property;
    this.setState({
      canUseDOM: true
    });
    this.index = this.headTags.addClientTag(tag, name || property);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.headTags.removeClientTag(this.props.tag, this.index);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        Tag = _this$props2.tag,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["tag"]);

    return Object(external_react_["createElement"])(Consumer, null, function (headTags) {
      !headTags ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      _this2.headTags = headTags;

      if (_this2.state.canUseDOM) {
        if (!headTags.shouldRenderTag(Tag, _this2.index)) {
          return null;
        }

        var ClientComp = Object(external_react_["createElement"])(Tag, rest);
        return Object(external_react_dom_["createPortal"])(ClientComp, document.head);
      }

      var ServerComp = Object(external_react_["createElement"])(Tag, _extends({
        "data-rh": ""
      }, rest));
      headTags.addServerTag(ServerComp);
      return null;
    });
  };

  return HeadTag;
}(external_react_["Component"]);

var cascadingTags = ['title', 'meta'];

var index_esm_HeadProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HeadProvider, _React$Component);

  function HeadProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.indices = new Map();
    _this.state = {
      addClientTag: function addClientTag(tag, name) {
        // consider only cascading tags
        if (cascadingTags.indexOf(tag) !== -1) {
          _this.setState(function (state) {
            var _ref;

            var names = state[tag] || [];
            return _ref = {}, _ref[tag] = names.concat([name]), _ref;
          }); // track indices synchronously


          var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
              indices = _assertThisInitialize.indices;

          var index = indices.has(tag) ? indices.get(tag) + 1 : 0;
          indices.set(tag, index);
          return index;
        }

        return -1;
      },
      shouldRenderTag: function shouldRenderTag(tag, index) {
        if (cascadingTags.indexOf(tag) !== -1) {
          var names = _this.state[tag]; // check if the tag is the last one of similar

          return names && names.lastIndexOf(names[index]) === index;
        }

        return true;
      },
      removeClientTag: function removeClientTag(tag, index) {
        _this.setState(function (state) {
          var names = state[tag];

          if (names) {
            var _ref2;

            names[index] = null;
            return _ref2 = {}, _ref2[tag] = names, _ref2;
          }

          return null;
        });
      },
      addServerTag: function addServerTag(tagNode) {
        var headTags = _this.props.headTags || []; // tweak only cascading tags

        if (cascadingTags.indexOf(tagNode.type) !== -1) {
          var index = headTags.findIndex(function (prev) {
            var prevName = prev.props.name || prev.props.property;
            var nextName = tagNode.props.name || tagNode.props.property;
            return prev.type === tagNode.type && prevName === nextName;
          });

          if (index !== -1) {
            headTags.splice(index, 1);
          }
        }

        headTags.push(tagNode);
      }
    };
    return _this;
  }

  var _proto = HeadProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var ssrTags = document.head.querySelectorAll("[data-rh=\"\"]"); // `forEach` on `NodeList` is not supported in Googlebot, so use a workaround

    Array.prototype.forEach.call(ssrTags, function (ssrTag) {
      return ssrTag.parentNode.removeChild(ssrTag);
    });
  };

  _proto.render = function render() {
    !(typeof window !== 'undefined' || Array.isArray(this.props.headTags)) ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    return Object(external_react_["createElement"])(Provider, {
      value: this.state
    }, this.props.children);
  };

  return HeadProvider;
}(external_react_["Component"]);

var index_esm_Title = function Title(props) {
  return Object(external_react_["createElement"])(index_esm_HeadTag, _extends({
    tag: "title"
  }, props));
};
var index_esm_Style = function Style(props) {
  return Object(external_react_["createElement"])(index_esm_HeadTag, _extends({
    tag: "style"
  }, props));
};
var index_esm_Meta = function Meta(props) {
  return Object(external_react_["createElement"])(index_esm_HeadTag, _extends({
    tag: "meta"
  }, props));
};
var index_esm_Link = function Link(props) {
  return Object(external_react_["createElement"])(index_esm_HeadTag, _extends({
    tag: "link"
  }, props));
};




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogTitle", function() { return getBlogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostSEOTags", function() { return BlogPostSEOTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSEOTags", function() { return BlogSEOTags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CodeblogContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return react_head__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return react_head__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return react_head__WEBPACK_IMPORTED_MODULE_2__["b"]; });

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var MetaTag = function MetaTag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__[/* Meta */ "c"], props);
};

var LinkTag = function LinkTag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], props);
};

var getBlogTitle = function getBlogTitle(blog) {
  if (blog.title) {
    return "".concat(blog.title, " | Powered by Codeblog");
  } else {
    return "@".concat(blog.subdomain, " | Powered by Codeblog");
  }
};

var faviconMimeType = function faviconMimeType(photoURL) {
  if (photoURL.endsWith(".png")) {
    return "image/png";
  } else if (photoURL.endsWith(".jpg") || photoURL.endsWith(".jpeg")) {
    return "image/jpeg";
  } else if (photoURL.endsWith(".gif")) {
    return "image/gif";
  } else {
    return null;
  }
};

var RawBlogPostSEOTags = function RawBlogPostSEOTags(_ref) {
  var post = _ref.post,
      pageType = _ref.pageType;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    itemProp: "description",
    content: post.summary
  }), pageType === "show" && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "article:publisher",
    content: "https://codeblog.com"
  }), post.title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__[/* Title */ "d"], null, post.title, " | via Codeblog"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:title",
    content: "".concat(post.title, " | via Codeblog")
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "twitter:title",
    content: "".concat(post.title, " | via Codeblog")
  })), post.summary && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:description",
    content: post.summary
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "description",
    content: post.summary
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "twitter:description",
    content: post.summary
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:type",
    content: "article"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:url",
    content: post.url
  }), post.publishedAt && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:article:published_time",
    content: post.publishedAt.toISOString()
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "article:published_time",
    content: post.publishedAt.toISOString()
  })), post.photoURL && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:image:url",
    content: post.photoURL
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "twitter:image",
    content: post.photoURL
  })), post.editedAt && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:article:modified_time",
    content: post.editedAt.toISOString()
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "article:modified_time",
    content: post.editedAt.toISOString()
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    itemProp: "dateModified",
    content: post.editedAt.toISOString()
  }))));
};

var BlogPostSEOTags = function BlogPostSEOTags(_ref2) {
  var post = _ref2.post;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CodeblogContext__WEBPACK_IMPORTED_MODULE_1__["CodeblogContext"].Consumer, null, function (_ref3) {
    var pageType = _ref3.pageType,
        otherProps = _objectWithoutProperties(_ref3, ["pageType"]);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](RawBlogPostSEOTags, _extends({}, otherProps, {
      pageType: pageType,
      post: post
    }));
  });
};
var BlogSEOTags = function BlogSEOTags(_ref4) {
  var blog = _ref4.blog;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__[/* Title */ "d"], null, getBlogTitle(blog)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkTag, {
    rel: "alternate",
    type: "application/rss+xml",
    title: getBlogTitle(blog),
    href: blog.url + "/feed.atom"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:title",
    content: getBlogTitle(blog)
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "twitter:title",
    content: getBlogTitle(blog)
  }), blog.photoURL && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkTag, {
    rel: "icon",
    type: faviconMimeType(blog.photoURL),
    href: blog.photoURL
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "twitter:card",
    content: "summary_large_image"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:description",
    content: blog.description
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "twitter:description",
    content: blog.description
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "description",
    content: blog.description
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    property: "og:site_name",
    content: getBlogTitle(blog)
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }));
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })
/******/ ]);
});
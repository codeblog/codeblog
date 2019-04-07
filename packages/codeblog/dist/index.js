(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("codeblog", ["react", "lodash", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["codeblog"] = factory(require("react"), require("lodash"), require("react-dom"));
	else
		root["codeblog"] = factory(root["react"], root["lodash"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
var external_react_dom_ = __webpack_require__(2);

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



// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/CodeblogContext.tsx

var CodeblogContext = external_react_["createContext"](null);
// CONCATENATED MODULE: ./src/components/Codeblog.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return Codeblog_assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Codeblog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var normalizePost = function normalizePost(post, blog) {
  var _post$published_at = post.published_at,
      publishedAt = _post$published_at === void 0 ? null : _post$published_at,
      _post$editedAt = post.editedAt,
      editedAt = _post$editedAt === void 0 ? null : _post$editedAt,
      _post$photo_url = post.photo_url,
      photoURL = _post$photo_url === void 0 ? null : _post$photo_url;

  if (publishedAt) {
    publishedAt = new Date(publishedAt);
  }

  if (editedAt) {
    editedAt = new Date(editedAt);
  }

  return _objectSpread({}, post, {
    blog: blog,
    publishedAt: publishedAt,
    photoURL: photoURL,
    editedAt: editedAt,
    author: blog
  });
};
var Codeblog_CodeblogProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CodeblogProvider, _React$Component);

  function CodeblogProvider(props) {
    var _this;

    _classCallCheck(this, CodeblogProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CodeblogProvider).call(this, props));

    _defineProperty(Codeblog_assertThisInitialized(_this), "state", void 0);

    var state = {
      blog: _objectSpread({}, props.blog),
      posts: props.posts,
      post: props.post,
      pageType: props.pageType,
      environment: props.environment,
      BlogComponent: props.BlogComponent,
      BlogPostComponent: props.BlogPostComponent
    };

    if (props.post) {
      state.post = normalizePost(props.post, state.blog);
    }

    state.posts = props.posts.map(function (post) {
      return normalizePost(post, state.blog);
    });
    _this.state = state;
    return _this;
  }

  _createClass(CodeblogProvider, [{
    key: "render",
    value: function render() {
      return external_react_["createElement"](CodeblogContext.Provider, {
        value: this.state
      }, this.props.children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var changes = {};

      if (props.BlogComponent !== state.BlogComponent) {
        changes.BlogComponent = props.BlogComponent;
      }

      if (props.BlogPostComponent !== state.BlogPostComponent) {
        changes.BlogPostComponent = props.BlogPostComponent;
      }

      if (props.pageType !== state.pageType) {
        changes.pageType = props.pageType;
      }

      var blog = state.blog;

      if (!Object(external_lodash_["isEqual"])(props.blog, state.blog)) {
        changes.blog = props.blog;
        blog = changes.blog;
      }

      if (!props.post && state.post) {
        changes.post = null;
      } else if (props.post && props.post !== state.post && !Object(external_lodash_["isEqual"])(normalizePost(props.post, blog), state.post)) {
        changes.post = normalizePost(props.post, blog);
      }

      changes.posts = (props.posts || []).map(function (post) {
        return normalizePost(post, props.blog);
      });
      return changes;
    }
  }]);

  return CodeblogProvider;
}(external_react_["Component"]);

_defineProperty(Codeblog_CodeblogProvider, "defaultProps", {
  posts: [],
  post: null
});
// CONCATENATED MODULE: ./src/components/SEOTags.tsx
function SEOTags_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SEOTags_typeof = function _typeof(obj) { return typeof obj; }; } else { SEOTags_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SEOTags_typeof(obj); }

function SEOTags_extends() { SEOTags_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SEOTags_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SEOTags_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SEOTags_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var SEOTags_MetaTag = function MetaTag(props) {
  return external_react_["createElement"](index_esm_Meta, props);
};

var SEOTags_LinkTag = function LinkTag(props) {
  return external_react_["createElement"](index_esm_Link, props);
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

var SEOTags_RawBlogPostSEOTags = function RawBlogPostSEOTags(_ref) {
  var post = _ref.post,
      pageType = _ref.pageType;
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("meta", {
    itemProp: "description",
    content: post.summary
  }), pageType === "show" && external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](SEOTags_MetaTag, {
    property: "article:publisher",
    content: "https://codeblog.com"
  }), post.title && external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](index_esm_Title, null, post.title, " | via Codeblog"), external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:title",
    content: "".concat(post.title, " | via Codeblog")
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "twitter:title",
    content: "".concat(post.title, " | via Codeblog")
  })), post.summary && external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:description",
    content: post.summary
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "description",
    content: post.summary
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "twitter:description",
    content: post.summary
  })), external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:type",
    content: "article"
  }), external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:url",
    content: post.url
  }), post.publishedAt && external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:article:published_time",
    content: post.publishedAt.toISOString()
  }), external_react_["createElement"](SEOTags_MetaTag, {
    property: "article:published_time",
    content: post.publishedAt.toISOString()
  })), post.photoURL && external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:image:url",
    content: post.photoURL
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "twitter:image",
    content: post.photoURL
  })), post.editedAt && external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:article:modified_time",
    content: post.editedAt.toISOString()
  }), external_react_["createElement"](SEOTags_MetaTag, {
    property: "article:modified_time",
    content: post.editedAt.toISOString()
  }), external_react_["createElement"]("meta", {
    itemProp: "dateModified",
    content: post.editedAt.toISOString()
  }))));
};

var SEOTags_BlogPostSEOTags = function BlogPostSEOTags(_ref2) {
  var post = _ref2.post;
  return external_react_["createElement"](CodeblogContext.Consumer, null, function (_ref3) {
    var pageType = _ref3.pageType,
        otherProps = _objectWithoutProperties(_ref3, ["pageType"]);

    return external_react_["createElement"](SEOTags_RawBlogPostSEOTags, SEOTags_extends({}, otherProps, {
      pageType: pageType,
      post: post
    }));
  });
};
var SEOTags_RawBlogSEOTags = function RawBlogSEOTags(_ref4) {
  var blog = _ref4.blog;
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](index_esm_Title, null, getBlogTitle(blog)), external_react_["createElement"](SEOTags_LinkTag, {
    rel: "alternate",
    type: "application/rss+xml",
    title: getBlogTitle(blog),
    href: blog.url + "/feed.atom"
  }), external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:title",
    content: getBlogTitle(blog)
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "twitter:title",
    content: getBlogTitle(blog)
  }), blog.photoURL && external_react_["createElement"](SEOTags_LinkTag, {
    rel: "icon",
    type: faviconMimeType(blog.photoURL),
    href: blog.photoURL
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "twitter:card",
    content: "summary_large_image"
  }), external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:description",
    content: blog.description
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "twitter:description",
    content: blog.description
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "description",
    content: blog.description
  }), external_react_["createElement"](SEOTags_MetaTag, {
    property: "og:site_name",
    content: getBlogTitle(blog)
  }), external_react_["createElement"](SEOTags_MetaTag, {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }));
};
var SEOTags_BlogSEOTags = function BlogSEOTags() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      blog = _ref5.blog;

  if (SEOTags_typeof(blog) === "object") {
    return external_react_["createElement"](SEOTags_RawBlogSEOTags, {
      blog: blog
    });
  } else {
    return external_react_["createElement"](CodeblogContext.Consumer, null, function (_ref6) {
      var blog = _ref6.blog;
      return external_react_["createElement"](SEOTags_RawBlogSEOTags, {
        blog: blog
      });
    });
  }
};
// CONCATENATED MODULE: ./src/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogRoot", function() { return src_CodeblogRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogPost", function() { return src_CodeblogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogIndexPage", function() { return src_CodeblogIndexPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCodeblogPost", function() { return src_PreviewCodeblogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codeblog", function() { return Codeblog; });
/* concated harmony reexport CodeblogContext */__webpack_require__.d(__webpack_exports__, "CodeblogContext", function() { return CodeblogContext; });
/* concated harmony reexport CodeblogContextInterface */__webpack_require__.d(__webpack_exports__, "CodeblogContextInterface", function() { return /* Cannot get final name for export "CodeblogContextInterface" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport Post */__webpack_require__.d(__webpack_exports__, "Post", function() { return /* Cannot get final name for export "Post" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport Blog */__webpack_require__.d(__webpack_exports__, "Blog", function() { return /* Cannot get final name for export "Blog" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport BlogPostComponentType */__webpack_require__.d(__webpack_exports__, "BlogPostComponentType", function() { return /* Cannot get final name for export "BlogPostComponentType" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport BlogComponentType */__webpack_require__.d(__webpack_exports__, "BlogComponentType", function() { return /* Cannot get final name for export "BlogComponentType" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport EnvironmentType */__webpack_require__.d(__webpack_exports__, "EnvironmentType", function() { return /* Cannot get final name for export "EnvironmentType" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport PageType */__webpack_require__.d(__webpack_exports__, "PageType", function() { return /* Cannot get final name for export "PageType" in "./src/components/CodeblogContext.tsx" (known exports: CodeblogContext, known reexports: ) */ undefined; });
/* concated harmony reexport BlogSEOTags */__webpack_require__.d(__webpack_exports__, "BlogSEOTags", function() { return SEOTags_BlogSEOTags; });
/* concated harmony reexport BlogPostSEOTags */__webpack_require__.d(__webpack_exports__, "BlogPostSEOTags", function() { return SEOTags_BlogPostSEOTags; });
/* concated harmony reexport Title */__webpack_require__.d(__webpack_exports__, "Title", function() { return index_esm_Title; });
/* concated harmony reexport Meta */__webpack_require__.d(__webpack_exports__, "Meta", function() { return index_esm_Meta; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return index_esm_Link; });
function src_extends() { src_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return src_extends.apply(this, arguments); }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { src_defineProperty(target, key, source[key]); }); } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var src_CodeblogRoot = function CodeblogRoot(props) {
  if (props.pageType === "show") {
    return external_react_["createElement"](src_CodeblogPost, props);
  } else if (props.pageType === "preview") {
    return external_react_["createElement"](src_PreviewCodeblogPost, props);
  } else if (props.pageType === "index") {
    return external_react_["createElement"](src_CodeblogIndexPage, props);
  } else {
    return null;
  }
};
var src_CodeblogPost = function CodeblogPost(props) {
  var BlogComponent = props.BlogComponent,
      BlogPostComponent = props.BlogPostComponent;
  return external_react_["createElement"](index_esm_HeadProvider, {
    headTags: props.headTags
  }, external_react_["createElement"](Codeblog_CodeblogProvider, {
    pageType: "show",
    environment: props.environment,
    post: src_objectSpread({}, props.post, {
      body: props.children
    }),
    blog: props.blog,
    BlogComponent: BlogComponent,
    BlogPostComponent: BlogPostComponent
  }, external_react_["createElement"](CodeblogContext.Consumer, null, function (contextProps) {
    return external_react_["createElement"](BlogComponent, contextProps, props.children);
  })));
};
var src_CodeblogIndexPage = function CodeblogIndexPage(props) {
  var BlogComponent = props.BlogComponent,
      BlogPostComponent = props.BlogPostComponent;
  return external_react_["createElement"](index_esm_HeadProvider, {
    headTags: props.headTags
  }, external_react_["createElement"](Codeblog_CodeblogProvider, {
    pageType: "index",
    environment: props.environment,
    posts: props.posts,
    blog: props.blog,
    BlogComponent: BlogComponent,
    BlogPostComponent: BlogPostComponent
  }, external_react_["createElement"](CodeblogContext.Consumer, null, function (contextProps) {
    return external_react_["createElement"](BlogComponent, contextProps, external_react_["Children"].map(props.children, function (child, index) {
      return external_react_["createElement"](BlogPostComponent, src_extends({}, contextProps, {
        post: contextProps.posts[index]
      }), child);
    }));
  })));
};
var src_PreviewCodeblogPost = function PreviewCodeblogPost(props) {
  var BlogComponent = props.BlogComponent,
      BlogPostComponent = props.BlogPostComponent;
  return external_react_["createElement"](index_esm_HeadProvider, {
    headTags: props.headTags
  }, external_react_["createElement"](Codeblog_CodeblogProvider, {
    pageType: "preview",
    environment: props.environment,
    post: src_objectSpread({}, props.post, {
      body: props.children
    }),
    blog: props.blog,
    BlogComponent: BlogComponent,
    BlogPostComponent: BlogPostComponent
  }, external_react_["createElement"](CodeblogContext.Consumer, null, function (contextProps) {
    return external_react_["createElement"](BlogComponent, contextProps, props.children);
  })));
};
var Codeblog = CodeblogContext.Consumer;
/* harmony default export */ var src = __webpack_exports__["default"] = (Codeblog);



/***/ })
/******/ ]);
});
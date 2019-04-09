(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-head"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("codeblog", ["react", "react-head", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["codeblog"] = factory(require("react"), require("react-head"), require("lodash"));
	else
		root["codeblog"] = factory(root["react"], root["react-head"], root["lodash"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

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
/* harmony import */ var react_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return react_head__WEBPACK_IMPORTED_MODULE_2__["Title"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return react_head__WEBPACK_IMPORTED_MODULE_2__["Meta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return react_head__WEBPACK_IMPORTED_MODULE_2__["Link"]; });

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var MetaTag = function MetaTag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__["Meta"], props);
};

var LinkTag = function LinkTag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__["Link"], props);
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
  }), post.title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__["Title"], null, post.title, " | via Codeblog"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MetaTag, {
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
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_head__WEBPACK_IMPORTED_MODULE_2__["Title"], null, getBlogTitle(blog)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkTag, {
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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react-head"
var external_react_head_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/CodeblogContext.tsx
var CodeblogContext = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Codeblog.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

    _defineProperty(_assertThisInitialized(_this), "state", void 0);

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
      return external_react_["createElement"](CodeblogContext["CodeblogContext"].Provider, {
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
// EXTERNAL MODULE: ./src/components/SEOTags.tsx
var SEOTags = __webpack_require__(3);

// CONCATENATED MODULE: ./src/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogRoot", function() { return src_CodeblogRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogPost", function() { return src_CodeblogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeblogIndexPage", function() { return src_CodeblogIndexPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCodeblogPost", function() { return src_PreviewCodeblogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Codeblog", function() { return Codeblog; });
/* concated harmony reexport CodeblogContext */__webpack_require__.d(__webpack_exports__, "CodeblogContext", function() { return CodeblogContext["CodeblogContext"]; });
/* concated harmony reexport CodeblogContextInterface */__webpack_require__.d(__webpack_exports__, "CodeblogContextInterface", function() { return CodeblogContext["CodeblogContextInterface"]; });
/* concated harmony reexport Post */__webpack_require__.d(__webpack_exports__, "Post", function() { return CodeblogContext["Post"]; });
/* concated harmony reexport Blog */__webpack_require__.d(__webpack_exports__, "Blog", function() { return CodeblogContext["Blog"]; });
/* concated harmony reexport BlogPostComponentType */__webpack_require__.d(__webpack_exports__, "BlogPostComponentType", function() { return CodeblogContext["BlogPostComponentType"]; });
/* concated harmony reexport BlogComponentType */__webpack_require__.d(__webpack_exports__, "BlogComponentType", function() { return CodeblogContext["BlogComponentType"]; });
/* concated harmony reexport EnvironmentType */__webpack_require__.d(__webpack_exports__, "EnvironmentType", function() { return CodeblogContext["EnvironmentType"]; });
/* concated harmony reexport PageType */__webpack_require__.d(__webpack_exports__, "PageType", function() { return CodeblogContext["PageType"]; });
/* concated harmony reexport CodeblogProvider */__webpack_require__.d(__webpack_exports__, "CodeblogProvider", function() { return Codeblog_CodeblogProvider; });
/* concated harmony reexport BlogSEOTags */__webpack_require__.d(__webpack_exports__, "BlogSEOTags", function() { return SEOTags["BlogSEOTags"]; });
/* concated harmony reexport BlogPostSEOTags */__webpack_require__.d(__webpack_exports__, "BlogPostSEOTags", function() { return SEOTags["BlogPostSEOTags"]; });
/* concated harmony reexport Title */__webpack_require__.d(__webpack_exports__, "Title", function() { return SEOTags["Title"]; });
/* concated harmony reexport Meta */__webpack_require__.d(__webpack_exports__, "Meta", function() { return SEOTags["Meta"]; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return SEOTags["Link"]; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  return external_react_["createElement"](external_react_head_["HeadProvider"], {
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
  }, external_react_["createElement"](CodeblogContext["CodeblogContext"].Consumer, null, function (contextProps) {
    return external_react_["createElement"](BlogComponent, contextProps, props.children);
  })));
};
var src_CodeblogIndexPage = function CodeblogIndexPage(props) {
  var BlogComponent = props.BlogComponent,
      BlogPostComponent = props.BlogPostComponent;
  return external_react_["createElement"](external_react_head_["HeadProvider"], {
    headTags: props.headTags
  }, external_react_["createElement"](Codeblog_CodeblogProvider, {
    pageType: "index",
    environment: props.environment,
    posts: props.posts,
    blog: props.blog,
    BlogComponent: BlogComponent,
    BlogPostComponent: BlogPostComponent
  }, external_react_["createElement"](CodeblogContext["CodeblogContext"].Consumer, null, function (contextProps) {
    return external_react_["createElement"](BlogComponent, contextProps, external_react_["Children"].map(props.children, function (child, index) {
      return external_react_["createElement"](BlogPostComponent, _extends({}, contextProps, {
        post: contextProps.posts[index]
      }), child);
    }));
  })));
};
var src_PreviewCodeblogPost = function PreviewCodeblogPost(props) {
  var BlogComponent = props.BlogComponent,
      BlogPostComponent = props.BlogPostComponent;
  return external_react_["createElement"](external_react_head_["HeadProvider"], {
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
  }, external_react_["createElement"](CodeblogContext["CodeblogContext"].Consumer, null, function (contextProps) {
    return external_react_["createElement"](BlogComponent, contextProps, props.children);
  })));
};
var Codeblog = CodeblogContext["CodeblogContext"].Consumer;
/* harmony default export */ var src = __webpack_exports__["default"] = (Codeblog);



/***/ })
/******/ ]);
});
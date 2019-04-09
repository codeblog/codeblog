(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-head"));
	else if(typeof define === 'function' && define.amd)
		define("codeblog", ["react", "react-head"], factory);
	else if(typeof exports === 'object')
		exports["codeblog"] = factory(require("react"), require("react-head"));
	else
		root["codeblog"] = factory(root["react"], root["react-head"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__) {
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

/***/ })
/******/ ]);
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["codeblog"] = factory(require("react"), require("react-dom"));
	else
		root["codeblog"] = factory(root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***************************************************************************************************************!*\
  !*** /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _assertThisInitialized; });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://codeblog//Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************************!*\
  !*** /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _extends; });\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack://codeblog//Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************************************************!*\
  !*** /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inheritsLoose; });\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\n//# sourceURL=webpack://codeblog//Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js?");

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutPropertiesLoose; });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack://codeblog//Users/jarred/Code/codeblog/opensource/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "../../node_modules/react-head/dist/index.esm.js":
/*!****************************************************************************************!*\
  !*** /Users/jarred/Code/codeblog/opensource/node_modules/react-head/dist/index.esm.js ***!
  \****************************************************************************************/
/*! exports provided: Title, Style, Meta, Link, HeadProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Style\", function() { return Style; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return Meta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeadProvider\", function() { return HeadProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-invariant */ \"../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\n\n\n\n\n\n\nvar _React$createContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(null),\n    Consumer = _React$createContext.Consumer,\n    Provider = _React$createContext.Provider;\n\nvar HeadTag =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HeadTag, _React$Component);\n\n  function HeadTag() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n    _this.state = {\n      canUseDOM: false\n    };\n    _this.headTags = null;\n    _this.index = -1;\n    return _this;\n  }\n\n  var _proto = HeadTag.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    var _this$props = this.props,\n        tag = _this$props.tag,\n        name = _this$props.name,\n        property = _this$props.property;\n    this.setState({\n      canUseDOM: true\n    });\n    this.index = this.headTags.addClientTag(tag, name || property);\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    this.headTags.removeClientTag(this.props.tag, this.index);\n  };\n\n  _proto.render = function render() {\n    var _this2 = this;\n\n    var _this$props2 = this.props,\n        Tag = _this$props2.tag,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this$props2, [\"tag\"]);\n\n    return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Consumer, null, function (headTags) {\n      !headTags ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(false, '<HeadProvider /> should be in the tree') : undefined : void 0;\n      _this2.headTags = headTags;\n\n      if (_this2.state.canUseDOM) {\n        if (!headTags.shouldRenderTag(Tag, _this2.index)) {\n          return null;\n        }\n\n        var ClientComp = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Tag, rest);\n        return Object(react_dom__WEBPACK_IMPORTED_MODULE_4__[\"createPortal\"])(ClientComp, document.head);\n      }\n\n      var ServerComp = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        \"data-rh\": \"\"\n      }, rest));\n      headTags.addServerTag(ServerComp);\n      return null;\n    });\n  };\n\n  return HeadTag;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar cascadingTags = ['title', 'meta'];\n\nvar HeadProvider =\n/*#__PURE__*/\nfunction (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HeadProvider, _React$Component);\n\n  function HeadProvider() {\n    var _this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\n    _this.indices = new Map();\n    _this.state = {\n      addClientTag: function addClientTag(tag, name) {\n        // consider only cascading tags\n        if (cascadingTags.indexOf(tag) !== -1) {\n          _this.setState(function (state) {\n            var _ref;\n\n            var names = state[tag] || [];\n            return _ref = {}, _ref[tag] = names.concat([name]), _ref;\n          }); // track indices synchronously\n\n\n          var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_this)),\n              indices = _assertThisInitialize.indices;\n\n          var index = indices.has(tag) ? indices.get(tag) + 1 : 0;\n          indices.set(tag, index);\n          return index;\n        }\n\n        return -1;\n      },\n      shouldRenderTag: function shouldRenderTag(tag, index) {\n        if (cascadingTags.indexOf(tag) !== -1) {\n          var names = _this.state[tag]; // check if the tag is the last one of similar\n\n          return names && names.lastIndexOf(names[index]) === index;\n        }\n\n        return true;\n      },\n      removeClientTag: function removeClientTag(tag, index) {\n        _this.setState(function (state) {\n          var names = state[tag];\n\n          if (names) {\n            var _ref2;\n\n            names[index] = null;\n            return _ref2 = {}, _ref2[tag] = names, _ref2;\n          }\n\n          return null;\n        });\n      },\n      addServerTag: function addServerTag(tagNode) {\n        var headTags = _this.props.headTags || []; // tweak only cascading tags\n\n        if (cascadingTags.indexOf(tagNode.type) !== -1) {\n          var index = headTags.findIndex(function (prev) {\n            var prevName = prev.props.name || prev.props.property;\n            var nextName = tagNode.props.name || tagNode.props.property;\n            return prev.type === tagNode.type && prevName === nextName;\n          });\n\n          if (index !== -1) {\n            headTags.splice(index, 1);\n          }\n        }\n\n        headTags.push(tagNode);\n      }\n    };\n    return _this;\n  }\n\n  var _proto = HeadProvider.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    var ssrTags = document.head.querySelectorAll(\"[data-rh=\\\"\\\"]\"); // `forEach` on `NodeList` is not supported in Googlebot, so use a workaround\n\n    Array.prototype.forEach.call(ssrTags, function (ssrTag) {\n      return ssrTag.parentNode.removeChild(ssrTag);\n    });\n  };\n\n  _proto.render = function render() {\n    !(typeof window !== 'undefined' || Array.isArray(this.props.headTags)) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(false, 'headTags array should be passed to <HeadProvider /> in node') : undefined : void 0;\n    return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Provider, {\n      value: this.state\n    }, this.props.children);\n  };\n\n  return HeadProvider;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Title = function Title(props) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(HeadTag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    tag: \"title\"\n  }, props));\n};\nvar Style = function Style(props) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(HeadTag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    tag: \"style\"\n  }, props));\n};\nvar Meta = function Meta(props) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(HeadTag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    tag: \"meta\"\n  }, props));\n};\nvar Link = function Link(props) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(HeadTag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    tag: \"link\"\n  }, props));\n};\n\n\n\n\n//# sourceURL=webpack://codeblog//Users/jarred/Code/codeblog/opensource/node_modules/react-head/dist/index.esm.js?");

/***/ }),

/***/ "../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!*****************************************************************************************************!*\
  !*** /Users/jarred/Code/codeblog/opensource/node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isProduction = \"development\" === 'production';\nvar prefix = 'Invariant failed';\nfunction invariant(condition, message) {\n  if (condition) {\n    return;\n  }\n\n  if (isProduction) {\n    throw new Error(prefix);\n  } else {\n    throw new Error(prefix + \": \" + (message || ''));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (invariant);\n\n\n//# sourceURL=webpack://codeblog//Users/jarred/Code/codeblog/opensource/node_modules/tiny-invariant/dist/tiny-invariant.esm.js?");

/***/ }),

/***/ "./src/components/Codeblog.tsx":
/*!*************************************!*\
  !*** ./src/components/Codeblog.tsx ***!
  \*************************************/
/*! exports provided: CodeblogContext, normalizePost, CodeblogProvider, Codeblog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeblogContext\", function() { return CodeblogContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizePost\", function() { return normalizePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeblogProvider\", function() { return CodeblogProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Codeblog\", function() { return Codeblog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar CodeblogContext = react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"](null);\nvar normalizePost = function normalizePost(post, blog) {\n  var _post$published_at = post.published_at,\n      publishedAt = _post$published_at === void 0 ? null : _post$published_at,\n      _post$editedAt = post.editedAt,\n      editedAt = _post$editedAt === void 0 ? null : _post$editedAt,\n      _post$photo_url = post.photo_url,\n      photoURL = _post$photo_url === void 0 ? null : _post$photo_url;\n\n  if (publishedAt) {\n    publishedAt = new Date(publishedAt);\n  }\n\n  if (editedAt) {\n    editedAt = new Date(editedAt);\n  }\n\n  return _objectSpread({}, post, {\n    blog: blog,\n    publishedAt: publishedAt,\n    photoURL: photoURL,\n    editedAt: editedAt,\n    author: blog\n  });\n};\nvar CodeblogProvider =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CodeblogProvider, _React$Component);\n\n  function CodeblogProvider(props) {\n    var _this;\n\n    _classCallCheck(this, CodeblogProvider);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CodeblogProvider).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", void 0);\n\n    var state = {\n      blog: _objectSpread({}, props.blog),\n      posts: props.posts,\n      post: props.post,\n      pageType: props.pageType,\n      environment: props.environment,\n      BlogComponent: props.BlogComponent,\n      BlogPostComponent: props.BlogPostComponent\n    };\n\n    if (props.post) {\n      state.post = normalizePost(props.post, state.blog);\n    }\n\n    state.posts = props.posts.map(function (post) {\n      return normalizePost(post, state.blog);\n    });\n    _this.state = state;\n    return _this;\n  }\n\n  _createClass(CodeblogProvider, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](CodeblogContext.Provider, {\n        value: this.state\n      }, this.props.children);\n    }\n  }]);\n\n  return CodeblogProvider;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n_defineProperty(CodeblogProvider, \"defaultProps\", {\n  posts: [],\n  post: null\n});\n\nvar Codeblog = CodeblogContext.Consumer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Codeblog);\n\n//# sourceURL=webpack://codeblog/./src/components/Codeblog.tsx?");

/***/ }),

/***/ "./src/components/SEOTags.tsx":
/*!************************************!*\
  !*** ./src/components/SEOTags.tsx ***!
  \************************************/
/*! exports provided: getBlogTitle, BlogPostSEOTags, RawBlogSEOTags, BlogSEOTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBlogTitle\", function() { return getBlogTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogPostSEOTags\", function() { return BlogPostSEOTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RawBlogSEOTags\", function() { return RawBlogSEOTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogSEOTags\", function() { return BlogSEOTags; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.tsx\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nvar MetaTag = function MetaTag(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_index__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"], props);\n};\n\nvar getBlogTitle = function getBlogTitle(blog) {\n  if (blog.title) {\n    return \"\".concat(blog.title, \" | Powered by Codeblog\");\n  } else {\n    return \"@\".concat(blog.subdomain, \" | Powered by Codeblog\");\n  }\n};\n\nvar RawBlogPostSEOTags = function RawBlogPostSEOTags(_ref) {\n  var post = _ref.post,\n      pageType = _ref.pageType;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    itemProp: \"description\",\n    content: post.summary\n  }), pageType === \"show\" && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"article:publisher\",\n    content: \"https://codeblog.com\"\n  }), post.title && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_index__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, post.title, \" | via Codeblog\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:title\",\n    content: \"\".concat(post.title, \" | via Codeblog\")\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"twitter:title\",\n    content: \"\".concat(post.title, \" | via Codeblog\")\n  })), post.summary && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:description\",\n    content: post.summary\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"description\",\n    content: post.summary\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"twitter:description\",\n    content: post.summary\n  })), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:type\",\n    content: \"article\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:url\",\n    content: post.url\n  }), post.publishedAt && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:article:published_time\",\n    content: post.publishedAt.toISOString()\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"article:published_time\",\n    content: post.publishedAt.toISOString()\n  })), post.photoURL && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:image:url\",\n    content: post.photoURL\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"twitter:image\",\n    content: post.photoURL\n  })), post.editedAt && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:article:modified_time\",\n    content: post.editedAt.toISOString()\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"article:modified_time\",\n    content: post.editedAt.toISOString()\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    itemProp: \"dateModified\",\n    content: post.editedAt.toISOString()\n  }))));\n};\n\nvar BlogPostSEOTags = function BlogPostSEOTags(_ref2) {\n  var post = _ref2.post;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_index__WEBPACK_IMPORTED_MODULE_1__[\"Codeblog\"], null, function (_ref3) {\n    var pageType = _ref3.pageType,\n        otherProps = _objectWithoutProperties(_ref3, [\"pageType\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](RawBlogPostSEOTags, _extends({}, otherProps, {\n      pageType: pageType,\n      post: post\n    }));\n  });\n};\nvar RawBlogSEOTags = function RawBlogSEOTags(_ref4) {\n  var blog = _ref4.blog;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_index__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, getBlogTitle(blog)), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"meta\", {\n    name: \"twitter:site\",\n    content: getBlogTitle(blog)\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:title\",\n    content: getBlogTitle(blog)\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"twitter:title\",\n    content: getBlogTitle(blog)\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"twitter:card\",\n    content: \"sumamry\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:description\",\n    content: blog.description\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"twitter:description\",\n    content: blog.description\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"description\",\n    content: blog.description\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    property: \"og:site_name\",\n    content: getBlogTitle(blog)\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](MetaTag, {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\"\n  }));\n};\nvar BlogSEOTags = function BlogSEOTags(_ref5) {\n  var blog = _ref5.blog;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_index__WEBPACK_IMPORTED_MODULE_1__[\"Codeblog\"], null, function (_ref6) {\n    var currentBlog = _ref6.blog;\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](RawBlogSEOTags, {\n      blog: blog || currentBlog\n    });\n  });\n};\n\n//# sourceURL=webpack://codeblog/./src/components/SEOTags.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: BlogSEOTags, BlogPostSEOTags, Codeblog, CodeblogContextType, Title, Meta, Post, Blog, BlogComponentType, BlogPostComponentType, EnvironmentType, PageType, CodeblogRoot, CodeblogPost, CodeblogIndexPage, PreviewCodeblogPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeblogRoot\", function() { return CodeblogRoot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeblogPost\", function() { return CodeblogPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeblogIndexPage\", function() { return CodeblogIndexPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PreviewCodeblogPost\", function() { return PreviewCodeblogPost; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-head */ \"../../node_modules/react-head/dist/index.esm.js\");\n/* harmony import */ var _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Codeblog */ \"./src/components/Codeblog.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Codeblog\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Codeblog\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CodeblogContextType\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"CodeblogContext\"]; });\n\n/* harmony import */ var _components_SEOTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SEOTags */ \"./src/components/SEOTags.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlogSEOTags\", function() { return _components_SEOTags__WEBPACK_IMPORTED_MODULE_3__[\"BlogSEOTags\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlogPostSEOTags\", function() { return _components_SEOTags__WEBPACK_IMPORTED_MODULE_3__[\"BlogPostSEOTags\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return react_head__WEBPACK_IMPORTED_MODULE_1__[\"Title\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return react_head__WEBPACK_IMPORTED_MODULE_1__[\"Meta\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Post\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Blog\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Blog\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlogComponentType\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"BlogComponentType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlogPostComponentType\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"BlogPostComponentType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EnvironmentType\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"EnvironmentType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PageType\", function() { return _components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"PageType\"]; });\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar CodeblogRoot = function CodeblogRoot(props) {\n  if (props.pageType === \"show\") {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](CodeblogPost, props);\n  } else if (props.pageType === \"preview\") {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](PreviewCodeblogPost, props);\n  } else if (props.pageType === \"index\") {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](CodeblogIndexPage, props);\n  } else {\n    return null;\n  }\n};\nvar CodeblogPost = function CodeblogPost(props) {\n  var BlogComponent = props.BlogComponent,\n      BlogPostComponent = props.BlogPostComponent;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_head__WEBPACK_IMPORTED_MODULE_1__[\"HeadProvider\"], {\n    headTags: props.headTags\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"CodeblogProvider\"], {\n    pageType: \"show\",\n    environment: props.environment,\n    post: _objectSpread({}, props.post, {\n      body: props.children\n    }),\n    blog: props.blog,\n    BlogComponent: BlogComponent,\n    BlogPostComponent: BlogPostComponent\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Codeblog\"], null, function (contextProps) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](BlogComponent, contextProps, props.children);\n  })));\n};\nvar CodeblogIndexPage = function CodeblogIndexPage(props) {\n  var BlogComponent = props.BlogComponent,\n      BlogPostComponent = props.BlogPostComponent;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_head__WEBPACK_IMPORTED_MODULE_1__[\"HeadProvider\"], {\n    headTags: props.headTags\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"CodeblogProvider\"], {\n    pageType: \"index\",\n    environment: props.environment,\n    posts: props.posts,\n    blog: props.blog,\n    BlogComponent: BlogComponent,\n    BlogPostComponent: BlogPostComponent\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Codeblog\"], null, function (contextProps) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](BlogComponent, contextProps, props.children);\n  })));\n};\nvar PreviewCodeblogPost = function PreviewCodeblogPost(props) {\n  var BlogComponent = props.BlogComponent,\n      BlogPostComponent = props.BlogPostComponent;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_head__WEBPACK_IMPORTED_MODULE_1__[\"HeadProvider\"], {\n    headTags: props.headTags\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"CodeblogProvider\"], {\n    pageType: \"preview\",\n    environment: props.environment,\n    post: _objectSpread({}, props.post, {\n      body: props.children\n    }),\n    blog: props.blog,\n    BlogComponent: BlogComponent,\n    BlogPostComponent: BlogPostComponent\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Codeblog\"], null, function (contextProps) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](BlogComponent, contextProps, props.children);\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_Codeblog__WEBPACK_IMPORTED_MODULE_2__[\"Codeblog\"]);\n\n//# sourceURL=webpack://codeblog/./src/index.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://codeblog/external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://codeblog/external_%22react-dom%22?");

/***/ })

/******/ });
});
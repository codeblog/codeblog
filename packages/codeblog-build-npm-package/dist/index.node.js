(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("codeblog-build-npm-package", [], factory);
	else if(typeof exports === 'object')
		exports["codeblog-build-npm-package"] = factory();
	else
		root["codeblog-build-npm-package"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("npm-package-arg");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _buildPackage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "buildPackage", {
    enumerable: true,
    get: function get() {
      return _buildPackage.buildPackage;
    }
  });
  Object.defineProperty(_exports, "buildPackageFromPost", {
    enumerable: true,
    get: function get() {
      return _buildPackage.buildPackageFromPost;
    }
  });
  Object.defineProperty(_exports, "buildPackageFromTemplate", {
    enumerable: true,
    get: function get() {
      return _buildPackage.buildPackageFromTemplate;
    }
  });
  Object.defineProperty(_exports, "createPackageJSON", {
    enumerable: true,
    get: function get() {
      return _buildPackage.createPackageJSON;
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(3), __webpack_require__(9), __webpack_require__(10), __webpack_require__(14), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _toConsumableArray2, _objectSpread2, _lodash, _npmPackageArg, _path, _findImports, _transformMDX, _runBabel2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.buildPackageFromPost = _exports.buildPackageFromTemplate = _exports.buildPackage = _exports.createPackageJSON = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _npmPackageArg = _interopRequireDefault(_npmPackageArg);
  var PEER_DEPENDNENCIES = {
    react: ">=16.8.0",
    "@mdx-js/mdx": "^1.0.0-alpha.6",
    "@mdx-js/tag": "^1.0.0-alpha.6"
  };

  var getJSFiles = function getJSFiles(files) {
    return Object.keys(files).filter(function (key) {
      return (0, _path.basename)(key).endsWith(".js");
    });
  };

  var getImportsFromPackage = function getImportsFromPackage(pkg) {
    var jsFiles = getJSFiles(pkg);
    var moduleNames = jsFiles.map(function (name) {
      return (0, _path.basename)(name, "js");
    }).map(function (string) {
      return string.substr(0, string.length - 1);
    });
    return (0, _lodash.flatMap)(moduleNames, function (moduleName) {
      return (0, _findImports.findImports)(pkg[moduleName + ".js"]);
    });
  };

  var compileJSFiles = function compileJSFiles(pkg) {
    var skipFiles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ["index.js"];
    var jsFiles = getJSFiles(pkg);
    return new Promise(function (resolve, reject) {
      var output = {};
      Promise.all(jsFiles.map(function (file) {
        if (!skipFiles.includes(file)) {
          return (0, _runBabel2.runBabel)(pkg[file]).then(function (code) {
            return output[file] = code;
          });
        } else {
          return true;
        }
      })).then(function () {
        resolve(output);
      });
    });
  };

  var createPackageJSON = function createPackageJSON(_ref) {
    var files = _ref.files,
        name = _ref.name,
        indexFileName = _ref.indexFileName,
        license = _ref.license,
        version = _ref.version,
        description = _ref.description,
        defaultImports = _ref.defaultImports,
        peerDependencies = _ref.peerDependencies,
        website = _ref.website,
        _ref$dependencies = _ref.dependencies,
        dependencies = _ref$dependencies === void 0 ? {} : _ref$dependencies;
    var allImports = getImportsFromPackage(files);

    var _dependencies = (0, _objectSpread2.default)({}, dependencies);

    [].concat((0, _toConsumableArray2.default)(defaultImports), (0, _toConsumableArray2.default)(allImports)).forEach(function (importName) {
      if (PEER_DEPENDNENCIES[importName]) {
        return;
      }

      var depName = (0, _npmPackageArg.default)(importName).name; // TODO: make this lock a specific version

      if (!_dependencies[depName]) {
        _dependencies[depName] = "*";
      }
    });
    return {
      name: (0, _npmPackageArg.default)(name).name,
      version: version,
      license: license,
      dependencies: _dependencies,
      browser: indexFileName,
      main: indexFileName,
      description: description,
      peerDependencies: peerDependencies,
      website: website
    };
  };

  _exports.createPackageJSON = createPackageJSON;

  var buildPackage =
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(_ref2) {
      var _ref2$files, files, _ref2$indexFileName, indexFileName, skipFiles, version, description, name, dependencies, _ref2$defaultImports, defaultImports, _ref2$peerDependencie, peerDependencies, website, _ref2$license, license, jsFiles, _files;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2$files = _ref2.files, files = _ref2$files === void 0 ? {} : _ref2$files, _ref2$indexFileName = _ref2.indexFileName, indexFileName = _ref2$indexFileName === void 0 ? "index.js" : _ref2$indexFileName, skipFiles = _ref2.skipFiles, version = _ref2.version, description = _ref2.description, name = _ref2.name, dependencies = _ref2.dependencies, _ref2$defaultImports = _ref2.defaultImports, defaultImports = _ref2$defaultImports === void 0 ? [] : _ref2$defaultImports, _ref2$peerDependencie = _ref2.peerDependencies, peerDependencies = _ref2$peerDependencie === void 0 ? PEER_DEPENDNENCIES : _ref2$peerDependencie, website = _ref2.website, _ref2$license = _ref2.license, license = _ref2$license === void 0 ? "UNCLIENSED" : _ref2$license;
              _context.next = 3;
              return compileJSFiles(files, skipFiles);

            case 3:
              jsFiles = _context.sent;
              _files = (0, _objectSpread2.default)({}, files, jsFiles || {});

              if (!_files["package.json"]) {
                _files["package.json"] = createPackageJSON({
                  files: _files,
                  dependencies: dependencies,
                  name: name,
                  indexFileName: indexFileName,
                  version: version,
                  description: description,
                  defaultImports: defaultImports,
                  peerDependencies: peerDependencies,
                  website: website,
                  license: license
                });
              }

              return _context.abrupt("return", _files);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function buildPackage(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  _exports.buildPackage = buildPackage;

  var buildPackageFromTemplate = function buildPackageFromTemplate(_ref4) {
    var template = _ref4.template,
        name = _ref4.name,
        version = _ref4.version;
    var files = template.files;
    return buildPackage({
      files: files,
      defaultImports: [],
      skipFiles: [],
      version: version,
      description: template.title || template.description || "Codeblog Template by @".concat(template.author),
      website: "https://".concat(template.author, ".codeblog.com"),
      name: name
    });
  };

  _exports.buildPackageFromTemplate = buildPackageFromTemplate;

  var buildPackageFromPost =
  /*#__PURE__*/
  function () {
    var _ref6 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(_ref5) {
      var post,
          name,
          version,
          _runBabel,
          dependencies,
          body,
          code,
          files,
          _args2 = arguments;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              post = _ref5.post, name = _ref5.name, version = _ref5.version;
              _runBabel = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _runBabel2.runBabel;
              dependencies = _args2.length > 2 ? _args2[2] : undefined;
              body = post.body;
              _context2.next = 6;
              return (0, _transformMDX.transformMDX)(body, _runBabel);

            case 6:
              code = _context2.sent;
              files = post.files || {};
              return _context2.abrupt("return", buildPackage({
                files: (0, _objectSpread2.default)({}, files, {
                  "index.js": code,
                  "post.mdx": body
                }),
                dependencies: dependencies,
                skipFiles: ["index.js"],
                defaultImports: (0, _findImports.findImports)(code),
                version: version,
                description: post.summary || post.title,
                website: post.url,
                name: name
              }));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function buildPackageFromPost(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  _exports.buildPackageFromPost = buildPackageFromPost;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(11), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _npmPackageArg, acorn, _acornUmd) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(13);

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.findImports = findImports;
  _npmPackageArg = _interopRequireDefault(_npmPackageArg);
  acorn = _interopRequireWildcard(acorn);
  _acornUmd = _interopRequireDefault(_acornUmd);

  function findImports(code) {
    var ast = acorn.parse(code, {
      ecmaVersion: 6
    });
    var imports = (0, _acornUmd.default)(ast, {
      es6: true,
      amd: false,
      cjs: true
    });
    return imports.map(function (importObj) {
      return importObj.source.value;
    }).filter(function (name) {
      return (0, _npmPackageArg.default)(name).name;
    });
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("acorn");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("acorn-umd");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _mdx) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(0);

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.transformMDX = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _mdx = _interopRequireDefault(_mdx);

  var transformMDX =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(children, runBabel) {
      var jsx, importLines, _children;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              importLines = [];

              try {
                _children = children.split("\n");
                importLines = _children.filter(function (line) {
                  return /^import/.test(line);
                });
                jsx = _mdx.default.sync(_children.filter(function (line) {
                  return !/^import/.test(line);
                }).join("\n"), {
                  mdPlugins: [[// Removes front-matter from Markdown output
                  __webpack_require__(16), {
                    type: "yaml",
                    marker: "-",
                    fence: "---",
                    anywhere: true
                  }], __webpack_require__(17), __webpack_require__(18), __webpack_require__(19)],
                  hastPlugins: [__webpack_require__(20)],
                  skipExport: true
                });
              } catch (exception) {
                console.error(exception);
              }

              if (jsx && importLines.length > 0) {
                jsx = [importLines.join("\n"), jsx].join("\n\n");
              }

              if (jsx && jsx.indexOf("function MDXContent") > -1) {
                jsx = jsx.replace("function MDXContent", "export default function MDXContent");
              }

              return _context.abrupt("return", runBabel(jsx));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function transformMDX(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  _exports.transformMDX = transformMDX;
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/mdx");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("remark-frontmatter");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("remark-slug");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("remark-images");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("remark-emoji");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("rehype-highlight");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _core) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.runBabel = void 0;

  var runBabel = function runBabel(jsx) {
    return (0, _core.transformAsync)(jsx, {
      presets: [["@babel/env", {
        targets: {
          browsers: "last 2 versions",
          node: "8"
        },
        modules: "umd"
      }], "@babel/react"],
      sourceMaps: false,
      plugins: [["@babel/plugin-transform-runtime", {
        regenerator: true
      }], ["@babel/transform-destructuring", {
        useBuiltIns: true
      }], "@babel/transform-object-assign", "@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"]
    }).then(function (res) {
      return res.code;
    });
  };

  _exports.runBabel = runBabel;
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/core");

/***/ })
/******/ ]);
});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {
module.exports = npa
module.exports.resolve = resolve
module.exports.Result = Result

let url
let HostedGit
let semver
let path
let validatePackageName
let osenv

const isWindows = process.platform === 'win32' || global.FAKE_WINDOWS
const hasSlashes = isWindows ? /\\|[/]/ : /[/]/
const isURL = /^(?:git[+])?[a-z]+:/i
const isFilename = /[.](?:tgz|tar.gz|tar)$/i

function npa (arg, where) {
  let name
  let spec
  if (typeof arg === 'object') {
    if (arg instanceof Result && (!where || where === arg.where)) {
      return arg
    } else if (arg.name && arg.rawSpec) {
      return npa.resolve(arg.name, arg.rawSpec, where || arg.where)
    } else {
      return npa(arg.raw, where || arg.where)
    }
  }
  const nameEndsAt = arg[0] === '@' ? arg.slice(1).indexOf('@') + 1 : arg.indexOf('@')
  const namePart = nameEndsAt > 0 ? arg.slice(0, nameEndsAt) : arg
  if (isURL.test(arg)) {
    spec = arg
  } else if (namePart[0] !== '@' && (hasSlashes.test(namePart) || isFilename.test(namePart))) {
    spec = arg
  } else if (nameEndsAt > 0) {
    name = namePart
    spec = arg.slice(nameEndsAt + 1)
  } else {
    if (!validatePackageName) validatePackageName = __webpack_require__(6)
    const valid = validatePackageName(arg)
    if (valid.validForOldPackages) {
      name = arg
    } else {
      spec = arg
    }
  }
  return resolve(name, spec, where, arg)
}

const isFilespec = isWindows ? /^(?:[.]|~[/]|[/\\]|[a-zA-Z]:)/ : /^(?:[.]|~[/]|[/]|[a-zA-Z]:)/

function resolve (name, spec, where, arg) {
  const res = new Result({
    raw: arg,
    name: name,
    rawSpec: spec,
    fromArgument: arg != null
  })

  if (name) res.setName(name)

  if (spec && (isFilespec.test(spec) || /^file:/i.test(spec))) {
    return fromFile(res, where)
  } else if (spec && /^npm:/i.test(spec)) {
    return fromAlias(res, where)
  }
  if (!HostedGit) HostedGit = __webpack_require__(13)
  const hosted = HostedGit.fromUrl(spec, {noGitPlus: true, noCommittish: true})
  if (hosted) {
    return fromHostedGit(res, hosted)
  } else if (spec && isURL.test(spec)) {
    return fromURL(res)
  } else if (spec && (hasSlashes.test(spec) || isFilename.test(spec))) {
    return fromFile(res, where)
  } else {
    return fromRegistry(res)
  }
}

function invalidPackageName (name, valid) {
  const err = new Error(`Invalid package name "${name}": ${valid.errors.join('; ')}`)
  err.code = 'EINVALIDPACKAGENAME'
  return err
}
function invalidTagName (name) {
  const err = new Error(`Invalid tag name "${name}": Tags may not have any characters that encodeURIComponent encodes.`)
  err.code = 'EINVALIDTAGNAME'
  return err
}

function Result (opts) {
  this.type = opts.type
  this.registry = opts.registry
  this.where = opts.where
  if (opts.raw == null) {
    this.raw = opts.name ? opts.name + '@' + opts.rawSpec : opts.rawSpec
  } else {
    this.raw = opts.raw
  }
  this.name = undefined
  this.escapedName = undefined
  this.scope = undefined
  this.rawSpec = opts.rawSpec == null ? '' : opts.rawSpec
  this.saveSpec = opts.saveSpec
  this.fetchSpec = opts.fetchSpec
  if (opts.name) this.setName(opts.name)
  this.gitRange = opts.gitRange
  this.gitCommittish = opts.gitCommittish
  this.hosted = opts.hosted
}
Result.prototype = {}

Result.prototype.setName = function (name) {
  if (!validatePackageName) validatePackageName = __webpack_require__(6)
  const valid = validatePackageName(name)
  if (!valid.validForOldPackages) {
    throw invalidPackageName(name, valid)
  }
  this.name = name
  this.scope = name[0] === '@' ? name.slice(0, name.indexOf('/')) : undefined
  // scoped packages in couch must have slash url-encoded, e.g. @foo%2Fbar
  this.escapedName = name.replace('/', '%2f')
  return this
}

Result.prototype.toString = function () {
  const full = []
  if (this.name != null && this.name !== '') full.push(this.name)
  const spec = this.saveSpec || this.fetchSpec || this.rawSpec
  if (spec != null && spec !== '') full.push(spec)
  return full.length ? full.join('@') : this.raw
}

Result.prototype.toJSON = function () {
  const result = Object.assign({}, this)
  delete result.hosted
  return result
}

function setGitCommittish (res, committish) {
  if (committish != null && committish.length >= 7 && committish.slice(0, 7) === 'semver:') {
    res.gitRange = decodeURIComponent(committish.slice(7))
    res.gitCommittish = null
  } else {
    res.gitCommittish = committish === '' ? null : committish
  }
  return res
}

const isAbsolutePath = /^[/]|^[A-Za-z]:/

function resolvePath (where, spec) {
  if (isAbsolutePath.test(spec)) return spec
  if (!path) path = __webpack_require__(0)
  return path.resolve(where, spec)
}

function isAbsolute (dir) {
  if (dir[0] === '/') return true
  if (/^[A-Za-z]:/.test(dir)) return true
  return false
}

function fromFile (res, where) {
  if (!where) where = process.cwd()
  res.type = isFilename.test(res.rawSpec) ? 'file' : 'directory'
  res.where = where

  const spec = res.rawSpec.replace(/\\/g, '/')
    .replace(/^file:[/]*([A-Za-z]:)/, '$1') // drive name paths on windows
    .replace(/^file:(?:[/]*([~./]))?/, '$1')
  if (/^~[/]/.test(spec)) {
    // this is needed for windows and for file:~/foo/bar
    if (!osenv) osenv = __webpack_require__(14)
    res.fetchSpec = resolvePath(osenv.home(), spec.slice(2))
    res.saveSpec = 'file:' + spec
  } else {
    res.fetchSpec = resolvePath(where, spec)
    if (isAbsolute(spec)) {
      res.saveSpec = 'file:' + spec
    } else {
      if (!path) path = __webpack_require__(0)
      res.saveSpec = 'file:' + path.relative(where, res.fetchSpec)
    }
  }
  return res
}

function fromHostedGit (res, hosted) {
  res.type = 'git'
  res.hosted = hosted
  res.saveSpec = hosted.toString({noGitPlus: false, noCommittish: false})
  res.fetchSpec = hosted.getDefaultRepresentation() === 'shortcut' ? null : hosted.toString()
  return setGitCommittish(res, hosted.committish)
}

function unsupportedURLType (protocol, spec) {
  const err = new Error(`Unsupported URL Type "${protocol}": ${spec}`)
  err.code = 'EUNSUPPORTEDPROTOCOL'
  return err
}

function matchGitScp (spec) {
  // git ssh specifiers are overloaded to also use scp-style git
  // specifiers, so we have to parse those out and treat them special.
  // They are NOT true URIs, so we can't hand them to `url.parse`.
  //
  // This regex looks for things that look like:
  // git+ssh://git@my.custom.git.com:username/project.git#deadbeef
  //
  // ...and various combinations. The username in the beginning is *required*.
  const matched = spec.match(/^git\+ssh:\/\/([^:#]+:[^#]+(?:\.git)?)(?:#(.*))?$/i)
  return matched && !matched[1].match(/:[0-9]+\/?.*$/i) && {
    fetchSpec: matched[1],
    gitCommittish: matched[2] == null ? null : matched[2]
  }
}

function fromURL (res) {
  if (!url) url = __webpack_require__(15)
  const urlparse = url.parse(res.rawSpec)
  res.saveSpec = res.rawSpec
  // check the protocol, and then see if it's git or not
  switch (urlparse.protocol) {
    case 'git:':
    case 'git+http:':
    case 'git+https:':
    case 'git+rsync:':
    case 'git+ftp:':
    case 'git+file:':
    case 'git+ssh:':
      res.type = 'git'
      const match = urlparse.protocol === 'git+ssh:' && matchGitScp(res.rawSpec)
      if (match) {
        setGitCommittish(res, match.gitCommittish)
        res.fetchSpec = match.fetchSpec
      } else {
        setGitCommittish(res, urlparse.hash != null ? urlparse.hash.slice(1) : '')
        urlparse.protocol = urlparse.protocol.replace(/^git[+]/, '')
        delete urlparse.hash
        res.fetchSpec = url.format(urlparse)
      }
      break
    case 'http:':
    case 'https:':
      res.type = 'remote'
      res.fetchSpec = res.saveSpec
      break

    default:
      throw unsupportedURLType(urlparse.protocol, res.rawSpec)
  }

  return res
}

function fromAlias (res, where) {
  const subSpec = npa(res.rawSpec.substr(4), where)
  if (subSpec.type === 'alias') {
    throw new Error('nested aliases not supported')
  }
  if (!subSpec.registry) {
    throw new Error('aliases only work for registry deps')
  }
  res.subSpec = subSpec
  res.registry = true
  res.type = 'alias'
  res.saveSpec = null
  res.fetchSpec = null
  return res
}

function fromRegistry (res) {
  res.registry = true
  const spec = res.rawSpec === '' ? 'latest' : res.rawSpec
  // no save spec for registry components as we save based on the fetched
  // version, not on the argument so this can't compute that.
  res.saveSpec = null
  res.fetchSpec = spec
  if (!semver) semver = __webpack_require__(16)
  const version = semver.valid(spec, true)
  const range = semver.validRange(spec, true)
  if (version) {
    res.type = 'version'
  } else if (range) {
    res.type = 'range'
  } else {
    if (encodeURIComponent(spec) !== spec) {
      throw invalidTagName(spec)
    }
    res.type = 'tag'
  }
  return res
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(12)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(4), __webpack_require__(0), __webpack_require__(17), __webpack_require__(21), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _toConsumableArray2, _objectSpread2, _lodash, _npmPackageArg, _path, _findImports, _transformMDX, _runBabel2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(1);

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
    "@mdx-js/mdx": "^1.0.0-alpha.13",
    "@mdx-js/react": "^1.0.0-alpha.16"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("hosted-git-info");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("osenv");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4), __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _npmPackageArg, acorn, _acornUmd) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(20);

  var _interopRequireDefault = __webpack_require__(1);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("acorn");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("acorn-umd");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _mdx) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(1);

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
                  remarkPlugins: [[// Removes front-matter from Markdown output
                  __webpack_require__(23), {
                    type: "yaml",
                    marker: "-",
                    fence: "---",
                    anywhere: true
                  }], __webpack_require__(24), __webpack_require__(25), __webpack_require__(26)],
                  hastPlugins: [__webpack_require__(27)],
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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/mdx");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("remark-frontmatter");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("remark-slug");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("remark-images");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("remark-emoji");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("rehype-highlight");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(29)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _standalone) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.runBabel = void 0;

  var react = __webpack_require__(30);

  var env = __webpack_require__(31);

  var assign = __webpack_require__(32);

  var properties = __webpack_require__(33);

  var spread = __webpack_require__(34);

  var destructuring = __webpack_require__(35);

  var runBabel = function runBabel(jsx) {
    var _transform = (0, _standalone.transform)(jsx, {
      presets: [[env, {
        modules: "umd"
      }], react],
      plugins: [[destructuring, {
        useBuiltIns: true
      }], assign, properties, spread]
    }),
        code = _transform.code;

    return Promise.resolve(code);
  };

  _exports.runBabel = runBabel;
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/preset-react");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/preset-env");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/plugin-transform-object-assign");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/plugin-proposal-class-properties");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/plugin-proposal-object-rest-spread");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@babel/plugin-transform-destructuring");

/***/ })
/******/ ]);
});
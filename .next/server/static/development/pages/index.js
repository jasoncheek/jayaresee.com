module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./node_modules/tachyons/css/tachyons.css":
/*!************************************************!*\
  !*** ./node_modules/tachyons/css/tachyons.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ "./node_modules/tachyons/css/tachyons.css");
/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jasoncheek/Dropbox/JRC/JASONCHEEK/jasoncheek.me/web_next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Head from 'next/head'
// import Nav from '../components/nav'

const Home = () => __jsx("div", {
  className: "sans-serif",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("p", {
  className: "Intro",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Welcome. My name is Jason Cheek. I design and build web applications in New Orleans, Louisiana. This is my website. It has work, photos, words, and music."), __jsx("h2", {
  className: "Heading f3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Recent Work"), __jsx("div", {
  className: "Project",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("h3", {
  className: "Project-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Events Management Application"), __jsx("ul", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Registration"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Check In"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Ordering"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Stats"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "API"))), __jsx("div", {
  className: "Image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("img", {
  src: "",
  alt: "",
  className: "",
  style: {
    display: "block",
    width: "100px",
    height: "100px",
    border: "1px solid"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Posted on Instagram"), __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "30 minutes ago")), __jsx("h4", {
  className: "Heading f3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Writing"), __jsx("article", {
  className: "Post",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("ul", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "CSS Grid for ya mamma and them"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "Inline styles is a habit"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Filters in SVG and beyond"))), __jsx("div", {
  className: "Tweet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("p", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "I\u2019m starting to think I could do this every day and get used to it."), __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Posted on Twitter"), __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "4 days ago")), __jsx("div", {
  className: "Activity",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("img", {
  src: "",
  alt: "",
  className: "",
  style: {
    display: "block",
    width: "100px",
    height: "100px",
    border: "1px solid"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}), __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "Listened to on Spotify"), __jsx("div", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "2 days ago")), __jsx("div", {
  className: "Links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("ul", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Linked In"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "GitHub"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "Facebook"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "CodePen"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Tumblr"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "Pinterest"), __jsx("li", {
  className: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, "SoundCloud"))));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jasoncheek/Dropbox/JRC/JASONCHEEK/jasoncheek.me/web_next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
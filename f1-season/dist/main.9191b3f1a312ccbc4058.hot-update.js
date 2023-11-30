"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatef1_season"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_chart_race__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chart-race */ \"./node_modules/react-chart-race/ChartRace.js\");\n/* harmony import */ var react_chart_race__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chart_race__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/players */ \"./src/data/players.js\");\n/* harmony import */ var _data_race_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/race_data */ \"./src/data/race_data.js\");\nvar _this = undefined;\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar App = function App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    data = _useState2[0],\n    setData = _useState2[1];\n  var getRandomInt = function getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  };\n  var handleChange = function handleChange() {\n    return setData([{\n      id: 0,\n      title: 'Steph',\n      value: _this.getRandomInt(10, 90),\n      color: '#50c4fe'\n    }, {\n      id: 1,\n      title: 'Tim',\n      value: 38,\n      color: '#3fc42d'\n    }, {\n      id: 2,\n      title: 'Heath',\n      value: _this.getRandomInt(10, 90),\n      color: '#c33178'\n    }, {\n      id: 3,\n      title: 'Justine',\n      value: _this.getRandomInt(10, 90),\n      color: '#423bce'\n    }, {\n      id: 4,\n      title: 'Mina',\n      value: 58,\n      color: '#c8303b'\n    }, {\n      id: 5,\n      title: 'Ashley',\n      value: 16,\n      color: '#2c2c2c'\n    }, {\n      id: 6,\n      title: 'Izzy',\n      value: 16,\n      color: '#2c2c2c'\n    }]);\n  };\n  handleChange();\n  setInterval(handleChange, 2000);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_chart_race__WEBPACK_IMPORTED_MODULE_2___default()), {\n    data: _this.state.data\n  });\n};\nvar domNode = document.getElementById('root');\nvar root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domNode);\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));\n\n//# sourceURL=webpack://f1_season/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("699b7598d4404dc46491")
/******/ })();
/******/ 
/******/ }
);
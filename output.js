/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\nbody {\\r\\n  /* background-image: url(\\\"./bg.jpg\\\"); */\\r\\n  background-position: center;\\r\\n  background-size: cover;\\r\\n}\\r\\n.navbar {\\r\\n  background-color: blue;\\r\\n  height: 70px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  text-align: center;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.inputBox {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n.user {\\r\\n  height: 400px;\\r\\n  width: 400px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  margin: 20px;\\r\\n  background-color: green;\\r\\n}\\r\\n.computer {\\r\\n  height: 400px;\\r\\n  width: 400px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  background-color: red;\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.square {\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n  box-sizing: border-box;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  font-size: 28px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 1px solid black;\\r\\n}\\r\\n.square:hover {\\r\\n  border: 2px solid white;\\r\\n}\\r\\n\\r\\n.shipsContainer {\\r\\n  height: 250px;\\r\\n  width: 250px;\\r\\n  background-color: aqua;\\r\\n  margin-left: 20px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.winner {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#whiteDot {\\r\\n  display: inline-block;\\r\\n  background-color: white;\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 100px;\\r\\n  height: 30px;\\r\\n  border-radius: 10px;\\r\\n  outline: none;\\r\\n  background-color: blue;\\r\\n  color: white;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

eval("function gameboard(grid) {\r\n  let gridArray = new Array(10);\r\n  for (let i = 0; i < 10; i++) {\r\n    gridArray[i] = new Array(10);\r\n  }\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      let mySquare = document.createElement(\"div\");\r\n      mySquare.id = `${grid.classList[0]}${i}${j}`;\r\n      mySquare.classList.add(\"square\");\r\n      mySquare.classList.add(`${grid.classList[0]}Box`);\r\n      grid.appendChild(mySquare);\r\n    }\r\n  }\r\n  return { gridArray };\r\n}\r\n\r\nmodule.exports = gameboard;\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\r\nconst createShip = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\n\r\n\r\nlet btn = document.getElementById(\"submitBtn\");\r\nbtn.onclick = startGame;\r\n\r\nlet resBtn = document.getElementById(\"restartBtn\");\r\nresBtn.addEventListener(\"click\", () => {\r\n  window.location.reload();\r\n});\r\n\r\nlet computerGrid = document.querySelector(\".computer\");\r\nlet computer = new gameboard(computerGrid);\r\n\r\nlet userGrid = document.querySelector(\".user\");\r\nlet users = new gameboard(userGrid);\r\n\r\nlet userShips = [\r\n  {\r\n    name: \"Carrier\",\r\n    length: 5,\r\n  },\r\n  {\r\n    name: \"Battleship\",\r\n    length: 4,\r\n  },\r\n  {\r\n    name: \"Cruiser\",\r\n    length: 3,\r\n  },\r\n  {\r\n    name: \"Submarine\",\r\n    length: 3,\r\n  },\r\n  {\r\n    name: \"Destroyer\",\r\n    length: 2,\r\n  },\r\n];\r\n\r\nfunction placeUserShips() {\r\n  document.querySelector(\".container\").style.display = \"flex\";\r\n  for (let i = 0; i < 5; i++) {\r\n    while (true) {\r\n      let inputID = prompt(`Enter cordinates for ${userShips[i].name}`);\r\n      userShips[i][\"info\"] = new createShip(\r\n        userShips[i].name,\r\n        userShips[i].length\r\n      );\r\n\r\n      if (inputID.length > 3) {\r\n        alert(\"Enter right coordinates\");\r\n        continue;\r\n      }\r\n\r\n      userShips[i].info.rotated = inputID.split(\"\")[0] == \"-\" ? true : false;\r\n      let x = Number(inputID.split(\"\")[0]);\r\n      let y = Number(inputID.split(\"\")[1]);\r\n      if (String(users.gridArray[x][y]).slice(0, 8) == \"userShip\") {\r\n        alert(\"Place is occupied by other Ship\");\r\n      }\r\n      if (userShips[i].info.rotated && y > 10 - userShips[i].length) {\r\n        alert(\"Ship can't placed outside board\");\r\n        continue;\r\n      }\r\n      if (!userShips[i].info.rotated && x > 10 - userShips[i].length) {\r\n        alert(\"Ship can't placed outside board\");\r\n        continue;\r\n      }\r\n      let flag = false;\r\n      for (let j = 0; j < userShips[i].length; j++) {\r\n        if (userShips[i].info.rotated) {\r\n          if (String(users.gridArray[x][y + j]).slice(0, 8) == \"userShip\") {\r\n            flag = true;\r\n            alert(\"Place is occupied by other Ship\");\r\n            while (j >= 0) {\r\n              users.gridArray[x][y + j] = undefined;\r\n              j--;\r\n            }\r\n            break;\r\n          }\r\n          users.gridArray[x][y + j] = `userShip${userShips[i].name}`;\r\n        } else {\r\n          if (\r\n            users.gridArray[x + j][y] &&\r\n            users.gridArray[x + j][y].slice(0, 8) == \"userShip\"\r\n          ) {\r\n            flag = true;\r\n            alert(\"Place is occupied by other Ship\");\r\n            while (j >= 0) {\r\n              users.gridArray[x + j][y] = undefined;\r\n              j--;\r\n            }\r\n            break;\r\n          }\r\n          users.gridArray[x + j][y] = `userShip${userShips[i].name}`;\r\n        }\r\n      }\r\n      if (flag) continue;\r\n      else {\r\n        break;\r\n      }\r\n    }\r\n  }\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      if (String(users.gridArray[i][j]).slice(0, 8) == \"userShip\") {\r\n        document.getElementById(`user${i}${j}`).style[\"background-color\"] =\r\n          \"black\";\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nlet computerShips = [\r\n  {\r\n    name: \"Carrier\",\r\n    length: 5,\r\n  },\r\n  {\r\n    name: \"Battleship\",\r\n    length: 4,\r\n  },\r\n  {\r\n    name: \"Cruiser\",\r\n    length: 3,\r\n  },\r\n  {\r\n    name: \"Submarine\",\r\n    length: 3,\r\n  },\r\n  {\r\n    name: \"Destroyer\",\r\n    length: 2,\r\n  },\r\n];\r\n\r\nfunction placeComputerShips(computerShips, computer) {\r\n  for (let i = 0; i < 5; i++) {\r\n    while (true) {\r\n      computerShips[i][\"info\"] = new createShip(\r\n        computerShips[i].name,\r\n        computerShips[i].length\r\n      );\r\n      let randomRotate = Math.floor(Math.random() * 2);\r\n      computerShips[i].info.rotated = Array([\"true\", \"false\"])[randomRotate];\r\n      let x = Math.floor(Math.random() * 10);\r\n      let y = Math.floor(Math.random() * 10);\r\n\r\n      if (String(computer.gridArray[x][y]).slice(0, 7) == \"oppShip\") {\r\n        continue;\r\n      }\r\n      if (computerShips[i].info.rotated && y > 10 - computerShips[i].length) {\r\n        continue;\r\n      }\r\n      if (!computerShips[i].info.rotated && x > 10 - computerShips[i].length) {\r\n        continue;\r\n      }\r\n      let flag = false;\r\n      for (let j = 0; j < computerShips[i].length; j++) {\r\n        if (computerShips[i].info.rotated) {\r\n          if (String(computer.gridArray[x][y + j]).slice(0, 7) == \"oppShip\") {\r\n            flag = true;\r\n            while (j >= 0) {\r\n              computer.gridArray[x][y + j] = undefined;\r\n              j--;\r\n            }\r\n            break;\r\n          }\r\n          computer.gridArray[x][y + j] = `oppShip${computerShips[i].name}`;\r\n        } else {\r\n          if (String(computer.gridArray[x + j][y]).slice(0, 7) == \"oppShip\") {\r\n            flag = true;\r\n            while (j >= 0) {\r\n              computer.gridArray[x + j][y] = undefined;\r\n              j--;\r\n            }\r\n            break;\r\n          }\r\n          computer.gridArray[x + j][y] = `oppShip${computerShips[i].name}`;\r\n        }\r\n      }\r\n      if (flag) continue;\r\n      else {\r\n        break;\r\n      }\r\n    }\r\n  }\r\n  // for (let i = 0; i < 10; i++) {\r\n  //   for (let j = 0; j < 10; j++) {\r\n  //     if (String(computer.gridArray[i][j]).slice(0, 7) == \"oppShip\") {\r\n  //       document.getElementById(`computer${i}${j}`).style[\"background-color\"] =\r\n  //         \"black\";\r\n  //     }\r\n  //   }\r\n  // }\r\n}\r\n\r\nfunction startGame() {\r\n  placeUserShips();\r\n  placeComputerShips(computerShips, computer);\r\n  playGame();\r\n}\r\n\r\nlet computerScore = 0;\r\nlet userScore = 0;\r\n\r\nlet player = \"user\";\r\n\r\nfunction playGame() {\r\n  if (isGameOver()) {\r\n    return;\r\n  }\r\n  if (player === \"user\") {\r\n    let divs = document.querySelectorAll(\".computerBox\");\r\n    divs.forEach(function (div) {\r\n      div.addEventListener(\r\n        \"click\",\r\n        (e) => {\r\n          userChance(div);\r\n        },\r\n        {\r\n          once: true,\r\n        }\r\n      );\r\n    });\r\n  } else if (player === \"computer\") {\r\n    setTimeout(computerChance, 1000);\r\n  }\r\n}\r\n\r\nfunction userChance(div) {\r\n  document.getElementById(\"infoLine\").textContent = \"Computer's turn\";\r\n  try {\r\n    let shipName =\r\n      computer.gridArray[Number(div.id.slice(-2, -1))][\r\n        Number(div.id.slice(-1))\r\n      ].slice(7);\r\n    if (shipName == \"Carrier\") {\r\n      computerShips[0].info.hits++;\r\n      userScore++;\r\n      if (computerShips[0].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `User defeats computer's Carrier`;\r\n      }\r\n    }\r\n    if (shipName == \"Battleship\") {\r\n      userScore++;\r\n      computerShips[1].info.hits++;\r\n      if (computerShips[1].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `User defeats computer's Battleship`;\r\n      }\r\n    }\r\n    if (shipName == \"Cruiser\") {\r\n      computerShips[2].info.hits++;\r\n      userScore++;\r\n      if (computerShips[2].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `User defeats computer's Cruiser`;\r\n      }\r\n    }\r\n    if (shipName == \"Submarine\") {\r\n      computerShips[3].info.hits++;\r\n      userScore++;\r\n      if (computerShips[3].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `User defeats computer's Submarine`;\r\n      }\r\n    }\r\n    if (shipName == \"Destroyer\") {\r\n      computerShips[4].info.hits++;\r\n      userScore++;\r\n      if (computerShips[4].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `User defeats computer's Destroyer`;\r\n      }\r\n    }\r\n    div.innerHTML = \"X\";\r\n  } catch (err) {\r\n    let span = document.createElement(\"span\");\r\n    span.id = \"whiteDot\";\r\n    div.appendChild(span);\r\n  }\r\n  player = \"computer\";\r\n  playGame();\r\n}\r\n\r\nlet computerCordArray = [\r\n  \"00\",\r\n  \"01\",\r\n  \"02\",\r\n  \"03\",\r\n  \"04\",\r\n  \"05\",\r\n  \"06\",\r\n  \"07\",\r\n  \"08\",\r\n  \"09\",\r\n  \"10\",\r\n  \"11\",\r\n  \"12\",\r\n  \"13\",\r\n  \"14\",\r\n  \"15\",\r\n  \"16\",\r\n  \"17\",\r\n  \"18\",\r\n  \"19\",\r\n  \"20\",\r\n  \"21\",\r\n  \"22\",\r\n  \"23\",\r\n  \"24\",\r\n  \"25\",\r\n  \"26\",\r\n  \"27\",\r\n  \"28\",\r\n  \"29\",\r\n  \"30\",\r\n  \"31\",\r\n  \"32\",\r\n  \"33\",\r\n  \"34\",\r\n  \"35\",\r\n  \"36\",\r\n  \"37\",\r\n  \"38\",\r\n  \"39\",\r\n  \"40\",\r\n  \"41\",\r\n  \"42\",\r\n  \"43\",\r\n  \"44\",\r\n  \"45\",\r\n  \"46\",\r\n  \"47\",\r\n  \"48\",\r\n  \"49\",\r\n  \"50\",\r\n  \"51\",\r\n  \"52\",\r\n  \"53\",\r\n  \"54\",\r\n  \"55\",\r\n  \"56\",\r\n  \"57\",\r\n  \"58\",\r\n  \"59\",\r\n  \"60\",\r\n  \"61\",\r\n  \"62\",\r\n  \"63\",\r\n  \"64\",\r\n  \"65\",\r\n  \"66\",\r\n  \"67\",\r\n  \"68\",\r\n  \"69\",\r\n  \"70\",\r\n  \"71\",\r\n  \"72\",\r\n  \"73\",\r\n  \"74\",\r\n  \"75\",\r\n  \"76\",\r\n  \"77\",\r\n  \"78\",\r\n  \"79\",\r\n  \"80\",\r\n  \"81\",\r\n  \"82\",\r\n  \"83\",\r\n  \"84\",\r\n  \"85\",\r\n  \"86\",\r\n  \"87\",\r\n  \"88\",\r\n  \"89\",\r\n  \"90\",\r\n  \"91\",\r\n  \"92\",\r\n  \"93\",\r\n  \"94\",\r\n  \"95\",\r\n  \"96\",\r\n  \"97\",\r\n  \"98\",\r\n  \"99\",\r\n];\r\nfunction computerChance() {\r\n  document.getElementById(\"infoLine\").textContent = \"Your turn\";\r\n  let cord =\r\n    computerCordArray[Math.floor(Math.random() * computerCordArray.length)];\r\n  let div = document.getElementById(`user${cord}`);\r\n  computerCordArray.splice(computerCordArray.indexOf(cord), 1);\r\n  let x = Number(cord.split(\"\")[0]);\r\n  let y = Number(cord.split(\"\")[1]);\r\n  try {\r\n    let shipName = users.gridArray[x][y].slice(8);\r\n    console.log(shipName);\r\n    if (shipName == \"Carrier\") {\r\n      userShips[0].info.hits++;\r\n      computerScore++;\r\n      div.innerHTML = \"X\";\r\n      if (userShips[0].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `Computer Defeats your Carrier`;\r\n      }\r\n    } else if (shipName == \"Battleship\") {\r\n      userShips[1].info.hits++;\r\n      div.innerHTML = \"X\";\r\n      computerScore++;\r\n      if (userShips[1].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `Computer Defeats your Battleship`;\r\n      }\r\n    } else if (shipName == \"Cruiser\") {\r\n      userShips[2].info.hits++;\r\n      div.innerHTML = \"X\";\r\n      computerScore++;\r\n      if (userShips[2].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `Computer Defeats your Cruiser`;\r\n      }\r\n    } else if (shipName == \"Submarine\") {\r\n      userShips[3].info.hits++;\r\n      div.innerHTML = \"X\";\r\n      computerScore++;\r\n      if (userShips[3].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `Computer Defeats your Submarine`;\r\n      }\r\n    } else if (shipName == \"Destroyer\") {\r\n      userShips[4].info.hits++;\r\n      div.innerHTML = \"X\";\r\n      computerScore++;\r\n      if (userShips[4].info.isSunk()) {\r\n        document.getElementById(\r\n          \"winnerLine\"\r\n        ).textContent = `Computer Defeats your Destroyer`;\r\n      }\r\n    }\r\n  } catch (err) {\r\n    let span = document.createElement(\"span\");\r\n    span.id = \"whiteDot\";\r\n    div.appendChild(span);\r\n\r\n    player = \"user\";\r\n  }\r\n}\r\n\r\nfunction isGameOver() {\r\n  if (userScore >= 17) {\r\n    document.getElementById(\"infoLine\").textContent = \"You Won!!!!\";\r\n    return true;\r\n  } else if (computerScore >= 17) {\r\n    document.getElementById(\"infoLine\").textContent =\r\n      \"You Lose :( Better Luck Next Time....!\";\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function createShip(nam, len) {\r\n  let hits = [];\r\n  return {\r\n    name: nam,\r\n    length: len,\r\n    hits: 0,\r\n    isSunk() {\r\n      return this.hits == this.length;\r\n    },\r\n    rotated: true,\r\n  };\r\n}\r\n\r\nmodule.exports = createShip;\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
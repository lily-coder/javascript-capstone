/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0; }\\n\\na {\\n  text-decoration: none; }\\n\\n:root {\\n  --primary-color: #e85a4f;\\n  --secondary-color: #272727;\\n  --background-color: #fdf7f6; }\\n\\nul {\\n  list-style-type: none;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between; }\\n\\n.dflex {\\n  display: flex; }\\n\\nbody {\\n  color: var(--secondary-color);\\n  background-color: var(--background-color);\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif; }\\n\\n.container {\\n  padding: 2em 20em; }\\n\\n.header {\\n  background-color: #fff;\\n  box-shadow: rgba(100, 100, 111, 0.2) 0 2px 20px 0; }\\n\\n.logo {\\n  font-family: 'Space Grotesk', sans-serif;\\n  display: flex;\\n  align-items: center;\\n  font-size: 2em;\\n  font-weight: 700; }\\n\\n.logo i {\\n  margin-right: 0.3em;\\n  color: var(--primary-color); }\\n\\n.nav-bar {\\n  display: flex;\\n  justify-content: space-between;\\n  margin: 0 auto;\\n  align-items: center; }\\n\\n.nav-buttons {\\n  display: flex;\\n  list-style-type: none;\\n  cursor: pointer; }\\n\\n.nav-buttons a {\\n  font-weight: 500;\\n  color: #101820ff;\\n  text-decoration: none;\\n  padding: 1em; }\\n\\n.nav-buttons a:hover {\\n  text-decoration: underline; }\\n\\nfooter {\\n  width: 100%;\\n  justify-content: center;\\n  margin: auto;\\n  margin-top: 10px;\\n  flex-shrink: 0;\\n  background-color: white;\\n  bottom: 0;\\n  text-align: center; }\\n\\n.footer-link {\\n  color: var(--primary-color); }\\n\\n.footer-link:hover {\\n  text-decoration: underline; }\\n\\n.meal-item {\\n  border-radius: 0.5em;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  width: 20%;\\n  padding: 24px;\\n  margin: 1em 0;\\n  box-shadow: rgba(100, 100, 111, 0.2) 0 2px 20px 0; }\\n\\n.meal-image {\\n  width: 100%;\\n  margin-bottom: 1em;\\n  border-radius: 0.5em; }\\n\\n.meal-meta {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 1em; }\\n\\n.icn-btn {\\n  background: transparent;\\n  border: none;\\n  color: var(--secondary-color);\\n  padding: 12px 16px;\\n  font-size: 1em;\\n  cursor: pointer; }\\n\\n.btn {\\n  padding: 1em;\\n  border-radius: 0.5em;\\n  border: none;\\n  background: var(--primary-color);\\n  color: var(--background-color); }\\n\\n.btn-alt {\\n  margin-top: 1em;\\n  color: var(--background-color);\\n  background: var(--secondary-color); }\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100%;\\n  background: rgba(232, 90, 79, 0.4);\\n  backdrop-filter: blur(4px);\\n  overflow: scroll; }\\n\\n.close-modal,\\n.close-btn {\\n  font-size: 2em;\\n  font-weight: bold;\\n  padding: 0 !important; }\\n\\n.close-modal:hover {\\n  color: var(--primary-color); }\\n\\n.modal-inner {\\n  width: 70%;\\n  margin: 100px auto;\\n  background-color: white;\\n  padding: 3em;\\n  border-radius: 1em;\\n  box-shadow: rgba(100, 100, 111, 0.5) 0 10px 20px 0; }\\n\\n.modal-header {\\n  display: flex;\\n  justify-content: flex-end; }\\n\\n.modal-details {\\n  display: flex;\\n  gap: 2em; }\\n\\n.modal-img {\\n  width: 100%;\\n  height: min-content; }\\n\\n.modal-title {\\n  font-family: 'Space Grotesk', sans-serif;\\n  font-size: 3em; }\\n\\n.cursor {\\n  cursor: pointer; }\\n\\n.reserve-container {\\n  width: 70%;\\n  margin: 100px auto;\\n  background-color: white;\\n  padding: 3rem;\\n  border-radius: 1em;\\n  box-shadow: rgba(100, 100, 111, 0.5) 0 10px 20px 0;\\n  display: flex;\\n  flex-direction: column; }\\n\\n.reserve-content {\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.close-section {\\n  display: flex;\\n  justify-content: flex-end; }\\n\\n.close-btn {\\n  left: 90%;\\n  top: 2rem;\\n  font-size: 5em;\\n  margin-right: 2rem; }\\n\\n.reserve-img {\\n  width: 100%;\\n  height: min-content; }\\n\\n.reserve-title {\\n  font-family: 'Space Grotesk', sans-serif;\\n  font-size: 2em;\\n  align-items: center;\\n  margin: 1rem; }\\n\\n.meal-info {\\n  display: flex;\\n  padding-right: 10rem;\\n  padding-left: 10rem;\\n  flex-wrap: wrap;\\n  margin: 1rem; }\\n\\n.reserve-details {\\n  width: 50%; }\\n\\n.category,\\n.area,\\n.recipe,\\n.video-instruction {\\n  color: #e85a4f; }\\n\\na {\\n  text-decoration: none;\\n  color: black; }\\n\\n.reservation-form-title {\\n  text-align: center; }\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\ninput {\\n  width: 20rem;\\n  height: 50px;\\n  margin: 0.5rem;\\n  font-family: 'Space Grotesk', sans-serif; }\\n\\n.reserve-submit-button {\\n  width: 10rem;\\n  height: 50px;\\n  margin: 0.5rem;\\n  font-family: 'Space Grotesk', sans-serif;\\n  font-size: 1em; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n\n\n\n\n\nconst endpoint = 'https://www.themealdb.com/api/json/v1/1/';\n\nconst displayMeals = () => {\n  _modules_data__WEBPACK_IMPORTED_MODULE_1__.default.getMeals(`${endpoint}search.php?f=b`).then((mealsData) => {\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.default)(mealsData);\n  });\n};\n\nwindow.addEventListener('load', displayMeals);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API = {\n  getMeals: async (endpoint) => {\n    const res = await fetch(`${endpoint}`, { method: 'GET' });\n    if (!res.ok) {\n      throw new Error(`API error! status: ${res.status}`);\n    } else {\n      const data = await res.json();\n      return data;\n    }\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ul = document.getElementById('meal-list');\nconst commentModal = document.getElementById('modal-comment');\nconst reserveModal = document.getElementById('reservation-modal');\n\nconst renderModal = (meal) => {\n  const modalInner = document.createElement('div');\n  modalInner.className = 'modal-inner';\n  const modalHeader = document.createElement('div');\n  modalHeader.className = 'modal-header';\n  modalInner.appendChild(modalHeader);\n  const closeBtn = document.createElement('button');\n  closeBtn.className = 'close-modal icn-btn';\n  closeBtn.innerHTML = '&times;';\n  closeBtn.addEventListener('click', () => {\n    commentModal.style.display = 'none';\n  });\n  modalHeader.appendChild(closeBtn);\n  const modalDetails = document.createElement('div');\n  modalDetails.className = 'modal-details';\n  modalInner.appendChild(modalDetails);\n  const modalImg = document.createElement('img');\n  modalImg.className = 'modal-img';\n  modalImg.src = meal.strMealThumb;\n  modalDetails.appendChild(modalImg);\n  const modalMeta = document.createElement('div');\n  modalMeta.className = 'modal-meta';\n  modalDetails.appendChild(modalMeta);\n  const modalTitle = document.createElement('h4');\n  modalTitle.className = 'modal-title';\n  modalTitle.innerText = meal.strMeal;\n  modalMeta.appendChild(modalTitle);\n  const modalDesc = document.createElement('p');\n  modalDesc.className = 'modal-desc';\n  modalDesc.innerText = meal.strInstructions;\n  modalMeta.appendChild(modalDesc);\n  commentModal.appendChild(modalInner);\n};\n\nconst renderReserveModal = (meal) => {\n  reserveModal.innerHTML = `\n  <div class='reserve-container'>\n    <div class='close-section'>\n      <button class='close-btn icn-btn'>&times;</button>\n    </div>\n    <div class='reserve-content'>\n      <img src='${meal.strMealThumb}' alt='' class='reserve-img'>\n      <h2 class='reserve-title'>${meal.strMeal}</h2>\n      <ul class='meal-info'>\n        <li class='reserve-details'><span class='category'>Category:</span> ${meal.strCategory}</li>\n        <li class='reserve-details'><span class='area'>Area:</span> ${meal.strArea}</li>\n        <li class='reserve-details'><span class='recipe'>Recipe:</span> <a href='${meal.strSource}' target='blank'>Recipe Link</a></li>\n        <li class='reserve-details'><span class='video-instruction'>Video Instruction:</span> <a href='${meal.strYoutube}' target='blank'>YouTube Link</a></li>\n      </ul>\n      <div>\n        <h2 class='section-title'>Reservations</h2>\n      </div>\n      <div class='reservation-form'>\n        <h2 class='reservation-form-title'>Add a reservation</h2>\n        <form class='form'>\n          <input type='text' name='username' placeholder='Your name' required />\n          <input type='date' name='start-date' placeholder='Start Date' required />\n          <input type='date' name='end-date' placeholder='End Date' required />\n          <button type='submit' class='reserve-submit-button'>Reserve</button>\n        </form>\n      </div>\n    </div>\n  </div>`;\n  const closeButton = document.querySelector('.close-btn');\n  const reserveContainer = document.querySelector('.reserve-container');\n  closeButton.addEventListener('click', () => {\n    reserveModal.style.display = 'none';\n  });\n  reserveModal.appendChild(reserveContainer);\n};\n\nconst renderMeals = (mealsData) => {\n  const { meals } = mealsData;\n  meals.forEach((mealItem) => {\n    const li = document.createElement('li');\n    li.className = 'meal-item';\n    const img = document.createElement('img');\n    img.src = mealItem.strMealThumb;\n    img.className = 'meal-image';\n    li.appendChild(img);\n    const div = document.createElement('div');\n    div.className = 'meal-meta';\n    li.appendChild(div);\n    const p = document.createElement('p');\n    p.className = 'meal-title';\n    p.innerText = mealItem.strMeal;\n    div.appendChild(p);\n    const likeBtn = document.createElement('button');\n    likeBtn.className = 'icn-btn';\n    div.appendChild(likeBtn);\n    const likeIcon = document.createElement('i');\n    likeIcon.className = 'far fa-heart';\n    likeBtn.appendChild(likeIcon);\n    const commentBtn = document.createElement('button');\n    commentBtn.className = 'btn';\n    commentBtn.innerText = 'Comment';\n    commentBtn.addEventListener('click', () => {\n      if (commentModal.hasChildNodes()) {\n        commentModal.innerHTML = '';\n      } else {\n        renderModal(mealItem);\n        commentModal.style.display = 'block';\n      }\n    });\n    li.appendChild(commentBtn);\n    const reserveBtn = document.createElement('button');\n    reserveBtn.className = 'btn btn-alt cursor';\n    reserveBtn.innerText = 'Reserve';\n    reserveBtn.addEventListener('click', () => {\n      if (reserveModal.hasChildNodes()) {\n        reserveModal.innerHTML = '';\n      } else {\n        renderReserveModal(mealItem);\n        reserveModal.style.display = 'block';\n      }\n    });\n    li.appendChild(reserveBtn);\n    ul.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMeals);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/render.js?");

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
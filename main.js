/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage () {    \n    let title = document.createElement(\"h1\");\n    title.textContent = \"The Restaurant\"\n    \n    let paragraph = document.createElement(\"p\")\n    paragraph.textContent = \"Here's our contact info\"\n\n    let content = document.getElementById(\"content\");\n    content.innerHTML = \"\"\n    content.appendChild(title)\n    content.appendChild(paragraph)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3RQYWdlLmpzP2NlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlICgpIHsgICAgXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgUmVzdGF1cmFudFwiXG4gICAgXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJIZXJlJ3Mgb3VyIGNvbnRhY3QgaW5mb1wiXG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contactPage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./src/mainPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\nconst mainButton = document.getElementById(\"mainButton\")\nconst menuButton = document.getElementById(\"menuButton\")\nconst contactButton = document.getElementById(\"contactButton\")\n\nlet currButton = \"main\";\n\nfunction refreshButtons () {\n    mainButton.disabled = false;\n    menuButton.disabled = false;\n    contactButton.disabled = false;\n    switch (currButton) {\n        case \"main\":\n            mainButton.disabled = true;\n            break;\n        case \"menu\":\n            menuButton.disabled = true;\n            break;\n        case \"contact\":\n            contactButton.disabled = true;\n            break;\n    }\n}\n\nmainButton.addEventListener('click', () => {\n    currButton = \"main\"\n    refreshButtons();\n    (0,_mainPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\nmenuButton.addEventListener('click', () => {\n    currButton = \"menu\"\n    refreshButtons();\n    (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\ncontactButton.addEventListener('click', () => {\n    currButton = \"contact\"\n    refreshButtons();\n    (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n;(0,_mainPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nmainButton.disabled = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNDO0FBQ007O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFlO0FBQ25CLENBQUM7O0FBRUQsc0RBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkTWFpblBhZ2UgZnJvbSBcIi4vbWFpblBhZ2VcIlxuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuXG5jb25zdCBtYWluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQnV0dG9uXCIpXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51QnV0dG9uXCIpXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0QnV0dG9uXCIpXG5cbmxldCBjdXJyQnV0dG9uID0gXCJtYWluXCI7XG5cbmZ1bmN0aW9uIHJlZnJlc2hCdXR0b25zICgpIHtcbiAgICBtYWluQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgbWVudUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGNvbnRhY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKGN1cnJCdXR0b24pIHtcbiAgICAgICAgY2FzZSBcIm1haW5cIjpcbiAgICAgICAgICAgIG1haW5CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICBtZW51QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgY29udGFjdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbm1haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3VyckJ1dHRvbiA9IFwibWFpblwiXG4gICAgcmVmcmVzaEJ1dHRvbnMoKTtcbiAgICBsb2FkTWFpblBhZ2UoKTtcbn0pXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGN1cnJCdXR0b24gPSBcIm1lbnVcIlxuICAgIHJlZnJlc2hCdXR0b25zKCk7XG4gICAgbG9hZE1lbnVQYWdlKCk7XG59KVxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjdXJyQnV0dG9uID0gXCJjb250YWN0XCJcbiAgICByZWZyZXNoQnV0dG9ucygpO1xuICAgIGxvYWRDb250YWN0UGFnZSgpO1xufSlcblxubG9hZE1haW5QYWdlKCk7XG5tYWluQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMainPage)\n/* harmony export */ });\n/* harmony import */ var _images_sample_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sample.png */ \"./src/images/sample.png\");\n\n\nfunction loadMainPage () {    \n\n\n    let title = document.createElement(\"h1\");\n    title.textContent = \"The Restaurant\"\n\n    let image = document.createElement(\"img\");\n    image.src = _images_sample_png__WEBPACK_IMPORTED_MODULE_0__\n    \n    let paragraph = document.createElement(\"p\")\n    paragraph.textContent = \"What a great place\"\n\n    let content = document.getElementById(\"content\");\n    content.innerHTML = \"\"\n    content.appendChild(title)\n    content.appendChild(image)\n    content.appendChild(paragraph)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpblBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7O0FBRTlCOzs7QUFHZjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLCtDQUFXO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpblBhZ2UuanM/OTg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FtcGxlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3NhbXBsZS5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWFpblBhZ2UgKCkgeyAgICBcblxuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgUmVzdGF1cmFudFwiXG5cbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IHNhbXBsZUltYWdlXG4gICAgXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJXaGF0IGEgZ3JlYXQgcGxhY2VcIlxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mainPage.js\n");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage () {    \n    let title = document.createElement(\"h1\");\n    title.textContent = \"The Restaurant\"\n    \n    let paragraph = document.createElement(\"p\")\n    paragraph.textContent = \"Here's the menu\"\n\n    let content = document.getElementById(\"content\");\n    content.innerHTML = \"\"\n    content.appendChild(title)\n    content.appendChild(paragraph)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVQYWdlLmpzPzM2MjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlICgpIHsgICAgXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgUmVzdGF1cmFudFwiXG4gICAgXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJIZXJlJ3MgdGhlIG1lbnVcIlxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaClcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menuPage.js\n");

/***/ }),

/***/ "./src/images/sample.png":
/*!*******************************!*\
  !*** ./src/images/sample.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e376b0b1a66af83beb4b.png";

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
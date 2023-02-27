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

/***/ "./src/apiHandler.js":
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ \"./src/domHandler.js\");\n\r\n\r\nasync function getWeatherData() {\r\n  try {\r\n    const response = await fetch(\r\n      \"https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=36.250947&lon=-115.1700&appid=58445913d230f47d9c9cdbb2f0ccb615\"\r\n    );\r\n    console.log(response);\r\n    const data = await response.json();\r\n    console.log(data);\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.temperature.textContent = `${Math.round(data.main.temp)}°F`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°F`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.wind.textContent = `Wind: ${data.wind.speed} MPH`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.humidity.textContent = `Humidity: ${data.main.humidity}%`;\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);\r\n\n\n//# sourceURL=webpack://weather-app/./src/apiHandler.js?");

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"feelsLike\": () => (/* binding */ feelsLike),\n/* harmony export */   \"humidity\": () => (/* binding */ humidity),\n/* harmony export */   \"location\": () => (/* binding */ location),\n/* harmony export */   \"temperature\": () => (/* binding */ temperature),\n/* harmony export */   \"wind\": () => (/* binding */ wind)\n/* harmony export */ });\nconst location = document.querySelector(\"#location\");\r\nconst temperature = document.querySelector(\"#temperature\");\r\nconst feelsLike = document.querySelector(\"#feels-like\");\r\nconst wind = document.querySelector(\"#wind\");\r\nconst humidity = document.querySelector(\"#humidity\");\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/domHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler */ \"./src/apiHandler.js\");\n\r\n\r\n(0,_apiHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
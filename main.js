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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"handleUserInput\": () => (/* binding */ handleUserInput)\n/* harmony export */ });\n/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ \"./src/domHandler.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nasync function getWeatherData(apiLink) {\r\n  try {\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.error.textContent = \" \";\r\n    const response = await fetch(apiLink);\r\n    const data = await response.json();\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.location.textContent = `${data.name}, ${data.sys.country}`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.temperature.textContent = `${Math.round(data.main.temp)}°F`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°F`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.wind.textContent = `Wind: ${data.wind.speed} MPH`;\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.humidity.textContent = `Humidity: ${data.main.humidity}%`;\r\n  } catch (err) {\r\n    _domHandler__WEBPACK_IMPORTED_MODULE_0__.error.textContent = \"Unable to locate city\";\r\n    console.log(err);\r\n  }\r\n}\r\n\r\nfunction updateAPI(modifiedInput) {\r\n  const apiLink = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${modifiedInput}&APPID=58445913d230f47d9c9cdbb2f0ccb615`;\r\n  getWeatherData(apiLink);\r\n}\r\nfunction handleUserInput(userInput) {\r\n  const input = userInput;\r\n  const modifiedInput = input.replace(/ /g, \"%20\");\r\n  updateAPI(modifiedInput);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/apiHandler.js?");

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"error\": () => (/* binding */ error),\n/* harmony export */   \"feelsLike\": () => (/* binding */ feelsLike),\n/* harmony export */   \"getUserInput\": () => (/* binding */ getUserInput),\n/* harmony export */   \"humidity\": () => (/* binding */ humidity),\n/* harmony export */   \"location\": () => (/* binding */ location),\n/* harmony export */   \"temperature\": () => (/* binding */ temperature),\n/* harmony export */   \"wind\": () => (/* binding */ wind)\n/* harmony export */ });\n/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler */ \"./src/apiHandler.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst location = document.querySelector(\"#location\");\r\nconst temperature = document.querySelector(\"#temperature\");\r\nconst feelsLike = document.querySelector(\"#feels-like\");\r\nconst wind = document.querySelector(\"#wind\");\r\nconst humidity = document.querySelector(\"#humidity\");\r\nconst form = document.querySelector(\".form\");\r\nconst searchBar = document.querySelector(\"#search\");\r\nconst error = document.querySelector(\".error\");\r\n\r\nfunction getUserInput(event) {\r\n  event.preventDefault();\r\n  const userInput = searchBar.value;\r\n  (0,_apiHandler__WEBPACK_IMPORTED_MODULE_0__.handleUserInput)(userInput);\r\n  searchBar.value = \"\";\r\n}\r\n\r\nform.addEventListener(\"submit\", getUserInput);\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/domHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler */ \"./src/apiHandler.js\");\n\r\n\r\n(0,_apiHandler__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(\r\n  \"https://api.openweathermap.org/data/2.5/weather?units=imperial&q=las%20vegas&APPID=58445913d230f47d9c9cdbb2f0ccb615\"\r\n);\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
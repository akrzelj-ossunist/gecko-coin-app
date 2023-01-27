"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "(api)/./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": () => (/* binding */ users)\n/* harmony export */ });\nconst users = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWNrby1jb2luLWFwcC8uL2RhdGEudHM/NzJmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXNlcnMgPSBbXSJdLCJuYW1lcyI6WyJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./data.ts\n");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ \"(api)/./data.ts\");\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const newUser = {\n            username: req.body.username,\n            password: req.body.password\n        };\n        _data__WEBPACK_IMPORTED_MODULE_0__.users.push(newUser);\n        res.status(201).json(newUser);\n    } else if (req.method === \"GET\") res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__.users);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDa0M7QUFNbkIsU0FBU0MsUUFDdEJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNFLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFPO1FBQ3JCLE1BQU1DLFVBQVU7WUFDWkMsVUFBVUosSUFBSUssSUFBSSxDQUFDRCxRQUFRO1lBQzNCRSxVQUFVTixJQUFJSyxJQUFJLENBQUNDLFFBQVE7UUFDL0I7UUFDQVIsNkNBQVUsQ0FBQ0s7UUFDWEYsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047SUFDekIsT0FBTSxJQUFHSCxJQUFJRSxNQUFNLEtBQUssT0FDbkJELElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLHdDQUFLQTtBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2Vja28tY29pbi1hcHAvLi9wYWdlcy9hcGkvbG9naW4udHM/YzEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlcnMgfSBmcm9tIFwiLi4vLi4vZGF0YVwiXG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgICBpZihyZXEubWV0aG9kID09PSBcIlBPU1RcIil7XG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogcmVxLmJvZHkudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICB1c2Vycy5wdXNoKG5ld1VzZXIpXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1VzZXIpXG4gICAgfWVsc2UgaWYocmVxLm1ldGhvZCA9PT0gXCJHRVRcIilcbiAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJzKVxufVxuIl0sIm5hbWVzIjpbInVzZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsInB1c2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();
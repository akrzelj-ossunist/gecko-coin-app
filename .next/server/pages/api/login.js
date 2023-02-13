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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": () => (/* binding */ users)\n/* harmony export */ });\nconst users = [\n    {\n        username: \"Mate\",\n        password: \"adssad\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRO0lBQUU7UUFBRUMsVUFBVTtRQUFRQyxVQUFVO0lBQVE7Q0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlY2tvLWNvaW4tYXBwLy4vZGF0YS50cz83MmYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1c2VycyA9IFsgeyB1c2VybmFtZTogXCJNYXRlXCIsIHBhc3N3b3JkOiBcImFkc3NhZFwifSBdIl0sIm5hbWVzIjpbInVzZXJzIiwidXNlcm5hbWUiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./data.ts\n");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ \"(api)/./data.ts\");\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const newUser = {\n            username: req.body.username,\n            password: req.body.password\n        };\n        _data__WEBPACK_IMPORTED_MODULE_0__.users.push(newUser);\n        res.status(201).json(newUser);\n    } else if (req.method === \"GET\") res.status(200).json(_data__WEBPACK_IMPORTED_MODULE_0__.users);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDa0M7QUFNbkIsU0FBU0MsUUFDdEJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNFLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFPO1FBQ3JCLE1BQU1DLFVBQVU7WUFDWkMsVUFBVUosSUFBSUssSUFBSSxDQUFDRCxRQUFRO1lBQzNCRSxVQUFVTixJQUFJSyxJQUFJLENBQUNDLFFBQVE7UUFDL0I7UUFDQVIsNkNBQVUsQ0FBQ0s7UUFDWEYsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047SUFDekIsT0FBTSxJQUFHSCxJQUFJRSxNQUFNLEtBQUssT0FDbkJELElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLHdDQUFLQTtBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2Vja28tY29pbi1hcHAvLi9wYWdlcy9hcGkvbG9naW4udHM/YzEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyB1c2VycyB9IGZyb20gXCIuLi8uLi9kYXRhXCJcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBuYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpe1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiByZXEuYm9keS51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcilcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdVc2VyKVxyXG4gICAgfWVsc2UgaWYocmVxLm1ldGhvZCA9PT0gXCJHRVRcIilcclxuICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcnMpXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsInB1c2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

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
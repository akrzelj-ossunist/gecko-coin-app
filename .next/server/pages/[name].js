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
exports.id = "pages/[name]";
exports.ids = ["pages/[name]"];
exports.modules = {

/***/ "./pages/[name].tsx":
/*!**************************!*\
  !*** ./pages/[name].tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_getCoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getCoin */ \"./services/getCoin.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_getCoin__WEBPACK_IMPORTED_MODULE_2__]);\n_services_getCoin__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst CoinId = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { name  } = router.query;\n    const { data: coin , isLoading  } = (0,_services_getCoin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(name || \"\");\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/[name].tsx\",\n        lineNumber: 9,\n        columnNumber: 25\n    }, undefined);\n    console.log(coin);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinId);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbmFtZV0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDVTtBQUVsRCxNQUFNRSxTQUFtQixJQUFNO0lBQzdCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLEtBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTdCLE1BQU0sRUFBRUMsTUFBTUMsS0FBSSxFQUFFQyxVQUFTLEVBQUUsR0FBR1AsNkRBQWVBLENBQUNHLFFBQVE7SUFDMUQsSUFBSUksV0FBVyxxQkFBTyw4REFBQ0M7a0JBQUU7Ozs7OztJQUN6QkMsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLHFCQUFPO0FBQ1Q7QUFFQSxpRUFBZUwsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlY2tvLWNvaW4tYXBwLy4vcGFnZXMvW25hbWVdLnRzeD83MmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZUdldENvaW5RdWVyeSBmcm9tIFwiLi4vc2VydmljZXMvZ2V0Q29pblwiO1xuXG5jb25zdCBDb2luSWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhOiBjb2luLCBpc0xvYWRpbmcgfSA9IHVzZUdldENvaW5RdWVyeShuYW1lIHx8IFwiXCIpO1xuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGNvbnNvbGUubG9nKGNvaW4pO1xuXG4gIHJldHVybiA8PjwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvaW5JZDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VHZXRDb2luUXVlcnkiLCJDb2luSWQiLCJyb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJkYXRhIiwiY29pbiIsImlzTG9hZGluZyIsInAiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[name].tsx\n");

/***/ }),

/***/ "./services/getCoin.tsx":
/*!******************************!*\
  !*** ./services/getCoin.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getCoin = async (name)=>{\n    const url = `https://api.coingecko.com/api/v3/coins/${name}`;\n    try {\n        const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return resp.data;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst useGetCoinQuery = (name)=>{\n    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([\n        \"coin\",\n        name\n    ], ()=>getCoin(name));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetCoinQuery);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9nZXRDb2luLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFFdkMsTUFBTUUsVUFBVSxPQUFPQyxPQUE0QjtJQUNqRCxNQUFNQyxNQUFNLENBQUMsdUNBQXVDLEVBQUVELEtBQUssQ0FBQztJQUM1RCxJQUFJO1FBQ0YsTUFBTUUsT0FBTyxNQUFNTCxpREFBUyxDQUFDSTtRQUM3QixPQUFPQyxLQUFLRSxJQUFJO0lBQ2xCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2hCO0FBQ0Y7QUFFQSxNQUFNRSxrQkFBa0IsQ0FBQ1AsT0FBNEI7SUFDbkQsT0FBT0YscURBQVFBLENBQUM7UUFBQztRQUFRRTtLQUFLLEVBQUUsSUFBTUQsUUFBUUM7QUFDaEQ7QUFFQSxpRUFBZU8sZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlY2tvLWNvaW4tYXBwLy4vc2VydmljZXMvZ2V0Q29pbi50c3g/NDlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5jb25zdCBnZXRDb2luID0gYXN5bmMgKG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8ke25hbWV9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3AuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgdXNlR2V0Q29pblF1ZXJ5ID0gKG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG4gIHJldHVybiB1c2VRdWVyeShbXCJjb2luXCIsIG5hbWVdLCAoKSA9PiBnZXRDb2luKG5hbWUpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdldENvaW5RdWVyeTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVF1ZXJ5IiwiZ2V0Q29pbiIsIm5hbWUiLCJ1cmwiLCJyZXNwIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInVzZUdldENvaW5RdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/getCoin.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[name].tsx"));
module.exports = __webpack_exports__;

})();
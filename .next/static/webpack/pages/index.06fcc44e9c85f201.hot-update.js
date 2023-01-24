"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/getCoins.ts":
/*!******************************!*\
  !*** ./services/getCoins.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst getCoins = async (sortBy)=>{\n    let url = \"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false\";\n    try {\n        const resp = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url);\n        return resp.data;\n    } catch (error) {\n        console.error(error);\n    }\n};\nconst useGetCoinsQuery = (sortBy)=>{\n    return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([\n        \"coins\",\n        sortBy\n    ], ()=>getCoins(sortBy));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGetCoinsQuery);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9nZXRDb2lucy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBdUM7QUFFZDtBQUV6QixNQUFNRSxXQUFXLE9BQU9DLFNBQThCO0lBRWxELElBQUlDLE1BQU87SUFDWCxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxNQUFNSixpREFBUyxDQUFnQkc7UUFDNUMsT0FBT0MsS0FBS0UsSUFBSTtJQUNwQixFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtJQUNsQjtBQUNKO0FBRUEsTUFBTUUsbUJBQW1CLENBQUNQLFNBQThCO0lBQ3BELE9BQU9ILHFEQUFRQSxDQUFDO1FBQUM7UUFBU0c7S0FBTyxFQUFDLElBQU1ELFNBQVNDO0FBQ3JEO0FBRUEsK0RBQWVPLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9nZXRDb2lucy50cz82MTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgQ29pbkRldGFpbHMsIElBUElDb2luIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmNvbnN0IGdldENvaW5zID0gYXN5bmMgKHNvcnRCeTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcbiAgICBcbiAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL21hcmtldHM/dnNfY3VycmVuY3k9dXNkJm9yZGVyPW1hcmtldF9jYXBfZGVzYyZwZXJfcGFnZT0xMDAmcGFnZT0xJnNwYXJrbGluZT1mYWxzZWBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0PENvaW5EZXRhaWxzW10+KHVybClcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxufVxuXG5jb25zdCB1c2VHZXRDb2luc1F1ZXJ5ID0gKHNvcnRCeTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gdXNlUXVlcnkoW1wiY29pbnNcIiwgc29ydEJ5XSwoKSA9PiBnZXRDb2lucyhzb3J0QnkpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VHZXRDb2luc1F1ZXJ5Il0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiYXhpb3MiLCJnZXRDb2lucyIsInNvcnRCeSIsInVybCIsInJlc3AiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlR2V0Q29pbnNRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/getCoins.ts\n"));

/***/ })

});
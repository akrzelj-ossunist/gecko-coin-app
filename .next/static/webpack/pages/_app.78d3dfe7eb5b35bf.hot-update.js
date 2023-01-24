"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinByName */ \"./services/getCoinByName.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 500);\n    const { data: coinData , isLoading  } = (0,_services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue);\n    // if(isLoading)\n    //   return <p>Lo</p>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white font-extrabold text-3xl m-2\",\n                        children: \"CoinBunny\"\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[195px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[220px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white font-extrabold text-3xl m-2\",\n                        children: \"CoinBunny\"\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: coinData.map((coin)=>{\n                    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: coin.name\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: coin.market_cap_rank\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true);\n                })\n            }, void 0, false, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"AMFcxgh5cDZ+bFnAfbrhYgSgiH4=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ0U7QUFDa0I7QUFDcEI7QUFHMUMsTUFBTUssYUFBa0UsU0FFbEU7UUFGbUUsRUFDdkVDLFNBQVEsRUFDVDs7SUFDQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTU8saUJBQWlCTCx3REFBV0EsQ0FBU0csV0FBVztJQUN0RCxNQUFNLEVBQUVHLE1BQU1DLFNBQVEsRUFBRUMsVUFBUyxFQUFFLEdBQUdULG1FQUFxQkEsQ0FBQ007SUFDNUQsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQXlDOzs7Ozs7a0NBQ3RELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNkLG1EQUFLQTtnQ0FDSmdCLEtBQUtmLDBEQUFNQTtnQ0FDWGdCLEtBQUk7Z0NBQ0pILFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0k7Z0NBQ0NDLFVBQVUsQ0FBQ0MsS0FBT1osYUFBYVksR0FBR0MsTUFBTSxDQUFDQyxLQUFLO2dDQUM5Q1IsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBeUM7Ozs7Ozs7Ozs7OzswQkFFeEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaSCxTQUFTWSxHQUFHLENBQUMsQ0FBQ0MsT0FBc0I7b0JBQ25DLElBQUlaLFdBQVcscUJBQU87b0JBQ3RCLHFCQUNFOzswQ0FDRSw4REFBQ0c7MENBQUdTLEtBQUtDLElBQUk7Ozs7OzswQ0FDYiw4REFBQ1Y7MENBQUdTLEtBQUtFLGVBQWU7Ozs7Ozs7O2dCQUc5Qjs7Ozs7O1lBRURwQjs7O0FBR1A7R0F2Q01EOztRQUltQkQsb0RBQVdBO1FBQ0lELCtEQUFxQkE7OztLQUx2REU7QUF5Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vcHVibGljL3NlYXJjaC5wbmdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VHZXRDb2luQnlOYW1lUXVlcnkgZnJvbSBcIi4uL3NlcnZpY2VzL2dldENvaW5CeU5hbWVcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcInVzZWhvb2tzLXRzXCI7XG5pbXBvcnQgeyBDb2luRGV0YWlscyB9IGZyb20gXCJAL3NlcnZpY2VzL2ludGVyZmFjZVwiO1xuXG5jb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfT4gPSAoe1xuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgW2NvaW5WYWx1ZSwgc2V0Q29pblZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5jZWRWYWx1ZSA9IHVzZURlYm91bmNlPHN0cmluZz4oY29pblZhbHVlLCA1MDApO1xuICBjb25zdCB7IGRhdGE6IGNvaW5EYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUdldENvaW5CeU5hbWVRdWVyeShkZWJvdW5jZWRWYWx1ZSk7XG4gIC8vIGlmKGlzTG9hZGluZylcbiAgLy8gICByZXR1cm4gPHA+TG88L3A+XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGJnLWJsdWUtNTAwIHN0aWNreSB0b3AtMFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG0tMlwiPkNvaW5CdW5ueTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtzZWFyY2h9XG4gICAgICAgICAgICBhbHQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IG0tNCBhYnNvbHV0ZSBtbC1bMTk1cHhdXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlbCkgPT4gc2V0Q29pblZhbHVlKGVsLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyMjBweF0gaC04IHJvdW5kZWQtbWQgbXQtMiBwci04IHBsLTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG0tMlwiPkNvaW5CdW5ueTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICB7Y29pbkRhdGEubWFwKChjb2luOiBDb2luRGV0YWlscykgPT4ge1xuICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8PjwvPjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+e2NvaW4ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwPntjb2luLm1hcmtldF9jYXBfcmFua308L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInNlYXJjaCIsInVzZVN0YXRlIiwidXNlR2V0Q29pbkJ5TmFtZVF1ZXJ5IiwidXNlRGVib3VuY2UiLCJOYXZpZ2F0aW9uIiwiY2hpbGRyZW4iLCJjb2luVmFsdWUiLCJzZXRDb2luVmFsdWUiLCJkZWJvdW5jZWRWYWx1ZSIsImRhdGEiLCJjb2luRGF0YSIsImlzTG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcmMiLCJhbHQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImNvaW4iLCJuYW1lIiwibWFya2V0X2NhcF9yYW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
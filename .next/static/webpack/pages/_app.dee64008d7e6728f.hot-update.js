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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinByName */ \"./services/getCoinByName.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"undefined\");\n    const [showCoinSearchList, setShowCoinSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 250);\n    const { data: coinData , isLoading  } = (0,_services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue || \"undefined\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white font-extrabold text-3xl m-2\",\n                        children: \"CoinBunny\"\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setShowCoinSearchList(true),\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[195px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[220px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white font-extrabold text-3xl m-2\",\n                        children: \"CoinBunny\"\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(showCoinSearchList ? \"flex\" : \"hidden\", \" w-full h-[20px] flex-col absolute items-center\"),\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : coinData.coins.map((coin)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/\".concat(coin.id),\n                        onClick: ()=>setShowCoinSearchList(false),\n                        className: \"flex justify-between w-[220px] bg-white p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: coin.name\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: coin.market_cap_rank\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowCoinSearchList(false),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"OSZ7HtseeZQjnK7DH8/WXjx13vA=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1c7QUFDRTtBQUNrQjtBQUNwQjtBQUViO0FBRTdCLE1BQU1NLGFBQWtFLFNBRWxFO1FBRm1FLEVBQ3ZFQyxTQUFRLEVBQ1Q7O0lBQ0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1Esb0JBQW9CQyxzQkFBc0IsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUVsRSxNQUFNVSxpQkFBaUJSLHdEQUFXQSxDQUFTSSxXQUFXO0lBQ3RELE1BQU0sRUFBRUssTUFBTUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR1osbUVBQXFCQSxDQUN6RFMsa0JBQWtCO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBeUM7Ozs7OztrQ0FDdEQsOERBQUNEO3dCQUFJRyxTQUFTLElBQU1SLHNCQUFzQixJQUFJO3dCQUFHTSxXQUFVOzswQ0FDekQsOERBQUNqQixtREFBS0E7Z0NBQ0pvQixLQUFLbkIsMERBQU1BO2dDQUNYb0IsS0FBSTtnQ0FDSkosV0FBVTs7Ozs7OzBDQUVaLDhEQUFDSztnQ0FDQ0MsVUFBVSxDQUFDQyxLQUFPZixhQUFhZSxHQUFHQyxNQUFNLENBQUNDLEtBQUs7Z0NBQzlDVCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUF5Qzs7Ozs7Ozs7Ozs7OzBCQUV4RCw4REFBQ0Q7Z0JBQ0NDLFdBQVcsR0FFVixPQURDUCxxQkFBcUIsU0FBUyxRQUFRLEVBQ3ZDOzBCQUVBSywwQkFDQyxnSkFFQUQsU0FBU2EsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBc0I7b0JBQ3hDLHFCQUNFLDhEQUFDeEIsa0RBQUlBO3dCQUNIeUIsTUFBTSxJQUFZLE9BQVJELEtBQUtFLEVBQUU7d0JBQ2pCWixTQUFTLElBQU1SLHNCQUFzQixLQUFLO3dCQUMxQ00sV0FBVTs7MENBRVYsOERBQUNDOzBDQUFHVyxLQUFLRyxJQUFJOzs7Ozs7MENBQ2IsOERBQUNkOzBDQUFHVyxLQUFLSSxlQUFlOzs7Ozs7Ozs7Ozs7Z0JBRzlCLEVBQ0Q7Ozs7OzswQkFFSCw4REFBQ2pCO2dCQUFJRyxTQUFTLElBQU1SLHNCQUFzQixLQUFLOzBCQUFJSjs7Ozs7Ozs7QUFHekQ7R0FwRE1EOztRQU1tQkYsb0RBQVdBO1FBQ0lELCtEQUFxQkE7OztLQVB2REc7QUFzRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vcHVibGljL3NlYXJjaC5wbmdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VHZXRDb2luQnlOYW1lUXVlcnkgZnJvbSBcIi4uL3NlcnZpY2VzL2dldENvaW5CeU5hbWVcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcInVzZWhvb2tzLXRzXCI7XG5pbXBvcnQgeyBDb2luRGV0YWlscyB9IGZyb20gXCJAL3NlcnZpY2VzL2ludGVyZmFjZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfT4gPSAoe1xuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgW2NvaW5WYWx1ZSwgc2V0Q29pblZhbHVlXSA9IHVzZVN0YXRlKFwidW5kZWZpbmVkXCIpO1xuICBjb25zdCBbc2hvd0NvaW5TZWFyY2hMaXN0LCBzZXRTaG93Q29pblNlYXJjaExpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRlYm91bmNlZFZhbHVlID0gdXNlRGVib3VuY2U8c3RyaW5nPihjb2luVmFsdWUsIDI1MCk7XG4gIGNvbnN0IHsgZGF0YTogY29pbkRhdGEsIGlzTG9hZGluZyB9ID0gdXNlR2V0Q29pbkJ5TmFtZVF1ZXJ5KFxuICAgIGRlYm91bmNlZFZhbHVlIHx8IFwidW5kZWZpbmVkXCJcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gYmctYmx1ZS01MDAgc3RpY2t5IHRvcC0wXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgdGV4dC0zeGwgbS0yXCI+Q29pbkJ1bm55PC9wPlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdCh0cnVlKX0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17c2VhcmNofVxuICAgICAgICAgICAgYWx0PVwic2VhcmNoXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBtLTQgYWJzb2x1dGUgbWwtWzE5NXB4XVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWwpID0+IHNldENvaW5WYWx1ZShlbC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjIwcHhdIGgtOCByb3VuZGVkLW1kIG10LTIgcHItOCBwbC0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtLTJcIj5Db2luQnVubnk8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBzaG93Q29pblNlYXJjaExpc3QgPyBcImZsZXhcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSB3LWZ1bGwgaC1bMjBweF0gZmxleC1jb2wgYWJzb2x1dGUgaXRlbXMtY2VudGVyYH1cbiAgICAgID5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8PjwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGNvaW5EYXRhLmNvaW5zLm1hcCgoY29pbjogQ29pbkRldGFpbHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17YC8ke2NvaW4uaWR9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29pblNlYXJjaExpc3QoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctWzIyMHB4XSBiZy13aGl0ZSBwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+e2NvaW4ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e2NvaW4ubWFya2V0X2NhcF9yYW5rfTwvcD5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdChmYWxzZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzZWFyY2giLCJ1c2VTdGF0ZSIsInVzZUdldENvaW5CeU5hbWVRdWVyeSIsInVzZURlYm91bmNlIiwiTGluayIsIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsImNvaW5WYWx1ZSIsInNldENvaW5WYWx1ZSIsInNob3dDb2luU2VhcmNoTGlzdCIsInNldFNob3dDb2luU2VhcmNoTGlzdCIsImRlYm91bmNlZFZhbHVlIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvaW5zIiwibWFwIiwiY29pbiIsImhyZWYiLCJpZCIsIm5hbWUiLCJtYXJrZXRfY2FwX3JhbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
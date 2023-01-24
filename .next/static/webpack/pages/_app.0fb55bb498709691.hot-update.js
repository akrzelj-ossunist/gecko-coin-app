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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinByName */ \"./services/getCoinByName.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"undefined\");\n    const [showCoinSearchList, setShowCoinSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 250);\n    const { data: coinData , isLoading  } = (0,_services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue || \"undefined\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/\",\n                        className: \"text-white font-extrabold text-3xl m-2\",\n                        children: \"CoinBunny\"\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setShowCoinSearchList(true),\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[195px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[220px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(showCoinSearchList ? \"flex\" : \"hidden\", \" w-full h-[20px] flex-col sticky mt-1 rounded-md items-center\"),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : coinData.coins.map((coin)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/\".concat(coin.id),\n                                        onClick: ()=>setShowCoinSearchList(false),\n                                        className: \"flex justify-between w-[220px] bg-white p-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: coin.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: coin.market_cap_rank\n                                            }, void 0, false, {\n                                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white font-extrabold text-3xl m-2\",\n                        children: \"CoinBunny\"\n                    }, void 0, false, {\n                        fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowCoinSearchList(false),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/antonio/posa/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"OSZ7HtseeZQjnK7DH8/WXjx13vA=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinByName__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1c7QUFDRTtBQUNrQjtBQUNwQjtBQUViO0FBRTdCLE1BQU1NLGFBQWtFLFNBRWxFO1FBRm1FLEVBQ3ZFQyxTQUFRLEVBQ1Q7O0lBQ0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1Esb0JBQW9CQyxzQkFBc0IsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUVsRSxNQUFNVSxpQkFBaUJSLHdEQUFXQSxDQUFTSSxXQUFXO0lBQ3RELE1BQU0sRUFBRUssTUFBTUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR1osbUVBQXFCQSxDQUN6RFMsa0JBQWtCO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWixrREFBSUE7d0JBQUNhLE1BQUs7d0JBQUlELFdBQVU7a0NBQXlDOzs7Ozs7a0NBR2xFLDhEQUFDRDt3QkFBSUcsU0FBUyxJQUFNUixzQkFBc0IsSUFBSTt3QkFBR00sV0FBVTs7MENBQ3pELDhEQUFDakIsbURBQUtBO2dDQUNKb0IsS0FBS25CLDBEQUFNQTtnQ0FDWG9CLEtBQUk7Z0NBQ0pKLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0s7Z0NBQ0NDLFVBQVUsQ0FBQ0MsS0FBT2YsYUFBYWUsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO2dDQUM5Q1QsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDRDtnQ0FDQ0MsV0FBVyxHQUVWLE9BRENQLHFCQUFxQixTQUFTLFFBQVEsRUFDdkM7MENBRUFLLDBCQUNDLGdKQUVBRCxTQUFTYSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFzQjtvQ0FDeEMscUJBQ0UsOERBQUN4QixrREFBSUE7d0NBQ0hhLE1BQU0sSUFBWSxPQUFSVyxLQUFLQyxFQUFFO3dDQUNqQlgsU0FBUyxJQUFNUixzQkFBc0IsS0FBSzt3Q0FDMUNNLFdBQVU7OzBEQUVWLDhEQUFDYzswREFBR0YsS0FBS0csSUFBSTs7Ozs7OzBEQUNiLDhEQUFDRDswREFBR0YsS0FBS0ksZUFBZTs7Ozs7Ozs7Ozs7O2dDQUc5QixFQUNEOzs7Ozs7Ozs7Ozs7a0NBR0wsOERBQUNGO3dCQUFFZCxXQUFVO2tDQUF5Qzs7Ozs7Ozs7Ozs7OzBCQUd4RCw4REFBQ0Q7Z0JBQUlHLFNBQVMsSUFBTVIsc0JBQXNCLEtBQUs7MEJBQUlKOzs7Ozs7OztBQUd6RDtHQXZETUQ7O1FBTW1CRixvREFBV0E7UUFDSUQsK0RBQXFCQTs7O0tBUHZERztBQXlETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9wdWJsaWMvc2VhcmNoLnBuZ1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUdldENvaW5CeU5hbWVRdWVyeSBmcm9tIFwiLi4vc2VydmljZXMvZ2V0Q29pbkJ5TmFtZVwiO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcbmltcG9ydCB7IENvaW5EZXRhaWxzIH0gZnJvbSBcIkAvc2VydmljZXMvaW50ZXJmYWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE5hdmlnYXRpb246IFJlYWN0LkZDPHsgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBbY29pblZhbHVlLCBzZXRDb2luVmFsdWVdID0gdXNlU3RhdGUoXCJ1bmRlZmluZWRcIik7XG4gIGNvbnN0IFtzaG93Q29pblNlYXJjaExpc3QsIHNldFNob3dDb2luU2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZGVib3VuY2VkVmFsdWUgPSB1c2VEZWJvdW5jZTxzdHJpbmc+KGNvaW5WYWx1ZSwgMjUwKTtcbiAgY29uc3QgeyBkYXRhOiBjb2luRGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXRDb2luQnlOYW1lUXVlcnkoXG4gICAgZGVib3VuY2VkVmFsdWUgfHwgXCJ1bmRlZmluZWRcIlxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTUwMCBzdGlja3kgdG9wLTBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG0tMlwiPlxuICAgICAgICAgIENvaW5CdW5ueVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvaW5TZWFyY2hMaXN0KHRydWUpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtzZWFyY2h9XG4gICAgICAgICAgICBhbHQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IG0tNCBhYnNvbHV0ZSBtbC1bMTk1cHhdXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlbCkgPT4gc2V0Q29pblZhbHVlKGVsLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyMjBweF0gaC04IHJvdW5kZWQtbWQgbXQtMiBwci04IHBsLTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgc2hvd0NvaW5TZWFyY2hMaXN0ID8gXCJmbGV4XCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICB9IHctZnVsbCBoLVsyMHB4XSBmbGV4LWNvbCBzdGlja3kgbXQtMSByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlcmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNvaW5EYXRhLmNvaW5zLm1hcCgoY29pbjogQ29pbkRldGFpbHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2NvaW4uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvaW5TZWFyY2hMaXN0KGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1bMjIwcHhdIGJnLXdoaXRlIHAtMlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwPntjb2luLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57Y29pbi5tYXJrZXRfY2FwX3Jhbmt9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtLTJcIj5Db2luQnVubnk8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29pblNlYXJjaExpc3QoZmFsc2UpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwic2VhcmNoIiwidXNlU3RhdGUiLCJ1c2VHZXRDb2luQnlOYW1lUXVlcnkiLCJ1c2VEZWJvdW5jZSIsIkxpbmsiLCJOYXZpZ2F0aW9uIiwiY2hpbGRyZW4iLCJjb2luVmFsdWUiLCJzZXRDb2luVmFsdWUiLCJzaG93Q29pblNlYXJjaExpc3QiLCJzZXRTaG93Q29pblNlYXJjaExpc3QiLCJkZWJvdW5jZWRWYWx1ZSIsImRhdGEiLCJjb2luRGF0YSIsImlzTG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImVsIiwidGFyZ2V0IiwidmFsdWUiLCJjb2lucyIsIm1hcCIsImNvaW4iLCJpZCIsInAiLCJuYW1lIiwibWFya2V0X2NhcF9yYW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
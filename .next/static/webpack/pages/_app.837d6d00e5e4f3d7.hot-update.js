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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinById */ \"./services/getCoinById.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/rabbit.png */ \"./public/rabbit.png\");\n/* harmony import */ var _public_login_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/login.png */ \"./public/login.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"undefined\");\n    const [showCoinSearchList, setShowCoinSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 250);\n    const { data: coinData , isLoading  } = (0,_services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue || \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/\",\n                        className: \"text-white font-extrabold text-3xl ml-6 m-2 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                alt: \"rabbit\",\n                                width: 50,\n                                height: 25,\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2\",\n                                children: \"CoinBunny\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[215px]\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onClick: ()=>setShowCoinSearchList(true),\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[240px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(showCoinSearchList ? \"flex\" : \"hidden\", \" w-full h-[200px] flex-col rounded-md items-center overflow-y-auto absolute\"),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : coinData === null || coinData === void 0 ? void 0 : coinData.coins.map((coin)=>{\n                                    console.log(coin);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        onClick: ()=>setShowCoinSearchList(false),\n                                        href: \"/\".concat(coin.id),\n                                        className: \"flex justify-between w-[230px] bg-white p-2 border-[1px] border-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: coin.thumb,\n                                                        alt: \"coinImage\",\n                                                        className: \"mr-2\",\n                                                        width: 25,\n                                                        height: 10\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: coin.name\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: coin.market_cap_rank\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/login\",\n                        className: \"flex mr-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_login_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                alt: \"login\",\n                                className: \"h-[30px] w-[30px] mr-1 mt-2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-medium text-xl m-2\",\n                                children: \"LogIn\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowCoinSearchList(false),\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\Navigation.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"f1fzIJy8rDc098NYPLuR56y5nsU=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNUO0FBQ3lCO0FBQ2hCO0FBQ2I7QUFDYTtBQUNGO0FBRXhDLE1BQU1RLGFBQWtFLFNBRWxFO1FBRm1FLEVBQ3ZFQyxTQUFRLEVBQ1Q7O0lBQ0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1Usb0JBQW9CQyxzQkFBc0IsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUNsRSxNQUFNWSxpQkFBaUJWLHdEQUFXQSxDQUFTTSxXQUFXO0lBQ3RELE1BQU0sRUFBRUssTUFBTUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR2QsaUVBQW1CQSxDQUN2RFcsa0JBQWtCO0lBRXBCLHFCQUNFOzswQkFDRSw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDZCxrREFBSUE7d0JBQ0hlLE1BQUs7d0JBQ0xELFdBQVU7OzBDQUVWLDhEQUFDbkIsbURBQUtBO2dDQUNKcUIsS0FBS2YsMERBQU1BO2dDQUNYZ0IsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkwsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDTTtnQ0FBRU4sV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUV0Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDbkIsbURBQUtBO2dDQUNKcUIsS0FBS3BCLDBEQUFNQTtnQ0FDWHFCLEtBQUk7Z0NBQ0pILFdBQVU7Ozs7OzswQ0FFWiw4REFBQ087Z0NBQ0NDLFNBQVMsSUFBTWQsc0JBQXNCLElBQUk7Z0NBQ3pDZSxVQUFVLENBQUNDLEtBQU9sQixhQUFha0IsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO2dDQUM5Q1osV0FBVTs7Ozs7OzBDQUVaLDhEQUFDRDtnQ0FDQ0MsV0FBVyxHQUVWLE9BRENQLHFCQUFxQixTQUFTLFFBQVEsRUFDdkM7MENBRUFLLDBCQUNDLGdKQUVBRCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVnQixLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFjO29DQUNqQ0MsUUFBUUMsR0FBRyxDQUFDRjtvQ0FDWixxQkFDRSw4REFBQzdCLGtEQUFJQTt3Q0FDSHNCLFNBQVMsSUFBTWQsc0JBQXNCLEtBQUs7d0NBQzFDTyxNQUFNLElBQVksT0FBUmMsS0FBS0csRUFBRTt3Q0FDakJsQixXQUFVOzswREFFViw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDbkIsbURBQUtBO3dEQUNKcUIsS0FBS2EsS0FBS0ksS0FBSzt3REFDZmhCLEtBQUk7d0RBQ0pILFdBQVU7d0RBQ1ZJLE9BQU87d0RBQ1BDLFFBQVE7Ozs7OztrRUFFViw4REFBQ0M7a0VBQUdTLEtBQUtLLElBQUk7Ozs7Ozs7Ozs7OzswREFFZiw4REFBQ2Q7MERBQUdTLEtBQUtNLGVBQWU7Ozs7Ozs7Ozs7OztnQ0FHOUIsRUFBRTs7Ozs7Ozs7Ozs7O2tDQUlSLDhEQUFDbkMsa0RBQUlBO3dCQUFDZSxNQUFLO3dCQUFTRCxXQUFVOzswQ0FDNUIsOERBQUNuQixtREFBS0E7Z0NBQ0pxQixLQUFLZCx5REFBS0E7Z0NBQ1ZlLEtBQUk7Z0NBQ0pILFdBQVU7Ozs7OzswQ0FFWiw4REFBQ007Z0NBQUVOLFdBQVU7MENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRELDhEQUFDRDtnQkFBSVMsU0FBUyxJQUFNZCxzQkFBc0IsS0FBSzswQkFBSUo7Ozs7Ozs7O0FBR3pEO0dBbEZNRDs7UUFLbUJKLG9EQUFXQTtRQUNJRCw2REFBbUJBOzs7S0FOckRLO0FBb0ZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vcHVibGljL3NlYXJjaC5wbmdcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUdldENvaW5CeUlkUXVlcnkgZnJvbSBcIi4uL3NlcnZpY2VzL2dldENvaW5CeUlkXCI7XHJcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcInVzZWhvb2tzLXRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHJhYmJpdCBmcm9tIFwiLi4vcHVibGljL3JhYmJpdC5wbmdcIjtcclxuaW1wb3J0IGxvZ2luIGZyb20gXCIuLi9wdWJsaWMvbG9naW4ucG5nXCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfT4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2NvaW5WYWx1ZSwgc2V0Q29pblZhbHVlXSA9IHVzZVN0YXRlKFwidW5kZWZpbmVkXCIpO1xyXG4gIGNvbnN0IFtzaG93Q29pblNlYXJjaExpc3QsIHNldFNob3dDb2luU2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGVib3VuY2VkVmFsdWUgPSB1c2VEZWJvdW5jZTxzdHJpbmc+KGNvaW5WYWx1ZSwgMjUwKTtcclxuICBjb25zdCB7IGRhdGE6IGNvaW5EYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUdldENvaW5CeUlkUXVlcnkoXHJcbiAgICBkZWJvdW5jZWRWYWx1ZSB8fCBcIlwiXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gYmctYmx1ZS01MDAgc3RpY2t5IHRvcC0wIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1sLTYgbS0yIGZsZXhcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3JhYmJpdH1cclxuICAgICAgICAgICAgYWx0PVwicmFiYml0XCJcclxuICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezI1fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yXCI+Q29pbkJ1bm55PC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtzZWFyY2h9XHJcbiAgICAgICAgICAgIGFsdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBtLTQgYWJzb2x1dGUgbWwtWzIxNXB4XVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdCh0cnVlKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlbCkgPT4gc2V0Q29pblZhbHVlKGVsLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI0MHB4XSBoLTggcm91bmRlZC1tZCBtdC0yIHByLTggcGwtMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgIHNob3dDb2luU2VhcmNoTGlzdCA/IFwiZmxleFwiIDogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICB9IHctZnVsbCBoLVsyMDBweF0gZmxleC1jb2wgcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3cteS1hdXRvIGFic29sdXRlYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIGNvaW5EYXRhPy5jb2lucy5tYXAoKGNvaW46IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29pbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2NvaW4uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LVsyMzBweF0gYmctd2hpdGUgcC0yIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb2luLnRodW1ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjb2luSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntjb2luLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjb2luLm1hcmtldF9jYXBfcmFua308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJmbGV4IG1yLTVcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2xvZ2lufVxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dpblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzMwcHhdIHctWzMwcHhdIG1yLTEgbXQtMlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LXhsIG0tMlwiPkxvZ0luPC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdChmYWxzZSl9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzZWFyY2giLCJ1c2VTdGF0ZSIsInVzZUdldENvaW5CeUlkUXVlcnkiLCJ1c2VEZWJvdW5jZSIsIkxpbmsiLCJyYWJiaXQiLCJsb2dpbiIsIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsImNvaW5WYWx1ZSIsInNldENvaW5WYWx1ZSIsInNob3dDb2luU2VhcmNoTGlzdCIsInNldFNob3dDb2luU2VhcmNoTGlzdCIsImRlYm91bmNlZFZhbHVlIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImlucHV0Iiwib25DbGljayIsIm9uQ2hhbmdlIiwiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvaW5zIiwibWFwIiwiY29pbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInRodW1iIiwibmFtZSIsIm1hcmtldF9jYXBfcmFuayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinById */ \"./services/getCoinById.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/rabbit.png */ \"./public/rabbit.png\");\n/* harmony import */ var _public_login_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/login.png */ \"./public/login.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"undefined\");\n    const [showCoinSearchList, setShowCoinSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 250);\n    const { data: coinData , isLoading  } = (0,_services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue || \"\");\n    const [localUsername, setLocalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (true) {\n            setLocalUsername(localStorage.getItem(\"username\") || \"\");\n        }\n    }, []);\n    const route200 = async ()=>{\n        try {\n            const resp = await axios.get(\"/api/login\");\n            return resp.data;\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const { data: routeData , isLoading: Loading  } = useQuery([], ()=>route200());\n    if (!Loading) console.log(routeData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/\",\n                        className: \"text-white font-extrabold text-3xl ml-6 m-2 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                alt: \"rabbit\",\n                                width: 50,\n                                height: 25,\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2\",\n                                children: \"CoinBunny\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[215px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onClick: ()=>setShowCoinSearchList(true),\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[240px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(showCoinSearchList ? \"flex\" : \"hidden\", \" w-full h-[200px] flex-col rounded-md items-center overflow-y-auto absolute\"),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : coinData === null || coinData === void 0 ? void 0 : coinData.coins.map((coin)=>{\n                                    console.log(coin);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        onClick: ()=>setShowCoinSearchList(false),\n                                        href: \"/\".concat(coin.id),\n                                        className: \"flex justify-between w-[230px] bg-white p-2 border-[1px] border-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: coin.thumb,\n                                                        alt: \"coinImage\",\n                                                        className: \"mr-2\",\n                                                        width: 25,\n                                                        height: 10\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: coin.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: coin.market_cap_rank\n                                            }, void 0, false, {\n                                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/login\",\n                        className: \"flex mr-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_login_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                alt: \"login\",\n                                className: \"h-[30px] w-[30px] mr-1 mt-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined),\n                            localUsername ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-medium text-xl m-2\",\n                                children: localUsername\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-medium text-xl m-2\",\n                                children: \"LogIn\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowCoinSearchList(false),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"W8lk6055jc47mMA01ZPpndfi59s=\", true, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVU7OzBDQUM1Qiw4REFBQ2xDLG1EQUFLQTtnQ0FDSm9DLEtBQUs1Qix5REFBS0E7Z0NBQ1Y2QixLQUFJO2dDQUNKSCxXQUFVOzs7Ozs7NEJBRVhmLDhCQUNDLDhEQUFDcUI7Z0NBQUVOLFdBQVU7MENBQ1ZmOzs7OzswREFHSCw4REFBQ3FCO2dDQUFFTixXQUFVOzBDQUFxQzs7Ozs7eUNBQ25EOzs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDRDtnQkFBSVMsU0FBUyxJQUFNNUIsc0JBQXNCLEtBQUs7MEJBQUlKOzs7Ozs7OztBQUd6RDtHQTlHTUQ7O1FBS21CSixvREFBV0E7UUFDSUQsNkRBQW1CQTs7O0tBTnJESztBQWdITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24udHN4PzgzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9wdWJsaWMvc2VhcmNoLnBuZ1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUdldENvaW5CeUlkUXVlcnkgZnJvbSBcIi4uL3NlcnZpY2VzL2dldENvaW5CeUlkXCI7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHJhYmJpdCBmcm9tIFwiLi4vcHVibGljL3JhYmJpdC5wbmdcIjtcbmltcG9ydCBsb2dpbiBmcm9tIFwiLi4vcHVibGljL2xvZ2luLnBuZ1wiO1xuXG5jb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfT4gPSAoe1xuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgW2NvaW5WYWx1ZSwgc2V0Q29pblZhbHVlXSA9IHVzZVN0YXRlKFwidW5kZWZpbmVkXCIpO1xuICBjb25zdCBbc2hvd0NvaW5TZWFyY2hMaXN0LCBzZXRTaG93Q29pblNlYXJjaExpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkZWJvdW5jZWRWYWx1ZSA9IHVzZURlYm91bmNlPHN0cmluZz4oY29pblZhbHVlLCAyNTApO1xuICBjb25zdCB7IGRhdGE6IGNvaW5EYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUdldENvaW5CeUlkUXVlcnkoXG4gICAgZGVib3VuY2VkVmFsdWUgfHwgXCJcIlxuICApO1xuICBjb25zdCBbbG9jYWxVc2VybmFtZSwgc2V0TG9jYWxVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRMb2NhbFVzZXJuYW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgfHwgXCJcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3Qgcm91dGUyMDAgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2xvZ2luXCIpO1xuICAgICAgcmV0dXJuIHJlc3AuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgZGF0YTogcm91dGVEYXRhLCBpc0xvYWRpbmc6IExvYWRpbmcgfSA9IHVzZVF1ZXJ5KFtdLCAoKSA9PlxuICAgIHJvdXRlMjAwKClcbiAgKTtcbiAgaWYgKCFMb2FkaW5nKSBjb25zb2xlLmxvZyhyb3V0ZURhdGEpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gYmctYmx1ZS01MDAgc3RpY2t5IHRvcC0wIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHRleHQtM3hsIG1sLTYgbS0yIGZsZXhcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3JhYmJpdH1cbiAgICAgICAgICAgIGFsdD1cInJhYmJpdFwiXG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yXCI+Q29pbkJ1bm55PC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17c2VhcmNofVxuICAgICAgICAgICAgYWx0PVwic2VhcmNoXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBtLTQgYWJzb2x1dGUgbWwtWzIxNXB4XVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdCh0cnVlKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWwpID0+IHNldENvaW5WYWx1ZShlbC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjQwcHhdIGgtOCByb3VuZGVkLW1kIG10LTIgcHItOCBwbC0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIHNob3dDb2luU2VhcmNoTGlzdCA/IFwiZmxleFwiIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSB3LWZ1bGwgaC1bMjAwcHhdIGZsZXgtY29sIHJvdW5kZWQtbWQgaXRlbXMtY2VudGVyIG92ZXJmbG93LXktYXV0byBhYnNvbHV0ZWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNvaW5EYXRhPy5jb2lucy5tYXAoKGNvaW46IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvaW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29pblNlYXJjaExpc3QoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7Y29pbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LVsyMzBweF0gYmctd2hpdGUgcC0yIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29pbi50aHVtYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImNvaW5JbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57Y29pbi5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntjb2luLm1hcmtldF9jYXBfcmFua308L3A+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiZmxleCBtci01XCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2xvZ2lufVxuICAgICAgICAgICAgYWx0PVwibG9naW5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMzBweF0gdy1bMzBweF0gbXItMSBtdC0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtsb2NhbFVzZXJuYW1lID8gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LXhsIG0tMlwiPlxuICAgICAgICAgICAgICB7bG9jYWxVc2VybmFtZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LXhsIG0tMlwiPkxvZ0luPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdChmYWxzZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzZWFyY2giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUdldENvaW5CeUlkUXVlcnkiLCJ1c2VEZWJvdW5jZSIsIkxpbmsiLCJyYWJiaXQiLCJsb2dpbiIsIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsImNvaW5WYWx1ZSIsInNldENvaW5WYWx1ZSIsInNob3dDb2luU2VhcmNoTGlzdCIsInNldFNob3dDb2luU2VhcmNoTGlzdCIsImRlYm91bmNlZFZhbHVlIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwibG9jYWxVc2VybmFtZSIsInNldExvY2FsVXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGUyMDAiLCJyZXNwIiwiYXhpb3MiLCJnZXQiLCJlcnJvciIsImNvbnNvbGUiLCJyb3V0ZURhdGEiLCJMb2FkaW5nIiwidXNlUXVlcnkiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiaW5wdXQiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJlbCIsInRhcmdldCIsInZhbHVlIiwiY29pbnMiLCJtYXAiLCJjb2luIiwiaWQiLCJ0aHVtYiIsIm5hbWUiLCJtYXJrZXRfY2FwX3JhbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
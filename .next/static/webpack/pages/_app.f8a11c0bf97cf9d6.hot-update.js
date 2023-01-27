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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinById */ \"./services/getCoinById.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/rabbit.png */ \"./public/rabbit.png\");\n/* harmony import */ var _public_login_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/login.png */ \"./public/login.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"undefined\");\n    const [showCoinSearchList, setShowCoinSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 250);\n    const { data: coinData , isLoading  } = (0,_services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue || \"\");\n    const [localUsername, setLocalUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{\n        if (true) {\n            return localStorage.getItem(\"username\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/\",\n                        className: \"text-white font-extrabold text-3xl ml-6 m-2 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                alt: \"rabbit\",\n                                width: 50,\n                                height: 25,\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2\",\n                                children: \"CoinBunny\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[215px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onClick: ()=>setShowCoinSearchList(true),\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[240px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(showCoinSearchList ? \"flex\" : \"hidden\", \" w-full h-[200px] flex-col rounded-md items-center overflow-y-auto absolute\"),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : coinData === null || coinData === void 0 ? void 0 : coinData.coins.map((coin)=>{\n                                    console.log(coin);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        onClick: ()=>setShowCoinSearchList(false),\n                                        href: \"/\".concat(coin.id),\n                                        className: \"flex justify-between w-[230px] bg-white p-2 border-[1px] border-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: coin.thumb,\n                                                        alt: \"coinImage\",\n                                                        className: \"mr-2\",\n                                                        width: 25,\n                                                        height: 10\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: coin.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: coin.market_cap_rank\n                                            }, void 0, false, {\n                                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/login\",\n                        className: \"flex mr-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_login_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                alt: \"login\",\n                                className: \"h-[30px] w-[30px] mr-1 mt-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-medium text-xl m-2\",\n                                children: \"LogIn\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowCoinSearchList(false),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"WpDuONNiO91bdsXwyy0o08R6YU8=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TmF2aWdhdGlvbi50c3g/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3B1YmxpYy9zZWFyY2gucG5nXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlR2V0Q29pbkJ5SWRRdWVyeSBmcm9tIFwiLi4vc2VydmljZXMvZ2V0Q29pbkJ5SWRcIjtcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSBcInVzZWhvb2tzLXRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgcmFiYml0IGZyb20gXCIuLi9wdWJsaWMvcmFiYml0LnBuZ1wiO1xuaW1wb3J0IGxvZ2luIGZyb20gXCIuLi9wdWJsaWMvbG9naW4ucG5nXCI7XG5cbmNvbnN0IE5hdmlnYXRpb246IFJlYWN0LkZDPHsgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBbY29pblZhbHVlLCBzZXRDb2luVmFsdWVdID0gdXNlU3RhdGUoXCJ1bmRlZmluZWRcIik7XG4gIGNvbnN0IFtzaG93Q29pblNlYXJjaExpc3QsIHNldFNob3dDb2luU2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRlYm91bmNlZFZhbHVlID0gdXNlRGVib3VuY2U8c3RyaW5nPihjb2luVmFsdWUsIDI1MCk7XG4gIGNvbnN0IHsgZGF0YTogY29pbkRhdGEsIGlzTG9hZGluZyB9ID0gdXNlR2V0Q29pbkJ5SWRRdWVyeShcbiAgICBkZWJvdW5jZWRWYWx1ZSB8fCBcIlwiXG4gICk7XG4gIGNvbnN0IFtsb2NhbFVzZXJuYW1lLCBzZXRMb2NhbFVzZXJuYW1lXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTUwMCBzdGlja3kgdG9wLTAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgdGV4dC0zeGwgbWwtNiBtLTIgZmxleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17cmFiYml0fVxuICAgICAgICAgICAgYWx0PVwicmFiYml0XCJcbiAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTJcIj5Db2luQnVubnk8L3A+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtzZWFyY2h9XG4gICAgICAgICAgICBhbHQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IG0tNCBhYnNvbHV0ZSBtbC1bMjE1cHhdXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvaW5TZWFyY2hMaXN0KHRydWUpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlbCkgPT4gc2V0Q29pblZhbHVlKGVsLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsyNDBweF0gaC04IHJvdW5kZWQtbWQgbXQtMiBwci04IHBsLTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgc2hvd0NvaW5TZWFyY2hMaXN0ID8gXCJmbGV4XCIgOiBcImhpZGRlblwiXG4gICAgICAgICAgICB9IHctZnVsbCBoLVsyMDBweF0gZmxleC1jb2wgcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3cteS1hdXRvIGFic29sdXRlYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgY29pbkRhdGE/LmNvaW5zLm1hcCgoY29pbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29pbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDb2luU2VhcmNoTGlzdChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtjb2luLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctWzIzMHB4XSBiZy13aGl0ZSBwLTIgYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb2luLnRodW1ifVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29pbkltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntjb2luLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2NvaW4ubWFya2V0X2NhcF9yYW5rfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJmbGV4IG1yLTVcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17bG9naW59XG4gICAgICAgICAgICBhbHQ9XCJsb2dpblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLVszMHB4XSB3LVszMHB4XSBtci0xIG10LTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LW1lZGl1bSB0ZXh0LXhsIG0tMlwiPkxvZ0luPC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29pblNlYXJjaExpc3QoZmFsc2UpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwic2VhcmNoIiwidXNlU3RhdGUiLCJ1c2VHZXRDb2luQnlJZFF1ZXJ5IiwidXNlRGVib3VuY2UiLCJMaW5rIiwicmFiYml0IiwibG9naW4iLCJOYXZpZ2F0aW9uIiwiY2hpbGRyZW4iLCJjb2luVmFsdWUiLCJzZXRDb2luVmFsdWUiLCJzaG93Q29pblNlYXJjaExpc3QiLCJzZXRTaG93Q29pblNlYXJjaExpc3QiLCJkZWJvdW5jZWRWYWx1ZSIsImRhdGEiLCJjb2luRGF0YSIsImlzTG9hZGluZyIsImxvY2FsVXNlcm5hbWUiLCJzZXRMb2NhbFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJpbnB1dCIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImVsIiwidGFyZ2V0IiwidmFsdWUiLCJjb2lucyIsIm1hcCIsImNvaW4iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0aHVtYiIsIm5hbWUiLCJtYXJrZXRfY2FwX3JhbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
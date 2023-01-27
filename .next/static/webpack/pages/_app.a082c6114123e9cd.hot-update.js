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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/search.png */ \"./public/search.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/getCoinById */ \"./services/getCoinById.ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/rabbit.png */ \"./public/rabbit.png\");\n/* harmony import */ var _public_login_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/login.png */ \"./public/login.png\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Navigation = (param)=>{\n    let { children  } = param;\n    _s();\n    const [coinValue, setCoinValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"undefined\");\n    const [showCoinSearchList, setShowCoinSearchList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const debouncedValue = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(coinValue, 250);\n    const { data: coinData , isLoading  } = (0,_services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(debouncedValue || \"\");\n    const route200 = async ()=>{\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"/api/login\");\n            return resp.data;\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const { data: routeData , isLoading: Loading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)([], ()=>route200());\n    if (!Loading) console.log(\"from nav \", routeData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between bg-blue-500 sticky top-0 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/\",\n                        className: \"text-white font-extrabold text-3xl ml-6 m-2 flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_rabbit_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                alt: \"rabbit\",\n                                width: 50,\n                                height: 25,\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2\",\n                                children: \"CoinBunny\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_search_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                alt: \"search\",\n                                className: \"w-4 m-4 absolute ml-[215px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onClick: ()=>setShowCoinSearchList(true),\n                                onChange: (el)=>setCoinValue(el.target.value),\n                                className: \"w-[240px] h-8 rounded-md mt-2 pr-8 pl-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(showCoinSearchList ? \"flex\" : \"hidden\", \" w-full h-[200px] flex-col rounded-md items-center overflow-y-auto absolute\"),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : coinData === null || coinData === void 0 ? void 0 : coinData.coins.map((coin)=>{\n                                    console.log(coin);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        onClick: ()=>setShowCoinSearchList(false),\n                                        href: \"/\".concat(coin.id),\n                                        className: \"flex justify-between w-[230px] bg-white p-2 border-[1px] border-gray-300\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: coin.thumb,\n                                                        alt: \"coinImage\",\n                                                        className: \"mr-2\",\n                                                        width: 25,\n                                                        height: 10\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: coin.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: coin.market_cap_rank\n                                            }, void 0, false, {\n                                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/login\",\n                        className: \"flex mr-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _public_login_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                alt: \"login\",\n                                className: \"h-[30px] w-[30px] mr-1 mt-2\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            routeData.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-medium text-xl m-2\",\n                                children: routeData[routeData.length - 1].username\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white font-medium text-xl m-2\",\n                                children: \"LogIn\"\n                            }, void 0, false, {\n                                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowCoinSearchList(false),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/antonio/gecko-coin-app/components/Navigation.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"UaYw5hnn/XdtX6HZ0kUKC70JRPk=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useDebounce,\n        _services_getCoinById__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ0EsVUFBVXdCLE1BQU0sR0FBRyxFQUFFLENBQUNDLFFBQVE7Ozs7OzBEQUczQyw4REFBQ2Y7Z0NBQUVOLFdBQVU7MENBQXFDOzs7Ozt5Q0FDbkQ7Ozs7Ozs7Ozs7Ozs7MEJBSUwsOERBQUNEO2dCQUFJUyxTQUFTLElBQU10QixzQkFBc0IsS0FBSzswQkFBSUo7Ozs7Ozs7O0FBR3pEO0dBdkdNRDs7UUFLbUJOLG9EQUFXQTtRQUNJRCw2REFBbUJBO1FBYVRNLGlEQUFRQTs7O0tBbkJwREM7QUF5R04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnRzeD84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vcHVibGljL3NlYXJjaC5wbmdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VHZXRDb2luQnlJZFF1ZXJ5IGZyb20gXCIuLi9zZXJ2aWNlcy9nZXRDb2luQnlJZFwiO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCByYWJiaXQgZnJvbSBcIi4uL3B1YmxpYy9yYWJiaXQucG5nXCI7XG5pbXBvcnQgbG9naW4gZnJvbSBcIi4uL3B1YmxpYy9sb2dpbi5wbmdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmNvbnN0IE5hdmlnYXRpb246IFJlYWN0LkZDPHsgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBbY29pblZhbHVlLCBzZXRDb2luVmFsdWVdID0gdXNlU3RhdGUoXCJ1bmRlZmluZWRcIik7XG4gIGNvbnN0IFtzaG93Q29pblNlYXJjaExpc3QsIHNldFNob3dDb2luU2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRlYm91bmNlZFZhbHVlID0gdXNlRGVib3VuY2U8c3RyaW5nPihjb2luVmFsdWUsIDI1MCk7XG4gIGNvbnN0IHsgZGF0YTogY29pbkRhdGEsIGlzTG9hZGluZyB9ID0gdXNlR2V0Q29pbkJ5SWRRdWVyeShcbiAgICBkZWJvdW5jZWRWYWx1ZSB8fCBcIlwiXG4gICk7XG5cbiAgY29uc3Qgcm91dGUyMDAgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2xvZ2luXCIpO1xuICAgICAgcmV0dXJuIHJlc3AuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgZGF0YTogcm91dGVEYXRhLCBpc0xvYWRpbmc6IExvYWRpbmcgfSA9IHVzZVF1ZXJ5KFtdLCAoKSA9PlxuICAgIHJvdXRlMjAwKClcbiAgKTtcbiAgaWYgKCFMb2FkaW5nKSBjb25zb2xlLmxvZyhcImZyb20gbmF2IFwiLCByb3V0ZURhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGJnLWJsdWUtNTAwIHN0aWNreSB0b3AtMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZCB0ZXh0LTN4bCBtbC02IG0tMiBmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtyYWJiaXR9XG4gICAgICAgICAgICBhbHQ9XCJyYWJiaXRcIlxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPkNvaW5CdW5ueTwvcD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3NlYXJjaH1cbiAgICAgICAgICAgIGFsdD1cInNlYXJjaFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgbS00IGFic29sdXRlIG1sLVsyMTVweF1cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q29pblNlYXJjaExpc3QodHJ1ZSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGVsKSA9PiBzZXRDb2luVmFsdWUoZWwudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzI0MHB4XSBoLTggcm91bmRlZC1tZCBtdC0yIHByLTggcGwtMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBzaG93Q29pblNlYXJjaExpc3QgPyBcImZsZXhcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIH0gdy1mdWxsIGgtWzIwMHB4XSBmbGV4LWNvbCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy15LWF1dG8gYWJzb2x1dGVgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBjb2luRGF0YT8uY29pbnMubWFwKChjb2luOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2luKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvaW5TZWFyY2hMaXN0KGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2NvaW4uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1bMjMwcHhdIGJnLXdoaXRlIHAtMiBib3JkZXItWzFweF0gYm9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvaW4udGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjb2luSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2NvaW4ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57Y29pbi5tYXJrZXRfY2FwX3Jhbmt9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImZsZXggbXItNVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtsb2dpbn1cbiAgICAgICAgICAgIGFsdD1cImxvZ2luXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzMwcHhdIHctWzMwcHhdIG1yLTEgbXQtMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7cm91dGVEYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQteGwgbS0yXCI+XG4gICAgICAgICAgICAgIHtyb3V0ZURhdGFbcm91dGVEYXRhLmxlbmd0aCAtIDFdLnVzZXJuYW1lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHRleHQteGwgbS0yXCI+TG9nSW48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvaW5TZWFyY2hMaXN0KGZhbHNlKX0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInNlYXJjaCIsInVzZVN0YXRlIiwidXNlR2V0Q29pbkJ5SWRRdWVyeSIsInVzZURlYm91bmNlIiwiTGluayIsInJhYmJpdCIsImxvZ2luIiwiYXhpb3MiLCJ1c2VRdWVyeSIsIk5hdmlnYXRpb24iLCJjaGlsZHJlbiIsImNvaW5WYWx1ZSIsInNldENvaW5WYWx1ZSIsInNob3dDb2luU2VhcmNoTGlzdCIsInNldFNob3dDb2luU2VhcmNoTGlzdCIsImRlYm91bmNlZFZhbHVlIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwicm91dGUyMDAiLCJyZXNwIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwicm91dGVEYXRhIiwiTG9hZGluZyIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJpbnB1dCIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImVsIiwidGFyZ2V0IiwidmFsdWUiLCJjb2lucyIsIm1hcCIsImNvaW4iLCJpZCIsInRodW1iIiwibmFtZSIsIm1hcmtldF9jYXBfcmFuayIsImxlbmd0aCIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.tsx\n"));

/***/ })

});
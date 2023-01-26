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

/***/ "./components/CoinTable.tsx":
/*!**********************************!*\
  !*** ./components/CoinTable.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! usehooks-ts */ \"./node_modules/usehooks-ts/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CoinTable = (param)=>{\n    let { coinTableData , setParams , params , hasNextPage , fetchNextPage , isFetchingNextPage  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const entry = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useIntersectionObserver)(ref, {});\n    const isVisible = !!(entry === null || entry === void 0 ? void 0 : entry.isIntersecting);\n    console.log(entry);\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>coinTableData, [\n        coinTableData\n    ]);\n    const columns = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>[\n            {\n                Header: \"#\",\n                accessor: \"col1\"\n            },\n            {\n                Header: \"COIN\",\n                accessor: \"col2\"\n            },\n            {\n                Header: \"PRICE\",\n                accessor: \"col3\"\n            },\n            {\n                Header: \"24H\",\n                accessor: \"col4\"\n            },\n            {\n                Header: \"MARKET CAP\",\n                accessor: \"col5\"\n            },\n            {\n                Header: \"7D\",\n                accessor: \"col6\"\n            }\n        ], []);\n    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = (0,react_table__WEBPACK_IMPORTED_MODULE_4__.useTable)({\n        columns,\n        data: data\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if ((entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && hasNextPage) fetchNextPage();\n    }, [\n        entry === null || entry === void 0 ? void 0 : entry.isIntersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                ...getTableBodyProps(),\n                className: \"w-[80%] shadow-lg mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-200 font-bold text-gray-500 text-md\",\n                        children: headerGroups.map((headerGroup)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                ...headerGroup.getHeaderGroupProps(),\n                                className: \"border-[1px] border-gray-300\",\n                                children: headerGroup.headers.map((column)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        ...column.getHeaderProps(),\n                                        className: \"pl-[4%] p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>{\n                                                setParams({\n                                                    sortBy: column.id == \"col2\" ? \"id\" : \"market_cap\",\n                                                    way: params.way === \"asc\" ? \"desc\" : \"asc\"\n                                                });\n                                            },\n                                            type: \"button\",\n                                            children: column.render(\"Header\")\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        ...getTableBodyProps(),\n                        children: rows.map((row, index)=>{\n                            prepareRow(row);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                ref: rows.length - 1 === index ? ref : null,\n                                ...row.getRowProps(),\n                                className: \"border-[1px] border-gray-300\",\n                                children: row.cells.map((cell)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        ...cell.getCellProps(),\n                                        className: \"pl-[4%] py-[10px] font-medium text-md \".concat(cell.column.Header === \"24H\" && cell.value[0] !== \"-\" ? \"text-green-500\" : cell.value[0] === \"-\" && \"text-red-500\"),\n                                        children: cell.column.Header === \"COIN\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"flex\",\n                                            href: \"/\".concat(cell.row.original.col6),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    src: String(cell.row.original.image),\n                                                    alt: \"coinImage\",\n                                                    width: 25,\n                                                    height: 10,\n                                                    className: \"mr-3\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                                    lineNumber: 132,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                cell.render(\"Cell\")\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 25\n                                        }, undefined) : cell.column.Header === \"7D\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-[50%] h-[25%]\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 25\n                                        }, undefined) : cell.render(\"Cell\")\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 21\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            isFetchingNextPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-0 w-[100vw] h-[80px] text-3xl items-center font-bold first-letter bg-blue-500 text-white flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\code\\\\gecko-coin-app\\\\components\\\\CoinTable.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CoinTable, \"Z7sErtFdZatvFuZ7j1ZpRr1md5Y=\", false, function() {\n    return [\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_5__.useIntersectionObserver,\n        react_table__WEBPACK_IMPORTED_MODULE_4__.useTable\n    ];\n});\n_c = CoinTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoinTable);\nvar _c;\n$RefreshReg$(_c, \"CoinTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BSEN3QixLQUFLaEIsTUFBTSxDQUFDaEIsTUFBTSxLQUFLLFNBQVNnQyxLQUFLRSxLQUFLLENBQUMsRUFBRSxLQUFLLE1BQzlDLG1CQUNBRixLQUFLRSxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sY0FBYztrREFHNUNGLEtBQUtoQixNQUFNLENBQUNoQixNQUFNLEtBQUssdUJBQ3RCLDhEQUFDckIsa0RBQUlBOzRDQUNINkIsV0FBVTs0Q0FDVjJCLE1BQU0sSUFBMkIsT0FBdkJILEtBQUtMLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDQyxJQUFJOzs4REFFaEMsOERBQUMzRCxtREFBS0E7b0RBQ0o0RCxLQUFLQyxPQUFPUCxLQUFLTCxHQUFHLENBQUNTLFFBQVEsQ0FBQ0ksS0FBSztvREFDbkNDLEtBQUk7b0RBQ0pDLE9BQU87b0RBQ1BDLFFBQVE7b0RBQ1JuQyxXQUFVOzs7Ozs7Z0RBRVh3QixLQUFLUCxNQUFNLENBQUM7Ozs7Ozt3REFFYk8sS0FBS2hCLE1BQU0sQ0FBQ2hCLE1BQU0sS0FBSyxxQkFDekIsOERBQUNPOzRDQUFJQyxXQUFVOzs7Ozt3REFPZndCLEtBQUtQLE1BQU0sQ0FBQyxPQUNiOzs7Ozs7Z0NBR1A7Ozs7Ozt3QkFHTjs7Ozs7Ozs7Ozs7O1lBR0hsQyxvQ0FDQyw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDb0M7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0F0Sk0zRDs7UUFnQlVELGdFQUF1QkE7UUFzQ25DRCxpREFBUUE7OztLQXRETkU7QUF3Sk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2luVGFibGUudHN4PzQ1MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tIFwicmVhY3QtdGFibGVcIjtcclxuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwidXNlaG9va3MtdHNcIjtcclxuXHJcbmludGVyZmFjZSBDb2luVGFibGVEYXRhIHtcclxuICBjb2wxOiBudW1iZXI7XHJcbiAgY29sMjogc3RyaW5nO1xyXG4gIGNvbDM6IHN0cmluZztcclxuICBjb2w0OiBzdHJpbmc7XHJcbiAgY29sNTogc3RyaW5nO1xyXG4gIGNvbDY6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29pblRhYmxlOiBSZWFjdC5GQzx7XHJcbiAgY29pblRhYmxlRGF0YTogQ29pblRhYmxlRGF0YVtdO1xyXG4gIHNldFBhcmFtczogKHsgc29ydEJ5LCB3YXkgfTogYW55KSA9PiB2b2lkO1xyXG4gIHBhcmFtczogeyBzb3J0Qnk6IHN0cmluZzsgd2F5OiBzdHJpbmcgfTtcclxuICBoYXNOZXh0UGFnZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBmZXRjaE5leHRQYWdlOiAoKSA9PiB2b2lkO1xyXG4gIGlzRmV0Y2hpbmdOZXh0UGFnZTogYm9vbGVhbjtcclxufT4gPSAoe1xyXG4gIGNvaW5UYWJsZURhdGEsXHJcbiAgc2V0UGFyYW1zLFxyXG4gIHBhcmFtcyxcclxuICBoYXNOZXh0UGFnZSxcclxuICBmZXRjaE5leHRQYWdlLFxyXG4gIGlzRmV0Y2hpbmdOZXh0UGFnZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MVGFibGVSb3dFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgZW50cnkgPSB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcihyZWYsIHt9KTtcclxuICBjb25zdCBpc1Zpc2libGUgPSAhIWVudHJ5Py5pc0ludGVyc2VjdGluZztcclxuICBjb25zb2xlLmxvZyhlbnRyeSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IGNvaW5UYWJsZURhdGEsIFtjb2luVGFibGVEYXRhXSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIiNcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJjb2wxXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIkNPSU5cIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJjb2wyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6IFwiUFJJQ0VcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJjb2wzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6IFwiMjRIXCIsXHJcbiAgICAgICAgYWNjZXNzb3I6IFwiY29sNFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIk1BUktFVCBDQVBcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJjb2w1XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6IFwiN0RcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJjb2w2XCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCB7IGdldFRhYmxlUHJvcHMsIGdldFRhYmxlQm9keVByb3BzLCBoZWFkZXJHcm91cHMsIHJvd3MsIHByZXBhcmVSb3cgfSA9XHJcbiAgICB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGE6IGRhdGEgYXMgYW55IH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVudHJ5Py5pc0ludGVyc2VjdGluZyAmJiBoYXNOZXh0UGFnZSkgZmV0Y2hOZXh0UGFnZSgpO1xyXG4gIH0sIFtlbnRyeT8uaXNJbnRlcnNlY3RpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfSBjbGFzc05hbWU9XCJ3LVs4MCVdIHNoYWRvdy1sZyBtdC0xMFwiPlxyXG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBmb250LWJvbGQgdGV4dC1ncmF5LTUwMCB0ZXh0LW1kXCI+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfSBjbGFzc05hbWU9XCJwbC1bNCVdIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeTogY29sdW1uLmlkID09IFwiY29sMlwiID8gXCJpZFwiIDogXCJtYXJrZXRfY2FwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXk6IHBhcmFtcy53YXkgPT09IFwiYXNjXCIgPyBcImRlc2NcIiA6IFwiYXNjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICByZWY9e3Jvd3MubGVuZ3RoIC0gMSA9PT0gaW5kZXggPyByZWYgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgey4uLnJvdy5nZXRSb3dQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGwtWzQlXSBweS1bMTBweF0gZm9udC1tZWRpdW0gdGV4dC1tZCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNvbHVtbi5IZWFkZXIgPT09IFwiMjRIXCIgJiYgY2VsbC52YWx1ZVswXSAhPT0gXCItXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC52YWx1ZVswXSA9PT0gXCItXCIgJiYgXCJ0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuY29sdW1uLkhlYWRlciA9PT0gXCJDT0lOXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2NlbGwucm93Lm9yaWdpbmFsLmNvbDZ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtTdHJpbmcoY2VsbC5yb3cub3JpZ2luYWwuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29pbkltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcihcIkNlbGxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmNvbHVtbi5IZWFkZXIgPT09IFwiN0RcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1MCVdIGgtWzI1JV1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtTdHJpbmcoY2VsbC5yb3cub3JpZ2luYWwuY29sNil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e1N0cmluZyhjZWxsLnJvdy5vcmlnaW5hbC5jb2w0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcihcIkNlbGxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7aXNGZXRjaGluZ05leHRQYWdlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIHctWzEwMHZ3XSBoLVs4MHB4XSB0ZXh0LTN4bCBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIGZpcnN0LWxldHRlciBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29pblRhYmxlO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVRhYmxlIiwidXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJDb2luVGFibGUiLCJjb2luVGFibGVEYXRhIiwic2V0UGFyYW1zIiwicGFyYW1zIiwiaGFzTmV4dFBhZ2UiLCJmZXRjaE5leHRQYWdlIiwiaXNGZXRjaGluZ05leHRQYWdlIiwicmVmIiwiZW50cnkiLCJpc1Zpc2libGUiLCJpc0ludGVyc2VjdGluZyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29sdW1ucyIsIkhlYWRlciIsImFjY2Vzc29yIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJ0ciIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwidGQiLCJnZXRIZWFkZXJQcm9wcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzb3J0QnkiLCJpZCIsIndheSIsInR5cGUiLCJyZW5kZXIiLCJ0Ym9keSIsInJvdyIsImluZGV4IiwibGVuZ3RoIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJ2YWx1ZSIsImhyZWYiLCJvcmlnaW5hbCIsImNvbDYiLCJzcmMiLCJTdHJpbmciLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CoinTable.tsx\n"));

/***/ })

});
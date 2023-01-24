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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CoinTable = (param)=>{\n    let { coinTableData , setSortBy  } = param;\n    _s();\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>coinTableData, []);\n    const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            {\n                Header: \"#\",\n                accessor: \"market_cap_rank\"\n            },\n            {\n                Header: \"COIN\",\n                accessor: \"name\"\n            },\n            {\n                Header: \"PRICE\",\n                accessor: \"current_price\"\n            },\n            {\n                Header: \"24H\",\n                accessor: \"price_change_percentage_24h\"\n            },\n            {\n                Header: \"MARKET CAP\",\n                accessor: \"market_cap\"\n            },\n            {\n                Header: \"7D\",\n                accessor: \"col6\"\n            }\n        ], []);\n    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = (0,react_table__WEBPACK_IMPORTED_MODULE_3__.useTable)({\n        columns,\n        data: data\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            ...getTableBodyProps(),\n            className: \"w-[80%] shadow-lg mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"bg-gray-200\",\n                    children: headerGroups.map((headerGroup)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            ...headerGroup.getHeaderGroupProps(),\n                            className: \"border-[1px] border-gray-300\",\n                            children: headerGroup.headers.map((column)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...column.getHeaderProps(),\n                                    className: \"p-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>{\n                                            setSortBy(column.id);\n                                        },\n                                        type: \"button\",\n                                        children: column.render(\"Header\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    ...getTableBodyProps(),\n                    children: rows.map((row)=>{\n                        prepareRow(row);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            ...row.getRowProps(),\n                            className: \"border-[1px] border-gray-300\",\n                            children: row.cells.map((cell)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...cell.getCellProps(),\n                                    className: \"p-4 \".concat(cell.column.Header === \"24H\" && cell.value[0] !== \"-\" ? \"text-green-500\" : cell.value[0] === \"-\" && \"text-red-500\"),\n                                    children: cell.column.Header === \"COIN\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\".concat(cell.row.original.col7),\n                                        children: cell.render(\"Cell\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, undefined) : cell.render(\"Cell\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CoinTable, \"2M+cEGJjZRLIqxt38XQe/AMxJJk=\", false, function() {\n    return [\n        react_table__WEBPACK_IMPORTED_MODULE_3__.useTable\n    ];\n});\n_c = CoinTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoinTable);\nvar _c;\n$RefreshReg$(_c, \"CoinTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvaW5UYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRztBQUNPO0FBYXZDLE1BQU1HLFlBR0QsU0FBa0M7UUFBakMsRUFBRUMsY0FBYSxFQUFFQyxVQUFTLEVBQUU7O0lBQ2hDLE1BQU1DLE9BQU9MLDhDQUFPQSxDQUFDLElBQU1HLGVBQWUsRUFBRTtJQUU1QyxNQUFNRyxVQUFVTiw4Q0FBT0EsQ0FDckIsSUFBTTtZQUNKO2dCQUNFTyxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7WUFFQTtnQkFDRUQsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VELFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtZQUNBO2dCQUNFRCxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VELFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtTQUNELEVBQ0QsRUFBRTtJQUdKLE1BQU0sRUFBRUMsY0FBYSxFQUFFQyxrQkFBaUIsRUFBRUMsYUFBWSxFQUFFQyxLQUFJLEVBQUVDLFdBQVUsRUFBRSxHQUN4RVoscURBQVFBLENBQUM7UUFBRUs7UUFBU0QsTUFBTUE7SUFBWTtJQUN4QyxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBTyxHQUFHTixtQkFBbUI7WUFBRUssV0FBVTs7OEJBQ3hDLDhEQUFDRTtvQkFBTUYsV0FBVTs4QkFDZEosYUFBYU8sR0FBRyxDQUFDLENBQUNDLGNBQXFCO3dCQUN0QyxxQkFDRSw4REFBQ0M7NEJBQ0UsR0FBR0QsWUFBWUUsbUJBQW1CLEVBQUU7NEJBQ3JDTixXQUFVO3NDQUVUSSxZQUFZRyxPQUFPLENBQUNKLEdBQUcsQ0FBQyxDQUFDSyxTQUFnQjtnQ0FDeEMscUJBQ0UsOERBQUNDO29DQUFJLEdBQUdELE9BQU9FLGNBQWMsRUFBRTtvQ0FBRVYsV0FBVTs4Q0FDekMsNEVBQUNXO3dDQUNDQyxTQUFTLElBQU07NENBQ2J2QixVQUFVbUIsT0FBT0ssRUFBRTt3Q0FFckI7d0NBQ0FDLE1BQUs7a0RBRUpOLE9BQU9PLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7NEJBSXZCOzs7Ozs7b0JBR047Ozs7Ozs4QkFFRiw4REFBQ0M7b0JBQU8sR0FBR3JCLG1CQUFtQjs4QkFDM0JFLEtBQUtNLEdBQUcsQ0FBQyxDQUFDYyxNQUFRO3dCQUNqQm5CLFdBQVdtQjt3QkFFWCxxQkFDRSw4REFBQ1o7NEJBQ0UsR0FBR1ksSUFBSUMsV0FBVyxFQUFFOzRCQUNyQmxCLFdBQVU7c0NBRVRpQixJQUFJRSxLQUFLLENBQUNoQixHQUFHLENBQUMsQ0FBQ2lCLE9BQVM7Z0NBQ3ZCLHFCQUNFLDhEQUFDWDtvQ0FDRSxHQUFHVyxLQUFLQyxZQUFZLEVBQUU7b0NBQ3ZCckIsV0FBVyxPQUlWLE9BSENvQixLQUFLWixNQUFNLENBQUNoQixNQUFNLEtBQUssU0FBUzRCLEtBQUtFLEtBQUssQ0FBQyxFQUFFLEtBQUssTUFDOUMsbUJBQ0FGLEtBQUtFLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxjQUFjOzhDQUc1Q0YsS0FBS1osTUFBTSxDQUFDaEIsTUFBTSxLQUFLLHVCQUN0Qiw4REFBQ1Isa0RBQUlBO3dDQUFDdUMsTUFBTSxJQUEyQixPQUF2QkgsS0FBS0gsR0FBRyxDQUFDTyxRQUFRLENBQUNDLElBQUk7a0RBQ25DTCxLQUFLTCxNQUFNLENBQUM7Ozs7O29EQUdmSyxLQUFLTCxNQUFNLENBQUMsT0FDYjs7Ozs7OzRCQUdQOzs7Ozs7b0JBR047Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0F4R001Qjs7UUFzQ0ZELGlEQUFRQTs7O0tBdENOQztBQTBHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvaW5UYWJsZS50c3g/NDUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gXCJyZWFjdC10YWJsZVwiO1xuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgeyBDb2luRGV0YWlscyB9IGZyb20gXCJAL3NlcnZpY2VzL2ludGVyZmFjZVwiO1xuXG5pbnRlcmZhY2UgQ29pblRhYmxlRGF0YSB7XG4gIG1hcmtldF9jYXBfcmFuazogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGN1cnJlbnRfcHJpY2U6IHN0cmluZztcbiAgcHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoOiBzdHJpbmc7XG4gIG1hcmtldF9jYXA6IHN0cmluZztcbiAgY29sNjogc3RyaW5nO1xufVxuXG5jb25zdCBDb2luVGFibGU6IFJlYWN0LkZDPHtcbiAgY29pblRhYmxlRGF0YTogQ29pblRhYmxlRGF0YVtdO1xuICBzZXRTb3J0Qnk6ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbn0+ID0gKHsgY29pblRhYmxlRGF0YSwgc2V0U29ydEJ5IH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gY29pblRhYmxlRGF0YSwgW10pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIiNcIixcbiAgICAgICAgYWNjZXNzb3I6IFwibWFya2V0X2NhcF9yYW5rXCIsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJDT0lOXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcIm5hbWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJQUklDRVwiLFxuICAgICAgICBhY2Nlc3NvcjogXCJjdXJyZW50X3ByaWNlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiMjRIXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIk1BUktFVCBDQVBcIixcbiAgICAgICAgYWNjZXNzb3I6IFwibWFya2V0X2NhcFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIjdEXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHsgZ2V0VGFibGVQcm9wcywgZ2V0VGFibGVCb2R5UHJvcHMsIGhlYWRlckdyb3Vwcywgcm93cywgcHJlcGFyZVJvdyB9ID1cbiAgICB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGE6IGRhdGEgYXMgYW55IH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0gY2xhc3NOYW1lPVwidy1bODAlXSBzaGFkb3ctbGcgbXQtMTBcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwXCI+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfSBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRCeShjb2x1bW4uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICB7Li4ucm93LmdldFJvd1Byb3BzKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNvbHVtbi5IZWFkZXIgPT09IFwiMjRIXCIgJiYgY2VsbC52YWx1ZVswXSAhPT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLnZhbHVlWzBdID09PSBcIi1cIiAmJiBcInRleHQtcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5jb2x1bW4uSGVhZGVyID09PSBcIkNPSU5cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjZWxsLnJvdy5vcmlnaW5hbC5jb2w3fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcihcIkNlbGxcIilcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pblRhYmxlO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VNZW1vIiwidXNlVGFibGUiLCJDb2luVGFibGUiLCJjb2luVGFibGVEYXRhIiwic2V0U29ydEJ5IiwiZGF0YSIsImNvbHVtbnMiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsIm1hcCIsImhlYWRlckdyb3VwIiwidHIiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsInRkIiwiZ2V0SGVhZGVyUHJvcHMiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJ0eXBlIiwicmVuZGVyIiwidGJvZHkiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsInZhbHVlIiwiaHJlZiIsIm9yaWdpbmFsIiwiY29sNyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CoinTable.tsx\n"));

/***/ })

});
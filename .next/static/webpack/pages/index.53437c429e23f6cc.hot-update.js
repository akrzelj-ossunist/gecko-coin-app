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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CoinTable = (param)=>{\n    let { coinTableData , setSortBy , getUpperLower  } = param;\n    _s();\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>coinTableData, []);\n    const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            {\n                Header: \"#\",\n                accessor: \"col1\"\n            },\n            {\n                Header: \"COIN\",\n                accessor: \"col2\"\n            },\n            {\n                Header: \"PRICE\",\n                accessor: \"col3\"\n            },\n            {\n                Header: \"24H\",\n                accessor: \"col4\"\n            },\n            {\n                Header: \"MARKET CAP\",\n                accessor: \"col5\"\n            },\n            {\n                Header: \"7D\",\n                accessor: \"col6\"\n            }\n        ], []);\n    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = (0,react_table__WEBPACK_IMPORTED_MODULE_3__.useTable)({\n        columns,\n        data: data\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            ...getTableBodyProps(),\n            className: \"w-[80%] shadow-lg mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"bg-gray-200\",\n                    children: headerGroups.map((headerGroup)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            ...headerGroup.getHeaderGroupProps(),\n                            className: \"border-[1px] border-gray-300\",\n                            children: headerGroup.headers.map((column)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...column.getHeaderProps(),\n                                    className: \"p-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>{\n                                            setSortBy(column.id);\n                                            getUpperLower();\n                                        },\n                                        type: \"button\",\n                                        children: column.render(\"Header\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    ...getTableBodyProps(),\n                    children: rows.map((row)=>{\n                        prepareRow(row);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            ...row.getRowProps(),\n                            className: \"border-[1px] border-gray-300\",\n                            children: row.cells.map((cell)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...cell.getCellProps(),\n                                    className: \"p-4 \".concat(cell.column.Header === \"24H\" && cell.value[0] !== \"-\" ? \"text-green-500\" : cell.value[0] === \"-\" && \"text-red-500\"),\n                                    children: cell.column.Header === \"COIN\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\".concat(cell.row.original.col7),\n                                        children: cell.render(\"Cell\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, undefined) : cell.render(\"Cell\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CoinTable, \"2M+cEGJjZRLIqxt38XQe/AMxJJk=\", false, function() {\n    return [\n        react_table__WEBPACK_IMPORTED_MODULE_3__.useTable\n    ];\n});\n_c = CoinTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoinTable);\nvar _c;\n$RefreshReg$(_c, \"CoinTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvaW5UYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRztBQUNPO0FBYXZDLE1BQU1HLFlBSUQsU0FBaUQ7UUFBaEQsRUFBRUMsY0FBYSxFQUFFQyxVQUFTLEVBQUVDLGNBQWEsRUFBRTs7SUFDL0MsTUFBTUMsT0FBT04sOENBQU9BLENBQUMsSUFBTUcsZUFBZSxFQUFFO0lBRTVDLE1BQU1JLFVBQVVQLDhDQUFPQSxDQUNyQixJQUFNO1lBQ0o7Z0JBQ0VRLFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtZQUVBO2dCQUNFRCxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VELFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtZQUNBO2dCQUNFRCxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1NBQ0QsRUFDRCxFQUFFO0lBR0osTUFBTSxFQUFFQyxjQUFhLEVBQUVDLGtCQUFpQixFQUFFQyxhQUFZLEVBQUVDLEtBQUksRUFBRUMsV0FBVSxFQUFFLEdBQ3hFYixxREFBUUEsQ0FBQztRQUFFTTtRQUFTRCxNQUFNQTtJQUFZO0lBQ3hDLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFPLEdBQUdOLG1CQUFtQjtZQUFFSyxXQUFVOzs4QkFDeEMsOERBQUNFO29CQUFNRixXQUFVOzhCQUNkSixhQUFhTyxHQUFHLENBQUMsQ0FBQ0MsY0FBcUI7d0JBQ3RDLHFCQUNFLDhEQUFDQzs0QkFDRSxHQUFHRCxZQUFZRSxtQkFBbUIsRUFBRTs0QkFDckNOLFdBQVU7c0NBRVRJLFlBQVlHLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLENBQUNLLFNBQWdCO2dDQUN4QyxxQkFDRSw4REFBQ0M7b0NBQUksR0FBR0QsT0FBT0UsY0FBYyxFQUFFO29DQUFFVixXQUFVOzhDQUN6Qyw0RUFBQ1c7d0NBQ0NDLFNBQVMsSUFBTTs0Q0FDYnhCLFVBQVVvQixPQUFPSyxFQUFFOzRDQUNuQnhCO3dDQUNGO3dDQUNBeUIsTUFBSztrREFFSk4sT0FBT08sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs0QkFJdkI7Ozs7OztvQkFHTjs7Ozs7OzhCQUVGLDhEQUFDQztvQkFBTyxHQUFHckIsbUJBQW1COzhCQUMzQkUsS0FBS00sR0FBRyxDQUFDLENBQUNjLE1BQVE7d0JBQ2pCbkIsV0FBV21CO3dCQUVYLHFCQUNFLDhEQUFDWjs0QkFDRSxHQUFHWSxJQUFJQyxXQUFXLEVBQUU7NEJBQ3JCbEIsV0FBVTtzQ0FFVGlCLElBQUlFLEtBQUssQ0FBQ2hCLEdBQUcsQ0FBQyxDQUFDaUIsT0FBUztnQ0FDdkIscUJBQ0UsOERBQUNYO29DQUNFLEdBQUdXLEtBQUtDLFlBQVksRUFBRTtvQ0FDdkJyQixXQUFXLE9BSVYsT0FIQ29CLEtBQUtaLE1BQU0sQ0FBQ2hCLE1BQU0sS0FBSyxTQUFTNEIsS0FBS0UsS0FBSyxDQUFDLEVBQUUsS0FBSyxNQUM5QyxtQkFDQUYsS0FBS0UsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLGNBQWM7OENBRzVDRixLQUFLWixNQUFNLENBQUNoQixNQUFNLEtBQUssdUJBQ3RCLDhEQUFDVCxrREFBSUE7d0NBQUN3QyxNQUFNLElBQTJCLE9BQXZCSCxLQUFLSCxHQUFHLENBQUNPLFFBQVEsQ0FBQ0MsSUFBSTtrREFDbkNMLEtBQUtMLE1BQU0sQ0FBQzs7Ozs7b0RBR2ZLLEtBQUtMLE1BQU0sQ0FBQyxPQUNiOzs7Ozs7NEJBR1A7Ozs7OztvQkFHTjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQXpHTTdCOztRQXVDRkQsaURBQVFBOzs7S0F2Q05DO0FBMkdOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29pblRhYmxlLnRzeD80NTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSBcInJlYWN0LXRhYmxlXCI7XG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IENvaW5EZXRhaWxzIH0gZnJvbSBcIkAvc2VydmljZXMvaW50ZXJmYWNlXCI7XG5cbmludGVyZmFjZSBDb2luVGFibGVEYXRhIHtcbiAgY29sMTogbnVtYmVyO1xuICBjb2wyOiBzdHJpbmc7XG4gIGNvbDM6IHN0cmluZztcbiAgY29sNDogc3RyaW5nO1xuICBjb2w1OiBzdHJpbmc7XG4gIGNvbDY6IHN0cmluZztcbn1cblxuY29uc3QgQ29pblRhYmxlOiBSZWFjdC5GQzx7XG4gIGNvaW5UYWJsZURhdGE6IENvaW5UYWJsZURhdGFbXTtcbiAgc2V0U29ydEJ5OiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGdldFVwcGVyTG93ZXI6ICgpID0+IHZvaWQ7XG59PiA9ICh7IGNvaW5UYWJsZURhdGEsIHNldFNvcnRCeSwgZ2V0VXBwZXJMb3dlciB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IGNvaW5UYWJsZURhdGEsIFtdKTtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCIjXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDFcIixcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIkNPSU5cIixcbiAgICAgICAgYWNjZXNzb3I6IFwiY29sMlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIlBSSUNFXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCIyNEhcIixcbiAgICAgICAgYWNjZXNzb3I6IFwiY29sNFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIk1BUktFVCBDQVBcIixcbiAgICAgICAgYWNjZXNzb3I6IFwiY29sNVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIjdEXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IHsgZ2V0VGFibGVQcm9wcywgZ2V0VGFibGVCb2R5UHJvcHMsIGhlYWRlckdyb3Vwcywgcm93cywgcHJlcGFyZVJvdyB9ID1cbiAgICB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGE6IGRhdGEgYXMgYW55IH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0gY2xhc3NOYW1lPVwidy1bODAlXSBzaGFkb3ctbGcgbXQtMTBcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwXCI+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfSBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRCeShjb2x1bW4uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRVcHBlckxvd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICB7Li4ucm93LmdldFJvd1Byb3BzKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNvbHVtbi5IZWFkZXIgPT09IFwiMjRIXCIgJiYgY2VsbC52YWx1ZVswXSAhPT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLnZhbHVlWzBdID09PSBcIi1cIiAmJiBcInRleHQtcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5jb2x1bW4uSGVhZGVyID09PSBcIkNPSU5cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjZWxsLnJvdy5vcmlnaW5hbC5jb2w3fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcihcIkNlbGxcIilcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pblRhYmxlO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VNZW1vIiwidXNlVGFibGUiLCJDb2luVGFibGUiLCJjb2luVGFibGVEYXRhIiwic2V0U29ydEJ5IiwiZ2V0VXBwZXJMb3dlciIsImRhdGEiLCJjb2x1bW5zIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJtYXAiLCJoZWFkZXJHcm91cCIsInRyIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJ0ZCIsImdldEhlYWRlclByb3BzIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwidHlwZSIsInJlbmRlciIsInRib2R5Iiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJ2YWx1ZSIsImhyZWYiLCJvcmlnaW5hbCIsImNvbDciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CoinTable.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CoinTable = (param)=>{\n    let { coinTableData  } = param;\n    _s();\n    const sortCoinList = (col)=>{\n        coinTableData.sort((p1, p2)=>{\n            console.log(p1[col], p2, \" --\", col);\n            return p1.col2 > p2.col2 ? 1 : p1.col2 < p2.col2 ? -1 : 0;\n        });\n    };\n    sortCoinList(\"col1\");\n    const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>coinTableData, []);\n    const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            {\n                Header: \"#\",\n                accessor: \"col1\"\n            },\n            {\n                Header: \"COIN\",\n                accessor: \"col2\"\n            },\n            {\n                Header: \"PRICE\",\n                accessor: \"col3\"\n            },\n            {\n                Header: \"24H\",\n                accessor: \"col4\"\n            },\n            {\n                Header: \"MARKET CAP\",\n                accessor: \"col5\"\n            },\n            {\n                Header: \"7D\",\n                accessor: \"col6\"\n            }\n        ], []);\n    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = (0,react_table__WEBPACK_IMPORTED_MODULE_3__.useTable)({\n        columns,\n        data: data\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            ...getTableBodyProps(),\n            className: \"w-[80%] shadow-lg mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    className: \"bg-gray-200\",\n                    children: headerGroups.map((headerGroup)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            ...headerGroup.getHeaderGroupProps(),\n                            className: \"border-[1px] border-gray-300\",\n                            children: headerGroup.headers.map((column)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...column.getHeaderProps(),\n                                    className: \"p-4\",\n                                    children: column.render(\"Header\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    ...getTableBodyProps(),\n                    children: rows.map((row)=>{\n                        prepareRow(row);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            ...row.getRowProps(),\n                            className: \"border-[1px] border-gray-300\",\n                            children: row.cells.map((cell)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    ...cell.getCellProps(),\n                                    className: \"p-4 \".concat(cell.column.Header === \"24H\" && cell.value[0] !== \"-\" ? \"text-green-500\" : cell.value[0] === \"-\" && \"text-red-500\"),\n                                    children: cell.column.Header === \"COIN\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\".concat(cell.row.original.col7),\n                                        children: cell.render(\"Cell\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, undefined) : cell.render(\"Cell\")\n                                }, void 0, false, {\n                                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/components/CoinTable.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CoinTable, \"2M+cEGJjZRLIqxt38XQe/AMxJJk=\", false, function() {\n    return [\n        react_table__WEBPACK_IMPORTED_MODULE_3__.useTable\n    ];\n});\n_c = CoinTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoinTable);\nvar _c;\n$RefreshReg$(_c, \"CoinTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2luVGFibGUudHN4PzQ1MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tIFwicmVhY3QtdGFibGVcIjtcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgQ29pbkRldGFpbHMgfSBmcm9tIFwiQC9zZXJ2aWNlcy9pbnRlcmZhY2VcIjtcblxuaW50ZXJmYWNlIENvaW5UYWJsZURhdGEge1xuICBjb2wxOiBudW1iZXI7XG4gIGNvbDI6IHN0cmluZztcbiAgY29sMzogc3RyaW5nO1xuICBjb2w0OiBzdHJpbmc7XG4gIGNvbDU6IHN0cmluZztcbiAgY29sNjogc3RyaW5nO1xufVxuXG5jb25zdCBDb2luVGFibGU6IFJlYWN0LkZDPHsgY29pblRhYmxlRGF0YTogQ29pblRhYmxlRGF0YVtdIH0+ID0gKHtcbiAgY29pblRhYmxlRGF0YSxcbn0pID0+IHtcbiAgY29uc3Qgc29ydENvaW5MaXN0ID0gKGNvbDogbnVtYmVyIHwgc3RyaW5nKSA9PiB7XG4gICAgY29pblRhYmxlRGF0YS5zb3J0KChwMSwgcDIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHAxW2NvbF0sIHAyLCBcIiAtLVwiLCBjb2wpO1xuICAgICAgcmV0dXJuIHAxLmNvbDIgPiBwMi5jb2wyID8gMSA6IHAxLmNvbDIgPCBwMi5jb2wyID8gLTEgOiAwO1xuICAgIH0pO1xuICB9O1xuICBzb3J0Q29pbkxpc3QoXCJjb2wxXCIpO1xuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBjb2luVGFibGVEYXRhLCBbXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiI1wiLFxuICAgICAgICBhY2Nlc3NvcjogXCJjb2wxXCIsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJDT0lOXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJQUklDRVwiLFxuICAgICAgICBhY2Nlc3NvcjogXCJjb2wzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiMjRIXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJNQVJLRVQgQ0FQXCIsXG4gICAgICAgIGFjY2Vzc29yOiBcImNvbDVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCI3RFwiLFxuICAgICAgICBhY2Nlc3NvcjogXCJjb2w2XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCB7IGdldFRhYmxlUHJvcHMsIGdldFRhYmxlQm9keVByb3BzLCBoZWFkZXJHcm91cHMsIHJvd3MsIHByZXBhcmVSb3cgfSA9XG4gICAgdXNlVGFibGUoeyBjb2x1bW5zLCBkYXRhOiBkYXRhIGFzIGFueSB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlQm9keVByb3BzKCl9IGNsYXNzTmFtZT1cInctWzgwJV0gc2hhZG93LWxnIG10LTEwXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0gY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICB7Li4ucm93LmdldFJvd1Byb3BzKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNvbHVtbi5IZWFkZXIgPT09IFwiMjRIXCIgJiYgY2VsbC52YWx1ZVswXSAhPT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JlZW4tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLnZhbHVlWzBdID09PSBcIi1cIiAmJiBcInRleHQtcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5jb2x1bW4uSGVhZGVyID09PSBcIkNPSU5cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjZWxsLnJvdy5vcmlnaW5hbC5jb2w3fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcihcIkNlbGxcIilcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pblRhYmxlO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VNZW1vIiwidXNlVGFibGUiLCJDb2luVGFibGUiLCJjb2luVGFibGVEYXRhIiwic29ydENvaW5MaXN0IiwiY29sIiwic29ydCIsInAxIiwicDIiLCJjb25zb2xlIiwibG9nIiwiY29sMiIsImRhdGEiLCJjb2x1bW5zIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJtYXAiLCJoZWFkZXJHcm91cCIsInRyIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJ0ZCIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwidGJvZHkiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsInZhbHVlIiwiaHJlZiIsIm9yaWdpbmFsIiwiY29sNyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CoinTable.tsx\n"));

/***/ })

});
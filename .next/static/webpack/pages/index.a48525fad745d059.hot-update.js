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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst switchToUSD = (price)=>{\n    let fixedPrice = price;\n    let rest = \"\";\n    if (price.indexOf(\".\") >= 0) {\n        rest = price.substring(price.indexOf(\".\"), price.length);\n        fixedPrice = price.substring(0, price.indexOf(\".\"));\n    }\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    fixedPrice = fixedPrice.replace(/.{3}/g, \"$&,\");\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    if (fixedPrice[0] === \",\") fixedPrice = fixedPrice.substring(1, fixedPrice.length);\n    return fixedPrice + rest;\n};\nfunction Home() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [upperLower, setUpperLower] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { data: coinData , isLoading  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sortBy);\n    const getUppetLower = ()=>{\n        coinData.sort((p1, p2)=>p1[col] > p2[col] ? 1 : p1[col] < p2[col] ? -1 : 0);\n    };\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.map((coin)=>{\n        const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n        const currentPrice = switchToUSD(String(coin.current_price)) + \" $\";\n        const marketCap = switchToUSD(String(coin.market_cap)) + \" $\";\n        return {\n            col1: coin.market_cap_rank,\n            col2: coin.name,\n            col3: currentPrice,\n            col4: priceChangePercentage24H,\n            col5: marketCap,\n            col6: \"graph\",\n            col7: coin.id\n        };\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: coinTableData\n        }, void 0, false, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"JA9Nz/yh1hKFkK9ZgneKgGiBrPQ=\", false, function() {\n    return [\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0k7QUFFbEI7QUFFakMsTUFBTUcsY0FBYyxDQUFDQyxRQUEwQjtJQUM3QyxJQUFJQyxhQUFhRDtJQUNqQixJQUFJRSxPQUFPO0lBQ1gsSUFBSUYsTUFBTUcsT0FBTyxDQUFDLFFBQVEsR0FBRztRQUMzQkQsT0FBT0YsTUFBTUksU0FBUyxDQUFDSixNQUFNRyxPQUFPLENBQUMsTUFBTUgsTUFBTUssTUFBTTtRQUN2REosYUFBYUQsTUFBTUksU0FBUyxDQUFDLEdBQUdKLE1BQU1HLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0RGLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRFAsYUFBYUEsV0FBV1EsT0FBTyxDQUFDLFNBQVM7SUFDekNSLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRCxJQUFJUCxVQUFVLENBQUMsRUFBRSxLQUFLLEtBQ3BCQSxhQUFhQSxXQUFXRyxTQUFTLENBQUMsR0FBR0gsV0FBV0ksTUFBTTtJQUN4RCxPQUFPSixhQUFhQztBQUN0QjtBQUVlLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxFQUFFaUIsTUFBTUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR3BCLDhEQUFnQkEsQ0FBQ2M7SUFDdkQsTUFBTU8sZ0JBQWdCLElBQU07UUFDMUJGLFNBQVNHLElBQUksQ0FBQyxDQUFDQyxJQUFJQyxLQUNqQkQsRUFBRSxDQUFDRSxJQUFJLEdBQUdELEVBQUUsQ0FBQ0MsSUFBSSxHQUFHLElBQUlGLEVBQUUsQ0FBQ0UsSUFBSSxHQUFHRCxFQUFFLENBQUNDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztJQUV0RDtJQUVBLE1BQU1DLGdCQUFnQlAscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVUSxHQUFHLENBQUMsQ0FBQ0MsT0FBc0I7UUFDekQsTUFBTUMsMkJBQ0pDLEtBQUtDLEtBQUssQ0FBQ0gsS0FBS0ksMkJBQTJCLEdBQUcsT0FBTyxNQUFNO1FBQzdELE1BQU1DLGVBQWUvQixZQUFZZ0MsT0FBT04sS0FBS08sYUFBYSxLQUFLO1FBQy9ELE1BQU1DLFlBQVlsQyxZQUFZZ0MsT0FBT04sS0FBS1MsVUFBVSxLQUFLO1FBQ3pELE9BQU87WUFDTEMsTUFBTVYsS0FBS1csZUFBZTtZQUMxQkMsTUFBTVosS0FBS2EsSUFBSTtZQUNmQyxNQUFNVDtZQUNOVSxNQUFNZDtZQUNOZSxNQUFNUjtZQUNOUyxNQUFNO1lBQ05DLE1BQU1sQixLQUFLbUIsRUFBRTtRQUNmO0lBQ0Y7SUFDQSxJQUFJM0IsV0FBVyxxQkFBTyw4REFBQzRCO2tCQUFFOzs7Ozs7SUFFekIscUJBQ0U7a0JBQ0UsNEVBQUNqRCw2REFBU0E7WUFBQzJCLGVBQWVBOzs7Ozs7O0FBR2hDLENBQUM7R0FoQ3VCYjs7UUFHZ0JiLDBEQUFnQkE7OztLQUhoQ2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvaW5UYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL0NvaW5UYWJsZVwiO1xuaW1wb3J0IHVzZUdldENvaW5zUXVlcnkgZnJvbSBcIkAvc2VydmljZXMvZ2V0Q29pbnNcIjtcbmltcG9ydCB7IENvaW5EZXRhaWxzIH0gZnJvbSBcIkAvc2VydmljZXMvaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzd2l0Y2hUb1VTRCA9IChwcmljZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgbGV0IGZpeGVkUHJpY2UgPSBwcmljZTtcbiAgbGV0IHJlc3QgPSBcIlwiO1xuICBpZiAocHJpY2UuaW5kZXhPZihcIi5cIikgPj0gMCkge1xuICAgIHJlc3QgPSBwcmljZS5zdWJzdHJpbmcocHJpY2UuaW5kZXhPZihcIi5cIiksIHByaWNlLmxlbmd0aCk7XG4gICAgZml4ZWRQcmljZSA9IHByaWNlLnN1YnN0cmluZygwLCBwcmljZS5pbmRleE9mKFwiLlwiKSk7XG4gIH1cbiAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2Uuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnJlcGxhY2UoLy57M30vZywgXCIkJixcIik7XG4gIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICBpZiAoZml4ZWRQcmljZVswXSA9PT0gXCIsXCIpXG4gICAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2Uuc3Vic3RyaW5nKDEsIGZpeGVkUHJpY2UubGVuZ3RoKTtcbiAgcmV0dXJuIGZpeGVkUHJpY2UgKyByZXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXBwZXJMb3dlciwgc2V0VXBwZXJMb3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGF0YTogY29pbkRhdGEsIGlzTG9hZGluZyB9ID0gdXNlR2V0Q29pbnNRdWVyeShzb3J0QnkpO1xuICBjb25zdCBnZXRVcHBldExvd2VyID0gKCkgPT4ge1xuICAgIGNvaW5EYXRhLnNvcnQoKHAxLCBwMikgPT5cbiAgICAgIHAxW2NvbF0gPiBwMltjb2xdID8gMSA6IHAxW2NvbF0gPCBwMltjb2xdID8gLTEgOiAwXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjb2luVGFibGVEYXRhID0gY29pbkRhdGE/Lm1hcCgoY29pbjogQ29pbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBwcmljZUNoYW5nZVBlcmNlbnRhZ2UyNEggPVxuICAgICAgTWF0aC5yb3VuZChjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCAqIDEwMCkgLyAxMDAgKyBcIiVcIjtcbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBzd2l0Y2hUb1VTRChTdHJpbmcoY29pbi5jdXJyZW50X3ByaWNlKSkgKyBcIiAkXCI7XG4gICAgY29uc3QgbWFya2V0Q2FwID0gc3dpdGNoVG9VU0QoU3RyaW5nKGNvaW4ubWFya2V0X2NhcCkpICsgXCIgJFwiO1xuICAgIHJldHVybiB7XG4gICAgICBjb2wxOiBjb2luLm1hcmtldF9jYXBfcmFuayxcbiAgICAgIGNvbDI6IGNvaW4ubmFtZSxcbiAgICAgIGNvbDM6IGN1cnJlbnRQcmljZSxcbiAgICAgIGNvbDQ6IHByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCxcbiAgICAgIGNvbDU6IG1hcmtldENhcCxcbiAgICAgIGNvbDY6IFwiZ3JhcGhcIixcbiAgICAgIGNvbDc6IGNvaW4uaWQsXG4gICAgfTtcbiAgfSk7XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29pblRhYmxlIGNvaW5UYWJsZURhdGE9e2NvaW5UYWJsZURhdGEhfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvaW5UYWJsZSIsInVzZUdldENvaW5zUXVlcnkiLCJ1c2VTdGF0ZSIsInN3aXRjaFRvVVNEIiwicHJpY2UiLCJmaXhlZFByaWNlIiwicmVzdCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicmVwbGFjZSIsIkhvbWUiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJ1cHBlckxvd2VyIiwic2V0VXBwZXJMb3dlciIsImRhdGEiLCJjb2luRGF0YSIsImlzTG9hZGluZyIsImdldFVwcGV0TG93ZXIiLCJzb3J0IiwicDEiLCJwMiIsImNvbCIsImNvaW5UYWJsZURhdGEiLCJtYXAiLCJjb2luIiwicHJpY2VDaGFuZ2VQZXJjZW50YWdlMjRIIiwiTWF0aCIsInJvdW5kIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIiwiY3VycmVudFByaWNlIiwiU3RyaW5nIiwiY3VycmVudF9wcmljZSIsIm1hcmtldENhcCIsIm1hcmtldF9jYXAiLCJjb2wxIiwibWFya2V0X2NhcF9yYW5rIiwiY29sMiIsIm5hbWUiLCJjb2wzIiwiY29sNCIsImNvbDUiLCJjb2w2IiwiY29sNyIsImlkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
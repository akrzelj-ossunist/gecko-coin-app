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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst switchToUSD = (price)=>{\n    let fixedPrice = price;\n    let rest = \"\";\n    if (price.indexOf(\".\") >= 0) {\n        rest = price.substring(price.indexOf(\".\"), price.length);\n        fixedPrice = price.substring(0, price.indexOf(\".\"));\n    }\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    fixedPrice = fixedPrice.replace(/.{3}/g, \"$&,\");\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    if (fixedPrice[0] === \",\") fixedPrice = fixedPrice.substring(1, fixedPrice.length);\n    return fixedPrice + rest;\n};\nfunction Home() {\n    _s();\n    const { data: coinData , isLoading  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"name\");\n    const [upperLowerSort, setUpperLowerSort] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const upper = ()=>{\n        if (upperLowerSort) {\n            coinData === null || coinData === void 0 ? void 0 : coinData.sort((p1, p2)=>{\n                return p1[sortBy] > p2[sortBy] ? 1 : p1[sortBy] < p2[sortBy] ? -1 : 0;\n            });\n            setUpperLowerSort(false);\n        } else {\n            coinData === null || coinData === void 0 ? void 0 : coinData.sort((p1, p2)=>{\n                return p1[sortBy] < p2[sortBy] ? 1 : p1[sortBy] > p2[sortBy] ? -1 : 0;\n            });\n            setUpperLowerSort(true);\n        }\n    };\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.map((coin)=>{\n        const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n        const currentPrice = switchToUSD(String(coin.current_price)) + \" $\";\n        const marketCap = switchToUSD(String(coin.market_cap)) + \" $\";\n        return {\n            col1: coin.market_cap_rank,\n            col2: coin.name,\n            col3: currentPrice,\n            col4: priceChangePercentage24H,\n            col5: marketCap,\n            col6: \"graph\",\n            col7: coin.id\n        };\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 56,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: coinTableData\n        }, void 0, false, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"mNbCKva/vmYDsgZttJ5Nbl4YSAA=\", false, function() {\n    return [\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiaW1wb3J0IENvaW5UYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL0NvaW5UYWJsZVwiO1xuaW1wb3J0IHVzZUdldENvaW5zUXVlcnkgZnJvbSBcIkAvc2VydmljZXMvZ2V0Q29pbnNcIjtcbmltcG9ydCB7IENvaW5EZXRhaWxzIH0gZnJvbSBcIkAvc2VydmljZXMvaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzd2l0Y2hUb1VTRCA9IChwcmljZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgbGV0IGZpeGVkUHJpY2UgPSBwcmljZTtcbiAgbGV0IHJlc3QgPSBcIlwiO1xuICBpZiAocHJpY2UuaW5kZXhPZihcIi5cIikgPj0gMCkge1xuICAgIHJlc3QgPSBwcmljZS5zdWJzdHJpbmcocHJpY2UuaW5kZXhPZihcIi5cIiksIHByaWNlLmxlbmd0aCk7XG4gICAgZml4ZWRQcmljZSA9IHByaWNlLnN1YnN0cmluZygwLCBwcmljZS5pbmRleE9mKFwiLlwiKSk7XG4gIH1cbiAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2Uuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnJlcGxhY2UoLy57M30vZywgXCIkJixcIik7XG4gIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICBpZiAoZml4ZWRQcmljZVswXSA9PT0gXCIsXCIpXG4gICAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2Uuc3Vic3RyaW5nKDEsIGZpeGVkUHJpY2UubGVuZ3RoKTtcbiAgcmV0dXJuIGZpeGVkUHJpY2UgKyByZXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhOiBjb2luRGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXRDb2luc1F1ZXJ5KCk7XG5cbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKFwibmFtZVwiKTtcbiAgY29uc3QgW3VwcGVyTG93ZXJTb3J0LCBzZXRVcHBlckxvd2VyU29ydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBwZXIgPSAoKSA9PiB7XG4gICAgaWYgKHVwcGVyTG93ZXJTb3J0KSB7XG4gICAgICBjb2luRGF0YT8uc29ydCgocDE6IGFueSwgcDI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcDFbc29ydEJ5XSA+IHAyW3NvcnRCeV0gPyAxIDogcDFbc29ydEJ5XSA8IHAyW3NvcnRCeV0gPyAtMSA6IDA7XG4gICAgICB9KTtcbiAgICAgIHNldFVwcGVyTG93ZXJTb3J0KGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29pbkRhdGE/LnNvcnQoKHAxOiBhbnksIHAyOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHAxW3NvcnRCeV0gPCBwMltzb3J0QnldID8gMSA6IHAxW3NvcnRCeV0gPiBwMltzb3J0QnldID8gLTEgOiAwO1xuICAgICAgfSk7XG4gICAgICBzZXRVcHBlckxvd2VyU29ydCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29pblRhYmxlRGF0YSA9IGNvaW5EYXRhPy5tYXAoKGNvaW46IENvaW5EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgcHJpY2VDaGFuZ2VQZXJjZW50YWdlMjRIID1cbiAgICAgIE1hdGgucm91bmQoY29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGggKiAxMDApIC8gMTAwICsgXCIlXCI7XG4gICAgY29uc3QgY3VycmVudFByaWNlID0gc3dpdGNoVG9VU0QoU3RyaW5nKGNvaW4uY3VycmVudF9wcmljZSkpICsgXCIgJFwiO1xuICAgIGNvbnN0IG1hcmtldENhcCA9IHN3aXRjaFRvVVNEKFN0cmluZyhjb2luLm1hcmtldF9jYXApKSArIFwiICRcIjtcbiAgICByZXR1cm4ge1xuICAgICAgY29sMTogY29pbi5tYXJrZXRfY2FwX3JhbmssXG4gICAgICBjb2wyOiBjb2luLm5hbWUsXG4gICAgICBjb2wzOiBjdXJyZW50UHJpY2UsXG4gICAgICBjb2w0OiBwcmljZUNoYW5nZVBlcmNlbnRhZ2UyNEgsXG4gICAgICBjb2w1OiBtYXJrZXRDYXAsXG4gICAgICBjb2w2OiBcImdyYXBoXCIsXG4gICAgICBjb2w3OiBjb2luLmlkLFxuICAgIH07XG4gIH0pO1xuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvaW5UYWJsZSBjb2luVGFibGVEYXRhPXtjb2luVGFibGVEYXRhIX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDb2luVGFibGUiLCJ1c2VHZXRDb2luc1F1ZXJ5IiwidXNlU3RhdGUiLCJzd2l0Y2hUb1VTRCIsInByaWNlIiwiZml4ZWRQcmljZSIsInJlc3QiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInJlcGxhY2UiLCJIb21lIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwidXBwZXJMb3dlclNvcnQiLCJzZXRVcHBlckxvd2VyU29ydCIsInVwcGVyIiwic29ydCIsInAxIiwicDIiLCJjb2luVGFibGVEYXRhIiwibWFwIiwiY29pbiIsInByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCIsIk1hdGgiLCJyb3VuZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRQcmljZSIsIlN0cmluZyIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRDYXAiLCJtYXJrZXRfY2FwIiwiY29sMSIsIm1hcmtldF9jYXBfcmFuayIsImNvbDIiLCJuYW1lIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
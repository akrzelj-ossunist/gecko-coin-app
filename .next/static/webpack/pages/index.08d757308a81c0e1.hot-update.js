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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst switchToUSD = (price)=>{\n    let fixedPrice = price;\n    let rest = \"\";\n    if (price.indexOf(\".\") >= 0) {\n        rest = price.substring(price.indexOf(\".\"), price.length);\n        fixedPrice = price.substring(0, price.indexOf(\".\"));\n    }\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    fixedPrice = fixedPrice.replace(/.{3}/g, \"$&,\");\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    if (fixedPrice[0] === \",\") fixedPrice = fixedPrice.substring(1, fixedPrice.length);\n    return fixedPrice + rest;\n};\nfunction Home() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"market_cap_rank\");\n    console.log(sortBy);\n    const { data: coinData , isLoading  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sortBy);\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.map((coin)=>{\n        const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n        const currentPrice = switchToUSD(String(coin.current_price)) + \" $\";\n        const marketCap = switchToUSD(String(coin.market_cap)) + \" $\";\n        return {\n            market_cap_rank: coin.market_cap_rank,\n            id: coin.name,\n            current_price: currentPrice,\n            price_change_percentage_24h: priceChangePercentage24H,\n            market_cap: marketCap,\n            col6: \"graph\",\n            col7: coin.id\n        };\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: coinTableData,\n            setSortBy: setSortBy\n        }, void 0, false, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"RCO93Eg8BDzkniN0kbQ5uLAyuGY=\", false, function() {\n    return [\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0k7QUFFbEI7QUFFakMsTUFBTUcsY0FBYyxDQUFDQyxRQUEwQjtJQUM3QyxJQUFJQyxhQUFhRDtJQUNqQixJQUFJRSxPQUFPO0lBQ1gsSUFBSUYsTUFBTUcsT0FBTyxDQUFDLFFBQVEsR0FBRztRQUMzQkQsT0FBT0YsTUFBTUksU0FBUyxDQUFDSixNQUFNRyxPQUFPLENBQUMsTUFBTUgsTUFBTUssTUFBTTtRQUN2REosYUFBYUQsTUFBTUksU0FBUyxDQUFDLEdBQUdKLE1BQU1HLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0RGLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRFAsYUFBYUEsV0FBV1EsT0FBTyxDQUFDLFNBQVM7SUFDekNSLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRCxJQUFJUCxVQUFVLENBQUMsRUFBRSxLQUFLLEtBQ3BCQSxhQUFhQSxXQUFXRyxTQUFTLENBQUMsR0FBR0gsV0FBV0ksTUFBTTtJQUN4RCxPQUFPSixhQUFhQztBQUN0QjtBQUVlLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQ2UsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU0sRUFBRUksTUFBTUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR3BCLDhEQUFnQkEsQ0FBQ2M7SUFFdkQsTUFBTU8sZ0JBQWdCRixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVHLEdBQUcsQ0FBQyxDQUFDQyxPQUFzQjtRQUN6RCxNQUFNQywyQkFDSkMsS0FBS0MsS0FBSyxDQUFDSCxLQUFLSSwyQkFBMkIsR0FBRyxPQUFPLE1BQU07UUFDN0QsTUFBTUMsZUFBZTFCLFlBQVkyQixPQUFPTixLQUFLTyxhQUFhLEtBQUs7UUFDL0QsTUFBTUMsWUFBWTdCLFlBQVkyQixPQUFPTixLQUFLUyxVQUFVLEtBQUs7UUFDekQsT0FBTztZQUNMQyxpQkFBaUJWLEtBQUtVLGVBQWU7WUFDckNDLElBQUlYLEtBQUtZLElBQUk7WUFDYkwsZUFBZUY7WUFDZkQsNkJBQTZCSDtZQUM3QlEsWUFBWUQ7WUFDWkssTUFBTTtZQUNOQyxNQUFNZCxLQUFLVyxFQUFFO1FBQ2Y7SUFDRjtJQUNBLElBQUlkLFdBQVcscUJBQU8sOERBQUNrQjtrQkFBRTs7Ozs7O0lBQ3pCLHFCQUNFO2tCQUNFLDRFQUFDdkMsNkRBQVNBO1lBQUNzQixlQUFlQTtZQUFnQk4sV0FBV0E7Ozs7Ozs7QUFHM0QsQ0FBQztHQTFCdUJGOztRQUdnQmIsMERBQWdCQTs7O0tBSGhDYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29pblRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvQ29pblRhYmxlXCI7XG5pbXBvcnQgdXNlR2V0Q29pbnNRdWVyeSBmcm9tIFwiQC9zZXJ2aWNlcy9nZXRDb2luc1wiO1xuaW1wb3J0IHsgQ29pbkRldGFpbHMgfSBmcm9tIFwiQC9zZXJ2aWNlcy9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHN3aXRjaFRvVVNEID0gKHByaWNlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBsZXQgZml4ZWRQcmljZSA9IHByaWNlO1xuICBsZXQgcmVzdCA9IFwiXCI7XG4gIGlmIChwcmljZS5pbmRleE9mKFwiLlwiKSA+PSAwKSB7XG4gICAgcmVzdCA9IHByaWNlLnN1YnN0cmluZyhwcmljZS5pbmRleE9mKFwiLlwiKSwgcHJpY2UubGVuZ3RoKTtcbiAgICBmaXhlZFByaWNlID0gcHJpY2Uuc3Vic3RyaW5nKDAsIHByaWNlLmluZGV4T2YoXCIuXCIpKTtcbiAgfVxuICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2UucmVwbGFjZSgvLnszfS9nLCBcIiQmLFwiKTtcbiAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2Uuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gIGlmIChmaXhlZFByaWNlWzBdID09PSBcIixcIilcbiAgICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5zdWJzdHJpbmcoMSwgZml4ZWRQcmljZS5sZW5ndGgpO1xuICByZXR1cm4gZml4ZWRQcmljZSArIHJlc3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJtYXJrZXRfY2FwX3JhbmtcIik7XG4gIGNvbnNvbGUubG9nKHNvcnRCeSk7XG4gIGNvbnN0IHsgZGF0YTogY29pbkRhdGEsIGlzTG9hZGluZyB9ID0gdXNlR2V0Q29pbnNRdWVyeShzb3J0QnkpO1xuXG4gIGNvbnN0IGNvaW5UYWJsZURhdGEgPSBjb2luRGF0YT8ubWFwKChjb2luOiBDb2luRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IHByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCA9XG4gICAgICBNYXRoLnJvdW5kKGNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoICogMTAwKSAvIDEwMCArIFwiJVwiO1xuICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IHN3aXRjaFRvVVNEKFN0cmluZyhjb2luLmN1cnJlbnRfcHJpY2UpKSArIFwiICRcIjtcbiAgICBjb25zdCBtYXJrZXRDYXAgPSBzd2l0Y2hUb1VTRChTdHJpbmcoY29pbi5tYXJrZXRfY2FwKSkgKyBcIiAkXCI7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcmtldF9jYXBfcmFuazogY29pbi5tYXJrZXRfY2FwX3JhbmssXG4gICAgICBpZDogY29pbi5uYW1lLFxuICAgICAgY3VycmVudF9wcmljZTogY3VycmVudFByaWNlLFxuICAgICAgcHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoOiBwcmljZUNoYW5nZVBlcmNlbnRhZ2UyNEgsXG4gICAgICBtYXJrZXRfY2FwOiBtYXJrZXRDYXAsXG4gICAgICBjb2w2OiBcImdyYXBoXCIsXG4gICAgICBjb2w3OiBjb2luLmlkLFxuICAgIH07XG4gIH0pO1xuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb2luVGFibGUgY29pblRhYmxlRGF0YT17Y29pblRhYmxlRGF0YSF9IHNldFNvcnRCeT17c2V0U29ydEJ5fSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvaW5UYWJsZSIsInVzZUdldENvaW5zUXVlcnkiLCJ1c2VTdGF0ZSIsInN3aXRjaFRvVVNEIiwicHJpY2UiLCJmaXhlZFByaWNlIiwicmVzdCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicmVwbGFjZSIsIkhvbWUiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwiY29pblRhYmxlRGF0YSIsIm1hcCIsImNvaW4iLCJwcmljZUNoYW5nZVBlcmNlbnRhZ2UyNEgiLCJNYXRoIiwicm91bmQiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJjdXJyZW50UHJpY2UiLCJTdHJpbmciLCJjdXJyZW50X3ByaWNlIiwibWFya2V0Q2FwIiwibWFya2V0X2NhcCIsIm1hcmtldF9jYXBfcmFuayIsImlkIiwibmFtZSIsImNvbDYiLCJjb2w3IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
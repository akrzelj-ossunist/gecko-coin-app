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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst switchToUSD = (price)=>{\n    let fixedPrice = price;\n    let rest = \"\";\n    if (price.indexOf(\".\") >= 0) {\n        rest = price.substring(price.indexOf(\".\"), price.length);\n        fixedPrice = price.substring(0, price.indexOf(\".\"));\n    }\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    fixedPrice = fixedPrice.replace(/.{3}/g, \"$&,\");\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    if (fixedPrice[0] === \",\") fixedPrice = fixedPrice.substring(1, fixedPrice.length);\n    return fixedPrice + rest;\n};\nfunction Home() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    console.log(sortBy);\n    const { data: coinData , isLoading  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"id\");\n    console.log(coinData);\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.map((coin)=>{\n        const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n        const currentPrice = switchToUSD(String(coin.current_price)) + \" $\";\n        const marketCap = switchToUSD(String(coin.market_cap)) + \" $\";\n        return {\n            col1: coin.market_cap_rank,\n            col2: coin.name,\n            col3: currentPrice,\n            col4: priceChangePercentage24H,\n            col5: marketCap,\n            col6: \"graph\",\n            col7: coin.id\n        };\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: coinTableData,\n            setSortBy: setSortBy\n        }, void 0, false, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"cyOUcIr8seDyo7cdPTpjAnTVzqE=\", false, function() {\n    return [\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0k7QUFFbEI7QUFFakMsTUFBTUcsY0FBYyxDQUFDQyxRQUEwQjtJQUM3QyxJQUFJQyxhQUFhRDtJQUNqQixJQUFJRSxPQUFPO0lBQ1gsSUFBSUYsTUFBTUcsT0FBTyxDQUFDLFFBQVEsR0FBRztRQUMzQkQsT0FBT0YsTUFBTUksU0FBUyxDQUFDSixNQUFNRyxPQUFPLENBQUMsTUFBTUgsTUFBTUssTUFBTTtRQUN2REosYUFBYUQsTUFBTUksU0FBUyxDQUFDLEdBQUdKLE1BQU1HLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0RGLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRFAsYUFBYUEsV0FBV1EsT0FBTyxDQUFDLFNBQVM7SUFDekNSLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRCxJQUFJUCxVQUFVLENBQUMsRUFBRSxLQUFLLEtBQ3BCQSxhQUFhQSxXQUFXRyxTQUFTLENBQUMsR0FBR0gsV0FBV0ksTUFBTTtJQUN4RCxPQUFPSixhQUFhQztBQUN0QjtBQUVlLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQ2UsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLE1BQU0sRUFBRUksTUFBTUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR3BCLDhEQUFnQkEsQ0FBQztJQUN2RGdCLFFBQVFDLEdBQUcsQ0FBQ0U7SUFFWixNQUFNRSxnQkFBZ0JGLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUcsR0FBRyxDQUFDLENBQUNDLE9BQXNCO1FBQ3pELE1BQU1DLDJCQUNKQyxLQUFLQyxLQUFLLENBQUNILEtBQUtJLDJCQUEyQixHQUFHLE9BQU8sTUFBTTtRQUM3RCxNQUFNQyxlQUFlMUIsWUFBWTJCLE9BQU9OLEtBQUtPLGFBQWEsS0FBSztRQUMvRCxNQUFNQyxZQUFZN0IsWUFBWTJCLE9BQU9OLEtBQUtTLFVBQVUsS0FBSztRQUN6RCxPQUFPO1lBQ0xDLE1BQU1WLEtBQUtXLGVBQWU7WUFDMUJDLE1BQU1aLEtBQUthLElBQUk7WUFDZkMsTUFBTVQ7WUFDTlUsTUFBTWQ7WUFDTmUsTUFBTVI7WUFDTlMsTUFBTTtZQUNOQyxNQUFNbEIsS0FBS21CLEVBQUU7UUFDZjtJQUNGO0lBQ0EsSUFBSXRCLFdBQVcscUJBQU8sOERBQUN1QjtrQkFBRTs7Ozs7O0lBQ3pCLHFCQUNFO2tCQUNFLDRFQUFDNUMsNkRBQVNBO1lBQUNzQixlQUFlQTtZQUFnQk4sV0FBV0E7Ozs7Ozs7QUFHM0QsQ0FBQztHQTVCdUJGOztRQUlnQmIsMERBQWdCQTs7O0tBSmhDYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29pblRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvQ29pblRhYmxlXCI7XG5pbXBvcnQgdXNlR2V0Q29pbnNRdWVyeSBmcm9tIFwiQC9zZXJ2aWNlcy9nZXRDb2luc1wiO1xuaW1wb3J0IHsgQ29pbkRldGFpbHMgfSBmcm9tIFwiQC9zZXJ2aWNlcy9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHN3aXRjaFRvVVNEID0gKHByaWNlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBsZXQgZml4ZWRQcmljZSA9IHByaWNlO1xuICBsZXQgcmVzdCA9IFwiXCI7XG4gIGlmIChwcmljZS5pbmRleE9mKFwiLlwiKSA+PSAwKSB7XG4gICAgcmVzdCA9IHByaWNlLnN1YnN0cmluZyhwcmljZS5pbmRleE9mKFwiLlwiKSwgcHJpY2UubGVuZ3RoKTtcbiAgICBmaXhlZFByaWNlID0gcHJpY2Uuc3Vic3RyaW5nKDAsIHByaWNlLmluZGV4T2YoXCIuXCIpKTtcbiAgfVxuICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2UucmVwbGFjZSgvLnszfS9nLCBcIiQmLFwiKTtcbiAgZml4ZWRQcmljZSA9IGZpeGVkUHJpY2Uuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gIGlmIChmaXhlZFByaWNlWzBdID09PSBcIixcIilcbiAgICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5zdWJzdHJpbmcoMSwgZml4ZWRQcmljZS5sZW5ndGgpO1xuICByZXR1cm4gZml4ZWRQcmljZSArIHJlc3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnNvbGUubG9nKHNvcnRCeSk7XG5cbiAgY29uc3QgeyBkYXRhOiBjb2luRGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXRDb2luc1F1ZXJ5KFwiaWRcIik7XG4gIGNvbnNvbGUubG9nKGNvaW5EYXRhKTtcblxuICBjb25zdCBjb2luVGFibGVEYXRhID0gY29pbkRhdGE/Lm1hcCgoY29pbjogQ29pbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBwcmljZUNoYW5nZVBlcmNlbnRhZ2UyNEggPVxuICAgICAgTWF0aC5yb3VuZChjb2luLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCAqIDEwMCkgLyAxMDAgKyBcIiVcIjtcbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBzd2l0Y2hUb1VTRChTdHJpbmcoY29pbi5jdXJyZW50X3ByaWNlKSkgKyBcIiAkXCI7XG4gICAgY29uc3QgbWFya2V0Q2FwID0gc3dpdGNoVG9VU0QoU3RyaW5nKGNvaW4ubWFya2V0X2NhcCkpICsgXCIgJFwiO1xuICAgIHJldHVybiB7XG4gICAgICBjb2wxOiBjb2luLm1hcmtldF9jYXBfcmFuayxcbiAgICAgIGNvbDI6IGNvaW4ubmFtZSxcbiAgICAgIGNvbDM6IGN1cnJlbnRQcmljZSxcbiAgICAgIGNvbDQ6IHByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCxcbiAgICAgIGNvbDU6IG1hcmtldENhcCxcbiAgICAgIGNvbDY6IFwiZ3JhcGhcIixcbiAgICAgIGNvbDc6IGNvaW4uaWQsXG4gICAgfTtcbiAgfSk7XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvaW5UYWJsZSBjb2luVGFibGVEYXRhPXtjb2luVGFibGVEYXRhIX0gc2V0U29ydEJ5PXtzZXRTb3J0Qnl9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29pblRhYmxlIiwidXNlR2V0Q29pbnNRdWVyeSIsInVzZVN0YXRlIiwic3dpdGNoVG9VU0QiLCJwcmljZSIsImZpeGVkUHJpY2UiLCJyZXN0IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsImxlbmd0aCIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJyZXBsYWNlIiwiSG9tZSIsInNvcnRCeSIsInNldFNvcnRCeSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29pbkRhdGEiLCJpc0xvYWRpbmciLCJjb2luVGFibGVEYXRhIiwibWFwIiwiY29pbiIsInByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCIsIk1hdGgiLCJyb3VuZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRQcmljZSIsIlN0cmluZyIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRDYXAiLCJtYXJrZXRfY2FwIiwiY29sMSIsIm1hcmtldF9jYXBfcmFuayIsImNvbDIiLCJuYW1lIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImNvbDciLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
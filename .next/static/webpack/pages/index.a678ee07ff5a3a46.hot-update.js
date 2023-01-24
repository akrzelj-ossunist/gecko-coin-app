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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst switchToUSD = (price)=>{\n    let fixedPrice = price;\n    let rest = \"\";\n    if (price.indexOf(\".\") >= 0) {\n        rest = price.substring(price.indexOf(\".\"), price.length);\n        fixedPrice = price.substring(0, price.indexOf(\".\"));\n    }\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    fixedPrice = fixedPrice.replace(/.{3}/g, \"$&,\");\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    if (fixedPrice[0] === \",\") fixedPrice = fixedPrice.substring(1, fixedPrice.length);\n    return fixedPrice + rest;\n};\nfunction Home() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"market_cap_rank\");\n    const { data: coinData , isLoading  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 25\n    }, this);\n    const getUpperLower = ()=>{\n        coinData === null || coinData === void 0 ? void 0 : coinData.sort((p1, p2)=>p1[sortBy] > p2[sortBy] ? 1 : -1).reverse();\n    };\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.map((coin)=>{\n        const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n        const currentPrice = switchToUSD(String(coin.current_price)) + \" $\";\n        const marketCap = switchToUSD(String(coin.market_cap)) + \" $\";\n        return {\n            market_cap_rank: coin.market_cap_rank,\n            name: coin.name,\n            current_price: currentPrice,\n            price_change_percentage_24h: priceChangePercentage24H,\n            market_cap: marketCap,\n            col6: \"graph\",\n            col7: coin.id\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: coinTableData,\n            setSortBy: setSortBy,\n            getUpperLower: getUpperLower\n        }, void 0, false, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"RCO93Eg8BDzkniN0kbQ5uLAyuGY=\", false, function() {\n    return [\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0k7QUFFbEI7QUFFakMsTUFBTUcsY0FBYyxDQUFDQyxRQUEwQjtJQUM3QyxJQUFJQyxhQUFhRDtJQUNqQixJQUFJRSxPQUFPO0lBQ1gsSUFBSUYsTUFBTUcsT0FBTyxDQUFDLFFBQVEsR0FBRztRQUMzQkQsT0FBT0YsTUFBTUksU0FBUyxDQUFDSixNQUFNRyxPQUFPLENBQUMsTUFBTUgsTUFBTUssTUFBTTtRQUN2REosYUFBYUQsTUFBTUksU0FBUyxDQUFDLEdBQUdKLE1BQU1HLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0RGLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRFAsYUFBYUEsV0FBV1EsT0FBTyxDQUFDLFNBQVM7SUFDekNSLGFBQWFBLFdBQVdLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQztJQUNqRCxJQUFJUCxVQUFVLENBQUMsRUFBRSxLQUFLLEtBQ3BCQSxhQUFhQSxXQUFXRyxTQUFTLENBQUMsR0FBR0gsV0FBV0ksTUFBTTtJQUN4RCxPQUFPSixhQUFhQztBQUN0QjtBQUVlLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLEVBQUVlLE1BQU1DLFNBQVEsRUFBRUMsVUFBUyxFQUFFLEdBQUdsQiw4REFBZ0JBO0lBRXRELElBQUlrQixXQUFXLHFCQUFPLDhEQUFDQztrQkFBRTs7Ozs7O0lBRXpCLE1BQU1DLGdCQUFnQixJQUFNO1FBQzFCSCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVJLElBQUksQ0FBQyxDQUFDQyxJQUFJQyxLQUFRRCxFQUFFLENBQUNSLE9BQU8sR0FBR1MsRUFBRSxDQUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBR0osT0FBTyxFQUFFO0lBQzFFO0lBRUEsTUFBTWMsZ0JBQWdCUCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVRLEdBQUcsQ0FBQyxDQUFDQyxPQUFzQjtRQUN6RCxNQUFNQywyQkFDSkMsS0FBS0MsS0FBSyxDQUFDSCxLQUFLSSwyQkFBMkIsR0FBRyxPQUFPLE1BQU07UUFDN0QsTUFBTUMsZUFBZTdCLFlBQVk4QixPQUFPTixLQUFLTyxhQUFhLEtBQUs7UUFDL0QsTUFBTUMsWUFBWWhDLFlBQVk4QixPQUFPTixLQUFLUyxVQUFVLEtBQUs7UUFDekQsT0FBTztZQUNMQyxpQkFBaUJWLEtBQUtVLGVBQWU7WUFDckNDLE1BQU1YLEtBQUtXLElBQUk7WUFDZkosZUFBZUY7WUFDZkQsNkJBQTZCSDtZQUM3QlEsWUFBWUQ7WUFDWkksTUFBTTtZQUNOQyxNQUFNYixLQUFLYyxFQUFFO1FBQ2Y7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDekMsNkRBQVNBO1lBQ1J5QixlQUFlQTtZQUNmVCxXQUFXQTtZQUNYSyxlQUFlQTs7Ozs7OztBQUl2QixDQUFDO0dBbkN1QlA7O1FBRWdCYiwwREFBZ0JBOzs7S0FGaENhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2luVGFibGUgZnJvbSBcIkAvY29tcG9uZW50cy9Db2luVGFibGVcIjtcbmltcG9ydCB1c2VHZXRDb2luc1F1ZXJ5IGZyb20gXCJAL3NlcnZpY2VzL2dldENvaW5zXCI7XG5pbXBvcnQgeyBDb2luRGV0YWlscyB9IGZyb20gXCJAL3NlcnZpY2VzL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc3dpdGNoVG9VU0QgPSAocHJpY2U6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGxldCBmaXhlZFByaWNlID0gcHJpY2U7XG4gIGxldCByZXN0ID0gXCJcIjtcbiAgaWYgKHByaWNlLmluZGV4T2YoXCIuXCIpID49IDApIHtcbiAgICByZXN0ID0gcHJpY2Uuc3Vic3RyaW5nKHByaWNlLmluZGV4T2YoXCIuXCIpLCBwcmljZS5sZW5ndGgpO1xuICAgIGZpeGVkUHJpY2UgPSBwcmljZS5zdWJzdHJpbmcoMCwgcHJpY2UuaW5kZXhPZihcIi5cIikpO1xuICB9XG4gIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5yZXBsYWNlKC8uezN9L2csIFwiJCYsXCIpO1xuICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgaWYgKGZpeGVkUHJpY2VbMF0gPT09IFwiLFwiKVxuICAgIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnN1YnN0cmluZygxLCBmaXhlZFByaWNlLmxlbmd0aCk7XG4gIHJldHVybiBmaXhlZFByaWNlICsgcmVzdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm1hcmtldF9jYXBfcmFua1wiKTtcbiAgY29uc3QgeyBkYXRhOiBjb2luRGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXRDb2luc1F1ZXJ5KCk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuXG4gIGNvbnN0IGdldFVwcGVyTG93ZXIgPSAoKSA9PiB7XG4gICAgY29pbkRhdGE/LnNvcnQoKHAxLCBwMikgPT4gKHAxW3NvcnRCeV0gPiBwMltzb3J0QnldID8gMSA6IC0xKSkucmV2ZXJzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNvaW5UYWJsZURhdGEgPSBjb2luRGF0YT8ubWFwKChjb2luOiBDb2luRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IHByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCA9XG4gICAgICBNYXRoLnJvdW5kKGNvaW4ucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoICogMTAwKSAvIDEwMCArIFwiJVwiO1xuICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IHN3aXRjaFRvVVNEKFN0cmluZyhjb2luLmN1cnJlbnRfcHJpY2UpKSArIFwiICRcIjtcbiAgICBjb25zdCBtYXJrZXRDYXAgPSBzd2l0Y2hUb1VTRChTdHJpbmcoY29pbi5tYXJrZXRfY2FwKSkgKyBcIiAkXCI7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcmtldF9jYXBfcmFuazogY29pbi5tYXJrZXRfY2FwX3JhbmssXG4gICAgICBuYW1lOiBjb2luLm5hbWUsXG4gICAgICBjdXJyZW50X3ByaWNlOiBjdXJyZW50UHJpY2UsXG4gICAgICBwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGg6IHByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCxcbiAgICAgIG1hcmtldF9jYXA6IG1hcmtldENhcCxcbiAgICAgIGNvbDY6IFwiZ3JhcGhcIixcbiAgICAgIGNvbDc6IGNvaW4uaWQsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvaW5UYWJsZVxuICAgICAgICBjb2luVGFibGVEYXRhPXtjb2luVGFibGVEYXRhIX1cbiAgICAgICAgc2V0U29ydEJ5PXtzZXRTb3J0Qnl9XG4gICAgICAgIGdldFVwcGVyTG93ZXI9e2dldFVwcGVyTG93ZXJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvaW5UYWJsZSIsInVzZUdldENvaW5zUXVlcnkiLCJ1c2VTdGF0ZSIsInN3aXRjaFRvVVNEIiwicHJpY2UiLCJmaXhlZFByaWNlIiwicmVzdCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicmVwbGFjZSIsIkhvbWUiLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJkYXRhIiwiY29pbkRhdGEiLCJpc0xvYWRpbmciLCJwIiwiZ2V0VXBwZXJMb3dlciIsInNvcnQiLCJwMSIsInAyIiwiY29pblRhYmxlRGF0YSIsIm1hcCIsImNvaW4iLCJwcmljZUNoYW5nZVBlcmNlbnRhZ2UyNEgiLCJNYXRoIiwicm91bmQiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJjdXJyZW50UHJpY2UiLCJTdHJpbmciLCJjdXJyZW50X3ByaWNlIiwibWFya2V0Q2FwIiwibWFya2V0X2NhcCIsIm1hcmtldF9jYXBfcmFuayIsIm5hbWUiLCJjb2w2IiwiY29sNyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
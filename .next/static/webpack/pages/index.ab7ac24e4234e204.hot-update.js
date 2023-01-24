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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst switchToUSD = (price)=>{\n    let fixedPrice = price;\n    let rest = \"\";\n    if (price.indexOf(\".\") >= 0) {\n        rest = price.substring(price.indexOf(\".\"), price.length);\n        fixedPrice = price.substring(0, price.indexOf(\".\"));\n    }\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    fixedPrice = fixedPrice.replace(/.{3}/g, \"$&,\");\n    fixedPrice = fixedPrice.split(\"\").reverse().join(\"\");\n    if (fixedPrice[0] === \",\") fixedPrice = fixedPrice.substring(1, fixedPrice.length);\n    return fixedPrice + rest;\n};\nfunction Home() {\n    _s();\n    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"market_cap_rank\");\n    const [upperLower, setUpperLower] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { data: coinData , isLoading  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 25\n    }, this);\n    const getUpperLower = ()=>{\n        console.log(sortBy);\n        if (upperLower) {\n            setUpperLower(false);\n            coinData === null || coinData === void 0 ? void 0 : coinData.sort((p1, p2)=>p1[sortBy] > p2[sortBy] ? 1 : p1[sortBy] < p2[sortBy] ? -1 : 0);\n        } else {\n            setUpperLower(true);\n            coinData === null || coinData === void 0 ? void 0 : coinData.sort((p1, p2)=>p1[sortBy] < p2[sortBy] ? 1 : p1[sortBy] > p2[sortBy] ? -1 : 0);\n        }\n        console.log(coinData);\n    };\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.map((coin)=>{\n        const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n        const currentPrice = switchToUSD(String(coin.current_price)) + \" $\";\n        const marketCap = switchToUSD(String(coin.market_cap)) + \" $\";\n        return {\n            market_cap_rank: coin.market_cap_rank,\n            name: coin.name,\n            current_price: currentPrice,\n            price_change_percentage_24h: priceChangePercentage24H,\n            market_cap: marketCap,\n            col6: \"graph\",\n            col7: coin.id\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: coinTableData,\n            setSortBy: setSortBy,\n            getUpperLower: getUpperLower\n        }, void 0, false, {\n            fileName: \"/home/antonio/posa/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"rAWWp21ZMmIbloG5JJvMnYwBdo0=\", false, function() {\n    return [\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2luVGFibGUgZnJvbSBcIkAvY29tcG9uZW50cy9Db2luVGFibGVcIjtcbmltcG9ydCB1c2VHZXRDb2luc1F1ZXJ5IGZyb20gXCJAL3NlcnZpY2VzL2dldENvaW5zXCI7XG5pbXBvcnQgeyBDb2luRGV0YWlscyB9IGZyb20gXCJAL3NlcnZpY2VzL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgc3dpdGNoVG9VU0QgPSAocHJpY2U6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGxldCBmaXhlZFByaWNlID0gcHJpY2U7XG4gIGxldCByZXN0ID0gXCJcIjtcbiAgaWYgKHByaWNlLmluZGV4T2YoXCIuXCIpID49IDApIHtcbiAgICByZXN0ID0gcHJpY2Uuc3Vic3RyaW5nKHByaWNlLmluZGV4T2YoXCIuXCIpLCBwcmljZS5sZW5ndGgpO1xuICAgIGZpeGVkUHJpY2UgPSBwcmljZS5zdWJzdHJpbmcoMCwgcHJpY2UuaW5kZXhPZihcIi5cIikpO1xuICB9XG4gIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5yZXBsYWNlKC8uezN9L2csIFwiJCYsXCIpO1xuICBmaXhlZFByaWNlID0gZml4ZWRQcmljZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgaWYgKGZpeGVkUHJpY2VbMF0gPT09IFwiLFwiKVxuICAgIGZpeGVkUHJpY2UgPSBmaXhlZFByaWNlLnN1YnN0cmluZygxLCBmaXhlZFByaWNlLmxlbmd0aCk7XG4gIHJldHVybiBmaXhlZFByaWNlICsgcmVzdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZShcIm1hcmtldF9jYXBfcmFua1wiKTtcbiAgY29uc3QgW3VwcGVyTG93ZXIsIHNldFVwcGVyTG93ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGRhdGE6IGNvaW5EYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUdldENvaW5zUXVlcnkoKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGNvbnN0IGdldFVwcGVyTG93ZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc29ydEJ5KTtcbiAgICBpZiAodXBwZXJMb3dlcikge1xuICAgICAgc2V0VXBwZXJMb3dlcihmYWxzZSk7XG4gICAgICBjb2luRGF0YT8uc29ydCgocDEsIHAyKSA9PlxuICAgICAgICBwMVtzb3J0QnldID4gcDJbc29ydEJ5XSA/IDEgOiBwMVtzb3J0QnldIDwgcDJbc29ydEJ5XSA/IC0xIDogMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VXBwZXJMb3dlcih0cnVlKTtcbiAgICAgIGNvaW5EYXRhPy5zb3J0KChwMSwgcDIpID0+XG4gICAgICAgIHAxW3NvcnRCeV0gPCBwMltzb3J0QnldID8gMSA6IHAxW3NvcnRCeV0gPiBwMltzb3J0QnldID8gLTEgOiAwXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjb2luRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgY29pblRhYmxlRGF0YSA9IGNvaW5EYXRhPy5tYXAoKGNvaW46IENvaW5EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgcHJpY2VDaGFuZ2VQZXJjZW50YWdlMjRIID1cbiAgICAgIE1hdGgucm91bmQoY29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGggKiAxMDApIC8gMTAwICsgXCIlXCI7XG4gICAgY29uc3QgY3VycmVudFByaWNlID0gc3dpdGNoVG9VU0QoU3RyaW5nKGNvaW4uY3VycmVudF9wcmljZSkpICsgXCIgJFwiO1xuICAgIGNvbnN0IG1hcmtldENhcCA9IHN3aXRjaFRvVVNEKFN0cmluZyhjb2luLm1hcmtldF9jYXApKSArIFwiICRcIjtcbiAgICByZXR1cm4ge1xuICAgICAgbWFya2V0X2NhcF9yYW5rOiBjb2luLm1hcmtldF9jYXBfcmFuayxcbiAgICAgIG5hbWU6IGNvaW4ubmFtZSxcbiAgICAgIGN1cnJlbnRfcHJpY2U6IGN1cnJlbnRQcmljZSxcbiAgICAgIHByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aDogcHJpY2VDaGFuZ2VQZXJjZW50YWdlMjRILFxuICAgICAgbWFya2V0X2NhcDogbWFya2V0Q2FwLFxuICAgICAgY29sNjogXCJncmFwaFwiLFxuICAgICAgY29sNzogY29pbi5pZCxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29pblRhYmxlXG4gICAgICAgIGNvaW5UYWJsZURhdGE9e2NvaW5UYWJsZURhdGEhfVxuICAgICAgICBzZXRTb3J0Qnk9e3NldFNvcnRCeX1cbiAgICAgICAgZ2V0VXBwZXJMb3dlcj17Z2V0VXBwZXJMb3dlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29pblRhYmxlIiwidXNlR2V0Q29pbnNRdWVyeSIsInVzZVN0YXRlIiwic3dpdGNoVG9VU0QiLCJwcmljZSIsImZpeGVkUHJpY2UiLCJyZXN0IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsImxlbmd0aCIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJyZXBsYWNlIiwiSG9tZSIsInNvcnRCeSIsInNldFNvcnRCeSIsInVwcGVyTG93ZXIiLCJzZXRVcHBlckxvd2VyIiwiZGF0YSIsImNvaW5EYXRhIiwiaXNMb2FkaW5nIiwicCIsImdldFVwcGVyTG93ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydCIsInAxIiwicDIiLCJjb2luVGFibGVEYXRhIiwibWFwIiwiY29pbiIsInByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCIsIk1hdGgiLCJyb3VuZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRQcmljZSIsIlN0cmluZyIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRDYXAiLCJtYXJrZXRfY2FwIiwibWFya2V0X2NhcF9yYW5rIiwibmFtZSIsImNvbDYiLCJjb2w3IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
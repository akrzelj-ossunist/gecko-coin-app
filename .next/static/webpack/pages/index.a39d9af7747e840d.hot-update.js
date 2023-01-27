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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CoinTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CoinTable */ \"./components/CoinTable.tsx\");\n/* harmony import */ var _services_getCoins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/getCoins */ \"./services/getCoins.ts\");\n/* harmony import */ var _services_customFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/customFunctions */ \"./services/customFunctions.ts\");\n/* harmony import */ var next_usequerystate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-usequerystate */ \"./node_modules/next-usequerystate/dist/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = (param)=>{\n    let { sortBy: initialSort , way: initialWay  } = param;\n    _s();\n    const [params, setParams] = (0,next_usequerystate__WEBPACK_IMPORTED_MODULE_4__.useQueryStates)({\n        sortBy: next_usequerystate__WEBPACK_IMPORTED_MODULE_4__.queryTypes.string.withDefault(initialSort),\n        way: next_usequerystate__WEBPACK_IMPORTED_MODULE_4__.queryTypes.string.withDefault(initialWay)\n    }, {\n        history: \"replace\"\n    });\n    const { data: coinData , isLoading , hasNextPage , isFetchingNextPage , fetchNextPage  } = (0,_services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params);\n    const route200 = async ()=>{\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/hello\");\n            return resp.data;\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const { data: routeData  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([], ()=>route200());\n    console.log(routeData);\n    const coinTableData = coinData === null || coinData === void 0 ? void 0 : coinData.pages.map((page)=>{\n        return page === null || page === void 0 ? void 0 : page.map((coin)=>{\n            const priceChangePercentage24H = Math.round(coin.price_change_percentage_24h * 100) / 100 + \"%\";\n            const currentPrice = (0,_services_customFunctions__WEBPACK_IMPORTED_MODULE_3__.switchToUSD)(String(coin.current_price)) + \" $\";\n            const marketCap = (0,_services_customFunctions__WEBPACK_IMPORTED_MODULE_3__.switchToUSD)(String(coin.market_cap)) + \" $\";\n            return {\n                col1: coin.market_cap_rank || 0,\n                col2: coin.name,\n                col3: currentPrice,\n                col4: priceChangePercentage24H || \"0\",\n                col5: marketCap,\n                col6: coin.id,\n                image: coin.image\n            };\n        });\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/antonio/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 25\n    }, undefined);\n    const connectedPages = (0,_services_customFunctions__WEBPACK_IMPORTED_MODULE_3__.concatArrayOfArray)(coinTableData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CoinTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            coinTableData: connectedPages,\n            setParams: setParams,\n            params: params,\n            hasNextPage: hasNextPage,\n            fetchNextPage: fetchNextPage,\n            isFetchingNextPage: isFetchingNextPage\n        }, void 0, false, {\n            fileName: \"/home/antonio/gecko-coin-app/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/antonio/gecko-coin-app/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"wWeuQP3SCnmITE13KExADT5a2x8=\", false, function() {\n    return [\n        next_usequerystate__WEBPACK_IMPORTED_MODULE_4__.useQueryStates,\n        _services_getCoins__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSTtBQUMwQjtBQUViO0FBQ3RDO0FBQ2E7QUFFdkMsTUFBTVEsT0FBa0QsU0FHbEQ7UUFIbUQsRUFDdkRDLFFBQVFDLFlBQVcsRUFDbkJDLEtBQUtDLFdBQVUsRUFDaEI7O0lBQ0MsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdWLGtFQUFjQSxDQUN4QztRQUNFSyxRQUFRSiw2RUFBNkIsQ0FBQ0s7UUFDdENDLEtBQUtOLDZFQUE2QixDQUFDTztJQUNyQyxHQUNBO1FBQUVLLFNBQVM7SUFBVTtJQUV2QixNQUFNLEVBQ0pDLE1BQU1DLFNBQVEsRUFDZEMsVUFBUyxFQUNUQyxZQUFXLEVBQ1hDLG1CQUFrQixFQUNsQkMsY0FBYSxFQUNkLEdBQUd0Qiw4REFBZ0JBLENBQUNZO0lBRXJCLE1BQU1XLFdBQVcsVUFBWTtRQUMzQixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNbkIsaURBQVMsQ0FBQztZQUM3QixPQUFPbUIsS0FBS1AsSUFBSTtRQUNsQixFQUFFLE9BQU9TLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEsTUFBTSxFQUFFVCxNQUFNVyxVQUFTLEVBQUUsR0FBR3RCLHFEQUFRQSxDQUFDLEVBQUUsRUFBRSxJQUFNaUI7SUFFL0NJLFFBQVFFLEdBQUcsQ0FBQ0Q7SUFFWixNQUFNRSxnQkFBZ0JaLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWEsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztRQUNsRCxPQUFPQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1ELEdBQUcsQ0FBQyxDQUFDRSxPQUFTO1lBQ3pCLE1BQU1DLDJCQUNKQyxLQUFLQyxLQUFLLENBQUNILEtBQUtJLDJCQUEyQixHQUFHLE9BQU8sTUFBTTtZQUM3RCxNQUFNQyxlQUFlckMsc0VBQVdBLENBQUNzQyxPQUFPTixLQUFLTyxhQUFhLEtBQUs7WUFDL0QsTUFBTUMsWUFBWXhDLHNFQUFXQSxDQUFDc0MsT0FBT04sS0FBS1MsVUFBVSxLQUFLO1lBQ3pELE9BQU87Z0JBQ0xDLE1BQU1WLEtBQUtXLGVBQWUsSUFBSTtnQkFDOUJDLE1BQU1aLEtBQUthLElBQUk7Z0JBQ2ZDLE1BQU1UO2dCQUNOVSxNQUFNZCw0QkFBNEI7Z0JBQ2xDZSxNQUFNUjtnQkFDTlMsTUFBTWpCLEtBQUtrQixFQUFFO2dCQUNiQyxPQUFPbkIsS0FBS21CLEtBQUs7WUFDbkI7UUFDRjtJQUNGLEVBQUU7SUFDRixJQUFJbEMsV0FBVyxxQkFBTyw4REFBQ21DO2tCQUFFOzs7Ozs7SUFDekIsTUFBTUMsaUJBQWlCdEQsNkVBQWtCQSxDQUFDNkI7SUFDMUMscUJBQ0UsOERBQUMwQjtrQkFDQyw0RUFBQ3pELDZEQUFTQTtZQUNSK0IsZUFBZXlCO1lBQ2YxQyxXQUFXQTtZQUNYRCxRQUFRQTtZQUNSUSxhQUFhQTtZQUNiRSxlQUFlQTtZQUNmRCxvQkFBb0JBOzs7Ozs7Ozs7OztBQUk1QjtHQS9ETWQ7O1FBSXdCSiw4REFBY0E7UUFhdENILDBEQUFnQkE7UUFXUU0saURBQVFBOzs7S0E1QmhDQzs7QUFpRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvaW5UYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL0NvaW5UYWJsZVwiO1xuaW1wb3J0IHVzZUdldENvaW5zUXVlcnkgZnJvbSBcIkAvc2VydmljZXMvZ2V0Q29pbnNcIjtcbmltcG9ydCB7IGNvbmNhdEFycmF5T2ZBcnJheSwgc3dpdGNoVG9VU0QgfSBmcm9tIFwiQC9zZXJ2aWNlcy9jdXN0b21GdW5jdGlvbnNcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeVN0YXRlcywgcXVlcnlUeXBlcyB9IGZyb20gXCJuZXh0LXVzZXF1ZXJ5c3RhdGVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDPHsgc29ydEJ5OiBzdHJpbmc7IHdheTogc3RyaW5nIH0+ID0gKHtcbiAgc29ydEJ5OiBpbml0aWFsU29ydCxcbiAgd2F5OiBpbml0aWFsV2F5LFxufSkgPT4ge1xuICBjb25zdCBbcGFyYW1zLCBzZXRQYXJhbXNdID0gdXNlUXVlcnlTdGF0ZXMoXG4gICAge1xuICAgICAgc29ydEJ5OiBxdWVyeVR5cGVzLnN0cmluZy53aXRoRGVmYXVsdChpbml0aWFsU29ydCksXG4gICAgICB3YXk6IHF1ZXJ5VHlwZXMuc3RyaW5nLndpdGhEZWZhdWx0KGluaXRpYWxXYXkpLFxuICAgIH0sXG4gICAgeyBoaXN0b3J5OiBcInJlcGxhY2VcIiB9XG4gICk7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiBjb2luRGF0YSxcbiAgICBpc0xvYWRpbmcsXG4gICAgaGFzTmV4dFBhZ2UsXG4gICAgaXNGZXRjaGluZ05leHRQYWdlLFxuICAgIGZldGNoTmV4dFBhZ2UsXG4gIH0gPSB1c2VHZXRDb2luc1F1ZXJ5KHBhcmFtcyk7XG5cbiAgY29uc3Qgcm91dGUyMDAgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2hlbGxvXCIpO1xuICAgICAgcmV0dXJuIHJlc3AuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgZGF0YTogcm91dGVEYXRhIH0gPSB1c2VRdWVyeShbXSwgKCkgPT4gcm91dGUyMDAoKSk7XG5cbiAgY29uc29sZS5sb2cocm91dGVEYXRhKTtcblxuICBjb25zdCBjb2luVGFibGVEYXRhID0gY29pbkRhdGE/LnBhZ2VzLm1hcCgocGFnZSkgPT4ge1xuICAgIHJldHVybiBwYWdlPy5tYXAoKGNvaW4pID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCA9XG4gICAgICAgIE1hdGgucm91bmQoY29pbi5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGggKiAxMDApIC8gMTAwICsgXCIlXCI7XG4gICAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBzd2l0Y2hUb1VTRChTdHJpbmcoY29pbi5jdXJyZW50X3ByaWNlKSkgKyBcIiAkXCI7XG4gICAgICBjb25zdCBtYXJrZXRDYXAgPSBzd2l0Y2hUb1VTRChTdHJpbmcoY29pbi5tYXJrZXRfY2FwKSkgKyBcIiAkXCI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2wxOiBjb2luLm1hcmtldF9jYXBfcmFuayB8fCAwLFxuICAgICAgICBjb2wyOiBjb2luLm5hbWUsXG4gICAgICAgIGNvbDM6IGN1cnJlbnRQcmljZSxcbiAgICAgICAgY29sNDogcHJpY2VDaGFuZ2VQZXJjZW50YWdlMjRIIHx8IFwiMFwiLFxuICAgICAgICBjb2w1OiBtYXJrZXRDYXAsXG4gICAgICAgIGNvbDY6IGNvaW4uaWQsXG4gICAgICAgIGltYWdlOiBjb2luLmltYWdlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgY29uc3QgY29ubmVjdGVkUGFnZXMgPSBjb25jYXRBcnJheU9mQXJyYXkoY29pblRhYmxlRGF0YSEpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29pblRhYmxlXG4gICAgICAgIGNvaW5UYWJsZURhdGE9e2Nvbm5lY3RlZFBhZ2VzIX1cbiAgICAgICAgc2V0UGFyYW1zPXtzZXRQYXJhbXN9XG4gICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICBoYXNOZXh0UGFnZT17aGFzTmV4dFBhZ2V9XG4gICAgICAgIGZldGNoTmV4dFBhZ2U9e2ZldGNoTmV4dFBhZ2V9XG4gICAgICAgIGlzRmV0Y2hpbmdOZXh0UGFnZT17aXNGZXRjaGluZ05leHRQYWdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBzb3J0Qnk6IGNvbnRleHQucXVlcnkuc29ydEJ5IHx8IFwiXCIsXG4gICAgd2F5OiBjb250ZXh0LnF1ZXJ5LndheSB8fCBcImRlc2NcIixcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwYXJhbXMgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiQ29pblRhYmxlIiwidXNlR2V0Q29pbnNRdWVyeSIsImNvbmNhdEFycmF5T2ZBcnJheSIsInN3aXRjaFRvVVNEIiwidXNlUXVlcnlTdGF0ZXMiLCJxdWVyeVR5cGVzIiwiYXhpb3MiLCJ1c2VRdWVyeSIsIkhvbWUiLCJzb3J0QnkiLCJpbml0aWFsU29ydCIsIndheSIsImluaXRpYWxXYXkiLCJwYXJhbXMiLCJzZXRQYXJhbXMiLCJzdHJpbmciLCJ3aXRoRGVmYXVsdCIsImhpc3RvcnkiLCJkYXRhIiwiY29pbkRhdGEiLCJpc0xvYWRpbmciLCJoYXNOZXh0UGFnZSIsImlzRmV0Y2hpbmdOZXh0UGFnZSIsImZldGNoTmV4dFBhZ2UiLCJyb3V0ZTIwMCIsInJlc3AiLCJnZXQiLCJlcnJvciIsImNvbnNvbGUiLCJyb3V0ZURhdGEiLCJsb2ciLCJjb2luVGFibGVEYXRhIiwicGFnZXMiLCJtYXAiLCJwYWdlIiwiY29pbiIsInByaWNlQ2hhbmdlUGVyY2VudGFnZTI0SCIsIk1hdGgiLCJyb3VuZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImN1cnJlbnRQcmljZSIsIlN0cmluZyIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRDYXAiLCJtYXJrZXRfY2FwIiwiY29sMSIsIm1hcmtldF9jYXBfcmFuayIsImNvbDIiLCJuYW1lIiwiY29sMyIsImNvbDQiLCJjb2w1IiwiY29sNiIsImlkIiwiaW1hZ2UiLCJwIiwiY29ubmVjdGVkUGFnZXMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
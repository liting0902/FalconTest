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

/***/ "./lib/routeConfig.js":
/*!****************************!*\
  !*** ./lib/routeConfig.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar config = [\n    {\n        title: \"Top Headlines\",\n        path: \"top-headlines\"\n    },\n    {\n        title: \"Taiwan\",\n        path: \"tw\"\n    },\n    {\n        title: \"China\",\n        path: \"cn\"\n    },\n    {\n        title: \"World\",\n        path: \"general\"\n    },\n    {\n        title: \"Business\",\n        path: \"business\"\n    },\n    {\n        title: \"Entertainment\",\n        path: \"entertainment\"\n    },\n    {\n        title: \"Sports\",\n        path: \"sports\"\n    },\n    {\n        title: \"Technology\",\n        path: \"technology\"\n    }, \n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcm91dGVDb25maWcuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQU1BLE1BQU0sR0FBRztJQUNiO1FBQUVDLEtBQUssRUFBRSxlQUFlO1FBQUVDLElBQUksRUFBRSxlQUFlO0tBQUU7SUFDakQ7UUFBRUQsS0FBSyxFQUFFLFFBQVE7UUFBRUMsSUFBSSxFQUFFLElBQUk7S0FBRTtJQUMvQjtRQUFFRCxLQUFLLEVBQUUsT0FBTztRQUFFQyxJQUFJLEVBQUUsSUFBSTtLQUFFO0lBQzlCO1FBQUVELEtBQUssRUFBRSxPQUFPO1FBQUVDLElBQUksRUFBRSxTQUFTO0tBQUU7SUFDbkM7UUFBRUQsS0FBSyxFQUFFLFVBQVU7UUFBRUMsSUFBSSxFQUFFLFVBQVU7S0FBRTtJQUN2QztRQUFFRCxLQUFLLEVBQUUsZUFBZTtRQUFFQyxJQUFJLEVBQUUsZUFBZTtLQUFFO0lBQ2pEO1FBQUVELEtBQUssRUFBRSxRQUFRO1FBQUVDLElBQUksRUFBRSxRQUFRO0tBQUU7SUFDbkM7UUFBRUQsS0FBSyxFQUFFLFlBQVk7UUFBRUMsSUFBSSxFQUFFLFlBQVk7S0FBRTtDQUM1QztBQUNELCtEQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JvdXRlQ29uZmlnLmpzPzU5MzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0gW1xuICB7IHRpdGxlOiBcIlRvcCBIZWFkbGluZXNcIiwgcGF0aDogXCJ0b3AtaGVhZGxpbmVzXCIgfSxcbiAgeyB0aXRsZTogXCJUYWl3YW5cIiwgcGF0aDogXCJ0d1wiIH0sXG4gIHsgdGl0bGU6IFwiQ2hpbmFcIiwgcGF0aDogXCJjblwiIH0sXG4gIHsgdGl0bGU6IFwiV29ybGRcIiwgcGF0aDogXCJnZW5lcmFsXCIgfSxcbiAgeyB0aXRsZTogXCJCdXNpbmVzc1wiLCBwYXRoOiBcImJ1c2luZXNzXCIgfSxcbiAgeyB0aXRsZTogXCJFbnRlcnRhaW5tZW50XCIsIHBhdGg6IFwiZW50ZXJ0YWlubWVudFwiIH0sXG4gIHsgdGl0bGU6IFwiU3BvcnRzXCIsIHBhdGg6IFwic3BvcnRzXCIgfSxcbiAgeyB0aXRsZTogXCJUZWNobm9sb2d5XCIsIHBhdGg6IFwidGVjaG5vbG9neVwiIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsInRpdGxlIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/routeConfig.js\n"));

/***/ })

});
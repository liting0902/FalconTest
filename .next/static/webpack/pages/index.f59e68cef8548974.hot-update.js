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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsCard */ \"./components/NewsCard.jsx\");\n\n\n\nfunction Index(param) {\n    var data = param.data;\n    var _this = this;\n    //   console.log(data.articles[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"熱門新聞\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LT\\\\Desktop\\\\0904Falcon\\\\next\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                data.articles.map(function(d) {\n                    console.log(\"!!!!!!!!\", d.title);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            urlToImage: d.urlToImage,\n                            url: d.url,\n                            title: d.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LT\\\\Desktop\\\\0904Falcon\\\\next\\\\pages\\\\index.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, _this)\n                    }, d.publishedAt, false, {\n                        fileName: \"C:\\\\Users\\\\LT\\\\Desktop\\\\0904Falcon\\\\next\\\\pages\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\LT\\\\Desktop\\\\0904Falcon\\\\next\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LT\\\\Desktop\\\\0904Falcon\\\\next\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUVvQjtBQUM5QyxTQUFTRSxLQUFLLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDbkIsbUNBQW1DO0lBQ25DLHFCQUNFLDhEQUFDSCx1REFBYztrQkFDYiw0RUFBQ0ssS0FBRztZQUFDQyxLQUFLLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxNQUFNO2dCQUFFQyxhQUFhLEVBQUUsUUFBUTthQUFFOzs4QkFDdEQsOERBQUNDLElBQUU7OEJBQUMsTUFBSTs7Ozs7d0JBQUs7Z0JBQ1pOLElBQUksQ0FBQ08sUUFBUSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO29CQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFRixDQUFDLENBQUNHLEtBQUssQ0FBQyxDQUFDO29CQUNqQyxxQkFDRSw4REFBQ1YsS0FBRztrQ0FDRiw0RUFBQ0osNERBQVE7NEJBQUNlLFVBQVUsRUFBRUosQ0FBQyxDQUFDSSxVQUFVOzRCQUFFQyxHQUFHLEVBQUVMLENBQUMsQ0FBQ0ssR0FBRzs0QkFBRUYsS0FBSyxFQUFFSCxDQUFDLENBQUNHLEtBQUs7Ozs7O2lDQUFJO3VCQUQxREgsQ0FBQyxDQUFDTSxXQUFXOzs7OzZCQUVqQixDQUNOO2lCQUNILENBQUM7Ozs7OztnQkFDRTs7Ozs7WUFDUyxDQUNqQjtDQUNIO0FBakJRaEIsS0FBQUEsS0FBSzs7QUFvQ2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTmV3c0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3c0NhcmRcIjtcclxuZnVuY3Rpb24gSW5kZXgoeyBkYXRhIH0pIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEuYXJ0aWNsZXNbMF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgPGgxPueGsemWgOaWsOiBnjwvaDE+XHJcbiAgICAgICAge2RhdGEuYXJ0aWNsZXMubWFwKChkKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIiEhISEhISEhXCIsIGQudGl0bGUpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2QucHVibGlzaGVkQXR9PlxyXG4gICAgICAgICAgICAgIDxOZXdzQ2FyZCB1cmxUb0ltYWdlPXtkLnVybFRvSW1hZ2V9IHVybD17ZC51cmx9IHRpdGxlPXtkLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBjb250ZXh0LCBwYXJhbXMgfSkge1xyXG4gIGxldCByZXN1bHQ7XHJcbiAgdHJ5IHtcclxuICAgIHJlc3VsdCA9IGF3YWl0IGF4aW9zKFxyXG4gICAgICBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dHcmYXBpS2V5PWMxNGFjMTEzMmM1YjRmYWJhYzdlZTBiYjE4MThlYTc5YFxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzdWx0ID0gbnVsbDtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQuc3RhdHVzID09PSAyMDAgPyByZXN1bHQuZGF0YSA6IGZhbHNlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5ld3NDYXJkIiwiSW5kZXgiLCJkYXRhIiwiRnJhZ21lbnQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaDEiLCJhcnRpY2xlcyIsIm1hcCIsImQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJ1cmxUb0ltYWdlIiwidXJsIiwicHVibGlzaGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
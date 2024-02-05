/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layouts/PreLoader */ \"./src/layouts/PreLoader.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoader(false);\n        }, 500);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"DeekieLabs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"Content-Type\",\n                        content: \"text/html; charset=utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"HandheldFriendly\",\n                        content: \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"bslthemes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/bootstrap.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/fonts/font-awesome/css/font-awesome.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/magnific-popup.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/splitting.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/swiper.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/vendors/animate.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/style.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"assets/css/dark.css\",\n                        type: \"text/css\",\n                        media: \"all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            loader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_PreLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                lineNumber: 87,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUN5QjtBQUNMO0FBQ2xCO0FBQy9CLE1BQU1LLE1BQU0sQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUFLO0lBQ3hDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLFdBQVcsSUFBTTtZQUNmRCxVQUFVLEtBQUs7UUFDakIsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUiwyQ0FBUUE7OzBCQUNQLDhEQUFDRCxrREFBSUE7O2tDQUNILDhEQUFDVztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsV0FBVTt3QkFBZUMsU0FBUTs7Ozs7O2tDQUN2Qyw4REFBQ0Y7d0JBQUtDLFdBQVU7d0JBQWtCQyxTQUFROzs7Ozs7a0NBQzFDLDhEQUFDRjt3QkFBS0csTUFBSzt3QkFBV0QsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0Y7d0JBQUtHLE1BQUs7d0JBQW1CRCxTQUFROzs7Ozs7a0NBQ3RDLDhEQUFDRjt3QkFBS0csTUFBSzt3QkFBU0QsU0FBUTs7Ozs7O2tDQUU1Qiw4REFBQ0U7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FHUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7OztrQ0FFUiw4REFBQ0o7d0JBQ0NDLEtBQUk7d0JBQ0pDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU07Ozs7Ozs7Ozs7OztZQUtUWix3QkFBVSw4REFBQ0osOERBQVNBOzs7OzswQkFDckIsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUNBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVpcXVlLXJlYWN0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJlTG9hZGVyIGZyb20gXCIuLi9zcmMvbGF5b3V0cy9QcmVMb2FkZXJcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgIH0sIDUwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RGVla2llTGFiczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJIYW5kaGVsZEZyaWVuZGx5XCIgY29udGVudD1cInRydWVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImJzbHRoZW1lc1wiIC8+XG4gICAgICAgIHsvKiBGb250cyAqL31cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvc3QlM0EwJTJDMTAwJTNCMCUyQzIwMCUzQjAlMkMzMDAlM0IwJTJDNDAwJTNCMCUyQzUwMCUzQjAlMkM2MDAlM0IwJTJDNzAwJTNCMCUyQzgwMCUzQjAlMkM5MDAlM0IxJTJDMTAwJTNCMSUyQzIwMCUzQjElMkMzMDAlM0IxJTJDNDAwJTNCMSUyQzUwMCUzQjElMkM2MDAlM0IxJTJDNzAwJTNCMSUyQzgwMCUzQjElMkM5MDAlN0NDYXZlYXQlM0E0MDAlM0I1MDAlM0I2MDAlM0I3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byUzQTEwMCUyQzEwMGl0YWxpYyUyQzIwMCUyQzIwMGl0YWxpYyUyQzMwMCUyQzMwMGl0YWxpYyUyQzQwMCUyQzQwMGl0YWxpYyUyQzUwMCUyQzUwMGl0YWxpYyUyQzYwMCUyQzYwMGl0YWxpYyUyQzcwMCUyQzcwMGl0YWxpYyUyQzgwMCUyQzgwMGl0YWxpYyUyQzkwMCUyQzkwMGl0YWxpYyU3Q1JvYm90bytTbGFiJTNBMTAwJTJDMTAwaXRhbGljJTJDMjAwJTJDMjAwaXRhbGljJTJDMzAwJTJDMzAwaXRhbGljJTJDNDAwJTJDNDAwaXRhbGljJTJDNTAwJTJDNTAwaXRhbGljJTJDNjAwJTJDNjAwaXRhbGljJTJDNzAwJTJDNzAwaXRhbGljJTJDODAwJTJDODAwaXRhbGljJTJDOTAwJTJDOTAwaXRhbGljJmRpc3BsYXk9YXV0b1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBDU1MgU1RZTEVTICovfVxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL3ZlbmRvcnMvYm9vdHN0cmFwLmNzc1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImFzc2V0cy9mb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgbWVkaWE9XCJhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL3ZlbmRvcnMvbWFnbmlmaWMtcG9wdXAuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy92ZW5kb3JzL3NwbGl0dGluZy5jc3NcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgbWVkaWE9XCJhbGxcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJhc3NldHMvY3NzL3ZlbmRvcnMvc3dpcGVyLmNzc1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3MvdmVuZG9ycy9hbmltYXRlLmNzc1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImFzc2V0cy9jc3Mvc3R5bGUuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIG1lZGlhPVwiYWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiYXNzZXRzL2Nzcy9kYXJrLmNzc1wiXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICBtZWRpYT1cImFsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIHsvKiBGYXZpY29uICovfVxuICAgICAgIFxuICAgICAgPC9IZWFkPlxuICAgICAge2xvYWRlciAmJiA8UHJlTG9hZGVyIC8+fVxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJlTG9hZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0VGltZW91dCIsInRpdGxlIiwibWV0YSIsImh0dHBFcXVpdiIsImNvbnRlbnQiLCJuYW1lIiwibGluayIsInJlbCIsImhyZWYiLCJ0eXBlIiwibWVkaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/layouts/PreLoader.js":
/*!**********************************!*\
  !*** ./src/layouts/PreLoader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PreLoader = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preloader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"centrize full-width\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"vertical-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"spinner-logo\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/images/logo2copy.png\",\n                                alt: \"Luique - Personal Portfolio HTML Template\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n                                lineNumber: 10,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-dot\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner spinner-line\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/layouts/PreLoader.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreLoader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9QcmVMb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNqQyxNQUFNQyxZQUFZLElBQU07SUFDdEIscUJBQ0UsOERBQUNELDJDQUFRQTtrQkFFUCw0RUFBQ0U7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUNDQyxLQUFJO2dDQUNKQyxLQUFJOzs7Ozs7MENBRU4sOERBQUNKO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83QjtBQUNBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVpcXVlLXJlYWN0Ly4vc3JjL2xheW91dHMvUHJlTG9hZGVyLmpzP2NjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgUHJlTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiBQcmVsb2FkZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50cml6ZSBmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nbzJjb3B5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJMdWlxdWUgLSBQZXJzb25hbCBQb3J0Zm9saW8gSFRNTCBUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItZG90XCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXIgc3Bpbm5lci1saW5lXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByZUxvYWRlcjtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiUHJlTG9hZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/PreLoader.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
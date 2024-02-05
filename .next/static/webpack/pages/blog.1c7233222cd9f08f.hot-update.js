"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.jsx":
/*!************************!*\
  !*** ./pages/blog.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layouts/Layout */ \"./src/layouts/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchBlogPosts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/user/api/blog/\");\n                setBlogPosts(response.data);\n            } catch (error) {\n                console.error(\"Error fetching blog posts:\", error);\n            }\n        };\n        fetchBlogPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"section section-inner started-heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-titles align-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"m-title splitting-text-anim-1 scroll-animate\",\n                                \"data-splitting\": \"words\",\n                                \"data-animate\": \"active\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \" Our Blogs \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-subtitle splitting-text-anim-1 scroll-animate\",\n                                \"data-splitting\": \"words\",\n                                \"data-animate\": \"active\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \" Recent Articles \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"section section-inner m-archive\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-xs-12 col-sm-12 col-md-12 col-lg-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"articles-container\",\n                                        children: blogPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"archive-item scrolla-element-anim-1 scroll-animate\",\n                                                \"data-animate\": \"active\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"image\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: \"/blog/\".concat(post.id),\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: post.image,\n                                                                    alt: post.title,\n                                                                    loading: \"lazy\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                    lineNumber: 63,\n                                                                    columnNumber: 27\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 25\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"desc\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"category lui-subtitle\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    children: post.date\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                    lineNumber: 73,\n                                                                    columnNumber: 25\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                lineNumber: 72,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                className: \"lui-title\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                    href: \"/blog/\".concat(post.id),\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                        children: post.title\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                        lineNumber: 77,\n                                                                        columnNumber: 27\n                                                                    }, undefined)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                    lineNumber: 76,\n                                                                    columnNumber: 25\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"lui-text\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        children: post.description\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                        lineNumber: 81,\n                                                                        columnNumber: 25\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"readmore\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                            href: \"/blog/\".concat(post.id),\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                                className: \"lnk\",\n                                                                                children: \"Read more\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                                lineNumber: 84,\n                                                                                columnNumber: 29\n                                                                            }, undefined)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                            lineNumber: 83,\n                                                                            columnNumber: 27\n                                                                        }, undefined)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                        lineNumber: 82,\n                                                                        columnNumber: 25\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                                lineNumber: 80,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, post.id, true, {\n                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"pager\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-xs-12 col-sm-12 col-md-12 col-lg-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/pages/blog.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"XPnXzGHc6ei3+85WAloLzHNf/BE=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDekI7QUFDRztBQUNjO0FBRTNDLE1BQU1NLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxpQkFBaUIsVUFBWTtZQUNqQyxJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVAsaURBQVMsQ0FBQztnQkFDakNLLGFBQWFFLFNBQVNFLElBQUk7WUFDNUIsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM5QztRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNKLDJEQUFNQTs7MEJBRUwsOERBQUNVO2dCQUFRQyxXQUFVOzBCQUNqQiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBRWIsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQ0NGLFdBQVU7Z0NBQ1ZHLGtCQUFlO2dDQUNmQyxnQkFBYTswQ0FFYiw0RUFBQ0M7OENBQUs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDSjtnQ0FDQ0QsV0FBVTtnQ0FDVkcsa0JBQWU7Z0NBQ2ZDLGdCQUFhOzBDQUViLDRFQUFDQzs4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9kLDhEQUFDSjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUViLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWlQsVUFBVWUsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDTjtnREFFQ0QsV0FBVTtnREFDVkksZ0JBQWE7O2tFQUViLDhEQUFDSDt3REFBSUQsV0FBVTtrRUFDYiw0RUFBQ1osa0RBQUlBOzREQUFDb0IsTUFBTSxTQUFpQixPQUFSRCxLQUFLRSxFQUFFO3NFQUMxQiw0RUFBQ0M7MEVBQ0MsNEVBQUNDO29FQUNDQyxLQUFLTCxLQUFLTSxLQUFLO29FQUNmQyxLQUFLUCxLQUFLUSxLQUFLO29FQUNmQyxTQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBS2hCLDhEQUFDZjt3REFBSUQsV0FBVTs7MEVBQ2IsOERBQUNDO2dFQUFJRCxXQUFVOzBFQUNiLDRFQUFDSzs4RUFBTUUsS0FBS1UsSUFBSTs7Ozs7Ozs7Ozs7MEVBRWxCLDhEQUFDQztnRUFBR2xCLFdBQVU7MEVBQ1osNEVBQUNaLGtEQUFJQTtvRUFBQ29CLE1BQU0sU0FBaUIsT0FBUkQsS0FBS0UsRUFBRTs4RUFDMUIsNEVBQUNDO2tGQUFHSCxLQUFLUSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzBFQUdsQiw4REFBQ2Q7Z0VBQUlELFdBQVU7O2tGQUNiLDhEQUFDbUI7a0ZBQUdaLEtBQUthLFdBQVc7Ozs7OztrRkFDcEIsOERBQUNuQjt3RUFBSUQsV0FBVTtrRkFDYiw0RUFBQ1osa0RBQUlBOzRFQUFDb0IsTUFBTSxTQUFpQixPQUFSRCxLQUFLRSxFQUFFO3NGQUMxQiw0RUFBQ0M7Z0ZBQUVWLFdBQVU7MEZBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQTVCdEJPLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7a0RBb0NsQiw4REFBQ1I7d0NBQUlELFdBQVU7Ozs7Ozs7Ozs7OzswQ0FJakIsOERBQUNDO2dDQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTNCO0dBcEdNVjtLQUFBQTtBQXNHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nLmpzeD85YTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3NyYy9sYXlvdXRzL0xheW91dCc7XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtibG9nUG9zdHMsIHNldEJsb2dQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEJsb2dQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXIvYXBpL2Jsb2cvJyk7XHJcbiAgICAgICAgc2V0QmxvZ1Bvc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJsb2cgcG9zdHM6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoQmxvZ1Bvc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgey8qIFNlY3Rpb24gU3RhcnRlZCBIZWFkaW5nICovfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24taW5uZXIgc3RhcnRlZC1oZWFkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLXRpdGxlcyBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS10aXRsZSBzcGxpdHRpbmctdGV4dC1hbmltLTEgc2Nyb2xsLWFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtc3BsaXR0aW5nPVwid29yZHNcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW5pbWF0ZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj4gT3VyIEJsb2dzIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tc3VidGl0bGUgc3BsaXR0aW5nLXRleHQtYW5pbS0xIHNjcm9sbC1hbmltYXRlXCJcclxuICAgICAgICAgICAgICBkYXRhLXNwbGl0dGluZz1cIndvcmRzXCJcclxuICAgICAgICAgICAgICBkYXRhLWFuaW1hdGU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+IFJlY2VudCBBcnRpY2xlcyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHsvKiBTZWN0aW9uIC0gQmxvZyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHNlY3Rpb24taW5uZXIgbS1hcmNoaXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICB7LyogQmxvZyBJdGVtcyAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge2Jsb2dQb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcmNoaXZlLWl0ZW0gc2Nyb2xsYS1lbGVtZW50LWFuaW0tMSBzY3JvbGwtYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRlPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5IGx1aS1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImx1aS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHVpLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRtb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxua1wiPlJlYWQgbW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFBhZ2luYXRpb24gb3IgcGFnZSBuYXZpZ2F0aW9uIGNhbiBiZSBhZGRlZCBoZXJlICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgIHsvKiBzaWRlYmFyICovfVxyXG4gICAgICAgICAgICAgIHsvKiAuLi4gKFlvdXIgZXhpc3RpbmcgSlNYIGNvZGUpICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC4uLiAoWW91ciBleGlzdGluZyBKU1ggY29kZSkgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMaW5rIiwiTGF5b3V0IiwiQmxvZyIsImJsb2dQb3N0cyIsInNldEJsb2dQb3N0cyIsImZldGNoQmxvZ1Bvc3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiZGF0YS1zcGxpdHRpbmciLCJkYXRhLWFuaW1hdGUiLCJzcGFuIiwibWFwIiwicG9zdCIsImhyZWYiLCJpZCIsImEiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwibG9hZGluZyIsImRhdGUiLCJoNSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.jsx\n"));

/***/ })

});
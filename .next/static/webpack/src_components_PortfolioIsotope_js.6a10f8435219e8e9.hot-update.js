"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_PortfolioIsotope_js",{

/***/ "./src/components/PortfolioIsotope.js":
/*!********************************************!*\
  !*** ./src/components/PortfolioIsotope.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst PortfolioIsotope = (param)=>{\n    let { noViewMore  } = param;\n    _s();\n    const isotope = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"*\");\n    const backendUrl = \"http://127.0.0.1:8000\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchCategories();\n        fetchProjects();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isotope.current) {\n            filterKey === \"*\" ? isotope.current.arrange({\n                filter: \"*\"\n            }) : isotope.current.arrange({\n                filter: \".\".concat(filterKey)\n            });\n        }\n    }, [\n        filterKey\n    ]);\n    const fetchCategories = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(backendUrl, \"/user/api/project-category/\"));\n            const data = await response.json();\n            setCategories(data);\n        } catch (error) {\n            console.error(\"Error fetching categories:\", error);\n        }\n    };\n    const fetchProjects = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(backendUrl, \"/user/api/project/\"));\n            const data = await response.json();\n            setProjects(data);\n        } catch (error) {\n            console.error(\"Error fetching projects:\", error);\n        }\n    };\n    const handleFilterKeyChange = (key)=>()=>{\n            setFilterKey(key);\n        };\n    const activeBtn = (value)=>value === filterKey ? \"active\" : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"works-box\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"filter-links scrolla-element-anim-1 scroll-animate\",\n                    \"data-animate\": \"active\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"c-pointer lui-subtitle \".concat(activeBtn(\"*\")),\n                            onClick: handleFilterKeyChange(\"*\"),\n                            \"data-href\": \".works-col\",\n                            children: \"All\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"c-pointer lui-subtitle \".concat(activeBtn(category.name)),\n                                onClick: handleFilterKeyChange(category.name),\n                                \"data-href\": \".\".concat(category.name),\n                                children: category.name\n                            }, category.id, false, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"works-items works-masonry-items row\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-\".concat(project.category.name),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"works-item scrolla-element-anim-1 scroll-animate sorting-\".concat(project.category.name),\n                                \"data-animate\": \"active\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"image\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"img\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: project.url,\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        decoding: \"async\",\n                                                        src: project.image,\n                                                        alt: project.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"overlay\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"category\",\n                                                children: project.category.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                className: \"name\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: project.description.length > 50 ? \"\".concat(project.description.slice(0, 100), \"...\") : project.description\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: project.url,\n                                                className: \"lnk\",\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                children: \"See project\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-img\",\n                                        style: {\n                                            backgroundImage: \"url(assets/images/pat-2.png)\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, undefined)\n                        }, project.id, false, {\n                            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                !noViewMore && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"load-more-link\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/works\",\n                        className: \"btn scrolla-element-anim-1 scroll-animate\",\n                        \"data-animate\": \"active\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"View More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dicksonkerobean/Dev/React/Portfolio/portfolio_frontend/src/components/PortfolioIsotope.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PortfolioIsotope, \"RKUP8hqPuUX3Z6eu+gS4WZoDxCY=\");\n_c = PortfolioIsotope;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioIsotope);\nvar _c;\n$RefreshReg$(_c, \"PortfolioIsotope\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO3dEQUFRQyxLQUFLUCxRQUFRUSxLQUFLO3dEQUFFQyxLQUFLVCxRQUFRVSxLQUFLOzs7Ozs7a0VBQzVELDhEQUFDQzt3REFBS3BCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSXRCLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNvQjtnREFBS3BCLFdBQVU7MERBQVlTLFFBQVFILFFBQVEsQ0FBQ0MsSUFBSTs7Ozs7OzBEQUNqRCw4REFBQ2M7Z0RBQUdyQixXQUFVOzBEQUFRUyxRQUFRVSxLQUFLOzs7Ozs7MERBQ25DLDhEQUFDcEI7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNzQjs4REFDQWIsUUFBUWMsV0FBVyxDQUFDQyxNQUFNLEdBQUcsS0FDMUIsR0FBcUMsT0FBbENmLFFBQVFjLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsTUFBSyxTQUNyQ2hCLFFBQVFjLFdBQVc7Ozs7Ozs7Ozs7OzBEQUd6Qiw4REFBQ3JCO2dEQUFFUSxNQUFNRCxRQUFRRSxHQUFHO2dEQUFFWCxXQUFVO2dEQUFNWSxRQUFPO2dEQUFTQyxLQUFJOzBEQUFzQjs7Ozs7Ozs7Ozs7O2tEQUVsRiw4REFBQ2Q7d0NBQ0RDLFdBQVU7d0NBQ1YwQixPQUFPOzRDQUNMQyxpQkFBaUI7d0NBQ25COzs7Ozs7Ozs7Ozs7MkJBM0JNbEIsUUFBUUQsRUFBRTs7Ozs7Ozs7OztnQkFpQ3ZCLENBQUNwQyw0QkFDQSw4REFBQzJCO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRTt3QkFBRVEsTUFBSzt3QkFBU1YsV0FBVTt3QkFBNENDLGdCQUFhO2tDQUNsRiw0RUFBQ21CO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7R0FyR01qRDtLQUFBQTtBQXVHTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpb0lzb3RvcGUuanM/MGU3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXNvdG9wZSBmcm9tIFwiaXNvdG9wZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUG9ydGZvbGlvSXNvdG9wZSA9ICh7IG5vVmlld01vcmUgfSkgPT4ge1xyXG4gIGNvbnN0IGlzb3RvcGUgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlcktleSwgc2V0RmlsdGVyS2V5XSA9IHVzZVN0YXRlKFwiKlwiKTtcclxuXHJcbiAgY29uc3QgYmFja2VuZFVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWVzKCk7XHJcbiAgICBmZXRjaFByb2plY3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzb3RvcGUuY3VycmVudCkge1xyXG4gICAgICBmaWx0ZXJLZXkgPT09IFwiKlwiXHJcbiAgICAgICAgPyBpc290b3BlLmN1cnJlbnQuYXJyYW5nZSh7IGZpbHRlcjogYCpgIH0pXHJcbiAgICAgICAgOiBpc290b3BlLmN1cnJlbnQuYXJyYW5nZSh7IGZpbHRlcjogYC4ke2ZpbHRlcktleX1gIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtmaWx0ZXJLZXldKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kVXJsfS91c2VyL2FwaS9wcm9qZWN0LWNhdGVnb3J5L2ApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kVXJsfS91c2VyL2FwaS9wcm9qZWN0L2ApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQcm9qZWN0cyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9qZWN0czpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbHRlcktleUNoYW5nZSA9IChrZXkpID0+ICgpID0+IHtcclxuICAgIHNldEZpbHRlcktleShrZXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUJ0biA9ICh2YWx1ZSkgPT4gKHZhbHVlID09PSBmaWx0ZXJLZXkgPyBcImFjdGl2ZVwiIDogXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3MtYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItbGlua3Mgc2Nyb2xsYS1lbGVtZW50LWFuaW0tMSBzY3JvbGwtYW5pbWF0ZVwiIGRhdGEtYW5pbWF0ZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtgYy1wb2ludGVyIGx1aS1zdWJ0aXRsZSAke2FjdGl2ZUJ0bihcIipcIil9YH0gb25DbGljaz17aGFuZGxlRmlsdGVyS2V5Q2hhbmdlKFwiKlwiKX0gZGF0YS1ocmVmPVwiLndvcmtzLWNvbFwiPkFsbDwvYT5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgICAgPGEga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPXtgYy1wb2ludGVyIGx1aS1zdWJ0aXRsZSAke2FjdGl2ZUJ0bihjYXRlZ29yeS5uYW1lKX1gfSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJLZXlDaGFuZ2UoY2F0ZWdvcnkubmFtZSl9IGRhdGEtaHJlZj17YC4ke2NhdGVnb3J5Lm5hbWV9YH0+e2NhdGVnb3J5Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3Jrcy1pdGVtcyB3b3Jrcy1tYXNvbnJ5LWl0ZW1zIHJvd1wiPlxyXG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPXtgd29ya3MtY29sIGNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMiBzb3J0aW5nLSR7cHJvamVjdC5jYXRlZ29yeS5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd29ya3MtaXRlbSBzY3JvbGxhLWVsZW1lbnQtYW5pbS0xIHNjcm9sbC1hbmltYXRlIHNvcnRpbmctJHtwcm9qZWN0LmNhdGVnb3J5Lm5hbWV9YH0gZGF0YS1hbmltYXRlPVwiYWN0aXZlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRlY29kaW5nPVwiYXN5bmNcIiBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD17cHJvamVjdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPntwcm9qZWN0LmNhdGVnb3J5Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9qZWN0LnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9uLmxlbmd0aCA+IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2plY3QuZGVzY3JpcHRpb24uc2xpY2UoMCwgMTAwKX0uLi5gXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHByb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC51cmx9IGNsYXNzTmFtZT1cImxua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5TZWUgcHJvamVjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW1nXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoYXNzZXRzL2ltYWdlcy9wYXQtMi5wbmcpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyFub1ZpZXdNb3JlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1tb3JlLWxpbmtcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi93b3Jrc1wiIGNsYXNzTmFtZT1cImJ0biBzY3JvbGxhLWVsZW1lbnQtYW5pbS0xIHNjcm9sbC1hbmltYXRlXCIgZGF0YS1hbmltYXRlPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VmlldyBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb0lzb3RvcGU7XHJcbiJdLCJuYW1lcyI6WyJJc290b3BlIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBvcnRmb2xpb0lzb3RvcGUiLCJub1ZpZXdNb3JlIiwiaXNvdG9wZSIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImZpbHRlcktleSIsInNldEZpbHRlcktleSIsImJhY2tlbmRVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJmZXRjaENhdGVnb3JpZXMiLCJmZXRjaFByb2plY3RzIiwiY3VycmVudCIsImFycmFuZ2UiLCJmaWx0ZXIiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVGaWx0ZXJLZXlDaGFuZ2UiLCJrZXkiLCJhY3RpdmVCdG4iLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtYW5pbWF0ZSIsImEiLCJvbkNsaWNrIiwiZGF0YS1ocmVmIiwibWFwIiwiY2F0ZWdvcnkiLCJuYW1lIiwiaWQiLCJwcm9qZWN0IiwiaHJlZiIsInVybCIsInRhcmdldCIsInJlbCIsImltZyIsImRlY29kaW5nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsInNwYW4iLCJoNSIsInAiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsInNsaWNlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PortfolioIsotope.js\n"));

/***/ })

});
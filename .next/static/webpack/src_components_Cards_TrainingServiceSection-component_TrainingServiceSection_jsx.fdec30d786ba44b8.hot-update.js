"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Cards_TrainingServiceSection-component_TrainingServiceSection_jsx",{

/***/ "./src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx":
/*!******************************************************************************************!*\
  !*** ./src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx ***!
  \******************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst HeadData = {\n    badge: \"Training Service Section\",\n    title_1: \"Empower Your \",\n    title_span: \"Tech Career\",\n    title_2: \" with Our Training Programs\",\n    description: \"Select a program that aligns with your goals. Whether you're a Beginner or looking to join our intensive six-month Bootcamp, we offer a variety of options tailored to your needs.\"\n};\nconst CardsData = [\n    {\n        label: \"Comming Soon\",\n        isDisabled: true,\n        title: \"Build Your Base\",\n        description: \"be a real software engineer and Master problem-solving, data structures, algorithms, and more to become a proficient software engineer.\",\n        overlayStyle: \"radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)\"\n    },\n    {\n        label: \"Special\",\n        isPremier: true,\n        title: \"From Learner to Leader\",\n        description: \"A 6-month comprehensive journey covering all tech essentials, leadership skills, and networking.\",\n        overlayStyle: \"radial-gradient(329.95% 173.05% at 50.04% 100%, #fc36d0 0%, rgba(252, 54, 208, 1) 0.52%, rgba(0, 49, 239, 1) 18.71%, rgba(23, 22, 25, 1) 28.65%, rgba(23, 22, 25, 1) 100%)\"\n    },\n    {\n        label: \"Demo\",\n        title: \"Focus and Dive Deep\",\n        description: \"Tackle short, intense projects and detailed studies on specific tech topics.\",\n        overlayStyle: \"radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)\"\n    }\n];\nconst Badge = (param)=>{\n    let { text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"badge w-fit mx-auto text-white/70 rounded-lg border border-white/40 px-2 py-1\",\n        children: text\n    }, void 0, false, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Badge;\nconst Card = (param)=>{\n    let { isPremier, title, description, overlayStyle, label, isDisabled } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/Contact\",\n        passHref: true,\n        className: \"bg-[#181619] rounded-2xl h-[200px] relative overflow-hidden text-center p-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-105 \\n        \".concat(isPremier ? \"shadow-[0_0_0_0_#fff] hover:shadow-[0_0_.5rem_0rem_rgb(234,179,8)] border-2 border-[rgba(162,121,0,0.6)]\" : \"hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)]\", \"\\n        \").concat(isDisabled && \"hover:!scale-100 hover:shadow-none !opacity-40 !cursor-not-allowed\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-3xl bg-gradient-to-r from-white to-gray-800 text-transparent bg-clip-text\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[14px] px-2 border border-white/60 rounded-xl \".concat(isPremier && \"border-yellow-500 text-yellow-500\"),\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[14px] text-start font-semibold\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 left-0 w-full h-full opacity-50\",\n                style: {\n                    background: overlayStyle\n                }\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Card;\nfunction TrainingServiceSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-[1400px] flex flex-col gap-8 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                        text: HeadData.badge\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl md:text-6xl font-semibold\",\n                        children: [\n                            HeadData.title_1,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text\",\n                                children: HeadData.title_span\n                            }, void 0, false, {\n                                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            HeadData.title_2\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white/50 text-lg md:text-base\",\n                        children: HeadData.description\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5\",\n                children: CardsData.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                        ...card\n                    }, index, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_c2 = TrainingServiceSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrainingServiceSection);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Badge\");\n$RefreshReg$(_c1, \"Card\");\n$RefreshReg$(_c2, \"TrainingServiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkcy9UcmFpbmluZ1NlcnZpY2VTZWN0aW9uLWNvbXBvbmVudC9UcmFpbmluZ1NlcnZpY2VTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNGO0FBRTdCLE1BQU1FLFdBQVc7SUFDYkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLFlBQVk7SUFDWkMsU0FBUztJQUNUQyxhQUFhO0FBQ2pCO0FBRUEsTUFBTUMsWUFBWTtJQUNkO1FBQ0lDLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BKLGFBQWE7UUFDYkssY0FBYztJQUNsQjtJQUNBO1FBQ0lILE9BQU87UUFDUEksV0FBVztRQUNYRixPQUFPO1FBQ1BKLGFBQWE7UUFDYkssY0FBYztJQUNsQjtJQUNBO1FBQ0lILE9BQU87UUFDUEUsT0FBTztRQUNQSixhQUFhO1FBQ2JLLGNBQWM7SUFDbEI7Q0FDSDtBQUVELE1BQU1FLFFBQVE7UUFBQyxFQUFFQyxJQUFJLEVBQUU7eUJBQ25CLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNWRjs7Ozs7OztLQUZIRDtBQU1OLE1BQU1JLE9BQU87UUFBQyxFQUFFTCxTQUFTLEVBQUVGLEtBQUssRUFBRUosV0FBVyxFQUFFSyxZQUFZLEVBQUVILEtBQUssRUFBRUMsVUFBVSxFQUFFO3lCQUM1RSw4REFBQ1Qsa0RBQUlBO1FBQUNrQixNQUFLO1FBQ1BDLFVBQVU7UUFDVkgsV0FBVywySkFFVFAsT0FEQUcsWUFBWSw2R0FBNkcsb0RBQW1ELGNBQ3pGLE9BQW5GSCxjQUFjOzswQkFFaEIsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0k7d0JBQUdKLFdBQVU7a0NBQ1ROOzs7Ozs7a0NBRUwsOERBQUNLO3dCQUFJQyxXQUFXLHNEQUF1RyxPQUFqREosYUFBYTtrQ0FDOUVKOzs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNhO2dCQUFFTCxXQUFVOzBCQUF3Q1Y7Ozs7OzswQkFDckQsOERBQUNTO2dCQUFJQyxXQUFVO2dCQUFpRE0sT0FBTztvQkFBRUMsWUFBWVo7Z0JBQWE7Ozs7Ozs7Ozs7Ozs7TUFoQnBHTTtBQW9CTixTQUFTTztJQUNMLHFCQUNJLDhEQUFDVDtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSDt3QkFBTUMsTUFBTWIsU0FBU0MsS0FBSzs7Ozs7O2tDQUMzQiw4REFBQ2tCO3dCQUFHSixXQUFVOzs0QkFDVGYsU0FBU0UsT0FBTzswQ0FDakIsOERBQUNzQjtnQ0FBS1QsV0FBVTswQ0FDWGYsU0FBU0csVUFBVTs7Ozs7OzRCQUV2QkgsU0FBU0ksT0FBTzs7Ozs7OztrQ0FFckIsOERBQUNnQjt3QkFBRUwsV0FBVTtrQ0FBc0NmLFNBQVNLLFdBQVc7Ozs7Ozs7Ozs7OzswQkFFM0UsOERBQUNTO2dCQUFJQyxXQUFVOzBCQUNWVCxVQUFVbUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNsQiw4REFBQ1g7d0JBQWtCLEdBQUdVLElBQUk7dUJBQWZDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSy9CO01BckJTSjtBQXVCVCwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL1RyYWluaW5nU2VydmljZVNlY3Rpb24tY29tcG9uZW50L1RyYWluaW5nU2VydmljZVNlY3Rpb24uanN4PzBiMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZERhdGEgPSB7XG4gICAgYmFkZ2U6IFwiVHJhaW5pbmcgU2VydmljZSBTZWN0aW9uXCIsXG4gICAgdGl0bGVfMTogXCJFbXBvd2VyIFlvdXIgXCIsXG4gICAgdGl0bGVfc3BhbjogXCJUZWNoIENhcmVlclwiLFxuICAgIHRpdGxlXzI6IFwiIHdpdGggT3VyIFRyYWluaW5nIFByb2dyYW1zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VsZWN0IGEgcHJvZ3JhbSB0aGF0IGFsaWducyB3aXRoIHlvdXIgZ29hbHMuIFdoZXRoZXIgeW91J3JlIGEgQmVnaW5uZXIgb3IgbG9va2luZyB0byBqb2luIG91ciBpbnRlbnNpdmUgc2l4LW1vbnRoIEJvb3RjYW1wLCB3ZSBvZmZlciBhIHZhcmlldHkgb2Ygb3B0aW9ucyB0YWlsb3JlZCB0byB5b3VyIG5lZWRzLlwiXG59O1xuXG5jb25zdCBDYXJkc0RhdGEgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogXCJDb21taW5nIFNvb25cIixcbiAgICAgICAgaXNEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IFwiQnVpbGQgWW91ciBCYXNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImJlIGEgcmVhbCBzb2Z0d2FyZSBlbmdpbmVlciBhbmQgTWFzdGVyIHByb2JsZW0tc29sdmluZywgZGF0YSBzdHJ1Y3R1cmVzLCBhbGdvcml0aG1zLCBhbmQgbW9yZSB0byBiZWNvbWUgYSBwcm9maWNpZW50IHNvZnR3YXJlIGVuZ2luZWVyLlwiLFxuICAgICAgICBvdmVybGF5U3R5bGU6ICdyYWRpYWwtZ3JhZGllbnQoMTM2LjIyJSA3NS44JSBhdCA1MCUgMjcuNTclLCAjMTcxNjE5IDAlLCByZ2JhKDIzLCAyMiwgMjUsIDEpIDYxLjYyJSwgcmdiYSgwLCA0OSwgMjM5LCAxKSA3OS4xNyUsIHJnYmEoMjUxLCA1MywgMjA4LCAxKSAxMDAlKSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU3BlY2lhbFwiLFxuICAgICAgICBpc1ByZW1pZXI6IHRydWUsXG4gICAgICAgIHRpdGxlOiBcIkZyb20gTGVhcm5lciB0byBMZWFkZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSA2LW1vbnRoIGNvbXByZWhlbnNpdmUgam91cm5leSBjb3ZlcmluZyBhbGwgdGVjaCBlc3NlbnRpYWxzLCBsZWFkZXJzaGlwIHNraWxscywgYW5kIG5ldHdvcmtpbmcuXCIsXG4gICAgICAgIG92ZXJsYXlTdHlsZTogJ3JhZGlhbC1ncmFkaWVudCgzMjkuOTUlIDE3My4wNSUgYXQgNTAuMDQlIDEwMCUsICNmYzM2ZDAgMCUsIHJnYmEoMjUyLCA1NCwgMjA4LCAxKSAwLjUyJSwgcmdiYSgwLCA0OSwgMjM5LCAxKSAxOC43MSUsIHJnYmEoMjMsIDIyLCAyNSwgMSkgMjguNjUlLCByZ2JhKDIzLCAyMiwgMjUsIDEpIDEwMCUpJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogXCJEZW1vXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvY3VzIGFuZCBEaXZlIERlZXBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGFja2xlIHNob3J0LCBpbnRlbnNlIHByb2plY3RzIGFuZCBkZXRhaWxlZCBzdHVkaWVzIG9uIHNwZWNpZmljIHRlY2ggdG9waWNzLlwiLFxuICAgICAgICBvdmVybGF5U3R5bGU6ICdyYWRpYWwtZ3JhZGllbnQoMTM2LjIyJSA3NS44JSBhdCA1MCUgMjcuNTclLCAjMTcxNjE5IDAlLCByZ2JhKDIzLCAyMiwgMjUsIDEpIDYxLjYyJSwgcmdiYSgwLCA0OSwgMjM5LCAxKSA3OS4xNyUsIHJnYmEoMjUxLCA1MywgMjA4LCAxKSAxMDAlKSdcbiAgICB9XG5dO1xuXG5jb25zdCBCYWRnZSA9ICh7IHRleHQgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2Ugdy1maXQgbXgtYXV0byB0ZXh0LXdoaXRlLzcwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci13aGl0ZS80MCBweC0yIHB5LTFcIj5cbiAgICAgICAge3RleHR9XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBDYXJkID0gKHsgaXNQcmVtaWVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIG92ZXJsYXlTdHlsZSwgbGFiZWwsIGlzRGlzYWJsZWQgfSkgPT4gKFxuICAgIDxMaW5rIGhyZWY9XCIvQ29udGFjdFwiIFxuICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYmctWyMxODE2MTldIHJvdW5kZWQtMnhsIGgtWzIwMHB4XSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgcC01IGZsZXggZmxleC1jb2wgZ2FwLTUgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2NhbGUtMTA1IFxuICAgICAgICAke2lzUHJlbWllciA/IFwic2hhZG93LVswXzBfMF8wXyNmZmZdIGhvdmVyOnNoYWRvdy1bMF8wXy41cmVtXzByZW1fcmdiKDIzNCwxNzksOCldIGJvcmRlci0yIGJvcmRlci1bcmdiYSgxNjIsMTIxLDAsMC42KV1cIiA6IFwiaG92ZXI6c2hhZG93LVswXzBfLjVyZW1fMHJlbV9yZ2JhKDI1MSw1MywyMDgsMSldXCJ9XG4gICAgICAgICR7aXNEaXNhYmxlZCAmJiAnaG92ZXI6IXNjYWxlLTEwMCBob3ZlcjpzaGFkb3ctbm9uZSAhb3BhY2l0eS00MCAhY3Vyc29yLW5vdC1hbGxvd2VkJ31gfVxuICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtM3hsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZSB0by1ncmF5LTgwMCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dFwiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtWzE0cHhdIHB4LTIgYm9yZGVyIGJvcmRlci13aGl0ZS82MCByb3VuZGVkLXhsICR7aXNQcmVtaWVyICYmICdib3JkZXIteWVsbG93LTUwMCB0ZXh0LXllbGxvdy01MDAnfWB9PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTRweF0gdGV4dC1zdGFydCBmb250LXNlbWlib2xkXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBvcGFjaXR5LTUwXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogb3ZlcmxheVN0eWxlIH19IC8+XG4gICAgPC9MaW5rPlxuKTtcblxuZnVuY3Rpb24gVHJhaW5pbmdTZXJ2aWNlU2VjdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1bMTQwMHB4XSBmbGV4IGZsZXgtY29sIGdhcC04IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZCBjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGdhcC03IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG1heC13LVs4MDBweF0gcHQtNVwiPlxuICAgICAgICAgICAgICAgIDxCYWRnZSB0ZXh0PXtIZWFkRGF0YS5iYWRnZX0gLz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7SGVhZERhdGEudGl0bGVfMX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXBpbmstNjAwIHRvLWJsdWUtNTAwIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7SGVhZERhdGEudGl0bGVfc3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7SGVhZERhdGEudGl0bGVfMn1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNTAgdGV4dC1sZyBtZDp0ZXh0LWJhc2VcIj57SGVhZERhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29udGFpbmVyIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNVwiPlxuICAgICAgICAgICAgICAgIHtDYXJkc0RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSB7Li4uY2FyZH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFpbmluZ1NlcnZpY2VTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkhlYWREYXRhIiwiYmFkZ2UiLCJ0aXRsZV8xIiwidGl0bGVfc3BhbiIsInRpdGxlXzIiLCJkZXNjcmlwdGlvbiIsIkNhcmRzRGF0YSIsImxhYmVsIiwiaXNEaXNhYmxlZCIsInRpdGxlIiwib3ZlcmxheVN0eWxlIiwiaXNQcmVtaWVyIiwiQmFkZ2UiLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiQ2FyZCIsImhyZWYiLCJwYXNzSHJlZiIsImgxIiwicCIsInN0eWxlIiwiYmFja2dyb3VuZCIsIlRyYWluaW5nU2VydmljZVNlY3Rpb24iLCJzcGFuIiwibWFwIiwiY2FyZCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\n"));

/***/ })

});
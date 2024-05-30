"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Cards_TrainingServiceSection-component_TrainingServiceSection_jsx";
exports.ids = ["src_components_Cards_TrainingServiceSection-component_TrainingServiceSection_jsx"];
exports.modules = {

/***/ "./src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx":
/*!******************************************************************************************!*\
  !*** ./src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst HeadData = {\n    badge: \"Training Service Section\",\n    title_1: \"Empower Your \",\n    title_span: \"Tech Career\",\n    title_2: \" with Our Training Programs\",\n    description: \"Select a program that aligns with your goals. Whether you're a Beginner or looking to join our intensive six-month Bootcamp, we offer a variety of options tailored to your needs.\"\n};\nconst CardsData = [\n    {\n        label: \"Comming Soon\",\n        isDisabled: true,\n        title: \"Build Your Base\",\n        description: \"be a real software engineer and Master problem-solving, data structures, algorithms, and more to become a proficient software engineer.\",\n        overlayStyle: \"radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)\"\n    },\n    {\n        label: \"Special\",\n        isPremier: true,\n        title: \"From Learner to Leader\",\n        description: \"A 6-month comprehensive journey covering all tech essentials, leadership skills, and networking.\",\n        overlayStyle: \"radial-gradient(329.95% 173.05% at 50.04% 100%, #fc36d0 0%, rgba(252, 54, 208, 1) 0.52%, rgba(0, 49, 239, 1) 18.71%, rgba(23, 22, 25, 1) 28.65%, rgba(23, 22, 25, 1) 100%)\"\n    },\n    {\n        label: \"Demo\",\n        title: \"Focus and Dive Deep\",\n        description: \"Tackle short, intense projects and detailed studies on specific tech topics.\",\n        overlayStyle: \"radial-gradient(136.22% 75.8% at 50% 27.57%, #171619 0%, rgba(23, 22, 25, 1) 61.62%, rgba(0, 49, 239, 1) 79.17%, rgba(251, 53, 208, 1) 100%)\"\n    }\n];\nconst Badge = ({ text })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"badge w-fit mx-auto text-white/70 rounded-lg border border-white/40 px-2 py-1\",\n        children: text\n    }, void 0, false, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\nconst Card = ({ isPremier, title, description, overlayStyle, label, isDisabled })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/Contact\",\n        passHref: true,\n        className: `bg-[#181619] rounded-xl h-[200px] relative overflow-hidden text-center p-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-105 \n        ${isPremier ? \"shadow-[0_0_0_0_#fff] hover:shadow-[0_0_.5rem_0rem_rgb(234,179,8)] border-2 border-[rgba(162,121,0,0.6)]\" : \"hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)]\"}\n        ${isDisabled && \"hover:!scale-100 hover:shadow-none !opacity-40 !cursor-not-allowed\"}`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-2xl bg-gradient-to-r from-white to-gray-800 text-transparent bg-clip-text\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `text-[14px] px-2 border border-white/60 rounded-xl ${isPremier && \"border-yellow-500 text-yellow-500\"}`,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[14px] text-start font-semibold\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 left-0 w-full h-full opacity-50\",\n                style: {\n                    background: overlayStyle\n                }\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\nfunction TrainingServiceSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-[1400px] flex flex-col gap-8 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"head container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                        text: HeadData.badge\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl md:text-6xl font-semibold\",\n                        children: [\n                            HeadData.title_1,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text\",\n                                children: HeadData.title_span\n                            }, void 0, false, {\n                                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this),\n                            HeadData.title_2\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white/50 text-lg md:text-base\",\n                        children: HeadData.description\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5\",\n                children: CardsData.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                        ...card\n                    }, index, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrainingServiceSection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkcy9UcmFpbmluZ1NlcnZpY2VTZWN0aW9uLWNvbXBvbmVudC9UcmFpbmluZ1NlcnZpY2VTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBRTdCLE1BQU1FLFdBQVc7SUFDYkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLFlBQVk7SUFDWkMsU0FBUztJQUNUQyxhQUFhO0FBQ2pCO0FBRUEsTUFBTUMsWUFBWTtJQUNkO1FBQ0lDLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BKLGFBQWE7UUFDYkssY0FBYztJQUNsQjtJQUNBO1FBQ0lILE9BQU87UUFDUEksV0FBVztRQUNYRixPQUFPO1FBQ1BKLGFBQWE7UUFDYkssY0FBYztJQUNsQjtJQUNBO1FBQ0lILE9BQU87UUFDUEUsT0FBTztRQUNQSixhQUFhO1FBQ2JLLGNBQWM7SUFDbEI7Q0FDSDtBQUVELE1BQU1FLFFBQVEsQ0FBQyxFQUFFQyxJQUFJLEVBQUUsaUJBQ25CLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNWRjs7Ozs7O0FBSVQsTUFBTUcsT0FBTyxDQUFDLEVBQUVMLFNBQVMsRUFBRUYsS0FBSyxFQUFFSixXQUFXLEVBQUVLLFlBQVksRUFBRUgsS0FBSyxFQUFFQyxVQUFVLEVBQUUsaUJBQzVFLDhEQUFDVCxrREFBSUE7UUFBQ2tCLE1BQUs7UUFDUEMsVUFBVTtRQUNWSCxXQUFXLENBQUM7UUFDWixFQUFFSixZQUFZLDZHQUE2RyxtREFBbUQ7UUFDOUssRUFBRUgsY0FBYyxxRUFBcUUsQ0FBQzs7MEJBRXRGLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNJO3dCQUFHSixXQUFVO2tDQUNUTjs7Ozs7O2tDQUVMLDhEQUFDSzt3QkFBSUMsV0FBVyxDQUFDLG1EQUFtRCxFQUFFSixhQUFhLG9DQUFvQyxDQUFDO2tDQUNuSEo7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ2E7Z0JBQUVMLFdBQVU7MEJBQXdDVjs7Ozs7OzBCQUNyRCw4REFBQ1M7Z0JBQUlDLFdBQVU7Z0JBQWlETSxPQUFPO29CQUFFQyxZQUFZWjtnQkFBYTs7Ozs7Ozs7Ozs7O0FBSTFHLFNBQVNhO0lBQ0wscUJBQ0ksOERBQUNUO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNIO3dCQUFNQyxNQUFNYixTQUFTQyxLQUFLOzs7Ozs7a0NBQzNCLDhEQUFDa0I7d0JBQUdKLFdBQVU7OzRCQUNUZixTQUFTRSxPQUFPOzBDQUNqQiw4REFBQ3NCO2dDQUFLVCxXQUFVOzBDQUNYZixTQUFTRyxVQUFVOzs7Ozs7NEJBRXZCSCxTQUFTSSxPQUFPOzs7Ozs7O2tDQUVyQiw4REFBQ2dCO3dCQUFFTCxXQUFVO2tDQUFzQ2YsU0FBU0ssV0FBVzs7Ozs7Ozs7Ozs7OzBCQUUzRSw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1ZULFVBQVVtQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDWDt3QkFBa0IsR0FBR1UsSUFBSTt1QkFBZkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7QUFFQSxpRUFBZUosc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL1RyYWluaW5nU2VydmljZVNlY3Rpb24tY29tcG9uZW50L1RyYWluaW5nU2VydmljZVNlY3Rpb24uanN4PzBiMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZERhdGEgPSB7XG4gICAgYmFkZ2U6IFwiVHJhaW5pbmcgU2VydmljZSBTZWN0aW9uXCIsXG4gICAgdGl0bGVfMTogXCJFbXBvd2VyIFlvdXIgXCIsXG4gICAgdGl0bGVfc3BhbjogXCJUZWNoIENhcmVlclwiLFxuICAgIHRpdGxlXzI6IFwiIHdpdGggT3VyIFRyYWluaW5nIFByb2dyYW1zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2VsZWN0IGEgcHJvZ3JhbSB0aGF0IGFsaWducyB3aXRoIHlvdXIgZ29hbHMuIFdoZXRoZXIgeW91J3JlIGEgQmVnaW5uZXIgb3IgbG9va2luZyB0byBqb2luIG91ciBpbnRlbnNpdmUgc2l4LW1vbnRoIEJvb3RjYW1wLCB3ZSBvZmZlciBhIHZhcmlldHkgb2Ygb3B0aW9ucyB0YWlsb3JlZCB0byB5b3VyIG5lZWRzLlwiXG59O1xuXG5jb25zdCBDYXJkc0RhdGEgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogXCJDb21taW5nIFNvb25cIixcbiAgICAgICAgaXNEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IFwiQnVpbGQgWW91ciBCYXNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImJlIGEgcmVhbCBzb2Z0d2FyZSBlbmdpbmVlciBhbmQgTWFzdGVyIHByb2JsZW0tc29sdmluZywgZGF0YSBzdHJ1Y3R1cmVzLCBhbGdvcml0aG1zLCBhbmQgbW9yZSB0byBiZWNvbWUgYSBwcm9maWNpZW50IHNvZnR3YXJlIGVuZ2luZWVyLlwiLFxuICAgICAgICBvdmVybGF5U3R5bGU6ICdyYWRpYWwtZ3JhZGllbnQoMTM2LjIyJSA3NS44JSBhdCA1MCUgMjcuNTclLCAjMTcxNjE5IDAlLCByZ2JhKDIzLCAyMiwgMjUsIDEpIDYxLjYyJSwgcmdiYSgwLCA0OSwgMjM5LCAxKSA3OS4xNyUsIHJnYmEoMjUxLCA1MywgMjA4LCAxKSAxMDAlKSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6IFwiU3BlY2lhbFwiLFxuICAgICAgICBpc1ByZW1pZXI6IHRydWUsXG4gICAgICAgIHRpdGxlOiBcIkZyb20gTGVhcm5lciB0byBMZWFkZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSA2LW1vbnRoIGNvbXByZWhlbnNpdmUgam91cm5leSBjb3ZlcmluZyBhbGwgdGVjaCBlc3NlbnRpYWxzLCBsZWFkZXJzaGlwIHNraWxscywgYW5kIG5ldHdvcmtpbmcuXCIsXG4gICAgICAgIG92ZXJsYXlTdHlsZTogJ3JhZGlhbC1ncmFkaWVudCgzMjkuOTUlIDE3My4wNSUgYXQgNTAuMDQlIDEwMCUsICNmYzM2ZDAgMCUsIHJnYmEoMjUyLCA1NCwgMjA4LCAxKSAwLjUyJSwgcmdiYSgwLCA0OSwgMjM5LCAxKSAxOC43MSUsIHJnYmEoMjMsIDIyLCAyNSwgMSkgMjguNjUlLCByZ2JhKDIzLCAyMiwgMjUsIDEpIDEwMCUpJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogXCJEZW1vXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvY3VzIGFuZCBEaXZlIERlZXBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGFja2xlIHNob3J0LCBpbnRlbnNlIHByb2plY3RzIGFuZCBkZXRhaWxlZCBzdHVkaWVzIG9uIHNwZWNpZmljIHRlY2ggdG9waWNzLlwiLFxuICAgICAgICBvdmVybGF5U3R5bGU6ICdyYWRpYWwtZ3JhZGllbnQoMTM2LjIyJSA3NS44JSBhdCA1MCUgMjcuNTclLCAjMTcxNjE5IDAlLCByZ2JhKDIzLCAyMiwgMjUsIDEpIDYxLjYyJSwgcmdiYSgwLCA0OSwgMjM5LCAxKSA3OS4xNyUsIHJnYmEoMjUxLCA1MywgMjA4LCAxKSAxMDAlKSdcbiAgICB9XG5dO1xuXG5jb25zdCBCYWRnZSA9ICh7IHRleHQgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2Ugdy1maXQgbXgtYXV0byB0ZXh0LXdoaXRlLzcwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci13aGl0ZS80MCBweC0yIHB5LTFcIj5cbiAgICAgICAge3RleHR9XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBDYXJkID0gKHsgaXNQcmVtaWVyLCB0aXRsZSwgZGVzY3JpcHRpb24sIG92ZXJsYXlTdHlsZSwgbGFiZWwsIGlzRGlzYWJsZWQgfSkgPT4gKFxuICAgIDxMaW5rIGhyZWY9XCIvQ29udGFjdFwiIFxuICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYmctWyMxODE2MTldIHJvdW5kZWQteGwgaC1bMjAwcHhdIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWNlbnRlciBwLTUgZmxleCBmbGV4LWNvbCBnYXAtNSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS0xMDUgXG4gICAgICAgICR7aXNQcmVtaWVyID8gXCJzaGFkb3ctWzBfMF8wXzBfI2ZmZl0gaG92ZXI6c2hhZG93LVswXzBfLjVyZW1fMHJlbV9yZ2IoMjM0LDE3OSw4KV0gYm9yZGVyLTIgYm9yZGVyLVtyZ2JhKDE2MiwxMjEsMCwwLjYpXVwiIDogXCJob3ZlcjpzaGFkb3ctWzBfMF8uNXJlbV8wcmVtX3JnYmEoMjUxLDUzLDIwOCwxKV1cIn1cbiAgICAgICAgJHtpc0Rpc2FibGVkICYmICdob3Zlcjohc2NhbGUtMTAwIGhvdmVyOnNoYWRvdy1ub25lICFvcGFjaXR5LTQwICFjdXJzb3Itbm90LWFsbG93ZWQnfWB9XG4gICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgYmctZ3JhZGllbnQtdG8tciBmcm9tLXdoaXRlIHRvLWdyYXktODAwIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0XCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1bMTRweF0gcHgtMiBib3JkZXIgYm9yZGVyLXdoaXRlLzYwIHJvdW5kZWQteGwgJHtpc1ByZW1pZXIgJiYgJ2JvcmRlci15ZWxsb3ctNTAwIHRleHQteWVsbG93LTUwMCd9YH0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNHB4XSB0ZXh0LXN0YXJ0IGZvbnQtc2VtaWJvbGRcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIG9wYWNpdHktNTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBvdmVybGF5U3R5bGUgfX0gLz5cbiAgICA8L0xpbms+XG4pO1xuXG5mdW5jdGlvbiBUcmFpbmluZ1NlcnZpY2VTZWN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LVsxNDAwcHhdIGZsZXggZmxleC1jb2wgZ2FwLTggdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkIGNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgZ2FwLTcganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgbWF4LXctWzgwMHB4XSBwdC01XCI+XG4gICAgICAgICAgICAgICAgPEJhZGdlIHRleHQ9e0hlYWREYXRhLmJhZGdlfSAvPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtIZWFkRGF0YS50aXRsZV8xfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcGluay02MDAgdG8tYmx1ZS01MDAgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtIZWFkRGF0YS50aXRsZV9zcGFufVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtIZWFkRGF0YS50aXRsZV8yfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS81MCB0ZXh0LWxnIG1kOnRleHQtYmFzZVwiPntIZWFkRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjb250YWluZXIgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAgICAgICAge0NhcmRzRGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IHsuLi5jYXJkfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWluaW5nU2VydmljZVNlY3Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiSGVhZERhdGEiLCJiYWRnZSIsInRpdGxlXzEiLCJ0aXRsZV9zcGFuIiwidGl0bGVfMiIsImRlc2NyaXB0aW9uIiwiQ2FyZHNEYXRhIiwibGFiZWwiLCJpc0Rpc2FibGVkIiwidGl0bGUiLCJvdmVybGF5U3R5bGUiLCJpc1ByZW1pZXIiLCJCYWRnZSIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJDYXJkIiwiaHJlZiIsInBhc3NIcmVmIiwiaDEiLCJwIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiVHJhaW5pbmdTZXJ2aWNlU2VjdGlvbiIsInNwYW4iLCJtYXAiLCJjYXJkIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Cards/TrainingServiceSection-component/TrainingServiceSection.jsx\n");

/***/ })

};
;
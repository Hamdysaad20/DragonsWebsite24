"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_GridSection_GridSection_jsx";
exports.ids = ["src_components_GridSection_GridSection_jsx"];
exports.modules = {

/***/ "./src/components/GridSection/GridSection.jsx":
/*!****************************************************!*\
  !*** ./src/components/GridSection/GridSection.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst BOOTCAMP_URL = \"/Bootcamp\";\nfunction GridSection() {\n    const head = {\n        badge: \"Grid Section\",\n        title: \"Elevate Your Skills with Our Intensive 6-Month Tech Bootcamp\",\n        text: \"Master key technologies and leadership skills in our intensive Bootcamp, designed for rapid, real-world success\"\n    };\n    const cardsData = [\n        {\n            title: \"Supportive Community\",\n            text: \"Our supportive community lifts you up, not out. Learn & grow with fellow students\",\n            image: \"/images/supportive_community.jpg\"\n        },\n        {\n            title: \"Strong Industry Connections\",\n            text: \"Network with top companies and industry leaders to get a head start.\",\n            image: \"/images/industry_connections.jpg\"\n        },\n        {\n            title: \"Understand company needs\",\n            text: \"Intensive learning immerses you in the developer's zone, allowing you to work on real projects that simulate the working environment.\",\n            image: \"/images/learning_companies.jpg\"\n        },\n        {\n            title: \"Become a Thought Leader\",\n            text: \"Develop Your Voice and Sharpen your communication skills to share insights and establish yourself as an expert in your field.\",\n            image: \"/images/thought_leader.jpg\"\n        },\n        {\n            title: \"Level Up, Get Seen\",\n            text: \"We track everything and share all your progress with our trusted partners, business owners, and recruiters for easy hunting.\",\n            image: \"/images/level_up.jpg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-[1400px] flex flex-col justify-center items-center gap-8 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex flex-col gap-7 justify-center items-center text-center max-w-[800px] pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"badge w-fit mx-auto text-white/70 rounded-lg border border-white/40 px-2 py-1\",\n                        children: head.badge\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl md:text-6xl font-semibold\",\n                        children: head.title\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white/50 text-[16px] md:text-base\",\n                        children: head.text\n                    }, void 0, false, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-4 md:gap-5\",\n                children: cardsData.map(({ title, text, image }, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: BOOTCAMP_URL,\n                        className: `hover:scale-[1.03] cursor-pointer transition-all ${index <= 1 ? \"col-span-2 lg:col-span-3\" : \"col-span-2\"} overflow-hidden bg-[#181619] rounded-xl h-[375px] text-left flex flex-col justify-between`,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5 flex flex-col gap-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[14px] text-white/50\",\n                                        children: text\n                                    }, void 0, false, {\n                                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-64 relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    alt: title,\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    objectPosition: \"center\"\n                                }, void 0, false, {\n                                    fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: BOOTCAMP_URL,\n                className: \"border-2 w-fit text-2xl rounded-full py-1 px-3 inline-block hover:bg-purple-900 hover:text-white transition-all hover:border-purple-900 mt-5\",\n                children: \"Learn More\"\n            }, void 0, false, {\n                fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/hamdysaad20/Data/GitHubRepoClonesWork/DragonsWebsite24/src/components/GridSection/GridSection.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridSection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HcmlkU2VjdGlvbi9HcmlkU2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUU3QixNQUFNRSxlQUFlO0FBRXJCLFNBQVNDO0lBQ0wsTUFBTUMsT0FBTztRQUNUQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtJQUNWO0lBRUEsTUFBTUMsWUFBWTtRQUNkO1lBQ0lGLE9BQU87WUFDUEMsTUFBTTtZQUNORSxPQUFPO1FBQ1g7UUFDQTtZQUNJSCxPQUFPO1lBQ1BDLE1BQU07WUFDTkUsT0FBTztRQUNYO1FBQ0E7WUFDSUgsT0FBTztZQUNQQyxNQUFNO1lBQ05FLE9BQU87UUFDWDtRQUNBO1lBQ0lILE9BQU87WUFDUEMsTUFBTTtZQUNORSxPQUFPO1FBQ1g7UUFDQTtZQUNJSCxPQUFPO1lBQ1BDLE1BQU07WUFDTkUsT0FBTztRQUNYO0tBQ0g7SUFFRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1ZQLEtBQUtDLEtBQUs7Ozs7OztrQ0FFZiw4REFBQ087d0JBQUdELFdBQVU7a0NBQXNDUCxLQUFLRSxLQUFLOzs7Ozs7a0NBQzlELDhEQUFDTzt3QkFBRUYsV0FBVTtrQ0FBMENQLEtBQUtHLElBQUk7Ozs7Ozs7Ozs7OzswQkFHcEUsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUNWSCxVQUFVTSxHQUFHLENBQUMsQ0FBQyxFQUFFUixLQUFLLEVBQUVDLElBQUksRUFBRUUsS0FBSyxFQUFFLEVBQUVNLHNCQUNwQyw4REFBQ2Qsa0RBQUlBO3dCQUNEZSxNQUFNZDt3QkFFTlMsV0FBVyxDQUFDLGlEQUFpRCxFQUFFSSxTQUFTLElBQUksNkJBQTZCLGFBQWEsMEZBQTBGLENBQUM7OzBDQUVqTiw4REFBQ0w7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDQzt3Q0FBR0QsV0FBVTtrREFBWUw7Ozs7OztrREFDMUIsOERBQUNPO3dDQUFFRixXQUFVO2tEQUE2Qko7Ozs7Ozs7Ozs7OzswQ0FHOUMsOERBQUNHO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDWCxtREFBS0E7b0NBQ0ZpQixLQUFLUjtvQ0FDTFMsS0FBS1o7b0NBQ0xhLFFBQU87b0NBQ1BDLFdBQVU7b0NBQ1ZDLGdCQUFlOzs7Ozs7Ozs7Ozs7dUJBZGxCTjs7Ozs7Ozs7OzswQkFxQmpCLDhEQUFDZCxrREFBSUE7Z0JBQUNlLE1BQU1kO2dCQUFjUyxXQUFVOzBCQUFnSjs7Ozs7Ozs7Ozs7O0FBR2hNO0FBRUEsaUVBQWVSLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vc3JjL2NvbXBvbmVudHMvR3JpZFNlY3Rpb24vR3JpZFNlY3Rpb24uanN4PzIyMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEJPT1RDQU1QX1VSTCA9ICcvQm9vdGNhbXAnO1xuXG5mdW5jdGlvbiBHcmlkU2VjdGlvbigpIHtcbiAgICBjb25zdCBoZWFkID0ge1xuICAgICAgICBiYWRnZTogXCJHcmlkIFNlY3Rpb25cIixcbiAgICAgICAgdGl0bGU6IFwiRWxldmF0ZSBZb3VyIFNraWxscyB3aXRoIE91ciBJbnRlbnNpdmUgNi1Nb250aCBUZWNoIEJvb3RjYW1wXCIsXG4gICAgICAgIHRleHQ6IFwiTWFzdGVyIGtleSB0ZWNobm9sb2dpZXMgYW5kIGxlYWRlcnNoaXAgc2tpbGxzIGluIG91ciBpbnRlbnNpdmUgQm9vdGNhbXAsIGRlc2lnbmVkIGZvciByYXBpZCwgcmVhbC13b3JsZCBzdWNjZXNzXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGNhcmRzRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiU3VwcG9ydGl2ZSBDb21tdW5pdHlcIixcbiAgICAgICAgICAgIHRleHQ6IFwiT3VyIHN1cHBvcnRpdmUgY29tbXVuaXR5IGxpZnRzIHlvdSB1cCwgbm90IG91dC4gTGVhcm4gJiBncm93IHdpdGggZmVsbG93IHN0dWRlbnRzXCIsXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3N1cHBvcnRpdmVfY29tbXVuaXR5LmpwZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJTdHJvbmcgSW5kdXN0cnkgQ29ubmVjdGlvbnNcIixcbiAgICAgICAgICAgIHRleHQ6IFwiTmV0d29yayB3aXRoIHRvcCBjb21wYW5pZXMgYW5kIGluZHVzdHJ5IGxlYWRlcnMgdG8gZ2V0IGEgaGVhZCBzdGFydC5cIixcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaW5kdXN0cnlfY29ubmVjdGlvbnMuanBnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlVuZGVyc3RhbmQgY29tcGFueSBuZWVkc1wiLFxuICAgICAgICAgICAgdGV4dDogXCJJbnRlbnNpdmUgbGVhcm5pbmcgaW1tZXJzZXMgeW91IGluIHRoZSBkZXZlbG9wZXIncyB6b25lLCBhbGxvd2luZyB5b3UgdG8gd29yayBvbiByZWFsIHByb2plY3RzIHRoYXQgc2ltdWxhdGUgdGhlIHdvcmtpbmcgZW52aXJvbm1lbnQuXCIsXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2xlYXJuaW5nX2NvbXBhbmllcy5qcGdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQmVjb21lIGEgVGhvdWdodCBMZWFkZXJcIixcbiAgICAgICAgICAgIHRleHQ6IFwiRGV2ZWxvcCBZb3VyIFZvaWNlIGFuZCBTaGFycGVuIHlvdXIgY29tbXVuaWNhdGlvbiBza2lsbHMgdG8gc2hhcmUgaW5zaWdodHMgYW5kIGVzdGFibGlzaCB5b3Vyc2VsZiBhcyBhbiBleHBlcnQgaW4geW91ciBmaWVsZC5cIixcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvdGhvdWdodF9sZWFkZXIuanBnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxldmVsIFVwLCBHZXQgU2VlblwiLFxuICAgICAgICAgICAgdGV4dDogXCJXZSB0cmFjayBldmVyeXRoaW5nIGFuZCBzaGFyZSBhbGwgeW91ciBwcm9ncmVzcyB3aXRoIG91ciB0cnVzdGVkIHBhcnRuZXJzLCBidXNpbmVzcyBvd25lcnMsIGFuZCByZWNydWl0ZXJzIGZvciBlYXN5IGh1bnRpbmcuXCIsXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2xldmVsX3VwLmpwZ1wiLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1bMTQwMHB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtOCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgZ2FwLTcganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIG1heC13LVs4MDBweF0gcHQtNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2Ugdy1maXQgbXgtYXV0byB0ZXh0LXdoaXRlLzcwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci13aGl0ZS80MCBweC0yIHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAge2hlYWQuYmFkZ2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtc2VtaWJvbGRcIj57aGVhZC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNTAgdGV4dC1bMTZweF0gbWQ6dGV4dC1iYXNlXCI+e2hlYWQudGV4dH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy02IGdhcC15LTQgbWQ6Z2FwLTVcIj5cbiAgICAgICAgICAgICAgICB7Y2FyZHNEYXRhLm1hcCgoeyB0aXRsZSwgdGV4dCwgaW1hZ2UgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e0JPT1RDQU1QX1VSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bob3ZlcjpzY2FsZS1bMS4wM10gY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgJHtpbmRleCA8PSAxID8gXCJjb2wtc3Bhbi0yIGxnOmNvbC1zcGFuLTNcIiA6IFwiY29sLXNwYW4tMlwifSBvdmVyZmxvdy1oaWRkZW4gYmctWyMxODE2MTldIHJvdW5kZWQteGwgaC1bMzc1cHhdIHRleHQtbGVmdCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGZsZXggZmxleC1jb2wgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNHB4XSB0ZXh0LXdoaXRlLzUwXCI+e3RleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e0JPT1RDQU1QX1VSTH0gY2xhc3NOYW1lPVwiYm9yZGVyLTIgdy1maXQgdGV4dC0yeGwgcm91bmRlZC1mdWxsIHB5LTEgcHgtMyBpbmxpbmUtYmxvY2sgaG92ZXI6YmctcHVycGxlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJvcmRlci1wdXJwbGUtOTAwIG10LTVcIj57J0xlYXJuIE1vcmUnfTwvTGluaz5cbiAgICAgICAgPC9kaXYgPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkJPT1RDQU1QX1VSTCIsIkdyaWRTZWN0aW9uIiwiaGVhZCIsImJhZGdlIiwidGl0bGUiLCJ0ZXh0IiwiY2FyZHNEYXRhIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJpbmRleCIsImhyZWYiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GridSection/GridSection.jsx\n");

/***/ })

};
;
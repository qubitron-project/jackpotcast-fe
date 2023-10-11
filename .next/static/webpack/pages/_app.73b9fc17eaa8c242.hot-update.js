"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/HeaderSearch/HeaderSearch.tsx":
/*!**************************************************!*\
  !*** ./components/HeaderSearch/HeaderSearch.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _HeaderSearch_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderSearch.style */ \"./components/HeaderSearch/HeaderSearch.style.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HeaderSearch = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        try {\n            if (search) {\n                console.log(search);\n                router.replace({\n                    pathname: \"/search\",\n                    query: {\n                        q: search\n                    }\n                }, undefined, {\n                    shallow: true\n                });\n            }\n        } catch (e) {\n            console.error(e.response);\n        }\n    }, [\n        search\n    ]);\n    const clickSearchImg = ()=>setClick(!click);\n    const backPage = ()=>{\n        router.replace(\"/\");\n        setSearch(\"\");\n        setClick(false);\n    };\n    const handleSearchValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{\n        setSearch(e.target.value);\n    }, [\n        search\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderSearch_style__WEBPACK_IMPORTED_MODULE_3__.SearchContainer, {\n        click: click,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsSearch, {\n                onClick: clickSearchImg,\n                size: 30\n            }, void 0, false, {\n                fileName: \"/Users/zombie/Downloads/jackpot-fe/components/HeaderSearch/HeaderSearch.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"제목, 사람\",\n                autoFocus: true,\n                autoComplete: \"off\",\n                value: search,\n                onChange: handleSearchValue\n            }, void 0, false, {\n                fileName: \"/Users/zombie/Downloads/jackpot-fe/components/HeaderSearch/HeaderSearch.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            search && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillEraserFill, {\n                onClick: backPage,\n                size: 30\n            }, void 0, false, {\n                fileName: \"/Users/zombie/Downloads/jackpot-fe/components/HeaderSearch/HeaderSearch.tsx\",\n                lineNumber: 57,\n                columnNumber: 18\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zombie/Downloads/jackpot-fe/components/HeaderSearch/HeaderSearch.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeaderSearch, \"cFGCjbeese1Dkb2QbjRoI4Q9gS8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = HeaderSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderSearch);\nvar _c;\n$RefreshReg$(_c, \"HeaderSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlclNlYXJjaC9IZWFkZXJTZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2lCO0FBQ0c7QUFDTDtBQUV2RCxNQUFNTyxlQUFlOztJQUNuQixNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJO1lBQ0YsSUFBSVMsUUFBUTtnQkFDVkUsUUFBUUMsR0FBRyxDQUFDSDtnQkFDWkgsT0FBT08sT0FBTyxDQUNaO29CQUNFQyxVQUFVO29CQUNWQyxPQUFPO3dCQUNMQyxHQUFHUDtvQkFDTDtnQkFDRixHQUNBUSxXQUNBO29CQUFFQyxTQUFTO2dCQUFLO1lBRXBCO1FBQ0YsRUFBRSxPQUFPQyxHQUFRO1lBQ2ZSLFFBQVFTLEtBQUssQ0FBQ0QsRUFBRUUsUUFBUTtRQUMxQjtJQUNGLEdBQUc7UUFBQ1o7S0FBTztJQUVYLE1BQU1hLGlCQUFpQixJQUFNZCxTQUFTLENBQUNEO0lBRXZDLE1BQU1nQixXQUFXO1FBQ2ZqQixPQUFPTyxPQUFPLENBQUM7UUFDZkgsVUFBVTtRQUNWRixTQUFTO0lBQ1g7SUFFQSxNQUFNZ0Isb0JBQW9CekIsa0RBQVdBLENBQ25DLENBQUNvQjtRQUNDVCxVQUFVUyxFQUFFTSxNQUFNLENBQUNDLEtBQUs7SUFDMUIsR0FDQTtRQUFDakI7S0FBTztJQUdWLHFCQUNFLDhEQUFDTCxnRUFBZUE7UUFBQ0csT0FBT0E7OzBCQUN0Qiw4REFBQ0osb0RBQVFBO2dCQUFDd0IsU0FBU0w7Z0JBQWdCTSxNQUFNOzs7Ozs7MEJBQ3pDLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsU0FBUztnQkFDVEMsY0FBYTtnQkFDYlAsT0FBT2pCO2dCQUNQeUIsVUFBVVY7Ozs7OztZQUVYZix3QkFBVSw4REFBQ1AsNERBQWdCQTtnQkFBQ3lCLFNBQVNKO2dCQUFVSyxNQUFNOzs7Ozs7Ozs7Ozs7QUFHNUQ7R0F0RE12Qjs7UUFDV1Asa0RBQVNBOzs7S0FEcEJPO0FBd0ROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoL0hlYWRlclNlYXJjaC50c3g/YTdmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJzRmlsbEVyYXNlckZpbGwsIEJzU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGFpbmVyIH0gZnJvbSAnLi9IZWFkZXJTZWFyY2guc3R5bGUnO1xuXG5jb25zdCBIZWFkZXJTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY2xpY2ssIHNldENsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3NlYXJjaCcsXG4gICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICBxOiBzZWFyY2gsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUucmVzcG9uc2UpO1xuICAgIH1cbiAgfSwgW3NlYXJjaF0pO1xuXG4gIGNvbnN0IGNsaWNrU2VhcmNoSW1nID0gKCkgPT4gc2V0Q2xpY2soIWNsaWNrKTtcblxuICBjb25zdCBiYWNrUGFnZSA9ICgpID0+IHtcbiAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xuICAgIHNldFNlYXJjaCgnJyk7XG4gICAgc2V0Q2xpY2soZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaFZhbHVlID0gdXNlQ2FsbGJhY2soXG4gICAgKGU6IGFueSkgPT4ge1xuICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtzZWFyY2hdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoQ29udGFpbmVyIGNsaWNrPXtjbGlja30+XG4gICAgICA8QnNTZWFyY2ggb25DbGljaz17Y2xpY2tTZWFyY2hJbWd9IHNpemU9ezMwfSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIHBsYWNlaG9sZGVyPSfsoJzrqqksIOyCrOuejCdcbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xuICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoVmFsdWV9XG4gICAgICAvPlxuICAgICAge3NlYXJjaCAmJiA8QnNGaWxsRXJhc2VyRmlsbCBvbkNsaWNrPXtiYWNrUGFnZX0gc2l6ZT17MzB9IC8+fVxuICAgIDwvU2VhcmNoQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyU2VhcmNoO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCc0ZpbGxFcmFzZXJGaWxsIiwiQnNTZWFyY2giLCJTZWFyY2hDb250YWluZXIiLCJIZWFkZXJTZWFyY2giLCJyb3V0ZXIiLCJjbGljayIsInNldENsaWNrIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJwYXRobmFtZSIsInF1ZXJ5IiwicSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJlIiwiZXJyb3IiLCJyZXNwb25zZSIsImNsaWNrU2VhcmNoSW1nIiwiYmFja1BhZ2UiLCJoYW5kbGVTZWFyY2hWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayIsInNpemUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Gb2N1cyIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderSearch/HeaderSearch.tsx\n"));

/***/ })

});
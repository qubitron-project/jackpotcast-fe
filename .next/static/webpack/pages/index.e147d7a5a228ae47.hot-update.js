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

/***/ "./components/NoticeList/NoticeList.tsx":
/*!**********************************************!*\
  !*** ./components/NoticeList/NoticeList.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"./node_modules/@mui/material/ListItemButton/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _hooks_app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/app.hooks */ \"./hooks/app.hooks.ts\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst NoticeList = (param)=>{\n    let { noticeData } = param;\n    var _noticeData, _noticeData_slice;\n    _s();\n    const isMobile = (0,_hooks_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useIsMobile)();\n    const [isWindow, setIsWindow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hideImage, setHideImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsWindow(true);\n    }, []);\n    if (!((_noticeData = noticeData) === null || _noticeData === void 0 ? void 0 : _noticeData.length)) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            component: \"nav\",\n            \"aria-label\": \"main mailbox folders\",\n            children: (_noticeData_slice = noticeData.slice(0, 5)) === null || _noticeData_slice === void 0 ? void 0 : _noticeData_slice.map((param, i)=>/*#__PURE__*/ {\n                let { id, title, content, type, created_at, updated_at } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    secondaryAction: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                        variant: \"body2\",\n                        color: \"white\",\n                        children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(created_at).format(\"YYYY-MM-DD\")\n                    }, void 0, false, void 0, void 0),\n                    disablePadding: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: type == \"event\" ? \"이벤트\" : \"공지사항\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zombie/Downloads/jackpot-fe/components/NoticeList/NoticeList.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                primary: title\n                            }, void 0, false, {\n                                fileName: \"/Users/zombie/Downloads/jackpot-fe/components/NoticeList/NoticeList.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zombie/Downloads/jackpot-fe/components/NoticeList/NoticeList.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, undefined)\n                }, id, false, {\n                    fileName: \"/Users/zombie/Downloads/jackpot-fe/components/NoticeList/NoticeList.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/zombie/Downloads/jackpot-fe/components/NoticeList/NoticeList.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zombie/Downloads/jackpot-fe/components/NoticeList/NoticeList.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NoticeList, \"XBvh0G1enFCOtcT39nWw7wpJBwA=\", false, function() {\n    return [\n        _hooks_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useIsMobile\n    ];\n});\n_c = NoticeList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoticeList);\nvar _c;\n$RefreshReg$(_c, \"NoticeList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGljZUxpc3QvTm90aWNlTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFHYztBQUNNO0FBQ1U7QUFDbEI7QUFDUTtBQUNZO0FBQ0o7QUFDQTtBQU1GO0FBQ1I7QUFDbEI7QUFNMUIsTUFBTVksYUFBYTtRQUFDLEVBQUVDLFVBQVUsRUFBbUI7UUFTNUNBLGFBS0VBOztJQWJQLE1BQU1DLFdBQVdOLDZEQUFXQTtJQUM1QixNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVU7SUFDbEQsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFVO0lBRXBERCxnREFBU0EsQ0FBQztRQUNSTyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsSUFBSSxHQUFDSCxjQUFBQSx3QkFBQUEsa0NBQUFBLFlBQVlNLE1BQU0sR0FBRSxPQUFPO0lBRWhDLHFCQUNFLDhEQUFDbEIsOENBQUdBO2tCQUNGLDRFQUFDRSwwREFBSUE7WUFBQ2lCLFdBQVU7WUFBTUMsY0FBVzt1QkFDOUJSLG9CQUFBQSxXQUNFUyxLQUFLLENBQUMsR0FBRyxnQkFEWFQsd0NBQUFBLGtCQUVHVSxHQUFHLENBQUMsUUFBdURDO29CQUF0RCxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFO3VCQUN6RCw4REFBQzFCLDhEQUFRQTtvQkFFUDJCLCtCQUNFLDhEQUFDN0IscURBQVVBO3dCQUFDOEIsU0FBUTt3QkFBUUMsT0FBTTtrQ0FDL0J0Qiw0Q0FBS0EsQ0FBQ2tCLFlBQVlLLE1BQU0sQ0FBQzs7b0JBRzlCQyxjQUFjOzhCQUVkLDRFQUFDOUIsb0VBQWNBOzswQ0FDYiw4REFBQ0MsbUVBQVlBOzBDQUNWc0IsUUFBUSxVQUFVLFFBQVE7Ozs7OzswQ0FFN0IsOERBQUNyQixtRUFBWUE7Z0NBQUM2QixTQUFTVjs7Ozs7Ozs7Ozs7O21CQVpwQkQ7Ozs7O1lBY0c7Ozs7Ozs7Ozs7O0FBS3RCO0dBckNNYjs7UUFDYUoseURBQVdBOzs7S0FEeEJJO0FBdUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTm90aWNlTGlzdC9Ob3RpY2VMaXN0LnRzeD9kZmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1CdXR0b24nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcblxuaW1wb3J0IHsgc3R5bGVzIGFzIGNsYXNzZXMgfSBmcm9tICcuL25vdGljZUxpc3Quc3R5bGVzJztcbmltcG9ydCB7IE5vdGljZVJlc3VsdCB9IGZyb20gJy4uLy4uL3R5cGVzL2FwaVJlc3BvbnNlcyc7XG5pbXBvcnQgeyBibHVyRGF0YSwgZm9ybWF0SW1nVVJMLCB0b1VybEZyaWVuZGx5IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUlzTW9iaWxlIH0gZnJvbSAnLi4vLi4vaG9va3MvYXBwLmhvb2tzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG50eXBlIE5vdGljZUxpc3RQcm9wcyA9IHtcbiAgbm90aWNlRGF0YT86IE5vdGljZVJlc3VsdFtdO1xufTtcblxuY29uc3QgTm90aWNlTGlzdCA9ICh7IG5vdGljZURhdGEgfTogTm90aWNlTGlzdFByb3BzKSA9PiB7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcbiAgY29uc3QgW2lzV2luZG93LCBzZXRJc1dpbmRvd10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtoaWRlSW1hZ2UsIHNldEhpZGVJbWFnZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1dpbmRvdyh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghbm90aWNlRGF0YT8ubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8TGlzdCBjb21wb25lbnQ9J25hdicgYXJpYS1sYWJlbD0nbWFpbiBtYWlsYm94IGZvbGRlcnMnPlxuICAgICAgICB7bm90aWNlRGF0YVxuICAgICAgICAgIC5zbGljZSgwLCA1KVxuICAgICAgICAgID8ubWFwKCh7IGlkLCB0aXRsZSwgY29udGVudCwgdHlwZSwgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdCB9LCBpKSA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9uPXtcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29sb3I9J3doaXRlJz5cbiAgICAgICAgICAgICAgICAgIHtkYXlqcyhjcmVhdGVkX2F0KS5mb3JtYXQoJ1lZWVktTU0tREQnKX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3RJdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICB7dHlwZSA9PSAnZXZlbnQnID8gJ+ydtOuypO2KuCcgOiAn6rO17KeA7IKs7ZWtJ31cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGljZUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUeXBvZ3JhcGh5IiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJ1c2VJc01vYmlsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGF5anMiLCJOb3RpY2VMaXN0Iiwibm90aWNlRGF0YSIsImlzTW9iaWxlIiwiaXNXaW5kb3ciLCJzZXRJc1dpbmRvdyIsImhpZGVJbWFnZSIsInNldEhpZGVJbWFnZSIsImxlbmd0aCIsImNvbXBvbmVudCIsImFyaWEtbGFiZWwiLCJzbGljZSIsIm1hcCIsImkiLCJpZCIsInRpdGxlIiwiY29udGVudCIsInR5cGUiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsInNlY29uZGFyeUFjdGlvbiIsInZhcmlhbnQiLCJjb2xvciIsImZvcm1hdCIsImRpc2FibGVQYWRkaW5nIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NoticeList/NoticeList.tsx\n"));

/***/ })

});
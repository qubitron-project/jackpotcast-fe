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

/***/ "./components/MainBannerSlider/mainBannerSlider.styles.ts":
/*!****************************************************************!*\
  !*** ./components/MainBannerSlider/mainBannerSlider.styles.ts ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: function() { return /* binding */ styles; }\n/* harmony export */ });\nconst styles = {\n    playerWrapper: {\n        width: \"80%\",\n        aspectRatio: \"14/3\",\n        \"@media (max-width: 400px)\": {\n            width: \"100%\"\n        },\n        overflow: \"hidden\"\n    },\n    mediaSlide: {\n        marginBottom: \"10px\"\n    },\n    mediaItem: {\n        position: \"relative\",\n        outline: \"none\",\n        margin: \"0 10px\",\n        innerHeight: \"300px\",\n        \"@media (max-width: 400px)\": {\n            width: \"100%\",\n            aspectRatio: \"1/1\"\n        }\n    },\n    mediaItemImg: {\n        position: \"relative\",\n        width: \"100%\",\n        height: \"300px\",\n        \"@media (max-width: 1400px)\": {\n            height: \"300px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            height: \"300px\"\n        },\n        \"@media (max-width: 768px)\": {\n            height: \"300px\"\n        },\n        \"@media (max-width: 576px)\": {\n            height: \"300px\"\n        },\n        \"& img\": {\n            height: \"300px\",\n            margin: \"0 auto\",\n            marginBottom: \"25px\",\n            boxShadow: \"0 5px 15px rgba(0, 0, 0, 0.25)\",\n            borderRadius: \"0 0 6px 6px\"\n        },\n        \"&::after\": {\n            content: '\"\"',\n            position: \"absolute\",\n            top: 0,\n            left: 0,\n            right: 0,\n            bottom: -1,\n            borderRadius: \"0px 0px 5px 5px\",\n            // background: '#242428',\n            // background: \"-moz-linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 50%,#242428 100%)\",\n            // background: \"-webkit-linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 50%,#242428 100%)\",\n            // background:\n            //   'linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 70%,#242428 100%)',\n            zIndex: 2\n        }\n    },\n    mediaItemBanner: {},\n    overview: {\n        lineHeight: \"1.6\",\n        fontWeight: \"300\",\n        mb: \"20px\",\n        display: \"-webkit-box\",\n        WebkitLineClamp: \"3\",\n        WebkitBoxOrient: \"vertical\",\n        overflow: \"hidden\",\n        fontSize: \"15px\",\n        \"@media (max-width: 1300px)\": {\n            WebkitLineClamp: \"2\"\n        },\n        \"@media (max-width: 576px)\": {\n            display: \"none\"\n        }\n    },\n    title: {\n        fontWeight: \"bold\",\n        fontSize: \"48px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"40px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"30px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"20px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"16px\"\n        }\n    },\n    rating: {\n        fontSize: \"18px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\"\n        }\n    },\n    miBtns: {\n        display: \"flex\"\n    },\n    watchBtn: {\n        whiteSpace: \"nowrap\",\n        width: \"120px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"12px\",\n            width: \"100px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\",\n            width: \"80px\"\n        }\n    },\n    detailBtn: {\n        ml: \"20px\",\n        width: \"120px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"12px\",\n            width: \"100px\",\n            ml: \"10px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\",\n            width: \"80px\"\n        }\n    },\n    mediaItemContent: {\n        padding: \"20px\",\n        zIndex: 3,\n        width: \"50%\",\n        position: \"absolute\",\n        bottom: 0,\n        opacity: 0,\n        transition: \"opacity 1s ease 150ms\",\n        \"@media (max-width: 768px)\": {\n            width: \"90%\"\n        },\n        \"@media (max-width: 576px)\": {\n            p: \"10px\"\n        }\n    },\n    miContent: {\n        mb: \"20px\",\n        \"@media (max-width: 768px)\": {\n            mb: \"5px\"\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5CYW5uZXJTbGlkZXIvbWFpbkJhbm5lclNsaWRlci5zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVM7SUFDcEJDLGVBQWU7UUFDYkMsT0FBTztRQUNQQyxhQUFhO1FBQ2IsNkJBQTZCO1lBQzNCRCxPQUFPO1FBQ1Q7UUFDQUUsVUFBVTtJQUNaO0lBQ0FDLFlBQVk7UUFDVkMsY0FBYztJQUNoQjtJQUNBQyxXQUFXO1FBQ1RDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLGFBQWE7UUFDYiw2QkFBNkI7WUFDM0JULE9BQU87WUFDUEMsYUFBYTtRQUNmO0lBQ0Y7SUFDQVMsY0FBYztRQUNaSixVQUFVO1FBQ1ZOLE9BQU87UUFDUFcsUUFBUTtRQUNSLDhCQUE4QjtZQUM1QkEsUUFBUTtRQUNWO1FBQ0EsOEJBQThCO1lBQzVCQSxRQUFRO1FBQ1Y7UUFDQSw2QkFBNkI7WUFDM0JBLFFBQVE7UUFDVjtRQUNBLDZCQUE2QjtZQUMzQkEsUUFBUTtRQUNWO1FBQ0EsU0FBUztZQUNQQSxRQUFRO1lBQ1JILFFBQVE7WUFDUkosY0FBYztZQUNkUSxXQUFXO1lBQ1hDLGNBQWM7UUFDaEI7UUFDQSxZQUFZO1lBQ1ZDLFNBQVM7WUFDVFIsVUFBVTtZQUNWUyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxRQUFRLENBQUM7WUFDVEwsY0FBYztZQUNkLHlCQUF5QjtZQUN6Qix3RkFBd0Y7WUFDeEYsMkZBQTJGO1lBQzNGLGNBQWM7WUFDZCx5RUFBeUU7WUFDekVNLFFBQVE7UUFDVjtJQUNGO0lBRUFDLGlCQUFpQixDQUFDO0lBQ2xCQyxVQUFVO1FBQ1JDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsaUJBQWlCO1FBQ2pCQyxpQkFBaUI7UUFDakJ6QixVQUFVO1FBQ1YwQixVQUFVO1FBQ1YsOEJBQThCO1lBQzVCRixpQkFBaUI7UUFDbkI7UUFDQSw2QkFBNkI7WUFDM0JELFNBQVM7UUFDWDtJQUNGO0lBQ0FJLE9BQU87UUFDTE4sWUFBWTtRQUNaSyxVQUFVO1FBQ1YsOEJBQThCO1lBQzVCQSxVQUFVO1FBQ1o7UUFDQSw4QkFBOEI7WUFDNUJBLFVBQVU7UUFDWjtRQUNBLDZCQUE2QjtZQUMzQkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1FBQ1o7SUFDRjtJQUNBRSxRQUFRO1FBQ05GLFVBQVU7UUFDViw4QkFBOEI7WUFDNUJBLFVBQVU7UUFDWjtRQUNBLDhCQUE4QjtZQUM1QkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1FBQ1o7UUFDQSw2QkFBNkI7WUFDM0JBLFVBQVU7UUFDWjtJQUNGO0lBQ0FHLFFBQVE7UUFDTk4sU0FBUztJQUNYO0lBQ0FPLFVBQVU7UUFDUkMsWUFBWTtRQUNaakMsT0FBTztRQUNQLDhCQUE4QjtZQUM1QjRCLFVBQVU7UUFDWjtRQUNBLDhCQUE4QjtZQUM1QkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1lBQ1Y1QixPQUFPO1FBQ1Q7UUFDQSw2QkFBNkI7WUFDM0I0QixVQUFVO1lBQ1Y1QixPQUFPO1FBQ1Q7SUFDRjtJQUNBa0MsV0FBVztRQUNUQyxJQUFJO1FBQ0puQyxPQUFPO1FBQ1AsOEJBQThCO1lBQzVCNEIsVUFBVTtRQUNaO1FBQ0EsOEJBQThCO1lBQzVCQSxVQUFVO1FBQ1o7UUFDQSw2QkFBNkI7WUFDM0JBLFVBQVU7WUFDVjVCLE9BQU87WUFDUG1DLElBQUk7UUFDTjtRQUNBLDZCQUE2QjtZQUMzQlAsVUFBVTtZQUNWNUIsT0FBTztRQUNUO0lBQ0Y7SUFDQW9DLGtCQUFrQjtRQUNoQkMsU0FBUztRQUNUbEIsUUFBUTtRQUNSbkIsT0FBTztRQUNQTSxVQUFVO1FBQ1ZZLFFBQVE7UUFDUm9CLFNBQVM7UUFDVEMsWUFBWTtRQUNaLDZCQUE2QjtZQUMzQnZDLE9BQU87UUFDVDtRQUNBLDZCQUE2QjtZQUMzQndDLEdBQUc7UUFDTDtJQUNGO0lBQ0FDLFdBQVc7UUFDVGpCLElBQUk7UUFDSiw2QkFBNkI7WUFDM0JBLElBQUk7UUFDTjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5CYW5uZXJTbGlkZXIvbWFpbkJhbm5lclNsaWRlci5zdHlsZXMudHM/NzgwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBwbGF5ZXJXcmFwcGVyOiB7XG4gICAgd2lkdGg6ICc4MCUnLFxuICAgIGFzcGVjdFJhdGlvOiAnMTQvMycsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA0MDBweCknOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBtZWRpYVNsaWRlOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gIH0sXG4gIG1lZGlhSXRlbToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgIGlubmVySGVpZ2h0OiAnMzAwcHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGFzcGVjdFJhdGlvOiAnMS8xJyxcbiAgICB9LFxuICB9LFxuICBtZWRpYUl0ZW1JbWc6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxuICAgIH0sXG4gICAgJyYgaW1nJzoge1xuICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzI1cHgnLFxuICAgICAgYm94U2hhZG93OiAnMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzAgMCA2cHggNnB4JyxcbiAgICB9LFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAtMSxcbiAgICAgIGJvcmRlclJhZGl1czogJzBweCAwcHggNXB4IDVweCcsXG4gICAgICAvLyBiYWNrZ3JvdW5kOiAnIzI0MjQyOCcsXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBcIi1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsIzI0MjQyOCAwLHJnYmEoMzYsMzYsNDAsMCkgNTAlLCMyNDI0MjggMTAwJSlcIixcbiAgICAgIC8vIGJhY2tncm91bmQ6IFwiLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywjMjQyNDI4IDAscmdiYSgzNiwzNiw0MCwwKSA1MCUsIzI0MjQyOCAxMDAlKVwiLFxuICAgICAgLy8gYmFja2dyb3VuZDpcbiAgICAgIC8vICAgJ2xpbmVhci1ncmFkaWVudCgwZGVnLCMyNDI0MjggMCxyZ2JhKDM2LDM2LDQwLDApIDcwJSwjMjQyNDI4IDEwMCUpJyxcbiAgICAgIHpJbmRleDogMixcbiAgICB9LFxuICB9LFxuXG4gIG1lZGlhSXRlbUJhbm5lcjoge30sXG4gIG92ZXJ2aWV3OiB7XG4gICAgbGluZUhlaWdodDogJzEuNicsXG4gICAgZm9udFdlaWdodDogJzMwMCcsXG4gICAgbWI6ICcyMHB4JyxcbiAgICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxuICAgIFdlYmtpdExpbmVDbGFtcDogJzMnLFxuICAgIFdlYmtpdEJveE9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBXZWJraXRMaW5lQ2xhbXA6ICcyJyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAnNDhweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICc0MHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgfSxcbiAgfSxcbiAgcmF0aW5nOiB7XG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICB9LFxuICB9LFxuICBtaUJ0bnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIHdhdGNoQnRuOiB7XG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgfSxcbiAgfSxcbiAgZGV0YWlsQnRuOiB7XG4gICAgbWw6ICcyMHB4JyxcbiAgICB3aWR0aDogJzEyMHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgbWw6ICcxMHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgfSxcbiAgfSxcbiAgbWVkaWFJdGVtQ29udGVudDoge1xuICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICB6SW5kZXg6IDMsXG4gICAgd2lkdGg6ICc1MCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzIGVhc2UgMTUwbXMnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgd2lkdGg6ICc5MCUnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NzZweCknOiB7XG4gICAgICBwOiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbiAgbWlDb250ZW50OiB7XG4gICAgbWI6ICcyMHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIG1iOiAnNXB4JyxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJwbGF5ZXJXcmFwcGVyIiwid2lkdGgiLCJhc3BlY3RSYXRpbyIsIm92ZXJmbG93IiwibWVkaWFTbGlkZSIsIm1hcmdpbkJvdHRvbSIsIm1lZGlhSXRlbSIsInBvc2l0aW9uIiwib3V0bGluZSIsIm1hcmdpbiIsImlubmVySGVpZ2h0IiwibWVkaWFJdGVtSW1nIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsIm1lZGlhSXRlbUJhbm5lciIsIm92ZXJ2aWV3IiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJtYiIsImRpc3BsYXkiLCJXZWJraXRMaW5lQ2xhbXAiLCJXZWJraXRCb3hPcmllbnQiLCJmb250U2l6ZSIsInRpdGxlIiwicmF0aW5nIiwibWlCdG5zIiwid2F0Y2hCdG4iLCJ3aGl0ZVNwYWNlIiwiZGV0YWlsQnRuIiwibWwiLCJtZWRpYUl0ZW1Db250ZW50IiwicGFkZGluZyIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwicCIsIm1pQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainBannerSlider/mainBannerSlider.styles.ts\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: function() { return /* binding */ styles; }\n/* harmony export */ });\nconst styles = {\n    playerWrapper: {\n        width: \"80%\",\n        aspectRatio: \"14/3\",\n        \"@media (max-width: 400px)\": {\n            width: \"100%\"\n        },\n        overflow: \"hidden\"\n    },\n    mediaSlide: {\n        marginBottom: \"10px\"\n    },\n    mediaItem: {\n        position: \"relative\",\n        outline: \"none\",\n        margin: \"0 10px\",\n        \"@media (max-width: 400px)\": {\n            width: \"100%\"\n        }\n    },\n    mediaItemImg: {\n        position: \"relative\",\n        width: \"100%\",\n        height: \"300px\",\n        \"@media (max-width: 1400px)\": {\n            height: \"300px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            height: \"300px\"\n        },\n        \"@media (max-width: 768px)\": {\n            height: \"300px\"\n        },\n        \"@media (max-width: 576px)\": {\n            aspectRation: \"1/1\"\n        },\n        \"& img\": {\n            height: \"300px\",\n            margin: \"0 auto\",\n            marginBottom: \"25px\",\n            boxShadow: \"0 5px 15px rgba(0, 0, 0, 0.25)\",\n            borderRadius: \"0 0 6px 6px\"\n        },\n        \"&::after\": {\n            content: '\"\"',\n            position: \"absolute\",\n            top: 0,\n            left: 0,\n            right: 0,\n            bottom: -1,\n            borderRadius: \"0px 0px 5px 5px\",\n            // background: '#242428',\n            // background: \"-moz-linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 50%,#242428 100%)\",\n            // background: \"-webkit-linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 50%,#242428 100%)\",\n            // background:\n            //   'linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 70%,#242428 100%)',\n            zIndex: 2\n        }\n    },\n    mediaItemBanner: {},\n    overview: {\n        lineHeight: \"1.6\",\n        fontWeight: \"300\",\n        mb: \"20px\",\n        display: \"-webkit-box\",\n        WebkitLineClamp: \"3\",\n        WebkitBoxOrient: \"vertical\",\n        overflow: \"hidden\",\n        fontSize: \"15px\",\n        \"@media (max-width: 1300px)\": {\n            WebkitLineClamp: \"2\"\n        },\n        \"@media (max-width: 576px)\": {\n            display: \"none\"\n        }\n    },\n    title: {\n        fontWeight: \"bold\",\n        fontSize: \"48px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"40px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"30px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"20px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"16px\"\n        }\n    },\n    rating: {\n        fontSize: \"18px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\"\n        }\n    },\n    miBtns: {\n        display: \"flex\"\n    },\n    watchBtn: {\n        whiteSpace: \"nowrap\",\n        width: \"120px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"12px\",\n            width: \"100px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\",\n            width: \"80px\"\n        }\n    },\n    detailBtn: {\n        ml: \"20px\",\n        width: \"120px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"12px\",\n            width: \"100px\",\n            ml: \"10px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\",\n            width: \"80px\"\n        }\n    },\n    mediaItemContent: {\n        padding: \"20px\",\n        zIndex: 3,\n        width: \"50%\",\n        position: \"absolute\",\n        bottom: 0,\n        opacity: 0,\n        transition: \"opacity 1s ease 150ms\",\n        \"@media (max-width: 768px)\": {\n            width: \"90%\"\n        },\n        \"@media (max-width: 576px)\": {\n            p: \"10px\"\n        }\n    },\n    miContent: {\n        mb: \"20px\",\n        \"@media (max-width: 768px)\": {\n            mb: \"5px\"\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5CYW5uZXJTbGlkZXIvbWFpbkJhbm5lclNsaWRlci5zdHlsZXMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVM7SUFDcEJDLGVBQWU7UUFDYkMsT0FBTztRQUNQQyxhQUFhO1FBQ2IsNkJBQTZCO1lBQzNCRCxPQUFPO1FBQ1Q7UUFDQUUsVUFBVTtJQUNaO0lBQ0FDLFlBQVk7UUFDVkMsY0FBYztJQUNoQjtJQUNBQyxXQUFXO1FBQ1RDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxRQUFRO1FBQ1IsNkJBQTZCO1lBQzNCUixPQUFPO1FBQ1Q7SUFDRjtJQUNBUyxjQUFjO1FBQ1pILFVBQVU7UUFDVk4sT0FBTztRQUNQVSxRQUFRO1FBQ1IsOEJBQThCO1lBQzVCQSxRQUFRO1FBQ1Y7UUFDQSw4QkFBOEI7WUFDNUJBLFFBQVE7UUFDVjtRQUNBLDZCQUE2QjtZQUMzQkEsUUFBUTtRQUNWO1FBQ0EsNkJBQTZCO1lBQzNCQyxjQUFjO1FBQ2hCO1FBQ0EsU0FBUztZQUNQRCxRQUFRO1lBQ1JGLFFBQVE7WUFDUkosY0FBYztZQUNkUSxXQUFXO1lBQ1hDLGNBQWM7UUFDaEI7UUFDQSxZQUFZO1lBQ1ZDLFNBQVM7WUFDVFIsVUFBVTtZQUNWUyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxRQUFRLENBQUM7WUFDVEwsY0FBYztZQUNkLHlCQUF5QjtZQUN6Qix3RkFBd0Y7WUFDeEYsMkZBQTJGO1lBQzNGLGNBQWM7WUFDZCx5RUFBeUU7WUFDekVNLFFBQVE7UUFDVjtJQUNGO0lBRUFDLGlCQUFpQixDQUFDO0lBQ2xCQyxVQUFVO1FBQ1JDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsaUJBQWlCO1FBQ2pCQyxpQkFBaUI7UUFDakJ6QixVQUFVO1FBQ1YwQixVQUFVO1FBQ1YsOEJBQThCO1lBQzVCRixpQkFBaUI7UUFDbkI7UUFDQSw2QkFBNkI7WUFDM0JELFNBQVM7UUFDWDtJQUNGO0lBQ0FJLE9BQU87UUFDTE4sWUFBWTtRQUNaSyxVQUFVO1FBQ1YsOEJBQThCO1lBQzVCQSxVQUFVO1FBQ1o7UUFDQSw4QkFBOEI7WUFDNUJBLFVBQVU7UUFDWjtRQUNBLDZCQUE2QjtZQUMzQkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1FBQ1o7SUFDRjtJQUNBRSxRQUFRO1FBQ05GLFVBQVU7UUFDViw4QkFBOEI7WUFDNUJBLFVBQVU7UUFDWjtRQUNBLDhCQUE4QjtZQUM1QkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1FBQ1o7UUFDQSw2QkFBNkI7WUFDM0JBLFVBQVU7UUFDWjtJQUNGO0lBQ0FHLFFBQVE7UUFDTk4sU0FBUztJQUNYO0lBQ0FPLFVBQVU7UUFDUkMsWUFBWTtRQUNaakMsT0FBTztRQUNQLDhCQUE4QjtZQUM1QjRCLFVBQVU7UUFDWjtRQUNBLDhCQUE4QjtZQUM1QkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1lBQ1Y1QixPQUFPO1FBQ1Q7UUFDQSw2QkFBNkI7WUFDM0I0QixVQUFVO1lBQ1Y1QixPQUFPO1FBQ1Q7SUFDRjtJQUNBa0MsV0FBVztRQUNUQyxJQUFJO1FBQ0puQyxPQUFPO1FBQ1AsOEJBQThCO1lBQzVCNEIsVUFBVTtRQUNaO1FBQ0EsOEJBQThCO1lBQzVCQSxVQUFVO1FBQ1o7UUFDQSw2QkFBNkI7WUFDM0JBLFVBQVU7WUFDVjVCLE9BQU87WUFDUG1DLElBQUk7UUFDTjtRQUNBLDZCQUE2QjtZQUMzQlAsVUFBVTtZQUNWNUIsT0FBTztRQUNUO0lBQ0Y7SUFDQW9DLGtCQUFrQjtRQUNoQkMsU0FBUztRQUNUbEIsUUFBUTtRQUNSbkIsT0FBTztRQUNQTSxVQUFVO1FBQ1ZZLFFBQVE7UUFDUm9CLFNBQVM7UUFDVEMsWUFBWTtRQUNaLDZCQUE2QjtZQUMzQnZDLE9BQU87UUFDVDtRQUNBLDZCQUE2QjtZQUMzQndDLEdBQUc7UUFDTDtJQUNGO0lBQ0FDLFdBQVc7UUFDVGpCLElBQUk7UUFDSiw2QkFBNkI7WUFDM0JBLElBQUk7UUFDTjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5CYW5uZXJTbGlkZXIvbWFpbkJhbm5lclNsaWRlci5zdHlsZXMudHM/NzgwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBwbGF5ZXJXcmFwcGVyOiB7XG4gICAgd2lkdGg6ICc4MCUnLFxuICAgIGFzcGVjdFJhdGlvOiAnMTQvMycsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA0MDBweCknOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBtZWRpYVNsaWRlOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gIH0sXG4gIG1lZGlhSXRlbToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBtYXJnaW46ICcwIDEwcHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICBtZWRpYUl0ZW1JbWc6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBoZWlnaHQ6ICczMDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgYXNwZWN0UmF0aW9uOiAnMS8xJyxcbiAgICB9LFxuICAgICcmIGltZyc6IHtcbiAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBtYXJnaW5Cb3R0b206ICcyNXB4JyxcbiAgICAgIGJveFNoYWRvdzogJzAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcwIDAgNnB4IDZweCcsXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogLTEsXG4gICAgICBib3JkZXJSYWRpdXM6ICcwcHggMHB4IDVweCA1cHgnLFxuICAgICAgLy8gYmFja2dyb3VuZDogJyMyNDI0MjgnLFxuICAgICAgLy8gYmFja2dyb3VuZDogXCItbW96LWxpbmVhci1ncmFkaWVudCgwZGVnLCMyNDI0MjggMCxyZ2JhKDM2LDM2LDQwLDApIDUwJSwjMjQyNDI4IDEwMCUpXCIsXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBcIi13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsIzI0MjQyOCAwLHJnYmEoMzYsMzYsNDAsMCkgNTAlLCMyNDI0MjggMTAwJSlcIixcbiAgICAgIC8vIGJhY2tncm91bmQ6XG4gICAgICAvLyAgICdsaW5lYXItZ3JhZGllbnQoMGRlZywjMjQyNDI4IDAscmdiYSgzNiwzNiw0MCwwKSA3MCUsIzI0MjQyOCAxMDAlKScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgfSxcbiAgfSxcblxuICBtZWRpYUl0ZW1CYW5uZXI6IHt9LFxuICBvdmVydmlldzoge1xuICAgIGxpbmVIZWlnaHQ6ICcxLjYnLFxuICAgIGZvbnRXZWlnaHQ6ICczMDAnLFxuICAgIG1iOiAnMjBweCcsXG4gICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgICBXZWJraXRMaW5lQ2xhbXA6ICczJyxcbiAgICBXZWJraXRCb3hPcmllbnQ6ICd2ZXJ0aWNhbCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpJzoge1xuICAgICAgV2Via2l0TGluZUNsYW1wOiAnMicsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogJzQ4cHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnNDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NzZweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIH0sXG4gIH0sXG4gIHJhdGluZzoge1xuICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbiAgbWlCdG5zOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICB3YXRjaEJ0bjoge1xuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICB3aWR0aDogJzgwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGRldGFpbEJ0bjoge1xuICAgIG1sOiAnMjBweCcsXG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgIG1sOiAnMTBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICB3aWR0aDogJzgwcHgnLFxuICAgIH0sXG4gIH0sXG4gIG1lZGlhSXRlbUNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgekluZGV4OiAzLFxuICAgIHdpZHRoOiAnNTAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcyBlYXNlIDE1MG1zJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgcDogJzEwcHgnLFxuICAgIH0sXG4gIH0sXG4gIG1pQ29udGVudDoge1xuICAgIG1iOiAnMjBweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBtYjogJzVweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwicGxheWVyV3JhcHBlciIsIndpZHRoIiwiYXNwZWN0UmF0aW8iLCJvdmVyZmxvdyIsIm1lZGlhU2xpZGUiLCJtYXJnaW5Cb3R0b20iLCJtZWRpYUl0ZW0iLCJwb3NpdGlvbiIsIm91dGxpbmUiLCJtYXJnaW4iLCJtZWRpYUl0ZW1JbWciLCJoZWlnaHQiLCJhc3BlY3RSYXRpb24iLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4IiwibWVkaWFJdGVtQmFubmVyIiwib3ZlcnZpZXciLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsIm1iIiwiZGlzcGxheSIsIldlYmtpdExpbmVDbGFtcCIsIldlYmtpdEJveE9yaWVudCIsImZvbnRTaXplIiwidGl0bGUiLCJyYXRpbmciLCJtaUJ0bnMiLCJ3YXRjaEJ0biIsIndoaXRlU3BhY2UiLCJkZXRhaWxCdG4iLCJtbCIsIm1lZGlhSXRlbUNvbnRlbnQiLCJwYWRkaW5nIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJwIiwibWlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainBannerSlider/mainBannerSlider.styles.ts\n"));

/***/ })

});
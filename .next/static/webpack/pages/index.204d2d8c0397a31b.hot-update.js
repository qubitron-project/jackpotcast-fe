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

/***/ "./components/MidBannerSlider/midBannerSlider.styles.ts":
/*!**************************************************************!*\
  !*** ./components/MidBannerSlider/midBannerSlider.styles.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: function() { return /* binding */ styles; }\n/* harmony export */ });\nconst styles = {\n    playerWrapper: {\n        width: \"50%\",\n        aspectRatio: \"1/1\",\n        \"@media (max-width: 400px)\": {\n            width: \"100%\",\n            aspectRatio: \"16/9\"\n        },\n        overflow: \"hidden\"\n    },\n    mediaSlide: {\n        width: \"50%\",\n        marginBottom: \"10px\",\n        \"@media (max-width: 400px)\": {\n            width: \"100%\",\n            aspectRatio: \"16/9\"\n        }\n    },\n    mediaItem: {\n        position: \"relative\",\n        outline: \"none\",\n        margin: \"0 0px\",\n        innerHeight: \"500px\",\n        \"@media (max-width: 768px)\": {\n            margin: \"0 3px\"\n        }\n    },\n    mediaItemImg: {\n        position: \"relative\",\n        height: \"500px\",\n        \"@media (max-width: 1400px)\": {\n            height: \"500px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            height: \"500p\"\n        },\n        \"@media (max-width: 768px)\": {\n            height: \"500p\"\n        },\n        \"@media (max-width: 576px)\": {\n            height: \"500p\"\n        },\n        \"& img\": {\n            height: \"500p\",\n            margin: \"0 auto\",\n            marginBottom: \"25px\",\n            boxShadow: \"0 5px 15px rgba(0, 0, 0, 0.25)\",\n            borderRadius: \"0 0 6px 6px\"\n        },\n        \"&::after\": {\n            content: '\"\"',\n            position: \"absolute\",\n            top: 0,\n            left: 0,\n            right: 0,\n            bottom: -1,\n            borderRadius: \"0px 0px 5px 5px\",\n            // background: '#242428',\n            // background: \"-moz-linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 50%,#242428 100%)\",\n            // background: \"-webkit-linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 50%,#242428 100%)\",\n            // background:\n            //   'linear-gradient(0deg,#242428 0,rgba(36,36,40,0) 70%,#242428 100%)',\n            zIndex: 2\n        }\n    },\n    mediaItemBanner: {},\n    overview: {\n        lineHeight: \"1.6\",\n        fontWeight: \"300\",\n        mb: \"20px\",\n        display: \"-webkit-box\",\n        WebkitLineClamp: \"3\",\n        WebkitBoxOrient: \"vertical\",\n        overflow: \"hidden\",\n        fontSize: \"15px\",\n        \"@media (max-width: 1300px)\": {\n            WebkitLineClamp: \"2\"\n        },\n        \"@media (max-width: 576px)\": {\n            display: \"none\"\n        }\n    },\n    title: {\n        fontWeight: \"bold\",\n        fontSize: \"48px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"40px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"30px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"20px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"16px\"\n        }\n    },\n    rating: {\n        fontSize: \"18px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\"\n        }\n    },\n    miBtns: {\n        display: \"flex\"\n    },\n    watchBtn: {\n        whiteSpace: \"nowrap\",\n        width: \"120px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"12px\",\n            width: \"100px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\",\n            width: \"80px\"\n        }\n    },\n    detailBtn: {\n        ml: \"20px\",\n        width: \"120px\",\n        \"@media (max-width: 1400px)\": {\n            fontSize: \"18px\"\n        },\n        \"@media (max-width: 1300px)\": {\n            fontSize: \"14px\"\n        },\n        \"@media (max-width: 768px)\": {\n            fontSize: \"12px\",\n            width: \"100px\",\n            ml: \"10px\"\n        },\n        \"@media (max-width: 576px)\": {\n            fontSize: \"10px\",\n            width: \"80px\"\n        }\n    },\n    mediaItemContent: {\n        zIndex: 3,\n        width: \"50%\",\n        position: \"absolute\",\n        bottom: 0,\n        opacity: 0,\n        transition: \"opacity 1s ease 150ms\",\n        \"@media (max-width: 768px)\": {\n            width: \"90%\"\n        },\n        \"@media (max-width: 576px)\": {\n            p: \"10px\"\n        }\n    },\n    miContent: {\n        mb: \"20px\",\n        \"@media (max-width: 768px)\": {\n            mb: \"5px\"\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pZEJhbm5lclNsaWRlci9taWRCYW5uZXJTbGlkZXIuc3R5bGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxTQUFTO0lBQ3BCQyxlQUFlO1FBQ2JDLE9BQU87UUFDUEMsYUFBYTtRQUNiLDZCQUE2QjtZQUMzQkQsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFFQUMsVUFBVTtJQUNaO0lBQ0FDLFlBQVk7UUFDVkgsT0FBTztRQUNQSSxjQUFjO1FBQ2QsNkJBQTZCO1lBQzNCSixPQUFPO1lBQ1BDLGFBQWE7UUFDZjtJQUNGO0lBQ0FJLFdBQVc7UUFDVEMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFFBQVE7UUFDUkMsYUFBYTtRQUNiLDZCQUE2QjtZQUMzQkQsUUFBUTtRQUNWO0lBQ0Y7SUFDQUUsY0FBYztRQUNaSixVQUFVO1FBQ1ZLLFFBQVE7UUFDUiw4QkFBOEI7WUFDNUJBLFFBQVE7UUFDVjtRQUNBLDhCQUE4QjtZQUM1QkEsUUFBUTtRQUNWO1FBQ0EsNkJBQTZCO1lBQzNCQSxRQUFRO1FBQ1Y7UUFDQSw2QkFBNkI7WUFDM0JBLFFBQVE7UUFDVjtRQUNBLFNBQVM7WUFDUEEsUUFBUTtZQUNSSCxRQUFRO1lBQ1JKLGNBQWM7WUFDZFEsV0FBVztZQUNYQyxjQUFjO1FBQ2hCO1FBQ0EsWUFBWTtZQUNWQyxTQUFTO1lBQ1RSLFVBQVU7WUFDVlMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUSxDQUFDO1lBQ1RMLGNBQWM7WUFDZCx5QkFBeUI7WUFDekIsd0ZBQXdGO1lBQ3hGLDJGQUEyRjtZQUMzRixjQUFjO1lBQ2QseUVBQXlFO1lBQ3pFTSxRQUFRO1FBQ1Y7SUFDRjtJQUVBQyxpQkFBaUIsQ0FBQztJQUNsQkMsVUFBVTtRQUNSQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLGlCQUFpQjtRQUNqQkMsaUJBQWlCO1FBQ2pCekIsVUFBVTtRQUNWMEIsVUFBVTtRQUNWLDhCQUE4QjtZQUM1QkYsaUJBQWlCO1FBQ25CO1FBQ0EsNkJBQTZCO1lBQzNCRCxTQUFTO1FBQ1g7SUFDRjtJQUNBSSxPQUFPO1FBQ0xOLFlBQVk7UUFDWkssVUFBVTtRQUNWLDhCQUE4QjtZQUM1QkEsVUFBVTtRQUNaO1FBQ0EsOEJBQThCO1lBQzVCQSxVQUFVO1FBQ1o7UUFDQSw2QkFBNkI7WUFDM0JBLFVBQVU7UUFDWjtRQUNBLDZCQUE2QjtZQUMzQkEsVUFBVTtRQUNaO0lBQ0Y7SUFDQUUsUUFBUTtRQUNORixVQUFVO1FBQ1YsOEJBQThCO1lBQzVCQSxVQUFVO1FBQ1o7UUFDQSw4QkFBOEI7WUFDNUJBLFVBQVU7UUFDWjtRQUNBLDZCQUE2QjtZQUMzQkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1FBQ1o7SUFDRjtJQUNBRyxRQUFRO1FBQ05OLFNBQVM7SUFDWDtJQUNBTyxVQUFVO1FBQ1JDLFlBQVk7UUFDWmpDLE9BQU87UUFDUCw4QkFBOEI7WUFDNUI0QixVQUFVO1FBQ1o7UUFDQSw4QkFBOEI7WUFDNUJBLFVBQVU7UUFDWjtRQUNBLDZCQUE2QjtZQUMzQkEsVUFBVTtZQUNWNUIsT0FBTztRQUNUO1FBQ0EsNkJBQTZCO1lBQzNCNEIsVUFBVTtZQUNWNUIsT0FBTztRQUNUO0lBQ0Y7SUFDQWtDLFdBQVc7UUFDVEMsSUFBSTtRQUNKbkMsT0FBTztRQUNQLDhCQUE4QjtZQUM1QjRCLFVBQVU7UUFDWjtRQUNBLDhCQUE4QjtZQUM1QkEsVUFBVTtRQUNaO1FBQ0EsNkJBQTZCO1lBQzNCQSxVQUFVO1lBQ1Y1QixPQUFPO1lBQ1BtQyxJQUFJO1FBQ047UUFDQSw2QkFBNkI7WUFDM0JQLFVBQVU7WUFDVjVCLE9BQU87UUFDVDtJQUNGO0lBQ0FvQyxrQkFBa0I7UUFDaEJqQixRQUFRO1FBQ1JuQixPQUFPO1FBQ1BNLFVBQVU7UUFDVlksUUFBUTtRQUNSbUIsU0FBUztRQUNUQyxZQUFZO1FBQ1osNkJBQTZCO1lBQzNCdEMsT0FBTztRQUNUO1FBQ0EsNkJBQTZCO1lBQzNCdUMsR0FBRztRQUNMO0lBQ0Y7SUFDQUMsV0FBVztRQUNUaEIsSUFBSTtRQUNKLDZCQUE2QjtZQUMzQkEsSUFBSTtRQUNOO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWlkQmFubmVyU2xpZGVyL21pZEJhbm5lclNsaWRlci5zdHlsZXMudHM/NDFjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBwbGF5ZXJXcmFwcGVyOiB7XG4gICAgd2lkdGg6ICc1MCUnLFxuICAgIGFzcGVjdFJhdGlvOiAnMS8xJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBhc3BlY3RSYXRpbzogJzE2LzknLFxuICAgIH0sXG5cbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIG1lZGlhU2xpZGU6IHtcbiAgICB3aWR0aDogJzUwJScsXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA0MDBweCknOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYXNwZWN0UmF0aW86ICcxNi85JyxcbiAgICB9LFxuICB9LFxuICBtZWRpYUl0ZW06IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnMCAwcHgnLFxuICAgIGlubmVySGVpZ2h0OiAnNTAwcHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgbWFyZ2luOiAnMCAzcHgnLFxuICAgIH0sXG4gIH0sXG4gIG1lZGlhSXRlbUltZzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBoZWlnaHQ6ICc1MDBwJyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgaGVpZ2h0OiAnNTAwcCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSc6IHtcbiAgICAgIGhlaWdodDogJzUwMHAnLFxuICAgIH0sXG4gICAgJyYgaW1nJzoge1xuICAgICAgaGVpZ2h0OiAnNTAwcCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMjVweCcsXG4gICAgICBib3hTaGFkb3c6ICcwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCAwIDZweCA2cHgnLFxuICAgIH0sXG4gICAgJyY6OmFmdGVyJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IC0xLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMHB4IDBweCA1cHggNXB4JyxcbiAgICAgIC8vIGJhY2tncm91bmQ6ICcjMjQyNDI4JyxcbiAgICAgIC8vIGJhY2tncm91bmQ6IFwiLW1vei1saW5lYXItZ3JhZGllbnQoMGRlZywjMjQyNDI4IDAscmdiYSgzNiwzNiw0MCwwKSA1MCUsIzI0MjQyOCAxMDAlKVwiLFxuICAgICAgLy8gYmFja2dyb3VuZDogXCItd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCMyNDI0MjggMCxyZ2JhKDM2LDM2LDQwLDApIDUwJSwjMjQyNDI4IDEwMCUpXCIsXG4gICAgICAvLyBiYWNrZ3JvdW5kOlxuICAgICAgLy8gICAnbGluZWFyLWdyYWRpZW50KDBkZWcsIzI0MjQyOCAwLHJnYmEoMzYsMzYsNDAsMCkgNzAlLCMyNDI0MjggMTAwJSknLFxuICAgICAgekluZGV4OiAyLFxuICAgIH0sXG4gIH0sXG5cbiAgbWVkaWFJdGVtQmFubmVyOiB7fSxcbiAgb3ZlcnZpZXc6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMS42JyxcbiAgICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgICBtYjogJzIwcHgnLFxuICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXG4gICAgV2Via2l0TGluZUNsYW1wOiAnMycsXG4gICAgV2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSc6IHtcbiAgICAgIFdlYmtpdExpbmVDbGFtcDogJzInLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NzZweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6ICc0OHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICczMHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICB9LFxuICB9LFxuICByYXRpbmc6IHtcbiAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NzZweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgIH0sXG4gIH0sXG4gIG1pQnRuczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgd2F0Y2hCdG46IHtcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB3aWR0aDogJzEyMHB4JyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NzZweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICB9LFxuICB9LFxuICBkZXRhaWxCdG46IHtcbiAgICBtbDogJzIwcHgnLFxuICAgIHdpZHRoOiAnMTIwcHgnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCknOiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICBtbDogJzEwcHgnLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA1NzZweCknOiB7XG4gICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICB9LFxuICB9LFxuICBtZWRpYUl0ZW1Db250ZW50OiB7XG4gICAgekluZGV4OiAzLFxuICAgIHdpZHRoOiAnNTAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcyBlYXNlIDE1MG1zJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpJzoge1xuICAgICAgcDogJzEwcHgnLFxuICAgIH0sXG4gIH0sXG4gIG1pQ29udGVudDoge1xuICAgIG1iOiAnMjBweCcsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBtYjogJzVweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwicGxheWVyV3JhcHBlciIsIndpZHRoIiwiYXNwZWN0UmF0aW8iLCJvdmVyZmxvdyIsIm1lZGlhU2xpZGUiLCJtYXJnaW5Cb3R0b20iLCJtZWRpYUl0ZW0iLCJwb3NpdGlvbiIsIm91dGxpbmUiLCJtYXJnaW4iLCJpbm5lckhlaWdodCIsIm1lZGlhSXRlbUltZyIsImhlaWdodCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJtZWRpYUl0ZW1CYW5uZXIiLCJvdmVydmlldyIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwibWIiLCJkaXNwbGF5IiwiV2Via2l0TGluZUNsYW1wIiwiV2Via2l0Qm94T3JpZW50IiwiZm9udFNpemUiLCJ0aXRsZSIsInJhdGluZyIsIm1pQnRucyIsIndhdGNoQnRuIiwid2hpdGVTcGFjZSIsImRldGFpbEJ0biIsIm1sIiwibWVkaWFJdGVtQ29udGVudCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwicCIsIm1pQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MidBannerSlider/midBannerSlider.styles.ts\n"));

/***/ })

});
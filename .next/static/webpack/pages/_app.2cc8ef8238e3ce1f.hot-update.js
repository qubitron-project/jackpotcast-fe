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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme */ \"./theme.tsx\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.tsx\");\n/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../analytics */ \"./analytics/index.ts\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/fetcher */ \"./utils/fetcher.ts\");\n/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../next-seo.config */ \"./next-seo.config.ts\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component, pageProps: { session, ...pageProps } } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { fallback } = pageProps;\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_15__.QueryClient({\n            defaultOptions: {\n                queries: {\n                    refetchOnWindowFocus: false,\n                    retry: 3,\n                    staleTime: 30000\n                }\n            }\n        }));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _analytics__WEBPACK_IMPORTED_MODULE_9__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    const option = {\n        fetcher: _utils_fetcher__WEBPACK_IMPORTED_MODULE_12__.fetcher,\n        // fetcher: (url: any) => fetch(url).then((res) => res.json()),\n        fallback: fallback || {},\n        onErrorRetry: (error, key, config, revalidate, param)=>{\n            let { retryCount } = param;\n            // 404에서 재시도 안함\n            if (error.status === 404) return;\n            // 특정 키에 대해 재시도 안함\n            if (key === \"/api/user\") return;\n            // 10번까지만 재시도함\n            if (retryCount >= 10) return;\n            // 5초 후에 재시도\n            setTimeout(()=>revalidate({\n                    retryCount\n                }), 5000);\n        },\n        dedupingInterval: 100,\n        refreshInterval: 3000\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_11__.SWRConfig, {\n        value: option,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_16__.CookiesProvider, {\n            defaultSetOptions: {\n                path: \"/\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n                session: session,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_14__.DefaultSeo, {\n                        ..._next_seo_config__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_15__.QueryClientProvider, {\n                        client: queryClient,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_15__.Hydrate, {\n                            state: pageProps.dehydratedState,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n                                store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.store,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_17__.ThemeProvider, {\n                                    theme: _theme__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                            ...pageProps\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zombie/Downloads/jackpot-fe/pages/_app.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"XIblTHX7PnuQgIVoucv9djSb9ho=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.appWithTranslation)(MyApp));\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVKO0FBQ1U7QUFLbkI7QUFDUTtBQUNPO0FBRVA7QUFDUjtBQUNGO0FBQ29CO0FBQ1o7QUFDYTtBQUNBO0FBQ1A7QUFDTjtBQUNDO0FBQ1M7QUFFL0MsU0FBU21CLE1BQU0sS0FBNkQ7UUFBN0QsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxXQUFXLEVBQVksR0FBN0Q7O0lBQ2IsTUFBTUUsU0FBU3JCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVzQixRQUFRLEVBQUUsR0FBR0g7SUFDckIsTUFBTSxDQUFDSSxZQUFZLEdBQUd4QiwrQ0FBUUEsQ0FDNUIsSUFDRSxJQUFJSSwrREFBV0EsQ0FBQztZQUNkcUIsZ0JBQWdCO2dCQUNkQyxTQUFTO29CQUNQQyxzQkFBc0I7b0JBQ3RCQyxPQUFPO29CQUNQQyxXQUFXO2dCQUNiO1lBQ0Y7UUFDRjtJQUdKOUIsZ0RBQVNBLENBQUM7UUFDUixNQUFNK0Isb0JBQW9CLENBQUNDO1lBQ3pCcEIsZ0RBQWEsQ0FBQ29CO1FBQ2hCO1FBQ0FULE9BQU9XLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1Qko7UUFDeEMsT0FBTztZQUNMUixPQUFPVyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJMO1FBQzNDO0lBQ0YsR0FBRztRQUFDUixPQUFPVyxNQUFNO0tBQUM7SUFFbEIsTUFBTUcsU0FBMkI7UUFDL0J0QixPQUFPQSxzREFBQUE7UUFDUCwrREFBK0Q7UUFDL0RTLFVBQVVBLFlBQVksQ0FBQztRQUN2QmMsY0FBYyxDQUFDQyxPQUFPQyxLQUFLQyxRQUFRQztnQkFBWSxFQUFFQyxVQUFVLEVBQUU7WUFDM0QsZUFBZTtZQUNmLElBQUlKLE1BQU1LLE1BQU0sS0FBSyxLQUFLO1lBRTFCLGtCQUFrQjtZQUNsQixJQUFJSixRQUFRLGFBQWE7WUFFekIsY0FBYztZQUNkLElBQUlHLGNBQWMsSUFBSTtZQUV0QixZQUFZO1lBQ1pFLFdBQVcsSUFBTUgsV0FBVztvQkFBRUM7Z0JBQVcsSUFBSTtRQUMvQztRQUNBRyxrQkFBa0I7UUFDbEJDLGlCQUFpQjtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDakMsMkNBQVNBO1FBQUNrQyxPQUFPWDtrQkFDaEIsNEVBQUNuQiwwREFBZUE7WUFBQytCLG1CQUFtQjtnQkFBRUMsTUFBTTtZQUFJO3NCQUM5Qyw0RUFBQy9DLDREQUFlQTtnQkFBQ21CLFNBQVNBOztrQ0FDeEIsOERBQUNMLGlEQUFVQTt3QkFBRSxHQUFHRCx5REFBRzs7Ozs7O2tDQUNuQiw4REFBQ1YsdUVBQW1CQTt3QkFBQzZDLFFBQVExQjtrQ0FDM0IsNEVBQUNyQiwyREFBT0E7NEJBQUNnRCxPQUFPL0IsVUFBVWdDLGVBQWU7c0NBQ3ZDLDRFQUFDOUMsaURBQVFBO2dDQUFDRSxPQUFPQSwrQ0FBS0E7MENBQ3BCLDRFQUFDRCx5REFBYUE7b0NBQUNFLE9BQU9BLDhDQUFLQTs4Q0FDekIsNEVBQUNDLGlFQUFNQTtrREFDTCw0RUFBQ1M7NENBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUM7R0FuRVNGOztRQUNRakIsa0RBQVNBOzs7S0FEakJpQjtBQXFFVCwrREFBZSxNQUFBTixpRUFBa0JBLENBQUNNLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQge1xuICBIeWRyYXRlLFxuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbn0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJy4uL2FuYWx5dGljcyc7XG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IHsgU1dSQ29uZmlnLCBTV1JDb25maWd1cmF0aW9uIH0gZnJvbSAnc3dyJztcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi91dGlscy9mZXRjaGVyJztcbmltcG9ydCBTRU8gZnJvbSAnLi4vbmV4dC1zZW8uY29uZmlnJztcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGZhbGxiYWNrIH0gPSBwYWdlUHJvcHM7XG4gIGNvbnN0IFtxdWVyeUNsaWVudF0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PlxuICAgICAgbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICAgICAgICByZXRyeTogMyxcbiAgICAgICAgICAgIHN0YWxlVGltZTogMzAwMDAsIC8vIDMwIHNlY29uZHNcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogVVJMKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbcm91dGVyLmV2ZW50c10pO1xuXG4gIGNvbnN0IG9wdGlvbjogU1dSQ29uZmlndXJhdGlvbiA9IHtcbiAgICBmZXRjaGVyLFxuICAgIC8vIGZldGNoZXI6ICh1cmw6IGFueSkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLFxuICAgIGZhbGxiYWNrOiBmYWxsYmFjayB8fCB7fSxcbiAgICBvbkVycm9yUmV0cnk6IChlcnJvciwga2V5LCBjb25maWcsIHJldmFsaWRhdGUsIHsgcmV0cnlDb3VudCB9KSA9PiB7XG4gICAgICAvLyA0MDTsl5DshJwg7J6s7Iuc64+EIOyViO2VqFxuICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47XG5cbiAgICAgIC8vIO2KueyglSDtgqTsl5Ag64yA7ZW0IOyerOyLnOuPhCDslYjtlahcbiAgICAgIGlmIChrZXkgPT09ICcvYXBpL3VzZXInKSByZXR1cm47XG5cbiAgICAgIC8vIDEw67KI6rmM7KeA66eMIOyerOyLnOuPhO2VqFxuICAgICAgaWYgKHJldHJ5Q291bnQgPj0gMTApIHJldHVybjtcblxuICAgICAgLy8gNey0iCDtm4Tsl5Ag7J6s7Iuc64+EXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJldmFsaWRhdGUoeyByZXRyeUNvdW50IH0pLCA1MDAwKTtcbiAgICB9LFxuICAgIGRlZHVwaW5nSW50ZXJ2YWw6IDEwMCxcbiAgICByZWZyZXNoSW50ZXJ2YWw6IDMwMDAsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U1dSQ29uZmlnIHZhbHVlPXtvcHRpb259PlxuICAgICAgPENvb2tpZXNQcm92aWRlciBkZWZhdWx0U2V0T3B0aW9ucz17eyBwYXRoOiAnLycgfX0+XG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgICAgPERlZmF1bHRTZW8gey4uLlNFT30gLz5cbiAgICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICAgIDwvSHlkcmF0ZT5cbiAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+XG4gICAgPC9TV1JDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcCk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwic3RvcmUiLCJ0aGVtZSIsIkxheW91dCIsImd0YWciLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJTV1JDb25maWciLCJmZXRjaGVyIiwiU0VPIiwiRGVmYXVsdFNlbyIsIkNvb2tpZXNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsInJvdXRlciIsImZhbGxiYWNrIiwicXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInJldHJ5Iiwic3RhbGVUaW1lIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwib3B0aW9uIiwib25FcnJvclJldHJ5IiwiZXJyb3IiLCJrZXkiLCJjb25maWciLCJyZXZhbGlkYXRlIiwicmV0cnlDb3VudCIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJkZWR1cGluZ0ludGVydmFsIiwicmVmcmVzaEludGVydmFsIiwidmFsdWUiLCJkZWZhdWx0U2V0T3B0aW9ucyIsInBhdGgiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});
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

/***/ "./src/components/Results.tsx":
/*!************************************!*\
  !*** ./src/components/Results.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Results: () => (/* binding */ Results),\n/* harmony export */   generarResultadosHTML: () => (/* binding */ generarResultadosHTML)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"./src/components/ui/card.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"./src/lib/utils.ts\");\n/* harmony import */ var _data_quizUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/quizUtils */ \"./src/data/quizUtils.ts\");\n/* harmony import */ var _data_questions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/questions */ \"./src/data/questions.ts\");\n\n\n\n // Importa la función\n\nfunction generarResultadosHTML(name, respuestasUsuario) {\n    // Calcular los puntajes por categoría utilizando la función\n    const puntajes = (0,_data_quizUtils__WEBPACK_IMPORTED_MODULE_3__.calcularPuntajes)(respuestasUsuario, _data_questions__WEBPACK_IMPORTED_MODULE_4__.questions);\n    // Convertir los puntajes en un array ordenado de resultados\n    const resultadosOrdenados = Object.entries(puntajes).sort((param, param1)=>{\n        let [, a] = param, [, b] = param1;\n        return b - a;\n    }).map((param)=>{\n        let [categoria, score] = param;\n        return {\n            category: categoria,\n            score,\n            description: _data_questions__WEBPACK_IMPORTED_MODULE_4__.categoryDescriptions[categoria] // Obtener la descripción correspondiente\n        };\n    });\n    const topResults = resultadosOrdenados.sort((a, b)=>b.score - a.score) // Ordenar por puntaje descendente\n    .slice(0, 2); // Tomar los 2 primeros elementos\n    const htmlContent = '\\n    <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.5; color: #333;\">\\n      <!-- Saludo inicial -->\\n      <h1 style=\"text-align: center; font-size: 28px; font-weight: bold; color: #0056b3;\">Hola '.concat(name, '!</h1>\\n      <p style=\"text-align: center; font-size: 16px; margin: 16px 0;\">\\n        Estos son los resultados de tu primer test de orientaci\\xf3n vocacional. Este test es una herramienta inicial para identificar caracter\\xedsticas clave que nos ayudar\\xe1n en el proceso que puedes iniciar con \\n        <strong>Br\\xfajula Orientaci\\xf3n Vocacional</strong>. \\xa1Estamos aqu\\xed para acompa\\xf1arte en tu camino!\\n      </p>\\n  \\n      <!-- Resultados principales -->\\n      <h2 style=\"text-align: center; font-size: 24px; font-weight: bold; margin-top: 32px;\">\\xc1reas de Inter\\xe9s Sugeridas</h2>\\n      ').concat(topResults.map((result)=>'\\n        <div style=\"border: 1px solid #ccc; padding: 16px; margin: 8px 0; border-radius: 8px; background: #f9f9f9;\">\\n          <h3 style=\"display: flex; justify-content: space-between; font-size: 18px; margin-bottom: 8px;\">\\n            <span>'.concat(result.category, '</span>\\n            <span style=\"color: #777;\">Puntaje: ').concat(result.score, '</span>\\n          </h3>\\n          <p style=\"color: #555; margin: 0;\">').concat(result.description, \"</p>\\n        </div>\\n      \")).join(''), '\\n  \\n      <!-- Invitaci\\xf3n a contactarnos -->\\n      <div style=\"margin-top: 32px; text-align: center; padding: 16px; border: 1px solid #0056b3; border-radius: 8px; background: #eef6ff;\">\\n        <h3 style=\"font-size: 20px; color: #0056b3; font-weight: bold;\">\\xa1Estamos para ayudarte!</h3>\\n        <p style=\"margin: 8px 0;\">Si deseas continuar con el proceso, no dudes en contactarnos.</p>\\n        <div>\\n          <a href=\"https://www.instagram.com/orientacionvocacionalbrujula/\" target=\"_blank\" style=\"color: #0056b3; text-decoration: none; margin-right: 16px;\">Instagram</a>\\n          <a href=\"https://www.facebook.com/profile.php?id=61568201455483\"\" target=\"_blank\" style=\"color: #0056b3; text-decoration: none; margin-right: 16px;\">Facebook</a>\\n          <a href=\"mailto:info@brujula.uy\" target=\"_blank\" style=\"color: #0056b3; text-decoration: none;\">info@brujula.uy</a>\\n          <a href=\"href=\"https://api.whatsapp.com/send?phone=59891916894&text=Hola%21%20\"\" target=\"_blank\" style=\"color: #0056b3; text-decoration: none;\">091916894</a>\\n          \\n        </div>\\n      </div>\\n    </div>\\n  ');\n    return htmlContent;\n}\nfunction Results(param) {\n    let { respuestasUsuario } = param;\n    // Calcular los puntajes por categoría utilizando la función\n    const puntajes = (0,_data_quizUtils__WEBPACK_IMPORTED_MODULE_3__.calcularPuntajes)(respuestasUsuario, _data_questions__WEBPACK_IMPORTED_MODULE_4__.questions);\n    // Convertir los puntajes en un array ordenado de resultados\n    const resultadosOrdenados = Object.entries(puntajes).sort((param, param1)=>{\n        let [, a] = param, [, b] = param1;\n        return b - a;\n    }).map((param)=>{\n        let [categoria, score] = param;\n        return {\n            category: categoria,\n            score,\n            description: _data_questions__WEBPACK_IMPORTED_MODULE_4__.categoryDescriptions[categoria] // Obtener la descripción correspondiente\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6 w-full max-w-2xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-center mb-6\",\n                children: \"\\xc1reas de Inter\\xe9s Sugeridas\"\n            }, void 0, false, {\n                fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            resultadosOrdenados.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"transition-all duration-300\", index === 0 ? \"border-primary\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                className: \"flex justify-between items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: result.category\n                                    }, void 0, false, {\n                                        fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-muted-foreground\",\n                                        children: [\n                                            \" Puntaje: \",\n                                            result.score\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-muted-foreground\",\n                                children: result.description\n                            }, void 0, false, {\n                                fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amhdl/test-vocacional/src/components/Results.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_c = Results;\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFFL0M7QUFDbUIsQ0FBQyxxQkFBcUI7QUFDUDtBQVE1RCxTQUFTUSxzQkFBdUJDLElBQVksRUFBR0MsaUJBQTJCO0lBQy9FLDREQUE0RDtJQUM1RCxNQUFNQyxXQUFXTixpRUFBZ0JBLENBQUNLLG1CQUFtQkosc0RBQVNBO0lBRzlELDREQUE0RDtJQUM1RCxNQUFNTSxzQkFBd0NDLE9BQU9DLE9BQU8sQ0FBQ0gsVUFDMURJLElBQUksQ0FBQztZQUFDLEdBQUdDLEVBQUUsVUFBRSxHQUFHQyxFQUFFO2VBQUtBLElBQUlEO09BQzNCRSxHQUFHLENBQUM7WUFBQyxDQUFDQyxXQUFXQyxNQUFNO2VBQU07WUFDNUJDLFVBQVVGO1lBQ1ZDO1lBQ0FFLGFBQWFmLGlFQUFvQixDQUFDWSxVQUFnQyxDQUFDLHlDQUF5QztRQUM5Rzs7SUFFQSxNQUFNSSxhQUFhWCxvQkFDbEJHLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFRyxLQUFLLEdBQUdKLEVBQUVJLEtBQUssRUFBRSxrQ0FBa0M7S0FDcEVJLEtBQUssQ0FBQyxHQUFHLElBQUksaUNBQWlDO0lBRWpELE1BQU1DLGNBQWMsdVBBV2RGLE9BUnlGZCxNQUFLLHFtQkFnQnBGLE9BUlZjLFdBQVdMLEdBQUcsQ0FBQ1EsQ0FBQUEsU0FBVSx5UEFJaUJBLE9BRDlCQSxPQUFPTCxRQUFRLEVBQUMsNkRBR1dLLE9BRkdBLE9BQU9OLEtBQUssRUFBQywyRUFFRyxPQUFuQk0sT0FBT0osV0FBVyxFQUFDLGlDQUV6REssSUFBSSxDQUFDLEtBQUk7SUFpQmhCLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTRyxRQUFRLEtBQW1DO1FBQW5DLEVBQUVsQixpQkFBaUIsRUFBZ0IsR0FBbkM7SUFDdEIsNERBQTREO0lBQzVELE1BQU1DLFdBQVdOLGlFQUFnQkEsQ0FBQ0ssbUJBQW1CSixzREFBU0E7SUFFOUQsNERBQTREO0lBQzVELE1BQU1NLHNCQUF3Q0MsT0FBT0MsT0FBTyxDQUFDSCxVQUMxREksSUFBSSxDQUFDO1lBQUMsR0FBR0MsRUFBRSxVQUFFLEdBQUdDLEVBQUU7ZUFBS0EsSUFBSUQ7T0FDM0JFLEdBQUcsQ0FBQztZQUFDLENBQUNDLFdBQVdDLE1BQU07ZUFBTTtZQUM1QkMsVUFBVUY7WUFDVkM7WUFDQUUsYUFBYWYsaUVBQW9CLENBQUNZLFVBQWdDLENBQUMseUNBQXlDO1FBQzlHOztJQUVGLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNDOzs7Ozs7WUFDbkRsQixvQkFBb0JNLEdBQUcsQ0FBQyxDQUFDUSxRQUFRTSxzQkFDaEMsOERBQUNoQyxxREFBSUE7b0JBRUg4QixXQUFXMUIsOENBQUVBLENBQ1gsK0JBQ0E0QixVQUFVLElBQUksbUJBQW1COztzQ0FHbkMsOERBQUM5QiwyREFBVUE7c0NBQ1QsNEVBQUNDLDBEQUFTQTtnQ0FBQzJCLFdBQVU7O2tEQUNuQiw4REFBQ0c7a0RBQU1QLE9BQU9MLFFBQVE7Ozs7OztrREFDdEIsOERBQUNZO3dDQUFLSCxXQUFVOzs0Q0FBd0I7NENBQVdKLE9BQU9OLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHbkUsOERBQUNuQiw0REFBV0E7c0NBQ1YsNEVBQUNpQztnQ0FBRUosV0FBVTswQ0FBeUJKLE9BQU9KLFdBQVc7Ozs7Ozs7Ozs7OzttQkFickRVOzs7Ozs7Ozs7OztBQW1CZjtLQXJDZ0JKIiwic291cmNlcyI6WyIvaG9tZS9hbWhkbC90ZXN0LXZvY2FjaW9uYWwvc3JjL2NvbXBvbmVudHMvUmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlSZXN1bHQsIFZvY2F0aW9uYWxDYXRlZ29yeSB9IGZyb20gXCJAL3R5cGVzL3F1aXpcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBjYWxjdWxhclB1bnRhamVzIH0gZnJvbSBcIkAvZGF0YS9xdWl6VXRpbHNcIjsgLy8gSW1wb3J0YSBsYSBmdW5jacOzblxuaW1wb3J0IHsgcXVlc3Rpb25zLCBjYXRlZ29yeURlc2NyaXB0aW9ucyB9IGZyb20gJ0AvZGF0YS9xdWVzdGlvbnMnO1xuXG5pbnRlcmZhY2UgUmVzdWx0c1Byb3BzIHtcbiAgcmVzcHVlc3Rhc1VzdWFyaW86IG51bWJlcltdOyAvLyBBc3VtZSBxdWUgZWwgY29tcG9uZW50ZSByZWNpYmUgbGFzIHJlc3B1ZXN0YXMgZGVsIHVzdWFyaW9cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFyUmVzdWx0YWRvc0hUTUwoIG5hbWU6IHN0cmluZyAsIHJlc3B1ZXN0YXNVc3VhcmlvOiBudW1iZXJbXSkge1xuICAvLyBDYWxjdWxhciBsb3MgcHVudGFqZXMgcG9yIGNhdGVnb3LDrWEgdXRpbGl6YW5kbyBsYSBmdW5jacOzblxuICBjb25zdCBwdW50YWplcyA9IGNhbGN1bGFyUHVudGFqZXMocmVzcHVlc3Rhc1VzdWFyaW8sIHF1ZXN0aW9ucyk7XG5cblxuICAvLyBDb252ZXJ0aXIgbG9zIHB1bnRhamVzIGVuIHVuIGFycmF5IG9yZGVuYWRvIGRlIHJlc3VsdGFkb3NcbiAgY29uc3QgcmVzdWx0YWRvc09yZGVuYWRvczogQ2F0ZWdvcnlSZXN1bHRbXSA9IE9iamVjdC5lbnRyaWVzKHB1bnRhamVzKVxuICAgIC5zb3J0KChbLCBhXSwgWywgYl0pID0+IGIgLSBhKVxuICAgIC5tYXAoKFtjYXRlZ29yaWEsIHNjb3JlXSkgPT4gKHtcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yaWEgYXMgVm9jYXRpb25hbENhdGVnb3J5LFxuICAgICAgc2NvcmUsXG4gICAgICBkZXNjcmlwdGlvbjogY2F0ZWdvcnlEZXNjcmlwdGlvbnNbY2F0ZWdvcmlhIGFzIFZvY2F0aW9uYWxDYXRlZ29yeV0gLy8gT2J0ZW5lciBsYSBkZXNjcmlwY2nDs24gY29ycmVzcG9uZGllbnRlXG4gICAgfSkpO1xuXG4gICAgY29uc3QgdG9wUmVzdWx0cyA9IHJlc3VsdGFkb3NPcmRlbmFkb3NcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpIC8vIE9yZGVuYXIgcG9yIHB1bnRhamUgZGVzY2VuZGVudGVcbiAgICAuc2xpY2UoMCwgMik7IC8vIFRvbWFyIGxvcyAyIHByaW1lcm9zIGVsZW1lbnRvc1xuICBcbiAgY29uc3QgaHRtbENvbnRlbnQgPSBgXG4gICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87IGxpbmUtaGVpZ2h0OiAxLjU7IGNvbG9yOiAjMzMzO1wiPlxuICAgICAgPCEtLSBTYWx1ZG8gaW5pY2lhbCAtLT5cbiAgICAgIDxoMSBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMwMDU2YjM7XCI+SG9sYSAke25hbWV9ITwvaDE+XG4gICAgICA8cCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNnB4OyBtYXJnaW46IDE2cHggMDtcIj5cbiAgICAgICAgRXN0b3Mgc29uIGxvcyByZXN1bHRhZG9zIGRlIHR1IHByaW1lciB0ZXN0IGRlIG9yaWVudGFjacOzbiB2b2NhY2lvbmFsLiBFc3RlIHRlc3QgZXMgdW5hIGhlcnJhbWllbnRhIGluaWNpYWwgcGFyYSBpZGVudGlmaWNhciBjYXJhY3RlcsOtc3RpY2FzIGNsYXZlIHF1ZSBub3MgYXl1ZGFyw6FuIGVuIGVsIHByb2Nlc28gcXVlIHB1ZWRlcyBpbmljaWFyIGNvbiBcbiAgICAgICAgPHN0cm9uZz5CcsO6anVsYSBPcmllbnRhY2nDs24gVm9jYWNpb25hbDwvc3Ryb25nPi4gwqFFc3RhbW9zIGFxdcOtIHBhcmEgYWNvbXBhw7FhcnRlIGVuIHR1IGNhbWlubyFcbiAgICAgIDwvcD5cbiAgXG4gICAgICA8IS0tIFJlc3VsdGFkb3MgcHJpbmNpcGFsZXMgLS0+XG4gICAgICA8aDIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDMycHg7XCI+w4FyZWFzIGRlIEludGVyw6lzIFN1Z2VyaWRhczwvaDI+XG4gICAgICAke3RvcFJlc3VsdHMubWFwKHJlc3VsdCA9PiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBwYWRkaW5nOiAxNnB4OyBtYXJnaW46IDhweCAwOyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6ICNmOWY5Zjk7XCI+XG4gICAgICAgICAgPGgzIHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBmb250LXNpemU6IDE4cHg7IG1hcmdpbi1ib3R0b206IDhweDtcIj5cbiAgICAgICAgICAgIDxzcGFuPiR7cmVzdWx0LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICM3Nzc7XCI+UHVudGFqZTogJHtyZXN1bHQuc2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzU1NTsgbWFyZ2luOiAwO1wiPiR7cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgKS5qb2luKCcnKX1cbiAgXG4gICAgICA8IS0tIEludml0YWNpw7NuIGEgY29udGFjdGFybm9zIC0tPlxuICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDMycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTZweDsgYm9yZGVyOiAxcHggc29saWQgIzAwNTZiMzsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiAjZWVmNmZmO1wiPlxuICAgICAgICA8aDMgc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGNvbG9yOiAjMDA1NmIzOyBmb250LXdlaWdodDogYm9sZDtcIj7CoUVzdGFtb3MgcGFyYSBheXVkYXJ0ZSE8L2gzPlxuICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogOHB4IDA7XCI+U2kgZGVzZWFzIGNvbnRpbnVhciBjb24gZWwgcHJvY2Vzbywgbm8gZHVkZXMgZW4gY29udGFjdGFybm9zLjwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcmllbnRhY2lvbnZvY2FjaW9uYWxicnVqdWxhL1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiY29sb3I6ICMwMDU2YjM7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgbWFyZ2luLXJpZ2h0OiAxNnB4O1wiPkluc3RhZ3JhbTwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTYxNTY4MjAxNDU1NDgzXCJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT1cImNvbG9yOiAjMDA1NmIzOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IG1hcmdpbi1yaWdodDogMTZweDtcIj5GYWNlYm9vazwvYT5cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmluZm9AYnJ1anVsYS51eVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiY29sb3I6ICMwMDU2YjM7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcIj5pbmZvQGJydWp1bGEudXk8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01OTg5MTkxNjg5NCZ0ZXh0PUhvbGElMjElMjBcIlwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwiY29sb3I6ICMwMDU2YjM7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcIj4wOTE5MTY4OTQ8L2E+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgcmV0dXJuIGh0bWxDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVzdWx0cyh7IHJlc3B1ZXN0YXNVc3VhcmlvIH06IFJlc3VsdHNQcm9wcykge1xuICAvLyBDYWxjdWxhciBsb3MgcHVudGFqZXMgcG9yIGNhdGVnb3LDrWEgdXRpbGl6YW5kbyBsYSBmdW5jacOzblxuICBjb25zdCBwdW50YWplcyA9IGNhbGN1bGFyUHVudGFqZXMocmVzcHVlc3Rhc1VzdWFyaW8sIHF1ZXN0aW9ucyk7XG5cbiAgLy8gQ29udmVydGlyIGxvcyBwdW50YWplcyBlbiB1biBhcnJheSBvcmRlbmFkbyBkZSByZXN1bHRhZG9zXG4gIGNvbnN0IHJlc3VsdGFkb3NPcmRlbmFkb3M6IENhdGVnb3J5UmVzdWx0W10gPSBPYmplY3QuZW50cmllcyhwdW50YWplcylcbiAgICAuc29ydCgoWywgYV0sIFssIGJdKSA9PiBiIC0gYSlcbiAgICAubWFwKChbY2F0ZWdvcmlhLCBzY29yZV0pID0+ICh7XG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcmlhIGFzIFZvY2F0aW9uYWxDYXRlZ29yeSxcbiAgICAgIHNjb3JlLFxuICAgICAgZGVzY3JpcHRpb246IGNhdGVnb3J5RGVzY3JpcHRpb25zW2NhdGVnb3JpYSBhcyBWb2NhdGlvbmFsQ2F0ZWdvcnldIC8vIE9idGVuZXIgbGEgZGVzY3JpcGNpw7NuIGNvcnJlc3BvbmRpZW50ZVxuICAgIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHctZnVsbCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi02XCI+w4FyZWFzIGRlIEludGVyw6lzIFN1Z2VyaWRhczwvaDI+XG4gICAgICB7cmVzdWx0YWRvc09yZGVuYWRvcy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgPENhcmRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBcInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiLFxuICAgICAgICAgICAgaW5kZXggPT09IDAgPyBcImJvcmRlci1wcmltYXJ5XCIgOiBcIlwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3Jlc3VsdC5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPiBQdW50YWplOiB7cmVzdWx0LnNjb3JlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiY24iLCJjYWxjdWxhclB1bnRhamVzIiwicXVlc3Rpb25zIiwiY2F0ZWdvcnlEZXNjcmlwdGlvbnMiLCJnZW5lcmFyUmVzdWx0YWRvc0hUTUwiLCJuYW1lIiwicmVzcHVlc3Rhc1VzdWFyaW8iLCJwdW50YWplcyIsInJlc3VsdGFkb3NPcmRlbmFkb3MiLCJPYmplY3QiLCJlbnRyaWVzIiwic29ydCIsImEiLCJiIiwibWFwIiwiY2F0ZWdvcmlhIiwic2NvcmUiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidG9wUmVzdWx0cyIsInNsaWNlIiwiaHRtbENvbnRlbnQiLCJyZXN1bHQiLCJqb2luIiwiUmVzdWx0cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5kZXgiLCJzcGFuIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Results.tsx\n"));

/***/ })

});
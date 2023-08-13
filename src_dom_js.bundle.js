"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbattle_sandwich"] = self["webpackChunkbattle_sandwich"] || []).push([["src_dom_js"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom: () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);\n_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst dom = ( async () => {\n  const playerGameBoard = document.querySelector('.gameboard-player')\n  const computerGameBoard = document.querySelector('.gameboard-computer')\n  // p1Board = player1.gameboard.board\n  await console.log(`p1Board[1][1] is ${_index__WEBPACK_IMPORTED_MODULE_0__.p1Board[1][1]}`)\n  await console.log(`p1Board[2].length is ${_index__WEBPACK_IMPORTED_MODULE_0__.p1Board[2].length}`)\n\n  for (let row = 0; row < _index__WEBPACK_IMPORTED_MODULE_0__.p1Board[0].length; row += 1){\n    for (let col = 0; col < _index__WEBPACK_IMPORTED_MODULE_0__.p1Board[1].length; col += 1){\n\n    }\n  }\n\n  }\n)();\n\n\n\n// let colorOddRows = ( () => {\n//   oddRowSquares.forEach( (square) => {\n//     if (square.dataset.id )\n//       if (square.dataset.id % 2 === 0){\n//         square.classList.add('light-wood')\n//       } else {\n//         square.classList.add('dark-wood');\n//       }\n//     })\n//   })()\n\n//   evenRowSquares.forEach( (square) => {\n//     if (square.dataset.id )\n//       if (square.dataset.id % 2 !== 0){\n//         square.classList.add('light-wood')\n//       } else {\n//         square.classList.add('dark-wood');\n//       }\n//     })\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://battle-sandwich/./src/dom.js?");

/***/ })

}]);
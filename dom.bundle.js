/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildHTMLBoards: () => (/* binding */ buildHTMLBoards)\n/* harmony export */ });\nconst buildHTMLBoards = ( () => {\n  const gameArea = document.querySelector('.game')\n\n  gameArea.innerHTML = `\n    <div class=\"gameboard-container\">\n      <div class=\"board-context\"><h3>Player 1</h3>\n        <div class=\"gameboard gameboard-player\">\n        </div>\n      </div>\n      <div class=\"board-context\">\n        <h3>Computer</h3>\n        <div class=\"gameboard gameboard-computer\">\n        </div>\n      </div>\n    </div>\n    `\n  \n  const oddClasses = ['square', 'light-wood']\n  const evenClasses = ['square', 'dark-wood']\n  const template2DArr = [\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','',''],\n    ['','','','','','','','','','']\n  ]  \n  const playerGameBoard = document.querySelector('.gameboard-player');\n  const computerGameBoard = document.querySelector('.gameboard-computer');\n  // Generate playerBoard\n    for (let row = 0; row < template2DArr.length; row += 1){\n      for (let col = 0; col < template2DArr.length; col += 1){\n        if (row % 2 === 0 && col % 2 === 0){\n          const newDiv = document.createElement('div')\n          newDiv.classList.add(...oddClasses)\n          newDiv.dataset.id = `[${row},${col}]`\n          newDiv.setAttribute('disabled', true);\n          playerGameBoard.append(newDiv)\n        } else if (row % 2 === 0 && col % 2 !== 0){\n          const newDiv = document.createElement('div')\n          newDiv.classList.add(...evenClasses)\n          newDiv.dataset.id = `[${row},${col}]`\n          newDiv.setAttribute('disabled', true);\n          playerGameBoard.append(newDiv)\n        } else if (row % 2 !== 0 && col % 2 !== 0){\n          const newDiv = document.createElement('div')\n          newDiv.classList.add(...oddClasses)\n          newDiv.dataset.id = `[${row},${col}]`\n          newDiv.setAttribute('disabled', true);\n          playerGameBoard.append(newDiv)\n        } else if (row % 2 !== 0 && col % 2 === 0){\n          const newDiv = document.createElement('div')\n          newDiv.classList.add(...evenClasses)\n          newDiv.dataset.id = `[${row},${col}]`\n          newDiv.setAttribute('disabled', true);\n          playerGameBoard.append(newDiv)\n        }\n      }\n    }\n\n  // Generate compBoard\n  for (let row = 0; row < template2DArr.length; row += 1){\n    for (let col = 0; col < template2DArr.length; col += 1){\n      if (row % 2 === 0 && col % 2 === 0){\n        const newDiv = document.createElement('div')\n        newDiv.classList.add(...oddClasses)\n        newDiv.dataset.id = `[${row},${col}]`\n        computerGameBoard.append(newDiv)\n      } else if (row % 2 === 0 && col % 2 !== 0){\n        const newDiv = document.createElement('div')\n        newDiv.classList.add(...evenClasses)\n        newDiv.dataset.id = `[${row},${col}]`\n        computerGameBoard.append(newDiv)\n      } else if (row % 2 !== 0 && col % 2 !== 0){\n        const newDiv = document.createElement('div')\n        newDiv.classList.add(...oddClasses)\n        newDiv.dataset.id = `[${row},${col}]`\n        computerGameBoard.append(newDiv)\n      } else if (row % 2 !== 0 && col % 2 === 0){\n        const newDiv = document.createElement('div')\n        newDiv.classList.add(...evenClasses)\n        newDiv.dataset.id = `[${row},${col}]`\n        computerGameBoard.append(newDiv)\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://battle-sandwich/./src/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/dom.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
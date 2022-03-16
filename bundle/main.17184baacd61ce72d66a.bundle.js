/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/a.css":
/*!*************************!*\
  !*** ./src/pages/a.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/g.css":
/*!*************************!*\
  !*** ./src/pages/g.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/s.css":
/*!*************************!*\
  !*** ./src/pages/s.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/tools/pop.js":
/*!*********************************!*\
  !*** ./src/assets/tools/pop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pop": () => (/* binding */ pop)
/* harmony export */ });
const  pop = (title, contenedor, color) =>{
    let pop = document.createElement('div');
    pop.style.width = '100%';
    pop.style.height = '60%';
    pop.style.backgroundColor = color;
    pop.innerHTML = title;
    pop.style.border = '1px solid black';
    contenedor.appendChild(pop);
    return contenedor;
}


/***/ }),

/***/ "./src/pages/a.js":
/*!************************!*\
  !*** ./src/pages/a.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearArtorias": () => (/* binding */ crearArtorias)
/* harmony export */ });
/* harmony import */ var _assets_tools_pop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/pop.js */ "./src/assets/tools/pop.js");


const crearArtorias = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.id = 'art-c';
    contenedor = (0,_assets_tools_pop_js__WEBPACK_IMPORTED_MODULE_0__.pop)('Artorias', contenedor, 'black');
    document.body.appendChild(contenedor);
}

/***/ }),

/***/ "./src/pages/g.js":
/*!************************!*\
  !*** ./src/pages/g.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearGuts": () => (/* binding */ crearGuts)
/* harmony export */ });
/* harmony import */ var _assets_tools_pop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/pop.js */ "./src/assets/tools/pop.js");


const crearGuts = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.id = 'gut-c';
    contenedor = (0,_assets_tools_pop_js__WEBPACK_IMPORTED_MODULE_0__.pop)('Guts', contenedor, 'black');
    document.body.appendChild(contenedor);
}

/***/ }),

/***/ "./src/pages/s.js":
/*!************************!*\
  !*** ./src/pages/s.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crearSolaire": () => (/* binding */ crearSolaire)
/* harmony export */ });
/* harmony import */ var _assets_tools_pop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/tools/pop.js */ "./src/assets/tools/pop.js");


const crearSolaire = () => {
    let contenedor1 = document.getElementById("body-container");
    contenedor1.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.id = 'sol-c';
    contenedor = (0,_assets_tools_pop_js__WEBPACK_IMPORTED_MODULE_0__.pop)('Solaire', contenedor, 'black');
    document.body.appendChild(contenedor);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css");
/* harmony import */ var _pages_a_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/a.css */ "./src/pages/a.css");
/* harmony import */ var _pages_s_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/s.css */ "./src/pages/s.css");
/* harmony import */ var _pages_g_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/g.css */ "./src/pages/g.css");
/* harmony import */ var _pages_a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/a.js */ "./src/pages/a.js");
/* harmony import */ var _pages_s_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/s.js */ "./src/pages/s.js");
/* harmony import */ var _pages_g_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/g.js */ "./src/pages/g.js");








let cont = document.getElementById("body-container");
let clases = document.createElement("ul");
let artorias = document.createElement("li");
let a = document.createElement("a");
let solaire = document.createElement("li");
let s = document.createElement("a");
let guts = document.createElement("li");
let g = document.createElement("a");

a.addEventListener("click", art);
s.addEventListener("click", sol);
g.addEventListener("click", gut);
a.innerHTML = "Artorias, caminante del abismo";
s.innerHTML = "Solaire, caballero de la luz solar";
g.innerHTML = "Guts, el espadachín negro";
artorias.appendChild(a);
solaire.appendChild(s);
guts.appendChild(g);
clases.appendChild(artorias);
clases.appendChild(solaire);
clases.appendChild(guts);


function art(){
    (0,_pages_a_js__WEBPACK_IMPORTED_MODULE_4__.crearArtorias)();
}

function sol(){
    (0,_pages_s_js__WEBPACK_IMPORTED_MODULE_5__.crearSolaire)();
}

function gut(){
    (0,_pages_g_js__WEBPACK_IMPORTED_MODULE_6__.crearGuts)();
}
})();

/******/ })()
;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = function (modalTriggerSelector, modalContentSelector, modalCloseBtnSelector) {
  let modifiedSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'true';
  const modalTrigger = document.querySelectorAll(modalTriggerSelector),
    modalContent = document.querySelector(modalContentSelector);
  modalTrigger.forEach(item => {
    item.addEventListener('click', e => {
      modalContent.classList.remove('hide');
      modalContent.classList.add('show');
      document.body.style.overflow = 'hidden';
      if (modifiedSelector == '.button-transparent') {
        document.body.style.overflow = '';
      }
      if (e.target.classList.contains(modifiedSelector.replace(/\./, ''))) {
        e.target.classList.add('hide');
      }
    });
  });
  modalContent.addEventListener('click', e => {
    let target = e.target;
    if (target.classList.contains(modalCloseBtnSelector.replace(/\./, '')) || target == modalContent) {
      modalContent.classList.remove('show');
      modalContent.classList.add('hide');
      document.body.style.overflow = '';
    }
  });
  const moreStyleButton = document.querySelector('.button-styles'),
    styleImg = document.querySelectorAll('.hidden-lg');
  moreStyleButton.addEventListener('click', () => {
    moreStyleButton.classList.add('hide');
    styleImg.forEach(item => {
      item.classList.add('show');
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = (slidersSelector, direction, parentSelector) => {
  const sliders = document.querySelectorAll(slidersSelector),
    parent = document.querySelector(parentSelector);
  console.log(parent);
  let slideIndex = 0;
  let paused = false;
  function showSlide() {
    sliders.forEach((slide, i) => {
      slide.classList.remove('show');
      slide.classList.add('hide');
      slide.classList.add('animated');
      if (i == slideIndex) {
        slide.classList.add('show');
      }
    });
  }
  showSlide();
  function changeSlideIndex(number) {
    slideIndex += number;
    if (slideIndex > sliders.length - 1) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = sliders.length - 1;
    }
    console.log(slideIndex);
  }
  function slideMove(num) {
    changeSlideIndex(num);
    showSlide();
  }
  try {
    const prevBtn = document.querySelector('.main-prev-btn'),
      nextBtn = document.querySelector('.main-next-btn');
    prevBtn.addEventListener('click', () => {
      slideMove(-1);
      sliders[slideIndex].classList.remove('fadeInLeft');
      sliders[slideIndex].classList.add('fadeInRight');
    });
    nextBtn.addEventListener('click', () => {
      slideMove(1);
      sliders[slideIndex].classList.add('fadeInLeft');
      sliders[slideIndex].classList.remove('fadeInRight');
    });
  } catch (e) {
    console.log(e);
  }
  function activateAnimation() {
    paused = setInterval(() => {
      slideMove(1);
      if (direction === 'column') {
        sliders[slideIndex].classList.add('fadeInDown');
      }
      if (direction === 'row') {
        sliders[slideIndex].classList.add('fadeInLeft');
      }
    }, 2000);
  }
  activateAnimation();
  sliders[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  sliders[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-design', '.popup-design', '.popup-close');
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-consultation', '.popup-consultation', '.popup-close');
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('.fixed-gift', '.popup-gift', '.popup-close', '.fixed-gift');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'column', '.main-slider');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'row', '.feedback-slider');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map
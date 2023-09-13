/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const accordion = () => {
  const accordTrigger = document.querySelectorAll('.accordion-heading'),
    accordContent = document.querySelectorAll('.accordion-block');
  accordContent.forEach(item => {
    item.classList.add('animated', 'fadeInUp');
  });
  function hideContent() {
    accordTrigger.forEach(btn => {
      btn.classList.remove('active-btn');
    });
    accordContent.forEach(item => {
      item.classList.add('hide');
    });
  }
  hideContent();
  accordTrigger.forEach(btn => {
    btn.addEventListener('click', function (e) {
      // hideContent();
      this.classList.toggle('active-btn');
      this.nextElementSibling.classList.toggle('active-content');
      if (this.classList.contains('active-btn')) {
        this.nextElementSibling.classList.remove('hide');
        this.querySelector('span').style.cssText = `
            border-bottom: none;
            `;
      } else if (!this.classList.contains('active-btn')) {
        this.nextElementSibling.classList.add('hide');
        this.querySelector('span').style.cssText = `
            border-bottom: '';
            `;
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu');
  burgerBtn.addEventListener('click', function () {
    burger.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      this.querySelector('span').style.display = 'inline-block';
      burgerMenu.style.display = 'block';
    } else {
      this.querySelector('span').style.display = 'none';
      burgerMenu.style.display = 'none';
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const calc = (size, material, options, promo, result, calcObj) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promoBlock = document.querySelector(promo),
    resultBlock = document.querySelector(result);
  let sum = 0;
  const calcFunction = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
    } else if (promoBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
      calcObj['sum'] = sum;
    }
  };
  sizeBlock.addEventListener('change', () => {
    calcFunction();
    calcObj[sizeBlock.getAttribute('id')] = sizeBlock.value;
    console.log(calcObj);
  });
  materialBlock.addEventListener('change', () => {
    calcFunction();
    calcObj[materialBlock.getAttribute('id')] = materialBlock.value;
  });
  optionsBlock.addEventListener('change', () => {
    calcFunction();
    calcObj[optionsBlock.getAttribute('id')] = optionsBlock.value;
  });
  promoBlock.addEventListener('input', () => {
    calcFunction();
    calcObj[promoBlock.getAttribute('id')] = promoBlock.value;
  });
};
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/dragAndDrop.js":
/*!***************************************!*\
  !*** ./src/js/modules/dragAndDrop.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/requests */ "./src/js/modules/services/requests.js");

const dragAndDrop = () => {
  const inputs = document.querySelectorAll('[name="upload"]');
  console.log(inputs);
  // ['drag enter', ' dragleave', 'dragover', 'drop'].forEach(eventName =>{
  //     inputs.forEach(input=>{
  //         input.addEventListener(eventName, preventDefaults, false)
  //     })
  // });

  // function preventDefaults(e){
  //     e.target.preventDefault();
  //     e.target.stopPropagation();
  // };

  function highlight(item) {
    item.closest('.file_upload').style.border = '4px solid yellow';
    item.closest('.file_upload').style.background = 'grey';
  }
  ;
  function unhighlight(item) {
    item.closest('.file_upload').style.border = '';
    item.closest('.file_upload').style.background = '';
  }
  ;
  ['drag enter', 'dragover'].forEach(eventName => {
    inputs.forEach(input => {
      input.addEventListener(eventName, () => {
        highlight(input);
      }, false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    inputs.forEach(input => {
      input.addEventListener(eventName, () => {
        unhighlight(input);
      }, false);
    });
  });
  inputs.forEach(input => {
    input.addEventListener('drop', e => {
      // if(input.getAttribute('id', 'main-upload')){
      //     console.log(e.dataTransfer.files[0]);

      //     postData('server.php', form )
      //         .then(res => console.log(res))
      //         .catch(()=>console.log('upload miss'))
      //         // .finally(()=>{
      //         //     setTimeout(input.previousElementSibling.textContent = '', 2000)
      //         // })
      // }
      input.files = e.dataTransfer.files;
      let dots;
      const nameArr = input.files[0].name.split('.');
      nameArr[0].length > 5 ? dots = '...' : dots = '.';
      const nameStr = nameArr[0].substring(0, 5) + dots + nameArr[nameArr.length - 1];
      input.previousElementSibling.textContent = nameStr;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (dragAndDrop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    portfolioItems = document.querySelectorAll('.portfolio-block'),
    noPortret = document.querySelector('.portfolio-no');
  menu.addEventListener('click', e => {
    let elemClass = '';
    if (e.target && e.target.tagName == 'LI') {
      elemClass = e.target.classList;
      console.log(elemClass[0]);
    }
    portfolioItems.forEach(item => {
      item.classList.add('animated', 'fadeIn');
      item.classList.remove('show');
      item.classList.add('hide');
      noPortret.classList.remove('show');
      noPortret.classList.add('hide');
      if (item.classList.contains(elemClass)) {
        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        noPortret.classList.remove('hide');
        noPortret.classList.add('show');
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/requests */ "./src/js/modules/services/requests.js");

const forms = calcObj => {
  const forms = document.querySelectorAll('form');
  const message = {
    sucsess: 'загрузка завершена',
    loading: 'загрузка...',
    failure: 'ошибка',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'server.php',
    question: 'question.php'
  };
  const upload = document.querySelectorAll('[name = "upload"]');
  const selects = document.querySelectorAll('select');
  let api;
  function clearInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = '';
    });
  }
  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let form = new FormData(item);
      if (item.classList.contains('form-option')) {
        for (let key in calcObj) {
          form.append(key, calcObj[key]);
        }
      } else {
        form = new FormData(item);
      }
      item.classList.add('animated', 'fadeOutUp');
      item.style.display = 'none';
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      let statusImg = document.createElement('img');
      statusImg.classList.add('status-img');
      statusImg.setAttribute('src', message.spinner);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      statusMessage.appendChild(statusImg);
      statusMessage.classList.add('animated', 'fadeInDown');
      item.closest('.popup-consultation') ? api = path.question : api = path.designer;
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, form).then(data => {
        textMessage.textContent = message.sucsess;
        statusImg.setAttribute('src', message.ok);
        console.log(api);
        console.log(`this is data ${data}`);
      }).catch(() => {
        console.log('post err');
        textMessage.textContent = message.failure;
        statusImg.setAttribute('src', message.fail);
      }).finally(() => {
        setTimeout(() => {
          clearInputs();
          statusMessage.textContent = '';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInDown');
          item.style.display = 'block';
          try {
            item.querySelector('textarea').value = '';
          } catch {
            e => {
              console.error(e);
            };
          }
        }, 2000);
      });
    });
  });
  upload.forEach(item => {
    item.addEventListener('input', e => {
      e.preventDefault();
      console.log(item.files[0].name);
      let dots;
      const nameArr = item.files[0].name.split('.');
      nameArr[0].length > 5 ? dots = '...' : dots = '.';
      const nameStr = nameArr[0].substring(0, 5) + dots + nameArr[nameArr.length - 1];
      item.previousElementSibling.textContent = nameStr;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = (modalTriggerSelector, modalContentSelector, modalCloseBtnSelector) => {
  const modalTrigger = document.querySelectorAll(modalTriggerSelector),
    modalContent = document.querySelector(modalContentSelector);
  modalTrigger.forEach(item => {
    item.addEventListener('click', e => {
      modalContent.classList.remove('hide');
      modalContent.classList.add('show');
      document.body.style.overflow = 'hidden';
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

  // const moreStyleButton = document.querySelector('.button-styles'),
  //       styleImg = document.querySelectorAll('.hidden-lg');
  // moreStyleButton.addEventListener('click', ()=>{
  //     moreStyleButton.classList.add('hide');
  //     styleImg.forEach(item =>{
  //         item.classList.add('show')
  //     })
  // })
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const pictureSize = () => {
  const sizesBlock = document.querySelectorAll('.sizes-block');
  sizesBlock.forEach((block, i) => {
    block.addEventListener('mouseenter', () => {
      console.log('enter');
      block.querySelector('img').setAttribute('src', `assets/img/sizes-${i + 1}-1.png`);
      block.querySelectorAll('p').forEach(p => {
        if (!p.classList.contains('sizes-hit')) {
          p.style.display = 'none';
        }
      });
    });
  });
  sizesBlock.forEach((block, i) => {
    block.addEventListener('mouseleave', () => {
      console.log('leave');
      block.querySelector('img').setAttribute('src', `assets/img/sizes-${i + 1}.png`);
      block.querySelectorAll('p').forEach(p => {
        p.style.display = 'block';
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/services/requests.js":
/*!*********************************************!*\
  !*** ./src/js/modules/services/requests.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResours: function() { return /* binding */ getResours; },
/* harmony export */   postData: function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};
const getResours = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.text();
};


/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/requests */ "./src/js/modules/services/requests.js");

const showMoreStyles = (triggerSelector, wrapperSelector) => {
  const trigger = document.querySelector(triggerSelector),
    wrapper = document.querySelector(wrapperSelector);
  trigger.addEventListener('click', () => {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResours)('http://localhost:3000/styles').then(res => createCards(res)).catch(() => {
      console.log('error');
    }).finally(() => {
      trigger.classList.add('hide');
    });
  });
  function createCards(responce) {
    responce.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
      card.innerHTML = `
            <div class='styles-block'>
                <img src=${src} alt = 'img'>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
        `;
      wrapper.appendChild(card);
    });
  }

  //  <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
  //     <div class=styles-block>
  //         <img src=assets/img/styles-5.jpg alt>
  //         <h4>Пастелью</h4>
  //         <a href="#">Подробнее</a>
  //     </div>
  // </div>

  // content.forEach(item =>{
  //     item.classList.add('animated', 'fadeInUp');
  // })
  // trigger.addEventListener('click', ()=>{
  //     trigger.classList.add('hide');
  //     content.forEach(item=>{
  //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
  //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
  //     })
  // })
};

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = (slidersSelector, direction) => {
  const sliders = document.querySelectorAll(slidersSelector);
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_dragAndDrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/dragAndDrop */ "./src/js/modules/dragAndDrop.js");



// import formspetr from "./modules/forms-petr";









document.addEventListener('DOMContentLoaded', () => {
  const calcObj = {};
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-design', '.popup-design', '.popup-close');
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-consultation', '.popup-consultation', '.popup-close');
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('.fixed-gift', '.popup-gift', '.popup-close', '.fixed-gift');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'column');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'row');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(calcObj);
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price', calcObj);
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_modules_dragAndDrop__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map
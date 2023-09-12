import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
// import formspetr from "./modules/forms-petr";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
document.addEventListener('DOMContentLoaded',()=>{

const calcObj = {};

    modals('.button-design', '.popup-design', '.popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-close', '.fixed-gift');
    
    slider('.main-slider-item', 'column');
    slider('.feedback-slider-item', 'row');

    forms(calcObj);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    
    showMoreStyles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price', calcObj);

    filter();
    pictureSize();
    accordion();
    burger()
})
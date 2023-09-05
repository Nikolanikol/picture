import modals from "./modules/modals";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded',()=>{


    modals('.button-design', '.popup-design', '.popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-close', '.fixed-gift');
    
    slider('.main-slider-item', 'column', '.main-slider')
    slider('.feedback-slider-item', 'row', '.feedback-slider')
})
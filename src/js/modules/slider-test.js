const slider = (viewFieldSelector, sliderItem , parentSelector, direction )=>{
    const field = document.querySelector(viewFieldSelector),
          item = document.querySelector(sliderItem),
          itemsParent = document.querySelector(parentSelector),
          width = window.getComputedStyle(item).width,
          height = window.getComputedStyle(item).height,
          slides = document.querySelectorAll('.main-slider-item');
  
//     const plus = document.createElement('button');
//     const minus = document.createElement('button');
//     plus.style.cssText= `
//         width: 15px;
//         height: 15px;
//         background-color: red;
//         position: absolute;
//         right: 0;
//         top: 50%;
//     `;
//     minus.style.cssText = `
//     width: 15px;
//     height: 15px;
//     background-color: blue;
//     position: absolute;
//     left: 0;
//     top: 50%;
// `;

    field.style.width = width;
    field.style.height = height;
    field.style.overflow = 'hidden';
    itemsParent.style.transition = 'all 0.9s ease-in';
    // field.append(plus)
    // field.append(minus)


    let offset = 0;
    
    let slideIndex = 1;
    let offsetValue = 0;
    if(direction == 'column'){
        direction = height
    }
    if(direction == 'row'){
        direction = width;
    }
    let maxOffset = direction.replace(/\D/g,'')*(slides.length-1);
    function plusSlide(){
        if(offset == 0){
            offset = -maxOffset;
        }else{
            offset += +direction.replace(/\D/g, '')
        }
        itemsParent.style.transform = `translateY(${offset}px)`;

    }
    function minusSlide(slideIndex){
        if (offset == -maxOffset) {
            offset = 0
        } else {
            offset -= +direction.replace(/\D/g, '');
        };
        itemsParent.style.transform = `translateY(${offset}px)`;
    }
    
    // plus.addEventListener('click', ()=>{
    //     plusSlide(slideIndex)
    //     slideIndex++;
    //     if(slideIndex > slides.length -1){
    //         slideIndex = 1;
    //     }
    //     if(slideIndex < 1){
    //         slideIndex = slides.length -1
    //     }
    //     console.log('plus')
    //     console.log(slideIndex)
    //     console.log(offset)
    // })
    // minus.addEventListener('click', ()=>{
    //     minusSlide()
    //     slideIndex--
    //     if(slideIndex > slides.length){
    //         slideIndex = 1;
    //     }
    //     if(slideIndex < 1){
    //         slideIndex = slides.length
    //     }
    //     console.log(slideIndex)
    //     console.log(offset)

    // })
    setInterval(()=>{
        plusSlide()
    }, 4000)

}




export default slider;

// main-slider_view-field
// main-slider-item
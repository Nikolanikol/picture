const slider = (slidersSelector, direction) =>{
    const sliders = document.querySelectorAll(slidersSelector);
    let slideIndex = 0;
    let paused = false;

    function showSlide(){
        sliders.forEach((slide, i ) =>{
            slide.classList.remove('show');
            slide.classList.add('hide');
            slide.classList.add('animated');
            if(i == slideIndex){
                slide.classList.add('show');
            }
        })
    }
    showSlide();
    function changeSlideIndex(number){
        slideIndex += number;
        if(slideIndex > (sliders.length-1)){
            slideIndex = 0
        }
        if(slideIndex < 0){
            slideIndex = sliders.length-1
        }
 
    }
    function slideMove(num){
        changeSlideIndex(num)
        showSlide();
      
    }

    
    try{
        const prevBtn = document.querySelector('.main-prev-btn'),
        nextBtn = document.querySelector('.main-next-btn');
        prevBtn.addEventListener('click', ()=>{
            slideMove(-1)
            sliders[slideIndex].classList.remove('fadeInLeft');
            sliders[slideIndex].classList.add('fadeInRight');
            
        })
        nextBtn.addEventListener('click', ()=>{
            slideMove(1)
            sliders[slideIndex].classList.add('fadeInLeft');
            sliders[slideIndex].classList.remove('fadeInRight');
            
        })
    }catch(e){
        console.log(e)
    }
    function activateAnimation(){
        paused = setInterval(()=>{
            slideMove(1)
            if(direction === 'column'){
                sliders[slideIndex].classList.add('fadeInDown')
            }
            if(direction === 'row'){
                sliders[slideIndex].classList.add('fadeInLeft')
            }
        }, 2000)
    }
    activateAnimation()
    sliders[0].parentNode.addEventListener('mouseenter', ()=>{
        clearInterval(paused)
    })
    sliders[0].parentNode.addEventListener('mouseleave', ()=>{
        activateAnimation()
    })

}

export default slider;
const accordion = ()=>{
    const accordTrigger = document.querySelectorAll('.accordion-heading'),
          accordContent = document.querySelectorAll('.accordion-block');
    
    accordContent.forEach(item=>{
        item.classList.add('animated', 'fadeInUp');
    })



    function hideContent(){
        accordTrigger.forEach(btn=>{
            btn.classList.remove('active-btn')
        })
        accordContent.forEach(item =>{
            item.classList.add('hide');

        })
    }
    hideContent();

    accordTrigger.forEach(btn =>{
    btn.addEventListener('click', function (e){

        // hideContent();
        this.classList.toggle('active-btn')
        this.nextElementSibling.classList.toggle('active-content');


        if (this.classList.contains('active-btn')) {
            this.nextElementSibling.classList.remove('hide');
            this.querySelector('span').style.cssText = `
            border-bottom: none;
            `
        } else if(!this.classList.contains('active-btn')){
            this.nextElementSibling.classList.add('hide');
            this.querySelector('span').style.cssText = `
            border-bottom: '';
            `
        }
    })})

}

export default accordion;
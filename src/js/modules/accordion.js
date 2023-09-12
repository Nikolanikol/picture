const accordion = ()=>{
    const accordTrigger = document.querySelectorAll('.accordion-heading'),
          accordContent = document.querySelectorAll('.accordion-block');
    
    accordContent.forEach(item=>{
        item.classList.add('animated', 'fadeInUp');
    })
    function hideContent(){
        accordContent.forEach(item =>{
            item.classList.add('hide');

        })
    }
    hideContent()
          accordTrigger.forEach(btn =>{
            btn.addEventListener('click', function (){
                hideContent();
                this.classList.toggle('active-btn')
                this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-btn')) {
                this.nextElementSibling.classList.remove('hide')
            } 
            })})

}

export default accordion;
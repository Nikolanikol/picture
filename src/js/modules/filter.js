const filter = ()=>{

    const menu = document.querySelector('.portfolio-menu'),
          portfolioItems = document.querySelectorAll('.portfolio-block'),
          noPortret = document.querySelector('.portfolio-no');

    menu.addEventListener('click', (e)=>{
        let elemClass = ''
        if(e.target && e.target.tagName == 'LI'){
            elemClass = e.target.classList;
            console.log(elemClass[0])
        }
        portfolioItems.forEach(item =>{
            item.classList.add('animated', 'fadeIn')
            item.classList.remove('show');
            item.classList.add('hide');
            noPortret.classList.remove('show');
            noPortret.classList.add('hide');


            if(item.classList.contains(elemClass)){
                item.classList.remove('hide');
                item.classList.add('show');
                
            }else{
                noPortret.classList.remove('hide');
                noPortret.classList.add('show');
            }
        })
    })

}

export default filter;
const modals = (modalTriggerSelector , modalContentSelector, modalCloseBtnSelector)=>{
    const modalTrigger = document.querySelectorAll(modalTriggerSelector),
          modalContent = document.querySelector(modalContentSelector);

    modalTrigger.forEach(item =>{
        item.addEventListener('click', (e)=>{
            modalContent.classList.remove('hide')
            modalContent.classList.add('show')
            document.body.style.overflow = 'hidden';

        })
    })
    modalContent.addEventListener('click', (e)=>{
        let target = e.target;
        if(target.classList.contains(modalCloseBtnSelector.replace(/\./, '')) || target == modalContent){
            modalContent.classList.remove('show');
            modalContent.classList.add('hide');
            document.body.style.overflow = '';

        }
    })

    // const moreStyleButton = document.querySelector('.button-styles'),
    //       styleImg = document.querySelectorAll('.hidden-lg');
    // moreStyleButton.addEventListener('click', ()=>{
    //     moreStyleButton.classList.add('hide');
    //     styleImg.forEach(item =>{
    //         item.classList.add('show')
    //     })
    // })
}

export default modals;
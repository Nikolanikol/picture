import { getResours } from "./services/requests";

const showMoreStyles = (triggerSelector, wrapperSelector) =>{
   const trigger = document.querySelector(triggerSelector),
         wrapper = document.querySelector(wrapperSelector);


     trigger.addEventListener('click', ()=>{
        getResours( 'http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(()=>{
                console.log('error')
            })
            .finally(()=>{
                trigger.classList.add('hide');
            })
     })

     function createCards(responce){
        responce.forEach(({src, title, link})=>{
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1','animated', 'fadeInUp');
            card.innerHTML = `
            <div class='styles-block'>
                <img src=${src} alt = 'img'>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
        `;
        wrapper.appendChild(card)
        })
        

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
    
}

export default showMoreStyles;
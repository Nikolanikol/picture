const pictureSize = ()=>{
    const sizesBlock = document.querySelectorAll('.sizes-block');

    sizesBlock.forEach((block, i)=>{
        block.addEventListener('mouseenter', ()=>{
            console.log('enter');
            
            block.querySelector('img').setAttribute('src', `assets/img/sizes-${i+1}-1.png`);
            block.querySelectorAll('p').forEach(p=>{
                if(!(p.classList.contains('sizes-hit'))){
                    p.style.display = 'none';

                }
            })

        })
    })
    sizesBlock.forEach((block, i)=>{
        block.addEventListener('mouseleave', ()=>{
            console.log('leave');
            
            block.querySelector('img').setAttribute('src', `assets/img/sizes-${i+1}.png`);
            block.querySelectorAll('p').forEach(p=>{
                p.style.display = 'block';
            })

        })
    })

}

export default pictureSize;
const calc = (size, material, options, promo, result, calcObj)=>{
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promo),
          resultBlock = document.querySelector(result);
    let sum = 0;

    const calcFunction = ()=>{
        sum = Math.round((+sizeBlock.value) * (+ materialBlock.value) + (+optionsBlock.value));

        if(sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
        }else if(promoBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum * 0.7)
        }else{
            resultBlock.textContent = sum;
            calcObj['sum'] = sum;
        }

    };

    sizeBlock.addEventListener('change',()=>{
        calcFunction();
        calcObj[sizeBlock.getAttribute('id')] = sizeBlock.value;
        console.log(calcObj)
    });
    materialBlock.addEventListener('change', ()=>{
        calcFunction();
        calcObj[materialBlock.getAttribute('id')] = materialBlock.value;
    });
    optionsBlock.addEventListener('change', ()=>{
        calcFunction();
        calcObj[optionsBlock.getAttribute('id')] = optionsBlock.value;

    });
    promoBlock.addEventListener('input',()=>{
        calcFunction();
        calcObj[promoBlock.getAttribute('id')] = promoBlock.value;
    } );
}   

export default calc;
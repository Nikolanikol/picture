const burger = ()=>{
    const burgerBtn = document.querySelector('.burger'),
          burgerMenu = document.querySelector('.burger-menu');
    burgerBtn.addEventListener('click', function (){
        burger.forEach(btn=>{
            btn.classList.remove('active');
        })
        this.classList.toggle('active');

        if(this.classList.contains('active')){
            this.querySelector('span').style.display = 'inline-block';
            burgerMenu.style.display = 'block'
        }else{
            this.querySelector('span').style.display = 'none';
            burgerMenu.style.display = 'none'
        }
    })
}

export default burger;
import { postData } from "./services/requests";

const forms = (calcObj)=>{
    const forms = document.querySelectorAll('form');
    const message = {
        sucsess: 'загрузка завершена',
        loading: 'загрузка...',
        failure: 'ошибка',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }
    const path = {
        designer: 'server.php',
        question: 'question.php'
    };
    const upload = document.querySelectorAll('[name = "upload"]');
    const selects = document.querySelectorAll('select');
    let api;
    


    function clearInputs(){
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input=>{
            input.value = ''
        });
        upload.forEach(item =>{
            item.previousElementSibling.textContent = '';
        })
    }
    forms.forEach(item=>{
        item.addEventListener('submit',(e)=>{
            e.preventDefault(); 
            let form = new FormData(item);
            
            if(item.classList.contains('form-option')){
                for(let key in calcObj){
                    form.append(key, calcObj[key]);
                }
            }else{
                form = new FormData(item);
            }
            item.classList.add('animated', 'fadeOutUp');
            item.style.display = 'none';

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            let statusImg = document.createElement('img');
            statusImg.classList.add('status-img');
            statusImg.setAttribute('src', message.spinner);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage)
            statusMessage.appendChild(statusImg);
            statusMessage.classList.add('animated', 'fadeInDown');
            item.closest('.popup-consultation') ? api = path.question : api = path.designer;

            postData(api, form)
                .then((data)=>{
                    textMessage.textContent = message.sucsess;
                    statusImg.setAttribute('src', message.ok);
                    console.log(api);
                    console.log(`this is data ${data}`)
                })
                .catch(()=>{
                    console.log('post err');
                    textMessage.textContent = message.failure
                    statusImg.setAttribute('src', message.fail)
                })
                .finally(()=>{
                    setTimeout(()=>{
                        clearInputs();
                        statusMessage.textContent = '';
                        item.classList.remove('fadeOutUp')
                        item.classList.add('fadeInDown')
                        item.style.display = 'block';
                        try{
                            item.querySelector('textarea').value = ''
                        }catch{(e)=>{
                            console.error(e);
                        }}
                    }, 2000)
                })
        })
    })
    upload.forEach(item =>{
        item.addEventListener('input', (e)=>{
            e.preventDefault();
            console.log(item.files[0].name)
            let dots;
            const nameArr = item.files[0].name.split('.');
            nameArr[0].length > 5 ? dots = '...' : dots = '.';
            const nameStr = nameArr[0].substring(0, 5) + dots + nameArr[nameArr.length - 1];
            item.previousElementSibling.textContent = nameStr;
        })
    })

}

export default forms;
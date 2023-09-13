import { postData } from "./services/requests";

const dragAndDrop = () =>{
    const inputs = document.querySelectorAll('[name="upload"]');
    console.log(inputs);
    // ['drag enter', ' dragleave', 'dragover', 'drop'].forEach(eventName =>{
    //     inputs.forEach(input=>{
    //         input.addEventListener(eventName, preventDefaults, false)
    //     })
    // });

    // function preventDefaults(e){
    //     e.target.preventDefault();
    //     e.target.stopPropagation();
    // };

    function highlight(item){
        item.closest('.file_upload').style.border = '4px solid yellow';
        item.closest('.file_upload').style.background = 'grey';
    };
    function unhighlight(item){
        item.closest('.file_upload').style.border = '';
        item.closest('.file_upload').style.background = '';
    };


    ['drag enter', 'dragover'].forEach(eventName =>{
        inputs.forEach(input=>{
            input.addEventListener(eventName, ()=>{
                highlight(input)
            }, false)
        })
    });
    ['dragleave', 'drop'].forEach(eventName =>{
        inputs.forEach(input=>{
            input.addEventListener(eventName, ()=>{
                unhighlight(input)
            }, false)
        })
    });

    inputs.forEach(input =>{
        input.addEventListener('drop', (e)=>{
            // if(input.getAttribute('id', 'main-upload')){
            //     console.log(e.dataTransfer.files[0]);
                

            //     postData('server.php', form )
            //         .then(res => console.log(res))
            //         .catch(()=>console.log('upload miss'))
            //         // .finally(()=>{
            //         //     setTimeout(input.previousElementSibling.textContent = '', 2000)
            //         // })
            // }
            input.files = e.dataTransfer.files;
            let dots;
            const nameArr = input.files[0].name.split('.');
            nameArr[0].length > 5 ? dots = '...' : dots = '.';
            const nameStr = nameArr[0].substring(0, 5) + dots + nameArr[nameArr.length - 1];
            input.previousElementSibling.textContent = nameStr;
        })
    })
   



}


export default dragAndDrop;
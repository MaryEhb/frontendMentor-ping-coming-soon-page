/**variables**/
const form = document.getElementById('form');
const email = document.getElementById('email');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

/*******Event Listeners*****/
form.addEventListener('submit', (e)=>{

    if(email.value == ""){
        email.placeholder = "example@mail.com";
    }

    if(!email.value.match(pattern)){
        form.classList.add('error');
        e.preventDefault();
    }

    email.addEventListener('keyup', ()=>{

        if(email.value.match(pattern)){
            form.classList.remove('error'); 
        }else{
            form.classList.add('error');     
        }
    })

})


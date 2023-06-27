const input = document.getElementById('email')
const btn = document.querySelector('.btn');
const formControl = document.querySelector('.form-control');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    const small = formControl.querySelector('small');

    if(inputValue === ""){
        formControl.classList.add('error');
        small.innerText = "Please enter a email address.";

    }else if(!isEmail(inputValue)){
        formControl.classList.add('error');
        small.innerText = "Please provide a valid email address.";

    }else {
        formControl.classList.remove('error');
    }
    
})

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
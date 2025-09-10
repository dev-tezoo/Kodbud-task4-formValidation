

const submitBtn = document.getElementById('submitBtn')
const nameError = document.querySelector('.nameError')
const emailError = document.querySelector('.emailError')
const phoneError = document.querySelector('.phoneError')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(validateName() && validateEmail()){
        alert('Form Submitted Successfully')
    }
})

function validateName() {
    let name = document.getElementById('name').value

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}


function validateEmail() {
    let email = document.getElementById('email').value

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = 'Write valid email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}


function validateEmail() {
    let email = document.getElementById('email').value

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = 'Write valid email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}
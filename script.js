

const submitBtn = document.getElementById('submitBtn')
const nameError = document.querySelector('.nameError')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(validateName()){
        alert('Form Submitted Successfully')
    }
})

function validateName() {
    let name = document.getElementById('name').value

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    return true;
}
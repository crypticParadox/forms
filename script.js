const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInput()
})


const checkInput = () =>{
    //get the values of the inputs
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    const at = '@';


    //username
    if(firstnameValue === ""){
        //set error
        setError(firstname, 'First Name cannot be empty')
    } else{
        setSuccess(firstname)
    }

    //lastname
    if(lastnameValue === ""){
        //set error
        setError(lastname, 'last Name cannot be empty')
    } else{
        setSuccess(lastname)
    }

    //email
    if(emailValue === ""){
        //set error
        setError(email, 'email cannot be empty')
    } else if(!emailValue.includes(at)){
        checkEmail(email, 'looks like this is not an email')
    } else{
        setSuccess(email)
    }

    //password
    if(passwordValue === ""){
        //set error
        setError(password, 'password cannot be empty')
    } else{
        setSuccess(password)
    }

}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //add error message
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

function setSuccess(input){
    const formControl = input.parentElement;

    //add success class
    formControl.className = 'form-control success'
}

function checkEmail(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //add error message
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
event.preventDefault();

const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;

if (mail !== "" && password !== "") {
const formData = {mail, password,};
console.log(formData);
form.reset();
} 
else {return alert("Please, enter your name and password")}
}






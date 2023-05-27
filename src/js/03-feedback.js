var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const formData = {};

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
}

function onSubmitForm(e) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.preventDefault();   
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
    email.value = '';
    message.value = '';
}

function dataFromStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
        email.value = data.email;
        message.value = data.message;
    }
}

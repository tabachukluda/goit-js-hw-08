var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input[name="email"]');
const messageInput = document.querySelector('.feedback-form textarea[name="message"]');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataFromStorage()

function onFormData(e) {
    const formData = {
    email: emailInput.value,
    message: messageInput.value
    };
    if (typeof localStorage !== 'undefined') {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
}

function onSubmitForm(e) {
    e.preventDefault();
    const formData = {
    email: emailInput.value,
    message: messageInput.value
    };
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function dataFromStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (data) {
        emailInput.value = data.email;
        messageInput.value = data.message;
    }
}

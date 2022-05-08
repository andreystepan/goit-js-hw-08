
const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector('textarea');
const input = document.querySelector('input')

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormDataInput,500));


const STORAGE_KEY = 'feedback-smg';
saveTextareaText();
const formData = {};



function handleFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
 

function handleFormDataInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function saveTextareaText() {
    
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const parseSaveMessage = JSON.parse(saveMessage);

    if (saveMessage) {
        textarea.value = parseSaveMessage.message;
        input.value = parseSaveMessage.email;
    }
}
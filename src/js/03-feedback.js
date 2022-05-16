
const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea");
const input = document.querySelector(".feedback-form input");
let formData = {};
const STORAGE_KEY = 'feedback-smg';

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormDataInput,500));

saveTextareaText();

function handleFormSubmit(e) {
    e.preventDefault();
    if (input.value !== '' && textarea.value !== '') {
        console.log(formData);
        e.target.reset();
        formData = {};
        localStorage.removeItem(STORAGE_KEY);
    }
};
 

function saveTextareaText() {
    
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const parseSaveMessage = JSON.parse(saveMessage);

    if (parseSaveMessage.email) {
        input.value = parseSaveMessage.email;
    };
    if (parseSaveMessage.message){
        textarea.value = parseSaveMessage.message;  
    };
}
function handleFormDataInput(e) {
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
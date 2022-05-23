
const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea");
const input = document.querySelector(".feedback-form input");
let formData = {};
let resultStorage = {};
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
        resultStorage = {};
        localStorage.removeItem(STORAGE_KEY);
    }
};
 

function saveTextareaText() {
    
    // const saveMessage = localStorage.getItem(STORAGE_KEY);
    const parseSaveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (parseSaveMessage?.email) {
        input.value = parseSaveMessage.email;
        formData.email = input.value;
    };
    
    if (parseSaveMessage?.message){
        textarea.value = parseSaveMessage.message;
        formData.message = textarea.value;
        
    };

//    console.log(resultStorage)
}
function handleFormDataInput(e) {

    const storage = localStorage.getItem(STORAGE_KEY);  
    const parceStorage = JSON.parse(storage);
    formData[e.target.name] = e.target.value;

     resultStorage = { ...parceStorage, ...formData };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(resultStorage));
    
    
};
import throttle from 'lodash.throttle';
const NAME_KEY = 'name';
const MESSAGE_KEY = 'msg';
const form = document.querySelector('.feedback-form');
const inputName = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');

addSavedData();

form.addEventListener('submit', throttle(onFormSubmit, 500));
inputName.addEventListener('input', throttle(onNameInput, 500));
textareaMessage.addEventListener('input', throttle(onMessageInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  const currentData = {
    name: localStorage.getItem(NAME_KEY),
    message: localStorage.getItem(MESSAGE_KEY),
  };
  console.log(currentData);
  event.target.reset();
  localStorage.removeItem(NAME_KEY);
  localStorage.removeItem(MESSAGE_KEY);
}
function onNameInput(event) {
  const name = event.target.value;
  localStorage.setItem(NAME_KEY, name);
  console.log(name);
}
function onMessageInput(event) {
  const message = event.target.value;
  localStorage.setItem(MESSAGE_KEY, message);
  console.log(message);
}
function addSavedData() {
  const savedMessage = localStorage.getItem(MESSAGE_KEY);
  const savedName = localStorage.getItem(NAME_KEY);

  if (savedMessage) {
    textareaMessage.value = savedMessage;
  }

  if (savedName) {
    inputName.value = savedName;
  }
}

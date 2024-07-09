import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// userDataApi

import axios from 'axios';

const sendUserDataApi = async ({ email, comment }) => {
  const URL = 'https://portfolio-js.b.goit.study/api/requests';

  const { data } = await axios.post(URL, { email, comment });
  return data;
};

// Elements

const form = document.querySelector('.js-submit-form');
const [inputEmail, inputComments] = form;

const validEmailSpan = document.querySelector('.valid-email-text');
const invalidEmailSpan = document.querySelector('.invalid-email-text');
const invalidCommentSpan = document.querySelector(
  '.invalid-comments-text'
);

// validationForm

const VALIDATION_CLASS = {
  valid: 'valid-input',
  invalid: 'invalid-input',
  isVisible: 'is-visible',
};

const validateEmail = email => {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const isValidEmail = pattern.test(email);

  if (!isValidEmail) {
    inputEmail.classList.add(VALIDATION_CLASS.invalid);
    invalidEmailSpan.classList.add(VALIDATION_CLASS.isVisible);
  } else {
    inputEmail.classList.add(VALIDATION_CLASS.valid);
    validEmailSpan.classList.add(VALIDATION_CLASS.isVisible);
  }
  return isValidEmail;
};

const validateText = text => {
  if (!text) {
    inputComments.classList.add(VALIDATION_CLASS.invalid);
    invalidCommentSpan.classList.add(VALIDATION_CLASS.isVisible);
  } else {
    inputComments.classList.add(VALIDATION_CLASS.valid);
  }
  return !!text;
};

const resetFieldValidation = field => {
  const fieldName = field.name;

  if (fieldName === 'userEmail') {
    validEmailSpan.classList.remove(VALIDATION_CLASS.isVisible);
    invalidEmailSpan.classList.remove(VALIDATION_CLASS.isVisible);
  }

  if (fieldName === 'userComments') {
    invalidCommentSpan.classList.remove(VALIDATION_CLASS.isVisible);
  }

  field.classList.remove(VALIDATION_CLASS.valid);
  field.classList.remove(VALIDATION_CLASS.invalid);
};

const resetAllValidation = () => {
  const validationSpans = [
    validEmailSpan,
    invalidEmailSpan,
    invalidCommentSpan,
  ];

  validationSpans.forEach(spanElement => {
    spanElement.classList.remove(VALIDATION_CLASS.isVisible);
  });

  const validationInputs = [inputEmail, inputComments];

  validationInputs.forEach(input => {
    input.classList.remove(VALIDATION_CLASS.valid);
    input.classList.remove(VALIDATION_CLASS.invalid);
  });
};









const STORAGE_KEY = 'formData';

const formData = getFromLocalStorage() || {
  userEmail: '',
  userComments: '',
};

inputEmail.value = formData.userEmail;
inputComments.value = formData.userComments;

form.addEventListener('input', event => {
  resetFieldValidation(event.target);

  const { name, value } = event.target;
  formData[name] = value.trim();
  setToLocalStorage(formData);
});

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const { userEmail, userComments } = formData;

  const isValidEmail = validateEmail(userEmail);
  const isValidText = validateText(userComments);

  if (!isValidEmail || !isValidText) {
    return;
  }

  try {
    const data = await sendUserDataApi({
      email: userEmail,
      comment: userComments,
    });
    // openModalWithData(data);

    resetData();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
}

// helpers
function setToLocalStorage(value, key = STORAGE_KEY) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalStorage(key = STORAGE_KEY) {
  return JSON.parse(localStorage.getItem(key));
}

function resetData(key = STORAGE_KEY) {
  localStorage.removeItem(key);
  form.reset();
  resetAllValidation();
  formData.userEmail = '';
  formData.userComments = '';
}

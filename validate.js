const password = document.getElementById('password');
const valPassword = document.getElementById('pss-confirm');
const firstName = document.querySelector('#first-name');
const spanFName = document.querySelector('#first-name + span');
const lastName = document.querySelector('#last-name');
const spanLName = document.querySelector('#last-name + span');
const email = document.querySelector('#email');
const spanEmail = document.querySelector('#email + span');
const phone = document.querySelector('#phone');
const spanPhone = document.querySelector('#phone + span');
const spanPass = document.querySelector('#password + span');
const spanValid = document.querySelector('#pss-confirm + span');
const form = document.querySelector('form');

/* Validates the information in the Confirm Password input */
function validate() {
  if (valPassword.validity.valueMissing) {
    spanValid.textContent = '* Enter a value';
  } else if (valPassword.value !== password.value) {
    spanValid.textContent = '* Passwords do not match';
  } else if (valPassword.validity.valid) {
    spanValid.textContent = '✓ Passwords match';
  }
}

/* A function that displays the errors in the Name's inputs */
function errorName() {
  if (firstName.validity.valueMissing) {
    spanFName.textContent = '* Enter a value';
  } else if (firstName.validity.typeMismatch) {
    spanFName.textContent = '* Please enter a valid value';
  }
  if (lastName.vallidity.valueMissing) {
    spanLName.textContent = '* Enter a value';
  } else if (lastName.validity.typeMismatch) {
    spanLName.textContent = '* Please enter a valid value';
  }
}

/* A function that displays the errors in the email input */
function errorEmail() {
  if (email.validity.valueMissing) {
    spanEmail.textContent = '* Enter a value';
  } else if (email.validity.typeMismatch) {
    spanEmail.textContent = '* The values must be the form "@user.ab"';
  }
}

/* A function that displays the errors in the phone input */
function errorPhone() {
  if (phone.validity.valueMissing) {
    spanPhone.textContent = '* Enter a value';
  } else if (phone.validity.typeMismatch) {
    spanPhone.textContent = '* Please enter just numbers';
  } else if (phone.validity.tooShort) {
    spanPhone.textContent = `* Enter at least ${phone.minLength} characters, you have ${phone.value.length}.`;
  } else if (phone.validity.tooLong) {
    spanPhone.textContent = `* Enter a maximun of ${phone.axLength} characters.`;
  }
}

/* A function that displays the errors in the password input */
function errorPassword() {
  if (password.validity.valueMissing) {
    spanPass.textContent = '* Enter a value';
  } else if (password.validity.typeMismatch) {
    spanPass.textContent = '* Please enter a valid value';
  }
}

/* Adding event listener to the inputs */
firstName.addEventListener('input', () => {
  if (firstName.validity.valid) {
    spanFName.textContent = '';
    spanFName.className = 'error';
  } else {
    errorName();
  }
});

lastName.addEventListener('input', () => {
  if (lastName.validity.valid) {
    spanLName.textContent = '';
    spanLName.className = 'error';
  } else {
    errorName();
  }
});

email.addEventListener('input', () => {
  if (email.validity.valid) {
    spanEmail.textContent = '';
    spanEmail.className = 'error';
  } else {
    errorEmail();
  }
});

phone.addEventListener('input', () => {
  if (phone.validity.valid) {
    phone.textContent = '';
    phone.className = 'error';
  } else {
    errorPhone();
  }
});

password.addEventListener('input', () => {
  if (password.validity.valid) {
    spanPass.textContent = '';
    spanPass.className = 'error';
  } else {
    errorPassword();
  }
});

valPassword.addEventListener('input', validate);
password.addEventListener('input', validate);

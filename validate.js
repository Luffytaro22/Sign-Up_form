const password = document.getElementById('password');
const valPassword = document.getElementById('pss-confirm');

function validate() {
  if (valPassword.value !== password.value) {
      valPassword.setCustomValidity('Passwords do not match');
    } else {
      valPassword.setCustomValidity('');
    }
  }

valPassword.addEventListener('input', validate);
password.addEventListener('input', validate);

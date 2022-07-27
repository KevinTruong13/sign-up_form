const passwordField = document.querySelector('#password');
const passwordConfirmField = document.querySelector('#password-confirm');

passwordField.addEventListener('blur', validateConfirm);
passwordConfirmField.addEventListener('blur', validateConfirm);

function validateConfirm() {
    if (passwordField.value && passwordConfirmField.value) {
        if (!passwordField.classList.contains('invalid') && passwordField.value != passwordConfirmField.value) {
            passwordField.classList.add('invalid');
            passwordConfirmField.classList.add('invalid');
            document.querySelector('.error').textContent = "* Passwords do not match";
        } else if (passwordField.classList.contains('invalid') && passwordField.value === passwordConfirmField.value) {
            passwordField.classList.remove('invalid');
            passwordConfirmField.classList.remove('invalid');
            document.querySelector('.error').textContent = "";
        }
    }
}
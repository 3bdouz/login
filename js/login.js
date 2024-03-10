let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');
let alertMassege = document.getElementById('alertMassege')
let userContainer = [];
if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}
function logIn() {
    if (checkInputsEmpty() == true) {
        getAlertMassege('All Inpt Required', 'red')
    }
    else {
        if (checkEmailPassword() == true) {
            window.location.href = 'home.html';
        }
        else {
            getAlertMassege('Email or Password notCorrect', 'red');
        }
    }

}

function checkEmailPassword() {
    for (let index = 0; index < userContainer.length; index++) {
        if (userContainer[index].email == emailLoginInput.value && userContainer[index].password == passwordLoginInput.value)
            localStorage.setItem('userName', userContainer[index].userName)
        return true;
    }
}
function getAlertMassege(text, color) {
    alertMassege.classList.replace('d-none', 'd-block');
    alertMassege.innerHTML = text;
    alertMassege.style.color = color;
}
function checkInputsEmpty() {
    if (emailLoginInput.value == '' || passwordLoginInput.value == '' )
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn) 
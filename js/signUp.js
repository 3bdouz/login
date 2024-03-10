let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let userContainer = [];
let alertMassege = document.getElementById('alertMassege');

if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}

function signUp() {
    let data = {
        userName: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    if (checkInputsEmpty() == true) {
        getAlertMassege('All Input Required', 'red');
    }
    else {

        if (checkEmailExist() == true) {
            getAlertMassege('Email Already Exist', 'red');
        }
        else {
            userContainer.push(data);
            localStorage.setItem('Users', JSON.stringify(userContainer));
            clrForm();
            getAlertMassege('Success', 'green');
            //console.log(userCo ntainer);
        }

    }

}
function getAlertMassege(text, color) {
    alertMassege.classList.replace('d-none', 'd-block');
    alertMassege.innerHTML = text;
    alertMassege.style.color = color;
}
/*
function getAlertMassege() {
    alertMassege.classList.replace('d-none', 'd-block');
    alertMassege.innerHTML = 'Success';
    alertMassege.style.color = 'green';
}
function getAlertMassegeR() {
    alertMassege.classList.replace('d-none', 'd-block');
    alertMassege.innerHTML = 'All Input Required';
    alertMassege.style.color = 'red';
}
*/
function clrForm() {
    userNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}
function checkInputsEmpty() {
    if (userNameInput.value == '' || emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
function checkEmailExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email == emailInput.value)
            return true;
    }
}
signUpBtn.addEventListener('click', signUp)

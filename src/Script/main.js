const loginBtn = document.querySelector('.log-in');
const login = document.querySelector('.js-login');
const loginContainer = document.querySelector('.js-login-container');
const closeBtn = document.querySelector('.js-close');
function showLogin () {
    login.classList.toggle('open');
}
function hideLogin () {
    login.classList.remove('open');
}

loginBtn.addEventListener('click', showLogin);
closeBtn.addEventListener('click', hideLogin);
login.addEventListener('click', hideLogin);
loginContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});
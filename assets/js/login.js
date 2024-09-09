// Toggle between login and register forms
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Toggle between patient and staff forms
const patientBtn = document.getElementById('patient-btn');
const staffBtn = document.getElementById('staff-btn');

patientBtn.addEventListener('click', () => {
    patientBtn.classList.add('active');
    staffBtn.classList.remove('active');
    // Logic to display patient form can go here
});

staffBtn.addEventListener('click', () => {
    staffBtn.classList.add('active');
    patientBtn.classList.remove('active');
    // Logic to display staff form can go here
});

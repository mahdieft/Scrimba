const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginFormData = new FormData(loginForm);
    const name = loginFormData.get('astronautName');
    const email = loginFormData.get('astronautEmail');
    const password = loginFormData.get('astronautPassword');

    console.log(name, email, password);
});

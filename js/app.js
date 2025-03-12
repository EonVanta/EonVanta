function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please enter valid credentials.');
    }
}
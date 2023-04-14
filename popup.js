function populateFields() {
    chrome.storage.local.get('loginSaver', (data) => {
      if (data.loginSaver) {
        document.getElementById('username').value = data.loginSaver.username;
        document.getElementById('password').value = data.loginSaver.password;
      }
    });
  }
  
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordButton = document.getElementById('togglePassword');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordButton.innerHTML = '&#128064;';
    } else {
      passwordInput.type = 'password';
      passwordButton.innerHTML = '&#128065;';
    }
  }
  
  document.addEventListener('DOMContentLoaded', populateFields);
  
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    chrome.storage.local.set({ 'loginSaver': { 'username': username, 'password': password } }, () => {
      alert('Login information saved!');
    });
  });
  
  document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);
  
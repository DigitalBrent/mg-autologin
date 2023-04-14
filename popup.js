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
    } else {
      passwordInput.type = 'password';
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
  
  function loginToAdmin() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentUrl = tabs[0].url;
      const baseUrl = currentUrl.split(/[?#]/)[0].split("/").slice(0, 3).join("/");
      const adminUrl = `${baseUrl}/wp-admin/`;
      chrome.tabs.update(tabs[0].id, { url: adminUrl });
      const script = "document.getElementById('user_login').value='mediagistic'; document.getElementById('user_pass').value='Tw3nT2mg$!tes';";
      chrome.tabs.executeScript(tabs[0].id, { code: script });
    });
  }
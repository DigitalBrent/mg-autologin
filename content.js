function createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'mg-web-admin-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.left = '0';
    overlay.style.zIndex = '999999';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.padding = '20px';
    overlay.style.boxSizing = 'border-box';
    overlay.innerHTML = `
      <div style="background-color: #fff; padding: 20px; border-radius: 5px; width: 100%; max-width: 300px;">
        <h1>MG Web Admin</h1>
        <form id="mg-web-admin-form">
          <label for="mg-web-admin-username">Username:</label>
          <input type="text" id="mg-web-admin-username" name="mg-web-admin-username">
          <label for="mg-web-admin-password">Password:</label>
          <input type="password" id="mg-web-admin-password" name="mg-web-admin-password">
          <button type="submit">Save</button>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  
  function removeOverlay() {
    const overlay = document.getElementById('mg-web-admin-overlay');
    if (overlay) {
      overlay.remove();
    }
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'open_mg_web_admin_overlay') {
      createOverlay();
    }
  });
  
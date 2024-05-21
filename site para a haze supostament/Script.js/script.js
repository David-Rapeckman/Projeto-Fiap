// Get the login popup and the open and close buttons
const loginPopup = document.getElementById('login-popup');
const openLoginPopup = document.getElementById('open-login-popup');
const closeLoginPopup = document.getElementById('close-login-popup');

// Add click event listener to the open button
openLoginPopup.addEventListener('click', () => {
  loginPopup.style.display = 'flex';
});

// Add click event listener to the close button
closeLoginPopup.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Add submit event listener to the login form
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  // Handle form submission here
});
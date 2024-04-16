$(document).on('click', '.far.fa-user', function(){
  $('.form').addClass('login-active').removeClass('sign-up-active');
});

$(document).on('click', '.sign-up-btn', function(){
  $('.form').removeClass('login-active').addClass('sign-up-active');
});

$(document).on('click', '.form-cancel', function(){
  $('.form').removeClass('login-active').removeClass('sign-up-active');
});

$(document).on('click', '.already-acount', function(){
  $('.form').addClass('login-active').removeClass('sign-up-active');
});

// Function to handle login
const handleLogin = () => {
const usernameAddress = document.getElementById('email').value;
const passwordAddress = document.getElementById('password').value;

const storedUserData = localStorage.getItem('user');
if (storedUserData) {
const user = JSON.parse(storedUserData);
const storedEmail = user.email;
const storedPassword = user.password;

if (usernameAddress === storedEmail && passwordAddress === storedPassword) {
// Display login success message
swal(`Login Successful, Hi ${usernameAddress}`);

// Store login state in localStorage
localStorage.setItem('loggedIn', true);

// Remove the login icon from the navigation bar
document.querySelector('.navigation i.far.fa-user').remove();
document.querySelector('.navigation .loggedin').remove();

// Create a new element to display the user's name
const userNameElement = document.createElement('span');
userNameElement.textContent = user.fullName;
userNameElement.style.fontSize = '16px'; 
userNameElement.style.fontWeight = '500'; 
userNameElement.style.color = '#272727'; 
userNameElement.style.textTransform = 'uppercase'; 
userNameElement.style.marginLeft = '30px';
userNameElement.style.cursor = 'pointer'; 

// Add click event listener to logout when the user's name is clicked
let clicks = 0;
userNameElement.addEventListener('click', () => {
clicks++;
if (clicks === 2) {
  // Clear localStorage and reload the page
  localStorage.removeItem('loggedIn');
  location.reload();
}
});

// Add the user's name to the navigation bar
document.querySelector('.navigation ul').appendChild(userNameElement);
} else {
// Display error message for invalid credentials
swal('Invalid username or password');
}
} else {
// Display error message if no user is found
swal('No user found. Please sign up first.');
}
};

// Check if the user is already logged in
window.addEventListener('DOMContentLoaded', () => {
const loggedIn = localStorage.getItem('loggedIn');
if (loggedIn) {
// Perform login if already logged in
handleLogin();
}
});

// Login button click event
const login = document.getElementById('login');
login.onclick = (e) => {
e.preventDefault();
handleLogin();
};

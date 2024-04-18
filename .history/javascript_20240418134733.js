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

  // Assuming user data is stored in localStorage as JSON string under the key 'user'
  const storedUserData = localStorage.getItem('user');
  if (storedUserData) {
    const user = JSON.parse(storedUserData);
    const storedEmail = user.email;
    const storedPassword = user.password;

    if (usernameAddress === storedEmail && passwordAddress === storedPassword) {
      // Store user's name in session storage
      sessionStorage.setItem('userName', user.fullName);

      // Display login success message
      swal(`Login Successful, Hi ${user.fullName}`);
      displayUserName();
    } else {
      // Display error message for invalid credentials
      swal('Invalid username or password');
    }
  } else {
    // Display error message if no user is found
    swal('No user found. Please sign up first.');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn) {
    // Check if user is logged in
    displayUserName();
  }
});

// Function to display user's name in the navigation bar
const displayUserName = () => {
  const userName = sessionStorage.getItem('userName');
  const loggedInElement = document.querySelector('.navigation .loggedin');
  if (userName) {
    if (loggedInElement) {
      loggedInElement.textContent = userName;
    } else {
      const userNameElement = document.createElement('span');
      userNameElement.textContent = userName;
      userNameElement.classList.add('loggedin');
      // Add click event listener for double-click logout
      let clicks = 0;
      userNameElement.addEventListener('dblclick', () => {
        clicks++;
        if (clicks === 2) {
          sessionStorage.removeItem('userName');
          location.reload();
        }
      });
      document.querySelector('.navigation ul').appendChild(userNameElement);
    }
  } else {
    // Remove the logged in element if user is not logged in
    if (loggedInElement) {
      loggedInElement.remove();
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  displayUserName();
});

const login = document.getElementById('login');
login.onclick = (e) => {
  e.preventDefault();
  handleLogin();
};
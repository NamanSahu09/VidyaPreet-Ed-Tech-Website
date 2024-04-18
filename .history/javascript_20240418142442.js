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
      swal(`Login Successful, Hi ${user.fullName}`);

      // Store login state in sessionStorage
      sessionStorage.setItem('loggedIn', true);

      // Store user's name in localStorage
      localStorage.setItem('userName', user.fullName);

      // Remove the login icon from the navigation bar
      document.querySelector('.navigation .loggedin').remove();

      // Display user's name in the navigation bar
      displayUserName();

      // Reload the page after successful login
      location.reload();
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
  const userName = localStorage.getItem('userName');
  if (userName) {
    const userNameElement = document.createElement('span');
    document.querySelector('.loggedin').remove();
    
    userNameElement.textContent = Hi + userName;
    userNameElement.classList.add('loggedin');
    userNameElement.style.fontSize = '16px'; 
    userNameElement.style.fontWeight = '500'; 
    userNameElement.style.color = '#272727'; 
    userNameElement.style.textTransform = 'uppercase'; 
    userNameElement.style.marginLeft = '2px'; 
    userNameElement.style.cursor = 'pointer'; 

    // Add click event listener to the user's name to log out
    userNameElement.addEventListener('click', () => {
      sessionStorage.removeItem('loggedIn');
      localStorage.removeItem('userName');
      location.reload();
    });

    // Add hover event listener to display "Log Out" when hovering over the name
    userNameElement.addEventListener('mouseover', () => {
      userNameElement.textContent = 'Log Out';
    });

    // Add mouseout event listener to revert back to the user's name when mouse leaves
    userNameElement.addEventListener('mouseout', () => {
      userNameElement.textContent = userName;
    });

    // Add the user's name element to the navigation bar
    document.querySelector('.navigation ul').appendChild(userNameElement);
  }
};


// Function to display login form
const showLoginForm = () => {
  // Display the login form
  $('.form').addClass('login-active').removeClass('sign-up-active');
};

// Login button click event
const login = document.getElementById('login');
login.onclick = (e) => {
  e.preventDefault();
  handleLogin();
};

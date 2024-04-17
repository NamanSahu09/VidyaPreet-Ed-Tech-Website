$(document).on('click', '.far.fa-user', function(){
  showLoginForm(); // Show login form when the user clicks the login icon
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

      // Remove the login icon from the navigation bar
      const loggedInElement = document.querySelector('.navigation .loggedin');
      if (loggedInElement) {
        loggedInElement.remove();
      }

      // Create a new element to display the user's name
      const userNameElement = document.createElement('span');
      userNameElement.textContent = user.fullName;
      userNameElement.classList.add('loggedin'); // Add a class for styling
      userNameElement.style.fontSize = '16px'; // Apply font size
      userNameElement.style.fontWeight = '500'; // Apply font weight
      userNameElement.style.color = '#272727'; // Apply font color
      userNameElement.style.textTransform = 'uppercase'; // Apply text transform
      userNameElement.style.marginLeft = '2px'; // Add some spacing
      userNameElement.style.cursor = 'pointer'; // Apply cursor style

      // Add click event listener to logout when the user's name is clicked
      let clicks = 0;
      userNameElement.addEventListener('dblclick', () => {
        clicks++;
        if (clicks === 2) {
          // If double-clicked, remove the user's name from the navigation bar
          userNameElement.remove();
          // Reset clicks counter
          clicks = 0;
          // Show the login form
          showLoginForm();
          // Clear sessionStorage
          sessionStorage.removeItem('loggedIn');
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

// Function to display login form
const showLoginForm = () => {
  // Display the login form
  $('.form').addClass('login-active').removeClass('sign-up-active');
};

// Check if user is already logged in
window.addEventListener('DOMContentLoaded', () => {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn) {
    // Check if user is logged in
    displayUserName();
  }
});

// Function to display user's name in the navigation bar
const displayUserName = () => {
  const userName = localStorage.getItem('user');
  if (userName) {
    const user = JSON.parse(userName);
    const userNameElement = document.createElement('span');
    userNameElement.textContent = user.fullName;
    userNameElement.classList.add('loggedin'); // Add a class for styling
    userNameElement.style.fontSize = '16px'; // Apply font size
    userNameElement.style.fontWeight = '500'; // Apply font weight
    userNameElement.style.color = '#272727'; // Apply font color
    userNameElement.style.textTransform = 'uppercase'; // Apply text transform
    userNameElement.style.marginLeft = '1px'; // Add some spacing
    userNameElement.style.cursor = 'pointer'; // Apply cursor style

    // Add click event listener to the user's name to listen for double-click events
    let clicks = 0;
    userNameElement.addEventListener('dblclick', () => {
      clicks++;
      if (clicks === 2) {
        // If double-clicked, remove the user's name from the navigation bar
        userNameElement.remove();
        // Reset clicks counter
        clicks = 0;
        // Show the login form
        showLoginForm();
        // Clear sessionStorage
        sessionStorage.removeItem('loggedIn');
      }
    });

    // Add the user's name element to the navigation bar
    document.querySelector('.navigation ul').appendChild(userNameElement);
  }
};

// Login button click event
const login = document.getElementById('login');
login.onclick = (e) => {
  e.preventDefault();
  handleLogin();
};

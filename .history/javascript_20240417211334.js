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

      // Remove the login icon from the navigation bar
      $('.far.fa-user').remove();

      // Display user's name in the navigation bar
      const userNameElement = document.createElement('span');
      userNameElement.textContent = user.fullName;
      userNameElement.classList.add('loggedin'); // Add class for styling
      userNameElement.style.fontSize = '16px'; // Apply font size
      userNameElement.style.fontWeight = '500'; // Apply font weight
      userNameElement.style.color = '#272727'; // Apply font color
      userNameElement.style.textTransform = 'uppercase'; // Apply text transform
      userNameElement.style.marginLeft = '2px'; // Add some spacing
      userNameElement.style.cursor = 'pointer'; // Apply cursor style

      // Add click event listener to the user's name to listen for double-click events
      let clicks = 0;
      userNameElement.addEventListener('dblclick', () => {
        clicks++;
        if (clicks === 2) {
          // Clear sessionStorage and reload the page
          sessionStorage.removeItem('loggedIn');
          location.reload();
        }
      });

      // Add the user's name to the navigation bar
      $('.navigation ul').append(userNameElement);
    } else {
      // Display error message for invalid credentials
      swal('Invalid username or password');
    }
  } else {
    // Display error message if no user is found
    swal('No user found. Please sign up first.');
  }
};

// Check if user is already logged in
window.addEventListener('DOMContentLoaded', () => {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn) {
    handleLogin();
  }
});

// Login button click event
const login = document.getElementById('login');
login.onclick = (e) => {
  e.preventDefault();
  handleLogin();
};

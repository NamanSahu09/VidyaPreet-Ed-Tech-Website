$(document).ready(() => {
  // Function to handle switching to login form
  $(document).on('click', '.far.fa-user', function(){
    $('.form').addClass('login-active').removeClass('sign-up-active');
  });

  // Function to handle switching to sign-up form
  $(document).on('click', '.sign-up-btn', function(){
    $('.form').removeClass('login-active').addClass('sign-up-active');
  });

  // Function to handle cancelling form
  $(document).on('click', '.form-cancel', function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active');
  });

  // Function to handle switching to login form from sign-up form
  $(document).on('click', '.already-acount', function(){
    $('.form').addClass('login-active').removeClass('sign-up-active');
  });

  // Function to validate login
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
        sessionStorage.setItem('userName', user.fullName);

        // Remove the login button from the navigation bar if exists
        const loggedInElement = document.querySelector('.navigation .loggedin');
        if (loggedInElement) {
          loggedInElement.remove();
        }

        // Display user's name in the navigation bar
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

  // Function to display user's name in the navigation bar
  const displayUserName = () => {
    const userName = sessionStorage.getItem('userName');
    if (userName) {
      const userNameElement = document.createElement('span');
      userNameElement.textContent = userName;
      userNameElement.classList.add('loggedin');
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
  };

  // Function to display login form
  const showLoginForm = () => {
    // Display the login form
    $('.form').addClass('login-active').removeClass('sign-up-active');
  };

  // Login button click event
  const login = document.querySelector('.loggedin');
  login.onclick = (e) => {
    e.preventDefault();
    handleLogin();
  };

  // Check if user is logged in on page load
  window.addEventListener('DOMContentLoaded', () => {
    const userName = sessionStorage.getItem('userName');
    if (userName) {
      // Display user's name in the navigation bar if logged in
      displayUserName();
    }
  });
});

// CSS for the logged-in user display
const userCSS = `
  .navigation .loggedin {
    font-size: 16px;
    font-weight: 500;
    color: #272727;
    text-transform: uppercase;
    margin-left: 2px;
    cursor: pointer;
  }
`;

// Injecting the CSS into the document head
const style = document.createElement('style');
style.innerHTML = userCSS;
document.head.appendChild(style);

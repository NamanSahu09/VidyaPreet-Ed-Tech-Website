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
        swal(`Login Successful, Hi ${user.fullName}`);
        sessionStorage.setItem('loggedIn', true);
        document.querySelector('.navigation .loggedin').remove();
        const userNameElement = document.createElement('span');
        userNameElement.textContent = user.fullName;
        userNameElement.classList.add('loggedin');
        userNameElement.style.fontSize = '16px'; 
        userNameElement.style.fontWeight = '500'; 
        userNameElement.style.color = '#272727'; 
        userNameElement.style.textTransform = 'uppercase'; 
        userNameElement.style.marginLeft = '2px'; 
        userNameElement.style.cursor = 'pointer'; 

        let clicks = 0;
        userNameElement.addEventListener('dblclick', () => {
          clicks++;
          if (clicks === 2) {
            document.querySelector('.navigation .loggedin').remove();
            clicks = 0;
            showLoginForm();
          }
        });

        userNameElement.addEventListener('mouseover', () => {
          userNameElement.textContent = 'Log Out';
        });

        userNameElement.addEventListener('mouseout', () => {
          userNameElement.textContent = user.fullName;
        });

        document.querySelector('.navigation ul').appendChild(userNameElement);
      } else {
        swal('Invalid username or password');
      }
    } else {
      swal('No user found. Please sign up first.');
    }
  };

  // Function to display user's name in the navigation bar
  const displayUserName = () => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn) {
      const storedUserData = localStorage.getItem('user');
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        const fullName = user.fullName;

        const userNameElement = document.createElement('span');
        userNameElement.textContent = fullName;
        userNameElement.classList.add('loggedin');
        userNameElement.style.fontSize = '16px'; 
        userNameElement.style.fontWeight = '500'; 
        userNameElement.style.color = '#272727'; 
        userNameElement.style.textTransform = 'uppercase'; 
        userNameElement.style.marginLeft = '2px'; 
        userNameElement.style.cursor = 'pointer'; 

        let clicks = 0;
        userNameElement.addEventListener('dblclick', () => {
          clicks++;
          if (clicks === 2) {
            document.querySelector('.navigation .loggedin').remove();
            clicks = 0;
            showLoginForm();
          }
        });

        userNameElement.addEventListener('mouseover', () => {
          userNameElement.textContent = 'Log Out';
        });

        userNameElement.addEventListener('mouseout', () => {
          userNameElement.textContent = fullName;
        });

        document.querySelector('.navigation ul').appendChild(userNameElement);
      }
    } else {
      // Clear the logged-in area if user is not logged in
      const loggedInElement = document.querySelector('.navigation .loggedin');
      if (loggedInElement) {
        loggedInElement.remove();
      }
    }
  };

  // Function to display login form
  const showLoginForm = () => {
    $('.form').addClass('login-active').removeClass('sign-up-active');
  };

  // Event listener for login button click
  const login = document.getElementById('login');
  login.onclick = (e) => {
    e.preventDefault();
    handleLogin();
  };

  // Check if user is logged in on page load
  window.addEventListener('DOMContentLoaded', () => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn) {
      displayUserName();
    }
  });
});

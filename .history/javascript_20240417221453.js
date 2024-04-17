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
      document.querySelector('.navigation .loggedin').remove();

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
      userNameElement.addEventListener('click', () => {
        clicks++;
        if (clicks === 2) {
          // Clear sessionStorage and reload the page
          sessionStorage.removeItem('loggedIn');
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

window.addEventListener('DOMContentLoaded', () => {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn) {
    // Check if user is logged in
    displayUserName();
  }
});

// Function to display user's name in the navigation bar
// Function to display user's name in the navigation bar
const displayUserName = () => {
  const userName = localStorage.getItem('userName'); // Retrieve user's name from localStorage
  if (userName) {
    // If user's name is found, create a span element to display the name
    const userNameElement = document.createElement('span');
    userNameElement.textContent = userName;
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
        document.querySelector('.navigation .loggedin').remove();
        // Reset clicks counter
        clicks = 0;
        // Show the login form
        showLoginForm();
      }
    });

    // Add hover event listener to display "Log out" when hovering over the name
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

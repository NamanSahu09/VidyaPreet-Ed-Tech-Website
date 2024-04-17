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


window.addEventListener('DOMContentLoaded', () => {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (loggedIn) {
    // Check if user is logged in
    displayUserName();
  }
});

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
      }
    });

    // Add the user's name element to the navigation bar
    document.querySelector('.navigation ul').appendChild(userNameElement);
  }
};


 

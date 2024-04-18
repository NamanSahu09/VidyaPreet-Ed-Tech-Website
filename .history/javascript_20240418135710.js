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

const handleLogin = () => {
  const usernameAddress = document.getElementById('email').value;
  const passwordAddress = document.getElementById('password').value;

  const storedUserData = localStorage.getItem('user');
  if (storedUserData) {
    const user = JSON.parse(storedUserData);
    const storedEmail = user.email;
    const storedPassword = user.password;

    if (usernameAddress === storedEmail && passwordAddress === storedPassword) {
      sessionStorage.setItem('userName', user.fullName);
      swal(`Login Successful, Hi ${user.fullName}`);
      displayUserName();
    } else {
      swal('Invalid username or password');
    }
  } else {
    swal('No user found. Please sign up first.');
  }
};

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

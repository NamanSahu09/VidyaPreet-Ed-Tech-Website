let form = document.querySelector(".sign-up-form form");
let username = form.querySelector('input[name="fullname"]');
let email = form.querySelector('input[name="email"]');
let password = form.querySelector('input[name="password"]');
let psw = form.querySelector('input[name="confirm_password"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});

const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};

const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};

const mailFormat = (e) => {
  const re = /\w+@\w+\.\w+/;
  return re.test(String(e).toLowerCase());
};

const passFormat = (p) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
  return re.test(p);
};

function validation() {
  let user = username.value.trim();
  let mail = email.value.trim();
  let pass1 = password.value.trim();
  let pass2 = psw.value.trim();

  if (user === "") {
    setError(username, "Full Name is required");
  } else {
    setSuccess(username);
  }

  if (mail === "") {
    setError(email, "Email is required");
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (pass1 === "") {
    setError(password, "Password is required");
  } else if (!passFormat(pass1)) {
    setError(password, "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character");
  } else {
    setSuccess(password);
  }

  if (pass2 === "") {
    setError(psw, "Please confirm your password");
  } else if (pass2 !== pass1) {
    setError(psw, "Passwords don't match");
  } else {
    setSuccess(psw);
  }

  // If all fields are successfully validated, show success message
  if (user && mail && pass1 && pass2 && pass1 === pass2) {
    showSuccessMessage("User added successfully!");
    // You can also reset the form here if needed
    // form.reset();
  }
}

function showSuccessMessage(message) {
  let successMessage = document.getElementById("signup-success");
  successMessage.innerText = message;
  successMessage.classList.add("show");
}

















// <script >
// function clearLocalStorage() {
// 	// localStorage.clear();
// }

// window.addEventListener('load', clearLocalStorage);

// function handleSignupFormSubmit(event) {
// 	event.preventDefault();

// 	let fullName = document.querySelector('.sign-up-form input[name="fullname"]').value.trim();
// 	let email = document.querySelector('.sign-up-form input[name="email"]').value.trim();
// 	let password = document.querySelector('.sign-up-form input[name="password"]').value.trim();


// 	if (fullName === "" || email === "" || password === "") {
// 			alert("Please fill in all fields.");
// 			return;
// 	}

// 	let user = {
// 	fullName: fullName,
// 	email: email,
// 	password: password,
// };
// localStorage.setItem('user', JSON.stringify(user));
// localStorage.setItem('userName',JSON.stringify(user.fullName));
// 	// Display success message
// 	showSuccessMessage("User added successfully!");
// }
// function showSuccessMessage(message) {
// 	let successMessage = document.getElementById("signup-success");
// 	successMessage.innerText = message;
// 	successMessage.classList.add("show");
// }
// document.querySelector('.sign-up-form form').addEventListener('submit', handleSignupFormSubmit);

// </script>
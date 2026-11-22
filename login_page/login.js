// Selecting HTML elements
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const rememberCheckbox = document.getElementById("remember-checkbox");
const message = document.getElementById("message");
const forgotPassword = document.getElementById("forgot-password");


// Login form functionality
loginForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const userValue = username.value.trim();
    const passwordValue = password.value;

    // Check whether fields are empty
    if (userValue === "" || passwordValue === "") {
        message.textContent = "Please enter your username and password.";
        message.style.color = "red";
        return;
    }

    // Check email format if the user entered an email
    if (userValue.includes("@")) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(userValue)) {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            return;
        }
    }

    // Check password length
    if (passwordValue.length < 6) {
        message.textContent = "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // Remember Me functionality
    if (rememberCheckbox.checked) {
        localStorage.setItem("rememberedUsername", userValue);
    } else {
        localStorage.removeItem("rememberedUsername");
    }


    // Display a success message
    message.textContent = "Login successful! Welcome, " + userValue + ".";
    message.style.color = "green";

    // Open the home page after 1 second
    setTimeout(function () {
        window.location.href = "home.html";
    }, 1000);


});


// Forgot Password functionality
forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    const userValue = username.value.trim();

    if (userValue === "") {
        message.textContent = "Please enter your email or username first.";
        message.style.color = "red";
    } else if (!userValue.includes("@")) {
        message.textContent = "Please enter your registered email address to reset your password.";
        message.style.color = "red";
    } else {
        message.textContent = "Password reset functionality requires an authentication service.";
        message.style.color = "blue";
    }

});


// Remembered username functionality
const savedUsername = localStorage.getItem("rememberedUsername");

if (savedUsername) {
    username.value = savedUsername;
    rememberCheckbox.checked = true;
}

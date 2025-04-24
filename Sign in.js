console.log("script loaded");

function myfunction(event) {
  event.preventDefault();

  // Get input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Regular expressions for validation
  const nameRegex = /^[A-Za-z]{1,50}$/;
  const emailRegex = /^[A-Za-z\._\-0-9]+[@][A-Za-z]+\.[a-z]{2,4}$/;
  let isValid = true;

  // Clear previous error messages
  clearErrors();

  // Validate first name
  if (!nameRegex.test(firstName)) {
    showError("firstNameError", "Please enter a valid first name");
    isValid = false;
  }

  // Validate last name
  if (!nameRegex.test(lastName)) {
    showError("lastNameError", "Please enter a valid last name");
    isValid = false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    showError("email-error", "Please enter a valid email");
    isValid = false;
  }

  // Validate password
  if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters long");
    isValid = false;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  // If all validations pass, show success message and save password
  if (isValid) {
    alert("Form submitted successfully!");
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
    console.log("password:", password);
    // Save password to local storage
    localStorage.setItem("savedPassword", password);

    // Redirect to the next page
    window.location.href = "food-places.html";
  } else {
    alert("Please fix the errors in the form.");
  }
}

// Function to show error messages
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.innerHTML = message;
  }
}

// Function to clear all error messages
function clearErrors() {
  showError("firstNameError", "");
  showError("lastNameError", "");
  showError("email-error", "");
  showError("passwordError", "");
  showError("confirmPasswordError", "");
}

// Function to toggle password visibility
function togglePasswordVisibility(inputId, toggleButtonId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(toggleButtonId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = "Show";
  }
}

// Function to handle forgot password
function handleForgotPassword() {
  window.location.href = "password-reset.html";
}

// Auto-fill password if saved
window.onload = () => {
  const savedPassword = localStorage.getItem("savedPassword");
  if (savedPassword) {
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  }

  // Attach the myfunction to the form's submit event
  const form = document.getElementById("signInForm");
  if (form) {
    form.addEventListener("submit", myfunction);
  }

  // Attach the handleForgotPassword function to the button
  const forgotPasswordButton = document.getElementById("forgotPassword");
  if (forgotPasswordButton) {
    forgotPasswordButton.addEventListener("click", handleForgotPassword);
  }
};

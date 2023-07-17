// Get button elements from the HTML document
var firstNameButton = document.getElementById("firstNameButton");
var lastNameButton = document.getElementById("lastNameButton");
var zipCodeButton = document.getElementById("zipCodeButton");
var accessButton = document.getElementById("accessButton");

// Get other elements from the HTML document
var secretMessage = document.getElementById("secretMessage");
var secretForm = document.getElementById("secretForm");
var firstNameInput = document.getElementById("firstNameInput");
var lastNameInput = document.getElementById("lastNameInput");
var zipCodeInput = document.getElementById("zipCodeInput");

// Set focus on the "Enter First Name" button on page load
window.onload = function() {
  firstNameButton.focus();
};

// Add event listeners to the buttons
firstNameButton.addEventListener("click", promptFirstName);
lastNameButton.addEventListener("click", promptLastName);
zipCodeButton.addEventListener("click", promptZipCode);
accessButton.addEventListener("click", showSecretMessage);

// Function to prompt for the first name
function promptFirstName() {
  var firstName = prompt("Enter your first name:");
  if (firstName) {
    firstNameInput.value = firstName;
    firstNameButton.disabled = true;
    lastNameButton.disabled = false;
    lastNameButton.focus();
    accessButton.classList.add("firstNameEntered");
  }
}

// Function to prompt for the last name
function promptLastName() {
  var lastName = prompt("Enter your last name:");
  if (lastName) {
    lastNameInput.value = lastName;
    var fullName = firstNameInput.value + " " + lastNameInput.value;
    if (fullName.length <= 20) {
      lastNameButton.disabled = true;
      zipCodeButton.disabled = false;
      zipCodeButton.focus();
      accessButton.classList.remove("firstNameEntered");
      accessButton.classList.add("lastNameEntered");
    } else {
      alert("Too many characters in the name. Please try again.");
      promptLastName();
    }
  }
}

// Function to prompt for the ZIP code
function promptZipCode() {
  var zipCode = prompt("Enter your ZIP code:");
  if (zipCode && zipCode.length === 5) {
    zipCodeInput.value = zipCode;
    accessButton.disabled = false;
    zipCodeButton.disabled = true;
    accessButton.focus();
    accessButton.classList.remove("lastNameEntered");
    accessButton.classList.add("zipCodeEntered");
  } else {
    alert("Invalid ZIP code. Please enter exactly 5 digits.");
    promptZipCode();
  }
}

// Function to show the secret message
function showSecretMessage() {
    // Capitalize the first letter of the first and last name
    var firstName = capitalizeFirstLetter(firstNameInput.value);
    var lastName = capitalizeFirstLetter(lastNameInput.value);
    var fullName = firstName + " " + lastName;
  
    // Show an alert and update the secret message
    alert("Please check your surrounding areas to make sure no one is shoulder surfing.");
    secretMessage.textContent = fullName + " - " + secretMessage.textContent;
    secretMessage.style.display = "block";
    secretMessage.style.color = "#000000";
  
    // Reset the form after 3 seconds
    setTimeout(resetForm, 3000);
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to reset the form to its initial state
function resetForm() {
  secretForm.reset();
  firstNameButton.disabled = false;
  lastNameButton.disabled = true;
  zipCodeButton.disabled = true;
  accessButton.disabled = true;
  secretMessage.style.display = "none";
  secretMessage.style.color = "#f9f9f9";
  secretMessage.textContent = "You are a good person, with a good heart.";
  firstNameButton.focus();
}

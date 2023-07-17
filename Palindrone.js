// Get references to the form, input, and message elements
const form = document.getElementById('palindromeForm');
const input = document.getElementById('inputString');
const message = document.getElementById('message');

// Listen for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop the form from being submitted

  // Get the text entered by the user and remove spaces and convert to lowercase
  const text = input.value.toLowerCase().replace(/\s/g, '');

  // Reverse the text
  const reversedText = text.split('').reverse().join('');

  // Check if the text is a palindrome and display an appropriate message
  if (text === reversedText) {
    showMessage(`"${input.value}" is a palindrome!`, 'positive');
  } else {
    showMessage(`"${input.value}" is not a palindrome!`, 'negative');
  }

  input.value = ''; // Clear the input field
});

// Function to display the message with appropriate styling
function showMessage(text, className) {
  message.textContent = text;
  message.className = className;
}

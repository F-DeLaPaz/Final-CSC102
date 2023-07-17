// Get the current date
var today = new Date();

// Format the date as desired
var formattedDate = today.toDateString();

// Update the element with the formatted date
var dateElement = document.getElementById('current-date');
dateElement.textContent = formattedDate;

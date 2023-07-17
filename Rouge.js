var diceImages = [ // list of images and their location
  "images/Skull1.png", 
  "images/Fortuna.png", 
  "images/Scar1.png", 
  "images/Scar2.png", 
  "images/Scar3.png", 
  "images/Skull2.png" 
];
var intervalIds = []; // Array to store interval IDs
var gameInProgress = false; // Flag to track if game is in progress

function rollDie() {
  if (gameInProgress) return; // If game is already in progress, do nothing

  var rollButton = document.getElementById("rollButton");
  rollButton.disabled = true; // Disable the roll button

  for (var i = 1; i <= 3; i++) {
    var intervalId = setInterval(changeDiceImage.bind(null, i), 100); // Start interval for changing dice image
    intervalIds.push(intervalId); // Store the interval ID
  }

  var stopButton = document.getElementById("stopButton");
  stopButton.disabled = false; // Enable the stop button

  gameInProgress = true; // Set game in progress flag
}

function changeDiceImage(diceNumber) {
  var diceImage = document.getElementById("diceImage" + diceNumber);
  var randomIndex = Math.floor(Math.random() * diceImages.length); // Generate random index
  diceImage.src = diceImages[randomIndex]; // Set dice image using random index
}

function stopRoll() {
  intervalIds.forEach(clearInterval); // Clear all intervals
  intervalIds = []; // Reset interval IDs

  var stopButton = document.getElementById("stopButton");
  stopButton.disabled = true; // Disable the stop button
  gameInProgress = false; // Set game in progress flag to false
}

var counter = 0; // Counter variable

function multiFunction() {
  counter++; // Increment the counter

  if (counter === 1) {
    alert("Goddesses favor Rogues"); // Display alert message
  } else if (counter === 2) {
    var result = confirm("Do you want to proceed?"); // Display confirmation dialog
    if (result) {
      alert("Pushing your luck"); // Display alert message
    } else {
      alert("Fotune Favors the Bold. Game Over"); // Display alert message
      deactivateButtons(); // Deactivate buttons
      return; // Exit the function
    }
  } else if (counter === 3) {
    var result = confirm("Shall we try Again?"); // Display confirmation dialog
    if (result) {
      alert("So be it the fates will Decide..."); // Display alert message
    } else {
      alert("The Road not traveled... Game Over"); // Display alert message
      deactivateButtons(); // Deactivate buttons
      return; // Exit the function
    }
  } else {
    alert("Game Over"); // Display alert message
    deactivateButtons(); // Deactivate buttons
    return; // Exit the function
  }

  rerollDice(); // Reroll the dice
  reactivateStopButton(); // Reactivate the stop button
}

function rerollDice() {
  var rerollButton = document.getElementById("rerollButton");

  for (var i = 1; i <= 3; i++) {
    var intervalId = setInterval(changeDiceImage.bind(null, i), 100); // Start interval for changing dice image
    intervalIds.push(intervalId); // Store the interval ID
  }
}

function reactivateStopButton() {
  var stopButton = document.getElementById("stopButton");
  stopButton.disabled = false; // Enable the stop button
}

function deactivateButtons() {
  var rollButton = document.getElementById("rollButton");
  var stopButton = document.getElementById("stopButton");
  var rerollButton = document.getElementById("rerollButton");

  rollButton.disabled = true; // Disable the roll button
  stopButton.disabled = true; // Disable the stop button
  rerollButton.disabled = true; // Disable the reroll button
}

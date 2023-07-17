var intervalId = null;
var slideRightEnabled = true;
var slideLeftEnabled = true;
var stopEnabled = false;
var audioElement = new Audio("chacha.mp3");

function slideToLeft() {
  var image = document.querySelector(".left-moving-gif");
  var maxWidth = window.innerWidth - image.width; // Get the maximum width of the screen minus the image width
  clearInterval(intervalId); // Clear any existing interval before starting a new one
  var currentPosition = maxWidth; // Initial position of the image (off the right side of the screen)
  var moveAmount = 75; // Number of pixels to move the image at a time

  function moveImage() {
    currentPosition -= moveAmount; // Update the current position

    if (currentPosition < -image.width) {
      currentPosition = maxWidth; // Reset the position to the right side of the screen
    }

    image.style.left = currentPosition + "px"; // Apply the new position
  }

  intervalId = setInterval(moveImage, 100); // Move the image every 100 milliseconds
  image.style.display = "block"; // Show the hidden image
  slideRightEnabled = false; // Update button statuses
  stopEnabled = true;
  slideLeftEnabled = false;
  updateButtonStatuses();

  audioElement.src = "slideLeft.mp3"
  audioElement.play();
}

function slideToRight() {  // See above         
  var image = document.querySelector(".right-moving-gif");
  var maxWidth = window.innerWidth - image.width; 
  clearInterval(intervalId); 
  var currentPosition = -image.width; 
  var moveAmount = 75; 

  function moveImage() {
    currentPosition += moveAmount; 
    if (currentPosition > maxWidth) {
      currentPosition = -image.width; 
    }

    image.style.left = currentPosition + "px"; 
  }

  intervalId = setInterval(moveImage, 100); 
  image.style.display = "block";
  slideRightEnabled = false;
  stopEnabled = true;
  slideLeftEnabled = false;
  updateButtonStatuses();

  audioElement.src = "slideRight.mp3"
  audioElement.play();
}

function stopSlide() {
  clearInterval(intervalId); // Clear the interval to stop the animation
  intervalId = null; // Reset the intervalId variable

  var rightImage = document.querySelector(".right-moving-gif");
  var leftImage = document.querySelector(".left-moving-gif");

  // Hide the images by setting the display property to "none"
  rightImage.style.display = "none";
  leftImage.style.display = "none";

  // Update button statuses
  slideRightEnabled = true;
  stopEnabled = false;
  slideLeftEnabled = true;
  updateButtonStatuses();
}



function playAudio(audioFile) {
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = audioFile;
  audioPlayer.play();
}
// Function to update the button statuses
function updateButtonStatuses() {
  var slideRightButton = document.getElementById('slideRightButton');
  var stopButton = document.querySelector('.stop-button');
  var slideLeftButton = document.getElementById('slideLeftButton');

  if (slideRightButton) {
    slideRightButton.disabled = !slideRightEnabled;
    slideRightButton.classList.toggle("on", slideRightEnabled);
    slideRightButton.classList.toggle("off", !slideRightEnabled);
  }

  if (stopButton) {
    stopButton.disabled = !stopEnabled;
    stopButton.classList.toggle("on", stopEnabled);
    stopButton.classList.toggle("off", !stopEnabled);
  }

  if (slideLeftButton) {
    slideLeftButton.disabled = !slideLeftEnabled;
    slideLeftButton.classList.toggle("on", slideLeftEnabled);
    slideLeftButton.classList.toggle("off", !slideLeftEnabled);
  }
}

// Initially set the button statuses
window.onload = function() {
  updateButtonStatuses();
};

// Function to be executed when the page is loaded
window.onload = function() {
  // Disable the "Pause the Cha Cha" button initially
  document.getElementById("stopButton").disabled = true;
  document.getElementById("playButton").classList.add("playActive");
};

// Function to be executed when "Yes to the Cha Cha" button is clicked
function yesChaCha() {
  audioElement.src = "chacha.mp3";
  audioElement.play();
  document.getElementById("playButton").classList.remove("playActive");
  document.getElementById("playButton").classList.add("playInactive");
  document.getElementById("stopButton").classList.remove("stopInactive");
  document.getElementById("stopButton").classList.add("stopActive");
  document.getElementById("playButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

// Function to be executed when "Pause the Cha Cha" button is clicked
function noChaCha() {
  audioElement.pause();
  document.getElementById("stopButton").classList.remove("stopActive");
  document.getElementById("stopButton").classList.add("stopInactive");
  document.getElementById("playButton").classList.remove("playInactive");
  document.getElementById("playButton").classList.add("playActive");
  document.getElementById("stopButton").disabled = true;
  document.getElementById("playButton").disabled = false;
}


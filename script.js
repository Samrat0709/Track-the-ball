// Get the target element
var target = document.getElementById("target");
var container = document.getElementById("game-container");
//speed buttons


// Initialize score
var score = 0;
var scoreElement = document.getElementById("score");

// Set initial position of target
var targetX = 0;
var targetY = 0;
moveTarget();

// Add click event listener to target
target.addEventListener("click", function() {
  score++;
  scoreElement.textContent = "Score: " + score;
});

// Function to move the target randomly
function moveTarget() {
  var maxX = document.getElementById("game-container").offsetWidth - target.offsetWidth;
  var maxY = document.getElementById("game-container").offsetHeight - target.offsetHeight;
  targetX = Math.floor(Math.random() * maxX);
  targetY = Math.floor(Math.random() * maxY);
  target.style.left = targetX + "px";
  target.style.top = targetY + "px";
}

// Move the target every second
setInterval(moveTarget, 1500);

// Add click event listener to the body
document.body.addEventListener("click", function(event) {
  // Check if the clicked element is the target
  if (event.target === container ) {
    // Reset the game here
    alert("Game Reset");
    score = 0;
    scoreElement.textContent = "Score: " + score;
  }
});



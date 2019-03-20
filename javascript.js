var playing = false;
var score;
var action;
var timeremaining;

// if we click on the start/reset
function start_reset() {
  if (playing != true) {
    // if we are not playing
    hide("gameOver");
    score = 0; //set score to 0
    document.getElementById("scorevalue").innerHTML = score; //set score to 0
    show("timeremaining"); //show countdown box
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    document.getElementById("startreset").innerHTML = "Reset Game"; //change button to reset
    playing = true;
    startCountDown();
  } else {
    // if we are playing
    location.reload(); //reloads our page
  }
}

//Functions

//Start counter
function startCountDown() {
  action = setInterval(function() {
    timeremaining--;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining == 0) {
      // Game over
      stopCountdown();
      show("gameOver");
      document.getElementById("gameOver").innerHTML =
        "<p>Game over!</p><p>Your score is " + score + ".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML = "Start Game";
    }
  }, 1000);
}

//Stop the counter
function stopCountdown() {
  clearInterval(action);
}

//Hides a certain element
function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

//Shows a vertain element
function show(Id) {
  document.getElementById(Id).style.display = "block";
}

function generateQA() {
  //generate new Q&A
  return (
    Math.round(Math.random() * 11) + " x " + Math.round(Math.random() * 11)
  );
}

//if we click on an answer box
//if we are playing
//correct?
//yes
//increase score by 1
//show correct box for one second
//generate new Q&A
//no
//show try again box for one second

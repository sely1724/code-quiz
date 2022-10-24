//create question array
var questionArray = [
  {
   question: "What does HTML stand for?",
   possibleAnswers: ["Hypertext Processing Language", "Hyperfile Programming Learning", "Humans Phone Log"],
   correctAnswer: 0
   },
  {
  question: "What property is used for changing the font face?",
  possibleAnswers: ["font-type", "font-family", "times new roman"],
  correctAnswer: 1
   },
  {
  question: "What symbols denote a tag in html?",
  possibleAnswers: ["< >", "!!", "~ ~"],
  correctAnswer: 0
   },
  {
  question: "What's a rule to remember in JS?",
  possibleAnswers: ["User Clicks Cannot Be Recorded", "Never Pull Information From HTML", "Almost All Events Bubble"],
  correctAnswer: 0
    },
  {
  question: "Math.random() is an example of what?",
  possibleAnswers: ["string", "method", "function"],
  correctAnswer: 1
    },
  {
  question: "What are valid datatypes in JS?",
  possibleAnswers: ["strings", "numbers", "both"],
  correctAnswer: 2
    }
  ];

 //hook to DOM and declare variables  
var timerElement = document.getElementById("time");
var scoreElement = document.getElementById("score");
var finalScoreElement = document.querySelector(".finalScore");
var highScoreDiv = document.getElementById('highScoreDiv');
var submitButton = document.getElementById("submit");
var scoreUpdate = document.getElementById('scoreupdate');
var questionAsked= document.getElementById('title');
var questionStructure = document.getElementById("question-structure");
var highScoresList = document.getElementById("highscorelist");
var highScoreButton = document.getElementById("highscore");
var highScores = [];
var currPosition = 0;
var yourScore = 0;
var timerCount = 60;
var initializeTimer;

//calling funtion to load initial elements 
loadPage();

//function starts Timer
function startTimer(){
  timerElement.textContent = timerCount + " seconds left";
  initializeTimer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
//tests if time is still running
    if (timerCount >= 0) {
    timerElement.textContent = timerCount + " seconds left";
      }
//tests if time has run out and if it has calls the show score function
    if (timerCount <=0) {
      showScore();
    }
  }, 1000);
}


// defines the object that holds functions related to the question process
var app = {
  start: function() {
   currPosition = 0;
    this.updateStats(yourScore);
    var alts = document.querySelectorAll('.option');
//add event listener to list index options so that any could be clicked.  when clicked, check answer function is called 
    alts.forEach((element, index) => {
    element.addEventListener("click", () => {
    this.checkAnswer(element,index);
      });
    });
    this.showQuestion(questionArray[currPosition]);
    },
  showQuestion: function(q) {
//question array carried through
    questionAsked.textContent = q.question; 
    var alts = document.querySelectorAll('.option');
    setTimeout(() => {
     alts.forEach(function(element, index){
     element.style.color = "black"
     element.textContent = q.possibleAnswers[index];
        }) 
      },100)},
//function checks answer and adds points/subtracts time 
  checkAnswer: function(elementClickedOn, index){
    var correct;
    var currQuestion = questionArray[currPosition];
    if(currQuestion.correctAnswer == index) {
      correct = true;
      yourScore+= 5;
      this.updateStats(yourScore); 
      }
    else{
      correct = false;     
        if(timerCount >= 10){
          timerCount-= 10;
        }
        else {
          timerCount = 0;
        }
    }
    this.flashTextColor(elementClickedOn, correct);
    this.increasePosition();
    this.showQuestion(questionArray[currPosition]);
  },
//function updates quiz with most recent user score
  updateStats: function(yourScore){
    var score = document.getElementById('points-earned');
    score.textContent = "Your Score: " + yourScore; 
  },
//function flashes text color to indicate correct/incorrect answer
  flashTextColor: function(elementClickedOn, correct){
    if (correct == true) {
      elementClickedOn.style.color = "#90EE90";
    }
    else {
      elementClickedOn.style.color = "red";
    }},
//function increases position 
  increasePosition: function() {
    if (currPosition < questionArray.length - 1){
      currPosition++;
    }
    else{
      showScore()
    }
  }
}

//function displays score at the end of the game
function showScore(){
  clearInterval(initializeTimer);
  timerElement.textContent = "Game Over";
  questionStructure.setAttribute("style", "display:none");
  scoreElement.setAttribute("style", "display:block");
  finalScoreElement.textContent = "Your Final Score: " + yourScore;
  highScoreButton.setAttribute("style", "display:block");
}

//function adds event listener to submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var userInitials = document.getElementById("initials").value;
  if (userInitials === "") {
    alert("Initials cannot be blank");
  } 
  else {
  highScoreDiv.setAttribute("style", "display:block");
  renderHighScores(userInitials,yourScore)
  };
});

//function shows "high scores" <-- really shows all scores right now.  Will change in future
function renderHighScores(userInitials, yourScore) {
  highScores.push([userInitials, yourScore]);
  
      var scoresList = document.createElement("li")
          highScoresList.appendChild(scoresList);
          scoresList.textContent = highScores[highScores.length - 1].join (": ");
      
localStorage.setItem('highscoreStorage', JSON.stringify(highScores));
}

//first function on page.  Loads what's in storage and appends to working array
function loadPage(){
var lastScore = JSON.parse(localStorage.getItem('highscoreStorage'));

  if (lastScore !== null) {
    highScores = lastScore;
  for (var i = 0; i < lastScore.length; i++) {
      var scoresList = document.createElement("li");
      highScoresList.appendChild(scoresList);
      scoresList.textContent = lastScore[i].join (": ");
  }
}
  else {scoreUpdate.textContent = "No Highscores Recorded"
 // localStorage.setItem('highscoreStorage', JSON.stringify(highScores));
  }
  
var startButton = document.getElementById("start-quiz");
questionStructure.setAttribute("style", "display:none");
scoreElement.setAttribute("style", "display:none");
highScoreDiv.setAttribute("style", "display:none");

startButton.addEventListener("click", () => {
  var instructionsStart = document.getElementById("instructions");
  instructionsStart.setAttribute("style", "display:none");
  startButton.setAttribute("style", "display:none");
  questionStructure.setAttribute("style", "display:block");
  app.start();    
  startTimer();    
});

}



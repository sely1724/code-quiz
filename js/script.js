
var questionArray = [
  {
   question: "What does HTML stand for?",
   possibleAnswers: ["Hypertext Processing Language", "Hyperfile Programming Learning", "Humans Phone Log"],
   correctAnswer: 0
   },
  {
  question: "What's Sylvia's fav food?",
  possibleAnswers: ["Pizza", "Lox on a Poppyseed Bagel", "Panang Curry"],
  correctAnswer: 1
   },
  {
  question: "What color cat is Simba",
  possibleAnswers: ["Black", "Orange", "White"],
  correctAnswer: 1
   }];

//initialize outside     
  
var timerElement = document.getElementById("time");
var scoreElement = document.getElementById("score");
var finalScoreElement = document.querySelector(".finalScore");
var questionAsked= document.getElementById('title');
var questionStructure = document.getElementById("question-structure");
var currPosition = 0;
var yourScore = 0;
var timerCount = 60;// change to 60 later.
var initializeTimer;
var arrayLength = questionArray.length;



//var texttobechanged;
//var scoreArray = [];


//decided to keep this function outside app object since it runs slightly separate.
function startTimer(){
  timerElement.textContent = timerCount + " seconds left";
  initializeTimer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount >= 0) {
      // Tests if win condition is met
      timerElement.textContent = timerCount + " seconds left";
      
      }
    
    // Tests if time has run out
    if (timerCount <=0) {
      showScore();

    }
  }, 1000);
}









   
// define the object for the question entity
var app = {
  start: function() {
   currPosition = 0;
  
    // get options
    this.updateStats(yourScore);
    var alts = document.querySelectorAll('.option');
      alts.forEach((element, index) => {
      element.addEventListener("click", () => {

        this.checkAnswer(element,index);
      });
    });
    this.showQuestion(questionArray[currPosition]);

  },


  showQuestion: function(q) {
      // show question
      
      questionAsked.textContent = q.question; 
     
      var alts = document.querySelectorAll('.option');
      setTimeout(() => {
        alts.forEach(function(element, index){
          element.style.color = "black"
          element.textContent = q.possibleAnswers[index];
             })
            
            },100)}, 


  checkAnswer: function(elementClickedOn, index){
      var correct;
      var currQuestion = questionArray[currPosition];
      console.log(currPosition)
      if(currQuestion.correctAnswer == index) {
      //texttobechanged = currQuestion.possibleAnswers[index];
      correct = true;
      yourScore+= 5;
      this.updateStats(yourScore); 
      }
      else{
      correct = false;     
      if(timerCount >= 10)
      {
        timerCount-= 10;
      }
      else{
        timerCount = 0;

      }
      
      
      }
      this.flashTextColor(elementClickedOn, correct);
      this.increasePosition();
      this.showQuestion(questionArray[currPosition]);
  },
  updateStats: function(yourScore){
    var score = document.getElementById('points-earned');
      score.textContent = "Your Score: " + yourScore; 
  },
  flashTextColor: function(elementClickedOn, correct){
    if (correct == true) {
      elementClickedOn.style.color = "#90EE90";
      }
    else {
      elementClickedOn.style.color = "red";
  }},

      //increase position 
  increasePosition: function() {
    if (currPosition < questionArray.length - 1){
      currPosition++;
    }
    else{
      //clearInterval(initializeTimer);
      //timerElement.textContent = "Game Over";
      showScore()
    }
  }
  }


function showScore(){
  clearInterval(initializeTimer);
  timerElement.textContent = "Game Over";
  questionStructure.setAttribute("style", "display:none");
  scoreElement.setAttribute("style", "display:block");
  finalScoreElement.textContent = "Your Final Score: " + yourScore;


}





function initialize(){
var startButton = document.getElementById("start-quiz");
questionStructure.setAttribute("style", "display:none");
scoreElement.setAttribute("style", "display:none");

startButton.addEventListener("click", () => {
  var instructionsStart = document.getElementById("instructions");
  instructionsStart.setAttribute("style", "display:none");
  startButton.setAttribute("style", "display:none");
  questionStructure.setAttribute("style", "display:block");
  app.start();    
  startTimer();    
});

}
initialize();


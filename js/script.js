
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
var timerCount = 10;// change to 60 later.
var initializeTimer;
var finalScore = document.getElementById("score");

var texttobechanged;
var scoreArray = [];


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
    if (timerCount <=0 ) {
      // Clears interval
      clearInterval(initializeTimer);
      console.log("end")
      //figure out how to log score when it hits 0.
    finalScore.setAttribute("style", "display:block");
    finalScore.textContent = "Your Score: " + app.yourScore;



    }
  }, 1000);
}







   
// define the object for the question entity
var app = {
  start: function() {
   this.currPosition = 0;
   this.yourScore = 0;
  
   this.questionAsked= document.getElementById('title');
  
    // get options
    this.updateStats(this.yourScore);
    var alts = document.querySelectorAll('.option');
      alts.forEach((element, index) => {
      element.addEventListener("click", () => {
        // check correct answer
        this.checkAnswer(element,index);
      });
    });
    this.showQuestion(questionArray[this.currPosition]);

  },


  showQuestion: function(q) {
      // show question
      
      this.questionAsked.textContent = q.question; 
     
      var alts = document.querySelectorAll('.option');
      setTimeout(() => {
        alts.forEach(function(element, index){
          element.style.color = "black"
          element.textContent = q.possibleAnswers[index];
             })
            
            },100)}, 


  checkAnswer: function(elementClickedOn, index){
      var correct;
      var currQuestion = questionArray[this.currPosition];
      if(currQuestion.correctAnswer == index) {
      this.texttobechanged = currQuestion.possibleAnswers[index];
      console.log("correct");
      correct = true;
      this.yourScore+= 5;
      this.updateStats(this.yourScore); 
      }
      else{
      console.log("incorrect");
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
      this.showQuestion(questionArray[this.currPosition]);
  },
  updateStats: function(yourScore){
    var score = document.getElementById('points-earned');
      score.textContent = "Your Score: " + yourScore; 
  },
  flashTextColor: function(elementClickedOn, correct){
    if (correct == true) {
      //elementClickedOn.style.color = "#90EE90";
      elementClickedOn.style.color = "#90EE90";
      }
    else {
      // setTimeout(() => {
      //   elementClickedOn.style.color = "red";
      // }, 500);
      elementClickedOn.style.color = "red";
  }},

      //increase position 
  increasePosition: function() {
    this.currPosition++; 
    if(this.currPosition == questionArray.length){
    return;
    
  }
  }
}






function initialize(timerElement, timerCount, initializeTimer){
var startButton = document.getElementById("start-quiz");
var questionStructure = document.getElementById("question-structure");
questionStructure.setAttribute("style", "display:none");
finalScore.setAttribute("style", "display:none");

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


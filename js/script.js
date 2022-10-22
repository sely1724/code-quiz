

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
    




     
 // define the object for the question entity
  var app = {
    start: function() {
     this.currPosition = 0;
     this.yourScore = 0;
     this.texttobechanged = '';
    
      // get options
      this.updateStats(this.yourScore);
      var alts = document.querySelectorAll('.option');
        alts.forEach((element, index) => {
        element.addEventListener("click", () => {
          // check correct answer
          this.checkAnswer(element,index);
        });
      });
    
      this.showQuizContainer();
      this.startTime();//???????
      this.showQuestion(questionArray[this.currPosition]);
    },

    showQuizContainer: function() {
      var questionStructure = document.getElementById("question-structure");
      questionStructure.setAttribute("style", "display:block");
      },

    startTime: function() {
        var timerInterval = setInterval(function () {
          // EVENT HANDLER: this function is automatically called when the interval event happens
          var timeText = document.getElementById("time");
          this.timeLeft = 60;
          // Update State
          timeLeft--;
      
          // Update UI
          timeText.textContent = timeLeft + " seconds left till colorsplosion.";
      
          // Check for exit state: Are we done?
          if (timeLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
  
          }
        }, 1000);
    },


    showQuestion: function(q) {
        // show question
        var questionAsked= document.getElementById('title');
        setTimeout(() => {
          questionAsked.textContent = q.question; 
        }, 100);
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


function initialize(){
  var startButton = document.getElementById("start-quiz");
  var questionStructure = document.getElementById("question-structure");
  questionStructure.setAttribute("style", "display:none");

  startButton.addEventListener("click", () => {
    var instructionsStart = document.getElementById("instructions");
    instructionsStart.setAttribute("style", "display:none");
    startButton.setAttribute("style", "display:none");
    app.start();    
  });

}
initialize();




var question = {
    question: "What does HTML stand for?",
    possibleAnswers: ["Hypertext Processing Language", "Hyperfile Programming Learning", "Humans Phone Log"],
    correctAnswer: 0
    }


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
      // get options
    
      var alts = document.querySelectorAll('.option');
        alts.forEach((element, index) => {
        element.addEventListener("click", () => {
          // check correct answer
          this.checkAnswer(index);
        });
      });
    
      // show first question
      this.showQuestion(questionArray[this.currPosition]);
    },
    showQuestion: function(q) {
        // show question
        var questionAsked= document.getElementById('title');
        questionAsked.textContent = q.question; 
            
            // show options
        var alts = document.querySelectorAll('.option');
        alts.forEach(function(element, index){
         element.textContent = q.possibleAnswers[index];
            });    
            }, 
    checkAnswer: function(userSelected){
        var currQuestion = questionArray[this.currPosition];
        if(currQuestion.correctAnswer == userSelected) {
        console.log("correct");
        }
        else{
        console.log("incorret");
        }

        this.increasePosition();
        this.showQuestion(questionArray[this.currPosition]);

    },
        //increas position 
    increasePosition: function() {
        this.currPosition++;


        if(this.currPosition == questionArray.length){
            // send back to the beginning
            this.currPosition = 0;
    }

    
  }   };
  
  // initialize the application
  app.start();



// add javascript
//start with button logic. 
//1. When Press Start, timer starts.  
    //create click

//create timer function
//var userScore = "";
//var highScore = "";
//var totalSeconds = 60;
//var timeEl = document.querySelector("#time");
/*function timeCountDown(){
//for each interval, function executes
setInterval(function() {
    totalSeconds--;
    timeEl.textContent = totalSeconds + " seconds remaining";
    if(totalSeconds === 0) {
      clearInterval();
    }
  }, 1000);
}*/
 
//var startQuiz= document.querySelector("#start-quiz");

//startQuiz.addEventListener("click", function (event)){}
//create timer function
//setTimer();








//2. How to add questions? How many questions do I need? Where do I store them? 
//3. Where do I store correct answer to question? Click again? Or is a click not needed? Lots of questions here.  
//4. How to handle incorrect response by subtracting time.  
//5. How to keep score? How do we hold the high score on page? What is the high score? 1 pt per correct question in each game?
//store high scores
/*var checkHighScore = document.querySelector("#high-score");

checkHighScore.addEventListener("click", function (event)) {}
*/


//6. Game Over event when time hits 0 or questions answered. 




//Store Questions as objects




var questionArray = [
   {question: "What does HTML stand for?",
    possibleAnswers: ["Hypertext Processing Language", "Hyperfile Programming Learning", "Humans Phone Log"],
    correctanswer: 0
    },
   {question: "What's Sylvia's fav food?",
    possibleAnswers: ["Pizza", "Lox on a Poppyseed Bagel", "Panang Curry"],
    correctanswer: 1
    },
   {question: "What color cat is Simba",
    possibleAnswers: ["Black", "Orange", "White"],
    correctanswer: 1
    }
];
/*
question.forEach(function(index){

askQuestion(question[index]);



forEach(function(element,index){

    element.addEventListener("click", function(){
        if(q.correctanswer == index){
            console.log("correct");
            element.style.color = "#90EE90";
        }
        else{element.style.color = "red";}
    });
 });
}

});*/



var questionAsked = document.getElementById("title");
var options = document.querySelectorAll(".alt");


function askQuestion() {
    questionAsked.textContent = questionArray[1].question;

    options.forEach(function(element,index){
      element.textContent = questionArray[1].possibleAnswers[index];
      element.addEventListener("click", function(){
        if(questionArray[1].correctanswer == index){
            console.log("correct");
            element.style.color = "#90EE90";
        }
        else{element.style.color = "red";}
    });



    })
};



askQuestion();
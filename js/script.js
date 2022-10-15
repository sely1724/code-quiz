// add javascript
//start with button logic. 
//1. When Press Start, timer starts.  
    //create click

//create timer function
var userScore = "";
var highScore = "";
var totalSeconds = 60;
var timeEl = document.querySelector("#time");
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

    
var startQuiz= document.querySelector("#start-quiz");

startQuiz.addEventListener("click", function (event)){
//create timer function
//setTimer();


}





//2. How to add questions? How many questions do I need? Where do I store them? 
//3. Where do I store correct answer to question? Click again? Or is a click not needed? Lots of questions here.  
//4. How to handle incorrect response by subtracting time.  
//5. How to keep score? How do we hold the high score on page? What is the high score? 1 pt per correct question in each game?
//store high scores
/*var checkHighScore = document.querySelector("#high-score");

checkHighScore.addEventListener("click", function (event)) {}
*/


//6. Game Over event when time hits 0 or questions answered. 




//Store Questions as methods


var question1 = {
    question: "What does HTML stand for?";
    options: ["Hypertext Processing Language", "Hyperfile Programming Learning", "Humans Phone Log"];
    correct answer:"Hypertext Processing Language",
    }
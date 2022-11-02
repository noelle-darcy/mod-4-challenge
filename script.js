var timer = document.getElementById("timer");
var scoreList = document.getElementById("scoreList");
var highscores = document.getElementById("highscores");
var scoreReport = document.getElementById("scoreReport");
var startingScreen = document.getElementById("startingScreen");
var userForm = document.getElementById("userForm");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionDisplay = document.getElementById("questionDisplay");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var results = document.getElementById("results");
var submitBtn = document.querySelector("#submit")

//Array holding questions, answer choices and correct answers.
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C"
    },{
        question: "The condition in an if/else statement is enclosed with ________.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "square brackets",
        correct: "C"
    },{
        question: "Arrays in JavaScript can be used to store ________.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D"
    },{
        question: "String values must be enclosed within _________ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parenthesis",
        correct: "C"
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        correct: "D"
    }];

    // variablizing for displayQuestion 
    var lastQuestion = questions.length - 1;
    var currentQuestion = 0;
    var q = questions[currentQuestion];
    function displayQuestion() {
        var q = questions[currentQuestion];
        questionDisplay.innerHTML = q.question;
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    };

    var noMoreQuestions = 1; 
    function checkAnswer(answer) {
        if (answer === questions[currentQuestion].correct){
            results.textContent = "Correct!";
        }else {
            results.textContent = "Sorry that's wrong. The answer was " + questions[currentQuestion].correct + "."; 
            secondsLeft = secondsLeft - 10;
        }
        if(currentQuestion < lastQuestion) {
            currentQuestion++;
            displayQuestion();
        }else{
            quiz.style.display = "none";
            noMoreQuestions = 0;
        }
    };

    var secondsLeft = 75;
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft;

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                userInput();
            }
            if(noMoreQuestions === 0) {
                clearInterval(timerInterval);
                userInput();
            }

        }, 1000);
    }

    function startQuiz() {
        startingScreen.style.display = "none";
        quiz.style.display = "block";
        displayQuestion();
        timer.style.display = "block";
        setTime();
    }
    
    function userInput () {
    userForm.style.display = "block";
    quiz.style.display = "none";
    timer.style.display = "none";
    startingScreen.style.display = 'none';
    scoreReport.textContent = "Your final score is " + secondsLeft + "!";
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var savedInitials = document.querySelector("#initials").value;
        scoreBoard (savedInitials);
    });
}

function scoreBoard (savedInitials) {
    userForm.style.display = "none";
    highscores.style.display = "block";
       var existingInitials = localStorage.getItem('initials'); 
       var existingScore = localStorage.getItem('scores');
       existingInitials = existingInitials ? existingInitials.split(',') : [];
       existingScore = existingScore ? existingScore.split(',') : [];
       existingInitials.push(savedInitials);
       existingScore.push(secondsLeft);
       console.log(existingInitials);
       console.log(existingScore);
    
}
    

 

    start.addEventListener("click", startQuiz);
  






// need to figure out how to hold mutliple at once
// get buttons in a line
// organize them by score 
// make buttons work
// make highscore link work 
// add some comments 
// make a read me 
// submit to gitHub, make website & submit to Canvas
// send to kellen :) 

// function userInput () {
//     userForm.style.display = "block";
//     quiz.style.display = "none";
//     timer.style.display = "none";
//     scoreReport.textContent = "Your final score is " + secondsLeft + "!";
//     submitBtn.addEventListener("click", function(event) {
//         event.preventDefault();
//         var initials = document.querySelector("#initials").value;
//         var scores = [];

//         localStorage.setItem("initials", initials);
//         localStorage.setItem("score", secondsLeft);
//         scoreBoard ();
//     });
// }

// function scoreBoard () {
//     var savedInitials = localStorage.getItem("initials");
//     var savedScore = localStorage.getItem("score");
//     userForm.style.display = "none";
//     highscores.style.display = "block";
//     scoreList.textContent = savedInitials + " - " + savedScore;
    
// }

// function userInput () {
//     userForm.style.display = "block";
//     quiz.style.display = "none";
//     timer.style.display = "none";
//     startingScreen.style.display = 'none';
//     scoreReport.textContent = "Your final score is " + secondsLeft + "!";
//     var count = 1; 
//     submitBtn.addEventListener("click", scoreBoard());
// }

// function scoreBoard () {
//    var savedInitials = document.querySelector("#initials").value;
//    var existingInitials = localStorage.getItem('initials'); 
//    var existingScore = localStorage.getItem('scores');
//    existingInitials = existingInitials ? existingInitials.split(',') : [];
//    existingScore = existingScore ? existingScore.split(',') : [];
//    existingInitials.push(savedInitials);
//    existingScore.push(secondsLeft);
//    console.log(existingInitials);
//    console.log(existingScore);


// }





























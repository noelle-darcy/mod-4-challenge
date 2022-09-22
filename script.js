// Starting Screen

// Timer

// Scoreboard

// Quiz
var startingScreen = document.getElementById("startingScreen");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionDisplay = document.getElementById("questionDisplay");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var results = document.getElementById("results");

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

    var lastQuestion = questions.length - 1;
    var currentQuestion = 0;
    var q = questions[currentQuestion];
   
    start.addEventListener("click",startQuiz);

    function displayQuestion() {
        var q = questions[currentQuestion];
        questionDisplay.innerHTML = q.question;
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    };

    function checkAnswer(answer) {
        if (answer == q.correct){
            results.textContent = "Correct!";
        }else {
            results.textContent = "Sorry that's wrong. The answer was " + answer + "."; 
            // subtract time from timer 
        }
        if(currentQuestion < lastQuestion) {
            currentQuestion++;
            displayQuestion();
        }else{
            quiz.style.display = "none";
        }
    };

    function startQuiz() {
        startingScreen.style.display = "none";
        quiz.style.display = "block";
        displayQuestion();
    }

    displayQuestion();































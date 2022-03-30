//Question bank
var questionBank = [
    {
        question : 'Question 1',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 2',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 3',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 4',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 5',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//Function to display questions
function displayQuestion() {
    for (var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    questionCount.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//Function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    } else {
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//Function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    } else {
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//Click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//Function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    
    for(var a=0;a<questionBank.length;a++) {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

// Countdown timer

var timeleft = 60;
var downloadTimer = setInterval(function(){
    if(timeleft === -1){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Times Up!";
        alert(`Oh no! You've have run out of time. Hit the reset button and try again.`); // displays prompt message on screen to the user
        throw `Player ran out of time. Need to restart the game`; // logs an error in the console
    } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
}, 1000);


function refresh(){
    window.location.reload("Refresh")
  }
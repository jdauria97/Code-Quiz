// DEPENDENCIES

// dependencies for main page
var startBtn = document.querySelector('#startBtn');
var timerDisplay = document.querySelector('#time');
var currentQuestion = 0
var question = document.querySelector("#questions");
var options = document.querySelector("#options");
var timeLeft = 60;

// dependencies for scoreboard page


var body = document.body;
var h1El = document.createElement("h1");
var lastScore = document.createElement("div");
h1El.textContent = "High-Score List";
var scoreInput= document.createElement("input");
scoreInput.type = "text";
scoreInput.id = "playerInput";
scoreInput.placeholder = "Enter your name and score here, and hit 'enter'.";
var scoreForm = document.createElement("form");
scoreForm.id = "infoForm";
scoreForm.method = "post";
var scoreList = document.createElement("ul");
var scoreCount = document.createElement("div");
var refreshInfo = document.createElement("h2");
refreshInfo.textContent = "Refresh page to play again!";




// list of questions
var questionList = [{
    q: "Where is the JavaScript page linked?",
    a: [{ text: "In the 'head' element", isCorrect: false },
    { text: "At the bottom of the 'body' element", isCorrect: true },
    { text: "In the 'CSS' file", isCorrect: false },
    { text: "On Kanye's twitter page", isCorrect: false }
    ]
},
{
    q: "What is JavaScript used for?",
    a: [{ text: "To give the webpage interactive functionality", isCorrect: true },
    { text: "To style the aesthetics of the webpage", isCorrect: false },
    { text: "To update your TikTok algorithm", isCorrect: false },
    { text: "To manage cross-server databases", isCorrect: false }
    ]
},
{
    q: "How do you call a function named 'someFunction?",
    a: [{ text: "call function someFunction<>", isCorrect: false },
    { text: "call someFunction[]", isCorrect: false },
    { text: "What are you, 73? just text it", isCorrect: false },
    { text: "someFunction()", isCorrect: true }
    ]
},
];


// FUNCTIONS

function startGame () {
    function displayQuestion () {

        question.textContent = questionList[currentQuestion].q;
        options.innerHTML = "";
    
        for (let i = 0; i < questionList[currentQuestion].a.length; i++) {
            var choiceDiv = document.createElement("div");
            var choice = document.createElement("input");
            var choiceLabel = document.createElement("label");
    
            choice.type = "button";
            choice.name = "answer";
            choice.value = i;
            choice.addEventListener("click", checkAnswer)
            choiceLabel.textContent = questionList[currentQuestion].a[i].text;
    
            choiceDiv.appendChild(choice);
            choiceDiv.appendChild(choiceLabel);
            options.appendChild(choiceDiv);
        }
    }
    
    function nextQuestion () {
        if (currentQuestion < questionList.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            loadScoreboard();
        }
    }
    
    function checkAnswer (event) {
        event.preventDefault()
        var chosenAnswer = event.target.value
        if (questionList[currentQuestion].a[chosenAnswer].isCorrect) {
            console.log("correct")
            nextQuestion();
        } else {
            timeLeft -= 10;
        }
    }
            
    var timeInterval = setInterval( function() {
        if (timeLeft >= 0) {
            timerDisplay.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            loadScoreboard();
        }
    }, 1000);
    

    // SCOREBOARD

    function loadScoreboard () {
        clearInterval(timeInterval);
        lastScore.textContent = "Your score is: " + timeLeft + "!";
        document.body.innerHTML = "";
        body.appendChild(h1El);
        body.appendChild(lastScore);
        body.appendChild(scoreCount)
        body.appendChild(scoreForm);
        scoreForm.appendChild(scoreInput);
        body.appendChild(scoreCount);
        body.appendChild(scoreList);





        var scores = [];

        function renderScores() {

        scoreList.innerHTML = "";
        scoreCount.textContent = " Scores recorded: " + scores.length;

        for (var i = 0; i < scores.length; i++) {
            var score = scores[i];

            var li = document.createElement("li");
            li.textContent = score;
            li.setAttribute("data-index", i);

            var button = document.createElement("button");
            button.textContent = "Remove Score";

            li.appendChild(button);
            scoreList.appendChild(li);
        }
        }

        function init() {

        var storedscores = JSON.parse(localStorage.getItem("scores"));

        if (storedscores !== null) {
            scores = storedscores;
        }

        renderScores();
        }

        function storescores() {

        localStorage.setItem("scores", JSON.stringify(scores));
        }

        scoreForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var scoreText = scoreInput.value.trim();

        if (scoreText === "") {
            return;
        }

        scores.push(scoreText);
        scoreInput.value = "";

        storescores();
        renderScores();
        });

        scoreList.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches("button") === true) {

            var index = element.parentElement.getAttribute("data-index");
            scores.splice(index, 1);

            storescores();
            renderScores();
        }
        });


        init()






    }

    displayQuestion ();
    
}


// USER INTERACTIONS

// user presses start button
startBtn.addEventListener("click", function() {
    console.log("start button works")
    startGame ();
});


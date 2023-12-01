// DEPENDENCIES

// dependencies for main page
var startBtn = document.querySelector('#startBtn');
var viewScrBtn = document.querySelector('#viewHighScrBtn');
var timerDisplay = document.querySelector('#time');
var currentQuestion = 0
var score = 0
var question = document.querySelector("#questions");
var options = document.querySelector("#options");
var timeLeft = 60;

// dependencies for scoreboard page

var scoreInput
var initialsInput
var submitBtn
var resetBtn
var body = document.body;
var h1El = document.createElement("h1");
var scoreInfo = document.createElement("div");
var lastScore = document.createElement("div");

h1El.textContent = "High-Score List";



// DATA

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
    
    function loadScoreboard () {
        clearInterval(timeInterval);
        scoreInfo.textContent = "Your score is: " + timeLeft + "!";
        // document.body.innerHTML = "";
        body.appendChild(h1El);
        body.appendChild(scoreInfo);
    
    }

    viewScrBtn.addEventListener("click", function() {
        console.log("view score button works")
        loadScoreboard();
    });

    displayQuestion ();
    
}


// USER INTERACTIONS

// user presses start button
startBtn.addEventListener("click", function() {
    console.log("start button works")
    startGame ();
});

// user presses view high-score button


// user presses submit high-score button


// user presses reset high-score button
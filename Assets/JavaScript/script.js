// DEPENDENCIES

// start button
var startBtn = document.querySelector('#startBtn');
//view high-score button
var viewScrBtn = document.querySelector('#viewHighScrBtn');
// timer display
var timerDisplay = document.querySelector('#time');
//submit high-score button

//reset high-score button



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
    { text: "To update you TikTok algorithm", isCorrect: false },
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

var currentQuestion = 0
var score = 0


// score

// high-scores 



// FUNCTIONS

function displayQuestion () {
    var timeLeft = 20;
    var question = document.querySelector("#questions");
    var options = document.querySelector("#options");
    question.textContent = questionList[currentQuestion].q;
    options.innerHTML = "";

    for (let i = 0; i < questionList[currentQuestion].a.length; i++) {
        var choiceDiv = document.createElement("div");
        var choice = document.createElement("input");
        var choiceLabel = document.createElement("label");

        choice.type = "button";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = questionList[currentQuestion].a[i].text;

        choiceDiv.appendChild(choice);
        choiceDiv.appendChild(choiceLabel);
        options.appendChild(choiceDiv);
    }
}



function startGame () {
    displayQuestion ();
}

// function startTimer () {

// }



// USER INTERACTIONS

// user presses start button
startBtn.addEventListener("click", function() {
    console.log("start button works")
    startGame ();
});

// user presses view high-score button
viewScrBtn.addEventListener("click", function() {
    console.log("view score button works")
});

// user presses submit high-score button


// user presses reset high-score button
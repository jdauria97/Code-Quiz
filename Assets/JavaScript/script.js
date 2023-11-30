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
var questions = [{
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

// list of answers

// timer

// score

// high-scores 



// FUNCTIONS

function displayQuestion () {

}

function startGame () {

}

function startTimer () {

}



// USER INTERACTIONS

// user presses start button
startBtn.addEventListener("click", function() {
    console.log("start button works")
});

// user presses view high-score button
viewScrBtn.addEventListener("click", function() {
    console.log("view score button works")
});

// user presses submit high-score button


// user presses reset high-score button
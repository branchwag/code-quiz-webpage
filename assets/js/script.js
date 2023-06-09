//making the content box a variable to easily put stuff in it
var contentBox = document.querySelector("#contentbox");

//store questions as an array of objects
//Thanks to w3schools for this quiz content: https://www.w3schools.com/js/js_quiz.asp

var quizQandAs = [
	{
		question: "Inside which HTML element do we put our JavaScript?",
		answers: {
			a: 'scripting', 
			b: 'script',
			c: 'javascript',
            d: 'js'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the correct JavaScript syntax to change the content of a <p> html element with the id 'demo'?",
		answers: {
			a: '#demo.innerHTML = "Hello World!',
			b: 'document.getElementByName("p").innerHTML = "Hello World!";',
			c: 'document.getElementById("demo").innerHTML = "Hello World!;',
            d: 'document.getElement("p").innerHTML = "Hello World!;'
		},
		correctAnswer: 'c'
	},
    {
		question: "What is the correct syntax for referring to an external script?",
		answers: {
			a: 'script src="script.js"',
			b: 'script href="script.js"',
			c: 'script id="script.js"',
            d: 'script name="script.js"'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you write 'Hello World' in an alert box?",
		answers: {
			a: 'msgBox("Hello World");',
			b: 'alertBox("Hello World")',
			c: 'msg("Hello World")',
            d: 'alert("Hello World")'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you create a function in Javascript?",
		answers: {
			a: 'function myFunction()',
			b: 'function = myFunction()',
			c: 'function: myFunction()',
            d: 'declare myFunction()'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you write an IF statement in Javascript?",
		answers: {
			a: 'if i is greater than 5',
			b: 'if i then 5',
			c: 'if (i > 5)',
            d: 'if 5 then'
		},
		correctAnswer: 'c'
	},
    {
		question: "How does a FOR loop start?",
		answers: {
			a: 'for i = 1 to 5',
			b: 'for (i = 0; i <=5; i++)',
			c: 'for (i <==5; i++)',
            d: 'for (i = 0; i <=5)'
		},
		correctAnswer: 'b'
	},
    {
		question: "How do you add a comment in JavaScript?",
		answers: {
			a: '//This is a comment',
			b: 'This is a comment',
			c: 'ThIsIsaCoMmEnT',
            d: '++ThisIsaComment'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you round the number 7.25 to the nearest integer?",
		answers: {
			a: 'round(7.25)',
			b: 'Math.rnd(7.25)',
			c: 'rnd(7.25)',
            d: 'Math.round(7.25)'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you detect the client's browser name?",
		answers: {
			a: 'browser.name',
			b: 'browserName',
			c: 'navigator.appName',
            d: 'client.navName'
		},
		correctAnswer: 'c'
	},
];

//just checking number of questions to make sure we have 10 questions
////console.log(quizQandAs.length);

//variable to determine current question we are on
var questionCount = 0;

//score and timer
var score = 0;
var secondCount = 120;
var timerRunOut = false;
var endGameRun = 0;

//storing results
var resultsStorage = new Array();

resetEndGameRun();

function checkingIfOkaytoMakeQuestion () {
    if (secondCount < 0) {
        return
    }
    else {
        return makeQuestion();
    }
}

//rendering question and its answers onto the page, then listening for clicks. 
function makeQuestion() {

    //console.log(questionCount);
    // //console.log("the quiz length minus 1 is " + (quizQandAs.length - 1));

    //if there are no further questions to make, we need to stop the quiz 
    // logic issss to check for the length of the question array quizQandAs and runs this cycle for its length

    //check not only question count but if endgame has run
    ////console.log("The endGameRun variable is " + endGameRun)

    //checks if we have reached the end of the questions
    if (questionCount > (quizQandAs.length - 1) && (endGameRun < 1)) {
        ////console.log("The part of the makeQuestion function that causes the game to End has run");
    return endGame();}

    else {
        //wipe content box clean
        contentBox.innerHTML = "";

        //wipe feedback box clean
        feedback.innerHTML = "";

        //GET THE QUESTION AND ANSWER CONTENT

        //create new question content
        var newHeader = document.createElement("h1");
        newHeader.textContent = quizQandAs[questionCount].question;
        newHeader.id = 'question';
        document.getElementById("contentbox").appendChild(newHeader)

        //making a box to append answers to rather than appending to header
        // <div id="answersbox"></div>
        var answersBox = document.createElement("h1");
        answersBox.id = 'answersbox';
        document.getElementById("question").after(answersBox);

        //MAKING THE ANSWER BUTTONS
        var countOfAnswers = (Object.values(quizQandAs[questionCount].answers).length);
        var answerArray = Object.values(quizQandAs[questionCount].answers);

        for (var i = 0; i < countOfAnswers; i++) {

            //adds answer buttons AFTER the new header question in the answersbox div
            var answerElement = document.createElement("button");
            var uniqueIDvalue = 'answer' + i; //assigns each button unique ID
            answerElement.id = uniqueIDvalue; 

            //populate each answer button with the associated answer in the array for this question
            // var answerTextfromArray = answerArray[i];
            answerElement.innerHTML = answerArray[i].toString();
            // //console.log(typeof(answerArray));

            document.getElementById("answersbox").appendChild(answerElement);

            }
    }
    
return //console.log("The MakeQuestion function has run!");
}

function CheckAnswer(event) {
    //console.log("The CheckAnswer function has run!");
        //take the value contained within the element itself and check it against the question's answer property
        //if answer clicked === current question's answer property
        // create element with Correct text on page
        //increment score if correct

    //check the answer of the current question we are on and compare against answer in button box
    var currentQuestionAnswer = Object.values(quizQandAs[questionCount].correctAnswer);
    var convertedAnswerToString = currentQuestionAnswer.toString();
    var feedbackElement = document.createElement("p");
    
    //CORRECT: if button clicked is an answer button AND the button text equals the right answer for that question, run the things needed for being correct
    if (event.target.id.includes("answer") && (event.target.innerText === quizQandAs[questionCount].answers[convertedAnswerToString])) {
        
        score += 10;
        //update the score paragraph with new text for increased score
        scoreElement.textContent = "Score: " + score;

        //tell user that they got question right by putting in element under question
        // //console.log("You clicked the right button.");
        //take away the buttons so the users can't click them anymore and just show feedback
        document.getElementById("answersbox").innerHTML = "";
        feedbackElement.textContent = "Correct!"
        document.getElementById("feedback").appendChild(feedbackElement);

        questionCount++; //incrementing the question count to prepare for running the makequestion function to populate next question

        //wait here to let the user see the result for a second
    return setTimeout(checkingIfOkaytoMakeQuestion, 1000);
        
        }
    //INCORRECT: if the thing clicked is an answer button and the answer text is not the correct answer for the question, run the things for being incorrect
    else if (event.target.id.includes("answer") && (event.target.innerText !== quizQandAs[questionCount].answers[convertedAnswerToString])) {
        
        //telling user that they got question WRONG
        //console.log("You clicked an answer but it is not right");
        document.getElementById("answersbox").innerHTML = "";
        feedbackElement.textContent = "WRONG"
        document.getElementById("feedback").appendChild(feedbackElement);
        subtractSeconds();
        questionCount++;
        
        //wait here to let the user see the result for a second before going into MakeQuestion
        
    //need to return the updated second count so it can be used by the timer outside this function?
    return setTimeout(checkingIfOkaytoMakeQuestion, 1000);
        
    }
    //accounting for things besides the buttons being clicked
    else {
        //console.log("listening...");
    }

return ;
}

function subtractSeconds() {

    var lostSecondCount = secondCount - 20; 

    //console.log("The subtract seconds function has run!");
    return secondCount = lostSecondCount;
}

function timerFunction() {
    // //console.log("THIS IS THE TIMER FUNCTION");
    
    //using setInterval to make timer
    var intTimerID = setInterval(runSecondsCounter, 1000);
    var timer = document.getElementById("timer");

    function runSecondsCounter() {
        if (endGameRun > 0) {
            clearInterval(intTimerID);
            //console.log("Timer cleared")
        }
        else {
            return secondsCounter();
        }
    }

    function secondsCounter() {
    if (secondCount > 0) {
        secondCount--
        return timer.innerHTML = "Timer:" + secondCount;
    } 
    //else if we still have questions left but the timer is now 0 or below 0 (because the seconds subtraction for incorrect can make it negative)
    else if (secondCount <= 0 && ((questionCount < quizQandAs.length) && (endGameRun < 1)) && timerRunOut === false) {
        timer.innerHTML = "TIMER IS UP!";
        clearInterval(intTimerID);
        timerRunOut = true;
        //console.log("Timer has run out!!! ");
        //console.log("The endgamerun value is  "+ endGameRun);
        //adding a delay here so we can see the timer being up
        return setTimeout(endGame, 1000);   
    }
    
    else {
        return clearInterval(intTimerID); ////console.log("Other secondsCounter scenario has occurred");
    }
    // clearInterval(intTimerID);
    // document.getElementById("contentbox").innerHTML = "TIME IS UP!";
    // document.getElementById("timer").innerHTML = "TIME IS UP!";
}

return // clearInterval(intTimerID); //intTimerID2 = intTimerID;
}

function endGame() {
//trigger by if the timer has run out or if we have run out of questions
//update the page
//take the score and store it 
//console.log("Timer has caused endgame to start!!! ");

////console.log("STOP DA QUIZ!");

//wipe content box clean
contentBox.innerHTML = "";

//wipe feedback box clean
feedback.innerHTML = "";

//wipe timer box clean
//clearTimeout();
timerbox.innerHTML = "";

var newHeader = document.createElement("h1");
newHeader.textContent = "Thanks for playing!";
newHeader.id = 'endtext';
document.getElementById("contentbox").appendChild(newHeader);

//console.log("The endGame function has run and the score is " + score);

//we also need to take the score and allow the user to save it
// your score is blah blah, enter initials and submit it

// Create a form 
var form = document.createElement("form");
form.id = 'form';
document.getElementById("score").appendChild(form);

var initialLabel = document.createElement("Label");
initialLabel.setAttribute("for", "initialBox");
initialLabel.id = 'intinputlabel';
document.getElementById("form").appendChild(initialLabel);

var initialInputBox = document.createElement("INPUT");
initialInputBox.setAttribute("type", "text");
initialInputBox.setAttribute("placeholder", "Input Initials Here");
initialInputBox.id = 'initialinput';
document.getElementById("intinputlabel").after(initialInputBox);

// create a submit button
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Save Score");
submit.id = 'submit';
document.getElementById("initialinput").after(submit);

//GET INITIALS and need to prevent page refresh when hitting submit. Also account for box being blank
var initialInput = document.querySelector("#initialinput");
var submissionResponseEl = document.createElement("p");
//var initials = initialInput.value;
document.querySelector("#feedback").appendChild(submissionResponseEl);

// document.getElementById("submit").addEventListener('click', function logScore(event) {
//     event.preventDefault();
//     //console.log(event);
//     var response = initialInput.value + "! Your score has been saved!";
//     submissionResponseEl.textContent = response;

    //initialInput.value

function displayScoreSubmitMessage(type, message) {
    var submitfeedback = document.createElement("p");
    submitfeedback.id = 'submitfeedback'; 
    document.querySelector("#scorebox").appendChild(submitfeedback);

    document.querySelector("#submitfeedback").textContent = message;
    document.querySelector("#submitfeedback").setAttribute("class", type);
    }

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    var initials = document.querySelector("#initialinput").value;
    
    if (initials === "") {
        displayScoreSubmitMessage("error", "Box cannot be blank");
    }
    
    else {
        displayScoreSubmitMessage("success", "Your score has been saved!");
    // Save initials and score to localStorage 
    localStorage.setItem("initialzz", initials);
    localStorage.setItem("finalScore", score);
    storeScore();
    }
    })

// PLAY AGAIN BUTTON
var playAgainButton = document.createElement("button");
playAgainButton.id = 'playagainbutton'; 
playAgainButton.innerText = "Play Again";
document.querySelector("#feedback").appendChild(playAgainButton);

document.getElementById("playagainbutton").addEventListener('click', resetQuiz);

return endGameRun = endGameRun + 1; 
}

function resetQuiz() {
    resetScore();
    resetQuestionCount();
    resetTimer();
    resetTimerRunout();
    document.querySelector("#feedback").innerHTML = "";
    return runQuiz();
}

//ensure score, timer, and question count are reset
function resetScore() {
    scorebox.innerHTML = "";
    return score = 0;
}

function resetQuestionCount() {
    return questionCount = 0;
}

function resetTimer() {
    return secondCount = 120;
}

function resetTimerRunout() {
    return timerRunOut = false;
}

function resetEndGameRun() {
    return endGameRun = 0;
}

//main function below that drives everything for quiz

function runQuiz() {

    //renderhighScores();
    
    //console.log("The runQuiz function has started!");
    //console.log("The endgamerun value is " + endGameRun);
    resetEndGameRun();

    makeQuestion();

    //then put up Timer and Score;

    //TIMER
    //make the timer area
    timerElement = document.createElement("p");
    timerElement.id = 'timer';
    document.getElementById("timerbox").appendChild(timerElement);
    timer.innerHTML = "Timer:" + secondCount;

    //run the timer function
    timerFunction();

    //SCORE
    //<p>Current score: </p>
    scoreElement = document.createElement("p");
    scoreElement.id = 'score';
    scoreElement.textContent = "Score: " + score;
    document.getElementById("scorebox").appendChild(scoreElement);

    //now we listen for clicks and when the user clicks, we run CheckAnswer which then kicks off everything else
    document.addEventListener('click', runCheckAnswer);

    return //console.log("The runQuiz function has run");
}

function storeScore() {
    //Retrieve the stuff
  var initialsText = localStorage.getItem("initialzz");
  var highscoreText = localStorage.getItem("finalScore");

  //take both and add to resultsStorage
  var highScoreEntry = {
        initialz: initialsText,
        scorelog: highscoreText
  };

  resultsStorage.push(highScoreEntry);
  return ////console.log("STORESCORE HAS RUN");

}

//SEE HIGH SCORES
function renderhighScores() {

    //console.log(resultsStorage);

  //clear content box, score box, and timer box
  //then in content box create and append scores from dictionary

    //wipe content box clean
    document.getElementById("contentbox").innerHTML = "";

    //wipe feedback box clean
    document.getElementById("feedback").innerHTML = "";

    //wipe score box clean
    document.getElementById("scorebox").innerHTML = "";

    //wipe timer box clean
    document.getElementById("timerbox").innerHTML = "";

    //NEED TO RECREATE THE PLAY AGAIN BUTTON
    var playAgainButton = document.createElement("button");
    playAgainButton.id = 'playagainbutton'; 
    playAgainButton.innerText = "Play Again";
    document.querySelector("#feedback").appendChild(playAgainButton);

    document.getElementById("playagainbutton").addEventListener('click', resetQuiz);

    //for each item in the resultsStorage, print it on the page like the answers
    //if resultsStorage has stuff in it, print on page, otherwise put element that says No scores yet

     for (var i = 0; i < resultsStorage.length; i++) {

         var highScoreElement = document.createElement("p");
         var uniqueIDvalue = 'entry' + i; //assigns each button unique ID
         highScoreElement.id = uniqueIDvalue; 
        //cleans up result retrieved and puts it on page
        //  highScoreElement.innerHTML = ((((JSON.stringify(resultsStorage[i])).replace("\{\"initialz\"\:\"", "")).replace("\",\"", " ")).replace("log\"\:\"", " ")).replace("\"\}", "");
         highScoreElement.innerText = "Initials: " + resultsStorage[i].initialz + " Score: " + resultsStorage[i].scorelog;
        //  //console.log(resultsStorage[i]);
         ////console.log(typeof(resultsStorage[i].initialz))
        //  //console.log(resultsStorage[i].finalScore)

         document.getElementById("contentbox").appendChild(highScoreElement);

         }
    return;
  
  }

//Initialization
//Listen for button click to start the game
document.getElementById("startbutton").addEventListener('click', runQuiz);

//listen for button click to go to high scores
document.getElementById("gethighscores").addEventListener('click', checkForHighScores);

function checkForHighScores() {
    if (resultsStorage.length < 1) {
    //wipe content box clean
    document.getElementById("contentbox").innerHTML = "";

    //wipe feedback box clean
    document.getElementById("feedback").innerHTML = "";

    //wipe score box clean
    document.getElementById("scorebox").innerHTML = "";

    //wipe timer box clean
    document.getElementById("timerbox").innerHTML = "";

    //create new header telling user there is no score yet
    var newHeader = document.createElement("h1");
    newHeader.textContent = "No Scores Yet!";
    newHeader.id = 'noscores';
    document.getElementById("contentbox").appendChild(newHeader)

    //NEED TO RECREATE THE PLAY AGAIN BUTTON
    var playAgainButton = document.createElement("button");
    playAgainButton.id = 'playagainbutton'; 
    playAgainButton.innerText = "Play Again";
    document.querySelector("#feedback").appendChild(playAgainButton);

    document.getElementById("playagainbutton").addEventListener('click', resetQuiz);
    }

    else {
        return renderhighScores();
    }
}

function runCheckAnswer(event) {
if (questionCount <= (quizQandAs.length - 1)) {
    return CheckAnswer(event); 
}

else {
    return //console.log("No more checking of answers");
}}
//making the content box a variable to easily put stuff in it
var contentBox = document.querySelector("#contentbox");

//store questions as an array of objects

var quizQandAs = [
	{
		question: "What is 10/2?",
		answers: {
			a: '7',
			b: '5',
			c: '115',
            d: '130'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10',
            d: '130'
		},
		correctAnswer: 'c'
	}
];

var questionCount = 0;
var currentQuestion = quizQandAs[questionCount];


//rendering question and its answers onto the page
function makeQuestion() {
    
    //wipe content box clean
    contentBox.innerHTML = "";

    //GET THE QUESTION AND ANSWER CONTENT

    //create new question content
    var newHeader = document.createElement("h1");
    newHeader.textContent = currentQuestion.question;
    newHeader.id = 'question';
    document.getElementById("contentbox").appendChild(newHeader)

    //MAKING THE ANSWER BUTTONS
    var countOfAnswers = (Object.values(currentQuestion.answers).length);
    var answerArray = Object.values(currentQuestion.answers);

    for (var i = 0; i < countOfAnswers; i++) {

    //append answers to the new header question 
    var answerElement = document.createElement("button");
    var uniqueIDvalue = 'answer' + i; //assigns each button unique ID
    answerElement.id = uniqueIDvalue; 

    //answerElement.innerHTML = "answer1";
    answerElement.innerHTML = answerArray[i]

    document.getElementById("question").appendChild(answerElement);
    }

return;
}

function CheckAnswer (event) {
        //take the value contained within the element itself and check it against the question's answer property
    // if answer clicked === current question's answer property
        // create element with Correct text on page
        //increment score

    //check the answer of the current question we are on and compare against answer in box
    var currentQuestionAnswer = Object.values(currentQuestion.correctAnswer);
    var convertedAnswerToString = currentQuestionAnswer.toString();
    
    //if button is an answer button AND criteria checks out, do the things
    if (event.target.id.includes("answer") && (event.target.innerText === currentQuestion.answers[convertedAnswerToString])) {
        console.log("You clicked the right button");
        }
    else if (event.target.id.includes("answer") && (event.target.innerText !== currentQuestion.answers[convertedAnswerToString])) {
        console.log("You clicked an answer but it is not right");
    }
    else {
        console.log("You are not clicking on any answers");
    }

return console.log("The checkAnswer function has run!");
}


function startQuiz() {
    //add some logic that for the length of the question array quizQandAs and runs this cycle for its length
    makeQuestion();
    document.addEventListener('click', CheckAnswer);
    //questionCount++;

    return console.log("the startQuiz function has run.");
}

//Initialization
//Listen for button click to start the game
document.getElementById("startbutton").addEventListener('click', startQuiz);


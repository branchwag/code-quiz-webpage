//making the content box a variable to easily put stuff in it
var contentBox = document.querySelector("#contentbox");

//store questions as an array of objects

var quizQandAs = [
	{
		question: "What is 10/2?",
		answers: {
			a: '7',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

//rendering question and its answers onto the page
function makeQuestion() {
    
    //wipe content box clean
    contentBox.innerHTML = "";

    //GET THE QUESTION AND ANSWER CONTENT
        //the question we are on needs to be a variable, value a for loop to cycle through questions

    var currentQuestion = quizQandAs[0];
    // change above to for loop - for answers under question, make buttons

        //create new question content
        var newHeader = document.createElement("h1");
        newHeader.textContent = quizQandAs[0].question;
        newHeader.id = 'question';
        document.getElementById("contentbox").appendChild(newHeader)

    //MAKING THE ANSWER BUTTONS
    var countOfAnswers = (Object.values(currentQuestion.answers).length);
    var answerArray = Object.values(currentQuestion.answers);

    // console.log(answerArray);
    // console.log(typeof(answerArray));
    // console.log(answerArray[2]);

    //prints answers
    //so what do we need to do with each answer? MAKE BUTTONSSSS instead of logging
    for (var i = 0; i < countOfAnswers; i++) {

    //append answers to the new header 
    var answerElement = document.createElement("button");
    answerElement.id = 'answer';

    //answerElement.innerHTML = "answer1";
    answerElement.innerHTML = answerArray[i]

    document.getElementById("question").appendChild(answerElement);
    }



    


return;
}

//write checkAnswer function

function checkAnswer() {
    console.log("This is the check answer function!")
    
}


function startQuiz() {
    
    makeQuestion();
    //checking for a submitted answer after question has been created
    //document.getElementById("answer").addEventListener('click', checkAnswer);

    return console.log("the startQuiz function has run.");
}

//Initialization
//Listen for button clicks
//starting the game
document.getElementById("startbutton").addEventListener('click', startQuiz);


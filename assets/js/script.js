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
    newHeader.textContent = quizQandAs[0].question;
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

function testFunction() {
    console.log("The testFunction has run");
}

//write checkAnswer function

function listenForAnswer() {
    //checking for a submitted answer after question has been created
    // need to find a way of checking for each button uniquely. aka tell which one was clicked
    // for every answer button created, listen
    answersToCheck = "answer0";
    //something needs to return a string here

    //document.getElementById("answer1").addEventListener('click', checkAnswer);
    document.getElementById(answersToCheck).addEventListener('click', testFunction);

    //take the value contained within the element itself and check it against the question's answer property
    // if answer clicked === question's answer property
        // create element with Correct text on page
        //increment score

return console.log("The listenForAnswer function has run!");
}


function startQuiz() {
    
    makeQuestion();
    questionCount++;
    listenForAnswer();
    //check stuff and give score
    //then 
    //makeQuestion();
    //questionCount++;

    //add some logic that for the length of the question array quizQandAs and runs this cycle for its length



    return console.log("the startQuiz function has run.");
}

//Initialization
//Listen for button clicks
//starting the game
document.getElementById("startbutton").addEventListener('click', startQuiz);


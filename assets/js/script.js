//making the content box a variable to easily put stuff in it
var contentBox = document.querySelector("#contentbox");

//store questions as an array of objects

var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
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
    //write for loop to do this
    //for question in myQuestions

    //wipe content box clean
    contentBox.innerHTML = "";

    //create new content
    var newHeader = document.createElement("h1");
    newHeader.textContent = "Question 1!";
    newHeader.id = 'question';
    document.getElementById("contentbox").appendChild(newHeader)

    //append answers to the new header 
    var answerElement = document.createElement("button");
    answerElement.id = 'answer';
    answerElement.innerHTML = "answer1";
    document.getElementById("question").appendChild(answerElement);

    return ;
}


//write checkAnswer function

function checkAnswer() {
    console.log("This is the check answer function!")
    
}


function startQuiz() {
    
    makeQuestion();
    //checking for a submitted answer after question has been created
    document.getElementById("answer").addEventListener('click', checkAnswer);

    return console.log("the startQuiz function has run.");
}

//Initialization
//Listen for button clicks
//starting the game
document.getElementById("startbutton").addEventListener('click', startQuiz);


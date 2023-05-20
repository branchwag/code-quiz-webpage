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
		question: "What is your mom's name?",
		answers: {
			a: 'Sally',
			b: 'Jim',
			c: 'Mam',
            d: 'OhNo'
		},
		correctAnswer: 'c'
	}
];

//variable to determine current question
var questionCount = 0;

//score and timer
var score = 0;
var timer = 100;

//rendering question and its answers onto the page
function makeQuestion() {

    //wipe content box clean
    contentBox.innerHTML = "";

    //wipe feedback box clean after some time
    delay(1000);
    feedback.innerHTML = "";

    //GET THE QUESTION AND ANSWER CONTENT

    //create new question content
    var newHeader = document.createElement("h1");
    newHeader.textContent = quizQandAs[questionCount].question;
    newHeader.id = 'question';
    document.getElementById("contentbox").appendChild(newHeader)

    //MAKING THE ANSWER BUTTONS
    var countOfAnswers = (Object.values(quizQandAs[questionCount].answers).length);
    var answerArray = Object.values(quizQandAs[questionCount].answers);

    for (var i = 0; i < countOfAnswers; i++) {

    //append answers to the new header question 
    var answerElement = document.createElement("button");
    var uniqueIDvalue = 'answer' + i; //assigns each button unique ID
    answerElement.id = uniqueIDvalue; 

    //populate each answer button with the associated answer in the array for this question
    answerElement.innerHTML = answerArray[i]

    document.getElementById("question").appendChild(answerElement);
    }

    document.addEventListener('click', CheckAnswer);

return;
}

//little delay function for letting user see result before moving on to next question
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


function CheckAnswer(event) {

        //take the value contained within the element itself and check it against the question's answer property
    // if answer clicked === current question's answer property
        // create element with Correct text on page
        //increment score if correct

    //check the answer of the current question we are on and compare against answer in box
    var currentQuestionAnswer = Object.values(quizQandAs[questionCount].correctAnswer);
    var convertedAnswerToString = currentQuestionAnswer.toString();
    var feedbackElement = document.createElement("p");
    
    //if button is an answer button AND criteria checks out, do the things
    if (event.target.id.includes("answer") && (event.target.innerText === quizQandAs[questionCount].answers[convertedAnswerToString])) {
        questionCount++;
        score += 10;
        //update the score paragraph with new text for score
        scoreElement.textContent = "Current score: " + score;

        //telling user that they got question right
        console.log("You clicked the right button.");
        feedbackElement.textContent = "Correct!"
        document.getElementById("feedback").appendChild(feedbackElement);
        //wait here
        delay(4000);
        return makeQuestion();
        
        }
    else if (event.target.id.includes("answer") && (event.target.innerText !== quizQandAs[questionCount].answers[convertedAnswerToString])) {
        console.log("You clicked an answer but it is not right");
        questionCount++;
        console.log(questionCount);
    }
    else {
        console.log("listening...");
    }

return ;
}


function startQuiz() {
    //add some logic that for the length of the question array quizQandAs and runs this cycle for its length
    makeQuestion();
    // putupTimerandScore();
    //<p>Current score: </p>
    scoreElement = document.createElement("p");
    scoreElement.textContent = "Current score: " + score;
    document.getElementById("scorebox").appendChild(scoreElement);

    return console.log("the startQuiz function has run.");
}

//Initialization
//Listen for button click to start the game
document.getElementById("startbutton").addEventListener('click', startQuiz);


function validateAnswer(event) {
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
    // console.log("You clicked the right button.");
    //take away the buttons so the users can't click them anymore and just show feedback
    document.getElementById("answersbox").innerHTML = "";
    feedbackElement.textContent = "Correct!"
    document.getElementById("feedback").appendChild(feedbackElement);

    questionCount++; //incrementing the question count to prepare for running the makequestion function to populate next question

    //wait here to let the user see the result for a second
return setTimeout(makeQuestion, 1000);
    
    }
//INCORRECT: if the thing clicked is an answer button and the answer text is not the correct answer for the question, run the things for being incorrect
else if (event.target.id.includes("answer") && (event.target.innerText !== quizQandAs[questionCount].answers[convertedAnswerToString])) {
    
    //telling user that they got question WRONG
    console.log("You clicked an answer but it is not right");
    document.getElementById("answersbox").innerHTML = "";
    feedbackElement.textContent = "WRONG"
    document.getElementById("feedback").appendChild(feedbackElement);
    subtractSeconds();
    questionCount++;
    
    //wait here to let the user see the result for a second before going into MakeQuestion
    
//need to return the updated second count so it can be used by the timer outside this function?
return setTimeout(makeQuestion, 1000);
    
}
//accounting for things besides the buttons being clicked
else {
    console.log("listening...");
}
return ;
}

function CheckAnswer(event) {
    console.log("The CheckAnswer function has run!");
        //take the value contained within the element itself and check it against the question's answer property
        //if answer clicked === current question's answer property
        // create element with Correct text on page
        //increment score if correct

        

    if (questionCount > (quizQandAs.length - 1)) {
    return
    else {
    return validateAnswer();
    }
    
    }}
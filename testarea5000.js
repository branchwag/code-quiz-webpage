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
    // console.log(typeof(answerArray));

    document.getElementById("answersbox").appendChild(answerElement);

    }
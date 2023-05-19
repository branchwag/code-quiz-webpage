var questions = {}
var contentBox = document.querySelector("#contentbox");

function makeQuestion() {
    //wipe content box clean
    contentBox.innerHTML = "";
    
    //create new content
    var newHeader = document.createElement("h1");

    newHeader.textContent = "Question 1!";

    return document.getElementById("contentbox").appendChild(newHeader);
}



function startQuiz() {
    
    makeQuestion();

    return console.log("Quiz has started.");
}

//Initialization
//Listen for button clicks
document.querySelector('button').addEventListener('click', startQuiz);
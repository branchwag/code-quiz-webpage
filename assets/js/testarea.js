    // const textnode = document.createTextNode("Answer1");
    // answerElement.appendChild(textnode);

    //rendering question and its answers onto the page
function ORIGINALmakeQuestion() {
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

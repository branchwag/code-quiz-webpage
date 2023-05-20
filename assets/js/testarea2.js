var quizQandAs = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115',
            d: '110'
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

console.log("Hello!");

console.log(quizQandAs[0].answers);
console.log(typeof(quizQandAs[0].answers));

console.log(quizQandAs[0].answers.a);
console.log(quizQandAs[0].answers.b);
console.log(quizQandAs[0].answers.c);
console.log(quizQandAs[0].answers.d);

console.log(quizQandAs[0].answers.keys);
console.log(quizQandAs[0].answers[0]);
console.log(Object.values(quizQandAs[0].answers));
console.log(typeof(Object.values(quizQandAs[0].answers)));
console.log(quizQandAs[0].answers.values);
console.log(quizQandAs[0].answers.length);
//count of answers for the question
console.log(Object.values(quizQandAs[0].answers).length);

// for (properties in quizQandAs[0].answers) {
//     var count = count + 1;
    
//   }
  
// console.log(count);


    // console.log(answerArray);
    // console.log(typeof(answerArray));
    // console.log(answerArray[2]);


        // console.log(event.target);
    // console.log(typeof(event.target));
    // console.log(event);  

    // function testFunction() {
    
// return console.log("The testFunction has run");
// }

//write checkAnswer function

function listenForAnswer() {
    //checking for a submitted answer after question has been created
    // need to find a way of checking for each button uniquely. aka tell which one was clicked
    // for every answer button created, listen
    // answersToCheck = "answer0";
    //something needs to return a string here

    //document.getElementById("answer1").addEventListener('click', checkAnswer);
    // document.getElementById(answersToCheck).addEventListener('click', testFunction);

return console.log("The listenForAnswer function has run!");
}

    // console.log(event);
    //console.log(event.target.innerText);
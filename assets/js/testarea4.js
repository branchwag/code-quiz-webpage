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

console.log(quizQandAs[0].correctAnswer);
console.log(typeof(quizQandAs[0].correctAnswer)); //string

console.log(currentQuestion.correctAnswer);
console.log(typeof(currentQuestion.correctAnswer));

// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

  console.log(Object.values(currentQuestion.correctAnswer));
  console.log(Object.keys(currentQuestion.correctAnswer).find(key => object[key] === value));


      // console.log(typeof(currentQuestionAnswer));

    // console.log(Object.values(currentQuestion.correctAnswer));
    console.log(Object.keys(currentQuestionAnswer));
    currentQuestion.answers


        // console.log(event);
    // console.log(event.target.innerText);
    // console.log(typeof(event.target.innerText));

    console.log(currentQuestionAnswer); // gets b
    console.log(typeof(currentQuestionAnswer));

        // console.log(currentQuestion.answers.b); // gets 5

    //since we have b, go to the cuurent question and for the keys select value for b
    // console.log(Object.keys(currentQuestion.answers));

    // console.log(event.target.innerText);
    
    //problem is that a string does not equal an object! OR KEY VS PROP


    console.log(convertedAnswerToString);
    console.log(currentQuestion.answers[convertedAnswerToString]);

    console.log(currentQuestion.answers[convertedAnswerToString]);
    console.log(typeof(currentQuestion.answers[convertedAnswerToString]));
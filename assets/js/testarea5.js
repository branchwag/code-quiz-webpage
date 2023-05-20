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

var currentQuestion = quizQandAs[1];

// console.log(currentQuestion);

console.log(currentQuestion.question);

    // console.log(questionCount);
    // console.log(score);

        // console.log(questionCount);
    // console.log(currentQuestion);
    // console.log(newHeader.textContent);

    // console.log(questionCount);

    // console.log(score);


    //little delay function for letting user see result before moving on to next question
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

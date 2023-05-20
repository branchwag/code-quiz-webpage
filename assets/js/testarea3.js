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

var countOfAnswers = (Object.values(quizQandAs[0].answers).length);

var answerArray = Object.values(quizQandAs[0].answers);

for (var i = 0; i < countOfAnswers; i++) {
    
    console.log(answerArray[i]);

  }
//prints answers
//so what do we need to do with each answer? MAKE BUTTONSSSS

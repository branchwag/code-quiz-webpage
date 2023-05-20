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
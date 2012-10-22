var firstDigit, op, secondDigit;
var operator = ["+", "-", "*", "/"];
var questions = [];
var answers = [];
var maxQuestion = 20;
var ques_count = 0;
var questionField;
var answer, wrong;
var answerField;
var quesNumber = document.getElementById("ques_no");
var score = 0, timeout = 0;
var wrongAnswers = [];
var time ,t;

for(var i = 0; i <= maxQuestion; i++){
	firstDigit = generateNumber();
	op = generateNumber() % 4;
	secondDigit = generateNumber();
	var new_question = firstDigit + ' ' + operator[op] + ' ' + secondDigit;
	questions.push(new_question);
	answer = eval(new_question);
	answers.push(answer);
}

function generateQuestion(){
	ques_count++;
	quesNumber = document.getElementById("ques_no");
	quesNumber.innerHTML = "Ques No." + ques_count + "->";
	questionField = document.getElementById("question");
	questionField.innerHTML = questions[ques_count];
}

// Generates a random number
function generateNumber(){
	return Math.floor((Math.random() * 20) + 1);
}
function newQuestion(){
	answerField = document.getElementById("answer");
	answerField.removeAttribute('disabled');
	time = 10;
	clearTimeout(t);
	t = setInterval(timer, 1000);
	
	if(answerField.value == answers[ques_count]){
		score++;
		console.log(score);
	}
	else {
		wrong = questions[ques_count]+ " = " +answers[ques_count];
		wrongAnswers.push(wrong);
	}
	if(ques_count < maxQuestion)
		generateQuestion();
	else
		displayResult();
	answerField.value ="";
}
function timer() {
	time = time - 1;
	if (time > 0) { 
		timerDiv = document.getElementById('timer');
		timerDiv.innerHTML = "Time left : " + (time) + " secs";
	}
	if (time <= 0) {
		answer_field = document.getElementById('answer'); 
		answer_field.setAttribute('disabled', "disabled");
	}
}
function displayResult(){
	console.log(timeout);
	document.getElementById('replaceDiv').style.display = 'none';
	var output = document.getElementById('output').style.display ='block';
	
	var scoreField = document.getElementById("score");
	scoreField.innerHTML = "Score: <br/>" + score + " out of " + maxQuestion + "<br/>";

	var result_div = document.getElementById("result");
	for(var j = 0; j < wrongAnswers.length; j++){
		new_line = document.createElement("br");
		correct_answer = document.createTextNode(wrongAnswers[j]);
		result_div.appendChild(correct_answer);
		result_div.appendChild(new_line);
	}
}
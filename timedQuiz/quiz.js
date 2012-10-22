var firstDigit, op, secondDigit;
var operator = ["+", "-", "*", "/"];
var maxQuestion = 5;
var ques_count = 0;
var questionField;
var answer, wrong;
var answerField;
var quesNumber = document.getElementById("ques_no");
var score = 0, timeout = 0;
var wrongAnswers = [];
var time ,t;
question_list = []; 

for(var i = 0; i <= maxQuestion; i++){
	var question_object = new Object();
	firstDigit = generateNumber();
	op = generateNumber() % 4;
	secondDigit = generateNumber();
	var new_question = firstDigit + ' ' + operator[op] + ' ' + secondDigit;
	answer = eval(new_question);

	question_object.question = new_question;
	question_object.answer = answer;
	question_list.push(question_object);
}

function generateQuestion(){
	ques_count++;
	quesNumber = document.getElementById("ques_no");
	quesNumber.innerHTML = "Ques No." + ques_count + "->";
	questionField = document.getElementById("question");
	questionField.innerHTML = question_list[ques_count].question;
	
}

// Generates a random number
function generateNumber(){
	return Math.floor((Math.random() * 20) + 1);
}
function newQuestion(){
	answerField = document.getElementById("answer");
	answerField.removeAttribute('disabled');
	time = 5;
	clearTimeout(t);
	t = setInterval(timer, 1000);
	if(answerField.value == question_list[ques_count].answer){
		score++;
	}
	else {
		wrong = question_list[ques_count].question + " = " + question_list[ques_count].answer;
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

//Displays the output
function displayResult(){
	document.getElementById('replaceDiv').style.display = 'none';
	var output = document.getElementById('output').style.display ='block';
	
	var scoreField = document.getElementById("score");
	scoreField.innerHTML = "Score: <br/>" + score + " out of " + maxQuestion + "<br/>";

	var result_div = document.getElementById("result");
	for(var j = 1; j < wrongAnswers.length; j++){
		new_line = document.createElement("br");
		correct_answer = document.createTextNode(wrongAnswers[j]);
		result_div.appendChild(correct_answer);
		result_div.appendChild(new_line);
	}
}
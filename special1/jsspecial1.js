var index = 0;
var timeout = 0;
var answer = new Array();
var correct = 0;
var incorrect = 0;
var n1;
var n2;
var operator;
var wrong_ans1 = new Array();
var wrong_ans2 = new Array();
var correct_answer = new Array();
var chk_operator = new Array();
function generateQuestion(){
	index = index + 1;
	if (index <= 5){
	var sub = document.getElementById("sub");
	sub.style.display='inline';
	var start = document.getElementById("start");
	start.style.display='none';
	var res = document.getElementById("ans");
	res.style.display='inline';	
	questions();
	}
	
	else {
		var res = document.getElementById("ans");
		checkAnswers(res.value);
		clearTimeout(t);
		alert("Test Complete");
		document.write("Correct questions :"+correct+"<br/>");
		document.write("Incorrect questions :"+incorrect+"<br/>");
		document.write("Timeout questions :"+timeout+"<br/> <br/>");
		document.write("Solutions of wrong/timeout questions :<br/>");
		for (var i=0; i< wrong_ans1.length ; i++){
			//document.getElementById("result").innerHTML = n1[i]+" "+n2[i];
			if ((wrong_ans1[i]) != null)
			document.write(+wrong_ans1[i]+" "+ chk_operator[i]+" "+wrong_ans2[i]+" = "+correct_answer[i]+"<br>");
		}
	}
}
function questions(){
	n1 = Math.floor((Math.random() * 20) + 1);
	n2 = Math.floor((Math.random() * 20) + 1);
	op = Math.floor((Math.random() * 4) + 1);
	switch(op){
		case 1:
			document.getElementById("expression").innerHTML = "Ques. "+index+"-> What is "+n1+" + "+n2;
			answer[index] = n1 + n2;
			operator = '+';
			break;
		case 2:
			document.getElementById("expression").innerHTML = "Ques. "+index+"-> What is "+n1+" - "+n2;
			answer[index] = n1 - n2;
			operator = '-';
			break;
		case 3:
			document.getElementById("expression").innerHTML = "Ques. "+index+"-> What is "+n1+" * "+n2;
			answer[index] = n1 * n2;
			operator = '*';
			break;
		case 4:
			document.getElementById("expression").innerHTML = "Ques. "+index+"-> What is "+n1+" / "+n2;
			answer[index] = n1 / n2;
			operator = '/';
			break;
	}
	cdreset();
	countdown();
	var res = document.getElementById("ans");
	res.removeAttribute('disabled');	
	if(index>1)
	checkAnswers(res.value);
	res.value = "";
}

function checkAnswers(n){
	var res = document.getElementById("ans");
	if(n == (answer[index-1])) {
		correct = correct +1;
		document.getElementById("correct").innerHTML = "Correct questions: "+correct;
	}
	else {
		wrong_ans1[index] = n1;
		wrong_ans2[index] = n2;
		correct_answer[index] = answer[index];
		chk_operator[index] = operator;
		incorrect = incorrect +1;
		document.getElementById("incorrect").innerHTML = "Incorrect questions: "+incorrect;
	}
}
var CCOUNT = 10;    
var t, count = CCOUNT;

function countdown() {
        document.getElementById('num1').innerHTML = count+" secs left";
        if (count == 0) {
		var res = document.getElementById("ans");
		res.setAttribute('disabled', "disabled");
		if(res.value=" ") {
			timeout = timeout + 1;
			document.getElementById("timeout").innerHTML = "Timeout questions: "+timeout;
			wrong_ans1[index] = n1;
			wrong_ans2[index] = n2;
			correct_answer[index] = answer[index];
			chk_operator[index] = operator;
		}
        } 
	else {
            count--;
            t = setTimeout("countdown()", 1000);

        }
}   
  
function cdreset() {
        clearTimeout(t);
        count = CCOUNT;
        document.getElementById('num1').innerHTML = count+" secs left";
}


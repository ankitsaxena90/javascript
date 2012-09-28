function formValidation()
{
	var uid = document.registration.userid;
	var uemail = document.registration.email;
	var uname = document.registration.username;
	var passid = document.registration.passid;
	var uhome = document.registration.home;
	var utime = document.registration.time;
	var uchk = document.registration.chk;
	var udesc = document.registration.desc;
	

	var element = document.getElementsByTagName("input");
	var len = element.length;
	for(var i=0; i<len; i++){
		if(element[i].value.length == ""){	
			alert(element[i].name+" should not be empty");
			element[i].focus();break;
		}
	}
	var mailformat = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
	if (!(uemail.value.match(mailformat))){
		alert("Invalid email address. Please enter your correct email address");
		uemail.focus();
		return false;		
	} 
	if(utime.value == "Default"){
		alert('Select your timezone from the list');
		utime.focus();	
		return false;
	}

	var urlPattern = /^(ht|f)tps?:\/\/[a-zA-Z0-9\-\.]+\.([a-z]{2,4})$/;
		if (!(uhome.value.match(urlPattern))){
		alert('Invalid Homepage address. Please enter correct Homepage url.');
		uhome.focus();
		return false;
	} 

	if(udesc.value.length <= 50){
		alert('At least 50 characters are required.');
		udesc.focus();
		return false;
	} 

	if(uchk.checked == false){
		alert("Please confirm your choice for email alerts");
		uchk.focus();
		return false;
	}
	else{
		alert('Form Succesfully Submitted');
		return true;
	}
	
}		

function formValidation()
{
	var utime = document.registration.time;
	var uchk = document.registration.chk;
	var udesc = document.registration.desc;
	
	var element = document.getElementsByTagName("input");
	var len = element.length;
	var flag = 0;
	for(var i=0; i<len; i++){
		if(element[i].value.length == ""){	
			alert(element[i].name+" should not be empty");
			element[i].focus();break;
		}
	}
	if (utime.value == "Default"){
		alert('Select your timezone from the list');
		utime.focus();	
		return false;
	}
	if (udesc.value.length <= 50){
		alert('At least 50 characters are required.');
		udesc.focus();
		return false;
	}
	if (uchk.checked == false){
		alert("Please confirm your choice for email alerts");
		uchk.focus();
		return false;
	}
	
	else {
		alert('Form Succesfully Submitted');
		return true;
	}
	
}		

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

	if(userid_validation(uid)){
	if(ValidateEmail(uemail)){
	if(allLetter(uname)){
	if(passid_validation(passid,7,12)){
	if(timezoneselect(utime)){
	if(homepage(uhome)){
	

	if(chkbox(uchk)){
	if(aboutme(udesc)){
	}
	}
	} 
	}
	} 
	}
	}
	
	}
	return false;

	} 
function userid_validation(uid)
{
	var uid_len = uid.value.length;
	if (uid_len == 0 )
	{
		alert("Login Id should not be empty ");
		uid.focus();
	return false;
	}
	return true;
}
function passid_validation(passid,mx,my){
	var passid_len = passid.value.length;
	if (passid_len == 0 ||passid_len >= my || passid_len < mx){
		alert("Password should not be empty / length be between "+mx+" to "+my);
		passid.focus();
		return false;
	}
		return true;
}
function allLetter(uname){ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters)){
		return true;
	}
	else{
		alert('Username must have alphabet characters only');
		uname.focus();
		return false;
		}
}
function homepage(uhome){ 
	//var home_length = uhome.value.length;
	var urlPattern = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/
	if (uhome.value.match(urlPattern))
		return true;
	else{
		alert("You have entered invalid Homepage url");
		uhome.focus();
		return false;
	}
	
}
function timezoneselect(utime){
	if(utime.value == "Default"){
	alert('Select your timezone from the list');
	utime.focus();
	return false;
	}
	else
	return true;
}
	
function ValidateEmail(uemail){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
		return true;
	else{
		alert("You have entered an invalid email home!");
		uemail.focus();
		return false;
	}
} 
function chkbox(uchk){
	if(uchk.checked == false){
		alert("Please confirm your choice for email alerts");
		uchk.focus();
		return false;
		}
	else return true;
	}
function aboutme(udesc){
	var d = udesc.value.length;
	if(d <=50){
		alert('At least 50 characters required.');
		uhome.focus();
		return false;
	}
	else{
		alert('Form Succesfully Submitted');
		window.location.reload()
		return true;
	}
}


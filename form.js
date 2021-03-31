function validation(){
  var name = document.getElementById("name").value;
  var Phone = document.getElementById("PhoneNo").value;
  var Email = document.getElementById("Email").value;
  var Create = document.getElementById("Create").value;
  var Confirm = document.getElementById("Confirm").value;
  var Error = document.getElementById("error");
  var text;
  
  Error.style.padding="10px";
  if(name.length<5){
	  text="Please enter valid first name";
	  Error.innerHTML=text;
	  return false;
  }
  
  if(isNaN(Phone)|| Phone.length != 10){
	  text="Please enter valid phone no";
	  Error.innerHTML=text;
	  return false;
  }
  if(Email.indexOf("@") == -1 || Email.length < 6){
	  text="Please enter valid Email Id";
	  Error.innerHTML=text;
	  return false;
  }
  if(Create.length < 8){
	  text="Password length should more than 8 charecters";
	  Error.innerHTML=text;
	  return false;
  }
  if(Confirm!=Create){
	  text="Password does not match";
	  Error.innerHTML=text;
	  return false;
  }
  alert("Form submitted successfully");
  return true;
}
  

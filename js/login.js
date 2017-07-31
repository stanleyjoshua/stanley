var attempt = 3; 

function validate(){
var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;


	
				var timeLog, logLength, i;				
        i = 0;
        logLength = localStorage.length-1; 
				timeLog = '';

        
        for (i = 0; i <= logLength; i++) {
						var itemKey, value, values, usn, pswd;
          
            itemKey = localStorage.key(i);
						
            value = localStorage.getItem(itemKey);
						values = JSON.parse(value);
             usn = values.uname;
             pswd = values.pwd;
           
		if ( username == usn && password == pswd){
alert ("Login successfully");
window.location = "success login.html"; 
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
        }

}
}
}
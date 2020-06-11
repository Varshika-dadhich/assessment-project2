function validation(){
	var email=document.getElementById("Email").value;
    var pwd=document.getElementById("Setpassword").value;
    var mob=document.getElementById("Mobile").value;
    var name=document.getElementById("name").value;
    var condi=document.getElementById("conditions").value;
	if(name==""){
		alert("Please enter the name");
		return false;
		}
	    if(mob==""){
            alert("enter your mobile no.");
            return false;
            }
            if(email==""){
                alert("enter your email");
                return false;
                }
                if(pwd==""){
                    alert("Please fill the password");
                    return false;
                    }
                           if(myForm.checkbox.checked == false){
                    alert("Accept the terms and conditions");
                    return false;
                    }
                      
                 return true;
            alert("your details are secure now ")
        
            }

      
    

window.onload=pageLode;
function pageLode(){
    var signup = document.getElementById("signup");
    signup.onsubmit=validate;
}
function validate(){
    var check=true;
    var firname=document.getElementById("firstname").value;
    var lasname=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var phone=document.getElementById("tel").value;
    var address=document.getElementById("address").value;
    if(firname ==""){
        window.alert("first name is required !");
        check=false;
    }
    if(lasname ==""){
        window.alert("last name is required !");
        check=false;
    }
    if(email ==""){
        window.alert("E-mail is required !");
        check=false;
    }
    if(password ==""){
        window.alert("password is required !");
        check=false;
    }
    if(phone ==""){
        window.alert("phone number is required !");
        check=false;
    }
    if(address ==""){
        window.alert("address is required !");
        check=false;
    }

    if(!firname.match(/^[A-Za-z]+$/)){
        window.alert("only letters are allowed in first name field");
        check=false;
    }
    if(!lasname.match(/^[A-Za-z]+$/)){
        window.alert("only letters are allowed in first name field");
        check=false;
    }
    if(!email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-A]+$/)){
        alert("email is not valid");
        check=false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check=false;
	}
    if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}
}
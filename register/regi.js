var uname = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var output = document.getElementById("output");
var putout = document.getElementById("putout");
var out = document.getElementById("out");

var bttn = document.querySelector("#bttn");



function validation(){
    if(uname.value == ""){
        output.innerHTML="please enter your name";
        uname.style.color="red";
    }else{
        output.innerHTML="";
    }
    
    if(email.value == ""){
        putout.innerHTML="please enter your email";
        password.style.color="red";
    }else{
        putout.innerHTML="";
    }

    if(password.value == ""){
        out.innerHTML="please enter a password";
        password.style.color="red";
    }else{
        out.innerHTML="";
    }
}



bttn.addEventListener("click", validation);
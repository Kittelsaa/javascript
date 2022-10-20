var uname = document.getElementById("name");
var password = document.getElementById("password");
var output = document.getElementById("output");
var putout = document.getElementById("putout");

var bttn = document.querySelector("#bttn");



function validation(){
    if(uname.value == ""){
        output.innerHTML="please enter your name";
        uname.style.color="red";
    }else{
        output.innerHTML="";
    }
    
    if(password.value == ""){
        putout.innerHTML="please enter your email";
        password.style.color="red";
    }else{
        putout.innerHTML="";
    }
}



bttn.addEventListener("click", validation);

































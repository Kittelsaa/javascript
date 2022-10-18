/* 
var myForm = document.forms.myForm;
var output = document.getElementById("output");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        output.innerHTML = "Please enter your name";
        return false;
    }else{
        output.innerHTML = "";
        return true;
    }
};
*/


var myForm = document.forms.myForm;
var output = document.getElementById("output");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        output.innerHTML = "";
        return false;
    }else{
        output.innerHTML = "";
        return true;
    }
};



function click(){

    if(myForm.email.value == ""){
        output.innerHTML = "";
        return false;
    }else{
        output.innerHTML = "";
        return true;
    }
};



































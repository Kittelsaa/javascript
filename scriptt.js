var myForm = document.forms.myForm;
var output = document.getElementById("output");



myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        output.innerHTML = "Please enter your name";
        one.style.border = "1px solid rgb(219, 28, 133)";
        return false;
    }else{
        output.innerHTML = "";
        return true;
    }
};


/*
var outputt = document.getElementById("outputt");
myForm.onsubmit = function(){
    if(myForm.email.value == ""){
        outputt.innerHTML = "Please enter your email";
        two.style.border = "1px solid rgb(219, 28, 133)";
        return false;
    }else{
        outputt.innerHTML = "";
        return true;
    }
};  */































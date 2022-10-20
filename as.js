function validation(){
    var email=document.getElementById("name");
    var password=document.getElementById("email");
//     var enter=document.getElementById("enter");
//     var output=document.getElementById("output");
//     enter.innerHTML="please enter your name";
//     output.innerHTML="please enter your email";
// document.getElementById("enter").style.color="red";
// document.getElementById("output").style.color="red";
// document.getElementsById("name").style.outlineColor="red";



// const registeredUsers = [
//     {
//         email:email.value,
//         password:password.value
//     },
//     {
//         email:"muhire4@gmail.com",
//         password:"Secret@2021"
//     }
// ];



// var x = JSON.stringify(registeredUsers);



const ALLUSERS = localStorage.getItem("users");

var b = JSON.parse(ALLUSERS);
b.push({email:email.value,password:password.value});


var x = JSON.stringify(b);











localStorage.setItem("users",x);
// const ALLUSERS = localStorage.getItem("users");

// var b = JSON.parse(ALLUSERS);

// const emailExist = b.find(function(currentUser){
//     return currentUser.email==email.value;
// });

// if(emailExist){
//   alert("user exist");
// }


// console.log(emailExist);


// console.log(b);








document.body.style.backgroundImage = "url('1.gif')";
var button = document.getElementById('SignUp');
button.addEventListener("click",validate);

function validate(){
var inputs = document.querySelectorAll('input');
var spans = document.querySelectorAll('span');

// var returned;/////////////// used for JSON FILE RETRIVED FROM SERVER
/////////// VALIDATE FOR EMPTY FIELDS //////////////////
var i = 0 ;
var error1count = 0 ;
  for(i=0 ; i < inputs.length ; i ++)
  {
  if (isEmpty(inputs[i].value)){
  spans[i].style.display="inline";
  error1count++;
    }
  }
if (error1count!=0)
return;
/////////////// VALIDATE FOR NAME //////////////
if(inputs[0].value.length<2 || inputs[0].value.length>15){
  spans[0].style.display="inline";
  spans[0].innerHTML="Name must between 8 and 15 characters !";
  return;
}

/////////// VALIDATE FOR EMAIL FORMAT  using regex //////////////////
if(validateEmail(inputs[1].value)!=true){
spans[1].style.display="inline";
spans[1].innerHTML="Email invalid format!"
return;
}
///////// PASS WORD MUST BE MORE THAN 8 And less than 35 CHARACTERS///////////////
if(inputs[2].value.length<8 || inputs[2].value.length>35){
  spans[2].style.display="inline";
  spans[2].innerHTML="Password must between 8 and 35 characters !";
  return;
}

if(inputs[3].value != inputs[2].value){
  spans[3].style.display="inline";
  spans[3].innerHTML="Please rewrite the password correctly!";
  return;
}


var obj = {Name:inputs[0].value  , Email : inputs[1].value , Password : inputs[2].value };
var myJSON = JSON.stringify(obj);
submit(myJSON);


}


function submit(myJSON){


  var xhr = new  XMLHttpRequest();
  xhr.open("POST","register.php",true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(myJSON);


    xhr.onload = function()  {

         var check = this.responseText;
         // console.log(check);
          if (check == "found"){

           var spans = document.querySelectorAll('span');
           spans[1].style.display="inline";
           spans[1].innerHTML="Email already exists";

          }
         else{
            sessionStorage.setItem('registers', check);
            window.location = "http://localhost/lab1/session.html";
          }

  }

}
function isEmpty(value){
  if(value == ""){
  return true ;
}
  else
  return false;
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

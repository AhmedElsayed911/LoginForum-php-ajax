
document.body.style.backgroundImage = "url('1.gif')";
var button = document.querySelector('#loginbutton');
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
/////////// VALIDATE FOR EMAIL FORMAT  using regex //////////////////
if(validateEmail(inputs[0].value)!=true){
spans[0].style.display="inline";
spans[0].innerHTML="Email invalid format!"
return;
}
///////// PASS WORD MUST BE MORE THAN 8 And less than 35 CHARACTERS///////////////
if(inputs[1].value.length<8 || inputs[1].value.length>35){
  spans[1].style.display="inline";
  spans[1].innerHTML="Password must between 8 and 35 characters !";
  return;
}
var obj = { Email : inputs[0].value , Password : inputs[1].value };
var myJSON = JSON.stringify(obj);
submit(myJSON);
// window.location = "http://localhost/lab1/session.html";
//console.log("hello world");

}


function submit(myJSON){


  var xhr = new  XMLHttpRequest();
  xhr.open("POST","login.php",true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(myJSON);


          xhr.onload = function()  {
         var check = this.responseText;
      //   console.log(check);
         if (check == "wrong"){

           var spans = document.querySelectorAll('span');
           spans[0].style.display="inline";
           spans[0].innerHTML="Wrong Email or Password";
           spans[1].style.display="inline";
           spans[1].innerHTML="Wrong Email or Password";
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

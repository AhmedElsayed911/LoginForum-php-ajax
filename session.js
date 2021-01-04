
var table = document.getElementById('myTable');
document.body.style.backgroundImage = "url('1.gif')";
var button = document.getElementById('Signout');
button.addEventListener('click',signoutfunc);

function signoutfunc (){
 window.location = "http://localhost/lab1/index.html";
}

var obj = JSON.parse(sessionStorage.getItem('registers'));
var x = 0 ;
for (x=0 ; x<obj.length-1 ; x++ ){

  var row = table.insertRow(x+1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
cell1.innerHTML = obj[x][1];
cell2.innerHTML = obj[x][2];
}

 document.getElementById('h1_id').innerHTML="Welcome  " + obj[obj.length-1][2];

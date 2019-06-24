$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// login Form    
var uName=document.getElementById('userName');
var pasw=document.getElementById('userPass');

document.getElementById("login").onclick=function(){
 
   if((uName.value ==="admin") &&( pasw.value === "admin")){
      window.open('dashboard.html', '_targt');  
   }
   else{
alert("the defaultl name 'admin' and default password :'admin'");

   }
}

// Registration Form
function checkName(inp){
   if(inp.value.length <=3){
      inp.focus();
      inp.select();
     document.getElementById('vName').innerHTML="Valid Name At Lest 3 Char";
   }
   else
   document.getElementById('vName').innerHTML="";
}

// Validation Password
function checkValidPass(){
   var p=document.getElementById('pass');
   var rep=document.getElementById('re-pass');
   if (p.value!=rep.value) {
       document.getElementById('cpass').innerHTML="password and Conferm password should be the same";
   }else{
       document.getElementById('cpass').innerHTML="";

   }
}
// Validation FOrm
function ValidationForm(ev){
   if(document.getElementById('pass').value !=document.getElementById('re-pass').value){
       ev.preventDefault();
   }
   else{
       ev.target.submit();
   }
}

// Function Count Timer For Question
var timer=document.getElementById('timer');
function countTimer(){
   var date=new Date();
   // timer.innerHTML=date.toLocaleTimeString.
}
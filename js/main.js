"use strict";
var count=0;
var dropdown=document.getElementById("dropdown-btn");
var showdrop=document.getElementById("dropdown-container");

dropdown.onclick=function()
 { 
	if (showdrop.style.display === "block") {
    showdrop.style.display = "none";
   	containerHtml.style.display="none";
   	 containerCss.style.display="none";
	containerJs.style.display="none";
		containerImg.style.display="block";
	}
	else {		
  showdrop.style.display = "block";
  }}

var containerHtml=document.getElementById("container1");
var containerCss=document.getElementById("container2");
var containerJs=document.getElementById("container3");

var containerImg=document.getElementById("imgDash");

function showHtml()

{
	containerHtml.style.display="block";
   	 containerCss.style.display="none";
	containerJs.style.display="none";
	containerImg.style.display="none";
	

}
function showCss()

{   containerHtml.style.display="none";
	containerJs.style.display="none";
		containerImg.style.display="none";
	containerCss.style.display="block";
	
}
function showJs()

{	containerImg.style.display="none";
	containerJs.style.display="block";
	 containerHtml.style.display="none";
	containerCss.style.display="none";
}


document.getElementById("htmlType1").onclick=function(){

	location.href="htmlQuestion1.html";
};
document.getElementById("htmlType2").onclick=function(){

	location.href="htmlQuestion4.html";
};

document.getElementById("htmlType3").onclick=function(){

	location.href="htmlQuestion1.html";
};

document.getElementById("question2").onclick=function(){

	location.href="htmlQuestion2.html";
	
};

document.getElementById("questionType2").onclick=function(){

	location.href="htmlQuestion2.html";
	
};
document.getElementById("questionType3").onclick=function(){

	location.href="htmlQuestion2.html";
	
};

document.getElementById("jsQuestion1").onclick=function(){

	location.href="htmlQuestion1.html";
	
};
document.getElementById("jsQuestion2").onclick=function(){

	location.href="htmlQuestion1.html";
	
};
document.getElementById("jsQuestion3").onclick=function(){

	location.href="htmlQuestion1.html";
	
};

document.getElementById("question3").onclick=function(){

	location.href="htmlQuestion3.html";
};
// document.getElementById("htmlQuestion4").onclick=function(){

// 	location.href="htmlQuestion5.htm";
// };


 
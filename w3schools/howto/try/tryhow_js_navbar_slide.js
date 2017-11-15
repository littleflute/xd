
//tryhow_js_navbar_slide.js
var thisFileName = "tryhow_js_navbar_slide";
var thisFileV	 = "v0.3.8";
var thisCodeFun		= function(){
/* tryhow_js_navbar_slide code:
_begin_ <!DOCTYPE html>
<html>
<head>
<style>
body {
  margin: 0;
  background-color: #f1f1f1;
}

#navbar {
  background-color: #333;
  position: fixed;
  top: -50px;
  width: 100%;
  display:block;
  transition: top 0.3s;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  font-size: 17px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
</head>
<body>

<div id="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
</div>

<div style="padding:15px 15px 2500px;font-size:30px">
  <p><b>This example demonstrates how to slide down a navbar when the user starts to scroll the page.</b></p>
  <p>Scroll down this frame to see the effect!</p>
  <p>Scroll to the top to hide the navbar.</p>
  <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<script>
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
</script>

</body>
</html>

 
_end_
*/
};
var _bltryhow_js_navbar_slide = {};
_bltryhow_js_navbar_slide.name = "_bltryhow_js_navbar_slide";
_bltryhow_js_navbar_slide.v = "v0.1.2";

_bltryhow_js_navbar_slide.blrLoad = function(b,v){ 
	var a = document.getElementById("xdLoad");
	a.click(); submitTryit(1);
};

_bltryhow_js_navbar_slide.blrShow_xd5 = function(b,v){
	v.innerHTML = "<a target='_blank' href='tryit_asp.html?l=xd5'>xd5_js</a>";
};

var blo = new blClass;

 
var idDiv = "idDiv_"+thisFileName;
var od = document.getElementById(idDiv); 

var blt = new blClassTest;	 
blt.blGo1 = function(p){	
	p.blPlxUI(thisFileName + "_" + thisFileV,900,0,_bltryhow_js_navbar_slide);
};						
blt.blGo1(blt); 		


var taCode = document.createElement("textarea");
taCode.id 	= "idTaCode";
taCode.value	= "alert('xd test');";
taCode.style.display = "none";


od.appendChild(taCode); 
 

taCode.value = thisCodeFun;

var s0 = taCode.value ;
var s1 = s0.split("_begin_");
var s2 = s1[1];
var s3 = s2.split("_end_");
var s4 = s3[0]; 

taCode.value = s4;

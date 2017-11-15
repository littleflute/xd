
//tryhow_js_slideshow_auto.js
var thisFileName = "tryhow_js_slideshow_auto";
var thisFileV	 = "v0.3.8";
var thisCodeFun		= function(){
/* tryhow_js_slideshow_auto code:
_begin_ <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing:border-box}
body {font-family: Verdana,sans-serif;}
.mySlides {display:none}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>
</head>
<body>

<h2>Automatic Slideshow</h2>
<p>Change image every 2 seconds:</p>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img_fjords_wide.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>

</body>
</html> 

_end_
*/
};
var _bltryhow_js_slideshow_auto = {};
_bltryhow_js_slideshow_auto.name = "_bltryhow_js_slideshow_auto";
_bltryhow_js_slideshow_auto.v = "v0.1.2";

_bltryhow_js_slideshow_auto.blrLoad = function(b,v){ 
	var a = document.getElementById("xdLoad");
	a.click(); submitTryit(1);
};

_bltryhow_js_slideshow_auto.blrShow_xd5 = function(b,v){
	v.innerHTML = "<a target='_blank' href='tryit_asp.html?l=xd5'>xd5_js</a>";
};

var blo = new blClass;

 
var idDiv = "idDiv_"+thisFileName;
var od = document.getElementById(idDiv); 

var blt = new blClassTest;	 
blt.blGo1 = function(p){	
	p.blPlxUI(thisFileName + "_" + thisFileV,900,0,_bltryhow_js_slideshow_auto);
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

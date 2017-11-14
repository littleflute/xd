
//xd1.js
var thisFileName = "xd1";
var thisFileV	 = "v0.3.6";
var thisCodeFun		= function(){
/* xd1 code:
_begin_ 
<!DOCTYPE html>
<html>
<title>W3.JS</title>
<script src="../lib/w3.js"></script>
<body>

<h2>Filter List</h2>

<p>Search for a name in the input field:</p>

<input oninput="w3.filterHTML('#id01', 'li', this.value)" placeholder="Search for names..">

<ul id="id01">
  <li>Alfreds Futterkiste</li>
  <li>Berglunds snabbk?p</li>
  <li>Centro comercial Moctezuma</li>
  <li>Ernst Handel</li>
  <li>FISSA Fabrica Inter. Salchichas S.A.</li>
  <li>Galer¨ªa del gastr¨®nomo</li>
  <li>Island Trading</li>
  <li>K?niglich Essen</li>
  <li>Laughing Bacchus Wine Cellars</li>
  <li>Magazzini Alimentari Riuniti</li>
  <li>North/South</li>
  <li>Paris sp¨¦cialit¨¦s</li>
  <li>Rattlesnake Canyon Grocery</li>
  <li>Simons bistro</li>
  <li>The Big Cheese</li>
  <li>Vaffeljernet</li>
  <li>Wolski Zajazd</li>
</ul>

</body>
</html>

 
_end_
*/
};
var _blXd1 = {};
_blXd1.name = "_blXd1";
_blXd1.v = "v0.1.2";

_blXd1.blrLoad = function(b,v){ 
	var a = document.getElementById("xdLoad");
	a.click(); submitTryit(1);
};

_blXd1.blrShow_xd5 = function(b,v){
	v.innerHTML = "<a target='_blank' href='tryit_asp.html?l=xd5'>xd5_js</a>";
};

var blo = new blClass;

 
var idDiv = "idDiv_"+thisFileName;
var od = document.getElementById(idDiv); 

var blt = new blClassTest;	 
blt.blGo1 = function(p){	
	p.blPlxUI(thisFileName + "_" + thisFileV,900,0,_blXd1);
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

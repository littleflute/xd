
//xd1.js
var thisFileName = "xd1";
var thisFileV	 = "v0.3. 15 ";

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
  <li>Galer¨Şa del gastr¨Žnomo</li>
  <li>Island Trading</li>
  <li>K?niglich Essen</li>
  <li>Laughing Bacchus Wine Cellars</li>
  <li>Magazzini Alimentari Riuniti</li>
  <li>North/South</li>
  <li>Paris sp¨Ścialit¨Śs</li>
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

function _on_off_div(b,d){if(d.style.display=="block"){d.style.display="none"; b.style.backgroundColor="red"; }else{d.style.display="block"; b.style.backgroundColor="green"; }};

function _myJobClass(){
	this.v 			= "v0.1. 13 ";
	this.blrLoad 		= function(b,v){ 
		var a = document.getElementById("xdLoad");
		a.click(); submitTryit(1);
	};
	this.blrList 	= function(b,v){
		if(!v.s){
			v.s = "";
			v.s += "<a href='?l=xd1'>l=xd1</a> - ";
			v.s += "<a target='_blank' href='try/xd1.js'>xd1.js</a><br>";
			v.s += "<a href='?l=xd2'>l=xd2</a> - ";
			v.s+= "<a target='_blank' href='try/xd2.js'>xd2.js</a><br>"; 
			v.s+= "<a href='?l=xd3'>l=xd3</a> - ";
			v.s+= "<a target='_blank' href='try/xd3.js'>xd3.js</a><br>"; 
			v.s+= "<a href='?l=xd4'>l=xd4</a> - ";
			v.s+= "<a target='_blank' href='try/xd4.js'>xd4.js</a><br>"; 
			v.s+= "<a href='?l=xd5'>l=xd5</a> - ";
			v.s+= "<a target='_blank' href='try/xd5.js'>xd5.js</a><br>"; 
			v.innerHTML = v.s;
		}
		_on_off_div(b,v);
	};
	this.blrAbout 	= function(b,v){
		if(!v.s){
			v.s = ""; 
			v.s += "<a target='_blank' href='try/xd1.js'>xd1.js</a><br>"; 
			v.s += "<a target='_blank' href='https://github.com/littleflute/xd/edit/master/w3schools/howto/try/xd1.js'>xd1.js*</a><br>"; 
			v.innerHTML = v.s;
		}
		_on_off_div(b,v);
	};

}

var _blXd1 = new _myJobClass;

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

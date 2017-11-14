
//xd5.js
var thisFileName = "xd5";
var thisFileV	 = "v0.2.2";
var thisCodeFun		= function(){
/* xd5 code:
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

//alert(thisFileV + ":" + thisCodeFun );
 
var idDiv = "idDiv_"+thisFileName;
var od = document.getElementById(idDiv);

var taCode = document.createElement("textarea");
taCode.id 	= "idTaCode";
taCode.value	= "alert('xd test');";
od.appendChild(taCode); 

var divCode = document.createElement("div");
divCode.id	= "idDivCode";
divCode.onclick = function(){alert(divCode.id);}
divCode.innerHTML = thisCodeFun;
od.appendChild(divCode); 


taCode.value = thisCodeFun;

var s0 = taCode.value ;
var s1 = s0.split("_begin_");
var s2 = s1[1];
var s3 = s2.split("_end_");
var s4 = s3[0]; 

taCode.value = s4;

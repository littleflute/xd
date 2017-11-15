
//tryhow_js_filter_list.js
var thisFileName = "tryhow_js_filter_list";
var thisFileV	 = "v0.3.9";
var thisCodeFun		= function(){
/* tryhow_js_filter_list code:
_begin_ <!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('../css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; 
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
</style>
</head>
<body>

<h2>My Phonebook</h2>

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

<ul id="myUL">
  <li><a href="#">Adele</a></li>
  <li><a href="#">Agnes</a></li>

  <li><a href="#">Billy</a></li>
  <li><a href="#">Bob</a></li>

  <li><a href="#">Calvin</a></li>
  <li><a href="#">Christina</a></li>
  <li><a href="#">Cindy</a></li>
</ul>

<script>
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
</script>

</body>
</html>

 
_end_
*/
};
var _bltryhow_js_filter_list = {};
_bltryhow_js_filter_list.name = "_bltryhow_js_filter_list";
_bltryhow_js_filter_list.v = "v0.1.2";

_bltryhow_js_filter_list.blrLoad = function(b,v){ 
	var a = document.getElementById("xdLoad");
	a.click(); submitTryit(1);
};

_bltryhow_js_filter_list.blrShow_xd5 = function(b,v){
	v.innerHTML = "<a target='_blank' href='tryit_asp.html?l=xd5'>xd5_js</a>";
};

var blo = new blClass;

 
var idDiv = "idDiv_"+thisFileName;
var od = document.getElementById(idDiv); 

var blt = new blClassTest;	 
blt.blGo1 = function(p){	
	p.blPlxUI(thisFileName + "_" + thisFileV,900,0,_bltryhow_js_filter_list);
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

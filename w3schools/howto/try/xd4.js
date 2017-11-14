
//xd4.js
var thisFileName = "xd4";
var thisFileV	 = "v0.0.32";
var thisCodeFun		= function(){
/* xd4 code:
_begin_ 

<!DOCTYPE html>
 
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

var s0 = divCode.innerHTML ;
var s1 = s0.split("_begin_");
var s2 = s1[1];
var s3 = s2.split("_end_");
var s4 = s3[0];
//od.innerHTML = s4 ;
taCode.value = thisCodeFun;

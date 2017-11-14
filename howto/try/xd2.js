
//xd2.js
var thisFileName = "xd2";
var thisFileV	 = "v0.0.24";
var thisCodeFun		= function(){
/* xd2 code:
_begin_ 

!DOCTYPE html
 
_end_
*/
};

//alert(thisFileV + ":" + thisCodeFun );
 
var idDiv = "idDiv_"+thisFileName;
var od = document.getElementById(idDiv);
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

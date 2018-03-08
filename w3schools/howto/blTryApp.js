// blTryApp.js
var _g_ver_blTryApp = "v0.3. 22 ";

var QueryString = function () 
{
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();
var oDivFile2Load = null;
var blrLoadFileJS	= function(thisFileName){  
	var o = new blClass;
	var f = thisFileName + ".js";
	var sPath = "try/"; 
	var src = sPath + f;
	var oBoss = document.getElementById("div-gpt-ad-1428407818244-0");
	var idDiv = "idDiv_"+thisFileName;
	var oDivFile2Load = o.blDiv(oBoss,idDiv,src,"green"); 
	var oXd2 = o.blDiv(oDivFile2Load,"xd2","xd22","lightblue"); 
	var s1 = o.blScript("idS_"+thisFileName,src); 
	o = null; 
}; 
 
blrLoadFileJS(QueryString.l);

var xdLoad = document.getElementById("xdLoad");
xdLoad.onclick = function()
{ 
	var id = "idTaCode";
	var ta = document.getElementById(id);
	if(!ta) {alert(id +" not exist!");return;}
	var code = ta.value;
	

	document.getElementById("textareaCode").value = code ;
	 window.editor.getDoc().setValue(code);



}
var xdv = document.getElementById("xd2");
var s = "";
s += "<a target='_blank' href='blTryApp.js'>blTryApp.js - </a>";  
s += "<a target='_blank' href='https://github.com/littleflute/xd/edit/master/w3schools/howto/blTryApp.js'>";
s += _g_ver_blTryApp ;
s += "*</a>";
s+="-";
s+="<a href='../../index.html'>Home</a>-";
s+="<a href='?l=xd1'>l=xd1</a>";
xdv.innerHTML = s;
 

//file: Genesis03.js
var Genesis03 = function()
{
/* _begin_ 
[by: Littleflute from: www.beautifullover.org]
Genesis03 line01
Genesis03 line02
_end_
*/
} 
var od = document.getElementById("lrcdata");
if(!od){
	od = document.createElement("span");
	od.id = "lrcdata";
	od.style.display = "none";
	document.body.appendChild(od);
}
od.innerHTML = Genesis03;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
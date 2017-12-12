//file: Genesis02.js
var Genesis02 = function()
{
/* _begin_ 
[by: Littleflute from: www.beautifullover.org]
Genesis02 line01
Genesis02 line02
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
od.innerHTML = Genesis02;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
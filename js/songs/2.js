function sample2() {
/*
_begin_
	var o = {
		name:'yestoday once more',
		x:110,y:110,w:1100,h:100,
		line1:"line1--",
		line2:"line2"
	}
_end_
*/
};
var t = document.createElement("textarea");
t.id = "id_ta_sample2";
t.style.display = "none";
document.body.appendChild(t);

var e = document.getElementById("id_ta_4_song_edit");
if(e){
	t.value = sample2; 
	var a = t.value;
	var b = a.split('_begin_');
	var c = b[1].split('_end_');
	t.value = e.value = c[0];  
}
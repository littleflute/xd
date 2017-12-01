function sample4() {
/*
_begin_
	var o = {
		name:'¹âÒõµÄ¹ÊÊÂ',
		x:110,y:110,w:800,h:240,
		line1:{ bar1:{note1:"note1=="},
			bar2:"bar2--"
			},
		line2:"line2--"
	}
_end_
*/
};

var t = document.createElement("textarea");
t.id = "id_ta_sample4";
t.style.display = "none";
document.body.appendChild(t);

var e = document.getElementById("id_ta_4_song_edit");
if(e){
	t.value = sample4; 
	var a = t.value;
	var b = a.split('_begin_');
	var c = b[1].split('_end_');
	t.value = e.value = c[0];  
}
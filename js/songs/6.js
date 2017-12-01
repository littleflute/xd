function sample6() {
/*
_begin_
	var o = {
		name:'Ð¡²Ý',
		x:210,y:110,w:800,h:340,
		line1:{ b1:{  n11:{ 	c:"a",
					t:"-1",
					d:"16",
					p:"0"
				},
				n12:{ c:"a",
					t:"-1",
					d:"8",
					p:"1"
				},
				n21:{ c:"c",
					t:"0",
					d:"8b"
				},
				n22:{ c:"b",
					t:"-1",
					d:"8e"
				},
				n3:{ c:"a",
					t:"-1",
					d:"h"
				}},//line1 bar1
			 bar1:{  n11:{ c:"a",
					t:"-1",
					d:"8b"
				},
				n12:{ c:"a",
					t:"-1",
					d:"8e"
				},
				n21:{ c:"c",
					t:"0",
					d:"8b"
				},
				n22:{ c:"b",
					t:"-1",
					d:"8e"
				},
				n3:{ c:"a",
					t:"-1",
					d:"h"
				}},//line1 bar1
			bar2:{	n11:{ c:"a",
					t:"-1",
					d:"8b"
				},
				n12:{ c:"a",
					t:"-1",
					d:"8e"
				},
				n21:{ c:"e",
					t:"0",
					d:"8b"
				},
				n22:{ c:"d",
					t:"0",
					d:"8e"
				},
				n3:{ c:"e",
					t:"0",
					d:"h"
				}}//line1 bar2
			} 
	}
_end_
*/
};

var t = document.createElement("textarea");
t.id = "id_ta_sample6";
t.style.display = "none";
document.body.appendChild(t);

var e = document.getElementById("id_ta_4_song_edit");
if(e){
	t.value = sample6; 
	var a = t.value;
	var b = a.split('_begin_');
	var c = b[1].split('_end_');
	t.value = e.value = c[0];  
}
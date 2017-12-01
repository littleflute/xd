function sample5() {
/*
_begin_
	var o = {
		name:'π‚ª‘ÀÍ‘¬',
		x:110,y:110,w:800,h:340,
		line1:{ bar1:{  n1:{ c:"0",
					t:"0",
					d:"4"
				},
				n21:{ c:"g",
					t:"0",
					d:"16b",p:"0"
				},
				n22:{ c:"g",
					t:"0",
					d:"16=",p:"-"
				},
				n23:{ c:"g",
					t:"0",
					d:"16=",p:"-"
				},
				n24:{ c:"g",
					t:"0",
					d:"16e",p:"1"
				},
				n31:{ c:"g",
					t:"0",
					d:"8b",p:"0"
				},
				n32:{ c:"g",
					t:"0",
					d:"16-",p:"-"
				},
				n33:{ c:"g",
					t:"0",
					d:"16e",p:"1"
				},
				n41:{ c:"g",
					t:"0",
					d:"8b"
				},
				n42:{ c:"f",
					t:"0",
					d:"8e"
				}},//line1 bar1
			b2:{  n1:{ c:"0",
					t:"0",
					d:"4"
				},
				n21:{ c:"e",
					t:"1",
					d:"16"
				},
				n22:{ c:"e",
					t:"1",
					d:"16"
				},
				n23:{ c:"e",
					t:"1",
					d:"16"
				},
				n24:{ c:"c",
					t:"1",
					d:"16"
				},
				n31:{ c:"d",
					t:"1",
					d:"8"
				},
				n32:{ c:"d",
					t:"1",
					d:"16"
				},
				n33:{ c:"f",
					t:"1",
					d:"16"
				},
				n41:{ c:"f",
					t:"1",
					d:"8"
				},
				n42:{ c:"e",
					t:"1",
					d:"8"
				}},//line1 bar1
			bar2:{  note1:{ c:"c",
					t:"0",
					d:1
					},
				note2:{ c:"d",
					t:"0",
					d:2
					}}
			},
		line2:"line2--"
	}
_end_
*/
};

var t = document.createElement("textarea");
t.id = "id_ta_sample5";
t.style.display = "none";
document.body.appendChild(t);

var e = document.getElementById("id_ta_4_song_edit");
if(e){
	t.value = sample5; 
	var a = t.value;
	var b = a.split('_begin_');
	var c = b[1].split('_end_');
	t.value = e.value = c[0];  
}
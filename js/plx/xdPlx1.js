
function _xdPlx1Class(){
	var v 		= "v0.0.15";
	var name 	= "_xdPlx1Class";
	var pathMp3 = "https://littleflute.github.io/bible1/NIV%20Live%20A%20Bible%20Experience/OldTestament/cd02/";
	var fileMp3 = "01 Genesis 1.mp3";
	var pathLrc = "https://littleflute.github.io/xd/js/lrc/";//"file:///C:/Users/13699/xd/js/lrc/";
	var fileLrc = "01_lrc.js";

	function _makeToolBar(blo,d,c) {
		var id = d.id;
		id += "_b1";
		var b1 = blo.blBtn(d,id,"+","red");
		b1.onclick = function(btn_,o){
			var v = null;
			return function(){
				v = blo.blDiv(d,btn_.id+"_div_View","b1v","green");
				blo.blShowObj2Div(v,o);
				_on_off_bd(btn_,v);
			}
		}(b1,c);
	}
    
	function _add_1_file(fMp3,fLrc){ 
		var s = '{';
		s += '\n';
		s += '    ';
		s += '    ';

		s += '"f":"';
		s += pathMp3 ;
		s += fMp3 ;
		s += '",';
		s += '\n';
		s += '    ';
		s += '    ';

		s += '"l":"';
		s += pathLrc ;
		s += fLrc ;
		s += '"';

		s += '},\n'; 
		
		return s;
	}
	function _n1_space_str_space_n2(strN1,str,strN2){ 
		var s = ''; 
		var fMp3 = "";
		fMp3 += strN1;
		fMp3 += " "
		fMp3 += str;
		fMp3 += " ";
		fMp3 += strN2;
		fMp3 += ".mp3"
		s += _add_1_file(fMp3,fileLrc);		
		return s;
	}
	this.blrCreateList = function(b,d){ 
		var s = 'ls = [\n';   
		for (var i=1,j=18; i<=12;i++,j++)
		{
			var s1 = i<10?('0'+i):(''+i);
			var s2 = ''+j;
			s += _n1_space_str_space_n2(s1,"Genesis",s2);
		}
		s += '];'; 

		e.value = s;
	}
	this.run = function(c){
		var o = e.parentNode;		
		var d = blo0.blDiv(o,"xdplax_div1",name + "_" + v);
		_makeToolBar(blo0,d,c);
	}
}
function xdPlx1() {
/*
_begin_
	var c = new _xdPlx1Class;
	c.run(c);
_end_
*/
};
 
var t = document.createElement("textarea");
t.id = "id_ta_xdPlx1";
t.style.display = "none";
document.body.appendChild(t);

var e = document.getElementById("id_ta_xd_RunJS");
if(e){
	t.value = xdPlx1; 
	var a = t.value;
	var b = a.split('_begin_');
	var c = b[1].split('_end_');
	t.value = e.value = c[0];  
}
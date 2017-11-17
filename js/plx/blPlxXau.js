// file: blPlxXau.js
// by littleflute
// 2017/11/17 1:17 bjt
function _newDataClass(oBoss)
{
	this.n = 0;
	this.o = 0;
	this.h = 0;
	this.c = 0;
	this.l = 0;
	this.html = "xxx";
	this.ui		= null;
}
function _main(oBoss)
{
  var blo = new blClass;
  var mainToolBar = blo.blDiv(oBoss,"xaumainToolBar","::","skyblue");
  var b1 = blo.blBtn(mainToolBar,"xauMain_btn1","btn1","BurlyWood");
  var b2 = blo.blBtn(mainToolBar,"xauMain_btn2","btn2","BurlyWood");
  var mainView = blo.blDiv(mainToolBar,"xaumainView_1","mainView","black");
  var w = new _newDataClass;
  w._2do = function(s){
	w.html = s;
	w.d1.innerHTML = w.n;
	w.d2.innerHTML = s;
  };
  b1.onclick = function(){w.n++;
	mainView.innerHTML = "b1 click: " + w.n;
	blo.blAjx(w,"http://api.baidao.com/api/hq/npdata.do?ids=201");	
	var d = document.getElementById("mainViewBtn2mi3");
	w.d1 = blo.blDiv(d,d.id+"d1",w.n,"white");
	w.d2 = blo.blDiv(d,d.id+"d2",w.n,"skyblue");
  };
  b2.onclick = function(){
	var blt = new blClassTest;
	w.ui = blt.blPlxUI("mainViewBtn2",100,100,w);
  };
}
function _blXauClass(){
	var _name 	= "blPlxXau";
	var _v 		= "v0.0.59";
	var _bOK	= false;
	this.blhGetName	= function(){		
		return _name;
	};
	this.blhLoadMeFinished	= function(){
		var o = document.getElementById(_name + "Testmi2");
		o.innerHTML = _name + _v;
		_bOK	= true;
	};
	_htmlMySrc 	= function(){
		var f = _name + ".js";
		var sPath = "js/plx/";
		if(1==nBlPageLeve) sPath = "../" + sPath;
		var src = sPath + f;
		return "<a target='_blank' href=" + src + " style='color:red;'>sourc</a>";
	}
	_htmlRef 	= function(){ 
		var html = "<a target='_blank' href=";
		html += "https://littleflute.github.io/blog/docs/2017/04/19";
		html += " style='color:red;'>ref</a>";
		return html; 
	}
	this.blrUnLoad 	= function(b,v){ 
		var o = document.getElementById(_name+"Test");
		o.innerHTML = "";
	}
	var _bShowAbout = true;
	this.blrAbout 	= function(b,v){
		var s = "";
		if(_bShowAbout)
		{
			_bShowAbout = false;
			s = "about blPlxXau:<br>";
			s += "name: " + _name;
			s += "<br>";
			s += "v: " + _v;
			s += "<br>";
			s += "_bOK: " + _bOK;
			s += "<br>";
			s += _htmlMySrc();
			s += "<br>";
			s += _htmlRef();
			b.style.backgroundColor = "purple";
		}
		else{
			_bShowAbout = true;
			b.style.backgroundColor = "red";
		}
		v.innerHTML = s;
		_main(v);
	};
}
var blPlxXau 	= new _blXauClass; 
 
if (typeof loadPlxOK == "function") {		    		
	loadPlxOK(blPlxXau);
}

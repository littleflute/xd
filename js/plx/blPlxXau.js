// file: blPlxXau.js
// by littleflute
// 2017/11/17 1:17 bjt
function _main(oBoss)
{
  var blo = new blClass;
  var mainToolBar = blo.blDiv(oBoss,"xaumainToolBar","::","skyblue");
  var b1 = blo.blBtn(mainToolBar,"xauMain_btn1","btn1","BurlyWood");
  var b2 = blo.blBtn(mainToolBar,"xauMain_btn2","btn2","BurlyWood");
  var mainView = blo.blDiv(mainToolBar,"xaumainView_1","mainView","black");
  var w = {};
  w._2do = function(s){
	mainView.innerHTML = s;
  };
  b1.onclick = function(){
	mainView.innerHTML = "b1 click";
	blo.blAjx(w,"http://api.baidao.com/api/hq/npdata.do?ids=201");	
  };
  b2.onclick = function(){
	var blt = new blClassTest;
	blt.blPlxUI("mainViewBtn2",100,100,w);
  };
}
function _blXauClass(){
	var _name 	= "blPlxXau";
	var _v 		= "v0.0.51";
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

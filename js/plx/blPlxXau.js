// file: blPlxXau.js
// by littleflute
// 2017/11/17 1:17 bjt

function _blXauClass(){
	var _name 	= "blPlxXau";
	var _v 		= "v0.0.31";
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
			b.style.backgroundColor = "purple";
		}
		else{
			_bShowAbout = true;
			b.style.backgroundColor = "red";
		}
		v.innerHTML = s;
	};
}
var blPlxXau 	= new _blXauClass; 
 
if (typeof loadPlxOK == "function") {		    		
	loadPlxOK(blPlxXau);
}

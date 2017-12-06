

function _xdPlxSetClass(){
	var v 		= "v0.0.31";
	var name 	= "_xdPlxSetClass";
	var _view	= null;
	var _loadTimes	= 0;
	function _makeToolBar2ShowObj(blo,d,o2Show) {
		var id = d.id;
		id += "_b1";
		var b1 = blo.blBtn(d,id,"+","red");
		b1.onclick = function(btn_){
			var v = null;
			return function(){
				v = blo.blDiv(d,btn_.id+"_div_View","b1v","green");
				blo.blShowObj2Div(v,o2Show);
				_on_off_bd(btn_,v);
			}
		}(b1);
	}
    
	var _createUI 	= function(this_){
		if(!document.body._xdPlxSpiterLoad_times) document.body._xdPlxSpiterLoad_times = 1;
		else{document.body._xdPlxSpiterLoad_times++; _loadTimes = document.body._xdPlxSpiterLoad_times;}

		if(!_view) alert("no 'id_div__xdPlxSpiter'");
		else{
			_view.innerHTML = name + "-" + v + " : " + document.body._xdPlxSpiterLoad_times;
			_view.style.backgroundColor = "SlateBlue";
			_makeToolBar2ShowObj(blo0,_view,this_);
		}		
	};

	this.blhRun = function(c){
		_view = document.getElementById("id_div__xdPlxSet");
		_createUI(this);
	}
	var _setObj = null;
	this.blrSet = function(blrSetB,blrSetV){ 
		blrSetV.innerHTML = "Colors";
		function _addBtn(b,v,color){
			var btn = blo0.blBtn(v,v.id+color,color,color);	
			btn.style.color = "white";	
			btn.onclick = function(){   
				document.body.style.backgroundColor = color;
			}	
		}
		function _xdSetClass(){
			this.bll1 = "-1-";
			this.blrPink = function(b,v){
				v.innerHTML = "Pink Colors";
				_addBtn(b,v,"Pink");
				_addBtn(b,v,"LightPink");
				_addBtn(b,v,"HotPink");
				_addBtn(b,v,"DeepPink");
				_addBtn(b,v,"PaleVioletRed");
				_addBtn(b,v,"MediumVioletRed");
				_on_off_div(b,v);
			};
			this.bll2 = "-2-";
			this.blrLavender = function(b,v){
				v.innerHTML = "Lavende Colors";
				_addBtn(b,v,"Lavender");
				_addBtn(b,v,"Thistle");
				_addBtn(b,v,"Plum");
				_addBtn(b,v,"Orchid");
				_addBtn(b,v,"Violet");
				_addBtn(b,v,"Fuchsia");
				_addBtn(b,v,"Magenta");
				_addBtn(b,v,"MediumOrchid");
				_addBtn(b,v,"DarkOrchid");
				_addBtn(b,v,"DarkViolet");
				_addBtn(b,v,"BlueViolet");
				_addBtn(b,v,"DarkMagenta");
				_addBtn(b,v,"Purple");
				_addBtn(b,v,"MediumPurple");
				_addBtn(b,v,"MediumSlateBlue");
				_addBtn(b,v,"SlateBlue");
				_addBtn(b,v,"DarkSlateBlue");
				_addBtn(b,v,"RebeccaPurple");
				_addBtn(b,v,"Indigo");
				_on_off_div(b,v);
			};
			this.bll3 = "-3-";
			this.blrRed = function(b,v){
				v.innerHTML = "Red Colors";
				_addBtn(b,v,"LightSalmon");
				_addBtn(b,v,"Salmon");
				_addBtn(b,v,"DarkSalmon");
				_addBtn(b,v,"LightCoral");
				_addBtn(b,v,"IndianRed");
				_addBtn(b,v,"Crimson");
				_addBtn(b,v,"Red");
				_addBtn(b,v,"FireBrick");
				_addBtn(b,v,"DarkRed");
				_on_off_div(b,v);
			};
			this.bll4 = "-4-";
			this.blrOrange = function(b,v){
				v.innerHTML = "Orange Colors";
				_addBtn(b,v,"Orange");
				_addBtn(b,v,"DarkOrange");
				_addBtn(b,v,"Coral");
				_addBtn(b,v,"Tomato");
				_addBtn(b,v,"OrangeRed");
				_addBtn(b,v,"Crimson");
				_addBtn(b,v,"Red");
				_addBtn(b,v,"FireBrick");
				_addBtn(b,v,"DarkRed");
				_on_off_div(b,v);
			};
		}
		if(!_setObj) _setObj = new _xdSetClass;
		_makeToolBar2ShowObj(blo0,blrSetV,_setObj);
		 
		_on_off_div(blrSetB,blrSetV);
	}
} 

function _run_xdPlxSet() { 
	var c = new _xdPlxSetClass;
	c.blhRun(c); 
};  
_run_xdPlxSet();

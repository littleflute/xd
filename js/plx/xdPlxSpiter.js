
function _xdPlxSpiterClass(){
	var v 		= "v0.0.8";
	var name 	= "_xdPlxSpiterClass";
	var _view	= null;
	var _loadTimes	= 0;
	var _createUI 	= function(){
		if(!document.body._xdPlxSpiterLoad_times) document.body._xdPlxSpiterLoad_times = 1;
		else{document.body._xdPlxSpiterLoad_times++; _loadTimes = document.body._xdPlxSpiterLoad_times;}

		if(!_view) alert("no 'id_div__xdPlxSpiter'");
		else{
			_view.innerHTML = name + "-" + v + " : " + document.body._xdPlxSpiterLoad_times;
		}		
	};

	this.run = function(c){
		_view = document.getElementById("id_div__xdPlxSpiter");
		_createUI();
	}
} 

function _run_xdPlxSpiter() { 
	var c = new _xdPlxSpiterClass;
	c.run(c); 
};  
_run_xdPlxSpiter();

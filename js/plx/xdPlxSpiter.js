// xdl-1 
function _SpiterJobClass(){
	var v 		= "v0.0. 123 -";
	var _w		= null;
	var _j1		= null;
	var _j2		= null;
	var _ta		= null;
	this.blrUI	= function(b,d){
		_w	= _create_MainWnd	(d);
		_ta	= _create_TA		(_w);
		_j1	= _creat_job_UI	(_w , "job1 ",_f1); 
		_j2	= _creat_job_UI	(_w , "job2 ",_f2);
		_on_off_div( b , d );
	}; 

	var _create_MainWnd	= function(oBoss){return blo0.blDiv( oBoss ,oBoss.id + "_create_MainWnd", v, "forestgreen" ); };
	var _create_TA		= function(oBoss){
		var dt1	= blo0.blDiv( oBoss ,oBoss.id + " _create_TA		1 ", "--", "gray" );
		var _btnSetMyHeight = function(h){
			var b = blo0.blBtn( dt1	 ,dt1	 .id + " btnH_" + h + "px " , "H=" + h + "px","gray");
			b .onclick = function(btn_){return function(){_ta.style.height = h + "px";}}(b ); 
		}

		_btnSetMyHeight (20);
		_btnSetMyHeight (50);
		_btnSetMyHeight (100);
		_btnSetMyHeight (200);

		var t = blo0.blTextarea(oBoss, oBoss.id + "ta" , "xd1" , "gold" );
		t.style.width = "100%";
		var dt2	= blo0.blDiv( oBoss ,oBoss.id + " _create_TA		2 ", "==", "gray" );
		return t;
	};
	function _creat_job_UI	( oBoss , jobName , f ) { 
		var o 	= {};
		o.n	= 0;
		o.i	= [];
		o.f	= f;
		o.name	= jobName;
		o.v0	= blo0.blDiv( oBoss ,oBoss.id + jobName + "v0", o.name + "_v0", "lightblue" );
		var btnRun = blo0.blBtn( o.v0 ,o.v0 .id + jobName + "btnRun " , "Run" ,"red");
		btnRun .onclick = function(btn_){
			var v = null;
			return function(){
				if(o.f) o.f();
			}
		}( btnRun ); 
		var btnPlus = blo0.blBtn( o.v0 ,o.v0 .id + jobName + " btnPlus " , "+","gray");
		btnPlus .onclick = function(btn_){ 
			return function(){
				var parent = o.v1;
				o.i[o.n] = blo0.blDiv(parent  , parent .id + jobName + "_i_" + o.n, "i:" + o.n, "green" );

				o.i[o.n].  btnGet = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " Get " , "Get" ,"gray");
				o.i[o.n].  btnSet = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " Set " , "Set" ,"gray");
				o.i[o.n].  btnS1 = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " S1 " , "S1" ,"gold");
				o.i[o.n].  btnS2 = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " S2 " , "S2" ,"gold");
				o.i[o.n].v = blo0.blDiv( o.i[o.n] , o.i[o.n] .id + "v", "--" + o.n, "tomato" );
				 
				o.i[o.n].btnGet.onclick = function(btn_,v_){ 
					return function(){
						_ta.value = v_.innerHTML; 
					}
				}( o.i[o.n]. btnGet,o.i[o.n].v);

				o.i[o.n].btnSet.onclick = function(btn_,v_){ 
					return function(){
						v_.innerHTML = _ta.value; 
					}
				}( o.i[o.n]. btnSet,o.i[o.n].v);

				o.i[o.n].btnS1.onclick = function(btn_,v_){ 
					return function(){
						v_.innerHTML = "https://github.com/littleflute/cchess/issues/71"; 
					}
				}( o.i[o.n]. btnS1,o.i[o.n].v);

				o.i[o.n].btnS2.onclick = function(btn_,v_){ 
					return function(){
						v_.innerHTML = "https://www.w3schools.com/html/default.asp"; 
					}
				}( o.i[o.n]. btnS2,o.i[o.n].v);

				o.n ++;
			}
		}( btnPlus );
		var btnOnOffV1 = blo0.blBtn( o.v0 ,o.v0 .id + jobName + " btnOnOffV1 " , "OnOffV1" ,"brown");
		btnOnOffV1 .onclick = function( btn_,this_ ){ 
			return function(){
				_on_off_div( btn_ , this_.v1 );
			}
		}( btnOnOffV1 , o );
		var btnOnOffV2 = blo0.blBtn( o.v0 ,o.v0 .id + jobName + " btnOnOffV2 " , "OnOffV2" ,"brown");
		btnOnOffV2 .onclick = function( btn_,this_ ){ 
			return function(){
				_on_off_div( btn_ , this_.v2 );
			}
		}( btnOnOffV2 ,o );

		o.v1	= blo0.blDiv( o.v0 , o.v0 .id + jobName + "v1", "--" + o.name + "_v1", "brown" );
		o.v1.style.display = "block";
		o.v2	= blo0.blDiv( o.v0 , o.v0 .id + jobName + "v2", "--" + o.name + "_v2", "lightblue" );
		o.v2.style.display = "block";

		o.fItem1 = function(){
			if( o.i.length > 0){ 
				var ajxHref =  o.i[0].v.innerHTML; 
				var w = new _ajaxWorkClass (o.v2,_ta);
				blo0.blAjx(w,ajxHref); 
			}
		};
		o.fItem2 = function(){
				_ta.value = jobName + " fItem 1";
		};
		return o;
	}
	function _f2		() { 
		this . fItem2 ();
	}
	var _f1		= function() { 
		this . fItem1 ();
	}
}

function _ajaxWorkClass(o,t)
{
	var _t	  = t; 
	var v 	  = o;
	this._2do = function(txt)
	{
		v.innerHTML = txt;
		t.value = txt;
	}
}

//
//
//
function _xdPlxSpiterClass(){
	var v 		= "v0.0.18";
	var name 	= "_xdPlxSpiterClass";
	var _view	= null;
	var _loadTimes	= 0;
	var _tb		= null;
	var _w		= null;
	var _oj		= new _SpiterJobClass;
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
	var _create_MainWnd	= function(oBoss){
		return blo0.blDiv( oBoss ,oBoss.id + "_create_MainWnd", "- MainWnd  -", "cyan" );		
	};
	var _create_toolBar	= function(oBoss){
		return blo0.blDiv( oBoss ,oBoss.id + "_div_toolBar", "-  toolbar  -" ,"blue");		
	};
	var _createUI 	= function(this_ ){
		if(!document.body._xdPlxSpiterLoad_times) document.body._xdPlxSpiterLoad_times = 1;
		else{document.body._xdPlxSpiterLoad_times++; _loadTimes = document.body._xdPlxSpiterLoad_times;}

		if(!_view) alert("no 'id_div__xdPlxSpiter'");
		else{
			_view.innerHTML = name + "-" + v + " : " + document.body._xdPlxSpiterLoad_times;
			_tb		= _create_toolBar (_view);
			_w 		= _create_MainWnd(_view);
			_makeToolBar2ShowObj(blo0, _w , _oj		);
		}		
	};

	this.run = function(c){
		_view = document.getElementById("id_div__xdPlxSpiter");
		_createUI(this);
	}
} 

function _run_xdPlxSpiter() { 
	var c = new _xdPlxSpiterClass;
	c.run(c); 
};  
_run_xdPlxSpiter();

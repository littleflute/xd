// xdl-1 

var _color	= ["red","tomato","gold","black","green","blue","lightblue","yellow","brown","pink","gray","white"];

var _color_bar_class	= function(oBoss){
		var tb		= null;		 
		var _IDs	= [];
		var _btnIDs	= [];
		var _selID	= null;
		var _setSelObj = function(){
			for(var i = 0;i<_btnIDs.length;i++){
				if(_btnIDs[i].innerHTML==_selID){
					_btnIDs[i].style.backgroundColor = blColor[7];
				}
				else{
					_btnIDs[i].style.backgroundColor = blColor[10];
				}
			}
		}
		this.blhAddObj = function (id) {
			if(id) _IDs.push(id);
		}; 
		this.blhCreateUI = function (oBoss) {
			tb = blo0.blDiv( oBoss ,oBoss.id + "_color_bar_class", "_color_bar_class", _color[1]);
			for(var i = 0;i<_color.length;i++){
				var b = blo0.blBtn( tb, tb.id + "btn" + i, i , _color[i]);	
				b.onclick = function(_clr){
					return function(){
						tb.style.backgroundColor = _clr;
						var o = document.getElementById(_selID);
						if(o) o.style.backgroundColor = _clr;
					}
				}(_color[i]);	
			}
			for(var i = 0;i<_IDs.length;i++){
				var b = blo0.blBtn( tb, tb.id + _IDs[i], _IDs[i] , _color[2]);					
				_btnIDs.push(b);
				b.onclick = function(btn,id){
					return function(){
						_selID = id;
						_setSelObj();
					}
				}(b,_IDs[i]);	
			}	
		}; 
};

var c = new _xdPlxSongClass;
c.run(c); 
function _SongJobClass(){
	var v 		= "_SongJobClass_v0.0. 21";
	var _w		= null;
	var _j1		= null; 
	var _ta		= null;
	var _clrTB	= new _color_bar_class;
	this.blrSongUI	= function(b,d){
		_w	= _create_MainSongWnd	(d);
		_ta	= _create_TA		(_w);
		_j1	= _creat_Song_UI	(_w , "mySong ",_f1);  
		_on_off_div( b , d );
	}; 

	this.blrColor	= function(b,d){ 
		_clrTB.blhCreateUI(d);	  
		_on_off_div( b , d );
	}; 

	var _create_MainSongWnd	= function(oBoss){
		var d = blo0.blDiv( oBoss ,oBoss.id + "_create_MainSongWnd", v, _color[0]); 
		_clrTB.blhAddObj(d.id);
		return d;
	};
	var _create_TA		= function(oBoss){
		var dt1	= blo0.blDiv( oBoss ,oBoss.id + " _create_TA		1 ", "--", _color[1]);
		var _btnSetMyHeight = function(h){
			var b = blo0.blBtn( dt1	 ,dt1	 .id + " btnH_" + h + "px " , "H=" + h + "px", _color[1]);
			b .onclick = function(btn_){return function(){_ta.style.height = h + "px";}}(b ); 
		}

		_btnSetMyHeight (20);
		_btnSetMyHeight (50);
		_btnSetMyHeight (100);
		_btnSetMyHeight (200);

		var t = blo0.blTextarea(oBoss, oBoss.id + "ta" , "xd1" , _color[2]);
		_clrTB.blhAddObj(t.id);
		t.style.width = "100%";
		var dt2	= blo0.blDiv( oBoss ,oBoss.id + " _create_TA		2 ", "==", _color[1]); 
		return t;
	};
	function _creat_Song_UI	( oBoss , jobName , f ) { 
		var o 	= {};
		o.n	= 0;
		o.l	= [];
		o.f	= f;
		o.name	= jobName;
		o.v0	= blo0.blDiv( oBoss ,oBoss.id + jobName + "v0", o.name + "_v0", _color[3]);
		var btnRun = blo0.blBtn( o.v0 ,o.v0 .id + jobName + "btnRun " , "Run" , _color[0] );
		btnRun .onclick = function(btn_){
			var v = null;
			return function(){
				if(o.f) o.f();
			}
		}( btnRun ); 
		var btnPlus = blo0.blBtn( o.v0 ,o.v0 .id + jobName + " btnPlus " , "+", _color[1]);
		btnPlus .onclick = function(btn_){ 
			return function(){
				var parent = o.v1;
				o.l[o.n] = blo0.blDiv (parent  , parent .id + jobName + "_i_" + o.n, "line:" + o.n, _color[5]);
				o.l[o.n].style.border = "1px solid gray";
				o.l[o.n].  btnOnOff = blo0.blBtn( o.l[o.n] ,o.l[o.n].id + " btnOnOff  " , "OnOff" , _color[10]);
				var lineWrap = blo0.blDiv( parent   , parent  .id + " lineWrap " + o.n , "" , _color[6]);
				lineWrap.style.display = "block";
				o.l[o.n].  divToolBar = blo0.blDiv( lineWrap   , lineWrap  .id + " divToolBar " + o.n , "LineToolBar" , _color[10]);
				o.l[o.n].  divV = blo0.blDiv( lineWrap   , lineWrap  .id + " divV" + o.n , "divV" + o.n  , _color[8]);				
				o.l[o.n].v = blo0.blDiv( lineWrap , lineWrap.id + "v", "--" + o.n, _color[3] );

				var v = o.l[o.n].  divToolBar;
				o.l[o.n].  btnGet = blo0.blBtn( v ,v.id + " Get " , "Get" , _color[1]);
				o.l[o.n].  btnSet = blo0.blBtn( v ,v.id + " Set " , "Set" ,  _color[1]);
				o.l[o.n].  btnS1 = blo0.blBtn( v ,v.id + " S1 " , "S1" ,_color[4] );
				o.l[o.n].  btnS2 = blo0.blBtn( v ,v.id + " S2 " , "S2" ,_color[4]);
				o.l[o.n].  btnS3 = blo0.blBtn( v ,v.id + " S3 " , "S3" ,_color[4]);
				 
				o.l[o.n].btnOnOff.onclick = function(b,d){ 
					return function(){
						_on_off_div( b , d );
					}
				}( o.l[o.n]. btnOnOff,lineWrap);

				o.l[o.n].btnGet.onclick = function(btn_,v_){ 
					return function(){
						_ta.value = v_.innerHTML; 
					}
				}( o.l[o.n]. btnGet,o.l[o.n].v);

				o.l[o.n].btnSet.onclick = function(btn_,v_){ 
					return function(){
						v_.innerHTML = _ta.value; 
					}
				}( o.l[o.n]. btnSet,o.l[o.n].v);

				o.l[o.n].btnS1.onclick = function(btn_,v_){ 
					return function(){
						v_.innerHTML = "https://github.com/littleflute/cchess/issues/71"; 
					}
				}( o.l[o.n]. btnS1,o.l[o.n].v);

				o.l[o.n].btnS2.onclick = function(btn_,v_){ return function(){v_.innerHTML = "https://www.w3schools.com/html/default.asp"; }}
				( o.l[o.n]. btnS2,o.l[o.n].v);
				o.l[o.n].btnS3.onclick = function(btn_,v_){ return function(){v_.innerHTML = "https://github.com/littleflute/xd/issues/3"; }}
				( o.l[o.n]. btnS2,o.l[o.n].v);

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
		o.v2	= blo0.blDiv( o.v0 , o.v0 .id + jobName + "v2", "--" + o.name + "_v2", _color[10] );
		o.v2.style.display = "block";

		o.fItem1 = function(){
			if( o.l.length > 0){ 
				var ajxHref =  o.l[0].v.innerHTML; 
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
 
function _xdPlxSongClass(){
	var v 		= "v0.0.25";
	var name 	= "_xdPlxSongClass";
	var _view	= null;
	var _loadTimes	= 0; 
	var _w		= null;
	var _oj		= new _SongJobClass;
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
	var _create_MainPlxWnd	= function(oBoss){
		return blo0.blDiv( oBoss ,oBoss.id + "_create_MainWnd", "", _color[0] );		
	};
	var _createUI 	= function(this_ ){
		if(!document.body._xdPlxSongLoad_times) document.body._xdPlxSongLoad_times = 1;
		else{document.body._xdPlxSongLoad_times++; _loadTimes = document.body._xdPlxSongLoad_times;}

		if(!_view) alert("no 'id_div__xdPlxSong'");
		else{
			_view.innerHTML = name + "-" + v + " : " + document.body._xdPlxSongLoad_times;
			_w 		= _create_MainPlxWnd(_view);
			_makeToolBar2ShowObj(blo0, _w , _oj		);
		}		
	};

	this.run = function(c){
		_view = document.getElementById("id_div__xdPlxSong");
		_createUI(this);
	}
} 


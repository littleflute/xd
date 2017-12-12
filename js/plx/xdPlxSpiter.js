// xdl-1

var c = new _xdPlxSpiterClass;
c.run(c); 

function get_file_name(a,b){ return c.blhGetFileName(a,b); }
function get_file_length(a,b){ var n = c.blhGetFileLength(a,b); return "" + n;}
function create_page(titleTxt,bodyHTML){ return c.blhCreatePage (titleTxt,bodyHTML); }
function show_msg(msgTxt1,msgTxt2){ return c.blhShowMsg (msgTxt1,msgTxt2); }


function _SpiterJobClass(){
	var v 		= "v0.0. 153 -";
	var _w		= null;
	var _j1		= null; 
	var _ta		= null;
	var _fileName = "_fileName";
	this.blrUI	= function(b,d){
		_w	= _create_MainWnd	(d);
		_ta	= _create_TA		(_w);
		_j1	= _creat_job_UI	(_w , "job1 ",_f1);  
		_on_off_div( b , d );
	}; 
	this.blhGetFileName = function (a,b){
		var r = "";
		var p = "C:\\Users\\13699\\xd1\\baidu\\VC6_EN\\VC6_EN\\VC6EN\\MyProjects\\XdHtml\\vc6ui\\";
		r = p + _fileName;
		return r;
	}
	this.blhGetFileLength = function(a,b){ return _ta.value.length; }
	this.blhShowMsg	= function(m1, m2){ 
		var d	= blo0.blDiv( _w, _w.id + " ShowMsg ", m1 , "gray" );
		d.innerHTML = m1;
	}; 

	this.blhCreatePage = function(titleTxt , bodyHTML){
		var r = _ta.value;
		return r;
	}

	var _create_MainWnd	= function(oBoss){return blo0.blDiv( oBoss ,oBoss.id + "_create_MainWnd", v, "forestgreen" ); };
	var _create_TA		= function(oBoss){
		var dt1	= blo0.blDiv( oBoss ,oBoss.id + " _create_TA		1 ", "--", "gray" );
		var link2VC6 = blo0.blLink(oBoss ,oBoss .id+"link2VC6 ","link2VC6 ","?xd=save","skyblue");link2VC6.style.display = "none";
		var linkS = blo0.blLink(oBoss ,oBoss .id + " s"," s","vc6ui/xdPlxSpiterSave.html","brown");linkS .style.display = "none"; 
		var _btnSetMyHeight = function(h){
			var b = blo0.blBtn( dt1	 ,dt1	 .id + " btnH_" + h + "px " , "H=" + h + "px","gray");
			b .onclick = function(btn_){return function(){_ta.style.height = h + "px";}}(b ); 
		}

		_btnSetMyHeight (20);
		_btnSetMyHeight (50);
		_btnSetMyHeight (100); 
		_btnSetMyHeight (200);
		var _btn2VC6 = function( txt, clickFun ){
			var b = blo0.blBtn( dt1	 ,dt1	 .id + txt , txt ,"gray");
			b .onclick = function(btn_){return function(){if (clickFun ) clickFun ();}}(b ); 
		}
		_btn2VC6 ("save",function(){link2VC6.click();}); 
		_btn2VC6 ("show",function(){ linkS .click();}); 

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
			var n = 0;
			var s = "";
			return function(){
				n++; if(n>1) return;
				var parent = o.v1;
				o.i[o.n] = blo0.blDiv(parent  , parent .id + jobName + "_i_" + o.n, "i:" + o.n, "green" );

				o.i[o.n].  btnGet = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " Get " , "^" ,"gray");
				o.i[o.n].  btnSet = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " Set " , "v" ,"gray");
				o.i[o.n].  btnparse = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " parse " , "parse" ,"brown");
				o.i[o.n].  btnF1 = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " f1 " , "f1" ,"skyblue");
				o.i[o.n].  btnS1 = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " S1 " , "S1" ,"gold");
				o.i[o.n].  btnS2 = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " S2 " , "S2" ,"gold");
				o.i[o.n].  btnS3 = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " S3 " , "S3" ,"gold");
				o.i[o.n].  btnV_T = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " V_T " , "^" ,blColor[8]);
				o.i[o.n].  btnT_V = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " T_V " , "v" ,blColor[9]);
				o.i[o.n].  btnV3  = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " V3 " , "V3" ,blColor[10]);

				o.i[o.n].  btnFileName_V_T = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " btnFileName_V_T " , "fn_^" ,blColor[8]);
				o.i[o.n].  btnFileName_T_V = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " btnFileName_T_V " , "fn_v" ,blColor[9]);
				o.i[o.n].  btnFileName  = blo0.blBtn( o.i[o.n] ,o.i[o.n].id + " btnFileName " , "FileName" ,blColor[10]);
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

				o.i[o.n].btnparse.onclick = function(btn_,v_){ 
					 
					return function(){						
						eval(_ta.value); 
					}
				}( o.i[o.n]. btnparse,o.i[o.n].v);

				o.i[o.n].btnF1.onclick = function(btn_,v_){ 	
					var ff = function (id){
						var o = document.getElementById(id);
						var s = o.innerHTML;
						o.innerHTML = "xd:" + s;
					}				 
					return function(){						
						_ta.value = ff;
						var s = "";
						s += "var ff = ";
						s += _ta.value;
						s += "\r";
						s += "ff('"+v_.id+"')";
						_ta.value = s;
					}
				}( o.i[o.n]. btnF1,o.i[o.n].v);

				o.i[o.n].btnS1.onclick = function(btn_,v_){return function(){v_.innerHTML = "https://www.biblica.com/bible/niv/genesis/1";}}
				( o.i[o.n]. btnS1,o.i[o.n].v);
				o.i[o.n].btnS2.onclick = function(btn_,v_){ return function(){v_.innerHTML = "https://www.w3schools.com/html/default.asp"; }}
				( o.i[o.n]. btnS2,o.i[o.n].v);
				o.i[o.n].btnS3.onclick = function(btn_,v_){ return function(){v_.innerHTML = "https://github.com/littleflute/xd/issues/3"; }}
				( o.i[o.n]. btnS2,o.i[o.n].v);

				o.i[o.n].btnV_T.onclick = function(btn_,v_){ 
					return function(){
						_ta.value = s;
					}
				}( o.i[o.n]. btnS2,o.i[o.n].v);

				o.i[o.n].btnT_V.onclick = function(btn_,v_){ 
					return function(){
						s = _ta.value ; v_.innerHTML = s;
					}
				}( o.i[o.n]. btnS2,o.i[o.n].  btnV3);

				o.i[o.n].btnFileName_V_T.onclick = function(btn_,v_){ 
					return function(){
						_ta.value = _fileName;
					}
				}( o.i[o.n]. btnS2,o.i[o.n].  btnFileName);

				o.i[o.n].btnFileName_T_V.onclick = function(btn_,v_){ 
					return function(){
						_fileName = _ta.value; v_.innerHTML = _fileName;
					}
				}( o.i[o.n]. btnS2,o.i[o.n].  btnFileName);

				o.i[o.n].btnFileName.onclick = function(btn_,v_){ 
					return function(){
						var a = v_.innerHTML;
						var b = a.split("/");
						var n = b.length;
						var c = b[n-1];
						var d = c.replace(".asp",".html");
						v_.innerHTML = d;
					}
				}( o.i[o.n]. btnS2,o.i[o.n].  btnFileName);


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

		var btnGetLinks = blo0.blBtn( o.v0 ,o.v0 .id + jobName + " btnGetLinks " , "GetLinks" ,blGrey[3]);
		o.vLinks	= blo0.blDiv( o.v0 , o.v0 .id + jobName + "vLinks", "--" + o.name + "_vLinks", blGrey[1] );
		
		btnGetLinks .onclick = function( btn_,v,t ){ 
			var _l = [];
			return function(){ 
				var a = t.value;
				var b = a.split("href=");
				btn_.innerHTML = b.length;
				for (var i = 0;i < b.length; i++)
				{
					var btn = blo0.blBtn( v ,v.id + i , i ,blGrey[4]);
					btn.v = b[i];
					_l.push(btn);
					btn.onclick = function(v_,btn_,t){
						return function(){
							t.value = _l.length + " ::: " + btn_.v;
							for(var j = 0;j<_l.length;j++)
							{
								_l[j].style.backgroundColor = btn_.id==_l[j].id?"yellow":"gray";
							}
						}
					}(v,btn,_ta);
				}
			}
		}( btnGetLinks ,o.vLinks,_ta );

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
		return o;
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
	this.blhGetFileName = function (a,b){ 
		return _oj.blhGetFileName(a,b);
	}
	this.blhGetFileLength = function(a,b){
		return _oj.blhGetFileLength(a,b);
	}
	this.blhCreatePage = function(t,b){
		return _oj.blhCreatePage(t,b);;
	}
	this.blhShowMsg = function (m1, m2 ){
		_oj.blhShowMsg(m1,m2);
	}

}  

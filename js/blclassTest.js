function blClassTest(){				
	this.v		= "v0.0.29";			
	this.name	= "blClassTest";				
	var blo 	= new blClass;								 
	this.blrTest1 	= function(b,v){	
		v.innerHTML = "plxA[nPlxA-1].id = " + plxA[nPlxA-1].id;	 						
	}	 

	var m = blo.blDiv(document.body,"blpMainDiv","blpMainDiv","BlueViolet" );
					 								 
	function _uiDivMovable(id,x,y){							
		var o = blo;								 
		var idBody = id;							 
		var idHead = id + "Header";						 
		var main = o.blDiv(document.body,idBody,"_"+id);			 
		var style ="position: absolute;";			 
		style += "z-index: 9;";			 
		style += "background-color: #f1f1f1;";			 
		style += "text-align: center;";						 
		style += "border: 1px solid #d3d3d3;";			 
		style += "left: 400px";			 
		style += "top: 140px";	 
		main.setAttribute("style", style);		 
		var title = o.blDiv(main,idHead,"========");			 
		style ="padding: 10px;";			 
		style += "z-index: 10;";			 
		style += "cursor: move;";			 
		style += "text-align: center;";			 
		style += "border: 1px solid #fff;";			 
		style += "background-color: #2196F3;";		 	
		title.setAttribute("style", style);				 
		o.blMakeDivMovable(main);				 
		main.style.left 	= x +"px";			 
		main.style.top		= y +"px";			 
		var mi1 = o.blDiv(main,id+"mi1",id+"mi1");			 
		mi1.style.textAlign = "left";					 
		var mi2 = o.blDiv(main,id+"mi2",id+"mi2");			 
		mi2.style.textAlign = "left";					 
		var mi3 = o.blDiv(main,id+"mi3",id+"mi3");			 
		return main;							 
	}
	function _test2(id,x,y,o2Show){	 							 
		var o = blo;								 
		var main = _uiDivMovable(id,x,y);					 
		var mi1 = o.blDiv(main,id+"mi1",id+"mi1");				 
		var mi1bOnOff 	= o.blBtn ( mi1,id+"mi1bOnOff",id+"mi1bOnOff"); 	 
		mi1bOnOff.bOnOff = "+";							
		mi1bOnOff.onclick = function (){  						 
			var mi2 = o.blDiv(main,id+"mi2",id+"mi2");			 
			var oShow = o.blDiv(mi2,id+"oShow",id+"oShow");			 
			if("+"==mi1bOnOff.bOnOff)					 
			{								 
					mi1bOnOff.style.backgroundColor = "red";	 
					mi1bOnOff.bOnOff = "-";				 
					oShow.style.display = "block";			 
					o.blShowObj2Div(oShow,o2Show);			 
			}								 
			else								 
			{								 
					mi1bOnOff.style.backgroundColor = "green";	 
					mi1bOnOff.bOnOff = "+";				 
					oShow.style.display = "none";			 
			}								  
		}				 
		var mi3 = o.blDiv(main,id+"mi3",id+"mi3");	
		o.blLink(mi3,id+"a1","readme","ReadMe.txt?a=100","blue");						 
	}										 
	function _test1(){								
		var t = blo.blTextarea(document.body,"t1","alert('xd');","Aquamarine");	 
		t.style.backgroundColor = "green"; 

		var b = blo.blBtn(document.body,"idBtnRun","run","green");		
		b.onclick = function(){eval(t.value);}					
	}									 
	this.blGo = function(){								
		_test1();		  					
		_test2("blClass",400,100,blo);					
		_test2("blClassTest",700,100,this);							 						
	}									 
	this.blPlxUI = function(t,x,y,o){		
		_test2( t, x, y, o );							 						
	}	
	var plxA 	= [];
	var nPlxA	= 0;								 
	this.blLoadPlx = function(f){	
		var sPath = "js/plx/";
		if(nBlPageLeve){
			sPath = "../" + sPath;
		}
		var id = "plxA_" + nPlxA;
		var src = sPath + f;
		plxA[nPlxA] = blo.blScript("s1",src);
		nPlxA++;							 						
	}	  
}	


function _loadThisFileOK(){ 
	var _blc = new blClass;
	var _blt = new blClassTest;
	var d = document.getElementById("idBlDbgDiv");
	if( d ){ 
		var id 		= "id_" + _blt.name + "_js";
		var html 	= "[" + _blt.name + " " + _blt.v + "] loaded OK!";
		var d1 		= _blc.blDiv(d,id, html,"Aquamarine"); 
	}
	_blc = null;
	_blt = null;
}
_loadThisFileOK();
			
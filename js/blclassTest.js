
function _nav(s)
{
	var v = s;
	var blo = new blClass;	
	var ss = 'z-index:100;overflow: hidden;  background-color: #333;  position: fixed;  bottom: 0;  width: 100%;';
	var ss1 = 'z-index:100;overflow: hidden;  background-color: #333;  position: fixed;  bottom: 0;right: 0;  width: 10%;';
	var sa = 'float: left;  display: block;  color: #f2f2f2;  text-align: center;  padding: 14px 16px;  text-decoration: none;  font-size: 17px;';
	var myNav = blo.blDiv(document.body,"myNav","","green");
	myNav.style = ss;
	var html = ' <a href="../index.html">Home</a> <a href="./index.html">[.]</a>  <a href="?l=0">'+v+'</a>';
	var navContent = blo.blDiv(myNav,"navContent",html,"#333");
	var m=navContent.getElementsByTagName('a');
	for(i in m)
	{
		m[i].style = sa;
	}
	var xddbg = document.getElementById("xddbg");
	var bLock = true;
	var lock =  blo.blBtn(myNav,"lock","lock","red");
	lock.style.float = "right";
	
	lock.onclick = function()
	{
		if(bLock) {
			navContent.style.display = "none";
			bLock = false;lock.style.backgroundColor = "green";
		}
		else 		
		{	
			navContent.style.display = "block"; 
			bLock = true;lock.style.backgroundColor = "red";
		}
	}
	myNav.onmouseover = function(){ 
		xddbg.innerHTML = this.id + " : mouse over. bLock = " + bLock;
        this.style = ss;
		navContent.style.display = "block"; 
	}
	myNav.onmouseout = function(){ 
		if(bLock){
			navContent.style.display = "block";
			lock.innerHTML = "lock";
		}
		else{
			xddbg.innerHTML = "mouse out. bLock = " + bLock;
			
			navContent.style.display = "none";
			this.style = ss1;
			lock.innerHTML = "unlock";
		}
	} 	
}
function blClassTest(){	
	this.v		= "v0.0.94";	 
	var _myName	= "blclassTest";
	this.blhGetName	= function(){		
		return _myName;
	};
	function _PlxMngClass(){
		this.v = "v0.0.4";
		var oMsg = null;
		this.blhSetMsgUI = function(o){oMsg = o;};
		this.blhShow = function(s){oMsg.style.display = s;};		
	};			
	var _blPlxMng = new _PlxMngClass;				
	var blo 	= new blClass;	 					 
	this.blrPlxMng 	= function(b,v){	
		var b1 = blo.blBtn(v,"PlxMng"+1,"btn1","red");
		b1.onclick = function(){_blPlxMng.blhShow("none");}
		var b2 = blo.blBtn(v,"PlxMng"+2,"btn2","green");	
		b2.onclick = function(){_blPlxMng.blhShow("block");}	
		var b3 = blo.blBtn(v,"PlxMng"+3,"runOff","red");
		b3.onclick = function(){
			var blRunTA = document.getElementById("id_bl_RunTA");
			if(blRunTA) blRunTA.style.display = "none";}
		var b4 = blo.blBtn(v,"PlxMng"+4,"runOn","green");	
		b4.onclick = function(){
			var blRunTA = document.getElementById("id_bl_RunTA");
			if(blRunTA) blRunTA.style.display = "block";}				
	}	 
	_htmlThisFileURL 	= function(){
		var f = _myName + ".js";
		var sPath = "js/";
		if(1==nBlPageLeve) sPath = "../" + sPath;
		var src = sPath + f;
		return "<a target='_blank' href=" + src + " style='color:red;'>sourc</a>";
	}
	var _bShowAbout = true;
	this.blrAbout 	= function(b,v){
		var s = "";
		if(_bShowAbout)
		{
			_bShowAbout = false; 
			b.style.backgroundColor = "purple";
			s += _htmlThisFileURL();
		}
		else{
			_bShowAbout = true;
			b.style.backgroundColor = "red";
		}
		v.innerHTML = s;
	};
							 
	this.blrTest1 	= function(b,v){	
		v.innerHTML = "plxA[nPlxA-1].id = " + plxA[nPlxA-1].id;	 						
	}	 

					 								 
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
		var mi1bOnOff 	= o.blBtn ( mi1,id+"mi1bOnOff","*");
		mi1bOnOff.style.float = "right"; 	 
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
		var blRunTA = document.getElementById("id_bl_RunTA");
		if(blRunTA){						
			var t = blo.blTextarea(blRunTA,"t1","blt.blLoadPlx('blPlxXau.js');","skyblue");
			var b = blo.blBtn(blRunTA,"idBtnRun","run","green");		
			b.onclick = function(){eval(t.value);}	
		}
		_test2("blPlxMngUI",10,310,_blPlxMng);	
		var dMng = document.getElementById("blPlxMngUImi3");
		var oMsg = blo.blDiv(dMng,"blPlxMng","blPlxMng","BlueViolet" );
		_blPlxMng.blhSetMsgUI(oMsg);			
	}									 
	this.blGo = function(){								
		_test1();		  					
		_test2("blClass",700,10,blo);					
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
		plxA[nPlxA] = blo.blScript(id,src);
		nPlxA++;							 						
	}	  
}	


function _loadThisFileOK(rv){ 
	var _blc = new blClass;
	var _blt = new blClassTest;
	function _loadTestClass(){	
		_blt.blLoadPlx('blPlxXau.js');
		this.style.backgroundColor="green";
	}
	function _xdShowClass(){ 
		var oc = _blc;		
		var d = oc.blDiv(this.parentElement,"id_div_show_blclassTest","","lightblue");
		if(d.innerHTML == "")	{oc.blShowObj2Div(d,_blt);this.style.backgroundColor="red";}
		else 			{d.innerHTML = "";this.style.backgroundColor="green";}
	}
  	 
	var d = document.getElementById("id_div_blclassTest");
	if( d ){ 
		var oc = _blc;
		var id 		= "id_" + _blt.blhGetName() + "_js";
		var html 	= rv + " [" + _blt.blhGetName() + " " + _blt.v + "] loaded OK!";
		var d1 		= _blc.blDiv(d,id, html,"Aquamarine"); 
		var b1 		= oc.blBtn(d1,"id_Btn_blClassTest_1","blClassTest","gray");b1.onclick=_xdShowClass;
		var b2 		= oc.blBtn(d1,"id_Btn_blClassTest_2","test","gray");b2.onclick = _loadTestClass ;
	}
}
_loadThisFileOK(21);

var nPlx = 0, x = 785, y = 100, dy = 80;							
function loadPlxOK(o){ 
	nPlx++;						
	var d 		= document.getElementById("blPlxMng");
	if(!d){
		d 	= document.getElementById("id_div_blclassTest");
	}  
	var blo 	= new blClass;	
	var id		= "id_Plx_Load_OK_" + nPlx;
	var html 	= "";							
	var name 	= o.name;							
	if(undefined == name) name = o.blhGetName();				
	html += " plx: " + name + " is loaded OK.";
	blo.blDiv(d,id,html,"gray");
	html = new Date;
	blo.blDiv(d,id+"time",html,"gray");
	blo = null;
	 
	
	var t 	= new blClassTest;	
	t.blPlxUI(name + "Test",x,y+nPlx*dy,o);				
	t = null;
	if( (undefined != o.blhLoadMeFinished)) o.blhLoadMeFinished();	
}
			
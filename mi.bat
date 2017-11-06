del index.html
echo ^<!DOCTYPE html^>  >>index.html
echo ^<html^>		>>index.html
echo ^<head^>		>>index.html
echo ^<title^>		>>index.html
echo index_v0.8.7	>>index.html 
echo ^</title^>		>>index.html

echo ^</head^>	>> 	index.html
echo ^<body^>	>> 	index.html

echo ^<div id="xdMainDiv"^>	>> 	index.html
echo ^</div^>	>> 	index.html

echo ^<script src="js/blclass.js"^>			>>index.html
echo ^</script^>					>>index.html

echo ^<script^>										>>index.html
echo function blClassTest(){								>>index.html
echo 	var blo 	= new blClass;							>>index.html
echo 	var blm 	= new blMp3Engine;						>>index.html
echo 	var blcc	= new blCChess;							>>index.html
echo 	var m = blo.blDiv(document.body,"blpMainDiv","blpMainDiv");			>>index.html
echo 	function _test3(id,x,y,o){							>>index.html  
echo 		var main 	= _uiDivMovable(id,x,y);				>>index.html 
echo 		var mi1 	= blo.blDiv(main,id+"mi1",id+"mi1");			>>index.html 
echo 		var btnS1 	= blo.blBtn (mi1,id+"btnS1",id+"btnS1"); 		>>index.html 
echo 		var mi2 	= blo.blDiv(main,id+"mi2",id+"mi2");			>>index.html 
echo 		blo.blAudio(mi2,"mp3Play","01.mp3");			 		>>index.html 
echo 		btnS1.onclick = function (){	  					>>index.html  
echo 			//* 								>>index.html  
echo 			var a = document.getElementById("mp3Play");			>>index.html  
echo 			 alert(a.src);							>>index.html 
echo 			//*/								>>index.html  
echo 		}									>>index.html  
echo 		var blm 	= new blMp3Engine("v1.3.9");				>>index.html
echo 	}										>>index.html 
echo 	function _test1(){								>>index.html
echo 		var t = blo.blTextarea(document.body,"t1","alert('xd');","gray");	>>index.html
echo 		var b = blo.blBtn(document.body,"idBtnRun","run","green");		>>index.html
echo 		b.onclick = function(){eval(t.value);}					>>index.html
echo 	}										>>index.html 
echo 	function _uiDivMovable(id,x,y){							>>index.html
echo 		var o = blo;								>>index.html 
echo 		var idBody = id;							>>index.html 
echo 		var idHead = id + "Header";						>>index.html 
echo 		var main = o.blDiv(document.body,idBody,"_"+id);			>>index.html 
echo 		var style ="position: absolute;";			>>index.html 
echo 		style += "z-index: 9;";			>>index.html 
echo 		style += "background-color: #f1f1f1;";			>>index.html 
echo 		style += "text-align: center;";						>>index.html 
echo 		style += "border: 1px solid #d3d3d3;";			>>index.html 
echo 		style += "left: 400px";			>>index.html 
echo 		style += "top: 140px";			>>index.html 
echo 		main.style =style;			>>index.html 
echo 		var title = o.blDiv(main,idHead,"========");			>>index.html 
echo 		style ="padding: 10px;";			>>index.html 
echo 		style += "z-index: 10;";			>>index.html 
echo 		style += "cursor: move;";			>>index.html 
echo 		style += "text-align: center;";			>>index.html 
echo 		style += "border: 1px solid #fff;";			>>index.html 
echo 		style += "background-color: #2196F3;";			>>index.html 
echo 		title.style =style;					>>index.html 
echo 		o.blMakeDivMovable(main);				>>index.html 
echo 		main.style.left 	= x +"px";			>>index.html 
echo 		main.style.top		= y +"px";			>>index.html 
echo 		var mi1 = o.blDiv(main,id+"mi1",id+"mi1");			>>index.html 
echo 		mi1.style.textAlign = "left";					>>index.html 
echo 		var mi2 = o.blDiv(main,id+"mi2",id+"mi2");			>>index.html 
echo 		mi2.style.textAlign = "left";					>>index.html 
echo 		var mi3 = o.blDiv(main,id+"mi3",id+"mi3");			>>index.html 
echo 		return main;							>>index.html 
echo 	}									>>index.html 

echo 	function _test2(id,x,y,o2Show){							>>index.html 
echo 		var o = blo;								>>index.html 
echo 		var main = _uiDivMovable(id,x,y);					>>index.html 
echo 		var mi1 = o.blDiv(main,id+"mi1",id+"mi1");				>>index.html 
echo 		var mi1bOnOff 	= o.blBtn ( mi1,id+"mi1bOnOff",id+"mi1bOnOff"); 	>>index.html 
echo 		mi1bOnOff.bOnOff = "+";							>>index.html
echo 		mi1bOnOff.onclick = function (){  					>>index.html  
echo 			//*								>>index.html 
echo 			var mi2 = o.blDiv(main,id+"mi2",id+"mi2");			>>index.html 
echo 			var oShow = o.blDiv(mi2,id+"oShow",id+"oShow");			>>index.html 
echo 			if("+"==mi1bOnOff.bOnOff)					>>index.html 
echo 			{								>>index.html 
echo 					mi1bOnOff.style.backgroundColor = "red";	>>index.html 
echo 					mi1bOnOff.bOnOff = "-";				>>index.html 
echo 					oShow.style.display = "block";			>>index.html 
echo 					o.blShowObj2Div(oShow,o2Show);			>>index.html 
echo 			}								>>index.html 
echo 			else								>>index.html 
echo 			{								>>index.html 
echo 					mi1bOnOff.style.backgroundColor = "green";	>>index.html 
echo 					mi1bOnOff.bOnOff = "+";				>>index.html 
echo 					oShow.style.display = "none";			>>index.html 
echo 			}								>>index.html
echo 			//*/								>>index.html  
echo 		}									>>index.html 
echo 	}										>>index.html 
echo 	this.run = function(){								>>index.html
echo 		_test1();								>>index.html
echo 		_test2("blMp3EngineTest",55,1,blm);					>>index.html
echo 		_test2("blCChess",55,221,blcc);						>>index.html
echo 		_test2("blClassTest",600,300,blt);					>>index.html
echo 		_test2("blClass",400,100,blo);						>>index.html
echo 		_test3("test3",500,100,blo);						>>index.html
echo 	}										>>index.html
echo 	this.loadPlx = function(){							>>index.html
echo 		var blpXau = blo.blScript("blpXau","js/plx/blPlxXau.js");				>>index.html
echo 		var blPlxMp3Player = blo.blScript("blPlxMp3Player","js/plx/blPlxMp3Player.js");		>>index.html

echo 	}										>>index.html
echo 	this.uiPlx = function(title,x,y,o){ 						>>index.html
echo 		_test2(title,x,y,o);							>>index.html
echo 	}										>>index.html
echo }											>>index.html

echo 	function loadPlxOK(o){ 								>>index.html
echo 		var d = document.getElementById("blpMainDiv");				>>index.html
echo 		var html = d.innerHTML;							>>index.html
echo 		html += "<br> plx: " + o.name + " is loaded OK.<br>";			>>index.html
echo 		d.innerHTML = html;							>>index.html
echo 		blt.uiPlx(o.name + "Test",55,233,o);					>>index.html
echo 	}										>>index.html
echo var blt = new blClassTest;								>>index.html
echo blt.run(); 									>>index.html
echo blt.loadPlx(); 									>>index.html
echo ^</script^>									>>index.html


echo ^</body^>			>> 	index.html
echo ^</html^>			>> 	index.html
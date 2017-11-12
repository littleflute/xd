// file: blXau.plx
// by littleflute
// 2017/11/5 13:10 bjt
var blPlxMp3Player 	= {};
blPlxMp3Player.name 	= "blPlxMp3Player";
blPlxMp3Player.v 	= "v0.3.8";
blPlxMp3Player.path	= "https://littleflute.github.io/Elton-John/Captain%20Fantastic%20and%20the%20Brown%20Dirt%20Cowboy/cd01/";

var _blPlayer = function (oBoss){ 
 var d = document.getElementById("idDivBlMp3Player");
 if(!d){
    d = document.createElement("div");
    d.id = "idDivBlMp3Player";
    d.style.border = "1px solid green";
    oBoss.appendChild(d);
    var v = document.createElement("audio");
    v.id = "idBlMp3Player";
    v.controls = true;
    v.volume = 0.2;
    d.appendChild(v);
    v.oLast = null;
    v.playObj = function (o){  
       if(v.oLast) {						
            v.oLast.style.backgroundColor = "green";}
       v.src = blPlxMp3Player.path + o.innerHTML;
       v.play();
       o.style.backgroundColor="yellow";	
       v.oLast = o;
    }

    var l = document.createElement("div");
    l.id = "idDivLyr";
    l.style.border = "1px solid red";
    d.appendChild(l);
 }
};
var _blMakeList = function(fs){	 		
       var boss = document.getElementById("idDivBlMp3Player");			
       for (var i = 1; i<fs.length;i++)
       {	
          var d = document.createElement("button");
          d.style.border = "1px solid blue";
       	  d.id = i;//"song"+i;
          d.onclick = function(){
		var v = document.getElementById("idBlMp3Player");
                v.playObj(this);
	  }
          d.innerHTML = fs[i];
          boss.appendChild(d);
       } 	
	var b = document.getElementById("1");	
        b.click();
		 
};		
var _update = function()
{
       var p = document.getElementById("idBlMp3Player"); 		
       var lr = document.getElementById("idDivLyr");	 	 
       lr.innerHTML = new Date();
       if(p.ended){
          var v = document.getElementById("idBlMp3Player");
          var id = parseInt(v.oLast.id)+1;
          var b = document.getElementById(id);
          if(b==null) b = document.getElementById("1");	
          b.click();
       }
}
blPlxMp3Player.blrList = function(btn,div){
	var blo = new blClass;
	div.innerHTML = "";
	var t = blo.blTextarea(div,"idTaList",blPlxMp3Player.path+"m.js","blue");
	var bMake = blo.blBtn(div,"idBtnMakeList","make","green");
	var bDbg = blo.blBtn(div,"idBtnDbg","dbg","gray");
	var b1 = blo.blBtn(div,"idBtn1","b1","white");
	b1.onclick = function (){
		t.value = "https://littleflute.github.io/Elton-John/Captain%20Fantastic%20and%20the%20Brown%20Dirt%20Cowboy/m.js";
	}
	var b2 = blo.blBtn(div,"idBtn2","b2","white");
	b2.onclick = function (){
		t.value = "file:///C:/Users/13699/xd/blMp3Player-master/blMp3Player-master/cd1/m.js";
	}
	var n = 0;
	bMake.myTimeFun = function (){
		if(f.length>1){
			bDbg.innerHTML = (n++)+"f:"+f.length;
		}
		else{	
			bDbg.innerHTML = n++;
		} 
		_update();
	}
	bMake.onclick = function (){
		var sList = blo.blScript("idScritpList",t.value);
		var str = t.value;
		var n = str.lastIndexOf("/")+1;
		blPlxMp3Player.path = str.slice(0,n);
		setInterval(this.myTimeFun, 1000);
		var oBoss = blo.blDiv(div,"idPlayerBoss","oBoss","green");
		_blPlayer(oBoss);
		_blMakeList(f);
	}
}
 
if (typeof loadPlxOK == "function") {		    		
	loadPlxOK(blPlxMp3Player);
}
 
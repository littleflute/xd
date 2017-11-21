// file: blPlxMp3Player.js
// by littleflute
// 2017/11/5 13:10 bjt
 
function blPlxMp3PlayerClass(this_){
	var fileName = "blPlxMp3Player"; //************************************ file name ***************
	var v = "v0.0.71";
	var blo = new blClass;
	var p = document.getElementById("id_div_LoadPlx_blPlxMp3Player"); //*** parent div id ***
	var html = "blPlxMp3Player.js - " + v + " is loaded OK!";
	blo.blDiv(p,"id_div_blPlxMp3Player_1",html); //************************* my debug div id ***
	var id = "id_board_" + fileName; //************************************ my board id  ***************
	var l = null;
	var lo = null;
	var timer = null; 
	var a = null;
	var sMsg = "msg:";
	var songIndex = 0;
	blo.blhCreateBoard2ShowObj(id,500,200,this);
	var divMySrcLink = function (oParent){
		var s = document.baseURI;
		var path = s.slice(0,1+s.lastIndexOf("/"));	 
		var nXd = path.lastIndexOf("/xd/");
		if(nXd!=-1){ 
			var mySrcPath = path + "js/plx/blPlxMp3Player.js";
		}
		else{ 
			var mySrcPath = path + "https://littleflute.github.io/xd/js/plx/blPlxMp3Player.js";		
		}
		var html = "<a target='_blank' href='" + mySrcPath + "' style='color:purple;background-color:skyblue;'>src</a>";
		var mySrc = blo.blDiv(oParent,"id_blPlxMp3Player_file_src",html,"silver");
	};
	
	var loadListFun = function (id,src){
		var mySrc = src; 
		 return function(){ 
			oScriptList = blo.blScript("id_script_"+id,mySrc); 
		};
	};
	var _playIndex = function (n){
		if(lo){
			a.src = lo.s[n].musicLink;
			a.play();
		}
	};
	function _blCreatePlayObj(oBoss)
	{ 
    		var dt = document.createElement("div"); 
    		var da = document.createElement("div"); 
		function fnTimer(o){
			var n = 0;
		
			return function(){n++;o.innerHTML = n + ": idx=" + songIndex + " sMsg=" + sMsg;};
		}
		var t = setInterval(fnTimer(dt), 100);
    		oBoss.appendChild(dt); 
    		oBoss.appendChild(da); 
    		var a = document.createElement("audio");
    		a.id = "id_audio_1";
    		a.controls = true;
    		a.volume = 0.2;
    		da.appendChild(a); 
		a.addEventListener("canplaythrough",function(){        		
        		sMsg = "canPlaythrough";
    		});

    		return a;
	}
	var divPlayerBox = function (boxParent){ 
		var oParent = blo.blDiv(boxParent,"id_div_PlayerBox_Wrap", "playerBoxWrap","Brown");
		a = _blCreatePlayObj(oParent);
		var b1 = blo.blBtn(oParent,"id_Btn_PlayerBox_btn1", "play","silver");
		b1.onclick = function(this_){ 
			var b = 0;
			return function(){
				if(b==0){
					b = 1;this_.innerHTML = "Pause";sMsg = "Load ...";
					if(a.src ==""){
						_playIndex(0); songIndex = 0;
					}
					else{
						a.play();
					}
				}
				else		{b = 0;this_.innerHTML = "Play";a.pause();}
			};
		}(b1); 
		var bNext = blo.blBtn(oParent,"id_Btn_PlayerBox_bNext", "next","silver");
		bNext.onclick = function(this_){  
			return function(){
				songIndex++;
				_playIndex(songIndex);
			};
		}(bNext); 
		var bPre = blo.blBtn(oParent,"id_Btn_PlayerBox_bPre", "Pre","silver");
		bPre.onclick = function(this_){  
			return function(){
				songIndex--;
				_playIndex(songIndex);
			};
		}(bPre); 
	};
	var divListBox = function (oParent){
		var s = document.baseURI;
		var path = s.slice(0,1+s.lastIndexOf("/"));	 
		var nXd = path.lastIndexOf("/xd/");
		if(nXd!=-1){ 
			var mySrcPath = path + "js/list/";
		}
		else{ 
			var mySrcPath = path + "https://littleflute.github.io/xd/js/list/";		
		}
		 var b1 = blo.blBtn(oParent,"id_Btn_blPlxMp3Player_List_Box_1", "loadList1","silver");
		 b1.onclick = loadListFun("list_1",mySrcPath + "1.js");
		 var b2 = blo.blBtn(oParent,"id_Btn_blPlxMp3Player_List_Box_2", "loadList2","silver");
		 b2.onclick = loadListFun("list_2",mySrcPath + "1.js");
		 l = blo.blDiv(oParent,"id_Div_blPlxMp3Player_List_Box", "ListBox","LimeGreen"); 
	};
	this.blrPlayer = function(b,d){//test
		d.innerHTML = v;
		divMySrcLink (d);
		divPlayerBox (d);
		divListBox (d);		
	}

	function _makeSongList(){
		var lw = blo.blDiv(l,"id_div_songList_wrap","songListWrap_v0.0.4","DarkCyan");
		var songNum = lo.s.length;
    		for(var i=0;i<songNum;i++){
			blo.blDiv(lw,"id_div_song_"+i,"id_div_song_"+i + "_" + lo.s[i].musicName,"Coral");
        	}
	}
	this.blCallBackFun = function(o){ 
		lo = o;
		_makeSongList();
	}
}

var blPlxMp3Player 	= {};
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
            v.oLast.style.backgroundColor = "goldrod";}
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
          var d = document.createElement("div");
          boss.appendChild(d);
          var b = document.createElement("button");
          b.style.border = "1px solid blue";
       	  b.id = i; 
          b.onclick = function(){
		var v = document.getElementById("idBlMp3Player");
                v.playObj(this);
	  }
          b.innerHTML = fs[i];
          boss.appendChild(b);
       } 	
	document.getElementById("1").click();		 
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
 

	var t = blo.blTextarea(div,"idTaList",blPlxMp3Player.path+"m.js","skyblue");
	t.style.width = "100%";
	var divList = blo.blDiv(div,"id_div_List_1","List:","silver");
	var bMake = blo.blBtn(divList,"idBtnMakeList","make","green");
	var bDbg = blo.blBtn(divList,"idBtnDbg","dbg","gray");
	var b1 = blo.blBtn(divList,"idBtn1","b1","white");
	b1.onclick = function (){
		t.value = "https://littleflute.github.io/Elton-John/Captain%20Fantastic%20and%20the%20Brown%20Dirt%20Cowboy/m.js";
	}
	var b2 = blo.blBtn(divList,"idBtn2","b2","white");
	b2.onclick = function (){
		t.value = "C:/Users/13699/xd1/Mp3Player/blMp3Player-master/cd1/m.js";
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
  
var blPlayerObj = new blPlxMp3PlayerClass(blPlxMp3Player); 

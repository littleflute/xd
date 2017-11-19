// file: blclass_utf-8.js
// by littleflute
// 2017/11/17 3:31m bjt

function blClass ()
{ 
    this.name	= "blClass";
    this.v 	= "v1.0.69";
    this.blrSrc = function (b,v)
    {
	if(v.innerHTML == ""){
		var s = document.baseURI;
		var path = s.slice(0,1+s.lastIndexOf("/"));	
		//v.innerHTML = path;
		_blDiv(v,"id_blclass_file_path",path);
		var nXd = path.lastIndexOf("/xd/");
		var tb = _blDiv(v,"id_blclass_file_xd_path",nXd);
		if(nXd!=-1){
			var pathTest = path + "js/blclassTest.js";
		}
		else{
			var pathTest = "https://littleflute.github.io/xd/js/blclassTest.js";		
		}
		var b1 = _blBtn(tb,"id_blclass_tb_b_1","b1");
		b1.onclick = function(){			
			var d = _blDiv(this.parentElement,"id_div_blclassTest","blClassTest","skyblue");	 
			var s = _blScript("id_script_blclassTest",pathTest);
		};
				
	}
	else{
		v.innerHTML = "";
	}
    }
 
    _blDiv = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("div");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gray";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }
    this.blDiv = function (oBoss,id,html,bkClr){
        return _blDiv(oBoss,id,html,bkClr);
    }
    this.blShowObj2Div = function (oDivBoss,obj)
    {
	_blShowObj2Div(oDivBoss,obj);        
    }
    _blShowObj2Div = function (oDivBoss,obj)
    {        
        var oBoss = oDivBoss;
        if(!oBoss) {
           oBoss = document.createElement("div");
           oBoss.id = "divBlShowObj";
           oBoss.style.border = "green 1px solid";
           document.body.appendChild(oBoss);
        } 
        if(!oBoss){
            alert("boss error!");return;
        }
        oBoss.innerHTML = "";
        for(i in obj)
        {
          if(i[0]=="b"&&i[1]=="l"&&i[2]=="h") continue;

          var b = document.createElement("button");
          b.id = b.innerHTML = i;
          if(i[0]=="b"&&i[1]=="l") b.style.backgroundColor = "yellow";
          oBoss.appendChild(b);
          var d = document.createElement("div");
          d.innerHTML = obj[i];
          d.style.border = "blue 1px solid";
          d.style.backgroundColor = "green";
          d.style.color = "yellow";
          oBoss.appendChild(d);

          if(i[0]=="b"&&i[1]=="l"&&i[2]=="r"){
		b.style.backgroundColor = "red";
		d.innerHTML = ""; 
		b.onclick = function(i_,b_,v_){
			return function(){
				var go = obj[i_];
				if (typeof go == "function") {
			    		go(b_,v_);
				}
			} 
		}(i,b,d);
	  }
        }
    }    

	this.blAudio = function (oBoss,id,src)					
 	{  								
   		var s = "";							 
	   	s += "<";						 
	   	s += "audio id=";						
   		s += id;							
	   	s += " controls>";								 
	   	s += "<source src='";
		s += src;
		s += "' type='audio/mpeg'>";		 
		s += "Your browser does not supoort hte audio element"				
	   	s += "</audio>";								 
	   	oBoss.innerHTML = s;						 
	 }	

	this.blScript = function (id,src){  
    		return _blScript(id,src);
	}
	_blScript = function (id,src){
    		var r = document.getElementById(id);
    		if(!r){
        		r = document.createElement("script");
        		r.id = id;
    		}
    		r.src = src; 
    		document.body.appendChild(r);
    		return r;
	}

    this.blAjx = function(worker,href)
    {
        var xmlhttp;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
               worker._2do(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET",href,true);
        xmlhttp.send();
    }

    this.blTextarea = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("Textarea");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"gray";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }

    this.blBtn = function (oBoss,id,html,bkClr){ 
        return _blBtn(oBoss,id,html,bkClr);
    }
    _blBtn = function (oBoss,id,html,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("button");
            r.id = id;
    	    r.innerHTML = html; 
            r.style.backgroundColor=bkClr?bkClr:"green";
    	    if(oBoss!=null)oBoss.appendChild(r);
        }
        return r;
    }
    this.blLink = function (oBoss,id,html,href,bkClr){
        var r = document.getElementById(id);
        if(!r){
            r = document.createElement("a");
    	    var t = document.createTextNode(html);
    	    r.setAttribute("href", href);
    	    r.setAttribute("target", "_blank");
            r.id = id; 
    	    r.style.backgroundColor = bkClr?bkClr:"blue";
        }
        r.innerHTML = html; 
        oBoss.appendChild(r);
        return r;
    }

    this.blMakeDivMovable = function (elmnt) {
      	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	var idHeader = document.getElementById(elmnt.id + "Header");
      	if (idHeader) {
        	/* if present, the header is where you move the DIV from:*/
        	idHeader.onmousedown = dragMouseDown;
      	} else {
        	/* otherwise, move the DIV from anywhere inside the DIV:*/
        	elmnt.onmousedown = dragMouseDown;
      	}

      	function dragMouseDown(e) {
        	e = e || window.event;
        	// get the mouse cursor position at startup:
        	pos3 = e.clientX;
        	pos4 = e.clientY;
        	document.onmouseup = closeDragElement;
        	// call a function whenever the cursor moves:
        	document.onmousemove = elementDrag;
		if (idHeader) {
        		idHeader.innerHTML = pos3 + "," + pos4;
      		}	
      	}

      function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
	
}//END: function blClass ()

function blMp3Engine(ver){			 
	var v = "v0.0.7";
	var n1 = 0;
	var html1 = "";
	var blo = new blClass;
	this.blrInf = function(b,v){ 
		if(0==n1) 
		{
			html1 = b.innerHTML;
			blo.blAudio(v,"bla1","02.mp3");
		}
		n1++;  
		b.innerHTML = html1 + n1;
	}
	this.blrGo = function(){
		alert("blrGo");
	}								
}//END: blMp3Engine

function blCChess(){			 
	var v = "v0.0.4";
	var n1 = 0;
	var html1 = "";
	var blo = new blClass;

function xdPoint(div,x,y,w,h,clr){
  pobj=document.createElement("p");   
  div.appendChild(pobj);   
  with(pobj){   
    style="border:solid 0px"+clr;
    style.position	= "absolute";
    style.left    =x+"px";
    style.top     =y+"px";
    style.width   =w+"px";
    style.height  =h+"px";
 
    style.backgroundColor=clr;
  }   
} function xdLine(div,x1, y1, x2, y2,clr)
{
    if (x1 > x2)
    {
        var _x2 = x2;
        var _y2 = y2;
        x2 = x1;
        y2 = y1;
        x1 = _x2;
        y1 = _y2;
    }
    var dx = x2-x1, dy = Math.abs(y2-y1),
    x = x1, y = y1,
    yIncr = (y1 > y2)? -1 : 1;

    if (dx >= dy)
    {
        var pr = dy<<1,
        pru = pr - (dx<<1),
        p = pr-dx,
        ox = x;
        while ((dx--) > 0)
        {
            ++x;
            if (p > 0)
            {
                xdPoint(div,ox, y, x-ox, 1,clr);
                y += yIncr;
                p += pru;
                ox = x;
            }
            else p += pr;
        }
        xdPoint(div,ox, y, x2-ox+1, 1,clr);
    }

    else
    {
        var pr = dx<<1,
        pru = pr - (dy<<1),
        p = pr-dy,
        oy = y;
        if (y2 <= y1)
        {
            while ((dy--) > 0)
            {
                if (p > 0)
                {
                    xdPoint(div,x++, y, 1, oy-y+1,clr);
                    y += yIncr;
                    p += pru;
                    oy = y;
                }
                else
                {
                    y += yIncr;
                    p += pr;
                }
            }
            xdPoint(div,x2, y2, 1, oy-y2+1,clr);
        }
        else
        {
            while ((dy--) > 0)
            {
                y += yIncr;
                if (p > 0)
                {
                    xdPoint(div,x++, oy, 1, y-oy,clr);
                    p += pru;
                    oy = y;
                }
                else p += pr;
            }
            xdPoint(div,x2, oy, 1, y2-oy+1,clr);
        }
    }
}
function _pos(o,x0,y0,i,j,Dxy)
{
    var x1 = x0 + i*Dxy;
    var y1 = y0 + j*Dxy;
    var d  = Dxy/8;
  if(i!=0){
    xdLine(o,x1-d,y1-d,x1-2*d,y1-d,"#00f");
    xdLine(o,x1-d,y1-d,x1-d,y1-2*d,"#00f");
    xdLine(o,x1-d,y1+d,x1-2*d,y1+d,"#00f");
    xdLine(o,x1-d,y1+d,x1-d,y1+2*d,"#00f");
  }
  if(i!=8){
    xdLine(o,x1+d,y1-d,x1+2*d,y1-d,"#00f");   
    xdLine(o,x1+d,y1-d,x1+d,y1-2*d,"#00f");
    xdLine(o,x1+d,y1+d,x1+2*d,y1+d,"#00f");
    xdLine(o,x1+d,y1+d,x1+d,y1+2*d,"#00f");
  }
}
//画棋盘函数
function xdBoard(div,x0,y0,Dxy)
{
  var o = div;
  var i = 1;
  var x1 = x0, y1 = y0;
  for(;i<=10;i++)//十横线
  {
    xdLine(o,x1,y1,x1+8*Dxy,y1,"#00f");
    y1 += Dxy;    
  }
  x1 = x0;
  y1 = y0;
  for(i=0;i<=1;i++)//左右边界
  {
    xdLine(o,x1,y1,x1,y1+9*Dxy,"#00f");
    x1 += Dxy*8;    
  }
  x1 = x0;
  y1 = y0;
  for(i=0;i<=7;i++)//双方半场内竖线
  {
    xdLine(o,x1+Dxy,y1,x1+Dxy,y1+4*Dxy,"#00f");
    xdLine(o,x1+Dxy,y1+5*Dxy,x1+Dxy,y1+9*Dxy,"#00f");
    x1 += Dxy;    
  }

  x1 = x0 + 3*Dxy;
  y1 = y0;
  for(i=0;i<=1;i++)//双方仕线
  {
    xdLine(o,x1,y1,x1+2*Dxy,y1+2*Dxy,"#00f");
    xdLine(o,x1,y1+2*Dxy,x1+2*Dxy,y1,"#00f");
    y1 += Dxy*7;    
  }

  x1 = x0 + 1*Dxy;
  y1 = y0 + 2*Dxy;
  var d = Dxy/8;
  for(i=0;i<=1;i++)//双方炮位线
  {
    xdLine(o,x1-d,y1-d,x1-2*d,y1-d,"#00f");
    xdLine(o,x1-d,y1-d,x1-d,y1-2*d,"#00f");
    xdLine(o,x1-d,y1+d,x1-2*d,y1+d,"#00f");
    xdLine(o,x1-d,y1+d,x1-d,y1+2*d,"#00f");

    xdLine(o,x1+d,y1-d,x1+2*d,y1-d,"#00f");
    xdLine(o,x1+d,y1-d,x1+d,y1-2*d,"#00f");
    xdLine(o,x1+d,y1+d,x1+2*d,y1+d,"#00f");
    xdLine(o,x1+d,y1+d,x1+d,y1+2*d,"#00f");
    y1 += Dxy*5;    
  }
 
  x1 = x0 + 7*Dxy;
  y1 = y0 + 2*Dxy;
  for(i=0;i<=1;i++)//双方炮位线
  {
    xdLine(o,x1-d,y1-d,x1-2*d,y1-d,"#00f");
    xdLine(o,x1-d,y1-d,x1-d,y1-2*d,"#00f");
    xdLine(o,x1-d,y1+d,x1-2*d,y1+d,"#00f");
    xdLine(o,x1-d,y1+d,x1-d,y1+2*d,"#00f");
    xdLine(o,x1+d,y1-d,x1+2*d,y1-d,"#00f");
    xdLine(o,x1+d,y1-d,x1+d,y1-2*d,"#00f");
    xdLine(o,x1+d,y1+d,x1+2*d,y1+d,"#00f");
    xdLine(o,x1+d,y1+d,x1+d,y1+2*d,"#00f");
    y1 += Dxy*5;    
  }

  _pos(o,x0,y0,0,3,Dxy);
  _pos(o,x0,y0,2,3,Dxy);
  _pos(o,x0,y0,4,3,Dxy);
  _pos(o,x0,y0,6,3,Dxy);
  _pos(o,x0,y0,8,3,Dxy);


  _pos(o,x0,y0,0,6,Dxy);
  _pos(o,x0,y0,2,6,Dxy);
  _pos(o,x0,y0,4,6,Dxy);
  _pos(o,x0,y0,6,6,Dxy);
  _pos(o,x0,y0,8,6,Dxy);
}

	var x = 30;
	var y = 30;
	var d = 25;
	this.blrBoard = function(b,v){ 
		if(0==n1) 
		{
			html1 = b.innerHTML;
		}
		n1++;  
		b.innerHTML = html1 + n1;
		b.id = "blrBoard";
			v.style.position	= "absolute";
			v.style.width 		= "400px";
			v.style.height		= "400px";
			v.innerHTML = "";
			xdBoard(v,x,y,d);
	}
	this.blrGo = function(b,v){
		d+=2;
		var btnBoard = document.getElementById("blrBoard");
		btnBoard.click();
	}
	this.blrReset = function(b,v){
		d = 25;
		var btnBoard = document.getElementById("blrBoard");
		btnBoard.click();
	}									
}//END: blCChess
 
function _blLoadClass(c){ 
	var oc = new c;
	function _loadTestClass(){	
		var d = oc.blDiv(this.parentElement,"id_div_blclassTest","","skyblue");	 
		if(d.innerHTML == "")	{
			var s = document.baseURI;
			var path = s.slice(0,1+s.lastIndexOf("/"));		 
			oc.blScript("id_script_blclassTest",path+"js/blclassTest.js");
			this.style.backgroundColor="green";
		} 
	}
	function _loadRunJS (){		
		var d = oc.blDiv(this.parentElement,"id_div_RunJS","","lightblue"); 
		if(d.innerHTML == "")	{
			var d1 = oc.blDiv(d,"id_div_RunJS_test","","lightgray");
			var t = oc.blTextarea(d1,"id_div_RunJS_TA","alert('xd4');","skyblue");
			t.style.width = "95%";// = "width:95%;height:150px;";
			t.style.height = "150px";// = "width:95%;height:150px;";
			var b1 = oc.blBtn(d,"id_btn_RunJS_run","run","green"); 
			b1.style.float = "right";
			b1.onclick = function(){eval(t.value);};
			var bs1 = oc.blBtn(d,"id_btn_RunJS_src1","s1","purple"); 
			bs1.style.float = "right";
			bs1.onclick = function(){t.value = "//s1";};
			this.style.backgroundColor="red";
		}
		else
		{	d.innerHTML = ""; 
			this.style.backgroundColor="green";
		}
	}
	function _showClass (){		
		var d = oc.blDiv(this.parentElement,"id_div_show_blclass","","lightblue");
		if(d.innerHTML == "")	{oc.blShowObj2Div(d,oc);this.style.backgroundColor="red";}
		else 			{d.innerHTML = "";this.style.backgroundColor="green";}
	}
  	function _loadThisFileOK(rv){ 		
		var d = document.getElementById("id_div_blclass");
		if( d ){ 
			var d1 = oc.blDiv(d,"idFile_blclass_utf-8_js", rv + " :: 插件【blcass_utf-8.js " + oc.v + "】 loaded OK!","GreenYellow");
			var b1 = oc.blBtn(d1,"idBtn_blclass_1","blclass","gray");b1.onclick=_showClass;
			//var b2 = oc.blBtn(d1,"idBtn_blclass_2","blclassTest","gray");b2.onclick = _loadTestClass ;
			var b3 = oc.blBtn(d1,"idBtn_blclass_3","RunJS");b3.onclick = _loadRunJS ;	
			b3.style.float = "right";		
		}
	}
	this.v 		= "v0.0.22";
	this.blrGo 	= function(rv){
		_loadThisFileOK(rv); 
	};
}

var l = new _blLoadClass(blClass);
l.blrGo(48);			
function blPlxIdxClass(){
	var v		= "blPlx List: v0.0.31";
	var blo 	= new blClass; 
	var p 		= document.getElementById("id_div_toolbar_plx").parentElement; 
	var l		= [
				"blPlx1",
				"blPlx2",
				"blPlx3",
				"blPlxLyric",
				"blPlxMp3Player",
				"blPlxXau",
	];
	l.all 		= function(c){
		for(i in this){
			var id = "id_plx_NO_"+i;
			var html = this[i]; 
			if(-1==html.lastIndexOf("function")) {
				var b = blo.blBtn(p,id,html,"purple");
				b.onclick = function(f){
					var bb = false;
					var d	= null;
					return function(){
						if(!bb)	{
								bb = true;
								d = _blLoadPlx(f);
								this.style.backgroundColor="white";
								d.style.display = "block";
								var board = document.getElementById(d.idBoard);
								board.style.display = "block";	 
						}
						else	{
								bb = false;
								this.style.backgroundColor="gray";
								d.style.display = "none"; 
								var board = document.getElementById(d.idBoard);
								board.style.display = "none";	
						}
					}
				}(this[i]);
			}
		}
	};
	_blMakeIdx 	= function()
	{ 
		p.innerHTML = "3 ::"; 
		var b = blo.blBtn(p,"id_blPlx_List","blPlxList_"+v,"Silver");
		l.all();		
	};
	_blLoadPlx	= function(f)
	{ 
		var id = "id_div_LoadPlx_"+f;
		var html = f;
		var s = document.baseURI;
		var path = s.slice(0,1+s.lastIndexOf("/"));	 
		var nXd = path.lastIndexOf("/xd/"); 
		if(nXd!=-1){
			html = path + "js/plx/" + f + ".js";
		}
		else{
			html = "https://littleflute.github.io/xd/js/plx/" + f + ".js";		
		}
		var d = blo.blDiv(p,id,id,"gold");
		id = "script_" + id;
		var s = blo.blScript(id,html);
		d.idBoard = "id_board_" + f;
		return d;
	};
	_blMakeIdx(); 
}
var idx = new blPlxIdxClass;  
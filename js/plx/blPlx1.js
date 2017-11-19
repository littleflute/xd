function blPlx1Class(){
	this.blTest = function(){//test
	}
	var v = "v0.0.7";
	var blo = new blClass;
	var p = document.getElementById("id_div_LoadPlx_blPlx1");
	var html = "blPlx1.js - " + v + " is loaded OK!";
	blo.blDiv(p,"id_div_blPlx1_1",html); 
	blo.blhCreateBoard2ShowObj("id_board_plx1",500,200,this);
}
new blPlx1Class;
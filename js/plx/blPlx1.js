function blPlx1Class(){
	var f = "blPlx1";
	var v = "v0.0.21";
	var blo = new blClass;
	var p = document.getElementById("id_div_LoadPlx_blPlx1");
	var html = "blPlx1.js - " + v + " is loaded OK!";
	blo.blDiv(p,"id_div_blPlx1_1",html); 
	var id = "id_board_" + f;
	blo.blhCreateBoard2ShowObj(id,500,200,this);
	this.blrAboutMe = function(b,d){//test
		d.innerHTML = v;
	}
	this.blrTestMDiv = function(b,d){//test
		var d0 = blo.blMDiv(document.body,"MDivTest1","MDivTest1");
	}
}
new blPlx1Class;
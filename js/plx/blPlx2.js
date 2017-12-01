function blPlx2Class(){
	var f = "blPlx2";
	var v = "v0.0.1";
	var blo = new blClass;
	var p = document.getElementById("id_div_LoadPlx_blPlx2");
	var html = "blPlx1.js - " + v + " is loaded OK!";
	blo.blDiv(p,"id_div_blPlx2_1",html); 
	var id = "id_board_" + f;
	blo.blhCreateBoard2ShowObj(id,500,200,this);
	this.blrAboutMe = function(b,d){//test
		d.innerHTML = v;
	}
	this.blrQuit = function(b,d){//test
		var d0 = d.parentElement.parentElement.parentElement;
		d.innerHTML = d0.id;
	}
	this.blTest = function(){//test
	}
}
new blPlx2Class;
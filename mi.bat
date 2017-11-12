del index.html
echo ^<!DOCTYPE html^>  >>index.html
echo ^<html^>		>>index.html
echo ^<head^>		>>index.html
echo ^<title^>		>>index.html
echo index_v1.1.18	>>index.html 
echo ^</title^>						>>index.html
echo ^<meta charset="UTF-8"^>								>>index.html 
echo ^<meta name="viewport" content="width=device-width, initial-scale=1"^>		>>index.html 
echo ^<link rel="stylesheet" href="w3schools/w3css/4/w3.css"^>					>>index.html 
echo ^<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"^>	>>index.html 
echo ^<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"^>	>>index.html 
echo ^<style^>										>>index.html 
echo body {font-family: "Lato", sans-serif}						>>index.html 
echo .mySlides {display: none}								>>index.html 
echo ^</style^>										>>index.html 

echo ^</head^>	>> 	index.html
echo ^<body^>	>> 	index.html

echo ^<!-- Navbar --^>						>>index.html 
echo ^<div class="w3-top"^>						>>index.html 
echo   ^<div class="w3-bar w3-black w3-card"^>	>>index.html 
echo    ^<a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"^>^<i class="fa fa-bars"^>^</i^>^</a^>			 	>>index.html  
echo    ^<a href="vc6/index.html" class="w3-bar-item w3-button w3-padding-large"^>vc6^</a^>						>>index.html
echo    ^<a href="Mp3Player/index.html" class="w3-bar-item w3-button w3-padding-large"^>Mp3Player^</a^>					>>index.html
echo    ^<a href="w3schools/index.html" class="w3-bar-item w3-button w3-padding-large"^>w3schools^</a^>					>>index.html
echo    ^<div class="w3-dropdown-hover w3-hide-small"^>		 	>>index.html  
echo      ^<button class="w3-padding-large w3-button" title="More"^>MORE* ^<i class="fa fa-caret-down"^>^</i^>^</button^>		 	>>index.html       
echo       ^<div class="w3-dropdown-content w3-bar-block w3-card-4"^>		 	>>index.html  
echo         ^<a target="_blank" href="https://github.com/littleflute/xd" class="w3-bar-item w3-button"^>github_xd^</a^>	 	>>index.html  
echo         ^<a href="#" class="w3-bar-item w3-button"^>Extras^</a^>		 	>>index.html  
echo         ^<a href="#" class="w3-bar-item w3-button"^>Media^</a^>		 	>>index.html  
echo       ^</div^>								 	>>index.html  
echo     ^</div^>		 							>>index.html  
echo     ^<a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"^>^<i class="fa fa-search"^>^</i^>^</a^>		 	>>index.html  
echo   ^</div^>		 	>>index.html  
echo ^</div^>		 	>>index.html  

echo ^<!-- Navbar on small screens --^>			>>index.html
echo ^<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px"^>		>>index.html
echo  ^<a href="colors" class="w3-bar-item w3-button w3-padding-large"^>colors^</a^>		>>index.html 
echo ^</div^>		>>index.html

echo ^<!-- Page content --^>		>>index.html
echo ^<div class="w3-content" style="max-width:2000px;margin-top:46px"^>		>>index.html

echo ^<div id="xdMainDiv" ^>^</div^>				>>index.html
echo ^<div id = "idBlDbgDiv" style = "background-color: Bisque; "^>BlDbgDiv^</div^>		>>index.html

echo ^</div^>										>>index.html
echo ^<!-- End Page Content --^>							>>index.html

echo ^<script src="js/blclass.js"^>^</script^>			>>index.html 
echo ^<script src="js/blclassTest.js"^>^</script^>			>>index.html 

echo ^<script^>											>>index.html
echo // Used to toggle the menu on small screens when clicking on the menu button		>>index.html
echo function myFunction() {									>>index.html
echo     var x = document.getElementById("navDemo");						>>index.html
echo     if (x.className.indexOf("w3-show") == -1) {						>>index.html
echo         x.className += " w3-show";								>>index.html
echo     } else { 										>>index.html
echo         x.className = x.className.replace(" w3-show", "");					>>index.html
echo     }											>>index.html
echo }												>>index.html
  
echo 	function loadPlxOK(o){ 								>>index.html
echo 		var d = document.getElementById("blpMainDiv");				>>index.html
echo 		var html = d.innerHTML;							>>index.html
echo 		html += "<br> plx: " + o.name + " is loaded OK.<br>";			>>index.html
echo 		d.innerHTML = html;							>>index.html
echo 		blt.blPlxUI(o.name + "Test",55,233,o);					>>index.html
echo 	}										>>index.html
echo var nBlPageLeve = 0;								>>index.html
echo var blt = new blClassTest;								>>index.html
echo blt.blGo(); 									>>index.html 
echo //blt.blLoadPlx("blPlxMp3Player.js");						>>index.html
echo blt.blLoadPlx("blPlxLyric.js");						>>index.html
echo ^</script^>									>>index.html


echo ^</body^>			>> 	index.html
echo ^</html^>			>> 	index.html
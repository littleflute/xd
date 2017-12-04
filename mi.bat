del index.html
echo ^<!DOCTYPE html^>  >>index.html
echo ^<html^>		>>index.html
echo ^<head^>		>>index.html
echo ^<title^>		>>index.html
echo index_v1.1.68					>>index.html 
echo ^</title^>						>>index.html
echo ^<meta charset="UTF-8"^>								>>index.html 
echo ^<meta name="viewport" content="width=device-width, initial-scale=1"^>		>>index.html 
echo ^<link rel="stylesheet" href="w3schools/w3css/4/w3.css"^>				>>index.html 
echo ^<link rel="icon" href="favicon.png" type="image/x-icon"^>				>>index.html  
echo ^<style^>										>>index.html 
echo body {font-family: "Lato", sans-serif}						>>index.html 
echo .mySlides {display: none}								>>index.html 
echo ^</style^>										>>index.html 


echo ^</head^>	>> 	index.html
echo ^<body^>	>> 	index.html

echo ^<!-- Navbar --^>						>>index.html 
echo ^<div class="w3-top"^>						>>index.html 
echo   ^<div class="w3-bar w3-black w3-card"^>	>>index.html 
echo    ^<a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"^>^<i class="fa fa-bars"^>^</i^>^</a^>			>>index.html  
echo    ^<a href="?l=0" class="w3-bar-item w3-button w3-padding-large"^>Home^</a^>							>>index.html		 	 
echo    ^<a href="vc6/index.html" class="w3-bar-item w3-button w3-padding-large"^>vc6^</a^>						>>index.html
echo    ^<a href="Mp3Player/index.html" class="w3-bar-item w3-button w3-padding-large"^>Mp3Player^</a^>					>>index.html
echo    ^<a href="w3schools/index.html" class="w3-bar-item w3-button w3-padding-large"^>w3schools^</a^>					>>index.html

echo    ^<!-- ----------------------------------------------More----------------------------------------------------- --^>		>>index.html 
echo    ^<div class="w3-dropdown-hover w3-hide-small"^>		 									>>index.html  
echo      ^<button class="w3-padding-large w3-button" title="More"^>MORE* ^<i class="fa fa-caret-down"^>^</i^>^</button^>		 >>index.html       
echo       ^<div class="w3-dropdown-content w3-bar-block w3-card-4"^>		 							>>index.html  
echo         ^<a target="_blank" href="https://github.com/littleflute/xd" class="w3-bar-item w3-button"^>github_xd^</a^>		>>index.html  
echo         ^<a target="_blank" href="https://github.com/littleflute/cchess" class="w3-bar-item w3-button"^>github_cchess^</a^>		>>index.html  
echo         ^<a target="_blank" href="http://www.beautifullover.org" class="w3-bar-item w3-button"^>beautifullover.org^</a^>		>>index.html  
echo         ^<a target="_blank" href="https://people.highline.edu/llouie/links.php" class="w3-bar-item w3-button"^>people.highline.edu^</a^>	 	>>index.html  
echo         ^<a target="_blank" href="https://www.w3schools.com" class="w3-bar-item w3-button"^>w3schools.com^</a^>		 	>>index.html  
echo         ^<a target="_blank" href="http://littleflute.github.io/CodeMirror/" class="w3-bar-item w3-button"^>CodeMirror^</a^>	>>index.html 
 
echo         ^<a target="_blank" href="http://www.google.com" class="w3-bar-item w3-button"^>google^</a^>		 		>>index.html  
echo         ^<a target="_blank" href="https://cbcpubliclibrary.net/" class="w3-bar-item w3-button"^>cbcpubliclibrary.net/^</a^>	>>index.html  
echo       ^</div^>								 	>>index.html  
echo     ^<!-- --------------------------------------------------------------------------------------------------- --^>			>>index.html 

echo     ^</div^>		 							>>index.html  
echo     ^<a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"^>^<i class="fa fa-search"^>^</i^>^</a^>		 	>>index.html  
echo   ^</div^>		 	>>index.html  
echo ^</div^>		 	>>index.html  

echo ^<!-- Navbar on small screens --^>			>>index.html
echo ^<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px"^>		>>index.html
echo  ^<a href="vc6/index.html" class="w3-bar-item w3-button w3-padding-large"^>colors^</a^>						>>index.html 
echo  ^<a href="Mp3Player/index.html" class="w3-bar-item w3-button w3-padding-large"^>Mp3Player^</a^>					>>index.html 
echo  ^<a href="w3schools/index.html" class="w3-bar-item w3-button w3-padding-large"^>w3schools^</a^>					>>index.html 
echo ^</div^>		>>index.html

echo ^<!-- Page content --^>		>>index.html
echo ^<div class="w3-content" style="max-width:2000px;margin-top:46px"^>		>>index.html

echo ^<div id="xdMainDiv" ^>^</div^>							>>index.html
echo ^<div id = "id_div_blclass" style = "background-color: Bisque;"^>^</div^>		>>index.html
echo ^<div id="id_bl_RunTA"^>^</div^>							>>index.html
echo ^</div^>										>>index.html
echo ^<!-- End Page Content --^>							>>index.html


echo ^<script src="js/blclass_utf-8.js"^>^</script^>					>>index.html 

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
 
echo var nBlPageLeve = 0;								>>index.html
echo //var blt = new blClassTest;								>>index.html
echo //blt.blGo(); 									>>index.html 
echo //blt.blLoadPlx("blPlxMp3Player.js");						>>index.html
echo //blt.blLoadPlx("blPlxLyric.js");							>>index.html
echo // blt.blLoadPlx("blPlxXau.js");							>>index.html
echo ^</script^>									>>index.html


echo ^</body^>			>> 	index.html
echo ^</html^>			>> 	index.html
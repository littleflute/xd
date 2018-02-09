del mp3list.txt
 

setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0

echo {									>> mp3list.txt

echo     "title":"%1",							>> mp3list.txt
echo     "artist":"%2", 							>> mp3list.txt
echo     "url": "https://littleflute.github.io/xd/english/",				>> mp3list.txt
 
for /F "delims="  %%a in ('dir /b *.jpg') do (	
	call set /a x = !x! + 1
	echo        "pic!x!":"%%a",					>> mp3list.txt
) 


echo     "audioList":[							>> mp3list.txt
for /F "delims="  %%a in ('dir /b *.mp3') do (	
	call set /a x = !x! + 1
	echo         "%%a",						>> mp3list.txt
)
echo     ],      							>> mp3list.txt


echo     "lrcList":[							>> mp3list.txt
for /F "delims="  %%a in ('dir /b *.lrc') do (	
	call set /a x = !x! + 1
	echo         "%%a",						>> mp3list.txt
)
echo     ]      							>> mp3list.txt

echo }									>> mp3list.txt

@echo off  
echo ^</div^>	 

﻿//file: 03_lrc.js
var lrc03 = function()
{
/* _begin_ 
[by:www.beautifullover.org]
[00:00.00]如果你喜欢(www.beautifullover.org)，请介绍给更多的同学哦
[00:00.01]Episode 02: The Blind Date  ACT I
[00:07.30]Excuse me. Can you help me?
[00:08.96]Sure, what do you want?
[00:10.77]Where is 83 Wooster Street?
[00:13.25]That's easy. Walk to the corner.
[00:16.62]Then make a left turn.
[00:18.58]Then walk two blocks to the traffic light.
[00:21.60]Make another left to Wooster.
[00:23.22]Thank you.
[00:24.94]To the corner and then a left?
[00:26.87]Yeah. A left.
[00:28.23]Hot dog? Only seventy-five cents.
[00:30.05]No. Thank you. I have a dinner date.
[00:47.72]555-9470...and it's busy....
[00:59.25]Try again.
[01:05.87]555-9470...and it's still busy.
[01:21.16]Excuse me, ma'am.
[01:22.35]I'm looking for 83 Wooster Street.
[01:25.85]Yes. Wooster Street is two blocks,
[01:28.87]and 83 is to the right, about two houses.
[01:35.35]Thank you, thank you!
[01:37.03]You're welcome.
[01:48.00]Who is it?
[01:49.58]Harry Bennett. Is this Susan?
[01:51.36]Yes, it is. Come up.
[01:52.89]I'm on the top floor.
[01:55.51]Hello, Harry. It's nice to meet you.
[01:58.53]Nice to meet you, Susan.
[02:00.78]Sorry I'm late.
[02:02.68]The traffic. The parking. I was lost.
[02:08.60]What pretty flowers! Thank you.
[02:10.51]Oh, please come in.
[02:13.18]Don't worry about being late. It's fine.
[02:16.53]Excuse the mess. I just moved here.
[02:20.09]Oh, I'd like you to meet my sister-in-law Marilyn.
[02:23.14]Marilyn Stewart, this is Harry Bennett.
[02:25.58]Pleased to meet you.
[02:26.42]Nice to meet you, Harry.
[02:28.33]Are we too late for our dinner reservation?
[02:30.26]No, the restaurant will hold our table.
[02:32.47]I know the owner very well.
[02:33.54]I eat there a lot.
[02:34.64]Do you know the phone number of the restaurant?
[02:36.42]I'd like to call home
[02:38.30]and leave the number with the baby-sitter.
[02:39.60]Sure. The number is... five five five...seventeen twenty.
[02:50.30]May I use the phone?
[03:01.74]Five five five...one seven two oh. Hello?
[03:07.21]Hi, Michelle. It's Daddy.
[03:08.44]Can I speak to Betty?
[03:10.89]I want to leave the phone number of the restaurant...
[03:15.01]Hi, Betty. I'll be at five five five...seventeen twenty.
[03:19.98]OK. Thanks. See you later.
[03:24.79]Well, that's done. Shall we go?
[03:27.30]I'm ready. See you later, Marilyn.
[03:29.52]Have a nice evening.
[03:31.28]Bye, Marilyn. Hope to see you again.
[03:32.97]Me, too. Have fun!
[03:35.25]Thanks.
[03:39.68]After you.
_end_
*/
}
var od = document.getElementById("lrcdata");
if(!od){
	od = document.createElement("span");
	od.id = "lrcdata";
	od.style.display = "none";
	document.body.appendChild(od);
}
od.innerHTML = lrc03;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
//file: 04_lrc.js
var lrc04 = function()
{
/* _begin_ 

[by: www.beautifullover.org ]
[00:00.00]�����ϲ�� www.beautifullover.org ����ܸ������ͬѧŶ
[00:00.01]Episode 02: The Blind Date  ACT II
[00:12.94]Ah! Miss Stewart! Welcome!
[00:14.69]How are you?
[00:15.54]Fine, Somsak. And you?
[00:16.99]Fine, thank you.
[00:18.31]This is my friend Harry Bennett.
[00:20.38]Pleased to meet you.
[00:21.26]Very nice to meet you.
[00:22.57]Any friend of Miss Stewart's is welcome at Somsak's.
[00:25.50]Follow me, please.
[00:27.92]I like it here.
[00:28.89]I do, too. I come here often.
[00:32.99]A special place for special people.
[00:35.68]Thank you, Somsak.
[00:39.43]Well! Nice restaurant.
[00:45.77]Would you like something to drink?
[00:47.04]Yes, I'd like a glass of ginger ale with ice.
[00:49.73]Harry, what would you like?
[00:52.14]Do you have a dry white wine?
[00:54.02]How about a California chablis?
[00:55.54]Chablis is fine.
[00:57.46]What would you like to eat?
[00:59.60]I'd like the mee krob.
[01:01.59]Harry, would you like to see a menu?
[01:03.47]No, it's Ok.
[01:04.42]I'll have the mee krob also.
[01:09.96]What is it?
[01:12.34]Crispy fried noodles. I love them.
[01:15.80]May I bring you a salad?
[01:17.06]Oh yes.
[01:18.20]What do you recommend today?
[01:19.65]I recommend rose-petal salad.
[01:21.71]Special for new friends.
[01:24.65]Rose-petal salad?
[01:26.51]Why not?
[01:28.21]I'll take care of everything.
[01:33.38]I hope you're hungry.
[01:36.18]What? Oh, yes. Starving. Well, I...
[01:43.75]Well, I ...
[01:47.71]What do you do at Universe Toy Company?
[01:50.10]I'm the vice-president of new toy development.
[01:53.03]Terrific!
[01:54.94]I know you 're a CPA.
[01:57.48]That's true. Harry Bennett,
[01:59.31]certified public accountant.
[02:01.25]I love numbers.
[02:02.98]I do some work for Smith and Dale,
[02:04.04]Your company's accounting firm.
[02:06.04]And so...
[02:09.40]Here we are.
[02:10.94]Yes.
[02:12.51]I have a daughter.
[02:13.68]I know. How old is she?
[02:15.99]She's nine years old.
[02:17.44]That's a nice age. What's her name?
[02:19.50]Michelle.
[02:20.98]Do you have a picture of her?
[02:33.42]She's very pretty.
[02:35.79]Thank you.
[02:43.38]Rose-petal salad.
[02:46.05]And there's a phone call for you, Mr. Bennett.
[02:49.50]Excuse me, Susan.
[02:52.31]I hope nothing is wrong.
[02:54.85]I'll get the rest of the dinner.
[02:56.16]Excuse me.
[03:10.33]Please forgive me, Susan, but...
[03:12.26]I have to leave. I feel terrible, but...
[03:16.56]What's the matter?
[03:18.29]My daughter isn't feeling well.
[03:20.15]Oh no! Is it serious?
[03:22.66]I don't know. The baby-sitter says she has a stomachache,
[03:26.51]and she's crying.
[03:27.36]I'll have to go home.
[03:29.08]Will you forgive me?
[03:30.01]Of course. I'm so sorry for Michelle.
[03:33.05]And you didn't have a chance to eat.
[03:34.85]Oh, it's OK.
[03:36.31]Let me take you home first.
[03:37.53]No, no. Please, go ahead.
[03:40.07]It's our first date.
[03:42.08]We'll make another.
[03:43.62]Please don't worry.
[03:46.54]I'll phone you.
[03:47.46]I hope your daughter is all right. Good-bye.
[03:51.43]Good-bye.


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
od.innerHTML = lrc04;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
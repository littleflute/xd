//file: 05_lrc.js
var lrc05 = function()
{
/* _begin_ 
[by: littleflute]
[00:00.00] littleflute ������ܸ������ͬѧŶ
[00:00.01]Episode 02: The Blind Date  ACT III
[00:19.72]What happened?
[00:21.91]The baby-sitter called.
[00:23.94]His daughter is sick.
[00:26.43]What's wrong?
[00:28.06]I think she has a stomachache.
[00:32.36]He's a good father.
[00:37.14]So... what do you think of him?
[00:41.19]He's very nice.
[00:43.22]But I think he was nervous tonight.
[00:45.86]It was his first date in two years.
[00:51.57]Will you see him again?
[00:53.51]I hope so.
[00:58.01]This food is delicious.
[01:01.96]He didn't get a thing to eat.
[01:04.31]You ordered enough for three or four people,
[01:06.87]but I'm not complaining.
[01:08.87]The food is delicious.
[01:12.58]Who is that?
[01:14.29]Do you think it's...
[01:15.80]No. You won't believe it, Marilyn!
[01:24.72]I believe it. Even without looking.
[01:29.97]Hi!
[01:31.14]How...?
[01:31.96]Your downstairs neighbor let me in.
[01:35.10]Did you go home?
[01:36.17]I did , but everything is OK,
[01:37.71]so I decided to come back.
[01:40.51]To apologize for leaving so early,
[01:43.00]I brought you a little gift.
[01:45.24]It's a bonsai tree
[01:45.96]for your new apartment.
[01:48.02]Hi, Marilyn. I hope it's not too late.
[01:50.24]Oh, not at all. We're still eating.
[01:52.73]Please, come in. Join us.
[01:55.89]It's our meal from the restaurant.
[01:59.46]And how is your daughter?
[02:01.54]Oh, she's fine.
[02:02.30]It was only a tummy ache.
[02:04.31]It's good that you went back.
[02:06.42]Yes, I think it's important for me to be there
[02:09.85]since her mother died.
[02:11.64]I agree. Aren't you hungry?
[02:16.33]As a matter of fact... I am hungry.
[02:19.90]There's lots of food left.
[02:22.85]Mmm, this is delicious!
[02:25.46]Enjoy!
[02:26.90]I'm going to excuse myself.
[02:29.03]I have a lot of work to do to get ready for tomorrow.
[02:33.07]Good night, Harry. It was nice meeting you.
[02:34.81]Bye, Marilyn.
[02:36.04]Good night, Susan.
[02:37.32]Good night, Marilyn.
[02:40.77]She's going to a fashion show here in the city tomorrow.
[02:43.86]She is sleeping here
[02:45.26]so she won't have to travel from Riverdale in the morning.
[02:48.27]You two must be close.
[02:50.96]we are.
[02:52.14]The whole Stewart family is close.
[02:55.47]I like that.
[03:06.64]And then, two years ago, my wife died.
[03:10.63]You miss her.
[03:13.06]I do...yes, but I have Michelle...
[03:15.81]and with time...
[03:20.29]Is there anyone else in your life?
[03:24.07]No, not yet. What about you?
[03:29.62]Oh, I date occasionally,
[03:31.67]but my work keeps me busy.
[03:34.13]Ooh, speaking of keeping busy-
[03:36.21]I have an early start tomorrow,
[03:37.63]and the baby-sitter has to get home.
[03:41.22]Where did the time go?
[03:43.05]It's midnight.
[03:48.96]Thank you, Susan.
[03:50.16]I had a nice evening.
[03:52.77]Me, too, Harry.
[04:02.23]Harry?
[04:03.92]Yes?
[04:05.51]I'd like to meet your daughter someday.
[04:09.32]Does that mean that I can see you again?
[04:12.07]Of course.
[04:13.14]Wonderful. I'll call you,
[04:14.93]and we'll go out to dinner.
[04:16.16]Please do.
[04:16.85]I promise I won't leave early.
[04:19.15]It was for a good reason.
[04:22.25]You know something?
[04:24.36]What?
[04:25.34]I think we're going to be good friends.
[04:28.88]Good night, Susan.
[04:30.07]Good night, Harry,
[04:31.60]Have a safe trip home.
[04:41.85]Are you all right?
[04:44.34]Sorry.
[04:46.38]I never liked that umbrella stand.
[04:51.17]Good night, Harry.


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
od.innerHTML = lrc05;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
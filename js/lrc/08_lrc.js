//file: 08_lrc.js
var lrc08 = function()
{
/* _begin_ 

[by: littleflute ]
[00:00.00]�����ϲ��  littleflute  ����ܸ������ͬѧŶ
[00:00.01]Episode 03: Grandpa's Trunk  ACT III
[00:01.37]Ladies and gentlemen,
[00:01.94]Amtrak is happy to announce our arrival in New York City.
[00:03.57]The train will be stopping in five minutes.
[00:04.61]Please check to be sure you have your belongings.
[00:07.17]And have a good stay in the Big Apple.
[00:09.20]Thank you.
[00:10.40]Well, here we are.
[00:12.62]It was so nice meeting you, Mr.Stewart.
[00:15.44]And nice meeting you, too, Mrs.Tobin.
[00:18.42]Please look us up.
[00:19.87]We're in the phone book.
[00:21.14]Dr. Philip Stewart, in Riverdale.
[00:24.13]Your son?
[00:25.15]That's right. And have a good time in New York.
[00:30.23]And don't be so independent.
[00:32.66]You're very lucky to have a caring family.
[00:48.05]When can we go fishing?
[00:49.36]Robbie, we'll go fishing soon,
[00:52.72]and we'll take your dad with us.
[00:54.62]I'm ready, Grandpa. You name the day.
[00:58.45]That's a great idea, Grandpa!
[01:00.20]Philip needs a day off.
[01:02.42]Let's give him our presents--now.
[01:04.43]Good idea.
[01:05.82]Presents--for me?
[01:11.39]From me and Marilyn.
[01:13.72]And this one's from me.
[01:15.69]I looked all over the house to find it.
[01:33.72]Richard, these are terrific pictures.
[01:43.83]This one really brings back memories.
[01:49.22]You remember that day, Robbie?
[01:50.75]I sure do. It was fun.
[01:57.08]Oh, I'm sorry Susan isn't here.
[02:04.49]I miss her very much.
[02:06.92]She feels bad, too, Grandpa.
[02:09.25]She called to say the plane was delayed.
[02:11.31]You know airports.
[02:13.18]I can't wait to see her.
[02:16.03]She looks just like Grandma at that age.
[02:21.97]I'd better unpack.
[02:23.94]I started traveling twenty-four hours ago.
[02:30.61]I'm not so young anymore.
[02:34.08]Don't you want something to eat?
[02:35.65]No, thanks.
[02:37.77]After a good night's sleep, I'll enjoy breakfast even more.
[02:41.07]Well, come on, Dad.
[02:42.52]Ellen and I'll take you to your room.
[02:44.51]I'm sure glad you're here, Grandpa.
[02:46.56]Good night, Grandpa.
[02:47.62]Pleasant dreams.
[03:04.31]Philip, do you have the key to the trunk?
[03:08.08]I have the key, but it doesn't work.
[03:17.23]I sent the wrong key.
[03:31.69]I have something for you. I made it myself.
[03:37.89]I think you'll enjoy it.
[03:41.00]I researched it for over a year.
[03:44.09]It's our family tree.
[03:49.59]Oh, Grandpa! How exciting!
[03:53.87]Fabulous!
[03:55.38]Why, I didn't know that your grandfather was born in Germany.
[04:00.17]Lots of interesting information about our family.
[04:03.85]A gift from me.
[04:06.56]Thank you so much.
[04:09.07]Grandpa! Grandpa!
[04:11.22]Oh, Grandpa, I'm so happy to see you!
[04:15.87]Oh, you look so beautiful, Susan. My granddaughter.
[04:21.88]Like I always said, you look just like Grandma.
[04:27.09]I think you're going to be very happy here with us.
[04:31.37]I know you will.
[04:34.02]I don't feel alone anymore.

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
od.innerHTML = lrc08;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
//file: 03_lrc.js
var lrc01 = function()
{
/* _begin_ 
[ti: Your Song]
[ar:Elton John]
[al:Elton John]
[by:littleflute]
[00:1.35]"Your Song"
[00:3.35]("Elton John" Version)
[00:5.35]( xd Test!!!)
[00:8.00]It's a little bit funny 
[00:12.00]this feeling inside
[00:16.00]I'm not one of those who can easily hide
[00:23.00]I don't have much money but boy if I did
[00:30.00]I'd buy a big house where we both could live
[00:40.00]If I was a sculptor, 
[00:45.00]but then again, no Or a man who makes potions in a traveling show
[00:57.29]Is this pink too bright for me?
[00:59.87]Mmm-hmm. It is a very bright pink.
[01:09.96]Try this. It's size eight.
[01:14.62]But I wear size ten.
[01:16.53]How about green? It's size ten.
[01:21.19]Let me try it on.
[01:23.91]I'm taking too much of your time.
[01:29.70]It's six o'clock.
[01:30.90]Where's my husband?
[01:32.68]I was expecting him here at five forty-five.
[01:34.85]Don't worry. The traffic is very heavy at this hour.
[01:37.13]I know. But we're going to be late for dinner.
[01:41.65]I'll take this green sweater.
[01:43.04]I like the color on me, don't you?
[01:44.38]I think it looks terrific on you.
[01:52.17]I'm sorry I'm so late.
[01:53.38]I had a really bad day.
[01:56.29]It's ten after six. We're late.
[01:58.42]Robbie's cooking tonight, and dinner's at six thirty.
[02:00.53]I know. I know. I'm really sorry.
[02:03.61]I left my bag of film on the ferry.
[02:05.93]I went back for it, but the ferry was gone.
[02:07.96]I lost a whole day's work.
[02:10.38]I'll call the Staten Island Ferry lost-and-found office.
[02:13.14]I didn't think of that. Thanks.
[02:21.33]Hello.
[02:22.39]Yes. The number, please,
[02:23.98]of the Staten Island Ferry lost-and-found office.
[02:29.30]Five five five...zero eight zero eight.
[02:35.35]Thank you.
[02:38.07]I really appreciate it, Marilyn.
[02:40.33]Hello.
[02:41.51]Did anyone find a camera bag this afternoon,
[02:45.38]a small canvas bag,
[02:48.86]on the J. F. Kennedy Ferry?...No?
[02:55.63]Maybe someone will find it.
[02:57.80]The name is Stewart, Richard Stewart.
[03:01.08]And the telephone number is five five five...
[03:04.50]three oh nine oh. Thank you.
[03:10.91]Sorry, Richard. They don't have it.
[03:13.99]Thanks, anyway.
[03:18.47]There was a girl on the ferry.
[03:20.09]Now maybe...
[03:21.21]Tell me about it on the way home.

_end_
*/
}
var od = document.getElementById("id_load_lrc");
od.innerHTML = lrc01;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];
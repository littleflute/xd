//file: 02_lrc.js
var lrc02 = function()
{
/* _begin_ 
[by:www.beautifullover.org]
[00:00.00]�����ϲ��(www.beautifullover.org)������ܸ������ͬѧŶ
[00:00.01]Episode 01: 46 Linden Street  ACT II
[00:13.35]Excuse me, officer.
[00:14.28]Can you help me?
[00:15.34]Sure.
[00:16.58]Can you tell me
[00:17.50]how to get to Linden Street, in Riverdale?
[00:19.66]"Richard Stewart, 46 Linden Street,
[00:21.79]Riverdale, New York."
[00:23.25]You should take the number 1 subway.
[00:25.38]Is there a station near here?
[00:26.47]Yes. The station's that way.
[00:28.39]You should take the number 1 train
[00:29.77]to Van Cortlandt Park.
[00:31.02]Number 1 train to Van Cortlandt Park. Thank you.
[00:34.18]Anytime. Good luck.
[00:35.30]Remember, the number 1 train. The uptown platform.
[00:38.76]Thank you.
[00:40.98]You're welcome.
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
var od = document.getElementById("lrcdata");
if(!od){
	od = document.createElement("span");
	od.id = "lrcdata";
	od.style.display = "none";
	document.body.appendChild(od);
}
od.innerHTML = lrc02;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
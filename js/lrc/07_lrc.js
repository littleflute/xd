//file: 07_lrc.js
var lrc07 = function()
{
/* _begin_ 
[by: littleflute ]
[00:00.00]�����ϲ�� littleflute ����ܸ������ͬѧŶ
[00:00.01]Episode 03: Grandpa's Trunk  ACT II
[00:13.65]Excuse me. Is this seat taken?
[00:15.93]No, it's not taken.
[00:17.42]Oh, thank you.
[00:18.57]Oh, let me help you with this.
[00:20.12]Oh, thank you.
[00:26.67]Do you want to sit by the window?
[00:27.85]No, no, no. I like the aisle seat better.
[00:30.78]Please, you sit by the window.
[00:39.41]My name is Stewart... Malcolm Stewart.
[00:41.45]Pleased to meet you.
[00:42.45]I'm Elsa Tobin. How do you do?
[00:50.66]Do you live in New York?
[00:52.70]No, no. I'm from Florida.
[00:55.16]I am, too. But didn't you just get on?
[01:00.28]No, no. I just changed my seat.
[01:02.79]A man next to me was smoking,
[01:04.76]and smoke really bothers me.
[01:10.48]Where are you from in Florida?
[01:12.49]Titusville. It's near Orlando.
[01:15.11]Small world. I'm from Titusville, too.
[01:17.41]Really? What part?
[01:21.34]My husband and I live near Spaceport.
[01:24.18]I know that area.
[01:26.74]My house is only a few miles from Spaceport.
[01:31.88]Do you still live there?
[01:32.96]Oh yes, yes. My husband's there now.
[01:35.46]He couldn't take time off to come to New York with me.
[01:41.70]Do you still live there?
[01:43.59]No. I sold the house and the furniture,
[01:49.74]put a few personal things in an old trunk,
[01:53.94]and shipped it to my children in New York.
[01:56.80]That's my destination.
[01:58.97]Are you married?
[02:00.74]My wife died four years ago.
[02:04.72]She was a wonderful woman. A real friend.
[02:08.82]I'm sorry. Really, I'm sorry.
[02:14.07]Lots of wonderful memories.
[02:17.11]We were married almost fifty years.
[02:19.18]Well, forty-seven, to be exact.
[02:22.04]John and I celebrate our fortieth anniversary next month.
[02:25.35]Oh, congratulations! That's nice.
[02:30.87]What does John do?
[02:32.63]He's an aerospace engineer
[02:34.74]and works for Orlando Aircraft Corporation.
[02:38.09]He started with them almost forty years ago.
[02:42.95]What do you do?
[02:45.02]I just retired. Had my own company.
[02:49.95]A construction company. Roads, bridges, big stuff.
[02:56.69]But I just sold it and retired.
[03:04.21]Excuse me, ma'am. Ticket, please.
[03:09.73]Would you kindly hold these keys, please?
[03:13.63]I have a ticket, I know.
[03:16.17]I was in the smoking section.
[03:18.06]It's OK, lady. Take your time.
[03:21.34]I'm sure it's in your purse, Mrs.Tobin.
[03:24.09]Oh, here it is.
[03:29.50]And here are your keys.
[03:31.65]Thank you.
[03:38.35]Do you have family in New York?
[03:40.46]No, no. But I do have very close friends in New York City.
[03:46.19]We like to go to the theater together.
[03:49.49]You said you have family in New York.
[03:51.11]Yes, indeed.
[03:53.20]A son and his wife and their three children-
[03:57.20]my grandchildren.
[03:58.53]You must be excited.
[03:59.67]I can't wait, to see them!
[04:04.08]Are you going to live with them?
[04:05.51]Yes.
[04:06.30]Permanently?
[04:08.35]Well... they want me to,
[04:12.38]but it's too early to know for sure.
[04:14.89]I'm pretty independent.
[04:17.59]I tried to teach my kids the importance of independence,
[04:22.48]but I'm not sure I want to be alone.
[04:27.92]Some people don't mind being alone. I do.
[04:33.02]I understand. But tell me.
[04:37.03]Why did you stop working?
[04:39.99]I retired because... I wanted to be with my family.
[04:48.66]I didn't want to be alone anymore!

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
od.innerHTML = lrc07;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
//file: 06_lrc.js
var lrc06 = function()
{
/* _begin_ 
[by:  littleflute]
[00:00.00]�����ϲ�� littleflute ����ܸ������ͬѧŶ
[00:00.01]Episode 03: Grandpa's Trunk  ACT I
[00:10.67]Marilyn, you want coffee or tea?
[00:14.09]Coffee, please.
[00:28.80]I am so excited!
[00:31.15]At this time tomorrow morning,
[00:32.63]Grandpa will be sitting in the kitchen with us.
[00:40.95]When does he arrive?
[00:42.59]At six o'clock this evening.
[00:45.46]By plane?
[00:46.72]No, by train.
[00:50.58]Are we picking him up at the station?
[00:53.03]Not Grandpa.
[00:54.38]He doesn't want anybody picking him up.
[00:57.60]He likes to be independent.
[01:00.01]Huh.
[01:00.94]Oh, let's go upstairs and prepare Grandpa's room.
[01:03.85]Great! Let's do it!
[01:07.34]Good morning, Mom.
[01:08.43]Morning.
[01:09.22]Well, hi, fellas.
[01:09.72]Hello.
[01:10.33]Hi, honey.
[01:10.67]Morning, Marilyn.
[01:11.42]We are going upstairs to set up Grandpa's room.
[01:12.96]There's coffee ready.
[01:17.69]I'm really excited about seeing Grandpa.
[01:19.92]Me, too. Milk, please.
[01:23.48]He's so funny.
[01:24.64]He always makes me laugh.
[01:28.65]I hope Grandpa's going to like living with us.
[01:30.79]I think he will.
[01:32.30]It just takes time to feel comfortable in a new place.
[01:34.73]Won't he miss being in Florida?
[01:36.37]Well, he will.
[01:37.30]But I think he'll like being here with the family.
[01:39.49]Are you sure about that?
[01:40.78]It's crazy here most of the time.
[01:42.44]But it's fun.
[01:43.70]That's for sure.
[01:45.86]You know,
[01:46.49]maybe I'll put together some photos of Grandpa
[01:48.85]as a "welcome" present.
[01:50.22]That's a neat idea.
[01:52.28]What can I do?
[01:53.99]I've got it!
[01:55.01]I have a picture of Grandpa and Dad and me in my wallet.
[01:59.64]It's from the Fathers and Sons' Breakfast
[02:01.47]at my junior high school graduation.
[02:04.06]Oh, I remember this picture.
[02:08.17]I'd really like to pick up Grandpa at the railroad station.
[02:11.60]Railroad stations or airports.
[02:13.82]Grandpa always tells us he'll get here by himself.
[02:16.49]He's something!
[02:23.05]Is this all Grandpa's stuff?
[02:25.60]That's it.
[02:26.92]But I'm sure he has a few bags with him on the train.
[02:31.49]What's inside?
[02:34.89]I don't know. It's locked.
[02:41.79]Hi.
[02:42.99]Oh, hi, darling.
[02:43.84]Morning, Philip.
[02:44.70]I want to put some of my good hangers in Grandpa's closet.
[02:47.86]You know I'm very excited about his arrival.
[02:51.19]We are, too.
[02:53.11]Susan called early this morning.
[02:55.31]She's unhappy
[02:56.19]because she's had to go to Chicago on a business trip
[02:59.41]and can't leave till tonight.
[03:01.02]She wants to be here for Grandpa.
[03:02.88]Well, Grandpa will be disappointed, too.
[03:06.25]He loves Susan.
[03:07.98]She always reminds him of Grandma.
[03:11.30]Well, how's everything here?
[03:13.85]Fine. We were just wondering about this trunk.
[03:20.65]It's locked.
[03:21.90]Oh. I have the key. Grandpa sent it to me.


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
od.innerHTML = lrc06;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
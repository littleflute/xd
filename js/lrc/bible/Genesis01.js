//file: Genesis01.js
var Genesis01 = function()
{
/* _begin_ 
[from: www.beautifullover.org v0.0.4]
[by: littleflute]

[00:00.46]and there was morning—the sixth day.
[00:04.19]Genesis 1
[00:08.44]The Beginning
[00:15.53]1In the beginning God created the heavens and the earth.
[00:22.12]2 Now the earth was formless and empty,
[00:25.44]darkness was over the surface of the deep,
[00:28.90]and the Spirit of God was hovering over the waters.
[00:32.59]3 And God said, “Let there be light,” and there was light.
[00:38.89]4 God saw that the light was good, and he separated the light from the darkness.
[00:45.09]5 God called the light “day,” and the darkness he called “night.”
[00:52.27]And there was evening, and there was morning—the first day.
[00:57.26] 
[00:58.04]6 And God said, “Let there be a vault between the waters to separate water from water.”
[01:06.28]7 So God made the vault and separated the water under the vault from the water above it.
[01:12.55]And it was so.
[01:14.28] 
[01:15.01]8 God called the vault “sky.”
[01:17.98]And there was evening, and there was morning—the second day.
[01:24.17]9 And God said, “Let the water under the sky be gathered to one place,
[01:30.79]and let dry ground appear.”
[01:33.58]And it was so.
[01:35.05] 
[01:35.65]10 God called the dry ground “land,” and the gathered waters he called “seas.”
[01:40.74]And God saw that it was good.
[01:43.76] 
[01:44.47]11 Then God said, “Let the land produce vegetation:
[01:48.71]seed-bearing plants and trees on the land that bear fruit with seed in it,
[01:53.60]according to their various kinds.”
[01:56.32]And it was so.
[01:59.69] 
[02:00.43]12 The land produced vegetation:
[02:02.14]plants bearing seed according to their kinds
[02:05.21]and trees bearing fruit with seed in it according to their kinds.
[02:09.62]And God saw that it was good.
[02:13.05]13 And there was evening, and there was morning—the third day.
[02:18.46] 
[02:19.41]14 And God said, “Let there be lights in the vault of the sky to separate the day from the night,
[02:26.40]and let them serve as signs to mark sacred times, and days and years,
[02:32.49] 
[02:33.21]15 and let them be lights in the vault of the sky to give light on the earth.”
[02:38.19]And it was so.
[02:40.71] 
[02:42.63]16 God made two great lights—the greater light to govern the day
[02:47.84]and the lesser light to govern the night.
[02:50.65]He also made the stars.
[02:53.40] 
[02:54.17]17 God set them in the vault of the sky to give light on the earth,
[02:57.93] 
[02:58.96]18 to govern the day and the night, and to separate light from darkness.
[03:03.07]And God saw that it was good.
[03:06.83] 
[03:07.27]19 And there was evening, and there was morning—the fourth day.
[03:12.24] 
[03:12.70]20 And God said, “Let the water teem with living creatures,
[03:19.21]and let birds fly above the earth across the vault of the sky.
[03:24.93] 
[03:25.45]” 21 So God created the great creatures of the sea
[03:28.39]and every living thing with which the water teems and that moves about in it,
[03:33.70]according to their kinds, and every winged bird according to its kind.
[03:38.74]And God saw that it was good.
[03:41.30] 
[03:41.88]22 God blessed them and said, “Be fruitful and increase in number and fill the water in the seas,
[03:49.89]and let the birds increase on the earth.”
[03:53.02] 
[03:53.81]23 And there was evening, and there was morning—the fifth day.
[03:58.26] 
[03:58.90]24 And God said, “Let the land produce living creatures according to their kinds:
[04:04.74]the livestock, the creatures that move along the ground,
[04:09.41]and the wild animals, each according to its kind.”
[04:13.67]And it was so.
[04:14.92] 
[04:15.73]25 God made the wild animals according to their kinds, the livestock according to their kinds,
[04:21.50]and all the creatures that move along the ground according to their kinds.
[04:26.14]And God saw that it was good.
[04:28.95] 
[04:29.79]26 Then God said, “Let us make mankind in our image, in our likeness,
[04:36.73]so that they may rule over the fish in the sea and the birds in the sky,
[04:41.86]over the livestock and all the wild animals,[a]
[04:45.99]and over all the creatures that move along the ground.”
[04:49.67]27 So God created mankind in his own image,
[04:53.56]in the image of God he created them;
[04:56.30]male and female he created them.
[04:59.32] 
[04:59.99]28 God blessed them and said to them, “Be fruitful and increase in number;
[05:05.32]fill the earth and subdue it.
[05:08.62]Rule over the fish in the sea and the birds in the sky
[05:12.16]and over every living creature that moves on the ground.”
[05:16.42]29 Then God said, “I give you every seed-bearing plant on the face of the whole earth
[05:23.45]and every tree that has fruit with seed in it.
[05:26.56]They will be yours for food.
[05:28.56] 
[05:29.80]30 And to all the beasts of the earth and all the birds in the sky
[05:34.48]and all the creatures that move along the ground
[05:37.12]—everything that has the breath of life in it
[05:40.31]—I give every green plant for food.”
[05:44.09]And it was so.
[05:45.98] 
[05:46.44]31 God saw all that he had made, and it was very good.
[05:50.39]And there was evening, and there was morning—the sixth day.

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
od.innerHTML = Genesis01;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();

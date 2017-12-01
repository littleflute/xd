//file: 01_lrc.js
var lrc01 = function()
{
/* _begin_ 
[by: F.A.USA]
[00:00.00] from BeautifulLover.org
[00:00.01]Episode 01: 46 Linden Street  ACT I
[00:34.18]Excuse me. My name is Richard Stewart.
[00:37.43]I'm a photographer.
[00:38.86]May I take a picture of you and your little boy?
[00:40.55]What's it for?
[00:41.41]It's for a book.
[00:42.48]You're writing a book?
[00:44.18]It's a book of pictures.
[00:45.54]I call it Family Album, U.S.A.
[00:47.23]Oh, that's a nice idea.
[00:49.30]Well, it's fine if you take our picture.
[00:51.23]I'm Martha Vann.
[00:52.81]Thank you. I appreciate your help.
[00:55.89]I'm Richard. What's your name?
[00:57.81]Gerald.
[00:58.99]How old are you, Gerald?
[00:59.92]Five.
[01:01.06]And where do you live?
[01:02.05]We live in California.
[01:03.58]Well, welcome to New York.
[01:07.29]OK, just a second.
[01:10.77]I'm almost ready here.
[01:12.44]Can I help you?
[01:13.80]Oh, please.
[01:21.76]Hold Gerald's hand, please. Great!
[01:28.53]Now point to the buildings.
[01:32.84]Terrific!
[01:36.46]Give Mommy a kiss, Gerald. Nice!
[01:43.71]Thank you, Gerald.
[01:45.97]And thank you, Mrs. Vann.
[01:47.64]Oh, my pleasure.
[01:48.45]We'll be looking for your book.
[01:50.23]Thank you. Good-bye. Bye, Gerald.
[01:56.30]Thanks again.
[01:58.33]Oh, you're welcome.
[02:00.10]Hey, let me take your picture!
[02:01.95]Wonderful. Please.
[02:10.17]Are you from New York?
[02:11.50]No, I'm from Greece.
[02:13.22]I'm an exchange student.
[02:15.85]When did you come here?
[02:17.33]Three months ago.
[02:18.97]Your English is very good.
[02:20.78]Thanks.
[02:22.32]I studied English in school.
[02:28.78]Would you like some coffee?
[02:30.08]No, thank you.
[02:32.23]Tell me about your book.
[02:34.22]Oh, it's not finished yet,
[02:36.26]but I have some of the pictures.
[02:37.82]Would you like to see them?
[02:38.85]Yes. I'd like that.
[02:40.77]Here they are. Family Album, U.S.A.
[02:48.14]It's an album of pictures of the United States:
[02:50.28]the cities, the special places, and the people.
[02:53.53]And these are pictures of people working:
[02:56.38]steelworkers, bankers, police, street vendors,
[03:06.61]ambulance drivers, doctors....
[03:11.10]Oh, this is my father. He's a doctor.
[03:16.39]This is my mother.
[03:17.88]What's her name?
[03:18.65]Ellen.
[03:21.90]My younger brother, Robbie.
[03:23.35]He goes to high school.
[03:25.65]This is my sister Susan.
[03:27.47]She works for a toy company.
[03:31.13]Here's my grandfather. He lives in Florida.
[03:35.26]And this is my wife Marilyn.
[03:37.31]Oh, she's very pretty.
[03:38.70]Thanks. And what about your family?
[03:42.42]They are in Thessaloniki.
[03:44.92]That's a large city in northern Greece.
[03:47.44]But now I'm living in the Bronx.
[03:50.34]With a Greek-American family?
[03:52.03]No. Hispanic.
[03:57.98]Oh no! It's five thirty.
[04:01.81]Will you excuse me?
[04:02.84]I have to meet my wife.
[04:05.18]It was nice meeting you.
[04:06.46]It was a pleasure meeting you, too.
[04:08.26]Thanks for your help.
[04:09.74]And good luck! I've got to go.
[04:12.46]By the way, I'm Richard.
[04:14.03]What's your name?
[04:14.78]Alexandra.
[04:16.29]Bye-bye, Alexandra. Thanks.
[04:17.17]Bye-bye. Richard! Richard! You left your bag!
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
od.innerHTML = lrc01;
var a = od.innerHTML;
var b = a.split('_begin_');
var txt = b[1].split('_end_');
od.innerHTML = txt[0];  
loadLyricOK();
// JavaScript source code
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTimeButton = document.getElementById("partyTimeButton");
var partyTimeText = "Party Time!";
var partyOverText = "Party Over!";
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var updateClock = function ()
{
var updatedTimeJS = document.getElementById("timeEvent");
var lolCat = document.getElementById("lolcat");
var messageText;
var catImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time == partyTime){
	catImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
    messageText = "IZ NAP TIME�";
	catImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
	catImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
		catImage = 	   "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

updatedTimeJS.innerText = messageText;
lolCat.src = catImage;
	
showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
//put together the string that displays the time
};

updateClock();
var oneSecond = 1000;
setInterval (updateClock, oneSecond);

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = partyTimeText;
	  partyTimeButton.style.backgroundColor = "#222";
	   
     }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	   partyTimeButton.innerText = partyOverText;
	   partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener("click", partyEvent);

// Wakeup Time Function 
var wakeUpEvent = function() 
{
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchTimeEvent = function() 
{
	lunchTime = lunchTimeSelector.value;
};
var napTimeEvent = function() 
{
	napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);
	

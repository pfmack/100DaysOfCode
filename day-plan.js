// JavaScript source code

var time = new Date().getHours(); // this variable gets the time
var wakeUpTime = 9; // this variable assigns wakeUpTime to  9am
var napTime = 2; // this variable assigns napTime to 2
var lunchTime = 12; // this variable assigns lunchTime to 12
var messageText; // this variable holds the messageText for output in the console

if (time < wakeUpTime) {
	messageText = "Wake up time!";
} else if (time == napTime) {
	messageText = "Nap Time!";
} else if  (time == lunchTime) {
	messageText = "Lunch Time!";
} else {
	messageText = "Party Time!";
}

console.log(messageText);
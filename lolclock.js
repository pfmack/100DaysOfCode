// JavaScript source code

var time = new Date().getHours(); // this variable gets the time of day
var morningGreeting = "Good Morning, Mate!"; // this variable assigns the morning greeting message
var afternoonGreeting = "Good Day, Mate!"; // this variable assings the afternoon greeting memssage
var eveningGreeting = "Good Evening, Mate!"; // this variable assigns the evening greeting message
var messageText;

if (time < 12) {
	messageText =  morningGreeting;
} else if (time > 18) {
	messageText = eveningGreeting;
} else  {
	messageText = afternoonGreeting;
}

console.log(messageText);

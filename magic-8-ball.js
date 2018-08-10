// JavaScript source code

var magic8Ball = {};
magic8Ball.answerList = ["without a doubt", "outlook great!", "you SLAY queen!", "did this method work? Then duh!", "yep!"];
magic8Ball.question;

var answer = Math.random();
var randomAnswer = answer * magic8Ball.answerList.length;
var randomIndex = Math.floor(randomAnswer);
var magic8BallAnswer = magic8Ball.answerList[randomIndex];

magic8Ball.answer = function (question)

{ 
console.log("Your answers to" + " " + question + " " + "is..." + " " + this.answerList[randomIndex]);
};


magic8Ball.answer("Will I learn JavaScript?");
// Magic 8 Ball code

$(document).ready(function(){
var magic8Ball = {};
magic8Ball.answerList = ["without a doubt", "outlook great!", "you SLAY queen!", "did this method work? Then duh!", "yep!"];

 magic8Ball.userQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.answerList.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.answerList[randomIndex];
 
        $("#answer").text( answer );
 
        console.log(question);
        console.log(answer);
    };
 
    var onClick = function() {
        var question = prompt("Ask the Magic 8 Ball a question!");
        magic8Ball.userQuestion(question);
    };
 
    $("#questionButton").click( onClick );
 
});
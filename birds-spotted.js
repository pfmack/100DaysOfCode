// JavaScript source code
var birdsSpotted = [4,5,8,1,0,8,11];
var birdsSpottedTotal = 0;

for (var i = 0; i < birdsSpotted.length; i++)
	{ 
		birdsSpottedTotal = birdsSpottedTotal + birdsSpotted[i];
	}
console.log("We spotted " + birdsSpottedTotal + " this week!");
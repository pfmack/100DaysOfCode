// JavaScript source code

var chair = {}; //the object 
chair.material = "wooden"; // the chair's properties
chair.legs = 4; // the chair's properties
chair.seat = "padded"; // the chair's properties
chair.back = "ergonomic"; // the chairs properties
chair.myNewChair = function() // the method
{
	console.log ("Purchase my new chair with" + " " + 4 +" " + this.material + " " + "legs," + " " +"a nice" + " " + this.seat + " " + "seat," + " " + "and an" + " " + this.back + " " + "back! Only $59.95!");
};

chair.myNewChair (); //this calls the method

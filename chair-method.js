// JavaScript source code

var chair = {}; // the object
chair.material; // the chair's properties
chair.legs; // the chair's properties
chair.seat; // the chair's properties
chair.back; // the chair's properties
chair.myNewChair = function(material, legs, seat, back) // the method with parameters
{
	console.log ("Purchase my new chair with" + " " + 4 +" " + material + " " + legs +"," + " " +"a nice" + " " + seat + " " +  "and an" + " " + back + "!" +" " + "Only $59.95!");
};

chair.myNewChair ("wooden", "skinny legs", "fluffy seat", "high back"); //calling the method

//JavaScript source code

/*console.log('Hello World');

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
console.log(lastName);

var age = 37;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);



var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

age = 'twenty-eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

var year, yearPrecious, yearTroy, agePrecious, ageTroy;
year = 2018;
agePrecious = 37;
ageTroy = 38;
fullAge = 21;

yearPrecious = 1981;
yearTroy = year - ageTroy;


console.log(yearPrecious + 2);
console.log(yearTroy * 2);
console.log(year / 10);

var preciousOlder = agePrecious > ageTroy;
console.log(preciousOlder);

console.log(typeof preciousOlder);


var isFullAge = year - yearPrecious >= fullAge;
console.log(isFullAge);

var averageAge = (agePrecious + ageTroy) / 2;
console.log(averageAge);

x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x *= 2;
console.log(x)

x++;
console.log(x);

x--;
console.log(x);



var markMass, markHeight, johnMass, johnHeight;
markMassKg = 150;
console.log(markMassKg);
markHeightM = 10;
console.log(markHeightM);
johnMassKg = 175;
console.log(johnMassKg);
johnHeightM = 14;
console.log(johnHeightM);

markBmi = markMassKg / (markHeightM * markHeightM);
johnBmi = johnMassKg / johnHeightM * johnHeightM;
console.log(markBmi, johnBmi);

var markHigherBmi = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);




var firstName = 'Steve';
var maritalStatus = 'single';

if (maritalStatus === 'married') {
	console.log(firstName + ' is married.');
} else {
	console.log(firstName + ' will be married soon enough!');
}


var brideName = 'Alice';
var isPregnant = true;

if (isPregnant) {
	console.log(brideName + ' is having a baby!');
} else {
	console.log(brideName + ' is not pregnant.');
}

var markMass, markHeight, johnMass, johnHeight;
markMassKg = 150;
//console.log(markMassKg);
markHeightM = 10;
//console.log(markHeightM);
johnMassKg = 175;
//console.log(johnMassKg);
johnHeightM = 14;
//console.log(johnHeightM);

markBmi = markMassKg / (markHeightM * markHeightM);
johnBmi = johnMassKg / johnHeightM * johnHeightM;

if (markBmi > johnBmi) {
	console.log('John has a lower BMI than Mark.');
} else {
	console.log('Mark has a lower BMI than John.');
}

//var markHigherBmi = markBmi > johnBmi;

//console.log('Is Mark\'s BMI higher than John\'s? ' + //markHigherBmi); 


var firstName = 'Alex';
var age = 45; 


if (age < 13) {
	console.log(firstName + ' is little girl.');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 35) {
	console.log(firstName + ' is a grown woman.');
} else {
	console.log('I don\'t know how old ' + firstName + ' is.');
}

age >= 18 ? console.log(firstName + ' drinks beer.') :
	console.log(firstName + ' drinks water.');

var drink = age >= 21 ? 'beer' : 'water';
console.log(drink);


var hairCondition = "breaking";

switch (hairCondition) {
	case 'brittle':
		console.log(firstName + ' , your hair needs more conditioner and less protein.');
		break;
	case 'greasy':
		console.log(firstName + ' , your hair needs less products.');
		break;
	case 'limp':
		console.log(firstName + ' , your hair needs more protein.');
		break;
	case 'moisturized':
		console.log(firstName + ' , your hair\'s moisture and protein balance is perfect! Keep it up!');
		break;
	default:
		console.log(firstName + ' , your hair needs more conditioner.');
}

var johnTeamScores, mikeTeamScores, maryTeamScores;
johnTeamScore1 = 100;
johnTeamScore2 = 120;
johnTeamScore3 = 103;

mikeTeamScore1 = 100;
mikeTeamScore2 = 120;
mikeTeamScore3 = 103;

maryTeamScore1 = 5;
maryTeamScore2 = 15;
maryTeamScore3 = 15;

johnTeamScores = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;
mikeTeamScores = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
maryTeamScores = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;

if (johnTeamScores > mikeTeamScores && johnTeamScores > maryTeamScores) {
	console.log('John\'s team has the higher average score, with a game average of ' + johnTeamScores + '.');
} else if (mikeTeamScores > johnTeamScores && mikeTeamScores > maryTeamScores) {
	console.log('Mike\'s team has the higher average score, with a game average of ' + mikeTeamScores + '.');
} else if (maryTeamScores > mikeTeamScores && maryTeamScores > johnTeamScores) {
	console.log('Mary\'s team has the higher average score, with a game average of ' + maryTeamScores + '.');
} else if (maryTeamScores === mikeTeamScores) {
	console.log('There is a tie between Mary\'s and Mike\'s team with average scores of , ' + maryTeamScores + mikeTeamScores + '.');
} else if (maryTeamScores === johnTeamScores) {
	console.log('There is a tie between Mary\'s and John\'s team with average scores of , ' + maryTeamScores + johnTeamScores + '.');
} else if (mikeTeamScores === johnTeamScores) {
	console.log('There is a tie between Mike\'s and John\'s team with average scores of , ' + mikeTeamScores + johnTeamScores + '.');
}

function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var agePrecious = calculateAge(1981);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(agePrecious, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {

	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' is already retired.');
	}

}

yearsUntilRetirement(1980, 'Precious');
yearsUntilRetirement(1950, 'Tom');


var whatDoYouDo = function (job, firstName) {

	switch (job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' is an Uber driver.';
		case 'designer':
			return firstName + ' designs websites in NYC.';
		default:
			return firstName + ' does something else.';
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Precious'));
console.log(whatDoYouDo('driver', 'Mark'));


var names = ['Precious', 'Jerry', 'Elvis'];
var years = [1990, 1956, 1960];

console.log(names);
console.log(names.length); 
console.log(names[2]);

names[1] = 'Aretha';
console.log(names[1]);

names[names.length] = 'Prince';
console.log(names);

var monique = ['Monique', 'Smith', 1989, 'teacher', false];

monique.push();
monique.unshift();
monique.pop();
monique.shift();
console.log(monique.indexOf('blue'));
console.log(monique);





function johnsTips(resturantBill) {

	var tip; 
	if (resturantBill < 50) {
		tip =  .2;
			
	} else if (resturantBill >= 50 && resturantBill < 200) {
		tip =  .15;
			
	} else  {
		tip =  .1;		
	}
	return tip * resturantBill;
}
var resturantBill = [124, 48, 268];


var tips = [johnsTips(resturantBill[0]), johnsTips(resturantBill[1]), johnsTips(resturantBill[2])];
var finalBill = [tips[0] + resturantBill[0], tips[1] + resturantBill[1], tips[2] + resturantBill[2]];

console.log(tips, finalBill); 


var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1978,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'Teacher',
	isMarried: false,
	calcAge: function () {
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);



var mark = {
	firstName: 'Mark',
	lastName: 'Johnson',
	mass: 150, //kg
	height: 10, //meters
	calcBMI: function () {
		this.BMI = this.mass / (this.height * this.height);
		return this.bmi;
		
	}
	
};


var john = {
	firstName: 'John',
	lastName: 'Smith',
	mass: 180, //kg
	height: 14, //meters
	calcBMI: function () {
		this.BMI = this.mass / (this.height * this.height);
		return this.bmi;
	}

};

john.calcBMI();
mark.calcBMI();

console.log(john, mark);



if (mark.BMI > john.BMI) {
	console.log(mark.firstName + ' ' + mark.lastName + ' ' + 'has the highest BMI. His BMI is ' + mark.BMI);
} else if (mark.BMI < john.BMI) {
	console.log(john.firstName + ' ' + john.lastName + ' ' + 'has the highest BMI. His BMI is ' + john.BMI);
} else {
	console.log(mark.firstName + ' ' + mark.lastName + ' ' + john.firstName + ' ' + john.lastName + ' ' + 'have equal BMIs.');

};





var markMass, markHeight, johnMass, johnHeight;
markMassKg = 150;
console.log(markMassKg);
markHeightM = 10;
console.log(markHeightM);
johnMassKg = 175;
console.log(johnMassKg);
johnHeightM = 14;
console.log(johnHeightM);

markBmi = markMassKg / (markHeightM * markHeightM);
johnBmi = johnMassKg / johnHeightM * johnHeightM;
console.log(markBmi, johnBmi);

var markHigherBmi = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);

for (var i = 1; i <= 20; i+=2) {
	console.log(i);

}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}





var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}


var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}


var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}*/

var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],


	calcTips: function () {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++)
		{
			var percentage;
			var bill = this.bills[i];
			if (bill < 50) {
				percentage = .20;
			} else if (bill >= 50 && bill < 200) {
				percentage = .15;
			} else {
				percentage = .1;
			}
			this.tips[i] = bill * percentage;
			this.finalValues = bill + bill * percentage;
		}
	}
}




var mark = {
	fullName: 'Mark Miller',
	bills: [77, 375, 110, 45],


	calcTips: function () {
		this.tips = [];
		this.finalValues = [];

		for (var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 100) {
				percentage = .20;
			} else if (bill >= 100 && bill < 300) {
				percentage = .10;
			} else {
				percentage = .25;
			}
			this.tips[i] = bill * percentage;
			this.finalValues = bill + bill * percentage;
		}
	}
}



function calcAvg(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.avg = calcAvg(john.tips);
mark.avg = calcAvg(mark.tips);
console.log(john, mark);
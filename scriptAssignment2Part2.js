
/*
//STEP 1

var x = window.prompt("Please enter a number");
window.console.log(Math.abs(x));
*/

/*
//STEP 2

var x = window.prompt("Please enter a number with a decimal value");
window.console.log(Math.ceil(x));
*/

/*
//STEP 3

var x = window.prompt("Please enter a number with a decimal value");
window.console.log(Math.floor(x));
*/
/*
//STEP 4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.

var x = window.prompt("Please enter 5 numbers, seperated by commas (no space)");
x = parseInt(x, 10);
window.console.log(Math.max(x), Math.min(x));
*/
//Grrr I either get NaN NaN (without second variable declaration) or 0 0 (with second variable declaration)  \d finds a digit - try that?  g finds all matches

/*var x = window.prompt("Please enter 5 numbers, seperated by commas (no space)");
var y = x;
x = parseInt(x, 10);
y = parseInt(y, 10);

window.console.log(Math.max(y));
window.console.log(Math.min(x));*/

/* 
//STEP 5

var x = window.prompt("Please enter a number");
window.console.log(Math.sqrt(x));
*/


//Part 2

/* 
//STEP 6

var a = new Date();
window.console.log(a.toDateString());
*/

/* STEP 7.	Create an application that gets the number of days in a month. Display that result within the console window.
              
var a = new Date();
window.console.log(a.getMonth());
*/

/* 
//STEP 8

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
window.console.log(monthNames[d.getMonth()]);
*/

/*
//STEP 9

var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0) window.console.log('Weekend!');
*/

/*
//STEP 10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 


var dNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
window.console.log(dNames[today.getDay()]);

//this works just need to figure out how to subtract a day (either by -1 or by -- which decrements one)
*/


/* 
//STEP 11

var dNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
var day = (dNames[today.getDay()]);
window.console.log(day.slice(0, 1));
*/

//Part 3 

/* 
//STEP 12

var total;
var inputNumber;
var value;
var highestNumber;
var numbers = [];

total = 0;
inputNumber = 1;

while (inputNumber <= 2) {

    highestNumber = window.prompt("Enter number " + inputNumber + " of 2:", "");

    while (isNaN(value = parseInt(highestNumber, 10))) { highestNumber = window.prompt("Enter number " + inputNumber + " of 2:", ""); }

    total = total + value;

    inputNumber = inputNumber + 1;
        
    numbers.push(value);
}
window.console.log("highest value = " + Math.max.apply(null, numbers));
*/

/* STEP 13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
 
Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68

The grades are computed as follows:

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A


var strName = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var intMark = [80, 77, 88, 95, 68];
var gradeRange = [];

gradeRange = [
    F = Number(<60);
    D = Number(<70);
    C = Number(<80);
    B = Number(<90);
    A = Number(<100);
]
*/
/*
//STEP 14

var x = 0;
while (x < 15) {
    x++;
    window.console.log("this is an even number: " + (x % 2 == 0));
}
window.console.log("The end!");
*/

/* 
//STEP 15

var fizzBuzz = function () {
    "use strict";
    var i;
    for (i = 1; i < 102; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            window.console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            window.console.log("Buzz");
        } else if (i % 3 === 0) {
            window.console.log("Fizz");
        } else {
            window.console.log(i);
        }
    }
};
fizzBuzz();
*/


/*
//Part 4


//STEP 1

var startGame = window.confirm("Are you ready to play the game?");
if (startGame === true) {
    window.alert("Awesome, our hero is waiting!");
} else {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

//STEP 2
window.alert("“You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”");

// STEP 3
var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");


// STEP 4
switch (direction) {
case "forward":
    window.alert("You walk about 100 yards and safely make your way out of the cave.");
    break;
case "left":
    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
    break;
case "right":
    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
    break;
default:
    window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
    break;
}

//STEP 5 & 6
var gameRated = window.prompt("Please rate the game on a scale of 1 to 10.");
Number(gameRated);
if (gameRated < 1 || gameRated > 10) {
    gameRated = 10;
}
if (gameRated >= 6 && gameRated <= 10) {
    window.alert("Thank you, we will continue to make improvements to the game!");
}
if (gameRated >= 1 && gameRated <= 5) {
    window.alert("Whatever, you weren’t very good at this game anyway!");
}
*/


/*
//Part 5


// STEP 1 & 8
var coinFlip = Math.floor(Math.random() * 50); //generates a Random Number Between 0-50

// STEP 2
var choice = window.prompt("Pick \"heads\" or \"tails\".");

// STEP 3
var randomResult;
if (coinFlip >= 25) {
    randomResult = "tails";
} else {
    randomResult = "heads";
}
window.alert(randomResult + "!");

// STEP 4 & 7

if (choice == randomResult) {
    window.alert("The flip was " + randomResult + " and you chose " + choice + "... you win!");
} 
// STEP 5 & 6

else {
    window.alert("The flip was " + randomResult + " but you chose " + choice + "... you lose!");
} 
*/


/*
//Part 6

//STEP 1
var coinFlip;

 
//STEP 2
var x;
for (x = 0; x < 10; x++)

//STEP 3
var coinFlip = Math.round(Math.random());

//STEP 4
if (coinFlip == 0) {
    window.console.log("Heads");
} 
else {
    window.console.log("tails");
} 
*/


/*
//Part 7

//STEP 1
var coinFlip;

//STEP 2-5
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else if (coinFlip == 1) {
        window.console.log("tails");
    }
} while (coinFlip == 0);
*/

/*
//Part 8

var x = "";
var y;

for (y = 1; y < 8; y++) {
	x += "#";
	window.console.log(x);
}
*/


/*
//Part 9

var x = 0;
while (x < 15) {
    x++;
	if (x % 2 == 0) {
		window.console.log(x + " is even");
	} else {
		window.console.log(x + " is odd");
    }
}
*/
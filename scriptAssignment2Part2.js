//COMM644
//Assignment 2, Part 2
//
//Part 1 - Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:

/*====================================================================
//STEP 1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

var x = window.prompt("Please enter a number");
window.console.log(Math.abs(x));
====================================================================*/


/*====================================================================
//STEP 2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

var x = window.prompt("Please enter a number with a decimal value");
window.console.log(Math.ceil(x));
*/

/*====================================================================
//STEP 3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

var x = window.prompt("Please enter a number with a decimal value");
window.console.log(Math.floor(x));
====================================================================*/

/*====================================================================

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

/*==================================================================== 
//STEP 5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 

var x = window.prompt("Please enter a number");
window.console.log(Math.sqrt(x));
====================================================================*/


//Part 2 - Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:

/*====================================================================
//STEP 6.	Create an application that gets the current date. Display that result within the console window.

var a = new Date();
window.console.log(a.toDateString());
====================================================================*/

/*====================================================================
//STEP 7.	Create an application that gets the number of days in a month. Display that result within the console window. 
//TODO: this isn't working maybe if i specify an array for all 12 months - and corresponding days and then tie them together?

var a = new Date();
window.console.log(a.getMonth());

====================================================================*/

/*====================================================================
//STEP 8.	Create an application that gets the month name from a particular date. Display that result within the console window.

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
window.console.log(monthNames[d.getMonth()]);
====================================================================*/

/*====================================================================
//STEP 9.	Create an application that tests whether a date is a weekend. Display that result within the console window.

var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0) window.console.log('Weekend!');
*/

/*====================================================================
//STEP 10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.  
//TODO: this isn't working either - my minus 1 doesn't break the code but it still retrieves current day -- how do I fix!?


var dNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
window.console.log(dNames[today.getDay(-1)]);

====================================================================*/

/*====================================================================
//STEP 11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window

var dNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
var day = (dNames[today.getDay()]);
window.console.log(day.slice(0, 1));
====================================================================*/

//Part 3 - Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:

/*====================================================================
//STEP 12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.

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
====================================================================*/

/*====================================================================
//STEP 13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
 
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
*//*


var strName = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var intMark = [80, 77, 88, 95, 68];
var gradeRange = [];
var y;
var i;

for (y in intMark) {
}
var grade = [];
for (i = 0; i < intMark.length; i++) {
    if (intMark[i] <= 60) {
        grade[i] = 'F';
        window.console.log(strName[i] + ' ' + grade[i]);
    } else if (intMark[i] > 60 && intMark[i] <= 70) {
        grade[i] = 'D';
        window.console.log(strName[i] + ' ' + grade[i]);
    } else if (intMark[i] > 70 && intMark[i] <= 80) {
        grade[i] = 'C';
        window.console.log(strName[i] + ' ' + grade[i]);
    } else if (intMark[i] > 80 && intMark[i] <= 90) {
        grade[i] = 'B';
        window.console.log(strName[i] + ' ' + grade[i]);
    } else if (intMark[i] > 90 && intMark[i] <= 100) {
        grade[i] = 'A';
        window.console.log(strName[i] + ' ' + grade[i]);
    }
}
====================================================================*/

/*====================================================================
//STEP 14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.

var x = 0;
while (x < 15) {
    x++;
    window.console.log("this is an even number: " + (x % 2 == 0));
}
window.console.log("The end!");
*/

/*====================================================================
//STEP 15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task

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
====================================================================*/

/*====================================================================

//Part 4- The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:

====================================================================*/

/*====================================================================
//STEP 1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.

var startGame = window.confirm("Are you ready to play the game?");
if (startGame === true) {
    window.alert("Awesome, our hero is waiting!");
} else {
    window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}

//STEP 2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”

window.alert("“You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”");

// STEP 3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”

var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");


// STEP 4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”

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

//STEP 5 & 6:  5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!” & 6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation


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
====================================================================*/


/*====================================================================

//Part 5 - The “Coin Flip” Game (5 points)

====================================================================*/

/*====================================================================
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
====================================================================*/


/*====================================================================
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
====================================================================*/


/*====================================================================
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

/*====================================================================

//Part 8 - Part 8 – Looping a Triangle (5 points)
//Write a loop that displays the following triangle within a console window:
//#
//##
//###
//####
//#####
//######
//#######


var x = "";
var y;

for (y = 1; y < 8; y++) {
	x += "#";
	window.console.log(x);
}
====================================================================*/


/*====================================================================
//Part 9 – Odd or Even? (5 points)
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//Sample Output:
//"0 is even" 
//"1 is odd" 
//"2 is even"


var x = 0;
while (x < 15) {
    x++;
	if (x % 2 == 0) {
		window.console.log(x + " is even");
	} else {
		window.console.log(x + " is odd");
    }
}
====================================================================*/
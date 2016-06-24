//COMM644
//Assignment 2, Part 1
//
//Strings and String Manipulation (5 points)


/*====================================================================
// STEP 1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
var name = window.prompt("Please enter your name");
window.console.log(name.length);
====================================================================*/

/*====================================================================
// STEP 2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.


var name = window.prompt("Please enter your name");
var character = window.prompt("Please choose a number in the range of the number of characters in your name");
window.console.log(name.charAt(character));
====================================================================*/

/*====================================================================
// STEP 3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.


var firstName = window.prompt("Please enter your first name");
var lastName = window.prompt("Please enter your last name");
window.alert("Your name is: " + firstName + " " + lastName);
====================================================================*/

/*====================================================================
// STEP 4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.


var foxText = "The quick brown fox jumps over the lazy dog";
window.console.log(foxText.indexOf("fox"));
====================================================================*/

/*====================================================================
// STEP 5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.


var foxText = "The quick brown fox jumps over the lazy fox";
window.alert(foxText.lastIndexOf("fox"));
====================================================================*/

/*====================================================================
// STEP 6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result


var foxText = "The quick brown fox jumped over the lazy dog";
var fullName = window.prompt("Please enter your full name.");

window.alert(foxText.slice(-0, -12) + fullName + ".");
====================================================================*/

/*====================================================================
// STEP 7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.


var foxText = "The quick brown fox jumped over the lazy dog";
var userWord = window.prompt("Please enter a word.");

window.alert(userWord);
====================================================================*/

/*====================================================================
// STEP 8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.


var old_string = "The quick brown fox jumped over the lazy dog";
var new_string = window.alert(old_string.substring(32, 45));
====================================================================*/

/*====================================================================

// STEP 9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.


var quickFox = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert(quickFox.trim().toLocaleLowerCase());
====================================================================*/

/*====================================================================
// STEP 10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.


var dog = "the quick brown fox jumps over the lazy dog";
window.alert(dog.charAt(0).toUpperCase() + dog.slice(1));
====================================================================*/
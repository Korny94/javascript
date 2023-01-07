console.log ("This is script 2 - LESSON TASKS");
// Output: This is script 2 - LESSON TASKS

/* Lesson Task 2 Questions
Add all the answers to the script.js file.

Giving your variables meaningful names is very important. The names should indicate what type of information or data the variable holds.

Question 1
Create two number variables, one with an integer value and one with a decimal value. */

var numberOne = 10;

var numberTwo = 10.5;

/* Question 2
Declare and initialise a variable with all the working days of the week separated by hyphens -. */

var weekdays = "Monday - Tuesday - Wednesday - Thursday - Friday - Saturday - Sunday";

console.log("the days of the week are:", weekdays)
// Output: the days of the week are: Monday - Tuesday - Wednesday - Thursday - Friday - Saturday - Sunday

var daysOfTheWeek = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";

console.log(daysOfTheWeek);
// Output: Monday-Tuesday-Wednesday-Thursday-Friday

/* Question 3
Create four variables that demonstrate the following operations:

addition
subtraction
multiplication
division */

var addition = 4 + 6;
var subtraction = 8 - 6;
var multiplication = 10 * 10;
var division = 20 / 7;

console.log("10 plus 10.5 is", numberOne + numberTwo);
// Output: 10 plus 10.5 is 20.5

console.log("10 minus 10.5 is", numberOne - numberTwo);
// Output: 10 minus 10.5 is -0.5

console.log("10 times 10.5 is", numberOne * numberTwo);
// Output: 10 times 10.5 is 105

console.log("10 divided 10.5 is", numberOne / numberTwo);
// Output: 10 divided 10.5 is 0.9523809523809523

/* Question 4
Declare a boolean variable with an initial value of false. */

var haleyIsTheBest = true;

console.log("Is Haley the best?", haleyIsTheBest);
// Output: Is Haley the best? true

/* Question 5
Console log the number of characters in this string: "The frogs are angry." */

var sentence = "The frogs are angry.";

console.log("How many characters including spaces are in: The frogs are angry. =", sentence.length);
// Output: How many characters including spaces are in: The frogs are angry. = 20


/* Question 6
Convert the following variable names to camelCase:

var time_elapsed;   = timeElapsed
var totalprice;     = totalPrice

/* Question 7
Convert the following string values to number values: */

var number1 = "53";

var number2 = "44.6";

var number1 = parseInt(number1);

var number2 = parseFloat(number2);

console.log("53 plus 44.6 is", number1 + number2);
// Output: 53 plus 44.6 is 97.6

/* Question 8
Check the type of the following variables and log the results: */

var pet = "donkey";

var age = 89;

var discountApplied = true;

var timeLeft;

var typeOfPet = typeof pet;

console.log("pet is a", typeOfPet);
// Output: pet is a string

var typeOfAge = typeof age;

console.log("age is a", typeOfAge);
// Output: age is a number

var typeOfDiscountApplied = typeof discountApplied;

console.log("discountApplied is a", typeOfDiscountApplied);
// Output: discountApplied is a boolean

var typeOfTimeLeft = typeof timeLeft;

console.log("timeLeft is", typeOfTimeLeft);
// Output: timeLeft is undefined


/* Question 9
Declare and initialise a variable with the value "Updating heading".

Select the h1 element on the page and set it's inner HTML value to be the variable created above. */

var heading = document.querySelector("h1");

heading.innerHTML = "Updating heading";

var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

/* Question 10
Select the body element on the page and change its background colour to lightskyblue. */

var body = document.querySelector("body").style.backgroundColor = "lightskyblue";

var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";
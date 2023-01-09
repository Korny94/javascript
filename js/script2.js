console.log ("This is script 2 - LESSON TASKS");
// Output: This is script 2 - LESSON TASKS

/* 
Lesson Task 2 Questions
Add all the answers to the script.js file.

Giving your variables meaningful names is very important. The names should indicate what type of information or data the variable holds.

Question 1
Create two number variables, one with an integer value and one with a decimal value. */

var numberOne = 10;

var numberTwo = 10.5;

/* 
Question 2
Declare and initialise a variable with all the working days of the week separated by hyphens -. 
*/

var weekdays = "Monday - Tuesday - Wednesday - Thursday - Friday - Saturday - Sunday";

console.log("the days of the week are:", weekdays)
// Output: the days of the week are: Monday - Tuesday - Wednesday - Thursday - Friday - Saturday - Sunday

var daysOfTheWeek = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";

console.log(daysOfTheWeek);
// Output: Monday-Tuesday-Wednesday-Thursday-Friday

/* 
Question 3
Create four variables that demonstrate the following operations:

addition
subtraction
multiplication
division 
*/

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

/* 
Question 4
Declare a boolean variable with an initial value of false. 
*/

var haleyIsTheBest = true;

console.log("Is Haley the best?", haleyIsTheBest);
// Output: Is Haley the best? true

/* 
Question 5
Console log the number of characters in this string: "The frogs are angry." 
*/

var sentence = "The frogs are angry.";

console.log("How many characters including spaces are in: The frogs are angry. =", sentence.length);
// Output: How many characters including spaces are in: The frogs are angry. = 20


/* 
Question 6
Convert the following variable names to camelCase:

var time_elapsed;   = timeElapsed
var totalprice;     = totalPrice
*/


/* 
Question 7
Convert the following string values to number values: 
*/

var number1 = "53";

var number2 = "44.6";

var number1 = parseInt(number1);

var number2 = parseFloat(number2);

console.log("53 plus 44.6 is", number1 + number2);
// Output: 53 plus 44.6 is 97.6

/* 
Question 8
Check the type of the following variables and log the results: 
*/

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


/* 
Question 9
Declare and initialise a variable with the value "Updating heading".

Select the h1 element on the page and set it's inner HTML value to be the variable created above. 
*/

var heading = document.querySelector("h1");

heading.innerHTML = "Updating heading";

var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

/* 
Question 10
Select the body element on the page and change its background colour to lightskyblue.
*/

var body = document.querySelector("body").style.backgroundColor = "lightskyblue";

var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";





/* 
Question 1
Given these two variables

var firstNumber = 34;
var secondNumber = 89;
write an if statement that checks whether firstNumber is smaller than secondNumber. If it is, log the message "The first number is smaller than the second". 
*/

var firstNumber = 34;

var secondNumber = 89;

if(firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}



/* 
Question 2
Given these two variables

var age = 11;
var minimumAge = "13";

write code that checks whether age meets the minimumAge requirement. Log a message if it passes the test and use an else block to log a message if it doesn't. 
*/

var age = 15;

var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
    console.log("Your age meets the minimum age requirement");
} else {
    console.log("Your age does not meet the minimum age requirement");
}


/* 
Question 3
Given these two variables

var income = "11.050";
var maximumIncome = "13.075";

write code that checks whether income meets the maximumIncome requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.
*/

var income = "11.050";

var maximumIncome = "13.075";

if (income > maximumIncome) {
    console.log("Your income", income, "exceeds the maximum income requirements", maximumIncome);
} else {
    console.log("Your income", income, "meets the maximum income requirements", maximumIncome);
}


/* 
Question 4
Fix this code:

var colour = "blue";

if ((colour = "orange")) {
    console.log("This colour is a bit rubbish");
} 
*/ 

var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
} 



/* Question 5
Given the following variable

var invoicePaid = false;
write code that logs the message "Not paid" if the invoice has not been paid. */

var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

    // or

if (invoicePaid !== true) {
    console.log("Not paid");
}



/* Question 6
Given these two variables

var selectedNumber = 11;
var winningNumber = "15";

write code that checks if the winning number hasn't been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator.
*/

var selectedNumber = 14;

var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
} 


/*
Question 7
Given this variable

var dayOfTheWeek = 2;

write a switch statement that log the weekday name depending on the value of dayOfTheWeek. If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".

If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number". 
*/

var dayOfTheWeek = 4;

var dayName;

switch(dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log("The day of the week is", dayName);


/* 
Question 8

Create a variable called `studentAge` and give it a value between 6 and 19.

Write code that does the following:

-   if studentAge is between (and including) 6 and 13, log "Barneskole"
-   if studentAge is between 14 and 16, log "Ungdomsskole"
-   if studentAge is between 17 and 19, log "Videregående skole" 
*/

var studentAge = 14;

var school;

switch(studentAge) {
    case 6:
    case 7: 
    case 8:
    case 9:
    case 10:
    case 11: 
    case 12:
    case 13:
        school = "Barneskole";
        break;
    case 14:
    case 15:
    case 16: 
        school = "Ungdomsskole";
        break;
    case 17:
    case 18:
    case 19: 
        school = "Videregående skole";
        break;
        default:
            school = "Too old or too young for these schools";
}

console.log(school);


var studentAge = 18;

var school;

switch(true) {
    case studentAge >= 6 && studentAge <= 13:
        school = "Barneskole";
        break;
    case studentAge >= 14 && studentAge <= 16:
        school = "Ungdomsskole";
        break;
    case studentAge >= 17 && studentAge <= 19:
        school = "Videregående skole";
        break;
    default:
        school = "Too old or too young for these schools";
}

console.log(school);

    // OR

var studentAge1 = 6;

if (studentAge1 >= 6 && studentAge1 <= 13) {
    console.log("Barneskole");
} else if (studentAge1 >= 14 && studentAge1 <= 16) {
    console.log("Ungdomsskole");
} else if (studentAge1 >= 17 && studentAge1 <= 19) {
    console.log("Videregående Skole");
} else {
    console.log("Too old or too young for these schools")
}



/*
Question 1
Write a loop that logs the numbers 0 to 7.
*/

for (var d = 0; d <= 7; d++) {
    console.log(d);
}


/*
Question 2
Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.
*/

for (var e = 10; e >= 0; e--) {
    console.log(e);
}



/*
Question 3
Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc */

    // ODD
for (var f = 10; f <= 20; f++) {
    if (f % 2 !== 0)
        console.log(f);
}

    // EVEN
for (var f = 10; f <= 20; f++) {
    if (f % 2 === 0)
        console.log(f);
}
    

/*
Question 1
Use a JavaScript string method to determine whether these strings are equal regardless of letter case.

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";
*/

var requiredName = "Gertrude";

var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
    console.log("The strings are equal regardless of letter case!");
} else {
    console.log("The strings are not equal!");
}

    // OR

var requiredName = "Gertrude";

var suppliedName = "GERTRUDE";

if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
    console.log("The strings are equal regardless of letter case!");
} else {
    console.log("The strings are not equal!");
}


/*
Question 2
Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.

var username = "myusername";
If both tests pass log a message saying "Acceptable username".

If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters". If the character count is too high, log the message "Too many characters".

Change the variable's value to test your code.
*/

var username = "myu";

if (username.length < 4) {
    console.log("Too few characters");
} else if (username.length > 10) {
    console.log("Too many characters");
} else {
    console.log("Username accepted");
}


/*
Question 3
The following criteria need to be met before an order can be considered complete:

The invoice must be paid
The product must have been dispatched
The customer must have signed for the delivery
Using the variables below write an if/else statement that determines whether the order is complete:

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;
If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.

Use the logical AND (&&) operator to complete this task.

Change the variables' values to test your code.
*/

var invoicePaid = true;

var productDispatched = true;

var customerHasSigned = true;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
    console.log("Order Complete")
} else {
    if (!invoicePaid) {
        console.log("Invoice must be paid");
    }
    if (!productDispatched) {
        console.log("Product must be dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer must have signed");
    }
}   



/*
Question 4
Re-write your code from the question above using the logical OR (||) operator.
*/

if ((!invoicePaid) || (!productDispatched) || (!customerHasSigned)) {
    console.log("Order NOT Complete");
    if (!invoicePaid) {
        console.log("Invoice must be paid");
    }
    if (!productDispatched) {
        console.log("Product must be dispatched");
    }
    if (!customerHasSigned) {
        console.log("Costumer must have signed");
    }
} else {
    console.log("Order Complete");
}




/*
Question 1
Console log the 3rd item in this array.

var winningNumbers = [1, 76, 2, 78, 16, 7];
*/

var winningNumbers = [1, 76, 2, 78, 16, 7];

var thirdItem = winningNumbers [2];

console.log(thirdItem);

    // OR

console.log(winningNumbers[2]);


/*
Question 2
Add a new item to this array using the push method and console log the new amount of items.

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
*/

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("tomatoes");

console.log(vegetables);

console.log(vegetables.length);

    // OR

vegetables.unshift("tomatoes");

console.log(vegetables);

var countVeg = vegetables.length

console.log(countVeg);



/*
Question 3
Console log each item in this array using a for loop.

var randomThings = ["pumpkin", false, 23, true, "tomato"];
*/

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    console.log(randomThings[i]);
}

    // OR

for (var i = 0; i < randomThings.length; i++) {
    var randomT = randomThings[i];
    console.log(randomT);
}


/*
Question 4
Loop through this array but only log the item if it is a number value.

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
*/

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];
    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}

    // OR

var result = [];

for (var i = 0; i < moreThings.length; i++) {
    var listItems = moreThings[i];
    if ((listItems !== "cat") && (listItems !== true) && (listItems !== false) && (listItems !== "fox")) {
        result.push(listItems)
    }
}
console.log(result);

/*
Question 5
Order this array alphabetically and then loop through it and log each item.

var ingredients = ["water", "flour", "toothpaste", "fish lips"];
*/

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}

/*
Question 6
Loop through this array and log every second item.

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
*/

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}
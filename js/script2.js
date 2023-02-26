

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


/*
Question 1
Console log the price property from the object below:

var product = {
	name: "Chicken feet",
	price: 149.99,
};
*/

var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);
// Output: 149.99


/*
Question 2
Loop through the array below and console log each colour property.
*/

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
];

for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    console.log(animal.colour);
    }

/*
Question 3
Loop through the array below and console log each name property only if it is on special.
*/
var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (var i = 0; i < dinnerOptions.length; i++) {
    var nameDinner = dinnerOptions[i];
    if(nameDinner.onSpecial === true) {
        console.log(nameDinner.name);
    }
};


/*
Question 4
Loop through the array below and log each person's name and surname if they are between the ages of 20 and 50 (including 20 and 50):
*/

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (var i = 0; i < people.length; i++) {
    var peoples = people[i];
    if (peoples.age >= 20 && peoples.age <= 50) {
        console.log(peoples.firstName, peoples.lastName);
    }
}

/*
Question 5
Select the ul element in the HTML file, loop through the array below and create a li element containing the product name and price properties.
*/

var unorderedList = document.querySelector("#unorderedList");

var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

for (var i = 0; i < products.length; i++) {
    const producter = products[i];
    
    unorderedList.innerHTML +=  "<li>" + producter.name + " - " + producter.price + "</li>";
}

/*
Your final HTML should look like this:

<ul>
	<li>Elephant eggs - 45.00</li>
	<li>Bucket of water - 459.99</li>
	<li>4 cabbages - 500.95</li>
</ul>
*/



/*
Question 1
Declare and call a function that logs the string "What the func is this nonsense?"
*/

function wtf(nonsense) {
    console.log(nonsense);
}

wtf("What the func is this nonsense?");


/*
Question 2
Create and call a function with two arguments, firstName and lastName.

The function should log both the argument values with a space between them.
*/

function fullNamed(firstNamed, lastNamed) {
    console.log(firstNamed, lastNamed);
}

fullNamed("Karl Magnus", "Nøkling")


/*
Question 3
Create a function with two arguments, firstNumber and secondNumber.

Inside the function, check the type of the arguments.

If they are numbers, multiply them and return the result.

If either of them are not numbers return the message: "Please supply number values".

Call the function, assign the return value to a variable called result and log the variable.
*/

function totalNumber(firstNumber1, secondNumber2) {
    if (typeof firstNumber1 !== "number" || typeof secondNumber2 !== "number") {
        console.log("Please supply number values");
    } else {
        console.log(firstNumber1 * secondNumber2);
    }
}

totalNumber(3, "four");

    // OR

function multiply(firstNumber, secondNumber) {

    // find out the type of the argument values
    var typeofFirst = typeof firstNumber;
    var typeofSecond = typeof secondNumber;

    if (typeofFirst !== "number" || typeofSecond !== "number") {
        // as soon as a return statement is encountered the function will exit
        return "Please supply number values";
    }

    return firstNumber * secondNumber;

}

var result = multiply(3, 5);
console.log(result);


/*
Question 4
Create a function with three arguments.

Try and convert each argument to a number.

If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".

If all arguments are numbers or can be converted to numbers, add them all and return the result.

Select the p element on the page and assign the result of the function call to be its innerHTML value.
*/

function convert3Arguments(argument1, argument2, argument3) {
    let addedNumbers = parseFloat(argument1) + parseFloat(argument2) + parseFloat(argument3);
    console.log(isNaN(addedNumbers));
    if (isNaN(addedNumbers) === true) {
        console.log("Invalid argument types");
    } else {
        document.querySelector("#question4").innerHTML = addedNumbers;
    }
}

convert3Arguments(1, 2, 7);


/*
Question 5
Select the button with the class "heading" using document.querySelector.

Create a function and assign it to the onclick property of the button.

The function should select the h1 element on the page and update its innerHTML without replacing the existing value.

After clicking once, the innerHTML value should be Functions: Updated.

Clicking the button again would mean the heading reads: Functions: Updated: Updated
*/

let headingFunctions = document.querySelector(".question5");

let headingButton = document.querySelector(".heading");

headingButton.onclick = function() {
    headingFunctions.innerHTML += " Updated";
}





/*
Question 6
Select the button with the class title.

When this is button is clicked, update the title of the page (not the heading, the HTML page title visible in the browser tab) to read: I've been updated.

Hint: use console.dir(document) to view the properties available on the document object.
*/

let titleButton = document.querySelector(".title");

let title = document.querySelector("title");

titleButton.onclick = function() {
    title.innerHTML = "I've been updated.";
}

    // OR

var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;


/*
Question 7
Select the buttons with the classes red, orange and pink.

Clicking on these buttons should change the background of the page to red, orange and pink respectively.
*/

let redButton = document.querySelector(".red");

let orangeButton = document.querySelector(".orange");

let pinkButton = document.querySelector(".pink");

redButton.onclick = function() {
    document.querySelector("body").style.backgroundColor = "red";
}

orangeButton.onclick = function() {
    document.querySelector("body").style.backgroundColor = "orange";
}

pinkButton.onclick = function() {
    document.querySelector("body").style.backgroundColor = "pink";
}



/*
Lesson Task 1 Questions
Question 1
Write code that logs the following variable to the console.
*/
const instrument = "guitar";
console.log(instrument);


/*
Question 2
Log the following variable to the console.
*/
const button = document.querySelector("button.login");
console.dir(button);


/*
Question 3
Log the following variable to the console in table format.
*/
const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];

console.table(instruments);


/*
Question 4
Convert the following code to use either a const or let variables.
*/
const name2 = "Percival";
let age2 = 13;


/*
Question 5
Convert the following code to use either a const or let variable.
*/
let total2 = 0;
total2 = total2 + 10;


/*
Question 6
Convert the following code to use either a const or let variable.
*/
for (let i = 0; i <= 5; i++) {
    console.log(i);
}


/*
Question 7
Convert the following to use backticks:

const introduction = "Hello, my name is " + firstName2 + ".";
*/
const firstName2 = "Florence";

const introduction = `Hello, my name is ${firstName2}.`;

console.log(introduction);


/*
Question 8
Convert the following to use backticks:
const welcome = "Welcome! \n\n" +
                "This " + title2 + " is starting today.\n\n" +
                "Have a " + whatToHave + "!"";
*/
const title2 = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome! 
This ${title2} is starting today. 
Have a ${whatToHave}!`;

console.log(welcome);


/*
Question 9
Log each property in the object below.
*/
const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log(car["paint-colour"], car["number of wheels"]);
// OUTPUT: red 3


/*
Question 10
Add a function (method) called getExpired to the object below that logs the expired status of the object.

Call the function after adding it.
*/
const product3 = {
    name: "Chicken Lips",
    price: 35,
    expired: false,
    getExpired: function() {
        console.log("Is " + this.name + " expired? " + this.expired);
    }
}

product3.getExpired();




/*
Question 1
Select the h4 element and change its value to Hello instead of Welcome.
*/

const helloChange = document.querySelector("h4");

helloChange.innerHTML = "Hello";


/*
Question 2
Select all the h4 elements on the page and change their margin-bottom style to -20px.
*/


const h4ChangeMargin = document.querySelectorAll("h4");

h4ChangeMargin.forEach((e) => {
    e.style.marginBottom = "-20px";
})

    // OR

for(let i = 0; i < h4ChangeMargin.length; i++) {
    h4ChangeMargin[i].style.marginBottom = "-20px";
}


/*
Question 3
Set the background colour of the second h4 element to red.
*/

document.querySelector("#secondH4").style.backgroundColor = "red";

    // OR

h4ChangeMargin[1].style.backgroundColor = "blue";


/*
Question 4
Set the font size of the first h4 element on the page to 24px and its color to blue.
*/

const firstH4 = document.querySelector("h4");

firstH4.style.fontSize = "24px";
firstH4.style.color = "blue";


/*
Question 5
Add span tags around the content of the third h4 element on the page.
*/

const thirdH4 = document.querySelector("#thirdH4");

thirdH4.innerHTML = `<span>${thirdH4.innerHTML}</span>`;


/*
Question 6
Add a new paragraph to the div with an id of content. Add the paragraph after the others.
*/

const divContent = document.querySelector("#content");

divContent.innerHTML += `<p>Hello, this is a paragraph added in js</p>`;


/*
Question 7
Add a new class called content-item to each paragraph in the div with a class of content.
*/

const eachP = divContent.querySelectorAll("p");

eachP.forEach((e) => {
    e.classList.add("content-item");
}) 

    // OR

for(let i = 0; i < eachP.length; i++) {
    eachP[i].classList.add("content-item");
}

/*
Question 8
Select the ul element on the page by its id and add a new list item to the beginning of the list.
*/

const ulAdd = document.querySelector("#ulAdd");

ulAdd.innerHTML = `<li>Item 0</li>${ulAdd.innerHTML}`


/*
Question 9
Programmatically remove the class from the ul element.
*/

const removeClass = document.querySelector(".removeClass");

removeClass.classList.remove("removeClass");


/*
Question 10
Hide the element with the id of hide.
*/

const hideElement = document.querySelector("#hide");

hideElement.style.display = "none";




/*
Loop through the array and display each object using HTML.

Provide a default value for the price property if it is missing.

If the product is sold out, display its name in red otherwise display it in green.

Change the properties in the objects in the array to test your code.
*/
const products2 = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

let arrayOfProductObjects = document.querySelector("#arrayOfProductObjects");

for (let i = 0; i < products2.length; i++) {
    console.log(products2[i]);

    let defaultPrice = "Coming soon!";

    if (products2[i].price) {
        defaultPrice = products2[i].price;
    };

    let inStockColor = "green";

    let inStock = "Product available";

    if (products2[i].soldOut) {
        inStockColor = "red";
        inStock = "Product unavailable";
    }

    let productsName = products2[i].name;

    arrayOfProductObjects.innerHTML += `
        <div id="arrayOfProductObjects">
            <h5>Product: ${productsName}</h5>
            <p>Price: ${defaultPrice}</p>
            <p style="color: ${inStockColor}">${inStock}</p>
        </div>
    `;
};

/*
Display each property of the object using HTML.

Provide a default value for the price property if it is missing.

If the product is on sale, underline the name.

Change the properties in the object to test your code.
*/

const product4 = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};

let productName1 = product4.name;

let defaultPrice1 = "Coming soon";

let onSale;

if (product4.onSale) {
    onSale = "underline";
}

let productObject = document.querySelector("#productObject");

productObject.innerHTML += `
    <h5 style="text-decoration: ${onSale}">Product: ${productName1}</h5>
    <p>Price: ${defaultPrice1}</p>
`





/*
Question 1
Create a function called printSeason that accepts one argument (has one parameter) called season.

Inside the function log the value of the argument.

Call the function and pass in the value "summer` as the argument.
*/

function printSeason(season) {
    console.log(season);
}

printSeason("summer");


/*
Question 2
Create a function called printNumbers that has two parameters, firstNumber and secondNumber.

Inside the function log each value that is passed in.

Call the function and pass in two numbers as the arguments.
*/

function printNumbers(firstNumber2, secondNumber3) {
    console.log("First #: " + firstNumber2, "Second #: " + secondNumber3);
}

printNumbers(3, 9);


/*
Question 3
Create a function called addNumbers that has three parameters.

Inside the function add all the paramters and return the result.

Assign the result to a variable and assign the variable to the 
innerHTML property of the DOM element with the class of total.
*/

function addNumbers(numm1, numm2, numm3) {
    const result = numm1 + numm2 + numm3;
    const total = document.querySelector(".total");
    total.innerHTML = result; 
    return result
}

addNumbers(1, 8, 3)

// OR

function addNumbers2(numm1, numm2, numm3) {
    const result = numm1 + numm2 + numm3;
    return result;
}

const total = addNumbers2(5, 10, 15);

const totalContainer = document.querySelector(".total");
totalContainer.innerHTML = total;


/*
Question 4
Create a function called createGreeting that has one parameter.

Inside the function add the value passed in to the string "Hello, my name is " and return the new string.

Assign the returned value to the innerHTML property of the DOM element with the id of name.
*/

function createGreeting(name) {
    const greeting = document.querySelector("#name");
    greeting.innerHTML = "Hello, my name is " + name;
}

createGreeting("Greg");

// OR 

function createGreeting2(name) {
    const greeting = "Hello, my name is " + name;
    return greeting;
}

const greeting = createGreeting2("Gregory");

const nameContainer = document.querySelector("#name");
nameContainer.innerHTML = greeting;



/*
Question 5
Create a function called printListItems that has one parameter.

Inside the function, loop through the value passed in and log each item.

Call the function and pass the sports array in as the argument.
*/

const sports = ["golf", "football", "cricket"];

function printListItems(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

printListItems(sports);


/*
Question 6
Create a function called createGames that has one parameter.

Inside the function, loop through the value passed in, create HTML 
for each property in each object and return the HTML.

Provide a default value for the released property if it is missing.

Assign the return value of the function to the innerHTML property 
of the DOM element with the class of game-container.
*/

const games = [
    {
        gameName: "Starcraft 2",
        released: "2010",        
    },
    {
        gameName: "Age of Empires II",       
    },
    {
        gameName: "Cyberpunk 2077",
        released: 2020
    }
];

function createGames(gamesList) {

    let html = "";

    for (let i = 0; i < gamesList.length; i++) {

        let releaseYear = "Unknown year";

        if (gamesList[i].released) {
            releaseYear = gamesList[i].released;
        }

        html += `
            <div class="game">
                <h5>${gamesList[i].gameName}<h5>
                <p>Released: ${releaseYear}</p>
            </div>
        `
    }

    return html;

}

const newHtml = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHtml;





/*
Question 1
Create a function called receivingFunction which accepts one argument. Inside this function check if the argument is a function, and if it is, call the function.

Create another function called callbackFunction which logs the string: "I am a callback function".

Call receivingFunction and pass callbackFunction into it as an argument.
*/

function receivingFunction(callback) {
    if (typeof callback === "function") {
        callback()
    }
}

const callbackFunction = function() {
    console.log("I am a callback function")
}

receivingFunction(callbackFunction);


/*
Question 2
Convert the following for loop to a forEach loop.

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
}
*/

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(prize, index) {
    console.log(`Prize ${index + 1}: ${prize}`);
})



/*
Question 3
Write code that waits 5 seconds before logging the string: I waited 5 seconds before executing. Store the amount of seconds (5 initially) in a variable so it can be easily changed.
*/

let waitDuration = 5;

setTimeout(function() {
    console.log(`I waited ${waitDuration} seconds before executing.`);
}, waitDuration * 1000)

    // OR

let numberOfSeconds = 5;

function logMessage() {
    console.log(`I waited ${numberOfSeconds} seconds before executing.`);
}

setTimeout(logMessage, numberOfSeconds * 1000);

/*
Question 4
Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.
*/

let count3 = 0;

let interval = 1500;

const limit = 4;

// const intervalId = setInterval(function() {
//     count3++;
//     if (count3 === limit) {
//         clearInterval(intervalId);
//     }
//     console.log(count3);
// }, interval)

    // OR

function logNumber() {
    count3++;

    if (count3 === limit) {
        clearInterval(intervalId2);
    }

    console.log(count3);
}

const intervalId2 = setInterval(logNumber, interval);




/*
Add a click event to the button that disables the button and starts a counter.

Count to 7 and update span.count with the value of the count.

Once 7 is reached stop the count and enable the button.
*/

let countBtn = document.querySelector(".countBtn");

let count4 = document.querySelector(".count");


countBtn.onclick = function() {

    count4.innerHTML = 0;

    let count5 = 0;

    countBtn.disabled = true;

    const countId = setInterval(function(){
        count5++;

        if (count5 === 7) {
            countBtn.disabled = false;
            clearInterval(countId);
        }

        count4.innerHTML = count5;

    }, 1000)
}



/*
Question 1
Convert the following following code to use the addEventListener method:

*/
const btn = document.querySelector(".btn");

btn.onclick = function () {
    console.log("I'm a button");
};

btn.addEventListener("click", function() {
    console.log("I'm a button");
});




/*
Question 2
Add a click event using addEventListener to the second button.

In the event's function, display the character count from the input in the b.count element.

Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).
*/

const inputCharCount = document.querySelector("#inputCharCount");

const submitCharCount = document.querySelector("#submitCharCount");

const charCount = document.querySelector("#charCount");

submitCharCount.addEventListener("click", function() {

    let inputCharCount1 = inputCharCount.value.trim();

    charCount.innerHTML = inputCharCount1.length;
})






/*
Question 1
Write code that checks if the below variable is truthy, log the string "truthy" if it is, and "falsy" if not.
*/
const menuIsOpen = false;

if (menuIsOpen) {
    console.log("truthy");
} else {
    console.log("falsy");
}


/*
Question 2
Based on the below URL, what are the different querystring parameters and their respective values?

https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354
*/

// querystring parameters - respective values:
    // platforms - 4
    // genres - action
    // publishers - 354



/*
Question 3
Create an async function called getCatFacts.
Inside the function make an API call to the below URL using async/await, and save it to a variable called response.
Create a variable called results where you await the json of your response variable.
Console.log the length of results.
https://api.noroff.dev/api/v1/cat-facts
*/

const url2 = "https://api.noroff.dev/api/v1/cat-facts";

async function getCatFacts() {
    
    const response = await fetch(url2);

    const results = await response.json();

    console.log(results.length);

}

getCatFacts()








/*
Question 1
Give the below function's name parameter a default value of "John"
*/
function greet(name = "John") {
    return `Hello ${name}!`;
}

console.log(greet("Mary"))



/*
Question 2
Create a reusable function that accepts two parameters, then returns a dynamic HTML <div> element.
The <div> it creates should insert one of the parameters as a class, and the other as the inner value. Similar to the below HTML:

<div class="class">value</div>
*/


function reusableHtml(className = "defaultClass", innerValue = "No value") {
    const html = `<div class="${className}">${innerValue}</div>`;

    return html;
}

const reusableHtml1 = document.querySelector("#reusableHtml");

const reusable1 = reusableHtml("error", "Hello, this is an error");

reusableHtml1.innerHTML = reusable1;




/*
Question 3:
Convert the below API call to use a try-catch-finally statement.
*/
async function getFact() {
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/cat-factss");
        const results = await response.json();
        console.log(results[8].text);
    } catch (error) {
        console.log("An error occurred!", error)
    } finally {
        console.log("You're beautiful!");
    }

}

getFact();






/*
Question 1
Convert the below functions to one-line arrow functions.

function greet(name) {
  return `Hello ${name}!`;
}

function add(a, b) {
  return a + b;
}
*/
const greet1 = name => `Hello ${name}!`;
  
const add = (a, b) => a + b;



/*
Question 2
Convert the below code to use the then/catch syntax instead.

async function getCatFacts() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}
*/

const url4 = "https://api.noroff.dev/api/v1/cat-facts";

fetch(url4)
    .then(response => response.json)
    .then(results => console.log(results.length))
    .catch(error => console.log("ERROR", error))





/*
Question 1
Add headers to the below API call.

You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.
*/

const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = { "headers": {
    "x-rapidapi-key": "f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042",
}};

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);

}

callUrbanDictionary();






/*Lesson Task 1 Question
Make a call to the following endpoint:

https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json
Display the team name and city of the first 15 results, but exclude any team whose name begins with c.

There will be a maximum of 15 results displayed if no teams' names begin with "C", and less than 15 displayed if there are teams whose names begin with "C".
*/

const url6 = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function makeApiCall2() {

    try {
        const response = await fetch(url6);

        const json = await response.json();

        console.log(json);

        const teams = json;

        for (let i = 0; i < teams.length; i++) {
        
            const teamName = teams[i].teamName;

            const city = teams[i].location
    
           if (i === 15) {
                break;
           }
    
           if (teamName.toLowerCase().startsWith("c")) {
                continue
           }
           console.log("Name of team: " + teamName + ". Location: " + city);
        }
    } catch (error) {
        console.log("An error occurred", error);
    }
    
}

makeApiCall2()





/*
Make a call to the following endpoint:

https://api.noroff.dev/api/v1/old-games/2

Display the name, description and image of the game returned.
*/

const url9 = "https://api.noroff.dev/api/v1/old-games/2";

const apiCall2 = document.querySelector("#apiCall");

async function apiCall() {
    try {
        const response = await fetch(url9);
        const json = await response.json();

        console.log(json)

        apiCall2.innerHTML = `
            <h2>Name of Game: ${json.name}</h2>
            <img src="${json.image}">
            <br><br>
            <b>Game description:</b>
            <p>${json.description}</p>
        `;

    } catch(err) {
        console.log(err)
        apiCall2.innerHTML = `
            <div class="message error">The was a ${err}</div>
        `;
    }
}

apiCall();

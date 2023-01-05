// VIEW IN CONSOLE

console.log("This is script 1");


// ALERT (POP-UP MESSAGE)

    // alert("Hello");

    // window.alert("Wadup?");


// VARIABLES 

var firstName;

firstName = "Isabel" + " ";

// OR 

var lastName = "Ivaylova Staneva";

var whenWasIsabelBorn = "29.06.2001";

var howOldIsIsabel = 21;

var isIsabelMean = false;

var isIsabelNice = true;

var isIsabelALion = true;


// OPERATORS

/* 


Operator    Description                 Example     Result

===         equal to (type & value)	    3 === 3	    true ("3" === 3 FALSE) 

==          equal to (only value)       "3" == 3    true

!==	        not equal to (type & value) 3 !== 3	    false ("3" !== 3 TRUE)

!=          not equal to (only value)   "3" != 2    true

>	        greater than	            6 > 4	    true

>=	        greater than or equal to	5 >= 4	    true

<	        less than	                5 < 4	    false

<=	        less than or equal to	    3 <= 4	    true



*/

console.log("is 7 equal === to 7?", 7 === 7); // Output: True

console.log("is 7 equal === to 8?", 7 === 8); // Output: False

console.log("is string 7 equal === to 7?", "7" === 7); // Output: False


console.log("is string 7 equal == to 7?", "7" == 7); // Output: True

console.log("is string 7 equal == to 8?", "7" == 8); // Output: False


console.log("is 7 not equal !== to 7?", 7 !== 7); // Output: False

console.log("is 7 not equal !== to 8?", 7 !== 8); // Output: True

console.log("is string 7 not equal !== to 7?", "7" !== 7); // Output: True


console.log("is 7 not equal != to 8?", 7 != 8); // Output: True

console.log("is 7 not equal != to 7?", 7 != 7); // Output: False

console.log("is string 7 not equal != to 7?", "7" != 7); // Output: False


console.log("is 7 greater than 6?", 7 > 6); // Output: True
 
console.log("is 7 greater than 8?", 7 > 8); // Output: False


console.log("is 7 greater than or equal to 7?", 7 >= 7); // Output: True

console.log("is 7 greater than or equal to 6?", 7 >= 6); // Output: True

console.log("is 7 greater than or equal to 8?", 7 >= 8); // Output: False


console.log("is 7 less than 8?", 7 < 8); // Output: True

console.log("is 7 less than 6?", 7 < 6); // Output: False


console.log("is 7 less than or equal to 7?", 7 <= 7); // Output: True

console.log("is 7 less than or equal to 6?", 7 <= 6); // Output: False

console.log("is 7 less than or equal to 8?", 7 <= 8); // Output: True

var myNumber = 7;
var myString = "dog";

// is myNumber greater than 8?
console.log("is myNumber 7 greater than 8?", myNumber > 8) // Output: False

// is myNumber less than or equal to 8?
console.log("is myNumber 7 less than or equal to 8?", myNumber <= 8) // Output: True

// is myString exactly equal to "dog"?
console.log("is myString dog exactly equal to dog?", myString === "dog") // Output: True

// is myString not equal to "cat"?
console.log("is myString dog not equal to cat?", myString !== "cat") // Output: True



// JOINING STRINGS TOGETHER

var fullName = firstName + lastName;

var fullName2 = "Isabel" + " " + "Ivaylova Staneva";

console.log(fullName);

console.log(fullName + " " + fullName2);


var like1 = "passion";

var like2 = "romance";

var like3 = "honesty";

var like4 = "loyalty";

var comma = ",";

var and = "and";

console.log(fullName, "likes", like1 + comma, like2 + comma, like3, and, like4);


var number1 = "10";

var number2 = "5";

var joinedNumber = number1 + number2;

console.log("If you put", number1, "and", number2, "together, you get", joinedNumber);


// LENGTH OF STRING (HOW MANY CHARACTERS)

var lengthOfString = fullName.length;

console.log("There are", lengthOfString, "characters in Isabel Ivaylova Staneva including spaces");


// ADDING NUMBERS

var blueCars = 3;

var redCars = 8;

var totalCars = blueCars + redCars;

console.log( blueCars, "blue cars plus", redCars, "red cars is", totalCars, "total cars");


// SUBTRACTING NUMBERS

var blueCars = 3;

var redCars = 8;

var totalCars2 = blueCars - redCars;

console.log(blueCars, "blue cars minus", redCars, "red cars are", totalCars2, "total cars");


// DIVIDING NUMBERS

var blueCars = 10;

var redCars = 4;

var totalCars3 = blueCars / redCars;

console.log(blueCars, "blue cars divided by", redCars, "red cars are", totalCars3, "total cars");


// MULTIPLYING NUMBERS

var blueCars = 10;

var redCars = 4;

var totalCars4 = blueCars * redCars;

console.log(blueCars, "blue cars times", redCars, "red cars is", totalCars4, "total cars");


// REMAINDER NUMBERS

var thirteen = 13;

var five = 5;

var remainder = thirteen % five;

console.log("the remainder of 13 divided by 5 is", remainder);


// CONVERT NUMBERED STRING TO ACTUAL NUMBER

    // INTEGER

    var integer = "7";

    var convertedInteger = parseInt(integer);

    // DECIMAL

    var decimal = "7.9";

    var convertedDecimal = parseFloat(decimal);

    var totalNum = convertedInteger + convertedDecimal;

    console.log("7 plus 7.9 is", totalNum);

    // SIMPLIFIED

    var result = parseFloat("10.2") + parseInt("4");

    console.log("10.2 plus 4 is", result);


// NaN (Not a Number)

var number1 = 23;

var number2 = "frfr";

console.log("23 minus frfr is", number1 - number2);

    // Check if it is a number isNaN (true = not a number, false = a number)

    var isNumber = isNaN(number1 - number2);

    console.log("is 23 minus frfr not a number?", isNumber);


// TYPEOF OPERATOR

var number = 5;

console.log("number is a", typeof number);

var string = "Hello";

console.log("string is a", typeof string);

var boolean = true;

var booleanTypeOf = typeof boolean;

console.log("boolean is a", booleanTypeOf);



// SELECT & MODIFY HTML ELEMENTS

var heading1 = document.querySelector("h1");

heading1.style.color = "blue";


var spanH1 = document.querySelector("span");

spanH1.style.borderBottom = "5px dashed red"


var dummyText = document.querySelector(".dummyText");

dummyText.style.fontSize = "2rem";


var dummyText = document.querySelector("#dummyText2");

dummyText2.style.background = "red";

// SHORTER - SELECT & MODIFY HTML ELEMENTS

var dummyText = document.querySelector(".dummyText3").style.color = "blue";


// CHANGE/ADD/REMOVE HTML CONTENT

var heading2 = document.querySelector("h2");

heading2.innerHTML = "Wadup";
    // VIEW IN CONSOLE

console.log("This is script 1"); 
// Output: This is script 1


    // ALERT (POP-UP MESSAGE)

// alert("Hello");      
// Output: Hello

// window.alert("Wadup?");  
// Output: Wadup


    // COMMA VS PLUS

console.log(1 + 2);     // Output: 3

console.log(1, 2);      // Output: 1 2


    // VARIABLES var

var firstName;

firstName = "Isabel" + " ";     
// Output: Isabel 

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

+           addition                    3 + 4       7

-           subtraction                 4 - 3       1

*           multiplication              3 * 4       12

/           division                    4 / 2       2

%           remainder                   5 % 2       1

**          expoentiation               2 ** 3      8

++          increment                   ++2         3

--          decrement                   --2         1



*/

console.log("is 7 equal === to 7?", 7 === 7); 
// Output: True

console.log("is 7 equal === to 8?", 7 === 8); 
// Output: False

console.log("is string 7 equal === to 7?", "7" === 7); 
// Output: False


console.log("is string 7 equal == to 7?", "7" == 7); 
// Output: True

console.log("is string 7 equal == to 8?", "7" == 8); 
// Output: False


console.log("is 7 not equal !== to 7?", 7 !== 7); 
// Output: False

console.log("is 7 not equal !== to 8?", 7 !== 8); 
// Output: True

console.log("is string 7 not equal !== to 7?", "7" !== 7); 
// Output: True


console.log("is 7 not equal != to 8?", 7 != 8); 
// Output: True

console.log("is 7 not equal != to 7?", 7 != 7); 
// Output: False

console.log("is string 7 not equal != to 7?", "7" != 7); 
// Output: False


console.log("is 7 greater than 6?", 7 > 6); 
// Output: True

console.log("is 7 greater than 8?", 7 > 8); 
// Output: False


console.log("is 7 greater than or equal to 7?", 7 >= 7); 
// Output: True

console.log("is 7 greater than or equal to 6?", 7 >= 6); 
// Output: True

console.log("is 7 greater than or equal to 8?", 7 >= 8); 
// Output: False


console.log("is 7 less than 8?", 7 < 8); 
// Output: True

console.log("is 7 less than 6?", 7 < 6); 
// Output: False


console.log("is 7 less than or equal to 7?", 7 <= 7); 
// Output: True

console.log("is 7 less than or equal to 6?", 7 <= 6); 
// Output: False

console.log("is 7 less than or equal to 8?", 7 <= 8); 
// Output: True

var myNumber = 7;
var myString = "dog";

// is myNumber greater than 8?
console.log("is myNumber 7 greater than 8?", myNumber > 8) 
// Output: False

// is myNumber less than or equal to 8?
console.log("is myNumber 7 less than or equal to 8?", myNumber <= 8) 
// Output: True

// is myString exactly equal to "dog"?
console.log("is myString dog exactly equal to dog?", myString === "dog") 
// Output: True

// is myString not equal to "cat"?
console.log("is myString dog not equal to cat?", myString !== "cat") 
// Output: True



    // JOINING STRINGS TOGETHER +

var fullName = firstName + lastName;

var fullName2 = "Isabel" + " " + "Ivaylova Staneva";

console.log(fullName);      
// Output: Isabel Ivaylova Staneva

console.log(fullName + " " + fullName2); 
// Output: Isabel Ivaylova Staneva Isabel Ivaylova Staneva


var like1 = "passion";

var like2 = "romance";

var like3 = "honesty";

var like4 = "loyalty";

var comma = ",";

var and = "and";

console.log(fullName, "likes", like1 + comma, like2 + comma, like3, and, like4);   
// Output: Isabel Ivaylova Staneva likes passion, romance, honesty and loyalty 


var number1 = "10";

var number2 = "5";

var joinedNumber = number1 + number2;

console.log("If you put", number1, "and", number2, "together, you get", joinedNumber);      
// Output: If you put 10 and 5 together, you get 105


    // LENGTH OF STRING (HOW MANY CHARACTERS) varName.length

var lengthOfString = fullName.length;

console.log("There are", lengthOfString, "characters in Isabel Ivaylova Staneva including spaces");     
// Output: There are 23 characters in Isabel Ivaylova Staneva including spaces


    // ADDING NUMBERS +

var blueCars = 3;

var redCars = 8;

var totalCars = blueCars + redCars;

console.log(blueCars, "blue cars plus", redCars, "red cars is", totalCars, "total cars");
// Output: 3 'blue cars plus' 8 'red cars is' 11 'total cars'


    // SUBTRACTING NUMBERS -

var blueCars = 3;

var redCars = 8;

var totalCars2 = blueCars - redCars;

console.log(blueCars, "blue cars minus", redCars, "red cars are", totalCars2, "total cars");
// Output: 3 'blue cars minus' 8 'red cars are' -5 'total cars'


    // DIVIDING NUMBERS /

var blueCars = 10;

var redCars = 4;

var totalCars3 = blueCars / redCars;

console.log(blueCars, "blue cars divided by", redCars, "red cars are", totalCars3, "total cars");
// Output: 10 'blue cars divided by' 4 'red cars are' 2.5 'total cars'


    // MULTIPLYING NUMBERS *

var blueCars = 10;

var redCars = 4;

var totalCars4 = blueCars * redCars;

console.log(blueCars + " " + "blue cars times" + redCars + "red cars is" + totalCars4 + "total cars");
// Output: 10 'blue cars times' 4 'red cars is' 40 'total cars'


    // REMAINDER NUMBERS %

var thirteen = 13;

var five = 5;

var remainder = thirteen % five;

console.log("the remainder of 13 divided by 5 is", remainder);
// Output: the remainder of 13 divided by 5 is 3


    // EXPONENTIATION NUMBERS ** 3^4 (3*3*3*3)

var three = 3;

var four = 4; 

var expo = three ** four;

console.log("3 to the power of 4 (3^4) is ", expo);
// Output: 3 to the power of 4 (3^4) is  81


    // INCREMENT NUMBERS ++

var increment = ++three;

console.log("three incremented by one is", increment);
// Output: three incremented by one is 4


    // DECREMENT NUMBERS --

var five = 5;

var decrement = --five;

console.log("five decremented by one is", decrement);
// Output: five decremented by one is 4


    // CONVERT NUMBERED STRING TO ACTUAL NUMBER parseInt for integer & parseFloat for decimal

// INTEGER

var integer = "7";

var convertedInteger = parseInt(integer);

// DECIMAL

var decimal = "7.9";

var convertedDecimal = parseFloat(decimal);

var totalNum = convertedInteger + convertedDecimal;

console.log("7 plus 7.9 is", totalNum);
// Output: 7 plus 7.9 is 14.9

// SIMPLIFIED

var result = parseFloat("10.2") + parseInt("4");

console.log("10.2 plus 4 is", result);
// Output: 10.2 plus 4 is 14.2


    // NaN (Not a Number)

var number1 = 23;

var number2 = "frfr";

console.log("23 minus frfr is", number1 - number2);
// Output: 23 minus frfr is NaN

    // Check if it is a number isNaN (true = not a number, false = a number)

var isNumber = isNaN(number1 - number2);

console.log("is 23 minus frfr not a number?", isNumber);
// Output: is 23 minus frfr not a number? true


    // TYPEOF OPERATOR typeof

var number = 5;

console.log("number is a", typeof number);
// Output: number is a number

var string = "Hello";

console.log("string is a", typeof string);
// Output: string is a string

var boolean = true;

var booleanTypeOf = typeof boolean;

console.log("boolean is a", booleanTypeOf);
// Output: boolean is a boolean


    // "IF" & "ELSE" CONDITIONAL STATEMENTS

var isLoggedIn = true;

if (isLoggedIn === true) {
    console.log("The user is logged in");
} else {
    console.log("The user is logged out");
}
// Output: The user is logged in


var isLoggedIn = false;

if (isLoggedIn === true) {
    console.log("The user is logged in");
} else {
    console.log("The user is logged out");
}
// Output: The user is logged out


var inputIsValid = false;

if (inputIsValid === false) {
  // show error message
} else {
  // hide error message
}


var total = 80;

if (total > 60) {
    console.log("This is too expensive")
} else {
    console.log("This is affordable")
}

    // SELECT & MODIFY HTML ELEMENTS document.querySelector("")

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


    // CHANGE/ADD/REMOVE HTML CONTENT varName.innerHTML

var heading2 = document.querySelector("h2");

heading2.innerHTML = "Wadup";


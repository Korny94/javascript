// USE CONST IN ALL VARIABLE UNLESS YOU NEED TO REASSIGN THE VALUE (LIKE IN LOOPS), THEN USE LET!

// END OF BODY TAG LINK JAVASCRIPT FILE
//  <script src="/js/script.js" type="module"></script>

/*
You can link to multiple JavaScript files from an HTML page, and variables and functions will be available in the order they are included.
If you load multiple files like this:
<script src="js/script1.js"></script>
<script src="js/script2.js"></script>

Anything declared in script1.js will be available to the code in script2.js.
*/

// REDIRECT USER TO ANOTHER PAGE document.location.href = "anotherPage.html";

// STORE VALUES IN VARIABLES AND ALWAYS HAVE A DEFAULT VALUE IF VALUE IS FALSY
    
// DONT OVERWRITE VARIABLES!! 

// TYPE "document" IN CONSOLE TO VIEW THE WEBSITES HTML
// TYPE "screen" IN CONSOLE TO VIEW SCREEN INFO
// TYPE "console.dir(document)" TO VIEW ALL POTENTIAL PROPERTIES (WAYS TO CHANGE THE WEBSITE)

// IN CONSOLE, MANIPULATE THE DOM
// document.querySelector(); (SELECT 1 ELEMENT)
// document.querySelectorAll(); (SELECT SEVERAL ELEMENT)
// const headingH2 = document.querySelectorAll("h2");
// heading[0]           = first h2
// heading[1]           = second h2
//The argument we pass into each of these methods is the element we want to select: a tag (“h1”), a class (“.heading2”) or an id (“#accordion”).

    // VIEW IN CONSOLE

console.log("This is script 1"); 
// Output: This is script 1

// ARRAY IS A VARIABLE THAT CAN STORE MULTIPLE VALUES

    // VIEW A TABLE OF THE ARRAY / OBJECT (TYPE IN CONSOLE!)

let testArray = ["fish", "milk", "sausage"];
console.table(testArray);

    // VIEW ALL PROPERTIES OF A VARIABLE (RECOMMENDED WHEN LOGGING DOM-ELEMENTS INSTEAD OF .LOG)

console.dir(testArray);

    // CREATE A NEW LINE IN CONSOLE \n

console.log("This sentence is \n two lines");


    // TEMPLATE LITERALS  CREATE A NEW LINE IN CONSOLE WITH BACKTICKS `` STRING 

console.log(`This sentence
is 3
lines`);

    // ADD VARIABLES IN `` STRING WITH ${}

const backticksString = "fun";

console.log(`Programming is 
so ${backticksString}`);

    // STOP EXECUTION OF THE CODE AT A CERTAIN PLACE

// debugger;

    // JSON JavaScript Object Notation

        // JSON.stringify(var)  turn into string
        // JSON.parse(var)      turn into object


    // OUTPUT AS A STRING

console.log(JSON.stringify(testArray));

    // OUTPUT AS AN ARRAY OR OBJECT

// console.dir(JSON.parse(testArray));


    // CREATE HTML ELEMENTS

const createHtml = document.querySelector("#createHtml");

let createdHtml = `
    <p>This is a paragraph</p>
    <p>This is another paragraph</p>
    <p>And they both were made with JavaScript</p>
`;

createHtml.innerHTML = createdHtml;


    // ALERT (POP-UP MESSAGE)

// alert("Hello");      
// Output: Hello

// window.alert("Wadup?");  
// Output: Wadup


    // COMMA VS PLUS

console.log("1 plus 2 is", 1 + 2);     // Output: 3

console.log("1 comma space 2 is", 1, 2);      // Output: 1 2


    // VARIABLES var (const / let)

let firstName;

firstName = "Isabel" + " ";     
// Output: Isabel 

// OR 

let lastName = "Ivaylova Staneva";

let whenWasIsabelBorn = "29.06.2001";

let howOldIsIsabel = 21;

let isIsabelMean = false;

let isIsabelNice = true;

let isIsabelALion = true;


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

&&          logical "and" operator      &&
            var selectedNumber = 30;

            if (selectedNumber >= 10 && selectedNumber <= 50) {
                console.log("The selected number is within range");
            }

!           logical "not" operator      !
            var isCool = false;

            if (!isCool)                EQUIVALENT TO: if (isCool === false); OR 
            // Is Not Cool                             if (isCool !== true);

||          logical "or" operator       ||
            var isWeekend = saturday;

            if ((isWeekend = saturday) || (isWeekend = sunday)) {
                console.log("It's the weekend");
            }

...         spread operator             SPREAD OUTPUT TO INDIVIDUAL CHARACTERS
            // let name = "korny";
            // console.log(Math.max(...name));
            // Output: k o r n y
            
            // let numbers = [1, 2, 3, 4, 5];
            // let maxNum = Math.max(...numbers);

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

let myNumber = 7;
let myString = "dog";

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

let fullName = firstName + lastName;

let fullName2 = "Isabel" + " " + "Ivaylova Staneva";

console.log(fullName);      
// Output: Isabel Ivaylova Staneva

console.log(fullName + " " + fullName2); 
// Output: Isabel Ivaylova Staneva Isabel Ivaylova Staneva


let like1 = "passion";

let like2 = "romance";

let like3 = "honesty";

let like4 = "loyalty";

let comma = ",";

let and = "and";

console.log(fullName, "likes", like1 + comma, like2 + comma, like3, and, like4);   
// Output: Isabel Ivaylova Staneva likes passion, romance, honesty and loyalty 


let number1 = "10";

let number2 = "5";

let joinedNumber = number1 + number2;

console.log("If you put", number1, "and", number2, "together, you get", joinedNumber);      
// Output: If you put 10 and 5 together, you get 105


    // LENGTH OF STRING (HOW MANY CHARACTERS) varName.length

let lengthOfString = fullName.length;

console.log("There are", lengthOfString, "characters in Isabel Ivaylova Staneva including spaces");     
// Output: There are 23 characters in Isabel Ivaylova Staneva including spaces


    // ADDING NUMBERS +

let blueCars = 3;

let redCars = 8;

let totalCars = blueCars + redCars;


console.log(blueCars, "blue cars plus", redCars, "red cars is", totalCars, "total cars");
// Output: 3 'blue cars plus' 8 'red cars is' 11 'total cars'


    // SUBTRACTING NUMBERS -



let totalCars2 = blueCars - redCars;

console.log(blueCars, "blue cars minus", redCars, "red cars are", totalCars2, "total cars");
// Output: 3 'blue cars minus' 8 'red cars are' -5 'total cars'


    // DIVIDING NUMBERS /

let blueCars2 = 10;

let redCars2 = 4;

let totalCars3 = blueCars2 / redCars2;

console.log(blueCars2, "blue cars divided by", redCars2, "red cars are", totalCars3, "total cars");
// Output: 10 'blue cars divided by' 4 'red cars are' 2.5 'total cars'


    // MULTIPLYING NUMBERS *

let blueCars3 = 10;

let redCars3 = 4;

let totalCars4 = blueCars3 * redCars3;

console.log(blueCars3 + " " + "blue cars times" + redCars3 + "red cars is" + totalCars4 + "total cars");
// Output: 10 'blue cars times' 4 'red cars is' 40 'total cars'


    // REMAINDER NUMBERS %

let thirteen = 13;

let five = 5;

let remainder = thirteen % five;

console.log("the remainder of 13 divided by 5 is", remainder);
// Output: the remainder of 13 divided by 5 is 3


    // EXPONENTIATION NUMBERS ** 3^4 (3*3*3*3)

let three = 3;

let four = 4; 

let expo = three ** four;

console.log("3 to the power of 4 (3^4) is ", expo);
// Output: 3 to the power of 4 (3^4) is  81


    // INCREMENT NUMBERS ++

let increment = ++three;

console.log("three incremented by one is", increment);
// Output: three incremented by one is 4


    // DECREMENT NUMBERS --


let decrement = --five;

console.log("five decremented by one is", decrement);
// Output: five decremented by one is 4




    // CONVERT NUMBERED STRING TO ACTUAL NUMBER parseInt for integer & parseFloat for decimal

// INTEGER

let integer = "7";

let convertedInteger = parseInt(integer);

// DECIMAL

let decimal = "7.9";

let convertedDecimal = parseFloat(decimal);

let totalNum = convertedInteger + convertedDecimal;

console.log("7 plus 7.9 is", totalNum);
// Output: 7 plus 7.9 is 14.9

// SIMPLIFIED

let result = parseFloat("10.2") + parseInt("4");

console.log("10.2 plus 4 is", result);
// Output: 10.2 plus 4 is 14.2


    // NaN (Not a Number)

let number3 = 23;

let number4 = "frfr";

console.log("23 minus frfr is", number3 - number4);
// Output: 23 minus frfr is NaN

    // Check if it is a number isNaN (true = not a number, false = a number)

let isNumber = isNaN(number3 - number4);

console.log("is 23 minus frfr not a number?", isNumber);
// Output: is 23 minus frfr not a number? true


    // TYPEOF OPERATOR typeof

let number = 5;

console.log("number is a", typeof number);
// Output: number is a number

let string = "Hello";

console.log("string is a", typeof string);
// Output: string is a string

let boolean = true;

let booleanTypeOf = typeof boolean;

console.log("boolean is a", booleanTypeOf);
// Output: boolean is a boolean


    // "BREAK" & "CONTINUE" STATEMENTS

for (let i = 0; i <= 5; i++) {
    if(i === 3) break;
    console.log(i);
}
// Output (breaks loop on 4): 0 1 2 

for (let i = 0; i <= 5; i++) {
    if(i === 4) continue;
    console.log(i);
}
// Output (breaks loop on 4, continues on 5): 0 1 2 3 5


    // "IF" & "ELSE" CONDITIONAL STATEMENTS  IF ELSE

let isLoggedIn = true;

if (isLoggedIn === true) {
    console.log("The user is logged in");
} else {
    console.log("The user is logged out");
}
// Output: The user is logged in


let isLoggedIn1 = false;

if (isLoggedIn1 === true) {
    console.log("The user is logged in");
} else {
    console.log("The user is logged out");
}
// Output: The user is logged out


let inputIsValid = false;

if (inputIsValid === false) {
  // show error message
} else {
  // hide error message
}


let total = 80;

if (total > 60) {
    console.log("This is too expensive");
} else {
    console.log("This is affordable");
}


let isLoggedIn2 = false;

if (isLoggedIn2 === true) {
    alert("You're logged in");
} else {
    console.log("You're not logged in");
}


let correctNumber = 10;

let guessedNumber = 10;

if (guessedNumber === correctNumber) {
    let body1 = document.querySelector("body");
    body1.style.background = "green";
} else {
    let body1 = document.querySelector("body");
    body1.style.background = "red";
}


let numberGrade = 3;

let letterGrade;

if (numberGrade === 10) {
    letterGrade = "A";
} else if (numberGrade === 9) {
    letterGrade = "B";
} else if (numberGrade === 8) {
    letterGrade = "C";
} else {
    if (numberGrade > 10) {
        letterGrade = "Not a valid grade"
    }
    if (numberGrade < 7) {
        letterGrade = "Test failed";
    }
}

console.log("Your grade is", letterGrade);


    // NESTED "if" STATEMENTS

let pet = "cat";

let age = 1;

let isFriendly = true;

if ((pet === "cat") && (age < 2) && (isFriendly = true)) {
    console.log("Pet is accepted");
} else {
    console.log("Pet is NOT accepted, here's why:")
    if (pet !== "cat") {
        console.log("Pet must be a cat");
    }
    if (age >= 2) {
        console.log("Cat must be under 2 years old");
    }
    if (isFriendly !== true) {
        console.log("Cat must be friendly");
    }
}

    // TERNARY OPERATOR     IF/ELSE SHORTCUT    condition ? ifTrue : ifFalse;

let adult4 = checkAge(21);

console.log(adult4);

function checkAge(age) {

    return age >= 18 ? true : false;
}

checkWinner(true);

function checkWinner(win) {
    win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}


    // OR Logical "or ||" OPERATOR

if ((pet !== "cat") || (age >= 2) || (!isFriendly)) {
    console.log("Pet is NOT accepted");
    if (pet !== "cat") {
        console.log("Pet must be a cat");
    }
    if (age >= 2) {
        console.log("Cat must be under 2 years old");
    }
    if (isFriendly !== true) {
        console.log("Cat must be friendly");
    }
} else {
    console.log("Pet is accepted");
}



    // SWITCH CONDITIONAL STATEMENT INSTEAD OF MANY IF ELSE STATEMENTS

let numberGrade1 = 10;

let letterGrade1;

switch(numberGrade1) {
    case 10:
        letterGrade1 = "A";
        break;
    case 9:
        letterGrade1 = "B";
        break;
    case 8:
    case 7:
        letterGrade1 = "C";
        break;
    default: 
    letterGrade1 = "Test failed";
}

console.log("Your grade is", letterGrade1);


let studentAge = "4";

let school;

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
    case studentAge > 19:
        school = "You're too old for these schools";
        break;
    case studentAge < 6:
        school = "You're too young for these schools";
        break;
    default:
        school = "NaN";
}

console.log(school);




    // LOOPS / for loop     REPEAT SOME CODE A CERTAIN AMOUNT OF TIMES

    // let i be equal to 0; continue this loop as long as i is less than or equal to 5; increment i by 1;

    // Most used 
for (let i = 0; i <= 5; i++){
    console.log(i);
}
// Output: 0 1 2 3 4 5
// i is equal to 1; if i is less than or equal to 5; run i increment until 5

for (let evenCounter = 0; evenCounter <= 20; evenCounter += 2) {
    console.log(evenCounter);
}


let c = 0

for (c; c <= 5; c++) {
    console.log(c);
}
// Output: 0 1 2 3 4 5

let b = 0

for (b; b <= 5; b = b + 1) {
    console.log(b);
}
// Output: 0 1 2 3 4 5


    // ODD
for (let f = 10; f <= 20; f++) {
    if (f % 2 !== 0)
        console.log(f);
}
// Output: 11 13 15 17 19

        // LOG EVERY SECOND ITEM (1, 3, 5 etc)
let characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 0) {
        console.log(characters[i]);
    }
}

    // EVEN
for (let f = 10; f <= 20; f++) {
    if (f % 2 === 0)
        console.log(f);
}
// Output: 10 12 14 16 18 20

        // LOG EVERY SECOND ITEM (2, 4, 6 etc)

for (let i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}

        // NESTED FOR LOOPS     RUN THE NESTED LOOP X(parent loop) AMOUNT OF TIMES

for (let i = 0; i < 2; i++) {
    for (let j = 1; j < 4; j++) {
        console.log(j);
    }
}

// 123 123




    // WHILE LOOP       REPEAT SOME CODE WHILE SOME CONDITION IS TRUE

/*
let userName1 = "";

while(userName1 == "") {
    userName1 = window.prompt("Enter your name");
}
// THE PROMPT WILL REPEAT UNTIL USERNAME IS NOT EMPTY

console.log("Hello", userName1);
// THE PROMPT IS OVER AND IT WILL SHOW IN CONSOLE: "Hello username"



    // DO WHILE LOOP    DO SOMETHING FIRST, THEN CHECK THE CONDITION, REPEAT IF CONDITION IS TRUE

/*
let userName2;

do {
    userName1 = window.prompt("Enter your name");
} while (userName2 == "")
*/




    // SELECT & MODIFY HTML ELEMENTS document.querySelector("")

let heading1 = document.querySelector("h1");

heading1.style.color = "blue";


let spanH1 = document.querySelector("span");

spanH1.style.borderBottom = "5px dashed red";


let dummyText = document.querySelector(".dummyText");

dummyText.style.fontSize = "2rem";


let dummyText2 = document.querySelector("#dummyText2");

dummyText2.style.background = "red";

        // SHORTER - SELECT & MODIFY HTML ELEMENTS

let dummyText3 = document.querySelector(".dummyText3").style.color = "blue";


    // CHANGE/ADD/REMOVE HTML CONTENT varName.innerHTML

let heading2 = document.querySelector("h2");


    // SELECT & MODIFY HTML ELEMENTS document.querySelectorAll("")

const changeAllH6 = document.querySelectorAll("h6");

changeAllH6.forEach((e) => {
    e.style.color = "red";
})

        // You can also select inside a specific element: element.queryselectorALL("");


    // CHANGE

heading2.innerHTML = "Wadup";

    // ADD

heading2.innerHTML += " hi";

        // OR

heading2.innerHTML = heading2.innerHTML + " hi";

    // Remove

heading2.innerHTML = "";

    // ADD class OR REMOVE class f.ex CLASS FOR ELEMENT .add("className") .remove("className")

// heading1H1.classList.add("headingH1");
//  OR
// heading1H1.className = "headingH1";

// heading1H1.classList.remove("headingH1");


    // PROPERTIES var.property

let firstName1 = "Isabel";

console.log(firstName1.length);
// Output: 6

let shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList.length);
// Output nr of items: 4



    // METHODS var.method()         (CAN HAVE SEVERAL IN 1 LINE OF CODE)

    // hide() - hide selected element

    // show() - show selected element

    // toggle() - toggle between values on selected element

    // CONVERT STRING TO NUMBER Number(var)

    // location.reload() - RELOAD REFRESH PAGE

    // .toString() - CONVERT NUMBER TO STRING

    // .toPrecision(value) - Transform a number to a desired maximum length

    // .map() - new array

    // .createElement("div") - create html tags

    // .append() - inserts (without removing anything) objects to html page

    // .toFixed() - set desired decimal place
    const fixedDecimal = 100;
    console.log(fixedDecimal.toFixed(3));
    // Output: 100.000

    // toLowerCase()
console.log(firstName1.toLowerCase());
// Output transform letters to lowecase: isabel

    // toUpperCase()
console.log(firstName1.toUpperCase());
// Output transform letters to uppercase: ISABEL

    // UNSHIFT()

console.log(shoppingList, shoppingList.unshift("carrots"));
// Output add item to start of array: (5) ['carrots', 'bananas', 'oranges', 'kiwis', 'milk'] 5

    // PUSH()
console.log(shoppingList, shoppingList.push("cucumbers"));
// Output add item to end of array: (5) ['bananas', 'oranges', 'kiwis', 'milk', 'cucumbers']

    // SHIFT()

    console.log(shoppingList, shoppingList.shift());
// Output remove first element of array: (5) ['bananas', 'oranges', 'kiwis', 'milk', 'cucumbers'] 'carrots'

    // POP()
    console.log(shoppingList, shoppingList.pop());
// Output remove last element of array: (4) ['bananas', 'oranges', 'kiwis', 'milk'] 'cucumbers'

    // UNSHIFT()
console.log(shoppingList, shoppingList.unshift("cucumbers"));
// Output add item to start of array: (5) ['cucumbers', 'bananas', 'oranges', 'kiwis', 'milk']

    // SHIFT()
console.log(shoppingList, shoppingList.shift());
// Output remove item from start of array: (3) ['oranges', 'kiwis', 'milk'] 'bananas'

    // POP()
console.log(shoppingList, shoppingList.pop());
// Output remove item from end of array: (3) ['bananas','oranges', 'kiwis'] 'milk'

    // SORT()
console.log(shoppingList.sort());
// Output alphabetically: ['bananas', 'oranges', 'kiwis', 'milk']

    // REVERSE()    REVERSE OPPOSITE

console.log(shoppingList.sort().reverse());
// Output reversed alphabetically: (3) ['oranges', 'kiwis', 'bananas']

    // SORT() (NUMBERS)
let numbers = [1, 2, 3, 4, 10];
let result2 = numbers.sort(function (numberA, numberB) {
    return numberA < numberB;
});
console.log(result2);
// Output ascending order: [1, 2, 3, 4, 10]


    // indexOf() FIND OUT WHICH FIRST INDEX A CHARACTER IS AT
    
const userNamed = "Johnny"

const secondIndex = userNamed.indexOf("h");

console.log(secondIndex);

    // lastIndexOf() FIND OUT WHICH FIRST INDEX A CHARACTER IS AT

const fourthIndex = userNamed.lastIndexOf("n");

console.log(fourthIndex);


    // charAt() FIND OUT WHICH LETTER IS AT LENGTH

const secondLetter = userNamed.charAt(1);

console.log(secondLetter);
// Output: o
    
    // trim() GET RID OF EMPTY SPACES NEXT TO STRINGS

const emptySpaces = "   Hello    ";

console.log(emptySpaces.trim());
// Output: |Hello|

    // replace() / replaceAll() REPLACE CHARACTERS WITH SOMETHING ELSE

const replaceCharacters = "932-394-287";

console.log(replaceCharacters.replaceAll("-", "/"));
// Output: 932/394/287

    // slice() EXTRACT FROM OLD STRING AND RETURN TO NEW STRING 
                // slice(firstIndex, lastIndex)

const fullName3 = "John Doe";

let firstName3;

let lastName3; 

firstName3 = fullName3.slice(0, 4);

lastName3 = fullName3.slice(5, );

console.log(firstName3);
// Output: John

console.log(lastName3);
// Output: "Doe"

let firstName4;

let lastName4;

let fullName4 = "Karl Magnus";

firstName4 = fullName4.slice(0, fullName4.indexOf(" "));
lastName4 = fullName4.slice(fullName4.indexOf(" ") + 1);

console.log(firstName4);

console.log(lastName4);


    // forEach() DO SOMETHING FOR EACH ITEM INSIDE ARRAY
shoppingList.forEach (function (listItem, index, arr) {
    console.log(listItem, index, arr);
});
// Output array items and index: bananas 0 (array) oranges 1 (array) kiwis 2 (array) milk 3 (array)

    // FIND()
let result3 = shoppingList.find(function (listItem) {
    return listItem === "oranges";
});
console.log(result3);
// Output array item: oranges

    // FILTER()
let result4 = shoppingList.filter(function (listItems) {
    return listItems !== "bananas";
});
console.log(result4);
// Output array items that are not bananas: (3) ['oranges', 'kiwis', 'milk']

    // RANDOM() GENERATE  SOMETHING RANDOM LIKE A NUMBER

let randomNumber = Math.random();

console.dir(randomNumber);
// Output A random number between 0.00 and 1 (DEFAULT): 

let die = Math.floor(Math.random() * 6) + 1;

console.dir(die);
// Output A random number between 1 and 6 (rounded down "Math.floor"):

    // Math.max() FIND THE HIGHEST VALUE

    // Math.Min() FIND THE LOWEST VALUE 

    // toLocaleString("locale", {style: ""})     DIFFERENT NUMBER FORMATTING SYSTEM BASED ON COUNTRIES

let number5 = 123456.789;

console.log(number5.toLocaleString("en-US")); 
// Output US English number format: 123,456.789

console.log(number5.toLocaleString("en-US", {style: "currency", currency: "USD"})); 
// Output USD currency number format: $123,456.79

console.log(number5.toLocaleString(undefined, {style: "percent"})); 
// Output percent number format: 12 345 6789 %

console.log(number5.toLocaleString(undefined, {style: "unit", unit: "celsius"})); 
// Output celsius number format: 123 456,789 C
// UNITS: KILOMETERS, MILES, METERS, KILOGRAMS ETC

    // LOWERCASE LETTERS VS UPPERCASE LETTERS (NOT THE SAME!)

let a = "A";

let b1 = "a";

if (a === b1) {
    console.log("The letters are the same");
} else {
    console.log("The letters are NOT the same");
}
// Output: The letters are NOT the same



    // ARRAY ARRAYS     A VARIABLE THAT CAN STORE MULTIPLE VALUES(elements)


shoppingList.push("cucumbers");

console.log(shoppingList.sort(), shoppingList.length);
// Output: (5) ['bananas', 'cucumbers', 'kiwis', 'milk', 'oranges'] 5

    // 2D ARRAYS    AN ARRAY OF ARRAYS      NESTED ARRAYS

const fruits = ["apples", "oranges", "bananas"];

const vegetables = ["carrots", "onions", "potatoes"];

const meats = ["egges", "chicken", "fish"];

const groceryList = [fruits, vegetables, meats]

console.table(groceryList);

        // ACCESSING AND REPLACING ITEMS IN 2D ARRAYS     array[rowNum][colNum] = "";

console.log(groceryList[0][1]);
// Output: oranges

        // LIST ITEMS SEPARATELY IN 2D ARRAYS USING FOR OF LOOPS

for(let list of groceryList) {
    for(let food of list) {
        console.log(food);
    }
}



        // ACCESSING ITEMS IN ARRAYS

let secondItem = shoppingList [1];
console.log(secondItem);
// Output: cucumbers

        // CHANGE ELEMENTS INSIDE ARRAY

let changeArray = ["element 2", "element 2", "element 3"];

changeArray[0] = "element 1";

console.log(changeArray);
// Output: (3) ['element 1', 'element 2', 'element 3']

            // FOR LOOP TO ACCESS EVERY ARRAY ITEM
            // for loop = for (let i = 0; i < var.length; i++) {}
            // for of loop = for (let var of var) {}
            // for each loop = var.forEach((var) => {})

for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}
// Output: bananas cucumbers kiwis milk oranges

    // OR USE FOR OF LOOP 

for (let foods of shoppingList) {
    console.log(foods);
}

    // LOOP THROUGH ARRAY BACKWARDS

    for (let i = shoppingList.length - 1; i >= 0; i--) {
        console.log(shoppingList[i]);
    }
    // Output: oranges milk kiwis cucumbers bananas    

            // FOR LOOP TO ACCESS ONE ARRAY ITEM

for (let i = 0; i < shoppingList.length; i++) {
    let shopL = shoppingList[i];
    if (shopL === "kiwis") {
        result = shopL;
        break;
    }
}
console.log(result);
// Output: kiwis


            // CREATE HTML FROM AN ARRAY OF OBJECTS 

const petList = [
    {
        type: "dog",
        color: "brown",
        age: 14,
        friendly: true,
    },
    {
        type: "cat",
        color: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        color: "yellow",
        age: 20,
        friendly: true,
    },
];

const arrayOfObjects = document.querySelector("#arrayOfObjects");

for (let i = 0; i < petList.length; i++) {
        console.log(petList[i])
        let smiley = "😇";
        if (!petList[i].friendly) {
            smiley = "😈";
        }

        let petType = "Unknown type";
        if (petList[i].type) {
            petType = petList[i].type;
        }

        let petAge = "Age unknown";

        if (petList[i].age) {
            petAge = petList[i].age;
        }

        let petColor = "black";

        if (petList[i].color) {
            petColor = petList[i].color;
        }

        arrayOfObjects.innerHTML += `
        <div id="arrayOfObjects">
            <h5 style="color: ${petColor}">Type: ${petType}</h5>
            <p>Age: ${petAge}</p>
            <p>Friendly: ${smiley} </p>
        </div>
    `
}

    // OR

// petList.forEach((pet) => {
//     if (pet.friendly) {
//         pet.friendly = "😇";
//     } else {
//         pet.friendly = "😈";
//     }
//     arrayOfObjects.innerHTML += `
//         <h5 style="color: ${pet.color}">Type: ${pet.type}</h5>
//         <p>Age: ${pet.age}</p>
//         <p>Friendly: ${pet.friendly} </p>
//     `
// });

            // FOR LOOP TO ACCESS FILTERED ARRAY ITEMS

let result5 = [];
for (let i = 0; i < shoppingList.length; i++) {
    let listItems = shoppingList[i];
    if (listItems !== "kiwis") {
        result5.push(listItems);
    }
}
console.log(result5);
// Output: (4) ['bananas', 'cucumbers', 'milk', 'oranges']

            // FOR LOOP TO SORT ARRAY NUMBERS

let numbers1 = [1, 2, 3, 4, 10];
for (let i = 1; i < numbers1.length; i++) {
    for (let j = 0; j < i; j++) {
    if (numbers1[i] < numbers1[j]) {
        let x = numbers[i];
        numbers1[i] = numbers1[j];
        numbers1[j] = x;
        }
    }
}
console.log(numbers1);
// Output: [1, 2, 3, 4, 10]


    // forEach() EXECUTE A GIVEN FUNCTION FOR EACH ITEM INSIDE ARRAY
            


            // FOR LOOP [i] TO LIST ARRAY VERTICALLY

let animals = ["dog", "cat", "mouse", "sheep"]; 

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Output: dog car mouse sheep

    // OR USE "FOR OF" LOOP

for (let names of animals) {
    console.log(names);
}
// Output: dog car mouse sheep

    // OBJECT OBJECTS {}        USE "" IF PROPERTY HAS SPACES OR HYPHENS

let dog = {
    name: "Dexter",
    breed: "labrador",
    color: "brown",
    "number of legs": 4,
    isFriendly: false,
    owner: null
}
console.log(dog);
// Output: {name: 'Dexter', breed: 'labrador', number of legs: 4, isFriendly: true, owner: null}

        // ACCESS AN OBJECTS PROPERIES USING DOT . NOTATION (dog.name)
console.log(dog.name);
// Output: Dexter

            // OR

console.log(dog["name"]);

        // EVENT ACTION . NOTIATION DOT

            //.onclick          (button)
            //.onchange         (range)

        // EDIT AN OBJECT USING DOT . NOTATION (dog.color)
let cat = {
    age: 1,
}
cat.color = "(This is added / edited in post) red";
console.log(cat);
// Output: {age: 1, color: '(This is added / edited in post) red'}

        // ACCESS OBJECT PROPERTIES USING SQUARE BRACKETS [] IF PROPERYNAME HAS SPACES, HYPHENS OR ONLY NUMBERS

let golfclubs = {
    "Type of club": "Driver",
    "Club-brand": "Callaway"
}

console.log(golfclubs["Club-brand"]);
// OUTPUT: Callaway

        // CREATE HTML FROM OBJECTS

const objectToHtml = document.querySelector("#objectToHtml");

if (dog.isFriendly) {
    dog.isFriendly = "Yes";
} else {
    dog.isFriendly = "No";
}

// USE INLINE HTML STYLING
objectToHtml.innerHTML = `
<h2 style="color: ${dog.color}">Name: ${dog.name}</h2>
<p>Breed: ${dog.breed}</p>
<p>Number of legs: ${dog["number of legs"]}</p>
<p>Is it friendly? ${dog.isFriendly}</p>
`

        // SEE IF A STATEMENT HAS A "TRUTHY VALUE" CHECK TO SEE IF A VALUE IS undefined null false or 0  "falsy values"

let petName = 1;

if (petName) {
    console.log(petName);
}
// Output petName value as long as its not "undefined, null, false or 0": 1

        // ARRAY ARRAYS INSIDE OBJECTS OBJECT

const petTest4 = {
    type: "cat",
    name: "Harold",
    age: 12,
    isFriendly: true,
    colors: ["black", "white"]
};

console.log(petTest4.colors);
// Output as array: (2) ['black', 'white']

console.log(petTest4.colors.toString());
// Output as string: black,white

for(let i = 0; i < petTest4.colors.length; i++) {
    console.log("Color " + (i + 1) + ": " + petTest4.colors[i]);
        // OR
    console.log(`Color ${i + 1}: ${petTest4.colors[i]}`);
}
// Output separate: Color 1: black  
                //  Color 2: white


        // ARRAY ARRAYS OF OBJECT OBJECTS

let products = [
    {
        id: 327,
        name: "Screwdriver",
        price: 9.99
    },
    {
        id: 574,
        name: "Hammer",
        price: 19.99
    }
];

console.log(products);
// Output (objects inside): (2) [{…}, {…}]


    // OR


let product1 = {
    id: 327,
    name: "Screwdriver",
    price: 9.99
};

let product2 = {
    id: 574,
    name: "Hammer",
    price: 19.99
};

let products1 = [product1, product2];

console.log(products1);
// Output (objects inside): (2) [{…}, {…}]

console.log(products1[1]);
// Output: {id: 574, name: 'Hammer', price: 19.99}

console.log(products1[0] === product1);
// Output: true


        // FOR LOOP OBJECT ARRAY

for (let i = 0; i < products.length; i++) {
let product = products[i];
let productName = product.name;
console.log(productName);
}
// Output: Screwdriver Hammer

for (let i = 0; i < products.length; i++) {
console.log(products[i]);
console.log(products[i].name);
}
// Output: {id: 327, name: 'Screwdriver', price: 9.99} Screwdriver {id: 574, name: 'Hammer', price: 19.99} Hammer

products.forEach(function (product, i) {
console.log(product, i);
console.log(product.name);
});
// Output: {id: 327, name: 'Screwdriver', price: 9.99} Screwdriver {id: 574, name: 'Hammer', price: 19.99} Hammer


    // ASSIGN LOCAL VARIABLES INSIDE A FOR LOOP

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productName = product.name;
        console.log(productName);
      }


    // NEWS ITEM OBJECT LOOP ARRAY

let newsItem1 = {
    headline: "Headline 1",
    summary: "lorem ipsum whatever man"
};
  
let newsItem2 = {
    headline: "Headline 2",
    summary: "lorem ipsum, i said whatever man"
};

let newsItem3 = {
    headline: "Headline 3",
    summary: "lorem ipsum, come on man..."
};

let news = [newsItem1, newsItem2, newsItem3];

    // OR BEST WAY! ARRAY OF OBJECTS!!!!

let news1 = [
    {
        headline: "Headline 1",
        summary: "lorem ipsum whatever man"
    },
    {
        headline: "Headline 2",
        summary: "lorem ipsum, i said whatever man"
    },
    {
        headline: "Headline 3",
        summary: "lorem ipsum, come on man..."
    }
]

console.log(news1);

let newsItems = document.querySelector("#newsItems");

for (let i = 0; i < news.length; i++) {

    let item = news[i];
    console.log(item);
    console.log(item.headline);
    console.log(item.summary);

    newsItems.innerHTML = newsItems.innerHTML + "<h2>" + item.headline +"</h2><p>" + item.summary + "</p>";
        // OR
    newsItems.innerHTML += "<h2>" + item.headline +"</h2><p>" + item.summary + "</p>";
}


    // FIND OBJECTS IN ARRAY

// let myObject = product[0];

    // IF myObject is undefined

let myObject1; // undefined
let searchString = "Wrench";
for (let i = 0; i < products.length; i++) {
    
    // Loop through all the products
    let product = products[i]; // Set a local variable
    if (searchString === product.name) {
    myObject1 = product; // Set the matching object
    }
}
console.log(myObject1);

    // OR SIMPLER WAY

let searchString1 = "Wrench";
let myObject2 = products.find(function (product) {
    return product.name === searchString;
});
console.log(myObject2);


    // FILTERING OBJECTS IN ARRAY (EX. SHOW PRODUCTS LESS THAN 60$)

let myFilteredArray = []; // empty array
let maximumPrice = 60.0;
for (let i = 0; i < products.length; i++) {
    // Loop through all the products
    let product = products[i]; // Set a local variable
    if (product.price < maximumPrice) {
    myFilteredArray.push(product);
    }
}
console.log(myFilteredArray);

    // A SIMPLER WAY

let maximumPrice1 = 60.0;
let myFilteredArray1 = products.filter(function (product) {
    return product.price < maximumPrice1;
});
console.log(myFilteredArray1);



    // SORTING OBJECTS IN ARRAY

products.sort(function (productA, productB) {
    if (productA.price > productB.price) {
        return 1; // Move B "up" in relation to A
    }
    
    if (productA.price < productB.price) {
        return -1; // Move B "down" in relation to A
    }
    
    if (productA.price === productB.price) {
        return 0; // Don't change order
    }
    });
      


    // FALSY FALSE DATA
/*
undefined, the variable is empty and has never been set. It is ‘new’ or ‘pristine’.
null, the variable is empty, but it has been purposefully set to empty.
0, the variable stores an empty quantity.
"", the variable stores an empty string.
*/


    // TRUTHY TRUE DATA
/*
[], an empty array
{}, an empty object
"0", the string of the number zero
*/


    // FUNCTION FUNCTIONS function functionName(var) {}    To run function: functionName(value)

    // SINGLE ARGUMENT 

function logWord() {
    console.log("word"); // ARGUMENT
}

logWord() // This is to run the function


function logWord1(theWord) {
    console.log(theWord);
}

logWord1("Hello");
// Output: Hello

function printMessage(message1, message2) {
    console.log("This is message 1: " + message1);
    console.log("This is message 2: " + message2);

}

printMessage("Message 1", "Message 2");
// Output:  This is message 1: Message 1
//          This is message 2: Message 2


function sum(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    console.log("The result is: " + result);
}

sum(43, 88);
// Output: The result is: 131


    // USE PARAMETERS TO GET VALUES IN TO FUNCTIONS function value(value1, value2)
    // USE RETURN TO GET VALUES OUT OF FUNCTIONS return variable/value
    // NOTHING RUNS AFTER RETURN STATEMENT!!

function multiply(number1, number2) {

    const result = number1 * number2;
    
    return result;
    
}

const functionResult = multiply(10, 10);

console.log(functionResult);

// NOW YOU CAN USE THE VALUES FOR THE REST OF YOUR CODE, REUSABLE FUNCTION

function calculateCommission(amount) {
    
    const percentage = 40;
    const commission = amount * (percentage / 100);
    
    return commission;
}


const commission = calculateCommission(100);

console.log(commission);

// LESS UPDATING, LESS BUGS, LESS REPEATABLE CODE, ONLY HAVE TO CHANGE 1 FUNCTION TO UPDATE A LOT OF CODE

// CHECK PASSWORD VALIDITY

function checkPassword(stringToCheck) {
    
    const lengthOfString = stringToCheck.length;
    
    if(lengthOfString >= 5) {
        return true;
    }
    else {
        return false;
    }
    
}

const passwordIsValid = checkPassword("some string");

console.log(passwordIsValid);

if(passwordIsValid) {
    // let user register
}
else {
    // inform user their password is invalid
}


// CHECK AGE 

const inputAge = document.querySelector("#inputAge");

const submitAge = document.querySelector("#submitAge");

const labelAge = document.querySelector("#labelAge");

function checkAge1(age) {
    if (age >= 18) {
        return document.location.href = "../html/oldEnough.html";
    } else {
        return "You are not old enough!"
    }
}


submitAge.onclick = function() {
    labelAge.innerHTML = checkAge1(inputAge.value)
} 

// CREATE HTML FROM FUNCTION

const colours = ["red", "blue", "green"];

function createList(items) {
    
    let listItems = "";
    
    for(let i = 0; i < items.length; i++) {
        
        listItems = listItems + "<li>" + items[i] + "</li>";
    }
    
    const finalHtml = "<ul>" + listItems + "</ul>";
    
    return finalHtml;
}

const newHtml = createList(colours);

console.log(newHtml);


    // FUNCTIONS AS PROPERIES OF OBJECTS

const petTest = new Object();

petTest.name = "Dexter";
petTest.age = 23;
petTest.friendly = true;

console.log(petTest);
// OUTPUT: {name: 'Dexter', age: 23, friendly: true}

    // CALL FUNCTIONS IN OBJECTS

const petTest2 = {
    "Pet name": "Dexter",
    sayHello: function() {
        console.log("Hello");
    },
    "say hello": function() {
        console.log("Hello");
    }
};

petTest2.sayHello();

petTest2["say hello"]();


    // SEND VARIABLES FROM INSIDE CURLY BRACKETS TO A FUNCTION

function startProgram() {
    let userName = "Haley";
    let age = 8;

    happyBirthday(userName, age);
}

startProgram();

function happyBirthday(userName, age) {
    console.log("Happy birthday " + userName);
    console.log("You are now " + age);
}

    // ACCESS PROPERTY INSIDE AN OBJECT this.

const petTest3 = {
    name: "Gary",
    age: 10,
    introduction: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old."); 
    }
};

petTest3.introduction();



    // MULTIPLE ARGUMENTS

function addTwoNumbers(numberOne1, numberTwo2) {
    let sum = numberOne1 + numberTwo2;
    console.log(sum);
}

addTwoNumbers(3, 4);
// Output: 7

let result6 = addTwoNumbers(3, 12); // ASSIGN TO VARIABLE

console.log(result6);

    // RETURN FROM A FUNCTION   return var;      CODE STOPS

function doubleNumber(number1one) {
    let double = number1one * 2;
    return double; // Execution stops here
    console.log("This will never run");
}

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 * num3;
}

let result7 = addThreeNumbers(3, 8, 3);

console.log(result7);

    // VARIABLE INSIDE VS OUTSIDE OF FUNCTION

const varTest1 = 1; // THIS RUNS ANYWHERE IN THE CODE

function myFunction() {
    const varTest2 = 2; // THIS RUNS ONLY INSIDE FUNCTION
    console.log(varTest1, varTest2);
}

myFunction();
// OUTPUT: 1 2

// console.log(varTest2);
// OUTPUT: ERROR varTest2 is not defined


    // WHAT IS THIS??

function pureFunction(input) {
    let output = input;
    return output;
  }
  
  function impureFunction(input) {
    window.output = input;
  }
  
  let testA = pureFunction(1);
  console.log(testA === 1);
  
  let testB = impureFunction(1);
  console.log(testB === undefined);



    // MAKE A FUNCTION DO SOMETHING TO HTML

let headingh3 = document.querySelector("h3");
let buttonh3 = document.querySelector("#buttonh3");

        console.dir(buttonh3); // SHOW ALL PROPERTIES OF VAR IN CONSOLE 

buttonh3.onclick = function() {
    headingh3.innerHTML = "Changed by button";
}

    // OR

let buttonh3color = document.querySelector("#buttonh3color");

function changeh3color() {
    headingh3.style.color = buttonh3color.value;
}

buttonh3color.oninput = changeh3color;


    // SEE IF SOMETHING IS CHECKED addEventListener("event", function(e) {});

const isItChecked = document.querySelector("#isChecked");

const labelIsChecked = document.querySelector("#labelIsChecked")

isItChecked.addEventListener("click", function(e) {
    if (isItChecked.checked) {
        console.dir(e);
        labelIsChecked.innerHTML = "Yes, the checkbox is checked";
    } else {
        labelIsChecked.innerHTML = "No, the checkbox is not checked";
    }
});


    // IMPORT / EXPORT      (VARIABLES, FUNCTIONS, IFs etc)

// javascript1.js
//    export const myExportedVariable = "My exported variable";

// javascript2.js
//    import {myExportedVariable as myImportedVariable} from "./javascript1.js";

        // ONLY 1 DEFAULT EXPORT

// javascript1.js
    // const myExportedVariable = "My exported variable";
    // export default "myExportedVariable";

// javascript2.js
    // import myImportedVariable, {myExportedVariable2 as myIV2, myExportedVariable3 as myIV3} from "./javascript1.js";

// DEFAULT IMPORT CAN BE A DIFFEREN ALIAS (NAME) AS EXPORT.

    // ../ TO GO UP / BACK A FOLDER ../../ TO GO UP / BACK 2 FOLDERS etc



    // SAVE VARIABLE ACROSS TABS / PAGES localStorage   sessionStorage(only available in 1 tab)

// const mySavedVariable = "this will be saved";

// window.localStorage.setItem("varSavedAs", mySavedVariable);

//      OR

// localStorage.setItem("varSavedAs", "mySavedVariable");

// OUTPUT (Application -> Local Storage -> url): varSavedAs = "thisWillBeSaved"


    // REMOVE A SPECIFIC VARIABLE FROM localStorage

// localStorage.removeItem("varSavedAs");


    // REMOVE ALL VARIABLES FROM localStorage

// localStorage.clear();

        // OR

// right click on url in application -> Local storage and hit clear


    // GET ITEM FROM localStorage

// const getVariable = localStorage.getItem("varSavedAs");

// getVariable = "this will be saved"


    // SAVE ARRAY OR OBJECT IN localStorage (NEED TO BE TURNED INTO A STRING using JSON.stringify(var))

// const myArray = ["ball", "racket", "shoes"];

// localStorage.setItem("myArray", JSON.stringify(myStringedArray));


    // GET STRINGIFIED ARRAY / OBJECT FROM STORAGE

// const getArrayObject = localStorage.getItem("stringifiedArrayObject");

// const parsedArrayObject = JSON.parse(getArrayObject);
// USE CONST IN ALL VARIABLE UNLESS YOU NEED TO REASSIGN THE VALUE (LIKE IN LOOPS), THEN USE LET!

// END OF BODY TAG LINK JAVASCRIPT FILE
//  <script src="/js/script.js" type="module"></script>
    

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

    // VIEW A TABLE OF THE ARRAY / OBJECT (TYPE IN CONSOLE!)

let testArray = ["fish", "milk", "sausage"];
console.table(testArray);

    // VIEW ALL PROPERTIES OF A VARIABLE (RECOMMENDED WHEN LOGGING DOM-ELEMENTS INSTEAD OF .LOG)

console.dir(testArray);

    // CREATE A NEW LINE IN CONSOLE \n

console.log("This sentence is \n two lines");

    // CREATE A NEW LINE IN CONSOLE WITH BACKTICKS `` STRING

console.log(`This sentence
is 3
lines`);

    // ADD VARIABLES IN `` STRING WITH ${}

const backticksString = "fun";

console.log(`Programming is 
so ${backticksString}`);

    // STOP EXECUTION OF THE CODE AT A CERTAIN PLACE

// debugger;


    // OUTPUT AS A STRING

console.log(JSON.stringify(testArray));

    // OUTPUT AS AN ARRAY OR OBJECT

console.dir(JSON.parse(testArray));


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


    // "BREAK" & "CONTINUE" STATEMENTS

for (var i = 0; i <= 5; i++) {
    if(i === 3) break;
    console.log(i);
}
// Output (breaks loop on 4): 0 1 2 

for (var i = 0; i <= 5; i++) {
    if(i === 4) continue;
    console.log(i);
}
// Output (breaks loop on 4, continues on 5): 0 1 2 3 5


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
    console.log("This is too expensive");
} else {
    console.log("This is affordable");
}


var isLoggedIn2 = false;

if (isLoggedIn2 === true) {
    alert("You're logged in");
} else {
    console.log("You're not logged in");
}


var correctNumber = 10;

var guessedNumber = 10;

if (guessedNumber === correctNumber) {
    var body1 = document.querySelector("body");
    body1.style.background = "green";
} else {
    var body1 = document.querySelector("body");
    body1.style.background = "red";
}


var numberGrade = 3;

var letterGrade;

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

var pet = "cat";

var age = 1;

var isFriendly = true;

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



    // SWITCH CONDITIONAL STATEMENT

var numberGrade1 = 10;

var letterGrade1;

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


var studentAge = "4";

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



    // LOOPS / for loop

    // Most used 
for (var i = 0; i <= 5; i++){
    console.log(i);
}
// Output: 0 1 2 3 4 5
// i is equal to 1; if i is less than or equal to 5; run i increment until 5


var c = 0

for (c; c <= 5; c++) {
    console.log(c);
}
// Output: 0 1 2 3 4 5

var b = 0

for (b; b <= 5; b = b + 1) {
    console.log(b);
}
// Output: 0 1 2 3 4 5


    // ODD
for (var f = 10; f <= 20; f++) {
    if (f % 2 !== 0)
        console.log(f);
}
// Output: 11 13 15 17 19

        // LOG EVERY SECOND ITEM (1, 3, 5 etc)
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 0) {
        console.log(characters[i]);
    }
}

    // EVEN
for (var f = 10; f <= 20; f++) {
    if (f % 2 === 0)
        console.log(f);
}
// Output: 10 12 14 16 18 20

        // LOG EVERY SECOND ITEM (2, 4, 6 etc)
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}



    // SELECT & MODIFY HTML ELEMENTS document.querySelector("")

var heading1 = document.querySelector("h1");

heading1.style.color = "blue";


var spanH1 = document.querySelector("span");

spanH1.style.borderBottom = "5px dashed red";


var dummyText = document.querySelector(".dummyText");

dummyText.style.fontSize = "2rem";


var dummyText = document.querySelector("#dummyText2");

dummyText2.style.background = "red";

        // SHORTER - SELECT & MODIFY HTML ELEMENTS

var dummyText = document.querySelector(".dummyText3").style.color = "blue";


    // CHANGE/ADD/REMOVE HTML CONTENT varName.innerHTML

var heading2 = document.querySelector("h2");

    // CHANGE

heading2.innerHTML = "Wadup";

    // ADD

heading2.innerHTML += " hi";

        // OR

heading2.innerHTML = heading2.innerHTML + " hi";

    // Remove

heading2.innerHTML = "";

    // ADD OR REMOVE f.ex CLASS FOR ELEMENT .add("className") .remove("className")

// heading1H1.classList.add("headingH1");
//  OR
// heading1H1.className = "headingH1";

// heading1H1.classList.remove("headingH1");


    // PROPERTIES var.property

var firstName1 = "Isabel";

console.log(firstName1.length);
// Output: 6

var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList.length);
// Output nr of items: 4



    // METHODS var.method()

    // location.reload() - RELOAD REFRESH PAGE

    // .toString() - CONVERT NUMBER TO STRING

    // .toPrecision(value) - Transform a number to a desired maximum length

    // toLowerCase()
console.log(firstName1.toLowerCase());
// Output transform letters to lowecase: isabel

    // toUpperCase()
console.log(firstName1.toUpperCase());
// Output transform letters to uppercase: ISABEL

    // PUSH()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList, shoppingList.push("cucumbers"));
// Output add item to end of array: (5) ['bananas', 'oranges', 'kiwis', 'milk', 'cucumbers']

    // UNSHIFT()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList, shoppingList.unshift("cucumbers"));
// Output add item to start of array: (5) ['cucumbers', 'bananas', 'oranges', 'kiwis', 'milk']

    // SHIFT()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList, shoppingList.shift());
// Output remove item from start of array: (3) ['oranges', 'kiwis', 'milk'] 'bananas'

    // POP()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList, shoppingList.pop());
// Output remove item from end of array: (3) ['bananas','oranges', 'kiwis'] 'milk'

    // SORT()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
console.log(shoppingList.sort());
// Output alphabetically: ['bananas', 'oranges', 'kiwis', 'milk']

    // SORT() (NUMBERS)
var numbers = [1, 2, 3, 4, 10];
var result = numbers.sort(function (numberA, numberB) {
    return numberA < numberB;
});
console.log(result);
// Output ascending order: [1, 2, 3, 4, 10]
    

    // forEach()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
shoppingList.forEach (function (listItem, index) {
    console.log(listItem, index);
});
// Output array items and index: bananas 0 oranges 1 kiwis 2 milk 3

    // FIND()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
var result = shoppingList.find(function (listItem) {
    return listItem === "oranges";
});
console.log(result);
// Output array item: oranges

    // FILTER()
var shoppingList = ["bananas", "oranges", "kiwis", "milk"];
var result = shoppingList.filter(function (listItems) {
    return listItems !== "bananas";
});
console.log(result);
// Output array items that are not bananas: (3) ['oranges', 'kiwis', 'milk']



    // LOWERCASE LETTERS VS UPPERCASE LETTERS (NOT THE SAME!)

var a = "A";

var b = "a";

if (a === b) {
    console.log("The letters are the same");
} else {
    console.log("The letters are NOT the same");
}
// Output: The letters are NOT the same



    // ARRAY ARRAYS

var shoppingList = ["bananas", "oranges", "kiwis", "milk"];

shoppingList.push("cucumbers");

console.log(shoppingList.sort(), shoppingList.length);
// Output: (5) ['bananas', 'cucumbers', 'kiwis', 'milk', 'oranges'] 5

        // ACCESSING ITEMS IN ARRAYS

var secondItem = shoppingList [1];
console.log(secondItem);
// Output: cucumbers

            // FOR LOOP TO ACCESS EVERY ARRAY ITEM

for (var i = 0; i < shoppingList.length; i++) {
    var shopL = shoppingList[i];
    console.log(shopL);
}
// Output: bananas cucumbers kiwis milk oranges

            // FOR LOOP TO ACCESS ONE ARRAY ITEM

for (var i = 0; i < shoppingList.length; i++) {
    var shopL = shoppingList[i];
    if (shopL === "kiwis") {
        result = shopL;
        break;
    }
}
console.log(result);
// Output: kiwis

            // FOR LOOP TO ACCESS FILTERED ARRAY ITEMS

var result = [];
for (var i = 0; i < shoppingList.length; i++) {
    var listItems = shoppingList[i];
    if (listItems !== "kiwis") {
        result.push(listItems);
    }
}
console.log(result);
// Output: (4) ['bananas', 'cucumbers', 'milk', 'oranges']

            // FOR LOOP TO SORT ARRAY NUMBERS

var numbers = [1, 2, 3, 4, 10];
for (var i = 1; i < numbers.length; i++) {
    for (var j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
        var x = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = x;
        }
    }
}
console.log(numbers);
// Output: [1, 2, 3, 4, 10]
            

            // FOR LOOP [i] TO LIST ARRAY VERTICALLY

var animals = ["dog", "cat", "mouse", "sheep"]; 

for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Output: dog car mouse sheep

    // OR USE "FOR OF" LOOP

for (var names of animals) {
    console.log(names);
}
// Output: dog car mouse sheep

    // OBJECT OBJECTS {}        USE "" IF PROPERTY HAS SPACES OR HYPHENS

var dog = {
    name: "Dexter",
    breed: "labrador",
    "number of legs": 4,
    isFriendly: true,
    owner: null
}
console.log(dog);
// Output: {name: 'Dexter', breed: 'labrador', number of legs: 4, isFriendly: true, owner: null}

        // ACCESS AN OBJECTS PROPERIES USING DOT . NOTATION (dog.name)
console.log(dog.name);
// Output: Dexter

        // EVENT ACTION . NOTIATION DOT

            //.onclick          (button)
            //.onchange         (range)

        // EDIT AN OBJECT USING DOT . NOTATION (dog.color)
var cat = {
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


        // ARRAY ARRAYS OF OBJECT OBJECTS

var products = [
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


var product1 = {
    id: 327,
    name: "Screwdriver",
    price: 9.99
};

var product2 = {
    id: 574,
    name: "Hammer",
    price: 19.99
};

var products = [product1, product2];

console.log(products);
// Output (objects inside): (2) [{…}, {…}]

console.log(products[1]);
// Output: {id: 574, name: 'Hammer', price: 19.99}

console.log(products[0] === product1);
// Output: true


        // FOR LOOP OBJECT ARRAY

for (var i = 0; i < products.length; i++) {
var product = products[i];
var productName = product.name;
console.log(productName);
}
// Output: Screwdriver Hammer

for (var i = 0; i < products.length; i++) {
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

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.name;
        console.log(productName);
      }


    // NEWS ITEM OBJECT LOOP ARRAY

var newsItem1 = {
    headline: "Headline 1",
    summary: "lorem ipsum whatever man"
};
  
var newsItem2 = {
    headline: "Headline 2",
    summary: "lorem ipsum, i said whatever man"
};

var newsItem3 = {
    headline: "Headline 3",
    summary: "lorem ipsum, come on man..."
};

var news = [newsItem1, newsItem2, newsItem3];

    // OR BEST WAY! ARRAY OF OBJECTS!!!!

var news = [
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

console.log(news);

var newsItems = document.querySelector("#newsItems");

for (var i = 0; i < news.length; i++) {

    var item = news[i];
    console.log(item);
    console.log(item.headline);
    console.log(item.summary);

    newsItems.innerHTML = newsItems.innerHTML + "<h2>" + item.headline +"</h2><p>" + item.summary + "</p>";
        // OR
    newsItems.innerHTML += "<h2>" + item.headline +"</h2><p>" + item.summary + "</p>";
}


    // FIND OBJECTS IN ARRAY

var myObject = product[0];

    // IF myObject is undefined

var myObject; // undefined
var searchString = "Wrench";
for (var i = 0; i < products.length; i++) {
    
    // Loop through all the products
    var product = products[i]; // Set a local variable
    if (searchString === product.name) {
    myObject = product; // Set the matching object
    }
}
console.log(myObject);

    // OR SIMPLER WAY

var searchString = "Wrench";
var myObject = products.find(function (product) {
    return product.name === searchString;
});
console.log(myObject);


    // FILTERING OBJECTS IN ARRAY (EX. SHOW PRODUCTS LESS THAN 60$)

var myFilteredArray = []; // empty array
var maximumPrice = 60.0;
for (var i = 0; i < products.length; i++) {
    // Loop through all the products
    var product = products[i]; // Set a local variable
    if (product.price < maximumPrice) {
    myFilteredArray.push(product);
    }
}
console.log(myFilteredArray);

    // A SIMPLER WAY

var maximumPrice = 60.0;
var myFilteredArray = products.filter(function (product) {
    return product.price < maximumPrice;
});
console.log(myFilteredArray);



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


function logWord(theWord) {
    console.log(theWord);
}

logWord("Hello");
// Output: Hello


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
    var sum = numberOne1 + numberTwo2;
    console.log(sum);
}

addTwoNumbers(3, 4);
// Output: 7

var result = addTwoNumbers(3, 12); // ASSIGN TO VARIABLE

console.log(result);

    // RETURN FROM A FUNCTION   return var;      CODE STOPS

function doubleNumber(number1one) {
    var double = number1one * 2;
    return double; // Execution stops here
    console.log("This will never run");
}

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 * num3;
}

var result = addThreeNumbers(3, 8, 3);

console.log(result);

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
    var output = input;
    return output;
  }
  
  function impureFunction(input) {
    window.output = input;
  }
  
  var testA = pureFunction(1);
  console.log(testA === 1);
  
  var testB = impureFunction(1);
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


    // SEE IF SOMETHING IS CHECKED

let isItChecked = document.querySelector("#isChecked");

let labelIsChecked = document.querySelector("#labelIsChecked")

function isChecked() {
    if (isItChecked.checked) {
        labelIsChecked.innerHTML = "Yes, the checkbox is checked";
    } else {
        labelIsChecked.innerHTML = "No, the checkbox is not checked";
    }
}


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


    // GET STRINIFIED ARRAY / OBJECT FROM STORAGE

// const getArrayObject = localStorage.getItem("stringifiedArrayObject");

// const parsedArrayObject = JSON.parse(getArrayObject);
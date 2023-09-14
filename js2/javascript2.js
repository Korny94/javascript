/* JSDocs */

/**
 * This will greet the user using their username and id.
 * @param {string} userName This is the users name.
 * @param {number} id This is the users id.
 * @returns {string} This is the greeting message returned.
 * @example
 * ```js
 * // Use this function to greet users when they land on our home page
 * const result = greetUser("Ola", 10);
 * console.log(result);
 * // Returns a greeting
 * // Hello Ola, you are id 10.
 * ```
 */

function greetUser(userName, id) {
  return `Hello ${userName}, you are id ${id}.`;
}

const result = greetUser("Ola", 10);
console.log(result);

//gre;

/* ------------------------------------------------------------------------------ */

/* JSON - JavaScript Object Notation */

const person = {
  name: "Ola Nordmann",
  id: 9,
  isAdmin: true,
};

// CONVERT OBJECT TO JSON using JSON.stringify()
const personJSON = JSON.stringify(person);

console.log(personJSON);
// Logs:
// {"name":"Ola Nordmann","id":9,"isAdmin":true}

// CONVERT JSON TO JS OBJECT using JSON.parse()

const personJSON2 = '{ "name": "Ola Nordmann", "id": 9, "isAdmin": true }';

const person2 = JSON.parse(personJSON2);

console.log(person2);
// Logs:
// {name: 'Ola Nordmann', id: 9, isAdmin: true}

/* ------------------------------------------------------------------------------ */

/* LOCAL STORAGE */

// SET ITEM
localStorage.setItem("firstName", "Ola"); // Key = firstName, Value = Ola

// GET ITEM
const firstName = localStorage.getItem("firstName"); // Gets firstName (Key) from localStorage

console.log(firstName); // Logs: Ola (Value)

// REMOVE ITEM
localStorage.removeItem("firstName"); // Removes firstName from localStorage

// CLEAR ALL ITEMS
localStorage.clear(); // Removes all items from localStorage

// SESSION STORAGE - same as localStorage, but clears when the page is closed
sessionStorage.setItem("firstName", "Ola"); // Key = firstName, Value = Ola. Clears when page is closed

// STORE OBJECT IN LOCAL STORAGE

const golfShot = {
  club: "Driver",
  distance: 250,
  direction: "left",
  ended: "rough",
};

const jsonGolfShot = JSON.stringify(golfShot); // Convert object to JSON

localStorage.setItem("golfShot", jsonGolfShot); // Store JSON in localStorage

const golfShotFromLocalStorage = localStorage.getItem("golfShot"); // Get JSON from localStorage

const golfShotObject = JSON.parse(golfShotFromLocalStorage); // Convert JSON to object

console.log(golfShotObject.club); // Logs: Driver

/* ------------------------------------------------------------------------------ */

/* DESTRUCTURING */

const person3 = {
  firstName2: "Ola",
  lastName: "Nordmann",
  country: "Norway",
};

// Destructured the properties here
const { firstName2, lastName, country } = person3;

const greeting = `Hello, I am ${firstName2} ${lastName} from ${country}.`;
console.log(greeting);
// Logs:
// Hello, I am Ola Nordmann from Norway.

//--------//

// Destructuring parameters

function greetPerson({ firstName, lastName, nestedObject: { car, color } }) {
  console.log(`Hello ${firstName} ${lastName}.`);
  console.log("Hello", firstName, lastName);
  console.log("You drive a", color, car);
}

const person4 = {
  firstName: "Ola",
  lastName: "Nordmann",
  nestedObject: {
    car: "Tesla",
    color: "red",
  },
};

greetPerson(person4);

//--------//

// Destructuring arrays

const numbers = [1, 2, 3, 4, 5];

const [first, , third, ...rest] = numbers; // second number is skipped, rest is the rest of the numbers

console.log(first, third, rest, ...rest); // Logs: 1 3 [4, 5] 4 5, rest without ... is an array

//--------//

/* MAP */

const myMap = new Map();

myMap.set("a", 1);

console.log(myMap.get("a"));
// Logs:
// 1

console.log(myMap.size); // How many items are in the map
// Logs:
// 1

myMap.delete("a"); // Deletes key "a" and value 1

//--------//

const users = new Map();

users.set("names", { firstName: "Ola", lastName: "Nordmann" });

console.log(users.get("names"));

/* ------------------------------------------------------------------------------ */

/* SET */ // A set is a collection of unique values

const mySet = new Set();

mySet.add("a");
// mySet is now ['a']
mySet.add("1");
// mySet is now ['a', 1]

mySet.has("a");
// Returns true because 'a' is in the set

mySet.has("b");
// Returns false because 'b' is not in the set

mySet.delete("a");
// 'a' is now deleted from the set

console.log(mySet.size);
// Logs:
// 1

mySet.clear();
// mySet is now empty

/* ------------------------------------------------------------------------------ */

/* CLASSES */ // A class is a template for us to create objects

// A class contains properties and methods.
// Properties are variables inside of a class, and methods are functions inside of a class.

class User {
  language = "Norwegian";
  constructor(firstName, lastName) {
    // Set 'firstName' to the 'firstName' parameter
    this.firstName = firstName;
    // Set 'lastName' to the 'lastName' parameter
    this.lastName = lastName;
  }

  // 'greetUser' method that logs a greeting message
  greetUser() {
    console.log("Hello", firstName, lastName + "! Language:", this.language);
  }
}

const newUser = new User("Ola", "Nordmann");
// Logs "Hello Ola Nordmann! Language: Norwegian"
newUser.greetUser();

//--------//

class ShoppingCart {
  cart = [];

  constructor(shopName, currency) {
    this.shopName = shopName;
    this.currency = currency;
  }

  /** Adds the item to the cart **/
  addToCart(item) {
    this.cart.push(item);
  }

  /** Removes the item from the cart **/
  removeFromCart(item) {
    const idToFind = item.id;
    // Find the index to remove
    const indexToRemove = this.cart.findIndex(
      (currentItem) => currentItem.id === idToFind
    );
    // If the index is -1 then it means no item was found, so
    //    we return null to break out of the function
    if (indexToRemove === -1) {
      return null;
    }
    // Filter the items and remove the item that matches our index
    const newCart = this.cart.filter((item, index) => index !== indexToRemove);
    // Set the cart to cart without the item by spreading out the array
    this.cart = [...newCart];
  }

  /** Calculates the total cost of items in the cart **/
  calculateTotalCost() {
    const totalCost = this.cart.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
    return totalCost;
  }

  /** Displays the items in the cart **/
  displayCart() {
    console.log("Your cart:");
    console.log("-------------------");
    this.cart.forEach((item) => {
      console.log(item.title);
    });
    console.log("===================");
  }

  /** Displays the total cost of the items in the cart **/
  displayTotalCost() {
    console.log("Total items: ", this.cart.length);
    console.log("The total of the cart is:", this.calculateTotalCost());
  }
}

const myCart = new ShoppingCart("Norway Bakery", "USD");

const cookies = { id: 23, title: "Chocolate Chip Cookies", price: 20.0 };
const cake = { id: 45, title: "Vanilla Cake", price: 30.0 };

myCart.addToCart(cookies); // Add an item
myCart.addToCart(cookies); // Add an item
myCart.addToCart(cake); // Add an item
myCart.displayCart(); // Display the cart
myCart.removeFromCart(cookies); // Remove an item
myCart.displayCart(); // Display the cart
myCart.displayTotalCost(); // Display total cost of the cart

//--------//

// Static Methods and properties

class User2 {
  constructor(name) {
    this.name = name;
  }

  // This method is available to all instances of a class
  greetUser() {
    console.log(`Hello ${this.name}!`);
  }

  static company = "Acme";

  // This method is available only on the User class itself
  static displayTime() {
    console.log("12:00");
  }
}

const newUser2 = new User("Ola Nordmann");

// This is called on the new instance of the class
newUser2.greetUser();
// Logs:
// Hello Ola Nordmann

// The static property 'company' is only available on the class itself
console.log(User2.company);
// Logs:
// Acme

// The static method 'displayTime()' is only available on the class itself
User2.displayTime();
// Logs:
// 12:00

//--------//

// Extending a class

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Cat extends Animal {
  //
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} goes meow`);
  }
}

const sheep = new Animal("Lambert");
sheep.speak();
// Logs:
// Lambert makes a sound

const cat = new Cat("Pookie");
cat.speak();
// Logs:
// Pookie goes meow

//--------//

// Getters and Setters

class Person {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const newPerson = new Person("Ola Nordmann");

console.log(newPerson.name);

/* ------------------------------------------------------------------------------ */

/* ARRAY METHODS */

// .map() - Creates a new array with the results of calling a function for every array element

// Original array
const arrayValues = [5, 7, 9, 14];

// New array called 'newArray' that contains the result from the `.map` method
const newArray = arrayValues.map(function (value, index, array) {
  return value * 2;
});

console.log(arrayValues, newArray);
// Logs:
// [5, 7, 9, 14] [10, 14, 18, 28]

//--------//

// .filter() - Creates a new array with array elements that passes a test

// Original array

const values = [100, 200, 300, 400, 500];

const newArray2 = values.filter((element, index, array) => {
  // Return true if you want to keep the item in the array being returned
  // Return false if you don't want the item to be included in the array being returned
  return element > 200;
});

console.log(newArray2); // Logs: [300, 400, 500] because 100 and 200 are not greater than 200

//--------//

// .reduce() - Reduces the array to a single value

// previousValue = the value of the previous item in the array

// Sum of these values is 25 (5 + 5 + 5 + 10)
const values2 = [5, 5, 5, 10];

const sumOfValues = values2.reduce((total, value) => {
  // Add the current value to our total
  total += value;
  // Return the total
  return total;
});

console.log(sumOfValues);
// Returns:
// 25

//--------//

// All of the in-stock products added together equals 170.95
const products = [
  { title: "Cheese", inStock: false, quantity: 2, price: 15.0 },
  { title: "Milk", inStock: true, quantity: 5, price: 8.99 },
  { title: "Bread", inStock: true, quantity: 3, price: 22.0 },
  { title: "Egg", inStock: true, quantity: 12, price: 5 },
];

const totalCost = products.reduce(
  (total, currentProduct) =>
    currentProduct.inStock
      ? (total += currentProduct.price * currentProduct.quantity)
      : total,
  0 // Initial value, 0 for number, "" for string, [] for array, {} for object
);

console.log(totalCost);
// Returns:
// 170.95

//--------//

// .find() - Returns the value of the first element in an array that passes a test
// .findIndex() - Returns the index of the first element in an array that passes a test

const values3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values3.find((currentValue, index) => {
  console.log("Current index: ", index);
  if (currentValue === 3) {
    return true;
  }
});

console.log("Found value:", foundValue);
// The console logs the following:
// Current index:  0
// Current index:  1
// Current index:  2
// Current index:  3
// Found value: 3

//--------//

const users2 = [
  { name: "Kari", id: 19313 },
  { name: "Hans", id: 40202 },
  { name: "Joakim", id: 59230 },
  { name: "Inger", id: 14023 },
  { name: "Ellen", id: 76339 },
];

const foundUser = users2.find(({ name }) => name[0].toLowerCase() === "j");

console.log(foundUser);
// Logs: { name: 'Joakim', id: 59230 }

//--------//

const books = [
  { title: "Building a Spaceship", inStock: false },
  { title: "Growing Orchids", inStock: false },
  { title: "River Fisher", inStock: false },
];

// Destructured the props and moved logic to the return
const foundBook = books.find(({ inStock }) => inStock);

if (!foundBook) {
  console.log("No books in stock!");
} else {
  console.log("First book in stock:", foundBook);
}
// Returns:
// No books in stock!

//--------//

// .some() - Checks if any of the elements in an array passes a test
// .every() - Checks if all of the elements in an array passes a test

const values4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didMatchCondition = values4.some((value, index) => {
  console.log({ index, value });
  if (value >= 3) {
    return true;
  }
});

console.log("didMatchCondition:", didMatchCondition);
// Return/output:
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// didMatchCondition: true

//--------//

const values5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition = values5.every((value, index) => {
  console.log("index:", index, "value:", value);
  if (value >= 0) {
    return true;
  }
});

console.log("didAllMatchCondition:", didAllMatchCondition);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// index: 5 value: 5
// index: 6 value: 6
// index: 7 value: 7
// index: 8 value: 8
// index: 9 value: 9
// didAllMatchCondition: true

//--------//

// CHAINING ARRAY METHODS

const values6 = [0, 1, 2, 3, 4];

const result1 = values6
  .filter(/* This filter first runs */)
  .reduce(/* This reduce acts on the result of the filter */)
  .map(/* This map acts on the result of the reduce above */);

/* ------------------------------------------------------------------------------ */

/* OBJECT METHODS */

// An object is a collection of properties, and a property is an association between a name (or key) and a value.

const person5 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

// To access a value from the object, we use a key. There are two ways we can use the key to access our values:
// Dot notation
//Bracket notation

const firstName3 = person5.firstName;

console.log(firstName3);
// Returns:
// Ola

// OR

const firstName4 = person5["firstName"];

console.log(firstName4);
// Returns:
// Ola

const recipe = {
  ingredient_0: "Egg",
  ingredient_1: "Milk",
  ingredient_2: "Flour",
};

const ingredient0 = recipe["ingredient_" + 0];
const ingredient1 = recipe["ingredient_" + 1];
const ingredient2 = recipe["ingredient_" + 2];

console.log(ingredient0);
console.log(ingredient1);
console.log(ingredient2);

// Returns:
// Egg
// Milk
// Flour

//--------//

// for...in loop - Loops through the properties of an object

const person6 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

for (const key in person6) {
  // Use the key to access the value from the key/value pair
  console.log("key:", key, "value:", person6[key]);
}
// Returns:
// key: firstName value: Ola
// key: lastName value: Nordmann
// key: module value: JavaScript

//--------//

// Object.keys() - Returns an array containing all of the keys that are in that object.

const person7 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

const keysArray = Object.keys(person7);

console.log(keysArray);
// Returns:
// ['firstName', 'lastName', 'module']

//--------//

// forEach()

const person8 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

Object.keys(person8).forEach((key) => {
  console.log(`key: ${key}, value: ${person8[key]}`);
});

// Logs:
// key: firstName, value: Ola
// key: lastName, value: Nordmann
// key: module, value: JavaScript

//--------//

// map()

const person9 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

// .map will return a new array that contains the same number
// of elements as there were in the initial array
const keysAndValues = Object.keys(person9).map((key) => {
  return `key: ${key}, value: ${person9[key]}`;
});

console.log(keysAndValues);
// Logs:
// 0: "key: firstName, value: Ola"
// 1: "key: lastName, value: Nordmann"
// 2: "key: module, value: JavaScript"

//--------//

// Object.values() - Returns an array containing all of the values that are in that object.

const person10 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

console.log(Object.values(person10));
// Returns:
// ['Ola', 'Nordmann', 'JavaScript']

//--------//

// Object.entries() - Returns an array containing all of the keys and values that are in that object.

const person11 = {
  firstName: "Ola",
  lastName: "Nordmann",
  module: "JavaScript",
};

Object.entries(person11).forEach((keyValuePair) => {
  console.log(keyValuePair);
});
// Returns:
// ['firstName', 'Ola']
// ['lastName', 'Nordmann']
// ['module', 'JavaScript']

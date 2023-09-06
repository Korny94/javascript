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

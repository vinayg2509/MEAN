// !---------------------------------DataType----------------------------------
// & Primitive Data type
console.log("Data types and its example");

// ^ 1.String

let name = "John";
let message = "Hello";
console.log(message, name);

// ^2.Bigint

let largeNumber = 9007199254740991n;
console.log(largeNumber);

// ^3.number
let age = 25;
let price = 19.99;

//^ 4.null

let bike = null;
console.log(bike);

//^ 5.undefined
let car;
console.log(car); // Output: undefined

// ^6.Symbol
const id = Symbol("id");

// ^7.Boolean
let isStudent = true;
let hasLicense = false;

// & Non Primitive Data type

//^ 1.object

let car1 = {
    color: "blue",
    make: "Ford",
    model: "Mustang",
    startEngine: function () {
    console.log("Engine started!");
  },
};
// ^2.Arrays
 const fruits = ["Apple", "Banana", "Orange"];
 console.log(fruits[0]);

 const cars = new Array("Ford", "Honda", "Toyota");
 console.log(cars[0]);
 
 

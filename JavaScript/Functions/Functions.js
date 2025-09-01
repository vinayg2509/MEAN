// !1.Named FUnction

//^ Examples:
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Vinay")); // Hello, Vinay!

//^ Examples with hoisting
sayHi(); // ✅ Works
function sayHi() {
  console.log("Hi!");
}

// !2.Function with Expression
const greeting = function() {
  console.log("Hello from function expression!");
};
greeting();

// !3.Immediately Invoked Function Expression (IIFE)
(function() {
  const message = "I am a private variable.";
  console.log(message);
})();
// Output: I am a private variable.
// Trying to access 'message' outside the IIFE will fail.
// console.log(message); // ReferenceError: message is not defined

// ! 4.Higher Order Function (HOF)
// ^Takes function as an argument
// map() is a HOF that takes a function as an argument
const numbers = [1, 2, 3];

const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9]

// ^Returns a function

function createGreeter(greeting)
{
    return function(name){
        return `${greeting}, ${name}`
    }
}
const sayHello=createGreeter("Hello")
console.log(sayHello);  
console.log(sayHello("Tom"));
const sayHai=createGreeter("Hai")
console.log(sayHai("Jerry"));

// !5.Callback Function

//~ A function passed as an argument to another function and executed later.

function processUserInput(callback) {
  let name = "Vinay";
  callback(name);
}

processUserInput((user) => {
  console.log("Hello " + user);  // Hello Vinay
});

// ! 6. Arrow Functions

const greet1 = () => console.log("Hello from arrow function!");
greet1();

// !7. Anonymous Functions
(function(){
    console.log("Hai from Anonymous function");
    
})
()

// ! Parameters & Return Values
// 'width' and 'height' are parameters
function calculateArea(width = 1, height = 1) { 
  return width * height;
}
// 10 and 5 are arguments passed to the parameters
let area = calculateArea(10, 5); 
console.log(area); // Output: 50

let defaultArea = calculateArea();
console.log(defaultArea); // Output: 1 (since no arguments were passed)

// !Return Values

function getFullName(firstName, lastName) {
  // The 'return' statement sends back the full name
  return firstName + " " + lastName; 
  console.log("This line will not be executed."); // Unreachable code
}

let fullName = getFullName("Alice", "Smith");
console.log(fullName); // Output: "Alice Smith"

// ! Arrow Functions
// ^ 1.No parameters

const sayHello1 = () => console.log("Hello!");
sayHello1()

// ^ 2.Single parameter (no parentheses needed)
const square =x=>x*x
console.log(square(2));

// ^ 3.Multiple parameters
const product=(a,b)=>a*b
console.log(product(2,3));

// ^ 4.With block body (when more than one statement is needed)
const greet2 = (name) => {
  console.log("Hello, " + name);
  return "Welcome!";
};

greet2("Vinay")

// ^ 5.Returning objects

const getUser = () => ({ id: 1, name: "Vinay" });
console.log(getUser);


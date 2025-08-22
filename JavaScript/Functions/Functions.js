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
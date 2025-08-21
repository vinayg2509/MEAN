//!Arithmetic Operators
// ^Addition (+)

let sum = 10 + 5;
console.log(sum); // Output: 15

// ^Subtraction (-)

let difference = 10 - 5;
console.log(difference); // Output: 5

// ^Multiplication (*)

let product = 10 * 5;
console.log(product); // Output: 50

// ^Division (/)
let quotient = 10 / 5;
console.log(quotient); // Output: 2

//^Modulus (%)
let remainder = 10 % 3;
console.log(remainder); // Output: 1

// ^Exponentiation (**)
let result = 2 ** 3;
console.log(result); // Output: 8

// ^Increment(++)
let a = 5;
a++;
console.log(a); // Output: 6

// ^Decrement (--)
let b = 5;
b--;
console.log(b); // Output: 4

// !Comparison Operators
// ^Strict Equal to (===)
console.log(10 === 10); // Output: true
console.log("hello" === "hello"); // Output: true
console.log(10 === "10"); // Output: false (The values are the same, but the types are different.)

// ^Equal to (==)
console.log(10 == 10); // Output: true
console.log("10" == 10); // Output: true (The string "10" is converted to a number for comparison.)
console.log(0 == false); // Output: true (0 is a "falsy" value and is coerced to false.)

// ^Not Equal to (!=)
console.log(10 != "8"); // Output: true (The string "8" is converted to the number 8, which is not equal to 10.)
console.log("10" != 10); // Output: false (The values are equal after type coercion.)

//^ Strict Not Equal to (!==)
console.log(10 !== 10); // Output: false
console.log("10" !== 10); // Output: true (The types are different.)

// ^Greater Than (>)
console.log(10 > 5); // Output: true
console.log(5 > 10); // Output: false

// ^Less Than (<)
console.log(10 < 5); // Output: false
console.log(5 < 10); // Output: true

// ^Greater Than or Equal to (>=)
console.log(10 >= 10); // Output: true
console.log(10 >= 5); // Output: true
console.log(5 >= 10); // Output: false

// ^Less Than or Equal to (<=)
console.log(10 <= 10); // Output: true
console.log(5 <= 10); // Output: true
console.log(10 <= 5); // Output: false


// !Logical Operators
// ^AND (&&)
// Example of logical AND (&&)
let x = 10;
let y = 5;

console.log(x > 5 && y < 10); // Output: true (Both conditions are true)
console.log(x < 5 && y < 10); // Output: false (The first condition is false)

// ^OR (||)
// Example of logical OR (||)
let age = 15;
let hasID = true;

console.log(age >= 18 || hasID === true); // Output: true (The second condition is true)
console.log(age >= 18 || hasID === false); // Output: false (Both conditions are false)

// ^NOT (!)
// Example of logical NOT (!)
let isLoggedin = false;

console.log(!isLoggedin); // Output: true
console.log(!true); // Output: false


// !Ternary Operator
// Example of the ternary operator
let isRaining = true;
let action = isRaining ? "Take an umbrella." : "Go for a walk.";

console.log(action); // Output: Take an umbrella.

let score = 75;
let result1 = score >= 60 ? "Pass" : "Fail";

console.log(result1); // Output: Pass

// !Bitwise Operators

//^ Bitwise AND (&)
// Example of Bitwise AND (&)
// 5 in binary is 0101
// 1 in binary is 0001
console.log(5 & 1); // Output: 1
// Binary: 0101 & 0001 = 0001 (which is 1 in decimal)

// ^Bitwise OR (|)
// Example of Bitwise OR (|)
// 5 in binary is 0101
// 1 in binary is 0001
console.log(5 | 1); // Output: 5
// Binary: 0101 | 0001 = 0101 (which is 5 in decimal)

// ^Bitwise XOR (^)
// Example of Bitwise XOR (^)
// 5 in binary is 0101
// 1 in binary is 0001
console.log(5 ^ 1); // Output: 4
// Binary: 0101 ^ 0001 = 0100 (which is 4 in decimal)

// ^Left Shift (<<)
// Example of Left Shift (<<)
// 5 in binary is 0101
console.log(5 << 2); // Output: 20
// Binary: 0101 shifted left by 2 positions becomes 010100 (which is 20 in decimal)

//^Right Shift (>>)
// Example of Right Shift (>>)
// 20 in binary is 010100
console.log(20 >> 2); // Output: 5
// Binary: 010100 shifted right by 2 positions becomes 0101 (which is 5 in decimal)

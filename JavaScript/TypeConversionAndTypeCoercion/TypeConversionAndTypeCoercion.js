// !Type Coercion

let a=5,b="5"
let c=a+b
console.log(c);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));



// The `+` operator performs string concatenation when one of the operands is a string.
// JavaScript converts the number `5` to a string `"5"` and joins them.
// Output: "55"

console.log(5 * "5");
// The `*` operator performs a mathematical operation.
// JavaScript coerces the string `"5"` to the number `5` to perform the multiplication.
// Output: 25

console.log(5 - "5");
// Similar to multiplication, the `-` operator performs a mathematical operation.
// JavaScript coerces the string `"5"` to the number `5` and performs the subtraction.
// Output: 0

console.log("5" + 5);
// Again, the `+` operator with a string operand results in concatenation.
// The number `5` is converted to a string `"5"` and joined with the first string.
// Output: "55"


// !Type Conversion
// ~To String
// ^ String()
let num = 123; // Initializes a variable `num` as a number.
let strNum = String(num); // Explicitly converts `num` to a string `"123"`.
console.log(typeof(num)); // Outputs the type of `num`, which is "number".
console.log(typeof(strNum)); // Outputs the type of `strNum`, which is "string".


let value = null; // Initializes a variable `value` as null.
let strNull = String(value); // Converts `null` to a string `"null"`.
console.log(typeof(value)); // Outputs the type of `value`, which is "object".
console.log(typeof(strNull)); // Outputs the type of `strNull`, which is "string".

// ^value.toString()
let bool = true; // Initializes a variable `bool` as a boolean.
let strBool = bool.toString(); // Converts `bool` to a string `"true"`.
console.log(typeof(bool)); // Outputs the type of `bool`, which is "boolean".
console.log(typeof(strBool)); // Outputs the type of `strBool`, which is "string".

let arr = [1, 2, 3]; // Initializes an array `arr`.
let strArr = arr.toString(); // Converts the array `arr` to a string `"1,2,3"`.
console.log(typeof(arr)); // Outputs the type of `arr`, which is "object".
console.log(typeof(strArr)); // Outputs the type of `strArr`, which is "string".


// ~To Number
// ^Number()
let str = "123"; // Initializes a variable `str` as a string.
let num1 = Number(str); // Explicitly converts `str` to a number `123`.
console.log(typeof(str)); // Outputs the type of `str`, which is "string".
console.log(typeof(num1)); // Outputs the type of `num1`, which is "number".

let strInvalid = "hello"; // Initializes a string that cannot be converted to a number.
let numInvalid = Number(strInvalid); // Attempts to convert `strInvalid`, resulting in `NaN`.
console.log(typeof(strInvalid)); // Outputs the type of `strInvalid`, which is "string".
console.log(typeof(numInvalid)); // Outputs the type of `numInvalid`, which is "number".

// ^parseInt()
let strInt = "123.45"; // Initializes a string representing a float.
let numInt = parseInt(strInt); // Parses the integer part from the string, returning `123`.
console.log(typeof(strInt)); // Outputs the type of `strInt`, which is "string".
console.log(typeof(numInt)); // Outputs the type of `numInt`, which is "number".
console.log(strInt); // Prints the original string "123.45".
console.log(numInt); // Prints the parsed number `123`.

let strFloat = "3.14 degrees"; // Initializes a string with a number and text.
let numFloat = parseFloat(strFloat); // Parses the floating-point number from the string, returning `3.14`.
console.log(typeof(strFloat)); // Outputs the type of `strFloat`, which is "string".
console.log(typeof(numFloat)); // Outputs the type of `numFloat`, which is "number".
console.log(strFloat); // Prints the original string "3.14 degrees".
console.log(numFloat); // Prints the parsed number `3.14`.

// ~To Boolean
let num2 = 1; // Initializes a variable `num2` with a number (truthy value).
let boolNum = Boolean(num2); // Explicitly converts `num2` to a boolean, resulting in `true`.
console.log(typeof(num2)); // Outputs the type of `num2`, which is "number".
console.log(typeof(boolNum)); // Outputs the type of `boolNum`, which is "boolean".
console.log(boolNum); // Prints the boolean value `true`.


let emptyStr = ""; // Initializes an empty string (a falsy value).
let boolStr = Boolean(emptyStr); // Explicitly converts `emptyStr` to a boolean, resulting in `false`.

console.log(emptyStr); // Prints the empty string `""`.
console.log(boolStr); // Prints the boolean value `false`.
console.log(typeof(emptyStr)); // Outputs the type of `emptyStr`, which is "string".
console.log(typeof(boolStr)); // Outputs the type of `boolStr`, which is "boolean".
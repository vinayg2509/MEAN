// !------------------------------------------------Variables----------------------------------------------

// ^ 1.var
console.log("Types of variable and its example");

var a = 10;// Declares 'a' and assigns 10.
var a = 20;// Re-declares 'a' and reassigns 20.
console.log(a);// Prints the most recent value of 'a', which is 20.
function example() {
  var a = 1;  // 'a' is declared with a value of 1, scoped to this function.
  if (true) {
    var a = 2;// Reassigns the function-scoped 'a' to 2.
    var a = 3;// Reassigns 'a' again, this time to 3.
    console.log(a);// Prints the value of 'a' from inside the 'if' block, which is 3.
  }
  console.log(a);// Prints the value of 'a' from the function scope, which is still 3.
}
example();// Executes the 'example' function.

// ^ 2.let

function example() {
  let b = 1;
  if (true) {
    let b = 2; // This creates a NEW, separate 'b' for this block
    //let b=8; can't redeclare
    console.log(b); // Output: 2
  }
  console.log(b); // Output: 1
}

// ^ 3.const

const c = 1;
// c = 2; // This will cause an error: TypeError: Assignment to constant variable.

const d = { name: "Alice" };
d.name = "Bob"; // This is allowed
console.log(d.name); // Output: "Bob"

const e = [1, 2, 3];
e.push(4); // This is allowed
console.log(e); // Output: [1, 2, 3, 4]



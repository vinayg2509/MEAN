// ! Decesion Statement

// ^Simple if

let studentScore = 85;
let passingScore = 70;

if (studentScore >= passingScore) {
  console.log("Congratulations! You passed the test.");
}

// ^if else if
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a cold day.");
}

// ^Switch
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("I found a banana.");
    break;
  case "apple":
    console.log("I found an apple.");
    break;
  case "orange":
    console.log("I found an orange.");
    break;
  default:
    console.log("I don't know that fruit.");
}

// ^ if-else
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// !Control flow
// ^For loop
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// ^While loop
let count = 0;
while (count < 3) {
  console.log("The count is " + count);
  count++;
}

// ^Do...While Loop
let i = 0;
do {
  console.log("The number is " + i);
  i++;
} while (i < 0);

// ^Jump Statement
// Example using break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Example using continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip this iteration when i is 2
  }
  console.log(i);
}
// Output: 0, 1, 3, 4
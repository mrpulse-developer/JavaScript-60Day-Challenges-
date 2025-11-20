// 💛 JavaScript Code for Revision and Quiz (Day 15)

// ⭐ Revision of All Topics from Day 1 – 14

// 1️⃣ Variables
let name = "John";
let age = 21;

// 2️⃣ Data Types
let isStudent = true;

// 3️⃣ Operators
let sum = 10 + 20;

// 4️⃣ Conditional Statements
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 5️⃣ Loops
for (let i = 1; i <= 3; i++) {
  console.log("Loop:", i);
}

// 6️⃣ Functions
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet(name));

// 7️⃣ Strings
let message = "JavaScript Learning";
console.log(message.toUpperCase());

// 8️⃣ Numbers & Math
console.log(Math.sqrt(49));

// 9️⃣ Type Conversion
console.log(Number("50"));

// 1️⃣0️⃣ Debugging
console.log("Debug:", name, age);


// 📝 QUIZ SECTION
console.log("\n📘 JavaScript Quiz (Day 15)");

// Q1
console.log("Q1: What is the output of '10' + 5?");
console.log("Answer:", "10" + 5);

// Q2
console.log("Q2: What method converts a string to uppercase?");
console.log("Answer:", "hello".toUpperCase());

// Q3
console.log("Q3: Which operator checks both value and type?");
console.log("Answer: ===");

// Q4
console.log("Q4: What is the result of Math.floor(4.9)?");
console.log("Answer:", Math.floor(4.9));

// Q5
console.log("Q5: Write a simple function to multiply two numbers.");
function multiply(a, b) {
  return a * b;
}
console.log("Answer:", multiply(3, 5));

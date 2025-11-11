// 💛 JavaScript Code for Function Parameters and Scope (Day 08)

// 🧩 1. Function with Parameters
function greet(name) {
  console.log(`👋 Hello, ${name}! Welcome to JavaScript Day 8.`);
}
greet("Alice");
greet("Bob");

// 🧠 2. Function with Multiple Parameters
function addNumbers(a, b) {
  console.log(`➕ The sum of ${a} and ${b} is ${a + b}`);
}
addNumbers(5, 3);
addNumbers(10, 20);

// ⚙️ 3. Function with Default Parameter
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}! 👋`);
}
greetUser("John");
greetUser();

// 🎯 4. Function Returning a Value
function multiply(x, y) {
  return x * y;
}
const product = multiply(4, 6);
console.log("🧮 Product:", product);

// 🌍 5. Understanding Variable Scope
let globalVar = "🌎 I am a global variable";

function showScope() {
  let localVar = "🏠 I am a local variable";
  console.log(localVar);      // accessible inside
  console.log(globalVar);     // can access global variable
}
showScope();

// ❌ Uncommenting below line will throw an error (localVar not accessible here)
// console.log(localVar);

// 🧩 6. Modifying Global Variable
let count = 0;

function increment() {
  count += 1;
  console.log("Count inside function:", count);
}
increment();
increment();
console.log("Count outside function:", count);

// 💛 JavaScript Code for Functions (Day 07)

// 🧩 1. Basic Function
function greet() {
  console.log("👋 Hello, welcome to Day 7 of JavaScript!");
}
greet();

// 🧠 2. Function with Parameters
function add(a, b) {
  return a + b;
}
console.log("Addition:", add(5, 3));

// 🔄 3. Function Expression
const multiply = function (x, y) {
  return x * y;
};
console.log("Multiplication:", multiply(4, 6));

// ⚡ 4. Arrow Function (Modern JS)
const divide = (a, b) => a / b;
console.log("Division:", divide(10, 2));

// 🎯 5. Function with Default Parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}! 👋`);
}
greetUser("John");
greetUser();

// 🧩 6. Function returning another function
function outer() {
  return function inner() {
    console.log("This is an inner function!");
  };
}
const innerFunc = outer();
innerFunc();

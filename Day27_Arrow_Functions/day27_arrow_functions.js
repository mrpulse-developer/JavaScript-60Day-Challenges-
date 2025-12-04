// 💛 JavaScript code for Arrow Functions (Day 27)

// Basic arrow function
const sayHello = () => {
  console.log("Hello from Arrow Function!");
};
sayHello();

// Arrow function with parameters
const add = (a, b) => a + b;
console.log("Add:", add(10, 5));

// Single parameter arrow function
const square = n => n * n;
console.log("Square:", square(6));

// Arrow function inside array methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// Arrow function returning object
const createUser = (name, age) => ({
  name,
  age,
  active: true
});

console.log("User:", createUser("Akash", 22));

// Arrow function + this (note: arrow functions do NOT bind this)
const person = {
  name: "John",
  showName: () => {
    console.log("Arrow this.name:", this.name);
  }
};

person.showName(); // undefined (arrow doesn't bind this)

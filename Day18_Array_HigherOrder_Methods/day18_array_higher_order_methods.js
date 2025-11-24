// 💛 JavaScript code for Array Higher Order Methods (Day 18)

// 🧠 Higher Order Methods: map(), filter(), reduce(), find(), some(), every()

let numbers = [10, 20, 30, 40, 50];

// 1️⃣ map() → Transform each item
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2️⃣ filter() → Get items that pass a condition
let above30 = numbers.filter(num => num > 30);
console.log("Numbers > 30:", above30);

// 3️⃣ reduce() → Accumulate values
let total = numbers.reduce((acc, val) => acc + val, 0);
console.log("Total (reduce):", total);

// 4️⃣ find() → Return first match
let found = numbers.find(num => num > 25);
console.log("First number > 25:", found);

// 5️⃣ some() → At least one item matches?
let hasAbove40 = numbers.some(num => num > 40);
console.log("Has a number > 40?", hasAbove40);

// 6️⃣ every() → All items match?
let allAbove5 = numbers.every(num => num > 5);
console.log("Are all numbers > 5?", allAbove5);

// 7️⃣ Chaining Higher Order Functions
let chainedResult = numbers
  .filter(num => num > 20)   // keep >20
  .map(num => num * 3)       // multiply by 3
  .reduce((a, b) => a + b, 0); // sum all

console.log("Chained Result:", chainedResult);

// 8️⃣ Higher Order Example with Array of Objects
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "John", age: 30 }
];

// Get only adults
let adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// Extract names with map()
let names = users.map(user => user.name);
console.log("User Names:", names);

// Total age using reduce()
let totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Total Age:", totalAge);

// 💛 JavaScript code for forEach, find, some, every (Day 19)

// Sample array
let numbers = [10, 20, 30, 40, 50];

// 1️⃣ forEach() → Loop through array
console.log("forEach Output:");
numbers.forEach((num, index) => {
  console.log(`Index ${index}:`, num);
});

// 2️⃣ find() → Find FIRST matching value
let found = numbers.find(num => num > 25);
console.log("\nfind() Output:", found); // 30

// 3️⃣ some() → At least ONE matches?
let hasAbove40 = numbers.some(num => num > 40);
console.log("\nsome() Output (num > 40?):", hasAbove40); // true

// 4️⃣ every() → ALL must match
let allAbove5 = numbers.every(num => num > 5);
console.log("\nevery() Output (num > 5?):", allAbove5); // true


// 👉 Array of objects example
let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "John", age: 30 }
];

// forEach with objects
console.log("\nUsers List:");
users.forEach(user => console.log(user.name));

// find() with objects
let adultUser = users.find(user => user.age >= 18);
console.log("\nFirst Adult User:", adultUser);

// some() with objects
let hasMinor = users.some(user => user.age < 18);
console.log("Any minors?", hasMinor);

// every() with objects
let allAdults = users.every(user => user.age >= 18);
console.log("All users adults?", allAdults);

// 💛 JavaScript code for Destructuring (Day 23)

// Array Destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a, b, c);

// Default values
const [x = 5, y = 10] = [100];
console.log(x, y);

// Skipping values
const [first, , third] = [1, 2, 3];
console.log(first, third);

// Object Destructuring
const person = {
  name: "John",
  age: 25,
  city: "Delhi"
};

const { name, age, city } = person;
console.log(name, age, city);

// Renaming variables
const { name: fullName } = person;
console.log(fullName);

// Nested Object Destructuring
const user = {
  username: "coder",
  details: {
    email: "coder@example.com",
    country: "India"
  }
};

const { details: { email, country } } = user;
console.log(email, country);

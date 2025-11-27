// 💛 JavaScript Code for Object Methods and this (Day 21)

// 🔹 Basic Object with Methods
const person = {
  name: "John",
  age: 25,

  // Method 1: Simple function inside object
  greet: function () {
    console.log("Hello! My name is " + this.name);
  },

  // Method 2: Arrow function (does NOT bind 'this')
  showAge: () => {
    // ❌ this.age will NOT work correctly in arrow functions
    console.log("Age (arrow function cannot access this correctly):", this.age);
  },

  // Method 3: Update age using this
  birthday: function () {
    this.age++;
    console.log("Happy Birthday! New Age:", this.age);
  },
};

console.log("\n--- Person Object Methods ---");
person.greet();
person.showAge();
person.birthday();

// 🔹 Using 'this' inside nested objects
const user = {
  username: "coder123",
  country: "India",

  details: {
    email: "coder@example.com",
    showEmail: function () {
      console.log("Email:", this.email); // refers to 'details' object
    },
  },
};

console.log("\n--- Nested Object Method ---");
user.details.showEmail();

// 🔹 Object with dynamic behavior using methods
const calculator = {
  num1: 10,
  num2: 5,

  add() {
    return this.num1 + this.num2;
  },
  subtract() {
    return this.num1 - this.num2;
  },
  multiply() {
    return this.num1 * this.num2;
  },
  divide() {
    return this.num1 / this.num2;
  },
};

console.log("\n--- Calculator Methods ---");
console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
console.log("Divide:", calculator.divide());

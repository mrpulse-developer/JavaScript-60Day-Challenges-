// 💛 JavaScript code for Template Literals (Day 12)

// 📘 Template Literals use backticks: ` `

// 🧩 Basic Example
let name = "John";
console.log(`Hello, ${name}! Welcome to Day 12 🚀`);

// 🎯 Multi-line Strings
let message = `
This is a multi-line string.
It looks clean and easy to read!
`;
console.log(message);

// 🔄 Expressions inside template literals
let a = 10;
let b = 5;
console.log(`Total: ${a + b}`);
console.log(`Product: ${a * b}`);

// ⚡ Embedding functions
function greet(user) {
  return `Hi, ${user}!`;
}
console.log(`${greet("Alice")}`);

// 🧩 Creating formatted output
let product = "Laptop";
let price = 59999;

console.log(`
📦 Product: ${product}
💰 Price: ₹${price}
🛒 Status: Available
`);

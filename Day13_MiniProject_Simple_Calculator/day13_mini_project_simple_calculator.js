// 💛 JavaScript code for Mini Project: Simple Calculator (Day 13)

console.log("📘 Welcome to JavaScript Simple Calculator (Day 13)");

// Functions for operations
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return b === 0 ? "❌ Cannot divide by zero!" : a / b;
}

// Main Program Loop
while (true) {
  console.log(`
Choose an operation:
1️⃣ Add
2️⃣ Subtract
3️⃣ Multiply
4️⃣ Divide
5️⃣ Exit
`);

  let choice = prompt("Enter choice (1-5):");

  if (choice === "5") {
    console.log("👋 Exiting Calculator… Goodbye!");
    break;
  }

  if (!["1", "2", "3", "4"].includes(choice)) {
    console.log("❌ Invalid choice! Try again.");
    continue;
  }

  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("❌ Please enter valid numbers!");
    continue;
  }

  let result;

  if (choice === "1") result = add(num1, num2);
  if (choice === "2") result = sub(num1, num2);
  if (choice === "3") result = mul(num1, num2);
  if (choice === "4") result = div(num1, num2);

  console.log("Result:", result);
}

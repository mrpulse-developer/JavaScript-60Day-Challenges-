// 💛 JavaScript Code for Debugging and Comments (Day 14)

// 📝 Single line comment
// This function adds two numbers
function add(a, b) {
  return a + b;
}

/*
  📝 Multi-line comment
  This section helps you test and debug your code
*/

// 🔍 Debug using console.log()
let x = 10;
let y = 5;

console.log("Value of x:", x);
console.log("Value of y:", y);

// ❗ If result is unexpected, debugging helps check where problem is
let result = add(x, y);
console.log("Result:", result);

// ⚠️ Debugging a common mistake
function subtract(a, b) {
  // ❌ Wrong code: return a + b;
  // ✔️ Fixed:
  return a - b;
}

console.log("Subtract:", subtract(10, 5));

// 🧪 Try/Catch for error debugging
try {
  let num = Number("abc"); // invalid number → NaN
  if (isNaN(num)) {
    throw new Error("Invalid number conversion!");
  }
} catch (error) {
  console.error("⚠️ Error found:", error.message);
}

// 💛 JavaScript Code for Conditional Statements (Day 05)

// 🧠 Example 1: Basic if-else
let age = 18;

if (age >= 18) {
  console.log("✅ You are eligible to vote!");
} else {
  console.log("❌ You are not eligible to vote yet.");
}

// 🧩 Example 2: if - else if - else ladder
let score = 85;

if (score >= 90) {
  console.log("🏆 Grade: A+");
} else if (score >= 75) {
  console.log("🎯 Grade: B");
} else if (score >= 60) {
  console.log("👍 Grade: C");
} else {
  console.log("⚠️ Grade: Needs Improvement");
}

// 🔄 Example 3: Nested if statements
let isLoggedIn = true;
let hasSubscription = false;

if (isLoggedIn) {
  if (hasSubscription) {
    console.log("🎬 Access granted! Enjoy your premium content.");
  } else {
    console.log("🔒 Please upgrade to premium to watch this video.");
  }
} else {
  console.log("👤 Please log in to continue.");
}

// ⚡ Example 4: Using Ternary Operator (short version)
let time = 20;
let message = (time < 18) ? "🌞 Good Day!" : "🌙 Good Evening!";
console.log(message);

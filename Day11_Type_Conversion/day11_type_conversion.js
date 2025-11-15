// 💛 JavaScript code for Type Conversion (Day 11)

// 🔄 String to Number
console.log(Number("25"));          // 25
console.log(parseInt("40"));        // 40
console.log(parseFloat("10.55"));   // 10.55

// ❌ Invalid conversion (NaN)
console.log(Number("Hello"));       // NaN

// 🔄 Number to String
let age = 20;
console.log(String(age));           // "20"
console.log(age.toString());        // "20"

// 🔄 Boolean Conversion
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false
console.log(Boolean("Hello"));      // true
console.log(Boolean(""));           // false

// 🧠 Automatic Type Conversion (Coercion)
console.log("10" + 5);              // "105" (string)
console.log(10 + "5");              // "105"
console.log("10" - 5);              // 5 (number)
console.log(true + 1);              // 2 (true → 1)

// 💛 JavaScript Code for Number and Math Methods (Day 10)

// 🔢 Basic Numbers
let num = 25.6789;

// 📏 1. Number Methods
console.log("toFixed(2):", num.toFixed(2));        // Round to 2 decimals
console.log("toPrecision(4):", num.toPrecision(4));
console.log("toString():", num.toString());
console.log("Number():", Number("50"));

// 🔍 Check Not-a-Number
console.log("isNaN('Hello'):", isNaN("Hello"));
console.log("isNaN(123):", isNaN(123));

// 🧮 2. Math Methods
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.pow(2,3):", Math.pow(2, 3));
console.log("Math.sqrt(49):", Math.sqrt(49));

// 🎯 3. Random Numbers
console.log("Random (0-1):", Math.random());
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1);



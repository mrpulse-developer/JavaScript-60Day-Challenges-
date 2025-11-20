// 💛 JavaScript Code for Arrays Basics (Day 16)

// Creating an array
let fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits List:", fruits);

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Updating values
fruits[1] = "Mango";
console.log("After update:", fruits);

// Adding values
fruits[fruits.length] = "Grapes"; // manual add
console.log("After manual add:", fruits);

// Array length
console.log("Total fruits:", fruits.length);

// Looping through array
console.log("\nLooping array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using for..of
console.log("\nUsing for..of:");
for (let fruit of fruits) {
  console.log(fruit);
}

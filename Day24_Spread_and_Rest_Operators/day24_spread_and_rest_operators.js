// 💛 JavaScript code for Spread and Rest Operators (Day 24)

// Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread Array:", arr2);

// Spread with Objects
const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, city: "Delhi" };
console.log("Spread Object:", obj2);

// Copy array without reference
const copyArr = [...arr1];
console.log("Copied Array:", copyArr);

// Rest Operator in Functions
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log("Sum:", sum(10, 20, 30));

// Rest in Array Destructuring
const [first, ...remaining] = [10, 20, 30, 40];
console.log("First:", first);
console.log("Remaining:", remaining);

// Rest in Objects
const { name, ...otherDetails } = obj2;
console.log("Name:", name);
console.log("Other Details:", otherDetails);

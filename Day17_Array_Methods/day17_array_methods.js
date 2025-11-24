// 💛 JavaScript Code for Array Methods (Day 17)

// Starting array
let numbers = [10, 20, 30, 40];
console.log("Original Array:", numbers);

// 1️⃣ push() → Add at end
numbers.push(50);
console.log("After push:", numbers);

// 2️⃣ pop() → Remove last
numbers.pop();
console.log("After pop:", numbers);

// 3️⃣ unshift() → Add at start
numbers.unshift(5);
console.log("After unshift:", numbers);

// 4️⃣ shift() → Remove first
numbers.shift();
console.log("After shift:", numbers);

// 5️⃣ indexOf() → Find index
console.log("Index of 30:", numbers.indexOf(30));

// 6️⃣ includes() → Check value
console.log("Includes 20?", numbers.includes(20));
console.log("Includes 100?", numbers.includes(100));

// 7️⃣ slice() → Copy part of array
console.log("Slice (1,3):", numbers.slice(1, 3));

// 8️⃣ splice() → Add/remove items
numbers.splice(2, 1); // remove index 2
console.log("After splice:", numbers);

numbers.splice(1, 0, 15); // insert 15 at index 1
console.log("After insert using splice:", numbers);

// 9️⃣ join() → Array to string
console.log("Join with '-':", numbers.join("-"));

// 🔟 reverse() → Reverse array
numbers.reverse();
console.log("Reversed:", numbers);

// 1️⃣1️⃣ sort() → Sort array
let unsorted = [30, 10, 50, 20, 40];
console.log("Sort:", unsorted.sort());

// 1️⃣2️⃣ map() → Transform items
let doubled = numbers.map(num => num * 2);
console.log("Map doubled:", doubled);

// 1️⃣3️⃣ filter() → Filter items
let filtered = numbers.filter(num => num > 20);
console.log("Filtered > 20:", filtered);

// 1️⃣4️⃣ reduce() → Sum of array
let total = numbers.reduce((acc, val) => acc + val, 0);
console.log("Reduce sum:", total);

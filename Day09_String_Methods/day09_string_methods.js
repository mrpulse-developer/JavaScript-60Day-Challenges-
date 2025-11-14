// 💛 JavaScript Code for String Methods (Day 09)

// 🧩 1. Declaring Strings
let message = "Hello, JavaScript!";
let name = "John Doe";

// 🧠 2. String Length
console.log("Length of message:", message.length);

// 🧠 3. Changing Case
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());

// 🧩 4. Accessing Characters
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);

// ⚙️ 5. String Concatenation
let greeting = "Hi, " + name + "!";
console.log("Concatenation (+):", greeting);

// 💥 6. Template Literals (Modern Way)
let modernGreeting = `Hello, ${name}! Welcome to Day 9 🚀`;
console.log("Template Literal:", modernGreeting);

// 🔍 7. Searching Strings
console.log("Includes 'JavaScript'?", message.includes("JavaScript"));
console.log("Starts with 'Hello'?", message.startsWith("Hello"));
console.log("Ends with '!'?", message.endsWith("!"));

// ✂️ 8. Extracting Substrings
console.log("Substring (0,5):", message.substring(0, 5));
console.log("Slice (7,17):", message.slice(7, 17));

// 🔄 9. Replacing & Trimming
let newMessage = message.replace("JavaScript", "World");
console.log("Replaced:", newMessage);

let messyString = "   Coding is fun!   ";
console.log("Before Trim:", messyString);
console.log("After Trim:", messyString.trim());

// 🧮 10. Splitting & Joining
let words = message.split(" "); // split string into words
console.log("Split into array:", words);
console.log("Joined with '-':", words.join("-"));

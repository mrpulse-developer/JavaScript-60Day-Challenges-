// 💛 JavaScript code for DOM Selectors (Day 29)

// 1️⃣ Select by ID
const title = document.getElementById("title");
console.log("ID Selector:", title);

// 2️⃣ Select by Class
const items = document.getElementsByClassName("item");
console.log("Class Selector (HTMLCollection):", items);

// 3️⃣ Select by Tag Name
const paragraphs = document.getElementsByTagName("p");
console.log("Tag Selector (HTMLCollection):", paragraphs);

// 4️⃣ querySelector – selects FIRST match
const firstItem = document.querySelector(".item");
console.log("querySelector (first item):", firstItem);

// 5️⃣ querySelectorAll – selects ALL matches
const allItems = document.querySelectorAll(".item");
console.log("querySelectorAll (NodeList):", allItems);

// 6️⃣ Selecting nested elements
const container = document.querySelector(".container");
const nestedItem = container.querySelector(".item");
console.log("Nested Select:", nestedItem);

// 7️⃣ Modifying selected elements
if (title) {
  title.style.color = "blue";
  title.textContent = "Day 29 — DOM Selectors 🔍";
}

// 8️⃣ Looping through selected items
allItems.forEach((el, index) => {
  el.textContent = `Item ${index + 1}`;
  el.style.fontWeight = "bold";
});

// 9️⃣ Selecting form input
const inputField = document.querySelector("input[name='username']");
console.log("Input Field:", inputField);

// 1️⃣0️⃣ Checking if element exists before using it
const wrongSelector = document.querySelector(".not-found");
console.log("Wrong Selector Output:", wrongSelector); // null

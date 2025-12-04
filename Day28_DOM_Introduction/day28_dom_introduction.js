// 💛 JavaScript code for DOM Introduction (Day 28)
// Write your code below

// NOTE: This code is meant to run in the browser (index.html with this script linked).

// 1) Selecting elements
const title = document.getElementById("title");            // by id
const items = document.querySelectorAll(".item");          // all matching selector (NodeList)
const container = document.querySelector(".container");    // first matching selector

console.log("Title element:", title);
console.log("Items NodeList:", items);
console.log("Container:", container);

// 2) Reading and updating content & attributes
if (title) {
  console.log("Original title text:", title.textContent);
  title.textContent = "Day 28 — DOM Introduction 🚀";      // update text
  title.style.color = "teal";                              // inline style change
}

if (container) {
  // add an attribute
  container.setAttribute("data-day", "28");
  console.log("container data-day:", container.getAttribute("data-day"));
}

// 3) Creating and inserting elements
const newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent = "🆕 Dynamically added item";
container && container.appendChild(newItem);               // append at end

// 4) Event listeners (click)
function handleItemClick(e) {
  const el = e.currentTarget;
  el.classList.toggle("highlight");
  console.log("Clicked item:", el.textContent);
}

// attach click listener to existing items (NodeList -> Array)
items.forEach(item => item.addEventListener("click", handleItemClick));

// 5) Delegation example (better for many dynamic items)
if (container) {
  container.addEventListener("click", (e) => {
    const clicked = e.target.closest(".item");
    if (!clicked) return; // click outside item
    console.log("Delegated click on:", clicked.textContent);
    clicked.classList.toggle("selected");
  });
}

// 6) Removing elements
const removeBtn = document.getElementById("remove-btn");
if (removeBtn) {
  removeBtn.addEventListener("click", () => {
    // remove the last .item inside container
    const last = container && container.querySelector(".item:last-child");
    if (last) {
      last.remove();
      console.log("Removed:", last.textContent);
    } else {
      console.log("No item to remove");
    }
  });
}

// 7) Form handling (prevent default + read values)
const demoForm = document.getElementById("demo-form");
if (demoForm) {
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload
    const input = demoForm.querySelector('input[name="name"]');
    const val = input ? input.value.trim() : "";
    if (val) {
      const el = document.createElement("div");
      el.className = "item";
      el.textContent = `👤 ${val}`;
      container.appendChild(el);
      el.addEventListener("click", handleItemClick); // wire up behavior
      demoForm.reset();
      console.log("Added from form:", val);
    } else {
      console.log("Empty input — nothing added");
    }
  });
}

// 8) Helpful utility: toggle visibility
function toggleVisibility(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.style.display = (el.style.display === "none") ? "" : "none";
}

// End of Day 28 DOM intro code

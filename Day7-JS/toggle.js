// Step 1: Select the element we want to change (Body)
const body = document.body;
const a = document.getElementById("a1");
const copyBtn = document.getElementById("copybtn");
const textarea = document.getElementById("tweet-box");
// Step 2: Select the trigger (Button)
const btn = document.querySelector("#toggle-btn");

// Step 3: Add the Event Listener
btn.addEventListener("click", () => {
  // Toggle the class. If 'dark-theme' exists, remove it. If not, add it.
  body.classList.toggle("dark-theme");

  // Optional: Update button text based on current state
  if (body.classList.contains("dark-theme")) {
    btn.innerText = "Switch to dark Mode";
    // a.style.borderColor = "black"; // Optional: Change border color in dark mode
  } else {
    btn.innerText = "Switch to Light Mode";
    // a.style.borderColor = "white"; // Optional: Change border color in light mode
    // a1.style.borderColor = "white";
  }
});
copyBtn.addEventListener("click", async () => {
  // Write the textarea value to the system clipboard
  await navigator.clipboard.writeText(textarea.value);
});

// 1. Select Elements
const inputBox = document.querySelector("#tweet-box");
const counterDisplay = document.querySelector("#char-count");
const maxLimit = 50;

// 2. Add 'input' Event Listener
// Note: We use 'input' instead of 'keydown' to catch copy-pasting too!
inputBox.addEventListener("input", () => {
  // A. Get current length
  const currentLength = inputBox.value.length;

  // B. Update the text on screen
  counterDisplay.innerText = `${currentLength} / ${maxLimit}`;

  // C. Check Logic: Are we over the limit?
  if (currentLength > maxLimit) {
    // Add the red color class
    counterDisplay.classList.add("limit-reached");
    inputBox.style.borderColor = "red"; // Optional visual cue
  } else {
    // Remove the red color class (back to normal)
    counterDisplay.classList.remove("limit-reached");
    inputBox.style.borderColor = "black";
  }
});

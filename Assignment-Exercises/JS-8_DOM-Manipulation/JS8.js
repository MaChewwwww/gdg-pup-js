// Select DOM elements using querySelector
const counterText = document.querySelector("#counter-text");
const addButton = document.querySelector("#button-add");
const subtractButton = document.querySelector("#button-subtract");

// Initialize counter value
let counterVal = 0;

// Update display function
function updateDisplay() {
    counterText.textContent = counterVal;
}

// Add button click handler
addButton.addEventListener("click", () => {
    counterVal++;
    updateDisplay();
});

// Subtract button click handler
subtractButton.addEventListener("click", () => {
    // Prevent counter from going negative
    if (counterVal > 0) {
        counterVal--;
        updateDisplay();
    }
});

// Initialize display
updateDisplay();
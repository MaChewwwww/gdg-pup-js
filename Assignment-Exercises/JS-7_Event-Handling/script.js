/**
 * Generates a random hexadecimal color code
 * @returns {string} A hexadecimal color code (e.g., "#FF0000")
 */
function generateRandomColor() {
    // Generate random number and convert to hexadecimal
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // Ensure the color code is 6 digits by padding with zeros
    return "#" + randomColor.padStart(6, '0');
}

// Select the button element
const colorButton = document.getElementById('changeColorBtn');

// Add click event listener to the button
colorButton.addEventListener('click', function() {
    // Generate and apply random color to background
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    
    // Optional: Update button text to show current color
    colorButton.textContent = `Current Color: ${newColor}`;
});
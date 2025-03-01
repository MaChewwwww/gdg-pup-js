/**
 * Checks the user's age and displays the appropriate category
 * Categories: Child (0-12), Teenager (13-19), Adult (20+)
 */
function checkAge() {
    // Get the age input value and convert it to a number
    const age = Number(document.getElementById('ageInput').value);
    
    // Initialize category variable
    let category;
    
    // Check if the input is valid
    if (isNaN(age) || age < 0) {
        category = "Invalid age. Please enter a valid number.";
    }
    // Categorize age
    else if (age <= 12) {
        category = "Child";
    }
    else if (age <= 19) {
        category = "Teenager";
    }
    else {
        category = "Adult";
    }
    
    // Display the result
    document.getElementById('result').textContent = category;
}

/**
 * JavaScript Variables: let, const, and var
 * 
 * 1. let:
 *    - Used to declare variables that can be reassigned later.
 *    - Block-scoped: The variable exists only within the block where it's declared.
 *    - Preferred for variables whose values may change during program execution.
 *    - Example: let count = 5; count = 10; // Valid
 * 
 * 2. const:
 *    - Used to declare variables whose values cannot be reassigned.
 *    - Block-scoped like `let`.
 *    - Must be initialized at the time of declaration.
 *    - Preferred for constants or variables that should not change.
 *    - Example: const pi = 3.14159; pi = 4; // Error
 * 
 * 3. var:
 *    - Used to declare variables with function scope.
 *    - Hoisted to the top of its scope, but its value remains `undefined` until assigned.
 *    - Not block-scoped, which can cause unexpected behaviors.
 *    - Its usage is generally discouraged in modern JavaScript due to better alternatives (`let` and `const`).
 *    - Example: var name = "John"; name = "Doe"; // Valid
 */
 
// Using let
let name = "Juan Cruz";
let age = 30;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];

// Checking types and values
console.log(typeof name); // Output: "string"
console.log(typeof age); // Output: "number"
console.log(typeof isStudent); // Output: "boolean"
console.log(typeof hobbies); // Output: "object"

// Using const
const pi = 3.14159;
const birthYear = 1990;
const isEmployed = true;
const favoriteBooks = ["1984", "Brave New World", "Fahrenheit 451"];

// Checking types and values
console.log(typeof pi); // Output: "number"
console.log(typeof birthYear); // Output: "number"
console.log(typeof isEmployed); // Output: "boolean"
console.log(typeof favoriteBooks); // Output: "object"

// Using var
var city = "New York";
var temperature = 22.5;
var hasPets = true;
var colors = ["red", "green", "blue"];

// Checking types and values
console.log(typeof city); // Output: "string"
console.log(typeof temperature);  // Output: "number"
console.log(typeof hasPets); // Output: "boolean"
console.log(typeof colors); // Output: "object"

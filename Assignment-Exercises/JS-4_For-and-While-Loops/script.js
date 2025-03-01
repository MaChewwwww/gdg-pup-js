// scripts.js

/********************
 Task 1: For Loop to print numbers 1 to 10
********************/
console.log("Task 1: Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(`Number: ${i}`);
}

/********************
 Task 2: While Loop to print hobbies
********************/
console.log("\nTask 2: List of Hobbies");
let hobbies = [
    "Reading",
    "Writing",
    "Cycling",
    "Hiking",
    "Cooking",
    "Drawing",
    "Gaming",
    "Gardening",
    "Photography",
    "Traveling"
];

let index = 0;
while (index < hobbies.length) {
    console.log(`Hobby ${index + 1}: ${hobbies[index]}`);
    index++;
}

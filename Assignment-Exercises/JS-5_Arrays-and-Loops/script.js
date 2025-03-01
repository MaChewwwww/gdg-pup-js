/********************
 * Movie List Program
 * This program creates an array of favorite movies and displays them using loops
 ********************/

// Step 1: Create an array of favorite movies
const favoriteMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "Fight Club",
    "Inception",
    "The Matrix",
    "Interstellar",
    "Goodfellas",
    "The Lord of the Rings"
];

// Step 2: Display the total number of movies
console.log(`My Top ${favoriteMovies.length} Favorite Movies:`);
console.log("-----------------------------");

// Step 3: Use a loop to display each movie with its number
for (let i = 0; i < favoriteMovies.length; i++) {
    console.log(`${i + 1}. ${favoriteMovies[i]}`);
}

// Step 4: Display a message after all movies are listed
console.log("-----------------------------");
console.log("End of movie list!");
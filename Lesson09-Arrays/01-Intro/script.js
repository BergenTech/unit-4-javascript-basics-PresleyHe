// Introduction to JavaScript Arrays

// Arrays allow storing multiple values in a single variable

// Creating Arrays
// Using array literal notation
let oceans = ["Pacific", "Atlantic", "Indian", "Arctic", "Antarctic"]
// Using the Array constructor
let sharks = new Array("Hammerhead", "Great White")
// Array Indexing
let seaCreatures = ["Octopus", "Squid", "Shark", "Seahorse","StarFish"]
// Access elements using index (starting at 0)
// first element
console.log(seaCreatures[0])
// last element
console.log(seaCreatures[4]) // do not use this way
let length = seaCreatures.length
console.log(seaCreatures[length-1])

// Common Array Operations
let Fish = ["Tuna", "Salmon", "cod"]
// 1. Accessing Elements
let firstFish = Fish[0]
let lastFish = Fish[Fish.length-1]
console.log(lastFish)
// 2. Modifying Elements
Fish[1] = "bass"
let fishString = "tuna"
fishString[0] = "T"
console.log(fishString)
fishString = "Tuna"

// 3. Adding Elements
seaCreatures[5] = "Whale"
console.log(seaCreatures)
seaCreatures[7] = "pufferfish"
console.log(seaCreatures)
console.log(seaCreatures[6])
// 4. Checking Array Length
let lenSeaCreatures = seaCreatures.length
console.log(`There are ${lenSeaCreatures} creatures in the seaCreatures array`)

// Difference between Strings and Arrays
// Strings are immutable
let word = "hello"
word[0] = "j" //This wont work
console.log(word)
// Arrays are mutable
let letters = ["h", 'e', "l", "l", "o"]
letters[0] = "j"
console.log(letters)

// Multi-dimensional Arrays
// Arrays can contain other arrays (2D arrays)
let board = [
    ["X", "O", "X"],
    ["0", "X", "0"],
    ["X", "O", "X"],
]
console.log(board[0][1]) // O
console.log(board[2][0]) // X 3rd row first element
// Common Pitfalls
// Avoid skipping indices
// Difference between length and highest index

// Practice Exercises
// 1. Create an array of five different fruits
// 2. Access the middle element of your array
// 3. Add a new fruit to the end of your array
// 4. Replace the first fruit with a different one
// 5. Create a 2D array representing a weekly schedule
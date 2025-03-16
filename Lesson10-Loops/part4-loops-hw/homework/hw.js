// Exercise 1: Sum of Array
// Calculate the sum of all numbers in an array using a for loop.
const numbers1 = [1, 2, 3, 4, 5];
let sum1 = 0;

// Your code here
for(const num of numbers1){
sum1 += num
}

console.log("Exercise 1 - Sum of array:", sum1);
// Expected output: Exercise 1 - Sum of array: 15


// Exercise 2: Find Maximum Value
// Find the maximum value in an array of numbers using a while loop.
const numbers2 = [3, 7, 2, 9, 1];
let max = numbers2[0];
let i = 1;

// Your code here
while(i <= numbers2.length){
    i++  
} 
max += i
console.log("Exercise 2 - Maximum value:", max);
// Expected output: Exercise 2 - Maximum value: 9


// Exercise 3: Count Occurrences
// Count how many times a specific element appears in an array using a for loop.
const numbers3 = [1, 2, 3, 2, 4, 2];
const elementToFind3 = 2;
let count3 = 0;

// Your code here
for(i = 0; i <= numbers3.length; i++){
  if(numbers3[i] == 2){
      count3++
  }
}

console.log("Exercise 3 - Count of", elementToFind3, ":", count3);
// Expected output: Exercise 3 - Count of 2 : 3


// Exercise 4: Reverse Array
// Reverse an array in-place (without creating a new array) using a for loop.
const numbers4 = [1, 2, 3, 4, 5];

// Your code here
for(i = 0; i < Math.floor(numbers4.length / 2); i++){
  // let temp = numbers4[i] // i would be 2 since math.floor rounds always round down: index of 2.5 -> 2 because it is less than 2
  // numbers4[i] would be in index of 2 so 3
  // temp should be starting at index of 0 and ending at index 1 (1-2)


  numbers4[i] = numbers4[numbers4.length - 1 - i] // ONLY USING THIS LINE MAKES THE CODE WORK
// this means that numbers[i] will mean that starting at index
// 0 it will be equal to numbers4.length - 1 (5) - i(0) 
// because it starts at zero so it starts at 5
// then it will move onto 5 - 1 since index is 1 and then increase by 1 by i++
// it means that numbers4.length-1 (5) subtracts the index of 
// the item it is on: index 0:"5 -0", 1:"5-1", 2:"5-2", and etc

  // numbers4[numbers4.length - 1 - i] = temp
} 
console.log("Exercise 4 - Reversed array:", numbers4);
// Expected output: Exercise 4 - Reversed array: [5, 4, 3, 2, 1]


// Exercise 5: Filter Even Numbers
// Create a new array containing only the even numbers from the original array using a for...of loop.
const numbers5 = [1, 2, 3, 4, 5, 6];
const evenNumbers = [];

// Your code here
for(const number of numbers5) {
  if(number % 2 === 0){
    evenNumbers.push(number) 
    // evenNumbers.push(number) will push the number variable
    // which is the value of the objects in the 
    // array that is %2 ===0 which means it pushes
    // the value when it is even
  }
}

console.log("Exercise 5 - Even numbers:", evenNumbers);
// Expected output: Exercise 5 - Even numbers: [2, 4, 6]


// Exercise 6: Double Array Values
// Create a new array where each value is doubled from the original array using a for loop.
const numbers6 = [1, 2, 3];
const doubledNumbers = [];

// Your code here
for(i = 0; i < numbers6.length; i++){
  numbers6[i] * 2 
  doubledNumbers.push(numbers6)
}

console.log("Exercise 6 - Doubled numbers:", doubledNumbers);
// Expected output: Exercise 6 - Doubled numbers: [2, 4, 6]


// Exercise 7: Find First Occurrence
// Find the index of the first occurrence of a specific element in an array using a for loop.
// If the element is not found, return -1.
const numbers7 = [10, 20, 30, 40, 50];
const elementToFind7 = 30;
let firstIndex = -1;

// Your code here

for(i = 0; i < numbers7.length; i++){
if(numbers7[i] === elementToFind7){ 
  firstIndex = [i]
} 
}


console.log("Exercise 7 - First index of", elementToFind7, ":", firstIndex);
// Expected output: Exercise 7 - First index of 30 : 2


// Exercise 8: Print Pattern
// Use nested for loops to print a simple pattern of asterisks.
console.log("Exercise 8 - Pattern:");
// Your code here
for(let row = 1; row <= 5; row++){ // starts at adding 1 row and end at 5 ; 5 times
 let rows = "";
  for(let column = 1; column <= row; column++){ // adds 1 "*" per row and increases amount by 1
    rows += "*"
  }
  console.log(rows)
}

// Expected output:
// *
// **
// ***
// ****
// *****


// Exercise 9: Calculate Average
// Calculate the average of all numbers in an array using a for...of loop.
const numbers9 = [10, 20, 30, 40, 50];
let sum9 = 0;
let average = 0;

// Your code here
for(number of numbers9){
  sum9 += number
}
average = sum9 / numbers9.length

console.log("Exercise 9 - Average:", average);
// Expected output: Exercise 9 - Average: 30


// Exercise 10: Sum Object Values
// Calculate the sum of all numeric values in an object using a for...in loop.
const obj10 = {a: 1, b: 2, c: 3};
let sum10 = 0;

// Your code here
for(letter in obj10){
  sum10 += obj10[letter]
}

console.log("Exercise 10 - Sum of object values:", sum10);
// Expected output: Exercise 10 - Sum of object values: 6


// Exercise 11: Count Properties
// Count the number of properties in an object using a for...in loop.
const person = {name: "John", age: 30, city: "New York"};
let propCount = 0;

// Your code here
  // for(i = 0; i < Object.entries(person).length; i++ ){
  //   propCount += i
  // }

for(const prop in person){
  propCount++  
}


console.log("Exercise 11 - Number of properties:", propCount);
// Expected output: Exercise 11 - Number of properties: 3


// Exercise 12: Object to Array
// Convert an object into an array of its values using a for...in loop.
const obj12 = {a: 1, b: 2, c: 3};
const values = [];

// Your code here
for(const obj in obj12){
  values.push(obj12[obj])
}
console.log("Exercise 12 - Object values as array:", values);
// Expected output: Exercise 12 - Object values as array: [1, 2, 3]


// Exercise 13: Find in Object
// Check if a specific value exists in any property of an object using a for...in loop.
const obj13 = {a: 1, b: 2, c: 3};
const valueToFind13 = 2;
let exists = false;

// Your code here
for(obj in obj13){
  if(obj13[obj] == valueToFind13){
    exists = true
  }
}

console.log("Exercise 13 - Value", valueToFind13, "exists:", exists);
// Expected output: Exercise 13 - Value 2 exists: true


// Exercise 14: Transform Array of Objects
// Take an array of objects and create a new array containing a specific property
// from each object using a for...of loop.
const users = [
  {id: 1, name: "John"}, 
  {id: 2, name: "Jane"}, 
  {id: 3, name: "Bob"}
];
const names = [];

// Your code here
for(const obj of users){
names.push(obj.name) // it pushes the values inside the name value from the obj
}

console.log("Exercise 14 - Names from objects:", names);
// Expected output: Exercise 14 - Names from objects: ["John", "Jane", "Bob"]


// Exercise 15: Count Frequency
// Count the frequency of each element in an array and create an object with the
// counts using a for...of loop.
const items = ["a", "b", "a", "c", "b", "a"];
const frequency = {};

// Your code here
for(const letter of items){
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}
console.log("Exercise 15 - Frequency count:", frequency);
// Expected output: Exercise 15 - Frequency count: {a: 3, b: 2, c: 1}
// js-loop-starter-code.js
// Displaying js-loop-solutions.js.
// JS LOOP REVIEW EXERCISES
// Emre Gemici
// •
// 1:46 PM
// 5 points
// Due Mar 16
// Create a "homework" folder under parts4-loops-practice. This assignment is designed to help you practice your loop skills, which is why I've included the solutions for reference. First, copy the starter code into the folder and try to solve it on your own. Afterward, review the solutions to check your work. If anything is unclear, use AI to help explain the code. You have time until Sunday night.

// js-loop-exercises.pdf
// PDF

// js-loop-starter-code.js
// Javascript

// js-loop-solutions.js
// Javascript
// Your work
// Assigned
// Private comments
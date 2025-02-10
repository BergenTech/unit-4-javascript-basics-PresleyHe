// Scores 
let scores = [72, 85, 93, 64, 88, 79, 91];

// 1. Finding index value of 1 (85)
console.log(scores.indexOf(85))

// TODO: 2. Check if score 100 exists in the array
// Expected Output: false
console.log(scores.includes(100))

// TODO: 3. Find the first score above 90
// Expected Output: 93

console.log(`Used ".find" which shows the item but ".findIndex" shows the value but the value above 90 is "${scores.find(scores => scores >= 93)}"`)

// TODO: 4. Find the index of the first score above 90
// Expected Output: 2
console.log(`It finds the value of the item above a 90 which is "${scores.findIndex(scores => scores > 90)}"`)

// TODO: 5. Add score 77 to the end of the array
// Expected Output: [72, 85, 93, 64, 88, 79, 91, 77]
let score77 = scores.push(77)
console.log(scores)

// TODO: 6. Add score 95 to the beginning of the array
// Expected Output: [95, 72, 85, 93, 64, 88, 79, 91, 77]
scores.unshift(95)
console.log(scores)
// TODO: 7. Remove and display the last score
// Expected Output: 77
console.log(scores.pop())
console.log(scores)
// TODO: 8. Remove and display the first score
// Expected Output: 95
console.log(scores.shift())
console.log(scores)

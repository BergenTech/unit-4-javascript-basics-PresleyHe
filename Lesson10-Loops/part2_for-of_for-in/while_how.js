// let i = 0

// while (i <= 10) {
// console.log(i);
// i++;
// }

// const colours = ["Red", "Blue", "Green", "Orange", "Purple"]

// let colour = 0 

// while (colour < colours.length) {
//     console.log(`${colours[colour]}`);
//     colour++;
// }

// let i = 0

// do {
//     console.log(` The number is ${i}`)
//     i++;
// } while (i <= 10)

// TASKS

// Use a while loop to write out the followoing sentence in the 
//console: "The speed of the car is xMPH" (where x is the 
// number of miles per hour) Start at 0 and go up all
//the way to 100 in increments of 10.

let speed = 0   

while (speed <= 100) {
    console.log(`The speed of the car is ${speed}MPH`);
    speed+= 10;
}


// 2. Create two variables a = 1, b = 10. Use the 
// right loop print out numbers 1-10, making sure to execute
// the code at least once before testing the condition.

let a = 1;
let b = 10;

do {
    console.log(a)
    a+=1;
} while (a <= b) 
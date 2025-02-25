let fullName = "John Doe";
let age = 17;
let gradeLevel = "10th grade";

console.log(`Hello, ${fullName}! Welcome to the ${gradeLevel}! report card system`);

let math = Math.floor(Math.random() * 51) +50;
let science = Math.floor(Math.random() * 51) +50;
let history = Math.floor(Math.random() * 51) +50;
let english = Math.floor(Math.random() * 51) +50;
let art = Math.floor(Math.random() * 51) +50;

console.log(`Grades: Math: ${math}, Science: ${science}, History: ${history}, English: ${english}, Art: ${art}`);

let average = (math + science + history + english + art) / 5;
console.log(`Average Grade: ${average.toFixed(2)}`);

let letterGrade;
if (average >= 90) {
  letterGrade = "A";
} else if (average >= 80) {
  letterGrade = "B";
} else if (average >= 70) {
  letterGrade = "C";
} else if (average >= 60) {
  letterGrade = "D";
} else {    
  letterGrade = "F";
}   
console.log(`Letter Grade: ${letterGrade}`);

let passed = average >= 65; 
if (passed) {
    console.log("Congratulations, you passed!");
}
else {
    console.log("Sorry, you failed.");
}

if (average >= 95) {
    console.log("You are on the honor roll!");
}

switch (letterGrade) {
    case "A":
        console.log("Great job!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("You can do better!");
        break;
    case "D":
        console.log("You need to study more!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log("Invalid grade!");
        break;
}
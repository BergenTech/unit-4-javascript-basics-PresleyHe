// VID 1
// function games() {
//     console.log("Sonic the Hedgehog");
//     console.log("Super Mario");
//     console.log("Donkey Kong");
// } 

// games();

// let greeting = "Hey there!"; // global variable

// function games() {
//     let title = "Zelda"  // local variable
//     console.log(title, greeting)
// } 



// games();
// console.log(greeting)

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(){ 
//     console.log("Sonic")
// })


// // tasks
// // 1. Create a function using a funtion called myName, infoke the function to log your name to the console.

// // 2. Invoke the function multiple times.

// function myName() {
//     console.log("my name")
// }

// myName();
// myName();
// myName();
// myName();
// myName();

//  VID 2
// let games = function() { // anonymous function
//     console.log("Sonic")
//     console.log("Mario")
//     console.log("Zelda")
// }

// games();

// let anotherWayToCall = games; 
// anotherWayToCall();
// myFunc();

// let myFunc = function() {
//     console.log("My function declaration")
// }
// //TASKS
// // 1. Create a function expression called colours that console logs teh colours: red, green, and blue.

// // 2. Reassign colours to myColours,


// let Colours = function() {
//     console.log("red");
//     console.log("green");
//     console.log("blue");
// }
// Colours();

// let myColours = Colours
// myColours();

// VID 3
// function favGame(game, weapon) {
//     console.log(`My favorite ${game}`);
// }
// favGame("Sonic 2");
// favGame("Skyrim");
// favGame("Fallout 3");

// function ninjaTurtle(name, weapon){
//     console.log(`${name} uses ${weapon}`)
// }
// ninjaTurtle("Donatello", "Bo Staff");


// let total = ""

// function add(num1, num2){
//     console.log(`${num1} + ${num2}`)
//     total += num1 + num2
//     console.log(total)
// }

// add(1,1);


// function add(num1, num2){
//     console.log(arguments[5])
// }

// add(1,1,2,3,4,5,6,6,7,7);

function favGame(game) {
if(game === undefined){
    console.log("Please provde your game!")
} else {
    console.log(`My favorite game is ${game}`)
}
}

favGame();
favGame("GAME"); 

// TASK

// 1.Create a function called favFood( and use "response" as a parameter, console log for the food)
// 2.Invoke the fnction with your fav food as the argument.
// 3. Update the function to add a default value of "empty", please add your fav food." Test out the default value.
// 4. FInally, update the function once more to display the message "PLease enter your favourite food!", if there is no response added.

// let favfood = function(response) {
//     if(response === undefined){
//         console.log("Please enter your favorite food!")
//     }else {
//         console.log(`Your favorite food is ${response}`)
//     }
// }
// favfood();
// favfood("pizza");

// // VID 4
// function test() {
//     return "hello"
//     return "Good bye"
// }
// console.log(test());

let login = function(password){
    if(password === "test123"){
        return "successfully logged in"
    }else{
        return "Password incorrect"
    }
}

let result = login("test123")

console.log(result)

// Task
// 1. Create a function called favNum and set it up with a parameter called num, use return to return whatever number is given as the argument, log this to the console with the message "my fav number is [num]" using template literals
// 2. What will the following code return?

// function password(a){
//     if(a.length > 8) {
//         return console.log(`You chose ${a}`) 
//     } else {
//         return console.log("Not enough info")
//     }
// }
//  password("PurpleRhino123")
//  password("Circle77")

function favNum(num){
    console.log(num)
}
favNum(2);

//2. "You chose "PurpleRhino123", "NOt enough Info"

// VID 5

// var age = 18
// var firstName = "John"

// console.log(`${firstName} is ${age} years old`)

// var game = "Sonic"
// var game = "Mario"

// console.log(game);

//TASK

//1. Create a variablet called currentYear and use the date function to get the current year, be sure to use the right tyep of variable. Log this to the console.
//2. Create another variable called username and assign this to "dreamer123", log this to console. Update the username to anything you like.

// var currentYear = new Date().getFullYear();

// var username = currentYear 
// console.log(currentYear);
// let username = "dreamer123"
// username = "Harry Potter"
// console.log(username)

// // VID 6
// let game ="Sonic" // Global variable
// console.log(game)

// function title() {
//     console.log(${game})
// }
// title();

// if(true) {
//     console.log(`${game}`)
// }

// function a() {
//     let game = "Sonic"; //local variable //functional scope
//     console.log(game)
// }
// a();

// if(true) {
//     let game = "Mario"
//     console.log(game)
// }

// function hello() {
//     var greeting = "hello"
// }

// console.log(greeting);

// if(true) {
//     let greeting = "hello"
// }
// console.log(greeting)

var x = 10
console.log(x)

if(true) {
    var x = 2
    console.log(x)
}
console.log(x)

//Task 

//1. Creat 3 variables in the global scope called firstName and age, and a function that logs them to the console in the following formate e. g. "John SMith is 25 years old"
var firstName = "John"
var lastName = "Smith"
var age = 25

console.log(`${firstName} ${lastName} is ${age} years old`)

//2. MOve the variables into thte local scope of the function and add another variable this time called country, add this to our statement "... and lives in England"
if (true) {
    firstName = "john"
    lastName = "Smith"
    age = 25
    var country = "England"
    console.log(`${firstName} ${lastName} is ${age} years old & lives in ${country}`)
}

//3. OUtside of the function change the firstName to "James", did you encounter a problem?
var firstName = "James"
console.log(firstName)
//4. What will the follwing code return?

// if(true) {
//     let game = "Mario"
//     console.log(game)
// }

// console.log(game)

//It will return undefined or error
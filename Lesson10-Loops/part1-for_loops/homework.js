// // let character = {
// //     name: "Sonic",
// //     color: "Blue",
// //     speed: 1000,
// // }
// // console.log(character);

// // for (let x in character) {
// //     console.log(`${x}`);
// // }

// // // const salaries = {
// // //     Peter: 24000,
// // //     James: 34000,
// // //     John:55000
// // // }

// // // for (let i in salaries) {
// // //     let salary = `$${salaries[i]}`;
// // //     console.log(`${i} salary is ${salary} per year`);
// // // }

// // character.name = "Knuckles";
// // delete character.speed;
// // character.alignment = "Good";

// // Object.defineProperty(character, "name", {
// //     value: "Tails", // what is the value of the property?
// //     enumerable: false, // will property show up in for in loop?
// //     configurable: false, // can property be deleted?
// //     writable: false, // can property be changed?
// // })
// // console.log(character);

// // for (x in character) {
// //     console.log(`${x}: ${character[x]}`);
// // }

// // Tasks

// // 1. Creat an object called house with the following properties:
// // type: "Detached"
// // build: "brick"
// // year: "2019"
// //Price: 250000
// // driveway: true

// //use the for... in loop to iterate over the properties and console log the property names along with their values.

// // let house = {
// //     type: "Detached",
// //     build: "brick",
// //     year: "2019",
// //     Price: 250000,
// //     driveway: true
// // }


// // for (let key in house) {
// //     console.log(`${key}: ${house[key]}`); 
// // }

// //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // 2nd video

// let characters = ["Sonic", "Tails", "Mario", "Luigi", "Link"];

// for (x of characters) {
//     console.log(x);
// }

// // let course = "JavaScript";

// // for (letter of course) {
// //     console.log(letter);
// //}

// for (x of characters) {
//    if (x === "Luigi") {
//      break;
// } else {
//     console.log(x);
// }
// }

// Tasks 
// Create a list of colours: "Red", "Orange", "Yellow", "Green", "Blue"
//and iterate over them by using the for... of loop. 
// Log the result to the console.
let colours = ["Red", "Orange", "Yellow", "Green", "Blue"]

for (rgb of colours) {
    console.log(`${rgb}`)
}


// 2. Use a break to only show Red, Orange, and Yellow
//So break out of the loop once we get to Green

for (rgb of colours) {
    if (rgb === "Green"){
        break;
    } else {
        console.log(rgb)
    }
}
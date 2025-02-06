// // let supers = ["Superman", "Batman", "Flash", "Aquaman"];

// // lengths
// console.log(supers.length)
// // shows the last item
// console.log(supers[supers.length-1]);

// // // setting the length
// // supers.length = 2;
// // console.log(supers)

// // //changing the length
// // supers.length = 3;
// // console.log(supers) // the 3rd item will be undefined
// // // because the last 2 items were erased because of 
// // the length being cut to 2


// // IndexOf 
// // checks the legitimacy of the value 
// // If it is true then it will display value
// // if not then value would be -1
// console.log(supers.indexOf("Flash"))

// console.log(supers.indexOf("flash"))

// // includes
// // also checks the legitimacy of the value
// // It registers it as a true or false
// // true
// console.log(supers.includes("Batman"))
// // false
// console.log(supers.includes("batman"))

// //Pop
// // Pop removes the last item of the Array
// // Will show the item that was removed
// // console.log(supers.pop())
// // // shows the list without the removed item
// // console.log(supers)

// // Shift
// // Shift removes the first item of the Array
// // Shows the item that was removed
// // console.log(supers.shift());
// // //shows the list without the removed item
// // console.log(supers);

// //Push
// // Push will add an new item to the end of the Array
// // Basically does the opposite of Pop
// // supers.push("Spider-Man")
// // console.log(supers)

// //Unshift
// //Adds a value at the BEGINNING OF THE ARRAY
// // supers.unshift("Thor");
// // console.log(supers)

// // Concat (MERGE)
// // Create a new Array
// let newSupers = supers.concat(["Wolverine", "Cyclops", "Professor X"])
// //original array
// console.log(supers)
// // New merged Array
// console.log(newSupers) 

// // Join 
// it takes that array and turns them into a string
// uses | to separate the items
// console.log(supers.join("|"))

// Split
//SPlit takes a string and turns it into an array
// let supers = "Superman, Batman, Flash, Aquaman, Thor, Spider-Man, Wolverine, Cyclops, Professor X"

// // separates items with , and a space
// let supersArray = supers.split(", ")
// console.log(supersArray)

// Slice
// Creates a subArray which cuts or slices out
// array from one position to another

// console.log(supers)

// let xmen = supers.slice(6, 9);
// // xmen is now an array which consists of Wolverine
// //Cyclops and Professor X (values 6 - 9)
// console.log(supers)


// splice
//  removes arrays and replace with new ones
//  let supers = ["Superman", "Batman", "Flash", "Aquaman"];

// supers.splice(5, 0, "Green Lantern");
// // it targets the 5 value and selects 0 items and adds in "Green Lantern"
// console.log(supers);

// reverse
//Reverses the order of the items inside the array
// supers.reverse();

// console.log(supers)

// // Sort 
// // Sorts out array alphabetically
// supers.sort()

// console.log(supers)

// TASK

//1. Create an array with the following fruits: apple, orange, banana. Use the Correct array method to add fruits cherry and pineapple to the beginning of the array. Then add the fruits plum and grapes to the end of the array, once again using the relevant array method.

//2. replace orange with lemon using the splice() method

//3. Sort the values alphabetically

let fruits = ["apple", "orange", "banana"]
console.log(fruits)
// adds cherry and pineapple to the beginning
fruits.unshift("cherry", "pineapple")
console.log(fruits)

console.log(fruits)
//Adds fruits and plums to the end of the array 
fruits.push("plums", "grapes")

console.log(fruits)
// replacing orange with lemon with splice()
fruits.splice(3,1,"lemon")
console.log(fruits)

//sorting alphabetically
fruits.sort()
console.log(fruits)
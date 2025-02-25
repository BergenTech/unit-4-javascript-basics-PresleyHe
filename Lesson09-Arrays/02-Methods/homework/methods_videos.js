// // // let supers = ["Superman", "Batman", "Flash", "Aquaman"];

// // // lengths
// // console.log(supers.length)
// // // shows the last item
// // console.log(supers[supers.length-1]);

// // // // setting the length
// // // supers.length = 2;
// // // console.log(supers)

// // // //changing the length
// // // supers.length = 3;
// // // console.log(supers) // the 3rd item will be undefined
// // // // because the last 2 items were erased because of 
// // // the length being cut to 2


// // // IndexOf 
// // // checks the legitimacy of the value 
// // // If it is true then it will display value
// // // if not then value would be -1
// // console.log(supers.indexOf("Flash"))

// // console.log(supers.indexOf("flash"))

// // // includes
// // // also checks the legitimacy of the value
// // // It registers it as a true or false
// // // true
// // console.log(supers.includes("Batman"))
// // // false
// // console.log(supers.includes("batman"))

// // //Pop
// // // Pop removes the last item of the Array
// // // Will show the item that was removed
// // // console.log(supers.pop())
// // // // shows the list without the removed item
// // // console.log(supers)

// // // Shift
// // // Shift removes the first item of the Array
// // // Shows the item that was removed
// // // console.log(supers.shift());
// // // //shows the list without the removed item
// // // console.log(supers);

// // //Push
// // // Push will add an new item to the end of the Array
// // // Basically does the opposite of Pop
// // // supers.push("Spider-Man")
// // // console.log(supers)

// // //Unshift
// // //Adds a value at the BEGINNING OF THE ARRAY
// // // supers.unshift("Thor");
// // // console.log(supers)

// // // Concat (MERGE)
// // // Create a new Array
// // let newSupers = supers.concat(["Wolverine", "Cyclops", "Professor X"])
// // //original array
// // console.log(supers)
// // // New merged Array
// // console.log(newSupers) 

// // // Join 
// // it takes that array and turns them into a string
// // uses | to separate the items
// // console.log(supers.join("|"))

// // Split
// //SPlit takes a string and turns it into an array
// // let supers = "Superman, Batman, Flash, Aquaman, Thor, Spider-Man, Wolverine, Cyclops, Professor X"

// // // separates items with , and a space
// // let supersArray = supers.split(", ")
// // console.log(supersArray)

// // Slice
// // Creates a subArray which cuts or slices out
// // array from one position to another

// // console.log(supers)

// // let xmen = supers.slice(6, 9);
// // // xmen is now an array which consists of Wolverine
// // //Cyclops and Professor X (values 6 - 9)
// // console.log(supers)


// // splice
// //  removes arrays and replace with new ones
// //  let supers = ["Superman", "Batman", "Flash", "Aquaman"];

// // supers.splice(5, 0, "Green Lantern");
// // // it targets the 5 value and selects 0 items and adds in "Green Lantern"
// // console.log(supers);

// // reverse
// //Reverses the order of the items inside the array
// // supers.reverse();

// // console.log(supers)

// // // Sort 
// // // Sorts out array alphabetically
// // supers.sort()

// // console.log(supers)

// // TASK

// //1. Create an array with the following fruits: apple, orange, banana. Use the Correct array method to add fruits cherry and pineapple to the beginning of the array. Then add the fruits plum and grapes to the end of the array, once again using the relevant array method.

// //2. replace orange with lemon using the splice() method

// //3. Sort the values alphabetically

// let fruits = ["apple", "orange", "banana"]
// console.log(fruits)
// // adds cherry and pineapple to the beginning
// fruits.unshift("cherry", "pineapple")
// console.log(fruits)

// console.log(fruits)
// //Adds fruits and plums to the end of the array 
// fruits.push("plums", "grapes")

// console.log(fruits)
// // replacing orange with lemon with splice()
// fruits.splice(3,1,"lemon")
// console.log(fruits)

// //sorting alphabetically
// fruits.sort()
// console.log(fruits)

// ------------------------------------------------

let cities = ['Paris', 'Tokyo', 'New York', 'London'];
console.log(cities)
// 1. SEARCH AND IDENTIFICATION METHODS
// 1.1 indexOf(): 
console.log(cities.indexOf("London"))
// - Searches for an element in the array
// - Returns the first index where the element is found
// - Returns -1 if the element is not in the array
console.log(cities.indexOf("NEW YORK"))

// 1.2 includes():
// - Checks if an array contains a specific element
// - Returns true if found, false otherwise - BOLEAN
// - Performs a strict equality check (===)
console.log(cities.includes("London"))
console.log(cities.includes("LONDON"))


// 1.3 find():
// - Returns the first element that satisfies a testing function
// - Returns undefined if no element passes the test
// - Useful for finding objects or complex matching conditions

// finds a item that is greater than 6 characters or letters
//which is "New York"
let longNameCity = cities.find(city => city.length > 6);
console.log(longNameCity)
console.log(cities)

// 1.4 findIndex():
// - Similar to find(), but returns the index instead of the element
// - Returns -1 if no element passes the test

let longNameIndex = cities.findIndex(elem => elem.length >= 5)

console.log(longNameIndex) // returns 0

// 2. MANIPULATION METHODS
// 2.1 push():
cities.push("Berlin")
console.log(cities)
let newLength = cities.push("Toronto")
console.log(newLength)
cities.push(["NJ", "NY"])
console.log(cities)
// - Adds one or more elements to the END of an array
// - Modifies the original array
// - Returns the new length of the array


// 2.2 unshift():
// - Adds one or more elements to the BEGINNING of an array
// - Shifts existing elements to higher indexes
// - Returns the new length of the array
let newStartLength = cities.unshift("Madrid")
console.log(cities);
console.log(newStartLength)


// 2.3 pop():
// - Removes the LAST element from an array
// - Reduces array length by 1
// - Returns the removed element
cities = ["Paris", "Tokyo", "New York", "London"]
let lastCity = cities.pop()
console.log(cities)
console.log(`The last item removed "${lastCity}"`)

// 2.4 shift():
// - Removes the FIRST element from an array
// - Shifts all other elements down
// - Returns the removed element
cities = ["Paris", "Tokyo", "New York", "London"]
let firstCity = cities.shift()
console.log(`The item removed at the beginning "${firstCity}"`)


// 3. TRANSFORMATION METHODS
// 3.1 concat():
// - Merges two or more arrays
// - Creates a NEW array without modifying existing arrays
// - Useful for combining arrays without mutation


// 3.2 slice():
// - Extracts a portion of an array
// - Returns a NEW array
// - Does not modify the original array
// - Takes start and end indexes (end index is exclusive)


// 3.3 splice():
// - Changes array contents by removing or replacing existing elements
// - Can add new elements
// - Modifies the original array
// - Parameters: (start index, delete count, items to add)


// 4. ITERATION METHODS
// 4.1 forEach():
// - Executes a provided function once for each array element
// - Does not return a new array
// - Cannot break out of the loop (use for...of or other methods for that)


// 5. SORTING METHODS
// 5.1 sort():
// - Sorts elements in-place
// - Default behavior is converting elements to strings and sorting alphabetically
// - Can use a compare function for custom sorting
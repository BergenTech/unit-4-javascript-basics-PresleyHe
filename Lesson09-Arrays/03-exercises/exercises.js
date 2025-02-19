// let cities = ["Paris", "Tokyo", "New York", "Lond// **********Exercise-1 ********************//
let cities = ['Paris', 'Tokyo', 'New York', 'London'];
// 1. Check if "Dubai" exists, if not, add it to the beginning
if (cities.includes("Dubai")) {
    console.log(cities)
} else cities.push("Dubai")
console.log(`cities added`)
console.log(cities)
// 2. Find the index of "Tokyo" and remove it
// cities.indexOf("Tokyo")
let tokyoIndex = cities.indexOf("Tokyo");
if (tokyoIndex !== -1) {
    cities.splice(tokyoIndex, 1);
}
console.log(cities)
    // console.log(cities.slice("Tokyo"))
    // console.log(cities.indexOf("Tokyo"))
// 3. Add "Berlin" and "Seoul" to the end of the array
cities.push("Berlin", "Seoul")
console.log(cities)

// **********Exercise-2 ********************//
let phrase = "learning JavaScript is a rewarding experience";
// 1. Convert string into an array of words
console.log(phrase.split(" "))
// 2. Remove the first word
let firstWord = phrase.split(" ")
firstWord.shift()
console.log(firstWord)
// 3. Convert the modified array back into a string with commas
console.log(firstWord.join(", "))
// **********Exercise-3 ********************//
let values = [10, 25, 37, 42, 55, 68, 71];
// 1. Create a new array where each number is multiplied by 3
let multiplied = values.map(values => values * 3)
console.log(multiplied)
// 2. Filter numbers greater than 100
let filtered = multiplied.filter(filtered => filtered > 100)
console.log(filtered)
// 3. Convert the filtered array into a string separated by hyphenson"]
console.log(filtered.join("-")) 

// separate practice study guide
console.log("-------------------------------------------------------------------------------------------")

 let supers = ["Superman", "Batman", "Flash", "Aquaman"];
console.log(supers)
// // // lengths
 console.log(supers.length)
// // // shows the last item
//  console.log(supers[supers.length-1]);



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

let NUMBER = supers.indexOf("GOO")
let ZERO = NUMBER + 1
console.log(ZERO)


// // // includes
// // // also checks the legitimacy of the value
// // // It registers it as a true or false
// // // true
// // console.log(supers.includes("Batman"))
// // // false
// // console.log(supers.includes("batman"))

console.log(supers.includes("GOO"))
console.log(supers.includes("Flash"))
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

let string = supers.join(" ")

console.log(string)

// // Split
// //SPlit takes a string and turns it into an array
// // let supers = "Superman, Batman, Flash, Aquaman, Thor, Spider-Man, Wolverine, Cyclops, Professor X"

let array = string.split(" ")
console.log(array)

// // // separates items with , and a space
// // let supersArray = supers.split(", ")
// // console.log(supersArray)

// // Slice
// // Creates a subArray which cuts or slices out
// // array from one position to another

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


// // // Sort 
// // // Sorts out array alphabetically
// // supers.sort()


// // console.log(supers)

// ==============================
// 1. map() Examples
// ==============================


// Example 1: Converting temperatures from Celsius to Fahrenheit
let celsiusTemps = [0, 20, 30, 40, 100];
// 1. Use the map() method to convert each temperature to Fahrenheit.
// 2. Log the result.
let fahrenheitTemps = celsiusTemps.map(celsiusTemps => (celsiusTemps*9/5)+32)
console.log(fahrenheitTemps)
// Example 2: Doubling the price of items in an array
let prices = [5, 10, 15, 20];
// 1. Use the map() method to double each price.
// 2. Log the result.

prices.map(prices => {if (prices % 2 === 0) { 
    console.group(`${prices} is even`)
}else {
    console.log(`${prices} is odd`)
}})


// ==============================
// 2. filter() Examples
// ==============================


// Example 1: Filtering out names shorter than 5 characters
let names = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
// 1. Use the filter() method to return only names that are 5 characters or longer.
// 2. Log the result.

filtered = names.filter(names => { if (names.length % 2 === 0) {
    console.log(`${names} is even length`)
}else {
    console.log(`${names} is odd length`)
}})

longNames = names.filter(names => names.length > 5)
console.log(longNames) 
// Example 2: Filtering even numbers from an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// 1. Use the filter() method to return only the even numbers.
// 2. Log the result.


// ==============================
// 3. split() Examples
// ==============================


// Example 1: Splitting a CSV string into an array of values
let csvString = "apple,banana,grape,orange";
// 1. Use the split() method to split the string into an array of values.
// 2. Log the result.

splitted = csvString.split(",")
console.log(splitted)

// Example 2: Splitting a sentence into words
let sentence = "JavaScript is fun and challenging";
// 1. Use the split() method to separate the sentence into an array of words.
// 2. Log the result.


// ==============================
// 4. join() Examples
// ==============================


// Example 1: Joining an array of words into a single sentence
let sentenceWords = ["The", "quick", "brown", "fox"];
// 1. Use the join() method to join the words into a single string with spaces.
// 2. Log the result.
let joined = sentenceWords.join(" ")
console.log(joined)
// Example 2: Joining an array with a custom separator
let hyphenatedWords = ["JavaScript", "is", "fun"];
// 1. Use the join() method to combine the array into a string with a custom separator (e.g., hyphen).
// 2. Log the result.


//join()




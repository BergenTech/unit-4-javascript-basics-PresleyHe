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
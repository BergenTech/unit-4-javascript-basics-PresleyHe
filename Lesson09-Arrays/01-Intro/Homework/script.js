// let supers = ["Superman", "Batman", "Flash", "Aquaman", 1, "hello", true, false, ["good", "evil", "neutral"]];


// console.log(supers[8][2])

// *** TASKS ***

// 1. Create an array of any three countries. Add an extra country in index number 3, console log the list.

// 2. Create a multi-dimensional array of colours, three colours in the top level of the array, and three colours in the second level. Access the last colour in the second level, and console log the results

let countries = ["United States", "Mexico", "China"];

console.log(countries)

// extra country

countries[2] = "India"

console.log(countries)

// colors

let colors = ['Blue', 'Pink', 'Red', ['Orange', 'Purple', 'Green']];

console.log(colors)
// Select "Green"

console.log(colors[3][2])
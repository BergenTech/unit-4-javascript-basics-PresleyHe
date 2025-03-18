// exercise 1:
// write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of hte two numbers is 100

let numbers = [20, 30, 50, 100]
let trueOrfalse = (a,b) => a === 100 || b === 100 || (a + b) === 100

console.log(trueOrfalse(100,0))
console.log(trueOrfalse(0,100))
console.log(trueOrfalse(0,10))
console.log(trueOrfalse(10,0))

// exercise 2: 
// Write a JavaScript program to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("script.js"));

// exercise 3:
// write a JavaScript program to replace every character in a given string with the character following it in alphabet order.


const order = (str) => 
    str
        .split("")
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join("");
console.log(order("abc"))  

// exercise 4:
// write a JavaScript program to get the current date. 
// Expected output: mm-dd-yyyy, mm-dd-yyyy, mm-dd-yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDay() +1 ;
    const months = date.getMonth()+ 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(formatDate())

//Exercis 5:
// Write a JavaScript program to create a new string adding "New!" in front of a given string if the given string begins with "New!" already then return the original string

const addNew = (str) => `New! ${str}`

console.log(addNew('New! Offers'));

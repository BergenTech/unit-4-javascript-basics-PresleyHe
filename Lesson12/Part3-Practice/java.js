// Reverse  

function reverse_a_number(n) {
    let reversed = "";
    let strNum = n.toString(); // Add parentheses to call the toString method
    for (let i = strNum.length - 1; i >= 0; i--) { // Add curly braces to the for loop
        reversed += strNum[i];
    }
    return Number(reversed); // Convert the reversed string back to a number
}

console.log(reverse_a_number(123)); // Expected output: 321
console.log(reverse_a_number(4567)); // Expected output: 7654


// function reverseNumber2(n){
//     return Number(n.toString().split("").reverse().join(""))
// }
// console.log(reverseNumber2(321))


const isPalindrome = (str) => {
    str = str.toLowerCase().trim(); // clean the str
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // Expected output: true 
console.log(isPalindrome("lol"));   // Expected output: true 
console.log(isPalindrome("hello")); // Expected output: false
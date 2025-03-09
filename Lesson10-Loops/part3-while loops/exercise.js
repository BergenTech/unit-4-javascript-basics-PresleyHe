// the sum of positive numbers
let sum = 0
while(true){
    let number = parseInt(prompt("Enter a positive number"))
    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a number.")
        continue
    }
    // If number is negative, quit the loop
    if(number < 0){
        console.log("Exiting the loop...")
        break
    }
    sum += number // sum = sum + number
}
console.log(`The sum is: ${sum}`)

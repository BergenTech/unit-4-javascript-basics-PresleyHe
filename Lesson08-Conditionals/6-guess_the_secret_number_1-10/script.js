// GENERATES RANDOM NUMBER
let secretNumber = Math.floor(Math.random()*10) +1;

// DETERMINES WHETHER IT IS EVEN OR ODD
let OddAndEven = (secretNumber % 2)

// CLARIFICATION OF NUMBER IF YOU ARE TESTING IT : DO NOT OPEN CONSOLE IF YOU ARE PLAYING
console.log(secretNumber)

let guess = prompt("Guess the secret number between 1 and 10:")


// CORRECT GUESS MESSAGE
if (parseInt(guess) === secretNumber) {
    alert("Congratulations! You've got it!");
} else if (parseInt(guess) > secretNumber) {
    // TOO HIGH GUESS MESSAGE
    alert("Sorry, the number is lower. Try again!");
} else {
    // TOO LOW GUESS MESSAGE
    alert("Sorry, the number is higher. Try again!");
    guess = prompt("Guess Again")
    
    
    //DETERMINES WHETHER EVEN OR ODD
    
    
    if (OddAndEven === 0) {
        alert("Hint the Number is Even")
    } 
    
        else if (parseInt(guess) === (secretNumber)) {
            alert("Congratulations! You've got it!")
        }

    else {
        alert("Hint the Number is Odd")
    }
    
    // LAST TRY MESSAGE
    guess = prompt("LAST TRY!")

        
        if (parseInt(guess) === secretNumber) {
            alert("Congradulations you finally got it!")
        } else {
            // LOSS MESSAGE
            alert(`YOU LOST! The number was ${secretNumber}`)
        }
}

// Define Secret word
// let secretWord = 'javascript'
let secretWord = prompt("Enter a word")

// prompt the user for a guess

let guess = prompt("Guess the secret word:")

// validate the guess

// check the guess - first attempt

if  (guess.toLowerCase().trim === secretWord.toLowerCase().trim){
    alert("You've got it! You got it first try!!!!!!!! ")
} else {
    // provide a hint: lentgh of the secret word
    let lenOfSecret = secretWord.length
    alert(`Sorry, you missed it! The secret word has ${lenOfSecret} letters.`)
    // prompt the user for a second guess
    guess = prompt("try Again:")
    if  (guess.toLowerCase() === secretWord.toLowerCase()){
        alert("You've got it! You got it at SECOND try!!!!!!!! ")
} else { 
    // provide a second hint: first and last letter of the secret word
    let firstChar = secretWord[0]
    let lastChar = secretWord[lenOfSecret - 1]
    alert(`Hint the Word starts with "${firstChar}" and ends with "${lastChar}."`)
    // prompt the user for a third guess and update the guess variable
    guess = prompt("Your Last TRY!!!")
    if (guess.toLowerCase() === secretWord.toLowerCase()){
        alert("You've got it! You got it at THIRD try!!!!!!!! ")
    }else {
        // reveal correct word
        alert(`Sorry, you did not guessed it. The correct word is "${secretWord}."`)
    }
} 
}
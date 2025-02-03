let secretNumber = Math.floor(Math.random() * 10) + 1;
let OddAndEven = (secretNumber % 2);
console.log(secretNumber);

let guess = prompt("Guess the secret number between 1 and 10:");

// First attempt
if (parseInt(guess) === secretNumber) {
    alert("Congratulations! You've got it!");
} else if (parseInt(guess) > secretNumber) {
    alert("Sorry, the number is lower. Try again!");
    guess = prompt("Guess again:");
    if (parseInt(guess) === secretNumber) {
        alert("Congratulations! You've got it!");
    } else {
        if (OddAndEven === 0) {
            alert("Hint: The number is even.");
        } else {
            alert("Hint: The number is odd.");
        }
        guess = prompt("LAST TRY!");
        if (parseInt(guess) === secretNumber) {
            alert("Congratulations! You've got it!");
        } else {
            alert(`YOU LOST! The number was ${secretNumber}`);
        }
    }
} else {
    alert("Sorry, the number is higher. Try again!");
    guess = prompt("Guess again:");
    if (parseInt(guess) === secretNumber) {
        alert("Congratulations! You've got it!");
    } else {
        if (OddAndEven === 0) {
            alert("Hint: The number is even.");
        } else {
            alert("Hint: The number is odd.");
        }
        guess = prompt("LAST TRY!");
        if (parseInt(guess) === secretNumber) {
            alert("Congratulations! You've got it!");
        } else {
            alert(`YOU LOST! The number was ${secretNumber}`);
        }
    }
}
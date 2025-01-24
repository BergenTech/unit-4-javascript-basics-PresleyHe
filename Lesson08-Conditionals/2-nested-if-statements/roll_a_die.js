let diceNumber = prompt("Enter a number between 1 and 6:") 


if (diceNumber < 1 || diceNumber > 6) {0
    alert(`${diceNumber}Please enter a number 1-6!`)
}


    else if (diceNumber % 2 === 0) {
        alert(`${diceNumber}: is an even number!`)
    }
    else {
        alert(`${diceNumber}: is an odd number!`)
    }
    

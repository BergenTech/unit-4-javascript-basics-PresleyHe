// VID 1

// repeats an actions a number of times

// for (let i = 0; i < 5; i++) {
//     console.log(`Hello World`, i);
// }

// for(let i = 5; i >= 1; i--) {
//     if (i % 2 !==0) console.log(i);
// }

// VID 2
// let username = ""

//while loop = repeat some code WHILE some condition is true 

// if(username = "" || username === null){
//     username = window.prompt("Please enter your name")
// } else {
//     console.log(`Hello ${username}`)
// }
// 
// 
// // let username

// // while(username = "" || username === null){
// //     username = window.prompt("Please enter your name")
// //  }
// //          console.log(`Hello ${username}`)

// let loggedIn = false
// let username;
// let password;

// // while(!loggedIn)
// do{
//     username = window.prompt("Enter your username")
//     password = window.prompt("Enter your password")
//     if(username === "myUsername" && passwprd === "myPassword") {
//         loggedIn = true
//         console.log("You are logged in!")
//     }else{
//         console.log("Incorrect username or password. Please try again")
//     }
// }

// VID 3
 
// for loop = repeat some code a limited amount of times

// for(let i = 100; i >= 0; i--){
//     console.log(i)
// }
// console.log(`Happy New Year!`)

for(let i = 1; i <= 20; i++){
    if(i == 13){
        // continue; ignores the 13 and continues the loop
        break; // terminates the loop
    } else{
        console.log(i)
    }
}
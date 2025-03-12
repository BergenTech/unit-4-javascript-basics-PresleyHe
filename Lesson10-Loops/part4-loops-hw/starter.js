// for loops
// counting up to 10
for(let i = 0; i<=10; i++){
    // break 
    if(i == 8){
        // console.log("Broken...")
        // break; // terminates the loop when it reaches 8
        
        //continue
        console.log("continue...")
        continue; // Continues the loop without 8
    }
    console.log(i)   
}

//while & Do While loops 

let up = 0
let down = 10
//While
while (up <= 10 && down <= 10) {
    console.log(`Increasing:${up}`)
    console.log(`Decreasing:${down}`)
    up++;
    down--
}
// Do While
// The do while loop executes the code block once before checking the condition.
// Then, it repeats the loop as long as the specified condition is true.
let count = 0;
do {
    console.log(`Count is: ${count}`);
    count++;
} while (count < 5);

// FizzBuzz Challenge
//for loop

for(let i = 1; i<= 100; i++){
    if(i % 15 ===0){
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }else if(i % 5 === 0){
    console.log("Buzz");
    } else {
        console.log(i)
    }
}

// while loop
let j = 1;
while(j <= 100){
    if(j % 15 ===0){
        console.log("FizzBuzz")
    }
    else if(j % 3 === 0){
        console.log("Fizz")
    }else if(j % 5 === 0){
    console.log("Buzz");
    } else {
        console.log(j)
    }
    j++
}

//For of 

const items = ["book","table","chair", "kite"]

for (const item of items) {
    console.log(item)
}

//for in
const colorObj = {
    color1: "red",
    color2: "blue",
    color3: "orange",
    color4: "green",
}

for (const key in colorObj) {
    console.log(key, colorObj[key])
}
// with array
const colorArr= ["red", "blue", "orange", "green"]

for (const color in colorArr) {
    console.log(colorArr[color]) // gives index number
}

//for each

const socials = ["Twitter", "LinkIn", "Facebok", "Instagram"]

console.log(socials.__proto__)

socials.forEach(function(item){
    console.log(item)
})

let tweitter = socials.forEach(item => {
    if(item[0] === "T"){ // Fix the condition here
        console.log(item)
    }
});
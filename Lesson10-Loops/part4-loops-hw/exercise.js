// calculate the average of numbers in an array
const numbers = [4, 2, 8, 9, 15, 18]
let total = 0
let count = 0
//conventional for loop
for(i=0; i < number.length; i++){
    total += numbers[i]
    count ++ // count +=1
}

// calculate the average of numbers in an array
 total = 0
 count = 0
 for(const num of numbers){
     total += num
     count++
 }
 console.log(`average: ${(total/count).toFixed(2)}`)

// while loop
total = 0
count = 0
index = 0
while(index < number.length){
    total += number[index]
    index++
}
console.log(`average: ${(total/count).toFixed(2)}`)

// #2 Find Duplicates

const numberArray = [3, 5, 7, 9, 5, 2, 6, 3, 1]
const counts = {}
const duplicates = []



for (const num of numberArray){
    //track counts of each number
    if(counts[num]){
        counts[num]++
        if(counts[num] === 2){
            duplicates.push(num)
        }
    }else {
        counts[num] = 1
    }
}
console.log(counts)
console.log(duplicates)
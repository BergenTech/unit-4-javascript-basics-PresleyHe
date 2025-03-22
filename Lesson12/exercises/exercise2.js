//exercise 1:

const makeNewString = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(makeNewString("abc"))
console.log(makeNewString("abcdef"))
console.log(makeNewString("abc123abc123"))

console.log(makeNewString("ab"))

// exercise 2:

const firstHalf = (str) => str.slice(0, str.length / 2)

console.log(firstHalf("temp"));
console.log(firstHalf("temple"));
console.log(firstHalf("temples"));

// exercise 3: 

const concatenate = (str1, str2) => 
    str1.slice(1) + str2.slice(1);

console.log("abc", "def")

// exercise 4:

 const nearest100 = (a,b) => (100 - a) > (100 - b) ? a : b

console.log(nearest100(20,50))
console.log(nearest100(98,99))
    
//exercise 5:



const countChars = (str, char) => 
    str.split("").filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4

console.log(contains2To4("oooh", 'o'))
console.log(contains2To4("ooh", 'o'))
console.log(contains2To4("ooooh", 'o'))
console.log(contains2To4("oh", 'o'))
console.log(contains2To4("oooooooh", 'o'))

//-----------------------------------------------


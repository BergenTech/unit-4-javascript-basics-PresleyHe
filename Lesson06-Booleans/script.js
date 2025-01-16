let isLightOn = true;
let isDoorClosed = false;

let dayTime = true;
let loggedIn = true;
let validForm = true;

console.log(isLightOn); // true
console.log(isDoorClosed); // false
console.log(dayTime); // true
console.log(loggedIn); // true
console.log(validForm); // true

// AND examples 
let hasLicense = true;
let isOver18 = true;
let canDrive = hasLicense && isOver18;
console.log(canDrive); // true
console.log(hasLicense && isOver18); // true

// OR examples
let hasPayPal = false;
let hasCreditCard = true;
let canPay = hasPayPal || hasCreditCard;
console.log(canPay); // true

// NOT examples
let isLoggedIn = true;
let isLoggedOut = !isLoggedIn;
console.log(isLoggedOut); // false

// Testing Falsy values
console.log("=== Falsy Values ===");

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Testing Truthy values
console.log("=== Truthy Values ===");
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(Boolean("0")); // true or false
// TRUE
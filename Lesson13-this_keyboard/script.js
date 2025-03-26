let person = {
    email : "a@bergen.org",
    last_name : "Smith",
    sayHello : function() {
        return `Hello, my emial is ${this.email}`
    }
}

// console.log(person.)
console.log(person.sayHello())

// let showThis = {
//     isThis: true,
//     me : `${this.isThis}`
// }

console.log(showThis.me)
console.log(this)

person = {
    email : "a@bergen.org",
    last_name : "Smith",
    greet : () => {
        console.log("Hello" + this.last_name)
    }
}

person.greet()
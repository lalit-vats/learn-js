// let score  = '22abc'
//if the value of a variable is null it will present (0)

let score  = null

// console.log(typeof score)

// console.log(typeof(score))

let valueinNumber = Number(score)
// console.log(valueinNumber)

let isLogedIn = 1
// let isLogrdOut = 0
let isLogrdOut = undefined

let booleanLogedin = Boolean(isLogedIn) 
let booleanLogedOut = Boolean(isLogrdOut)

// console.log(booleanLogedin)
// console.log(booleanLogedOut)

let someNumber = 50

let someNumToStr = String(someNumber)
// console.log(typeof someNumToStr);

let value = true
let booleanToStr = String(value)
// console.log(typeof value.toString());
// console.log(typeof booleanToStr);

// let bigNum = "6"

//when we use mathematics operators it will automatically convert string to number but if check the type of that it will show (NaN) 

let bigNum = "six"
let smNum = "2"
let totalSum = bigNum/smNum

// console.log(totalSum);

// if we check the value of 0 in string and convert to boolean it will give true

let checkvalofstrZero = "0"

let checkvalofstrOne = Boolean(checkvalofstrZero)

console.log(checkvalofstrOne);



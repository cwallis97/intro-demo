console.log("hello :)")

const firstName = "Chris"
let age = 26
let isCool = true 
let capstoneName = null // Null is intentionally absent of value 
let newTattoo = undefined// undefined is unitentionally absent of value
// two slashes is a comment 
// cmd + slash will also comment out the whole line as well
/* 
this is a multiline comment it will comment out multi lines of code.
*/

console.log(firstName)
console.log(`Hello ${firstName}, who has rotated around the sun ${age} times.`)
// when using backticks, you can use ${} to reference variables values, and they get placed into a string. 

//---------------------------------MATH------------------------------------------------------------
let x = 4
let y = 10
let z = 7 + 8 

let sum = x - (y * z)
console.log(sum)

//------------------conditional logic-----------------------

if (x > y) {
    // if code block ONLY runs if the conditional results in something true 
    console.log("x is greater than y!")
} else {
    // else code block only runs if conditional results are false
    console.log("Yeah thats wrong.")
}

if(isCool) {
    console.log("Im cool:)")
} else {
    console.log("git gud")
}

if(firstName==="Chris"){
    console.log("I'm the GOAT")
} else {
    console.log("You're just a pretender")
}
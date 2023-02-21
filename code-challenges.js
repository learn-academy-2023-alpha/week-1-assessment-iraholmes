// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: I will input the variable of the boilingpoint water into an if and else if statement to return the following statements depending on the water temperature.
// My Code #1 
const boilingPoint = (water) => {
    if (temp1 > 212) { return "is above boiling point"
   } 
     else if (temp1 < 212) {return `${temp1} is below boiling point`} 
     else if (temp1 == 212){return "is at boiling point"}
     else return "Check water again"
   }
   
   const temp1 = 42
   console.log(boilingPoint(temp1))

// Expected output: "42 is below boiling point"
// My Code #2
const boiling= (water) => {
    if (temp2 > 212){return `${temp2} is above boiling point`}
     else if  (temp2 < 212){return `${temp2} is below boiling point`} 
     else if (temp2 == 212){return `${temp2} is at boiling point`}
     else return "Check water again"
}
const temp2 = 350
console.log(boiling(temp2))
// Expected output: "350 is above boiling point"
// My Code #3
const boiled= (water) => {
    if (temp3 > 212){return `${temp3} is above boiling point`}
     else if  (temp3 < 212){return `${temp3} is below boiling point`} 
     else if (temp3 == 212){return `${temp3} is at boiling point`}
     else return "Check water again"
}
const temp3 = 212
console.log(boiled(temp3))
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Using the .concat function to bring the two arrays together then checking for it's length.


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
var padres = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(padres.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Using the split, reverse and join function to flip the string.


 const currentCohort = ("Alpha 2023") 
 console.log(currentCohort.split("").reverse().join(""))

// Expected output: "3202 ahplA"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: I will input a console.log within the parentheses I will input the variable "myNumbers" with the function lastIndexOf 42 in the parentheses.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(42))
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(10))

// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Function: place the array in a function using mutator .sort to arrage the numbers from largest to smallest.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
sanDiegoSummerTemperatures.sort((a, b) => b - a)
console.log(sanDiegoSummerTemperatures)
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoWinterTemperatures.sort((a, b) => b - a)
console.log(sanDiegoWinterTemperatures)
// Expected output: [68, 67, 66, 66, 62, 59, 59]
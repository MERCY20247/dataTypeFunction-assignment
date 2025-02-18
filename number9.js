// (2 Marks) Write a program that demonstrates the difference between null, undefined,
//  and an empty string.

// Declare variables with null, undefined, and an empty string
let nullValue = null;
let undefinedValue;
let emptyString = "";

// Output the values and their types
console.log("Value of nullValue:", nullValue, "Type:", typeof nullValue); 
console.log("Value of undefinedValue:", undefinedValue, "Type:", typeof undefinedValue); 
console.log("Value of emptyString:", emptyString, "Type:", typeof emptyString); 

// Comparison between the values
console.log("Is null == undefined?", nullValue == undefinedValue); 
console.log("Is null == emptyString?", nullValue == emptyString); 
console.log("Is undefined == emptyString?", undefinedValue == emptyString); 



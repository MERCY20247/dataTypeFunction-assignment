// Write a function that checks if a given variable is an object and not null.

function isObject(variable) {
   // Your code here
}

console.log(isObject({ name: "John" })); // Output: true
console.log(isObject(null)); // Output: false

// solution
function isObject(variable) {
    // Check if the variable is an object and not null
    return typeof variable === "object" && variable !== null;
}

console.log(isObject({ name: "John" })); 
console.log(isObject(null)); 
console.log(isObject([])); 
console.log(isObject(42)); 
console.log(isObject("Hello")); 


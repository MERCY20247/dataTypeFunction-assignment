// Write a JavaScript function that takes a parameter and returns its data type using the typeof operator.
// solution

function checkDataType(value) {
    return typeof value;
}

console.log(checkDataType(42)); 
console.log(checkDataType('Hello')); 
console.log(checkDataType(true)); 
console.log(checkDataType({})); 
console.log(checkDataType(undefined));
console.log(checkDataType(null));


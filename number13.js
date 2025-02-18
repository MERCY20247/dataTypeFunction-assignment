// . Write a JavaScript function that takes two different data types and
//  checks if they are strictly equal (===). If they are not, explain why in a return message.
function strictEqualityCheck(a, b) {
    // Your code here
}

console.log(strictEqualityCheck(5, "5")); // Output: "5 and '5' are not strictly equal because one is a number and the other is a string."

// solution
function strictEqualityCheck(a, b) {
    // Check if a and b are strictly equal
    if (a === b) {
        return "The values are strictly equal.";
    } else {
        // If they are not strictly equal, check the types and explain
        const typeA = typeof a;
        const typeB = typeof b;
        
        return `${a} and ${b} are not strictly equal because one is a ${typeA} and the other is a ${typeB}.`;
    }
}

console.log(strictEqualityCheck(5, "5")); 


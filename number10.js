// Declare a variable using const and try to reassign it.
//  What happens? Explain your answer in a comment.

// Declare a variable using const
const myConstant = 42;

// Try to reassign the value
myConstant = 100; 

console.log(myConstant);

// const is used to declare a variable that is immutable (cannot be reassigned after it is initialized). If you try to reassign a variable declared with const,
//  JavaScript will throw a TypeError.

// So, when you use const, the value of the variable cannot be changed, but it doesn't necessarily
//  mean that the contents of the value can't be modified if the value is an object or array. 
// For example:

const myArray = [1, 2, 3];
myArray.push(4); 

console.log(myArray);




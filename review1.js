// 1. Make a variable and assign an even number to that variable. Make sure that variable cannot be changed.

const evenNum = 42;

// 2. Make a variable and assign a negative odd number to that variable. Make sure that variable cannot be changed.

const oddNum = 57; 

// 3. Make a variable and assign a string to that variable using double quotes. Make sure that variable cannot be changed.

const myString = "Hello, from the other side..!";

// 4. Make a variable and assign a string to that variable using single quotes. Make sure that variable cannot be changed.

const singleQuoteString = 'I must\'ve\ called a thousand times';

// 5. Make a variable and assign a string to that variable using a template literal. Make sure that variable cannot be changed.

const tempLiteralString = `${myString}. I'm in California dreaming about who we used to be`;
console.log(tempLiteralString);
// example for fun:  Hello, from the other side..!. I'm in California dreaming about who we used to be

// 6. Make a variable and assign an empty string to that variable using a template literal. Make sure that variable *can* be changed.

let emptyString = "";
let tempLiteral2 = ` ${emptyString}`;
let tempLIteral1 = ``;
console.log(emptyString); // empty string
console.log(tempLIteral1); // empty string
console.log(tempLiteral2); // empty string

// 7. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable *can* be changed.

let awesomeBoolean = true; 


// 8. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable can not be changed.

const awesomeBoolean2 = true; 

// 9. Print the `type` of a variable that has a number value.

console.log(typeof evenNum); //number
console.log(typeof oddNum); //number

// 10. Print the `type` of a variable that has a string value.

console.log(typeof myString); //string
console.log(typeof singleQuoteString); //string
console.log(typeof tempLiteralString); //string
console.log(typeof emptyString); // string
console.log(typeof tempLiteral2); //string


// 11. Print the `type` of a variable that has a boolean value.

console.log(typeof awesomeBoolean); //it prints: boolean
console.log(typeof awesomeBoolean2); //it prints: boolean



/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log(`Hello There, ${name}!`);
}

greet("Noela");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
/* The difference between the two is hoisting.
Function declarations are hoisted, 
meaning they can be accessed before their actual declaration in the code.
On the other hand, function expressions do not share the same hoisting behavior.*/

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
    return length * width;
};
  
const area = calculateArea(14, 7);
console.log("Area:", area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
/* A callback function is a function passed as an argument to another function 
and is executed after the completion of the parent function. 
Example code:

function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log("Task done!");
    callback();
  }, 1000);
}

doSomethingAsync(function() {
  console.log("Callback executed!");
});*/

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(array, modifierFunction) 
{
    return array.map(modifierFunction);
}
    
const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = modifyArray(numbers, num => num + 1);
console.log("Incremented Numbers:", incrementedNumbers);


// Todo 4.4: See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import { add, PI } from './mathUtils.mjs';
const sum = add(3, 7);
console.log("Sum:", sum);
console.log("PI Constant:", mathUtils.PI);

// Todo 4.5: See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.mjs';
const result = isPalindrome("level");
console.log("Is Palindrome:", result);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
/* 
'require' is used in CommonJS (Node.js) to import external modules, 
while 'module.exports' defines a module's exports. In modern JavaScript (ES6+), 
import and export provide a standardized and preferred alternative 
for achieving the same functionality, offering clarity and compatibility across various environments. */

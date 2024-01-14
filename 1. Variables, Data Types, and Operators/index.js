/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(a);
var a = 100;

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let a = 50;

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const a = 70;

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
/*The difference between the three are:
'var' is available throughout the function when they are declared.
'let' is used when we want block-scoped variables to be reassigned and this is commonly used compared to 'var'.
'const' is used when we want block-scoped to be constant and cannot be reassigned.*/

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
5 + 10;
20 - 2;
4 * 6;
1 / 2;

// Checkpoint 1.2 What operators did you use?
// Answer: The arithmetic operators available and I used in JavaScript were: Addition(+), Subtraction(-), Multiplication(*), Division(/).
// Your code here
5 + 10;
20 - 2;
4 * 6;
1 / 2;

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("my" + "string");
let mystring = "alpha";
mystring += "bet";

// Checkpoint 1.3 What operators did you use?
// Answer: The operator that I used were '+='.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a1 = true && true;
const o1 = true || true;
const n1 = !true;

// Checkpoint 1.4 What operators did you use?
// Answer: The logical operators that I used were '&&', '||', and '!';


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
/*The expression '[] == false' evaluates to true because of type coercion.
In JavaScript, when using the '==' operator and if the operancs are of different types,
JavaScript will convert one or both to a common type before making the comparison.
 In the given expression, both '[]' and 'false' were converted to numbers thus becoming '0 == 0' which evaluates as true.*/
// Your code here
console.log([] == false);
    /*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if(randomNumber>50){
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if(randomNumber % 2 == 0){
    console.log("even number");
} else {
    console.log("odd number");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if(randomNumber % 3 == 0 && randomNumber % 5 == 0){
    console.log("fizzbuzz");
} else if (randomNumber % 3 == 0) {
    console.log("fizz");
} else if (randomNumber % 5 == 0 ) {
    console.log("buzz");
}

// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
let toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: 
/*A switch statement enhances code readability when comparing a variable against specific constant values.
However, for more complex conditions or ranges, other control flow structures like if-else statements are more used.*/


// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10;
// Your code here
for (let i = 1; i <= n; i++){
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let element = 0;
while (element < list.length) {
    console.log(list[element]);
    element++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: 
/*In a while loop, the condition is checked before the code block runs, potentially skipping the loop entirely if initially false. In contrast, a do-while loop guarantees the code block runs at least once by assessing the condition after the initial execution.*/ 

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for(const value of list){
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for(const index in list){
    console.log(list[index]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function(value){
    console.log(value);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
/* 'for of' is used when you want to iterate over the values of an iterable.
'for in' is used when you want to iterate over the keys or indices of an object.
'forEach' is used when working with arrays to execute a function for each element. */

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleaning up resources");
}



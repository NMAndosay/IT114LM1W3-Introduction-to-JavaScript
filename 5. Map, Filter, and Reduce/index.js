/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(num => num ** 2);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(num => num % 2 === 0);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((acc, word) => acc + word, '');

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
/*
'map' transforms every element in an array by applying a specified function, resulting in a new array.
'filter' constructs a new array comprising elements that satisfy specific conditions defined by a provided function.
'reduce' consolidates an array into a single value through the application of a function to each element, progressively accumulating the results.
*/
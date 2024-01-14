/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code 
const minNumber = Math.min(numbers);
const maxNumber = Math.max(numbers);
const averageNumber = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 
/*In Python, a list is an inherent data structure capable of containing elements of various types. 
In JavaScript, an array serves a similar purpose as a data structure, 
yet it has the ability to dynamically resize, and its elements can encompass diverse types. 
Both are employed for storing organized collections.*/


// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const it114lCourseObj = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies",
    units: 1,
    numberOfStudents: 40
  };

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
it114lCourseObj.professorName = "Sir Job Lipat";
console.log(it114lCourseObj.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const coursesArray = [
    { courseCode: "IT114L", units: 1 },
    { courseCode: "CS107", units: 2 },
    { courseCode: "CS107L", units: 1 },
    { courseCode: "CS120", units: 3 },
    { courseCode: "HUM039", units: 3 },
    { courseCode: "IT114", units: 2 },
    { courseCode: "IT133", units: 3 },
    { courseCode: "SS036", units: 3 },
  ];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
const totalUnits = coursesArray.reduce((sum, course) => sum + course.units, 0);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 
/*In Python, dictionaries serve as the counterpart to JavaScript objects. 
They are utilized for storing key-value pairs and can be modified, 
similar to the functionality of JavaScript objects.*/


// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
const newArray = [...numbers, 11];

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
const { courseCode: extractedCourseCode, units: extractedUnits } = it114lCourseObj;
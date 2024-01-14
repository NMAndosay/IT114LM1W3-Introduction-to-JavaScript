// Todo 4.6a Create a function called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation
function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
}

// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
export default isPalindrome;
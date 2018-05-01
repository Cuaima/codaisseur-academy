//ASSIGNMENT:
//In the first assignment we wrote a palindrome function. 
//If you used the hint, the easy way was to use String.slice(1, -1) 
//to pass along a smaller word.

//But that creates a new string in memory with every step. 
//Computers are fast, but that is not for free. 
//How can you rewrite the function so it does not create smaller strings in every step?

//Hint: pass along an extra number to indicate the letter position to check.

function palindrome(word, at) {
  // ...
}

// test
console.log('test palindrome 1:', palindrome('noon', 0))
console.log('test palindrome 2:', palindrome('civic', 0))
console.log('test palindrome 3:', !palindrome('test', 0))

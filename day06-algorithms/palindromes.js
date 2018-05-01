//ASSIGNMENT:
//Write a function to check if a word can be read forwards and backwards 
//as the same word, using recursion. These are called palindromes. 
//A long palindrome is: reviver.


function palindrome(word) {
    // if word.length < 1 : that means we were able to slice 
    // away all available characters so word.length is 0
    // let's return this in a way that it's truthy, so negate it
    if (word.length < 1) return !word.length

    // if the word's first and last characters are the same, 
    // slice 'em off and test again
    if (word[0] == word[word.length-1]) {
        return palindrome(word.slice(1,-1))
    } else {
        // if first and last chars are not the same, return false
        return false
    }
}
// test
console.log(`test palindrome 1  - noon       : -> ${palindrome('noon')}`)
console.log(`test palindrome 2  - civic      : -> ${palindrome('civic')}`)
console.log(`test palindrome 3  - test       : -> ${palindrome('test')}`)
console.log(`test palindrome 4  - reviver    : -> ${palindrome('reviver')}`)
console.log(`test palindrome 5  - abcdedcba  : -> ${palindrome('abcdedcba')}`)
console.log(`test palindrome 6  - xxxfxxx    : -> ${palindrome('1234321')}`)
console.log(`test palindrome 7  - aabaa      : -> ${palindrome('aabaa')}`)
console.log(`test palindrome 8  - aabba      : -> ${palindrome('aabba')}`)
console.log(`test palindrome 9  - abcdef     : -> ${palindrome('abcdef')}`)
console.log(`test palindrome 10 - xfxfxf     : -> ${palindrome('xfxfxf')}`)



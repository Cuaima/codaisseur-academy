//Step One
//Write a function that takes a word, and an array of guessed letters, 
//and returns count of failed guesses.

function wrongGuessCount(word, guesses) {
    // return new array w/ indexof, 
    // then return new ar from this where -1, 
    // then return length of this
    return guesses.map(guess => word.indexOf(guess)).filter(i => i==-1).length
}

console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)



//Step Two
//Write a function that takes a word, and a array of guesses, 
//and returns a string with dashes or letters with spaces in between.


function showGuess(word, guesses) {
    return word.split('').map(letter => {
        if (guesses.indexOf(letter) < 0) {
            return '_'
        } else {
            return letter
        }
    }).join(' ')
}

console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')

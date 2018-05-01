//Hangman

//We are going write a game of hangman using our new found techniques.

//The game goes as follows. The computer selects a random word. 
//The player guesses letters. Guess correct, and more of the word is shown. 
//Guess incorrectly six times, and the player loses.

//Bonus points if the game draws a hanging man: head, body, arm, arm, leg, leg, in ascii art.




//Step One
//Write a function that takes a word, and an array of guessed letters, 
//and returns count of failed guesses.

function wrongGuessCount(word, guesses) {
    // return new array w/ indexof, 
    // then return new ar from this where -1, 
    // then return length of this
    return guesses.map(guess => word.indexOf(guess)).filter(i => i==-1).length
}

//console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)



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

//console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
//console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')


//Step Three
//Write a function that takes a word, and an array of guesses, 
//and returns if the player has won or not.

function isWinner(word, guesses) {
   return ( showGuess(word, guesses).split(' ').indexOf('_') == -1 )
}


//console.log('test winner 1:', isWinner('hello', ['e', 'x']))
//console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))


//Step Four
//Write a function that takes a word and an array of guesses, 
//and checks if the player lost, won, or asks for the next letter.

// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function next(word, guesses) {
    // check if lost
    if (6 <= wrongGuessCount(word, guesses) ) {
        console.log('you lost!')
        process.exit()
    } 
    // check if won
    if (isWinner(word, guesses)) {
        console.log('yay! you won!')
        process.exit()
    }
    // ask for the next letter
    rl.question('\nnext letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
        guesses.push(answer)
        console.log( showGuess(word, guesses) )
        console.log(`Number of wrong guesses so far: ${wrongGuessCount(word, guesses)}`)
        next(word, guesses)
    })
}


//Step Five
//Start the game and play!

next('hello', [])

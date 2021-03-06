//ASSIGNMENT:
//Write a function that creates a "fractal ruler".

//ruler(1) should output -.
//The ruler(n) uses n dashes, and glues a smaller ruler to the left and to the right of itself using newlines ('\n').

//ruler(2) should output '-\n--\n-'
//ruler(3) should output '-\n--\n-\n---\n-\n--\n-'

function ruler(n) {
    if (n<=1) return '-'
    // I drew a diagram to a paper to understand what I'm doing, 
    // I can't clearly explain this in words :]
    return `${ruler(n-1)}\n${'-'.repeat(n)}\n${ruler(n-1)}`
}


 //test
console.log(`test 1: -> ${ruler(1) === '-'}`)
console.log(`test 2: -> ${ruler(2) === '-\n--\n-'}`)
console.log(`test 3: -> ${ruler(3) === '-\n--\n-\n---\n-\n--\n-'}`)
console.log(ruler(5))

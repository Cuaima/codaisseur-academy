//ASSIGNMENT: 
//Write a function that returns the average grade, in american grades.


function getAmericanGrade(grade) {
    console.log('Average american grade: ', grade)
    if (1<=grade && grade<=5.99) return "F"
    if (6<=grade && grade<=6.99) return "D"
    if (7<=grade && grade<=7.99) return "C"
    if (8<=grade && grade<=8.99) return "B"
    if (9<=grade && grade<=10) return "A"
}

function averageAmericanGrade(grades) {
    return getAmericanGrade( ( grades.reduce((a,b)=>a+b) / grades.length  ) )
}

// test
// This array was already declared in the previous section. 
// You might get an error if you run it again.
const grades1 = [9, 5.5, 6, 7.3]
console.log(`average: D-> ${'D' == averageAmericanGrade(grades1)}`)


// ASSIGNMENT:
//Using the function you wrote for the previous assignment, 
//write a function that takes an array of Dutch grades, 
//and returns an array of American grades.

function getAmericanGrade(grade) {
    if (1<=grade && grade<=5.9) return "F"
    if (6<=grade && grade<=6.9) return "D"
    if (7<=grade && grade<=7.9) return "C"
    if (8<=grade && grade<=8.9) return "B"
    if (9<=grade && grade<=10) return "A"
}

function toAmericanGrades(grades) {
    return grades.map(grade => getAmericanGrade(grade))
}


// test
const grades1 = [9, 5.5, 6, 7.3]
console.log(`first is A -> ${'A' == toAmericanGrades(grades1)[0]}`)
console.log(`second is F -> ${'F' == toAmericanGrades(grades1)[1]}`)
console.log(`third is D -> ${'D' == toAmericanGrades(grades1)[2]}`)
console.log(`last is C -> ${'C' == toAmericanGrades(grades1)[3]}`)

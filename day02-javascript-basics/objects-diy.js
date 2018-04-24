var student = {
    firstName: 'Zoltan', 
    lastName: 'Fejes', 
    age: 30,
    printAgeInMonths() {
        return ageInMonths(this.age);
    },
    printAgeInDays() {
        return ageInDays(this.age);
    }
}

function ageInMonths(years) {
    return (years * 12);
}

function ageInDays(years) {
    return ageInMonths(years) * 30;
}

console.log(`I am ${student.firstName} and I am ${student.age} years old.`);
console.log(`That is ${student.printAgeInMonths()} months, or ${student.printAgeInDays()} days.`);

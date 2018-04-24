// hardcoded data
//var age = 43,
    //gender = "m",
    //height = 180, 
    //weight = 78, 
    //exerciseLevel = 3;

// interactive console using readline-sync

var rl = require('readline-sync');

console.log(`==================================
Please enter your details!`);

var age = rl.question('Age: ');

var gender = rl.question('Gender (f/m): ');

var height = rl.question('Height (cm): ');

var weight = rl.question('Weight (kg): ');


var exerciseLevel = rl.question('Exercise level (1 - 5): ');

//calculate Body Mass Index
var bmi = weight / Math.pow(height / 100, 2);

//calculate ideal weight
var idealWeight = (bmi * 0.5 + 11.5) * Math.pow(height / 100, 2);

// calculate Basal Metabolic Rate
var bmr = 10 * weight + 6.25 * height - 5 * age;
// and ideal BMR
var iBmr = 10 * idealWeight + 6.25 * height - 5 * age;

// adjust BMR / ideal BMR based on gender
switch (gender) {
    case "f":
        bmr -= 161;
        iBmr -= 161;
        break;
    case "m": 
        bmr += 5;
        iBmr += 5;
        break;
}


// calculate calories per day using BMR / ideal BMR and activity level

let caloriesPerDay;
let iCaloriesPerDay;

switch (exerciseLevel) {
    case "1":
        caloriesPerDay = bmr * 1.2;
        iCaloriesPerDay = iBmr * 1.2;
        break;
    case "2":
        caloriesPerDay = bmr * 1.375;
        iCaloriesPerDay = iBmr * 1.375;
        break;
    case "3":
        caloriesPerDay = bmr * 1.55;
        iCaloriesPerDay = iBmr * 1.55;
        break;
    case "4":
        caloriesPerDay = bmr * 1.725;
        iCaloriesPerDay = iBmr * 1.725;
        break;
    case "5":
        caloriesPerDay = bmr * 1.9;
        iCaloriesPerDay = iBmr * 1.9;
        break;
}

// calculate target diet calories per day to reach ideal weight
// and number of weeks of diet to reach that
if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else if ( weight < idealWeight ) {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
} 



console.log(`===============================================
Your BMI is ${bmi.toFixed(2)}`);
console.log(`Ideal wight: ${idealWeight}`);
console.log(`Calories to maintain current weight: ${caloriesPerDay}`);
console.log(`Calories to lose weight: ${dietCaloriesPerDay} for ${dietWeeks.toFixed(2)} weeks`);
console.log(`Calories to maintain ideal weight: ${Math.floor(iCaloriesPerDay)}
===============================================`);


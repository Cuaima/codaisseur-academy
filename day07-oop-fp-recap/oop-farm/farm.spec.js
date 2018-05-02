// ASSIGNMENT
// Add a test (to farm.spec.js) that 
// adds wheat, sugarcane, some cows, some horses and a pig to the farm 
// and calculates it's total value. 
// Make sure the test passes and make sure the calculations are correct.

const { Wheat, Sugarcane } = require('./crops')
const { Cow, Horse, Pig } = require('./animals')
const { Farm } = require('./index')

test('add crops and animals - total value should be', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(1500))
    farm.addCrop(new Sugarcane(500))
    farm.addAnimal(new Cow(30))
    farm.addAnimal(new Pig(30))
    farm.addAnimal(new Horse(60))

    expect(farm.calculateIncome()).toBeCloseTo(41038.90655361731, 2)
console.log(`
Farm: ${farm.name}
No. of crops: ${farm.crops.length}
No. of animals: ${farm.animals.length}
Total income: ${farm.calculateIncome().toFixed(2)}€
Income from crops: ${farm.crops.map(crop => crop.getYieldInEuros()).reduce((a,b) => a+b, 0).toFixed(2)}€
Income from animals: ${farm.animals.map(animal => animal.getValueInEuros()).reduce((a,b) => a+b, 0).toFixed(2)}€
Crops on the farm: ${farm.crops.map(crop => '\n\t' + crop.constructor.name + ' ' + JSON.stringify(crop))}
Vegan farm: ${farm.animals.length==0 ? 'yes!' : 'nope '}
Crop that generates the most income: ${ 
    farm.crops.map(crop => crop.constructor.name + ' ' + crop.getYieldInEuros().toFixed(2))
        .reduce((prev, current) => (prev > current) ? prev : current)}
`)

})

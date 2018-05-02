class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }

    calculateIncome() {
        return this.crops
            .map(crop => crop.getYieldInEuros())        
            .reduce((a,b) => a+b, 0) 
            + this.animals
            .map(animal => animal.getValueInEuros())
            .reduce((a,b) => a+b, 0)
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }
}

module.exports.Farm = Farm;

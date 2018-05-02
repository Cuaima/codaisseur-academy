class Animal {
    constructor(age) {
        this.age = age
    }

    getValueInEuros() {
        return this.price * this.getWeightInKg() 
    }

}

class Pig extends Animal {
    constructor(...args) {
        super(...args)
        this.price = 4        
    }
    getWeightInKg() {
        return this.age * 2.3
    }
}

class Cow extends Animal {

    constructor(...args) {
        super(...args)
        this.price = 5 
    }
    getWeightInKg() {
        return this.age * 1.5 
    }
}

class Horse extends Animal {

    constructor(...args) {
        super(...args)
        this.price = 10
    }
    getWeightInKg() {
        return this.age * 1.7
    }
}

module.exports = {Animal, Pig, Cow, Horse}

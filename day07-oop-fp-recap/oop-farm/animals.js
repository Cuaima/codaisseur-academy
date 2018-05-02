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
        return Math.min(this.age * 2.3, 700)
    }
}

class Cow extends Animal {

    constructor(...args) {
        super(...args)
        this.price = 5 
    }
    getWeightInKg() {
        return Math.min(this.age * 1.5, 1200)
    }
}

class Horse extends Animal {

    constructor(...args) {
        super(...args)
        this.price = 10
    }
    getWeightInKg() {
        return Math.min(this.age * 1.7, 1000)
    }
}

module.exports = {Animal, Pig, Cow, Horse}

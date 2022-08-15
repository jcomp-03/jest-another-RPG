class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        // assign name property the value of the parameter name
        // or a random value from array types above
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    
        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 50);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Potion;
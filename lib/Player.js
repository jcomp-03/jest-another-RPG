const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        
        this.inventory = [new Potion('health'), new Potion()];
    }

    // Returns the player's stats, i.e. potion inventory, health, strength, and agility
    getStats() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
    }

    // Returns the player's potion inventory
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    // Adds a potion to the player's inventory
    addPotion(potion) {
    this.inventory.push(potion);
    }

    // Uses a potion from the player's inventory and stores
    // the potion in variable called 'potion'
    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;
const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
}

// Returns the player's stats, i.e. potion inventory, health, strength, and agility
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// Returns the player's potion inventory
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

// Returns the player's health
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

// Returns Boolean of whether the player is alive or not
Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    return true;
};

// Reduces the player's health
Player.prototype.reduceHealth = function(health) {
    this.health -= health;
    if (this.health < 0) {
        this.health = 0;
    }
};

// Returns the player's attack value
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
}

// Adds a potion to the player's inventory
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

// Uses a potion from the player's inventory and stores
// the potion in variable called 'potion'
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index,1);
    switch(potion.name) {
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
};



module.exports = Player;
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



module.exports = Player;
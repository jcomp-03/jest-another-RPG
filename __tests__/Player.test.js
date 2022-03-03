const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

test('creates a player object', () => {
    // you'll notice in each test a new instance of Player object
    // is created. This is to test the properties and methods in isolation
    // otherwise using the same Player instance might have unforeseen consequences
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));

});

test('getStats gets player\'s stats as an object', () => {
    // creating new Player object
    const player = new Player;

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('getInventory gets inventory from player or returns false', () => {
    const player = new Player('Dave');
    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
})

test('getHealth gets player\'s health value', () => {
    const player = new Player('Dave');
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
})

test('checks if player is alive or not', () => {
    const player = new Player('Dave');
    // two expects statements
    expect(player.isAlive()).toBeTruthy();
    player.health = 0;
    expect(player.isAlive()).toBeFalsy();
});

test('reduceHealth subtracts from player\'s health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth - 5);
    player.reduceHealth(99999);
    expect(player.health).toBe(0);
});

test('getAttackValue gets player\'s attack value', () => {
    const player = new Player('Dave');
    player.strength = 10;
    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test('addPotion adds a potion to the inventory', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;
    player.addPotion(new Potion());
    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test('usePotion uses a potion from the player\'s inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;
    player.usePotion(1);
    expect(player.inventory.length).toBeLessThan(oldCount);
});
'use strict';

const Actions = require('./mower.actions');
const INSTRUCTIONS = ['F', 'L', 'R'];

const Mower = {
    init (initialPosition, initialDirection, lawn) {
        if (!initialPosition || !initialDirection || !lawn) throw new Error('Error in init: Missing parameters');
        this.position = initialPosition;
        this.direction = initialDirection;
        this.lawn = lawn
    },

    drive (instructions) {
        if (!instructions.every(instruction => INSTRUCTIONS.includes(instruction))) throw new Error('Error in drive: Invalid instruction');
        instructions.forEach(instruction => {
            if (instruction === 'L' || instruction === 'R') {
                this.direction = Actions.rotate(instruction, this.direction);
            } else {
                this.position = Actions.move(this.position, this.lawn, this.direction);
            }
        });
        return `${this.position[0]} ${this.position[1]} ${this.direction}`
    }
};

module.exports = Mower;

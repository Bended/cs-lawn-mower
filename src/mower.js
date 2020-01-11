var Actions = require('./mower.actions');

var Mower = {};

module.exports = Mower = {
    init,
    drive,
    getFinalLocation
};

function init (initialPosition, initialDirection, lawn) {
    this.position = [];
    this.position[0] = initialPosition[0];
    this.position[1] = initialPosition[1];
    this.direction = initialDirection;
    this.lawn = lawn
}

function drive (instructions) {
    instructions.forEach(instruction => {
        if (instruction === 'L' || instruction === 'R') {
            this.direction = Actions.rotate(instruction, this.direction);
        } else {
            this.position = Actions.move(this.position, this.lawn, this.direction);
        }
    });
}

function getFinalLocation () {
    return `${this.position[0]} ${this.position[1]} ${this.direction}`;
}

const DIRECTION = ['N', 'E', 'S', 'W'];

module.exports = class Mower {
    constructor(initialPosition, initialDirection, lawn) {
        this.x = initialPosition[0];
        this.y = initialPosition[1];
        this.direction = initialDirection;
        this.xLimit = lawn[0];
        this.yLimit = lawn[1];
    }
    drive(instructions) {
        console.log('instructions', instructions);
        instructions.forEach(instruction => {
            if (instruction === 'L' || instruction === 'R') {
                this.rotate(instruction);
            } else {
                this.move();
            }

        });
        console.log('final', this.x, this.y, this.direction);
    }
    move() {
        switch (this.direction) {
            case 'N': {
                if (this.y <= this.yLimit) this.y+=1;
                break;
            } case 'E': {
                if (this.x <= this.xLimit) this.x+=1;
                break;
            } case 'S': {
                if (this.y >= 0) this.y-=1;
                break;
            } case 'W': {
                if (this.x >= 0) this.x-=1;
                break;
            }
        }
    }
    rotate(rotation) {
        this.directionIndex = DIRECTION.indexOf(this.direction);
        if (rotation === 'L') {
            this.direction = this.directionIndex === 0 ? DIRECTION[3] : DIRECTION[this.directionIndex - 1];
        } else {
            this.direction = this.directionIndex === 3 ? DIRECTION[0] : DIRECTION[this.directionIndex + 1];
        }
    }
};

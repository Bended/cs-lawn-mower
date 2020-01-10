const Mower = require('./mower.module');
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8').split('\n').filter(line => line !== '');
const lawnSize = data[0].split(' ');
let i = 1;
while (i < data.length) {
    let position = (data[i]).split(' ');
    let initialPosition = [ parseInt(position[0]), parseInt(position[1]) ];
    let initialDirection = position[2];
    Mower.init(initialPosition, initialDirection, lawnSize);
    Mower.drive((data[i + 1]).split(''));
    console.log('Final location', Mower.getFinalLocation());
    i+=2;
}


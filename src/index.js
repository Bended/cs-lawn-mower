// import Mower from './mower.controler';

const Mower = require('./mower.controler');
const fs = require('fs');
// var dataInput = '';
const data = fs.readFileSync('input.txt', 'utf8').split('\n');
const lawnSize = data[0].split(' ');
let i = 1;
while (i < data.length) {
    let position = (data[i]).split(' ');
    let initialPosition = [ position[0], position[1] ];
    let initialDirection = position[2];
    const mower = new Mower(initialPosition, initialDirection, lawnSize);
    console.log('position', position[i + 1]);
    mower.drive((data[i + 1]).split(''));
    i+=2;
    console.log('i', i)
}


'use strict';

const fs = require('fs');
const DIRECTION = ['N', 'E', 'S', 'W'];

const getData = () => {
    return fs.readFileSync('input.txt', 'utf8').split('\n').filter(line => line !== '');
};

const checkMowerInit = (commandArr, lawn) => {
    return !(parseInt(commandArr[0]) >= 0 && parseInt(commandArr[0]) <= lawn[0] && parseInt(commandArr[1]) >= 0 && parseInt(commandArr[1]) <= lawn[1])
};

const parseLine = (command, lawn) => {
    const commandArr = (command).split(' ');
    if (checkMowerInit(commandArr, lawn)) throw new Error('Mower outside of lawn or position not set properly');
    const initialPosition = [parseInt(commandArr[0]), parseInt(commandArr[1])];
    let initialDirection = commandArr[2];
    if (!DIRECTION.includes(commandArr[2]))
        throw new Error ('Initial Direction is not properly defined');
    return {
        initialPosition,
        initialDirection
    };
};

const getLawnSize = (command) => {
    const lawn = command[0].split(' ').map(val => parseInt(val));
    if (lawn.length === 2 && lawn.every(val => val > 0)) {
        return lawn;
    } else {
        throw new Error('Lawn size is not properly set!');
    }
};

module.exports = {
    getData,
    parseLine,
    getLawnSize
};

'use strict';
const fs = require('fs');

const DIRECTION = ['N', 'E', 'S', 'W'];

const getData = () => {
    return fs.readFileSync('input.txt', 'utf8').split('\n').filter(line => line !== '');
};

const parseLine = (command, lawn) => {
    try {
        const commandArr = (command).split(' ');
        if (!(parseInt(commandArr[0]) <= lawn[0]) || !(parseInt(commandArr[1]) <= lawn[1])) throw 'Mower outside of lawn or position not set properly';
        const initialPosition = [parseInt(commandArr[0]), parseInt(commandArr[1])];
        let initialDirection = commandArr[2];
        if (!DIRECTION.includes(commandArr[2])) throw ('Initial Direction is not properly defined');
        return {
            initialPosition,
            initialDirection
        };
    } catch (err) {
        console.log('Error in parseLine: ', err);
    }
};

const getLawnSize = (command) => {
    try {
        const lawn = command[0].split(' ');
        if (lawn.length === 2 && lawn.every(val => parseInt(val) > 0)) {
            return lawn
        } else {
            throw ('Lawn size is not properly set!');
        }
    } catch (err) {
        console.log('Error in getLawnSize: ', err)
    }
};

module.exports = {
    getData,
    parseLine,
    getLawnSize
};

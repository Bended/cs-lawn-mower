'use strict';

const Mower = require('./mower');
const Helper = require('./helper');

const main = () => {
    try {
        const data = Helper.getData();
        const lawnSize = Helper.getLawnSize(data);
        let i = 1;
        while (i < data.length) {
            const {
                initialPosition,
                initialDirection
            } = Helper.parseLine(data[i], lawnSize);
            Mower.init(initialPosition, initialDirection, lawnSize);
            const final = Mower.drive((data[i + 1]).split(''));
            console.log('Final location: ', final);
            i += 2;
        }
    } catch (err) {
        console.log(err);
    }
};

main();



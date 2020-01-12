'use strict';

const Mower = require('./mower');
const FileParser = require('./file_parser');

const main = () => {
    try {
        const data = FileParser.getData();
        const lawnSize = FileParser.getLawnSize(data);
        let i = 1;
        while (i < data.length) {
            const {
                initialPosition,
                initialDirection
            } = FileParser.parseLine(data[i], lawnSize);
            Mower.init(initialPosition, initialDirection, lawnSize);
            const final = Mower.drive((data[i + 1]).split(''));
            console.log('Final location: ', final);
            i += 2;
        }
    } catch (err) {
        console.error(err);
    }
};

main();



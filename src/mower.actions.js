const DIRECTION = ['N', 'E', 'S', 'W'];

module.exports = {
    move,
    rotate
};

function move (currPosition, lawn, direction) {
    switch (direction) {
        case 'N': {
            if (currPosition[1] < lawn[1]) return [currPosition[0], currPosition[1]+=1];
            break;
        } case 'E': {
            if (currPosition[0] < lawn[0]) return [currPosition[0]+=1, currPosition[1]];
            break;
        } case 'S': {
            if (currPosition[1] > 0) return [currPosition[0], currPosition[1]-=1];
            break;
        } case 'W': {
            if (currPosition[0] > 0) return [currPosition[0]-=1, currPosition[1]];
            break;
        }
    }
}
function rotate (rotation, currDirection) {
    const directionIndex = DIRECTION.indexOf(currDirection);
    if (rotation === 'L') {
        return directionIndex === 0 ? DIRECTION[3] : DIRECTION[directionIndex - 1];
    } else {
        return directionIndex === 3 ? DIRECTION[0] : DIRECTION[directionIndex + 1];
    }
}
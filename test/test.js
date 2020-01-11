const assert = require('chai').assert;
const Actions = require('../src/mower.actions');

describe('Mower', function() {
    describe('actions', function() {
        function moveResult(direction) {
            return Actions.move([3,3], [5,5], direction)
        }
        it('should move to the North', function () {
            assert.deepEqual(moveResult('N'), [3, 4]);
        });
        it('should move to the South', function () {
            assert.deepEqual(moveResult('S'), [3, 2]);
        });
        it('should move to the East', function () {
            assert.deepEqual(moveResult('E'), [4, 3]);
        });
        it('should move to the West', function () {
            assert.deepEqual(moveResult('W'), [2, 3]);
        });
        it("shouldn't move out of the lawn", function () {
            let result = Actions.move([5,5], [5,5], 'N');
            assert.deepEqual(result, [5,5]);
        });
        it("should move back into the lawn", function () {
            let result = Actions.move([5,5], [5,5], 'S');
            assert.deepEqual(result, [5,4]);
        });
    });
    describe('Rotation', function () {
        function rotateResult(rotation) {
            return Actions.rotate(rotation, 'N') }
        it('Should turn to left', function () {
            assert.equal(rotateResult('L'), 'W')
        });
        it('Should turn to right', function () {
            assert.equal(rotateResult('R'), 'E')
        })
    })
});

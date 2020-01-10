var assert = require('chai').assert;
var should = require('chai').should();
const Mower = require('../src/mower.module');
const Actions = require('../src/mower.actions');

describe('Mower', function() {
    describe('actions', function() {
        function moveResult(direction) {
            return Actions.move([1,1], [5,5], direction)
        }
        it('should move to the North', function () {
            assert.deepEqual(moveResult('N'), [1, 2]);
        });
        it('should move to the South', function () {
            assert.deepEqual(moveResult('S'), [1, 0]);
        });
        it('should move to the East', function () {
            assert.deepEqual(moveResult('E'), [2, 1]);
        });
        it('should move to the West', function () {
            assert.deepEqual(moveResult('W'), [0, 1]);
        });
        it("shouldn't move out of the lawn", function () {
            let result = Actions.move([-1,1], [5,5], 'W');
            should.not.exist(result);
        });
    });
    describe('Rotation', function () {
        function rotateResult(rotation) {
            return Actions.rotate(rotation, 'N') }
        it('Should turn to left', function () {
            assert.equal(rotateResult('L'), 'W')
        })
        it('Should turn to right', function () {
            assert.equal(rotateResult('R'), 'E')
        })
    })
});

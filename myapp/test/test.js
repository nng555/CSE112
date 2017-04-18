process.env.NODE_ENV = 'test';

var baz = require('../static/js/baz');
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});
describe('baz', function() {
    it('should return true when baz is passed in', function() {
        assert.equal(true, baz.isBaz('baz'));
    });
});
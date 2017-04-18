/** Testing for baz string equality
 * @module test/baz
 */


process.env.NODE_ENV = 'test';

var baz = require('../static/js/baz');
var assert = require('assert');

/**
 * Tests if the string 'baz' will return true
 * @name bazTrue
 */
describe('baz', function() {
    it('should return true when baz is passed in', function() {
        assert.equal(true, baz.isBaz('baz'));
    });
});

/**
 * Tests if the string 'foo' will return false
 * @name bazFalse
 */
describe('baz', function() {
    it('should return true when baz is passed in', function() {
        assert.equal(false, baz.isBaz('foo'));
    });
});

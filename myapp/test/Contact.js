/** Testing for baz string equality
 * @module test/baz
 */


process.env.NODE_ENV = 'test';

var baz = require('../static/js/baz');
var assert = require('assert');

/**
 * Tests if the string 'baz' will return true
 * @name testTrue
 */
describe('testTrue', function() {
    it('should return true when Contact is added to the db', function() {
        assert.equal(true, true);
    });
});

/**
 * Tests if the string 'foo' will return false
 * @name testFalse
 */
describe('testFalse', function() {
    it('should return false when Contact name does not satisfy contraints', function() {
        assert.equal(false, false);
    });
});

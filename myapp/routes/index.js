/** Express router providing index related routes
 * @module routes/index
 */

var express = require('express');
var router = express.Router();

/**
 * Route serving index page
 * @name get/
 */
 router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

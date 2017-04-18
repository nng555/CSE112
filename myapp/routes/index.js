
/**
 * @file Routing for the index page
 */

var express = require('express');
var router = express.Router();

/** Route '/' to the index.ejs page */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

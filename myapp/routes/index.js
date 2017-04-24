/** Express router providing index related routes
 * @module routes/index
 */

var express = require('express');
var bodyParser = require('body-parser');
var index = express.Router();

index.use(bodyParser.json()); // support json encoded bodies
index.use(bodyParser.urlencoded({ extended: true }));


/**
 * Route serving index page
 * @name get/
 */
index.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = index;

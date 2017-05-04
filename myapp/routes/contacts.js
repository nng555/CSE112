/** Express router providing contact related routes
 * @module routes/contact
 */

var express = require('express');
var Contact = require('../models/Contact')
var db = require('../db');

var contact = express.Router();

/**
 * On post request to contact page, create new contact
 * @name post/
 */
contact.post('/', function(req, res) {
  console.log(req.body);

  // Parse the config and name
  var config = {
    invalidChars: req.body.config.invalidChars,
    maxLength   : parseInt(req.body.config.maxLength)
  };
  var newContact = new Contact({ name: req.body.name, config: config });
  console.log(newContact);

  // save the new contact into the database
  newContact.save(function (err) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("Success");
    res.end();
  });
});

contact.get('/', function(req, res) {

});

module.exports = contact;

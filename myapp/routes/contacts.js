var express = require('express');
var Contact = require('../models/Contact')
var db = require('../db');

var contact = express.Router();

contact.post('/', function(req, res) {
  console.log(req.body);
  console.log(req.body.name);
  var newContact = new Contact({ name: req.body.name });
  console.log(newContact);

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

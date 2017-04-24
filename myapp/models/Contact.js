var mongoose = require('mongoose');
var db = require('../db');

var Schema = mongoose.Schema;
var contactSchema = new Schema({
  name : String,
  date: { type: Date, default: Date.now }
});

var Contact = db.model('Contact', contactSchema);

module.exports = Contact;

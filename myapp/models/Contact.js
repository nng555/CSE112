var mongoose = require('mongoose');
var db = require('../db');

var Schema = mongoose.Schema;
var contactSchema = new Schema({
  name : String,
  config: {
    invalidChars: String,
    maxLength   : Number
  },
  date: { type: Date, default: Date.now }
});

var Contact = db.model('Contact', contactSchema);

module.exports = Contact;

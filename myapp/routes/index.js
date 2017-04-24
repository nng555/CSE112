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

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var app = express();

mongoose.connect('mongodb://localhost/test');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected");
});

var Schema = mongoose.Schema;
var contactSchema = new Schema({
  Name : String
});

var contact = mongoose.model('Contact', contactSchema);

router.post('/', function(req, res) {
  new contact({
    Name : req.body.name
  }).save(function (err, data) {
    if (err) console.log(err);
    else console.log('Saved : ', data );
  });
  res.redirect('/');
});

/*
router.get('/contacts', function(req, res) {
   res.render('contacts');
});*/

// var temp = new contact({
//   firstName : 'Alan',
//   middleName : 'Yian',
//   lastName : 'Xu'
// });

// temp.save(function (err, data) {
//   if (err) console.log(err);
//   else console.log('Saved : ', data );
// });

module.exports = contact;
module.exports = router;

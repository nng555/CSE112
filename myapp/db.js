var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },

                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connect('mongodb://admin:shinypigeon3@ds113841.mlab.com:13841/shinypigeon', options);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongo is connected");
});


module.exports = db;

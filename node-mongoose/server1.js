var mongoose = require('mongoose'),
    assert = require('assert'),
    Dishes = require('./models/dishes');

var url = 'mongodb://localhost:27017/NN';
mongoose.connect(url);
var db = mongoose.connection;

// if there was an error with the connection:
db.on('error', console.error.bind(console, 'connection error'));

// if not:
db.once('open', function (){
  console.log('Connected!');
  // console.log(db);
  var pizza = Dishes({
    name: "pizza",
    description: "Hawaiana"
  });

  pizza.save(function (err){
    if (err) throw err;
    console.log(pizza.name + " has been created");

    Dishes.find({}, function (err, data){
      if (err) throw err;
      console.log(data);

      db.collection('dishes').drop(function (){
        db.close();
      });

    });

  });
});

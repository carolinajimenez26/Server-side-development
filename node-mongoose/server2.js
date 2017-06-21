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
  Dishes.create({
    name: "pizza",
    description: "Hawaiana"
  }, function (err, data){
    if (err) throw err;
    console.log(data.name + " has been created");
    console.log(data);
    var id = data._id;

    setTimeout(function (){

      Dishes.findByIdAndUpdate(id, {
        $set: {
          description: "Peperoni"
        }
      }, {
          new: true // returns the updated dish, if false, returns the previous one
      }
      ).exec(function (err, data){
        if (err) throw err;
        console.log(data.name + " has been updated");
        console.log(data);

        db.collection('dishes').drop(function (){
          db.close();
        });

      });

    }, 3000); // we have to wait a second after creating new document to see the dates (timestamp)

  });

});

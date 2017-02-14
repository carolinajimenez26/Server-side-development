var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/NN';
// Connect with the server
MongoClient.connect(url, function (err, db) {
  assert.equal(err,null);
  console.log('Connected correctly to the server');

  var collection = db.collection('dishes');
  collection.insertOne({name:"Pizza", description:"Hawaiana"}, function (err, result){
    assert.equal(err,null);
    console.log("After insert:");
    console.log(result.ops);

    // finds all the collections and return it like an array
    collection.find({}).toArray(function (err,docs) {
      assert.equal(err,null);
      console.log('Found:');
      console.log(docs);

      db.dropCollection('dishes', function (err, result) {
        assert.equal(err,null);
        db.close();
      });
    });
  });
});

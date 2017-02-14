var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var dboper = require('./operations');

var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected to the server!");

  dboper.insertDocument(db, {name: "Carolina", "last-name":"Jimenez"}, "users",
    function (result) {
      console.log(result.ops);

      //database, collection
      dboper.findDocuments(db, "users", function (docs) {

        //database, key (for searching in the db), what is going to be update,
        //collection
        dboper.updateDocument(db, {name: "Carolina"}, {"last-name":"Jimenez Gomez"},
          "users", function (result) {
              console.log(result.result);

              dboper.findDocuments(db, "users", function (docs) {
                console.log(docs);

                db.dropCollection("users", function (result) {
                    console.log(result);
                    db.close();
                });
              });
          }
        );
      });
    }
  );
});

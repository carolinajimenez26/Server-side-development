var express = require('express');
var router = express.Router();
var Dish = require('../models/dish');
var Verify = require('./verify');

router.route('/')

.get(Verify.verifyOrdinaryUser, function (req,res,next) {
  Dish.find({}, function (err, data){
    if (err) throw err;
    res.json(data);
  });
})

.post(Verify.verifyAdmin, function (req,res,next) {
  Dish.create(req.body, function (err, data){
    if (err) throw err;
    res.writeHead(200, {
      'Content-type':'text/plain'
    });
    res.end("New dish has been created: ", data.name);
    console.log("New dish has been created: ", data);
  });
})

.delete(Verify.verifyAdmin, function (req,res,next) {
  Dish.remove({}, function(err,resp){
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = router;

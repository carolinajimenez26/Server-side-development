var express = require('express'),
    bodyParser = require('body-parser'),
    Users = require('../models/users');

var router = express.Router();
router.use(bodyParser.json());

router.route('/')

  .get(function (req,res,next) {
    Users.find({}, function (err, data){
      if (err) throw err;
      res.json(data);
    });
  })

  .post(function (req,res,next) {
    Users.create(req.body, function (err, data){
      if (err) throw err;
      res.writeHead(200, {
        'Content-type':'text/plain'
      });
      res.end("New user has been created: ", data.name);
      console.log("New user has been created: ", data);
    });
  })

  .delete(function (req,res,next) {
    Users.remove({}, function(err,resp){
      if (err) throw err;
      res.json(resp);
    });
  });

router.route('/:id')

  .get(function (req,res,next) {
    Users.findById(req.params.id, function (err,data){
      if (err) throw err;
      res.json(data);
    });
  })

  .put(function (req,res,next) {
    Users.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    }, function (err,data){
      if (err) throw err;
      res.json(data);
    });
  })

  .delete(function (req,res,next) {
    Users.findByIdAndRemove(req.params.id, function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

module.exports = router;

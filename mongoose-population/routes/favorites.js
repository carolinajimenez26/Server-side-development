var express = require('express');
var router = express.Router();
var Favs = require('../models/favorites');
var Verify = require('./verify');

router.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
  var currentUserId = req.decoded._doc._id;

  Favs.where('postedBy',currentUserId)
    .populate('postedBy')
    .populate('dishes')
    .exec(function (err, data) {
      if (err) return next(err);
      res.json(data);
  });
})

// add a favorite by its dish _id
.post(Verify.verifyOrdinaryUser, function (req, res, next) {
  var currentUserId = req.decoded._doc._id;
  var dishId = req.body._id;

  Favs.where('postedBy',currentUserId)
  .exec(function (err, data) {
    if (err) return next(err);
    console.log(data.length);
    if (!data.length) { // if it doesn't exists yet
      Favs.create({
        postedBy: currentUserId,
        dishes: [dishId]
      }, function (err, data) {
        if (err) return next(err);
        res.json(data);
      });
    } else {
      Favs.findOneAndUpdate({
        postedBy: currentUserId
      }, {
        $addToSet : {dishes: dishId}
      }, {
        new: true
      },function (err, data) {
        if (err) return next(err);
        res.json(data);
      });
    }
  });

})

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
  var currentUserId = req.decoded._doc._id;
  Favs.remove({postedBy: currentUserId}, function (err, resp) {
    if (err) return next(err);
    res.json(resp);
  });
});


router.route('/:dishId')

.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
  var currentUserId = req.decoded._doc._id;

  Favs.update({postedBy: currentUserId}, {$pull: { dishes: req.params.dishId } }, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;

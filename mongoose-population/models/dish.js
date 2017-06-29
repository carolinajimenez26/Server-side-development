var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  postedBy : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
    timestamp: true
});

var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [commentSchema]
}, {
  timestamp: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;

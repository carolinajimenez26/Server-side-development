var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// creates an Schema for a dish
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
}, {
  timestamp: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;

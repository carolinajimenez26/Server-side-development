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

// creates a model with the previous Schema for the dish
// when the first parameter in the model ('Dish') specified,
// mongo will create automatically a collection with the plural of it,
// in this case will be 'Dishes'
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;

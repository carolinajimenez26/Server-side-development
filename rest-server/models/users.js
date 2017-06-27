var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// creates an Schema for a dish
var userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  friends : [{
    name: String
  }]
}, {
  timestamp: true
});

var Users = mongoose.model('User', userSchema);

module.exports = Users;

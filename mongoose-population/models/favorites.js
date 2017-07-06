var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var favSchema = new Schema({
  postedBy : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dishes : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish'
  }]
}, {
    timestamp: true
});

module.exports = mongoose.model("Favorite", favSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var podcastSchema = new Schema({
  name: String,
  genre: String,
  cover: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Podcast', podcastSchema);
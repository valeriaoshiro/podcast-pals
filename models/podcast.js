var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var podcastSchema = new Schema({
  collectionName: String,
  primaryGenreName: String,
  artworkUrl600: String,
  collectionId: String,
  collectionViewUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Podcast', podcastSchema);
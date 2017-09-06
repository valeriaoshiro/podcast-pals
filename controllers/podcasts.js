var Podcast = require('../models/podcast');

module.exports = {
  create
};

function create(req, res){
  var podcast = new Podcast(req.body);
  podcast.save(err => {
    res.redirect(`podcasts/${podcast.id}`)
  })

}


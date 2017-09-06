var Podcast = require('../models/podcast');
var SECRET = process.env.SECRET;

module.exports = {
  index,
  create
};

function index(req, res){
  Podcast.find({})
  .then(podcast => {
    res.status(200).json(podcast);
  });
};

function create(req, res){
    console.log(req.body);
    Podcast.findOne({ "collectionId": req.body.collectionId }, (err, result) => {
        if(!result) {
            var podcast = new Podcast(req.body);
            podcast.save(err => {
                res.redirect('/');
            })
        }
    })
};

/*----- Helper Functions -----*/


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
    console.log(req);
};

/*----- Helper Functions -----*/


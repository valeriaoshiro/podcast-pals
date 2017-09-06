var Podcast = require('../models/podcast');
var User = require('../models/user')
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
    console.log('***req.user ',req.user);
    Podcast.findOne({ "collectionId": req.body.collectionId }, (err, result) => {
        var podcast;
        if(!result) {
            podcast = new Podcast(req.body);
            podcast.save();
        }
        User.findById(req.user._id, (err, user) => {
            console.log('***User ', user)
            user.lists.push(podcast._id);
            user.save(err => {
                res.redirect('/');
            });
        })
    })
};


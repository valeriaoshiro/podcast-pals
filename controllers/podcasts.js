var Podcast = require('../models/podcast');
var User = require('../models/user')

module.exports = {
  index,
  create,
  delete: deletePodcast
};

function index(req, res){
  Podcast.find({})
  .then(podcast => {
    res.status(200).json(podcast);
  });
};

function create(req, res){
    console.log('***req.body ',req.body);
    Podcast.findOne({ "collectionId": req.body.collectionId }, (err, result) => {
        var podcast;
        if(!result) {
            podcast = new Podcast(req.body);
            podcast.save();
        } else {
            podcast = result;
        }
        User.findById(req.user._id, (err, user) => {
            console.log('***User ', user)
            user.lists.push(podcast._id);
            user.save(err => {
                res.redirect('/podcasts');
            });
        })
    })
};

function deletePodcast(req, res){
    console.log("req.params ", req.params)
    console.log("req.user._id", req.user._id)
    User.findById(req.user._id, (err, user) => {
        user.lists.remove(req.params.id);
        user.save(err => {
            res.status(200).json(err);
        })
    })
}

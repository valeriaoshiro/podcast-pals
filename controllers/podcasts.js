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
    // console.log('***req.body ',req.body);
    Podcast.findOne({ "collectionId": req.body.collectionId }, (err, result) => {
        var podcast;
        if(!result) {
            podcast = new Podcast(req.body);
            podcast.save();
        } else {
            podcast = result;
        }
        // console.log('***podcast ', podcast)
        User.findById(req.user._id, (err, user) => {
            // console.log('***User ', user)
            user.lists.push(podcast._id);
            user.save((err, savedUser) => {
                console.log('savedUser =', savedUser)
                if (err) return res.status(400).json(err)

                res.status(200).json(podcast);
            });
        })
    })
};

function deletePodcast(req, res){
    User.findById(req.user._id, (err, user) => {
        user.lists.remove(req.params.id);
        user.save((err, deletedUser) => {

            res.status(200).json(deletedUser);
        })
    })
}

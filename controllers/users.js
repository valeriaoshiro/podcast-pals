var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  index,
  searchUsers
};

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      // TODO: Send back a JWT instead of the user
      res.json({token: createJWT(user)});
    })
    // User data invalid
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
}

function index(req, res){
  User.findById(req.user).populate('lists').exec((err, user) => {
    res.status(200).json(user);
  })
};

function searchUsers(req, res){
  console.log("****req.body ", req.body)
  var re = '(.*)' + req.body.searchValue + '(.*)';
  var reg = new RegExp(re, 'gi');
  // console.log(reg);
  User.find({name: reg}, (err, users) => {
    res.status(200).json(users);
  })
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
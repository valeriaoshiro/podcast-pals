var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.get('/', checkAuth, usersCtrl.index);


/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  console.log('Smerge', req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}


module.exports = router;
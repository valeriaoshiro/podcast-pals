var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.get('/', checkAuth, usersCtrl.index);
router.post('/searchUsers', checkAuth, usersCtrl.searchUsers);
router.post('/addFriend', checkAuth, usersCtrl.addFriend);
router.delete('/removeFriend/:id', checkAuth, usersCtrl.removeFriend);
router.get('/:id', checkAuth, usersCtrl.show);


/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}


module.exports = router;
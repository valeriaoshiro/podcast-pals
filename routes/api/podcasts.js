var express = require('express');
var router = express.Router();
var User = require('../../models/podcast');
var podcastsCtrl = require('../../controllers/podcasts');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.get('/', checkAuth, podcastsCtrl.index);
router.post('/', checkAuth, podcastsCtrl.create);


/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  console.log('Smerge', req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}


module.exports = router;
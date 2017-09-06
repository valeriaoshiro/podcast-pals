var express = require('express');
var router = express.Router();
var podcastCtrl = require('./../../controllers/podcasts');


/*---------- Protected Routes ----------*/
// router.get('/', podcastCtrl.index);
// router.get('/new', podcastCtrl.new);
// router.get('/:id', podcastCtrl.show);
// router.delete('/:id', podcastCtrl.delete);
router.post('/', podcastCtrl.create);

/*----- Helper Functions -----*/

function checkAuth(req, res, next) {
  console.log('Smerge', req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;
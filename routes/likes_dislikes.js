var express = require('express');
var router = express.Router();

/* GET like_dislikes page. */
router.get('/', function(req, res, next) {
  res.render('likes_dislikes', { title: 'Express' });
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const likes_dislikes = req.body;
  console.log(likes_dislikes);
  res.render('likes_dislikes', { likes_dislikes: likes_dislikes, title: 'likes_dislikes', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const likes_dislikes = req.body;
  console.log(likes_dislikes);
  res.render('likes_dislikes', { likes_dislikes: likes_dislikes, title: 'likes_dislikes', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const likes_dislikes = req.body;
  console.log(likes_dislikes);
  res.render('likes_dislikes', { likes_dislikes: likes_dislikes, title: 'likes_dislikes', userId: userId });
});


module.exports = router;

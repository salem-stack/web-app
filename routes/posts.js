var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'Express' });
});

router.get('/:id', function(req, res) {
  const userId = req.params.id;
  res.render('posts', { title: 'posts', userId: userId });
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const post = req.body;
  console.log(post);
  res.render('hobbies', { posts: post, title: 'posts', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const post = req.body;
  console.log(post);
  res.render('posts', { posts: post, title: 'posts', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const post = req.body;
  console.log(post);
  res.render('posts', { posts: post, title: 'posts', userId: userId });
});


module.exports = router;

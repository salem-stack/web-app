var express = require('express');
var router = express.Router();

/* GET comments page. */
router.get('/', function(req, res, next) {
  res.render('comments', { title: 'Express' });
});

router.get('/:id', function(req, res) {
  const userId = req.params.id;
  res.render('comments', { title: 'comments', userId: userId });
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const comment = req.body;
  console.log(comment);
  res.render('comments', { comments: comment, title: 'comments', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const comment = req.body;
  console.log(comment);
  res.render('hobbies', { comments: comment, title: 'comments', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const comment = req.body;
  console.log(comment);
  res.render('hobbies', { comments: comment, title: 'comments', userId: userId });
});


module.exports = router;

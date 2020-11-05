var express = require('express');
var router = express.Router();

/* GET categories page. */
router.get('/', function(req, res, next) {
  res.render('categories', { title: 'Express' });
});

router.get('/:id', function(req, res) {
  const userId = req.params.id;
  res.render('categories', { title: 'categories', userId: userId });
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const category = req.body;
  console.log(category);
  res.render('categories', { categories: category, title: 'categories', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const category = req.body;
  console.log(category);
  res.render('categories', { categories: category, title: 'categories', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const category = req.body;
  console.log(category);
  res.render('categories', { categories: category, title: 'categories', userId: userId });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET advertisements page. */
router.get('/', function(req, res, next) {
  res.render('advertisements', { title: 'Express' });
});

router.get('/:id', function(req, res) {
  const userId = req.params.id;
  res.render('advertisements', { title: 'advertisements', userId: userId });
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const advertisement = req.body;
  console.log(advertisement);
  res.render('advertisements', { advertisements: advertisement, title: 'advertisements', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const advertisement = req.body;
  console.log(advertisement);
  res.render('advertisements', { advertiements: advertisement, title: 'advertisements', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const advertisement = req.body;
  console.log(advertisement);
  res.render('advertisements', { advertisements: advertisement, title: 'advertisements', userId: userId });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET subscriptions page. */
router.get('/', function(req, res, next) {
  res.render('subscriptions', { title: 'Express' });
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const subscription = req.body;
  console.log(subscription);
  res.render('subscriptions', { subscriptions: subscription, title: 'subscriptions', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const subscription = req.body;
  console.log(subscription);
  res.render('subscriptions', { subscriptions: subscription, title: 'subscriptions', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const subscription = req.body;
  console.log(subscription);
  res.render('subscriptions', { subscriptions: subscription, title: 'subscriptions', userId: userId });
});


module.exports = router;

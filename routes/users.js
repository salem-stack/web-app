var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/:id', function(req, res) {
  const userId = req.params.id;
  const user = req.body;
  console.log(user);
  res.render('users', { users: user, title: 'users', userId: userId });
});

router.put('/:id', function(req, res) {
  const userId = req.params.id;
  const user = req.body;
  console.log(user);
  res.render('users', { users: user, title: 'users', userId: userId });
});

router.delete('/:id', function(req, res) {
  const userId = req.params.id;
  const user = req.body;
  console.log(user);
  res.render('users', { users: user, title: 'users', userId: userId });
});


module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../controller/db').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = new User({
    email: 'helloworld@qq.com',
    name: 'helloworld',
    id: 1,
    age: 26
  });
  user.save();
  res.send('Data inited');
});

module.exports = router;

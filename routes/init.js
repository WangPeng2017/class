var express = require('express');
var router = express.Router();
var User = require('../controller/db').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = new User({
    email: 'helloworld@qq.com',
    name: 'helloworld'
  });
  user.save();
  res.send('Data inited');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../controller/db').User;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(User.find());
});

module.exports = router;

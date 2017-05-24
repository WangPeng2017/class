var express = require('express');
var router = express.Router();
var User = require('../controller/db').User;
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({name: 'helloworld'}, function(err, doc){
         res.send(doc);
    });
});

module.exports = router;

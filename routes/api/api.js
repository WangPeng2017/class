var express = require('express');
var router = express.Router();
var User = require('../../controller/db').User;
var Class = require('../../controller/db').Class;
/* GET users listing. */

router.post('/getdetail', function(req, res, next) {
    Class.find({userName: req.body.userName}, function(err, doc){
        res.send(doc);
    });
});

router.post('/addclass', function(req, res, next) {
    var newClass = req.body;
    Class.create(newClass, function(err, doc){
        res.send(doc);
    });
});


module.exports = router;

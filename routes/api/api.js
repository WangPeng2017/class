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

router.post('/removedetail', function(req, res, next) {
    Class.remove(req.body, function (err, doc) {
      if (err) return handleError(err);
      res.send(doc);
    });
});


router.post('/addclass', function(req, res, next) {
    var newClass = req.body;
    if(req.body.id){
        Class.findOneAndUpdate({_id: req.body.id}, { $set: req.body}, function(err, doc){
            res.send(doc);
        })
    }else{
        Class.create(newClass, function(err, doc){
        res.send(doc);
    });
    }
});

router.post('/adduser', function(req, res, next) {
    var newUser = req.body;
    User.create(newUser, function(err, doc){
        res.send(doc);
    });
});

router.post('/verify', function(req, res, next) {
    User.findOne(req.body, function(err, doc){
        req.session.user = req.body.name;
        res.send(doc);
    });
})

module.exports = router;

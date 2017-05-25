var express = require('express');
var router = express.Router();
var User = require('../../controller/db').DBhandler.User;
var Class = require('../../controller/db').DBhandler.Class;
/* GET users listing. */

router.post('/getdetail', function(req, res) {
    Class.find({userName: req.body.userName}, function(err, doc){
        res.render('detail');
    });
});


module.exports = router;

var express = require('express');
var router = express.Router();
var Class = require('../controller/db').DBhandler.Class;

/* GET users listing. */
router.get('/', function(req, res, next) {
    var myclass = new Class({
        date: "2017/5/25",
        name: "正源",
        progress: "群蜂狂舞",
        userName: "helloworld"
    });
    myclass.save();
    res.render('add');
});

module.exports = router;

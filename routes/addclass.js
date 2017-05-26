var express = require('express');
var router = express.Router();
var Class = require('../controller/db').Class;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('add');
});

module.exports = router;

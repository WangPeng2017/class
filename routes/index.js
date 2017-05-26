var express = require('express');
var router = express.Router();
 

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/regist', function(req, res, next) {
  res.render('regist');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/add', function(req, res, next) {
    res.render('add');
});

router.get('/detail', function(req, res, next) {
  res.render('detail');
});

module.exports = router;

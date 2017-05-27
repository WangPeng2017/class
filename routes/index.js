var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {"userName": res.locals.user});
});

router.get('/regist', function(req, res, next) {
  res.render('regist');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
    req.session.user = null;
    req.session.error = null;
    delete res.locals.user;
    res.redirect('/');
});

router.get('/add', function(req, res, next) {
    if(req.session.user){
　　　　res.render('add', {"userName": res.locals.user});
　　}else{
　　　　res.redirect('/login');
　　}
});

router.get('/detail', function(req, res, next) {
    if(req.session.user){
　　　　res.render('detail', {"userName": res.locals.user});
　　}else{
　　　　res.redirect('/login');
　　}
});

module.exports = router;

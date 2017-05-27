var mongoose = require('mongoose');

var serverConf = require('../serverConfig');
var dbUrl = serverConf.prdConfig.DB_URL;

const db = mongoose.connect(dbUrl).connection;

// 实例化连接对象
db.on('error', console.error.bind(console, '连接错误：'));
db.once('open', (callback) => {
    console.log('MongoDB连接成功！！')
});

// 创建 注册用户schemax   
var _User = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// 创建授课记录schema
var _Class = new mongoose.Schema({
    date: Date,
    name: String,
    progress: String,
    userName: String // 授课老师
});

// 创建model
User = mongoose.model('User', _User);
Class = mongoose.model('Class', _Class);

// CURE
function addClass(req, res, next) {

    var _user = new User(req.body.user); //相当于调用了Model.create(req.body)
    _user.save(function(err, user) {
        if (err) {
            //doSomething...
        } else {
            //doSomething...
        }
    })
}

function deleteClass(req, res, next) {

    var id = req.query._id;

    User.remove({ _id: id }, function(err) {
        if (err) {
            //doSomething...
        } else {
            //doSomething...
        }
    })
}

function editClass(req, res, next) {

    var id = req.body.id;
    var userParams = req.body;

    User.findById(id, function(err, user) {
        if (err) {
            //doSomething...
        } else {
            _user = _.extend(user, userParams);
            _user.save(function(err, user) {
                if (err) {
                    //doSomething...
                } else {
                    //doSomething...
                }
            })
        }
    })
}

function getClasses(option) {
    return Class.find(option, function(err, doc) {
        res.send(doc);
    })
}

module.exports = { User, Class, getClasses, editClass, deleteClass, addClass };
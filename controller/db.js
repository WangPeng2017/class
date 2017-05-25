var mongoose = require('mongoose');
// require('express-mongoose');
const db = mongoose.connect('mongodb://localhost/test').connection;

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
var DBhandler = {};
DBhandler.User = mongoose.model('User', _User);
DBhandler.Class = mongoose.model('Class', _Class);

module.exports.DBhandler = DBhandler;

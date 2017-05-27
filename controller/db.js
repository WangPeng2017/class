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

module.exports = { User, Class };
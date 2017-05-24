var mongoose = require('mongoose');
// require('express-mongoose');
const db = mongoose.connect('mongodb://localhost/test').connection;

// 实例化连接对象
db.on('error', console.error.bind(console, '连接错误：'));
db.once('open', (callback) => {
  console.log('MongoDB连接成功！！')
});

// 创建schema
var _User = new mongoose.Schema({
    email: String,
    name: String,
    salt : String,
    password: String
});

//为Schema模型追加speak方法
_User.methods.find = function(){
    find
    console.log('我的名字叫'+this.name);
}

// 创建model
User = mongoose.model('User', _User);

module.exports.User = User;
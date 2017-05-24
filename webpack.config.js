/*
功能：打包文件，提取公共部分，并生成带js\css引用的html页面

打包前的文件，静态资源放在 client 下，html在views下
打包后统一放在 dist 里

使用的node模块：path

网上有说开启webpack观察者模式会导致内存占用过高，可以用gulp调用webpack的方式解决
但是貌似这个项目并没有这种问题~
 */

/**************************引入webpack***********************************/
var webpack = require('webpack');
var path = require('path');

module.exports = {
    // 页面入口文件
    entry: {
        index: './client/index.jsx',
    },
    output: {
        //打包文件存放的绝对路径，html、css、js都会按这个路径打包
        path: path.resolve(__dirname, './dist'),
        //网站运行时的访问路径，不设置的话，打包出的html中的默认引用的路径会是相对路径
        publicPath: "/dist/",
        //打包后的文件名 
        filename: '[name].bundle.js'
    },
    resolve: {
        //require文件的时候不需要写后缀了，可以自动补全
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [ //定义一系列加载器
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.html$/, loader: "html" },
        ]
    },
    plugins: [

    ], //使用插件
    //watch: true //开启观察者模式
}

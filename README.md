##  										一个统计授课记录的demo

#### 项目思路： 

​	统计授课课时和进度的工具。

​	数据存储结构为：

```
{
  {
    user
  },
  {}
}

```





#### 1. 起步 —— 后端架子express + nodemon (文件监测和热启动server)

使用Express 应用程序生成器 (express-generator)快速搭建应用！参照[Express官网](http://expressjs.com/)

 1.  全局安装  `express` 

     ```
     $ cnpm install express-generator -g
     ```

     使用 `-h` 选项显示命令选项

         $ express -h

           Usage: express [options][dir]

           Options:

         -h, --help          output usage information
             --version       output the version number
         -e, --ejs           add ejs engine support
             --hbs           add handlebars engine support
             --pug           add pug engine support
         -H, --hogan         add hogan.js engine support
         -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
         -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
             --git           add .gitignore
         -f, --force         force on non-empty directory`

 2.  创建名为 **app** 的 Express 应用程序：

     ````
     $ express -e app
     ````

 3.  然后安装依赖

     ````
     $ cd app
     $ cnpm install
     ````

     ````
     目录结构为： (express 生成的目录， 后面还会修改)
     .
     ├── app.js
     ├── bin
     │   └── www
     ├── package.json
     ├── public
     │   ├── images
     │   ├── javascripts
     │   └── stylesheets
     │       └── style.css
     ├── routes
     │   ├── index.js
     │   └── users.js
     └── views
         ├── error.pug
         ├── index.pug
         └── layout.pug
         
     ````

     4. 全局安装 nodemon 工具

     ```
     cnpm install -g nodemon
     ```

     安装完 nodemon 后，就可以使用 nodemon 热启动应用

     ```
     nodemon ./bin/www
     ```

     ​

#### 2.前端部分使用 webpack + react

1. 全局安装 webpack

   ````
   $ cnpm install webpack -g
   ````

2. 使用webpack

   ````
   $ cnpm install webpack webpack-dev-server --save-dev //将webpack增加到开发依赖中
   ````

3. ES6 --> ES5 转译器，安装babel

   ```
   $ cnpm install -g babel

   $ cnpm install babel-core babel-loader --save-dev
   ```

   ​

4. 修改目录结构 (增加前端页面目录 client , 数据库服务目录 controller , 打包压缩后文件保存目录dist)

   ```
   修改后目录结构为：
   .
   ├── app.js
   ├── webpack.config.js
   ├── bin
   │   └── www
   ├── package.json
   │
   ├── client
   │	├── component
   │	├── add.jsx
   │   └── index.jsx
   │
   ├── controller
   │	└── db.js
   │
   ├── dist
   │   ├── vendor
   │	│	├── react.min.js
   │	│	└── react-dom.min.js
   │	└── index.bundle.js
   │       
   ├── routes
   │   ├── index.js
   │   └── users.js
   └── views
       ├── error.ejs
       ├── index.ejs
       └── add.ejs
       
   ```

5. 使用react. 

   * /dist/vendor/ 目录下引入 react.min.js、react-dom.min.js。

   * /client/ 目录下创建 index.jsx 作为 ReactDOM.render 组件的入口

     ```
     /client/index.jsx

     'use strict';
     //import $ from 'zepto';
     import React from 'react';
     import ReactDOM from 'react-dom';

     ReactDOM.render(
         <h1>Hello React!!!</h1>,
         document.getElementById('root')
     );
     ```

     ​

6. 根目录创建 webpack.config.js

   ```
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
           index: './client/index.jsx', // 相对路径，打包前端部分jsx
           add: './client/add.jsx',
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
   ```

7. 视图模板中添加前端react引用

   ````
   index.ejs

   <!DOCTYPE html>
   <html>
     <head>
       <title>my class history</title>
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui" />
       <link rel="stylesheet" type="text/css" href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" />
       <script src="//cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
       <script type="text/javascript" src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

   	// 引入react
       <script type="text/javascript" src="./dist/vendor/react.min.js"></script>
       <script type="text/javascript" src="/dist/vendor/react-dom.min.js"></script>
       <script type="text/javascript">

         var userInfo = {
           name: '',
           avatar: ''
         }

       </script>
     </head>
     <body>    
     	<div id="root"></div>
     	
     	// 引入react组件压缩打包后的bundle文件
       <script src="/dist/index.bundle.js"></script>
     </body>
   </html>


   ````

   ​

8. 修改启动命令

   修改package.json中，script start 命令

   ```
   package.json

   "scripts": {
       "start": "webpack & nodemon ./bin/www",
       "watch": "webpack -w"
     },
   ```

9. 现在可以启动项目了！

   贴图...

   ![Alt text](http://wx1.sinaimg.cn/mw1024/752603d5gy1ffxfo43p7wj20gu03qjr7.jpg)


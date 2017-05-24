##  				一个课程记录统计demo

#### 项目背景： 

​	。。。



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

    ````
    cnpm install -g nodemon
    ````

    安装完 nodemon 后，就可以使用 nodemon 热启动应用

    ```
    nodemon ./bin/www
    ```



#### 2.前端部分使用 webpack + react

1. 全局安装 webpack

   ````
   $ cnpm install webpack -g
   ````

2. 使用webpack

   ````
   $ cnpm install webpack webpack-dev-server --save-dev //将webpack增加到开发依赖中
   ````

3. 修改目录结构 (增加前端页面目录 client , 数据库服务目录 controller , 打包压缩后文件保存目录dis)

   ```
   修改后目录结构为：
   .
   ├── app.js
   ├── bin
   │   └── www
   ├── package.json
   │
   ├── controller
   │	└── db.js
   │
   ├── dis
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
       └── layout.ejs
       
   ```

   ​

4. 根目录创建 webpack.config.js

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
           index: './client/index.jsx', // 相对路径
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

   ​

   ​

#### 3. 前端构建 

​	**安装基础依赖** 

​	// react 相关

​	$ cd app

​	$ cd app cnpm install react react-dom --save



​	// webpack 相关

​	$ cnpm install webpack-dev-server webpack --save-dev

​	$ cnpm install babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react babel-polyfill --save-dev

 	

​	// gulp 相关

​	$ cnpm install gulpjs/gulp-cli -g

​	$ cnpm install gulpjs/gulp.git#4.0 --save-dev

​	$ npm install gulp-util del gulp-rename gulp-less gulp-connect connect-rest@1.9.5  --save-dev
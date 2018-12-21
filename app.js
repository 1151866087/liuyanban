// Express 不是Node的核心模块
// 它安装在 node_modules

// 1. 引包
var express = require('express');
var fs = require('fs');

// // 导入 body-parser 中间件
// var bodyParser = require('body-parser');
// 导入路由模块
var router = require('./router');

// 2. 创建一个服务器应用程序实例

var app = express();
// 挂载 router 到 app 上
app.use(router);
//使用 express-art-template 渲染 html 文件
app.engine('html', require('express-art-template'));
// express 可以直接开放静态资源文件夹
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

// // express 实例使用 body-parser 中间件
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json  把application 转成 json 格式
// app.use(bodyParser.json())



// 4. 创建基本路由

// 3. 开启端口
app.listen(3000, function () {
    console.log('Express Server is running');
})




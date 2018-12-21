/* 
    router.js 
    作用：存放所有的路由
*/
// 1. 引包
var express = require('express');

// 2. 创建路由容器
var router = express.Router();

var Comments = require('./comments');
// 导入 body-parser 中间件
var bodyParser = require('body-parser');
// 3. 把路由挂载到 router 路由容器上
// 其中 get 是请求的方式

// express 实例使用 body-parser 中间件
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json  把application 转成 json 格式
router.use(bodyParser.json())



router.get('/', function (req, res) {
    // 添加了 app.engine引擎之后，art-template 给 express 提供了
    // render 方法
    // express 默认你的页面放在 views
    // app.set('views', assets);
    res.render('index.html', {
        // key: value
        comments: Comments
    });
})
router.get('/post', function (req, res) {
    // res.end('这里是post页');
    // 这里的 send 是 Express 提供的一个方法
    // 用于向客户端写入数据，并且已经自己申明了响应头
    res.render('post.html');
})
router.post('/post', function (req, res) {
    // res.send('拿到数据了，这里是 post 请求的 post页面');
    var comment = req.body;
    Comments.unshift(comment);
    res.redirect('/');
})

// 4. 导出
module.exports = router;

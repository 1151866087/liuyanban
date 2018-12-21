### app.js

#### 作用：项目的入口文件

1. 安装
```
npm i express -s
npm i art-template express-art-template -s
```
2. 配置 express 服务器

3. 添加了 app.engine

4. 开发了 资源目录 /node_modules/

5. 创建了一个 comments 储存评论文件

6. 渲染 comments 到 index 页面上

7. 渲染 post 页面到 /post 路由上

8. 使用 body-parser 中间件 获取表单数据
+ 安装
```
npm i body-parser -s
```
+ 使用
```
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```
9. 项目结构分离 , router.js comments.js
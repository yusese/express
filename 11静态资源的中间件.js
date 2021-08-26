// 路由中间件  （书写）
//   （所有的路由都使用的·中间件）  全局的中间件，调用 app.use(中间件名字)
//   （部分路由使用的中间件）  局部中间件，调用  把中间件的名字放在路由的第二个参数位置上

// 从出身的角度：第三方的中间件  和  内置中间件 （静态资源的中间件  app.use(express.static())）

// 静态资源（长时间不发生改变的资源）
// html css logo 字体图标

// 动态资源（数据）

// **如果是静态资源，那就是用静态资源的中间件去处理页面
// **如果当前是动态资源，那就是用get post all ，去处理页面的响应

// 1.引入express
const { request, response } = require('express');
let express = require('express');
// 2.创建服务对象
let app = express();

// 3.创建一个路由规则
// 你要有静态资源页面 ，在static文件夹中

// 使用静态资源的中间件
// express。static() 参数为：静态资源的路径（可以绝对可以相对）
// app.use(express.static('./static'))

// 定义中间件（内置）
let result = express.static(__dirname + '/.static')
    // 调用中间件
app.use(result)

app.get('/index.html', (request, response) => {
        response.send('这是首页哦')
    })
    // 一旦静态资源的路径 和 get路由的路径 相同时， 谁在上面谁生效***


// 4.设置端口号  启动服务
app.listen(8080, () => {
    console.log('服务启动成功，端口为8080...');
})
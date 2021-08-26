// 引入express
let express = require('express');
// 创建服务对象
let app = express();
// 创建一个路由规则
// get 请求方式
app.get('/', (request, response) => {
        // 设置响应
        response.end('hello get')
            // send 是express提供的设置响应体的方法  是设置编码集 和 end（）的组合
        response.send('hello get')

    })
    // post 请求方式
app.post('/login', (require, response) => {
    // 设置响应
    response.end('hello post')
})

// all ：不管是什么样的请求方式，只要请求的路径是 /index   都可以访问
app.all('/index', (require, response) => {
        // 设置响应
        response.end('hello all')
    })
    // *任意  （除了上面三种情况以外的）
app.get('*', (require, response) => {
        // 设置响应
        response.end('404')
    })
    // 设置端口号，启动服务
app.listen(8080, () => {
    console.log('启动成功，端口8080....');
})
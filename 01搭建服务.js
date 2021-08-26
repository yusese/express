// 初始化
// 引入express
const { response } = require('express');
let express = require('express');
// 创建服务对象
let app = express();
// 创建一个路由规则
app.get('/', (request, response) => {
        // 设置响应
        response.end('hello get')
    })
    // 设置端口号，启动服务
app.listen(8080, () => {
    console.log('启动成功，端口8080....');
})
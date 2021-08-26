// 引入express
// const { request } = require('express');
let express = require('express');

// 引入url  (用于下面拆解  路径区域 和 查询字符串区域)
let url = require('url')
    // 创建服务对象
let app = express();
// 创建一个路由规则
app.get('/s', (request, response) => {

        // 请求行
        // 请求类型，请求方法
        console.log(request.method);

        // 请求的url
        console.log(request.url); ///s?wd=bike&price=500

        // 路径区域
        console.log(url.parse(request.url, true).pathname);
        // 查询字符串区域  （下面两种返回结果是一样的）
        console.log(url.parse(request.url, true).query);
        console.log(request.query); //express提供的新的处理方式

        // 请求的版本
        console.log(request.httpVersion);

        // 请求头
        console.log(request.headers);
        console.log(request.headers['cache-control']);
        // express 提供了新的请求头的处理方式
        console.log(request.get('cache-control'));

        // 请求体  (暂时获取不到，学完中间件之后才能操作)


        // 设置响应
        response.send('请求报文')
    })
    // 设置端口号，启动服务
app.listen(8080, () => {
    console.log('启动成功，端口8080....');
})
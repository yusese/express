//1.引入 express 包
let express = require('express');
//2.创建服务对象
let app = express();
//3.创建一个路由规则
app.get('/', (request, response) => {
        //响应行（版本为默认）
        //响应的状态码
        // response.statusCode = 250;
        //响应的状态码(express)
        // response.status(260);
        // //状态码对应的字符串
        // response.statusMessage = 'ko';

        //设置响应头
        // response.setHeader('abc','def');
        // response.set('abc1','def1');

        //设置响应体
        // response.write('aaa');
        // response.write('bbb');
        // response.write('ccc')
        // response.end('xxx');
        // response.send('yyyyy'); // send()  是 编码部分 和 end 组合

        //express 给我们提供的设置响应体的方法
        //文件下载
        //response.download('./package.json');
        //对于文本内容的响应 sendFile 使用的时候，路径必须是绝对路径
        //response.sendFile(__dirname + '/package.json');
        //重定向
        response.redirect('https://www.baidu.com');


    })
    //4.设置端口号，启动服务
app.listen(8080, () => {
    console.log('服务启动成功，端口为8080。。。。');
})
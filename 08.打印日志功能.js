//下载 moment ： npm i moment
//引入 moment 包
let moment = require('moment');
//引入 url 模块
let url = require('url');
let fs = require('fs')

//1.引入 express 包
let express = require('express');
//2.创建服务对象
let app = express();

//声明中间件（封装）
let outLog = (request,response,next) => {
    //功能区域
    //格式化时间: moment
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    let path = url.parse(request.url,true).pathname;
    let str = `[${time}] ${path} \r\n`;

    //把记录的信息，保存到一个文件中
    fs.writeFile('./index.txt',str,{flag:'a'},err =>{
        if(err) throw err;
        console.log('写入成功');
    })

    //调用next
    next();
}
//中间的调用
app.use(outLog)

//需求：记录一下每次我们访问路由的时间 和 路径
//格式 ：[2021-08-26 16:26:53] /one
//3.创建一个路由规则
app.get('/one',(request,response) =>{
    


    //设置响应
    response.end('hello one')
})
app.get('/two',(request,response) =>{
    //设置响应
    response.end('hello two')
})
app.get('/three',(request,response) =>{
    //设置响应
    response.end('hello three')
})



//4.设置端口号，启动服务
app.listen(8080,() =>{
    console.log('服务启动成功，端口为8080。。。。');
})

